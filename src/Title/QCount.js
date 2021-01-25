import React from 'react';
import QAData from "../Data/QAData.js";

function QCount(props) {
  const {lg} = props;
  const QA = QAData();
  const numQ = QA[lg].reduce((sum,lvl)=> sum + lvl.length,0);
  return (
    <div>
        <div>Questions: {numQ}</div>
        <div>Hardest level: {QA[lg].length}</div>
    </div>
  );
}

export default QCount;