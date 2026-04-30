import re

def append_summary(ts_file, md_file):
    with open(ts_file, 'r') as f:
        ts_content = f.read()
    
    with open(md_file, 'r') as f:
        new_summaries = f.read()

    # Find the # Flashcards section and insert the new summaries before it
    pattern = re.compile(r'(?=# Flashcards)')
    
    if pattern.search(ts_content):
        # Add newlines around the injected content
        replaced = pattern.sub("\n\n" + new_summaries + "\n\n", ts_content, count=1)
        with open(ts_file, 'w') as f:
            f.write(replaced)
        print("Successfully injected formatted user summaries.")
    else:
        print("Could not find '# Flashcards'.")

if __name__ == "__main__":
    append_summary('src/data/studyPacket.ts', 'scratch/formatted_user_summary.md')
