function Grid() {
    const baseStyle = {
        color: 'aqua',
        height: '420px',
        width: '420px',
        backgroundColor: 'azure',
        borderRadius: '10%',
        textAlign: 'center'
    }
      
    const tileStyle = {
        color: 'aquamarine',
        height: '50px',
        width: '50px',
        margin: '2%',
        borderRadius: '30%',
        backgroundColor: '#119ad5',
        border: '0px',
      }

    const handleClick = () => {
        console.log("yo mista white")
    }

    return(
        <div className="base" style={baseStyle}>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>1</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>2</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>3</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>4</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>5</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>6</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>1</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>2</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>3</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>4</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>5</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>6</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>1</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>2</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>3</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>4</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>5</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>6</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>1</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>2</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>3</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>4</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>5</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>6</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>1</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>2</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>3</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>4</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>5</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>6</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>1</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>2</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>3</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>4</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>5</button>
                <button className="tile" style={tileStyle} onClick={()=>{handleClick()}}>6</button>
        </div>
    );
}

export default Grid