// React imports
//import { useState } from 'react';
import './Grid.css';
import SBS1 from './Presets.js';

// Component imports
import Tile from './Tile';

function Grid({n}) {
    var tiles = [];
    for(var i=0; i<n; i++){
        tiles.push([]);
        for(var j=0; j<n; j++){
            tiles[i].push(<Tile value_={SBS1[i][j]}/>);
        }
    }
    return(
        <div className="base">{tiles}</div>
    );
}

export default Grid