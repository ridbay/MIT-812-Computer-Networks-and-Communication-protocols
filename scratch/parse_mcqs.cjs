const fs = require('fs');

const content = fs.readFileSync('/Users/ridbay/Projects/mit/mit812/Data_Communication_Networks_Complete_MCQ_Test.md', 'utf8');

const parseMCQs = (markdown) => {
  const sections = markdown.split(/---\n/);
  const questions = [];

  sections.forEach(section => {
    if (!section.includes('## Question')) return;

    const lines = section.split('\n').map(l => l.trim()).filter(l => l);
    const qIndex = lines.findIndex(l => l.startsWith('## Question'));
    if (qIndex === -1) return;

    const questionText = lines[qIndex + 1].replace(/\*\*/g, '');
    
    const options = {};
    const optionLines = lines.filter(l => l.match(/^- (\*\*)?([a-e])\./));
    optionLines.forEach(l => {
      const match = l.match(/^- (\*\*)?([a-e])\.\s+(.*)/);
      if (match) {
        let text = match[3].replace(/\*\*/g, '').replace(' ✓', '');
        options[match[2].toUpperCase()] = text;
      }
    });

    const answerLine = lines.find(l => l.includes('**Answer:'));
    const answer = answerLine ? answerLine.match(/Answer:\s*([A-E])/)[1] : '';

    const explanationLine = lines.find(l => l.includes('**Explanation:'));
    const explanation = explanationLine ? explanationLine.replace('**Explanation:**', '').trim() : '';

    questions.push({
      id: questions.length + 1,
      question: questionText,
      options,
      answer,
      explanation
    });
  });

  return questions;
};

const questions = parseMCQs(content);
const jsContent = `export const mcqQuestions = ${JSON.stringify(questions, null, 2)};`;
fs.writeFileSync('/Users/ridbay/Projects/mit/mit812/src/data/mcqData.js', jsContent);
console.log('Successfully parsed ' + questions.length + ' questions.');
