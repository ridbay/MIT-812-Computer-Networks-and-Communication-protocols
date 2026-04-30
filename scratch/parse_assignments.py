import re
import json

def parse_markdown_to_ts(md_filepath, ts_filepath):
    with open(md_filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split into sections
    section_splits = re.split(r'^##\s+(Section\s+\d+:\s+.*)$', content, flags=re.MULTILINE)
    
    # section_splits[0] is preamble before any '## Section'
    sets = []
    
    for i in range(1, len(section_splits), 2):
        section_title = section_splits[i].strip()
        section_content = section_splits[i+1]
        
        # Split into questions
        q_splits = re.split(r'^###\s+(Question\s+.*)$', section_content, flags=re.MULTILINE)
        
        items = []
        for j in range(1, len(q_splits), 2):
            q_title = q_splits[j].strip()
            # Everything else until next question is the body
            q_body = q_splits[j+1].strip()
            
            # The question text itself is usually part of the title, like "Question 1: What is..."
            # Let's clean it up
            question_text = q_title
            
            # For the answer, look for "**Answer:**" or just use the body
            answer_text = q_body
            if "**Answer:**" in answer_text:
                parts = answer_text.split("**Answer:**", 1)
                question_desc = parts[0].strip()
                if question_desc:
                    question_text += "\n" + question_desc
                answer_text = parts[1].strip()
            
            # escape backticks and $ for template literals just in case, but we will write it out as a json array and convert
            items.append({
                "question": question_text,
                "answer": answer_text
            })
            
        sets.append({
            "id": len(sets) + 1,
            "title": section_title,
            "items": items
        })
        
    # Read the original TS file
    with open(ts_filepath, 'r', encoding='utf-8') as f:
        ts_content = f.read()
        
    # Find the const assignmentSets: AssignmentSet[] = [ ... ];
    start_str = 'const assignmentSets: AssignmentSet[] = ['
    end_str = '  ];\n\n  const toggleExpand'
    
    start_idx = ts_content.find(start_str)
    end_idx = ts_content.find(end_str)
    
    if start_idx == -1 or end_idx == -1:
        print("Could not find assignmentSets array in ts file")
        return
        
    # Format the new sets
    json_str = json.dumps(sets, indent=2)
    # We need to make it look like valid TS object array, JSON is valid TS
    # But let's format it nicer
    formatted_ts = f"const assignmentSets: AssignmentSet[] = {json_str};\n\n  const toggleExpand"
    
    new_ts_content = ts_content[:start_idx] + formatted_ts + ts_content[end_idx + len(end_str):]
    
    with open(ts_filepath, 'w', encoding='utf-8') as f:
        f.write(new_ts_content)
        
    print(f"Successfully updated {ts_filepath} with {len(sets)} sections.")

if __name__ == "__main__":
    parse_markdown_to_ts('Data Communication and Computer Networks Assignment Answers.md', 'src/components/modules/Assignment.tsx')
