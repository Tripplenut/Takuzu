import { Row } from "react-bootstrap";

function Grid() {
    const baseStyle = {
        color: aqua,
        height: '750px',
        width: '750px',
        backgroundColor: 'azure',
        borderRadius: '10%',
        textAlign: center,       
    }
      
    const tileStyle = {
        color: 'aquamarine',
        height: 50px;
        width: 50px;
        margin: 10px;
        border-radius: 30%;
        background-color: #119ad5;
        color: #ffffff;
        border: 0px;
      }
      
    {/*tile:hover {
        background-color: #0091ff;
      }
      
    .tile:active {
        background-color: #0077ff;
      }
    */}

    const handleClick = () => {
        console.log("yo mista white")
    }

    return(
        <div className="base">
            <Row>
                <button className="tile" id="1" onClick={()=>{handleClick()}}>1</button>
                <button className="tile" id="2" onClick={()=>{handleClick()}}>2</button>
                <button className="tile" id="3" onClick={()=>{handleClick()}}>3</button>
                <button className="tile" id="4" onClick={()=>{handleClick()}}>4</button>
                <button className="tile" id="5" onClick={()=>{handleClick()}}>5</button>
                <button className="tile" id="6" onClick={()=>{handleClick()}}>6</button>
            </Row>
            <Row>
                <button className="tile" id="7" onClick={()=>{handleClick()}}>7</button>
                <button className="tile" id="8" onClick={()=>{handleClick()}}>8</button>
                <button className="tile" id="9" onClick={()=>{handleClick()}}>9</button>
                <button className="tile" id="10" onClick={()=>{handleClick()}}>10</button>
                <button className="tile" id="11" onClick={()=>{handleClick()}}>11</button>
                <button className="tile" id="12" onClick={()=>{handleClick()}}>12</button>
            </Row>
            <Row>
                <button className="tile" id="13" onClick={()=>{handleClick()}}>13</button>
                <button className="tile" id="14" onClick={()=>{handleClick()}}>14</button>
                <button className="tile" id="15" onClick={()=>{handleClick()}}>15</button>
                <button className="tile" id="16" onClick={()=>{handleClick()}}>16</button>
                <button className="tile" id="17" onClick={()=>{handleClick()}}>17</button>
                <button className="tile" id="18" onClick={()=>{handleClick()}}>18</button>
            </Row>
            <Row>
                <button className="tile" id="19" onClick={()=>{handleClick()}}>19</button>
                <button className="tile" id="20" onClick={()=>{handleClick()}}>20</button>
                <button className="tile" id="21" onClick={()=>{handleClick()}}>21</button>
                <button className="tile" id="22" onClick={()=>{handleClick()}}>22</button>
                <button className="tile" id="23" onClick={()=>{handleClick()}}>23</button>
                <button className="tile" id="24" onClick={()=>{handleClick()}}>24</button>
            </Row>
            <Row>
                <button className="tile" id="25" onClick={()=>{handleClick()}}>25</button>
                <button className="tile" id="26" onClick={()=>{handleClick()}}>26</button>
                <button className="tile" id="27" onClick={()=>{handleClick()}}>27</button>
                <button className="tile" id="28" onClick={()=>{handleClick()}}>28</button>
                <button className="tile" id="29" onClick={()=>{handleClick()}}>29</button>
                <button className="tile" id="30" onClick={()=>{handleClick()}}>30</button>
            </Row>
            <Row>
                <button className="tile" id="31" onClick={()=>{handleClick()}}>31</button>
                <button className="tile" id="32" onClick={()=>{handleClick()}}>32</button>
                <button className="tile" id="33" onClick={()=>{handleClick()}}>33</button>
                <button className="tile" id="34" onClick={()=>{handleClick()}}>34</button>
                <button className="tile" id="35" onClick={()=>{handleClick()}}>35</button>
                <button className="tile" id="36" onClick={()=>{handleClick()}}>36</button>
            </Row>
        </div>
    );
}

export default Grid