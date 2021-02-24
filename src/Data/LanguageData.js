
function lgData(lg = 0) {
  const captions = [
    {   //  English
        Language: 'Language',
        Questions: 'Questions',
        HardestLevel: 'Hardest level',
        Skin: 'Skin',
        Start: 'Start',
  },
    {   // Russian
        Language: 'Язык',
        Questions: 'Вопросы',
        HardestLevel: 'Максимальная сложность',
        Skin: 'Скин',
        Start: 'Старт',
  },
    {   //  Ukrainian
        Language: 'Мова',
        Questions: 'Питання',
        HardestLevel: 'Максимальна складнiсть',
        Skin: 'Скiн',
        Start: 'Старт',
  }]
  return captions[lg];
}

export default lgData;