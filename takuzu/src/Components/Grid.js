// React imports
import { useState } from 'react';
import './Grid.css';
import SBS1 from './Presets.js';

function Grid({n}) {
    var tiles = [];
    for(var i=0; i<n; i++){
        tiles.push([]);
        for(var j=0; j<n; j++){
            tiles[i].push(<button className="tile">{SBS1[i][j]}</button>)
        }
    }
    return(
        <div className="base">{tiles}</div>
    );
}

export default Grid