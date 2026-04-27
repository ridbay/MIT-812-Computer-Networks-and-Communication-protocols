import { StudyData, Flashcard, MCQ, ShortAnswer } from '../types';

export const parseMarkdown = (markdown: string): StudyData => {
  const lines = markdown.split('\n');
  const sections: StudyData = {
    overview: [],
    summaries: [],
    flashcards: [],
    mcqs: [],
    shortAnswers: [],
    revisionSheet: [],
    comparisonTable: []
  };

  let currentSection: string | null = null;
  let currentSubSection: string | null = null;
  let currentItem: any = null;

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed && !currentItem) return;

    // Detect Main Sections
    if (trimmed.startsWith('# ')) {
      const title = trimmed.replace('# ', '').toLowerCase();
      if (title.includes('overview')) currentSection = 'overview';
      else if (title.includes('summary') || title.includes('summaries') || title.includes('guide')) currentSection = 'summaries';
      else if (title.includes('flashcards')) currentSection = 'flashcards';
      else if (title.includes('quiz')) currentSection = 'quiz';
      else if (title.includes('revision')) currentSection = 'revisionSheet';
      else if (title.includes('comparison')) currentSection = 'comparisonTable';
      currentItem = null; // Reset current item when entering a new section
      return;
    }

    // Detect Sub Sections
    if (line.startsWith('## ')) {
      currentSubSection = line.replace('## ', '').trim();
      if (currentSection === 'quiz') {
        if (currentSubSection.includes('Multiple-Choice') || currentSubSection.toLowerCase().includes('choice')) currentSection = 'mcqs';
        else if (currentSubSection.includes('Short-Answer') || currentSubSection.toLowerCase().includes('short')) currentSection = 'shortAnswers';
      }
      if (currentSection === 'summaries') {
        sections.summaries.push({ title: currentSubSection, content: [] });
      }
      return;
    }

    // Parsing Logic based on current section
    if (currentSection === 'overview') {
      if (trimmed) sections.overview.push(line);
    } 
    else if (currentSection === 'summaries') {
      const lastSummary = sections.summaries[sections.summaries.length - 1];
      if (lastSummary) lastSummary.content.push(line);
    } 
    else if (currentSection === 'flashcards') {
      if (trimmed.startsWith('**Q:**') || trimmed.startsWith('Q:') || (trimmed.match(/^\d+\./) && trimmed.includes('Q:'))) {
        const question = trimmed.replace(/.*Q:\s*/, '').replace(/\s*\*\*/g, '').trim();
        currentItem = { question, answer: '', topic: currentSubSection } as Flashcard;
        sections.flashcards.push(currentItem);
      } else if (trimmed.startsWith('**A:**') || trimmed.startsWith('A:')) {
        if (currentItem) {
          currentItem.answer = trimmed.replace(/.*A:\s*/, '').replace(/\s*\*\*/g, '').trim();
        }
      }
    } 
    else if (currentSection === 'mcqs') {
      const mcqMatch = trimmed.match(/^\d+\.\s+(.*)/);
      if (mcqMatch && !trimmed.includes('**Answer:**') && !trimmed.includes('**Explanation:**')) {
        currentItem = { 
          question: mcqMatch[1].replace(/\*\*/g, ''), 
          options: {}, 
          answer: '', 
          explanation: '',
          id: sections.mcqs.length + 1
        } as MCQ;
        sections.mcqs.push(currentItem);
      } else if (trimmed.match(/^[A-D]\.\s/)) {
        if (currentItem) {
          const letter = trimmed[0];
          currentItem.options[letter] = trimmed.substring(3).trim();
        }
      } else if (trimmed.includes('**Answer:**')) {
        if (currentItem) currentItem.answer = trimmed.replace(/.*\*\*Answer:\*\*\s*/, '').trim();
      } else if (trimmed.includes('**Explanation:**')) {
        if (currentItem) currentItem.explanation = trimmed.replace(/.*\*\*Explanation:\*\*\s*/, '').trim();
      }
    } 
    else if (currentSection === 'shortAnswers') {
      const saMatch = trimmed.match(/^\d+\.\s+(.*)/);
      if (saMatch && !trimmed.includes('**Guide:**')) {
        currentItem = { question: saMatch[1].replace(/\*\*/g, ''), guide: '' } as ShortAnswer;
        sections.shortAnswers.push(currentItem);
      } else if (trimmed.includes('**Guide:**')) {
        if (currentItem) currentItem.guide = trimmed.replace(/.*\*\*Guide:\*\*\s*/, '').trim();
      } else if (trimmed.startsWith('A:') && currentSection === 'shortAnswers') {
        // Handle Q/A style in short answers if needed
        if (currentItem) currentItem.guide = trimmed.replace('A:', '').trim();
      }
    }
    else if (currentSection === 'revisionSheet') {
      sections.revisionSheet.push(line);
    }
    else if (currentSection === 'comparisonTable') {
      sections.comparisonTable.push(line);
    }
  });

  return sections;
};
