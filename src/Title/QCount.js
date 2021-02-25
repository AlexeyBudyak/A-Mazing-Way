import React from 'react';
import QAData from "../Data/QAData.js";
import lgData from "../Data/LanguageData";

function QCount(props) {
  const {lg,player} = props;
  const numQ = QAData(player.lg).reduce((sum,lvl)=> sum + lvl.length,0);
  return (
    <div>
        <div>{lgData(player.lg).Questions}: {numQ}</div>
        <div>{lgData(player.lg).HardestLevel}: {QAData(player.lg).length}</div>
    </div>
  );
}

export default QCount;