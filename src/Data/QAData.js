
const QAData = (lg = 0) => {
    const QA =  [[[{Q: 'Title 1'},
                   {Q: 'Title 2'},
                   {Q: 'Title 3'}],

                [{Q: 'Title 2.1'},
                 {Q: 'Title 2.2'},
                 {Q: 'Title 2.3'},],

                [],

                [],

                []],


                [[{Q: 'Title 1'},
                   {Q: 'Title 2'},
                   {Q: 'Title 3'}],

                  [{Q: 'Title 1'},
                   {Q: 'Title 2'},
                   {Q: 'Title 3'},
                   {Q: 'Title 4'},
                   {Q: 'Title 5'},
                   {Q: 'Title 6'}],

                  [{Q: 'Title 4.1'}]],


                [[],[]]];
    return QA[lg];
}
export default QAData;