function TutorialGrid({rows, cols, puzzle}) {
    let tiles = [];
    let tileVals = [];
    for(let i=0; i<rows; i++){
      tiles.push([]);
      tileVals.push([]);
      for(let j=0; j<cols; j++){
        tileVals[i].push(puzzle[i][j]);
        tiles[i].push(
          <div id="t_tile">
            {puzzle[i][j]}
          </div>);
      }
    }

    return(
        <div id="t_base1">
            {tiles};
        </div>
    );
}

export default TutorialGrid;