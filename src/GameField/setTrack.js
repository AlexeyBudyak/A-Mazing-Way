//import QAData from "../Data/QAData";

import GameField from "./GameField";

function direct(x, y, c){
     switch(c){
      case 'N': return [x,y-1];
      case 'S': return [x,y+1];
      case 'W': return [x-1,y];
      case 'E': return [x+1,y];
      default: return 'error';
    }
}

export default direct;
