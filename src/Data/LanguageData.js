
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
        DiffLevels: ['Очень просто (6 - 10 лет)',
                    'Просто (11 - 17 лет)',
                    'Нормально (18-30 лет)',
                    'Сложно (31 - 50 лет)',
                    'Очень сложно (51 - 90 лет)'],
        Language: 'Язык',
        Questions: 'Вопросы',
        HardestLevel: 'Максимальная сложность',
        Skin: 'Скин',
        Start: 'Старт',
  },
    {   //  Ukrainian
        Difficluty: 'Складнiсть',
        DiffLevels: ['Дуже легко (6 - 10 рокiв)',
                    'Легко (11 - 17 рокiв)',
                    'Звичайний (18-30 рокiв)',
                    'Важко (31 - 50 рокiв)',
                    'Дуже важко (51 - 90 рокiв)'],
        Language: 'Мова',
        Questions: 'Питання',
        HardestLevel: 'Максимальна складнiсть',
        Skin: 'Скiн',
        Start: 'Старт',
  }]
  return captions[lg];
}

export default lgData;