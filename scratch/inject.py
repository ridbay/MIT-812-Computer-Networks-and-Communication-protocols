import re
import sys

def inject_summaries(ts_file, md_file):
    with open(ts_file, 'r') as f:
        ts_content = f.read()
    
    with open(md_file, 'r') as f:
        new_summaries = f.read()

    # We want to replace everything from `# Summaries` up to the line right before `# Flashcards`
    pattern = re.compile(r'(# Summaries\n.*?\n)(?=# Flashcards)', re.DOTALL)
    
    # If pattern matches, replace it
    if pattern.search(ts_content):
        # Add two newlines before Flashcards to maintain spacing
        replaced = pattern.sub(new_summaries + "\n\n", ts_content)
        with open(ts_file, 'w') as f:
            f.write(replaced)
        print("Successfully injected summaries.")
    else:
        print("Could not find the bounds for replacement.")

if __name__ == "__main__":
    inject_summaries('src/data/studyPacket.ts', 'scratch/comprehensive_summaries.md')
