
function lgData(lg = 0) {
  const captions = [
    {   //  English
        Difficluty: 'Difficluty',
        DiffLevels: ['Extra Easy (6 - 10 years old)',
                    'Easy (11 - 17 years old)',
                    'Normal (18-30 years old)',
                    'Hard (31 - 50 years old)',
                    'Extra Hard (51 - 90 years old)'],
        Language: 'Language',
        Questions: 'Questions',
        HardestLevel: 'Hardest level',
        Skin: 'Skin',
        Start: 'Start',
  },
    {   // Russian
        Difficluty: 'Сложность',
        Language: 'Язык',
        Questions: 'Вопросы',
        HardestLevel: 'Максимальная сложность',
        Skin: 'Скин',
        Start: 'Старт',
  },
    {   //  Ukrainian
        Difficluty: 'Складнiсть',
        Language: 'Мова',
        Questions: 'Питання',
        HardestLevel: 'Максимальна складнiсть',
        Skin: 'Скiн',
        Start: 'Старт',
  }]
  return captions[lg];
}

export default lgData;