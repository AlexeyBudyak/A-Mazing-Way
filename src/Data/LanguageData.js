
function lgData(lg = 0) {
  const captions = [
    {   //  English
        Language: 'Language',
        Questions: 'Questions',
        HardestLevel: 'Hardest level',
        Skin: 'Skin',
  },
    {   // Russian
        Language: 'Язык',
        Questions: 'Вопросы',
        HardestLevel: 'Максимальная сложность',
        Skin: 'Скин',
  },
    {   //  Ukrainian
        Language: 'Мова',
        Questions: 'Питання',
        HardestLevel: 'Максимальна складнiсть',
        Skin: 'Скiн',
  }]
  return captions[lg];
}

export default lgData;