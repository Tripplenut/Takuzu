// React imports
import './Grid.css';

function Grid() {

    const handleClick = () => {
        console.log("yo mista white")
    }

    return(
        <div className="base">
                <button className="tile" onClick={()=>{handleClick()}}>1</button>
                <button className="tile" onClick={()=>{handleClick()}}>2</button>
                <button className="tile" onClick={()=>{handleClick()}}>3</button>
                <button className="tile" onClick={()=>{handleClick()}}>4</button>
                <button className="tile" onClick={()=>{handleClick()}}>5</button>
                <button className="tile" onClick={()=>{handleClick()}}>6</button>
                <button className="tile" onClick={()=>{handleClick()}}>1</button>
                <button className="tile" onClick={()=>{handleClick()}}>2</button>
                <button className="tile" onClick={()=>{handleClick()}}>3</button>
                <button className="tile" onClick={()=>{handleClick()}}>4</button>
                <button className="tile" onClick={()=>{handleClick()}}>5</button>
                <button className="tile" onClick={()=>{handleClick()}}>6</button>
                <button className="tile" onClick={()=>{handleClick()}}>1</button>
                <button className="tile" onClick={()=>{handleClick()}}>2</button>
                <button className="tile" onClick={()=>{handleClick()}}>3</button>
                <button className="tile" onClick={()=>{handleClick()}}>4</button>
                <button className="tile" onClick={()=>{handleClick()}}>5</button>
                <button className="tile" onClick={()=>{handleClick()}}>6</button>
                <button className="tile" onClick={()=>{handleClick()}}>1</button>
                <button className="tile" onClick={()=>{handleClick()}}>2</button>
                <button className="tile" onClick={()=>{handleClick()}}>3</button>
                <button className="tile" onClick={()=>{handleClick()}}>4</button>
                <button className="tile" onClick={()=>{handleClick()}}>5</button>
                <button className="tile" onClick={()=>{handleClick()}}>6</button>
                <button className="tile" onClick={()=>{handleClick()}}>1</button>
                <button className="tile" onClick={()=>{handleClick()}}>2</button>
                <button className="tile" onClick={()=>{handleClick()}}>3</button>
                <button className="tile" onClick={()=>{handleClick()}}>4</button>
                <button className="tile" onClick={()=>{handleClick()}}>5</button>
                <button className="tile" onClick={()=>{handleClick()}}>6</button>
                <button className="tile" onClick={()=>{handleClick()}}>1</button>
                <button className="tile" onClick={()=>{handleClick()}}>2</button>
                <button className="tile" onClick={()=>{handleClick()}}>3</button>
                <button className="tile" onClick={()=>{handleClick()}}>4</button>
                <button className="tile" onClick={()=>{handleClick()}}>5</button>
                <button className="tile" onClick={()=>{handleClick()}}>6</button>
        </div>
    );
}

export default Grid