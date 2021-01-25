import React from 'react';
import QAData from "../Data/QAData.js";
import lgData from "../Data/LanguageData";

function QCount(props) {
  const {lg} = props;
  const numQ = QAData(lg).reduce((sum,lvl)=> sum + lvl.length,0);
  return (
    <div>
        <div>{lgData(lg).Questions}: {numQ}</div>
        <div>{lgData(lg).HardestLevel}: {QAData(lg).length}</div>
    </div>
  );
}

export default QCount;