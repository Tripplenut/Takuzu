import { useState } from "react";

function Grid() {

    const handleClick = () => {
        console.log("yo mista white")
    }

    const [name, setName] = useState("jesse");
    const [emotion, setEmotion] = useState("angry")
    const anotherClick=()=>{
        setName("pinkman")
        setEmotion("sad")
    }

    return(
        <div className="base">
            <button className="tile" id="1" onClick={()=>{handleClick()}}>1</button>
            <button className="tile" id="2" onClick={()=>{handleClick()}}>2</button>
            <button className="tile" id="3" onClick={()=>{handleClick()}}>3</button>
            <button className="tile" id="4" onClick={()=>{handleClick()}}>4</button>
            <button className="tile" id="5" onClick={()=>{handleClick()}}>5</button>
            <button className="tile" id="6" onClick={()=>{handleClick()}}>6</button>
            <button className="tile" id="7" onClick={()=>{handleClick()}}>7</button>
            <button className="tile" id="8" onClick={()=>{handleClick()}}>8</button>
            <button className="tile" id="9" onClick={()=>{handleClick()}}>9</button>
            <button className="tile" id="10" onClick={()=>{handleClick()}}>10</button>
            <button className="tile" id="11" onClick={()=>{handleClick()}}>11</button>
            <button className="tile" id="12" onClick={()=>{handleClick()}}>12</button>
            <button className="tile" id="13" onClick={()=>{handleClick()}}>13</button>
            <button className="tile" id="14" onClick={()=>{handleClick()}}>14</button>
            <button className="tile" id="15" onClick={()=>{handleClick()}}>15</button>
            <button className="tile" id="16" onClick={()=>{handleClick()}}>16</button>
        </div>
    );
}

export default Grid