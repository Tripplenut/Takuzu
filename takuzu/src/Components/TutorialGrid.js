function TutorialGrid({rows, cols, puzzle}) {
    let tiles = [];
    let tileVals = [];
    for(let i=0; i<rows; i++){
      tiles.push([]);
      tileVals.push([]);
      for(let j=0; j<cols; j++){
        tileVals[i].push(puzzle[i][j]);
        let val = puzzle[i][j];
        if(val===2){val=null;}
        tiles[i].push(
          <div className="t_tile" id={"n"+puzzle[i][j]}>
            {val}
          </div>);
      }
    }

    return(
        <div id="t_base1">
            {tiles}
        </div>
    );
}

export default TutorialGrid;