function direct(x, y, c){
      return {
        N: (x,y) => [x, y - 1],
        S: (x,y) => [x, y + 1],
        W: (x,y) => [x - 1, y],
        E: (x,y) => [x + 1, y]
      }[c](x,y);
}

export default direct;