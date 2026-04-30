import sys
from pdfminer.high_level import extract_text

def extract_pdf_to_txt(pdf_path, txt_path):
    text = extract_text(pdf_path)
    with open(txt_path, 'w') as f:
        f.write(text)

if __name__ == "__main__":
    pdf_file = sys.argv[1]
    txt_file = sys.argv[2]
    extract_pdf_to_txt(pdf_file, txt_file)
