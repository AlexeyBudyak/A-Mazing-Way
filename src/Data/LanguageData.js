
function lgData(lg = 0) {
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
  return captions[lg];
}

export default lgData;