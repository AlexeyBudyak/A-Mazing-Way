import React from 'react';


function QCount(props) {
  const {lg, QA} = props;
  const numQ = QA[lg].reduce((sum,lvl)=> sum + lvl.length,0);
  return (
    <div>
        <div>Questions: {numQ}</div>
        <div>Hardest level: {QA[lg].length}</div>
    </div>
  );
}

export default QCount;