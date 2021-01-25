import React from 'react';


function LanguageData() {
  const captions = [
    {   //  English
        Questions: 'Questions',
        HardestLevel: 'Hardest level',
  },
    {   // Russian
        Questions: 'Вопросы',
        HardestLevel: 'Максимальная сложность',
  },
    {   //  Ukrainian
        Questions: 'Питання',
        HardestLevel: 'Максимальна складнiсть',
  }]
  return captions;
}

export default LanguageData;