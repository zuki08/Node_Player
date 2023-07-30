import * as Utils from "./AudFunc";

function Controls(){
    return(
        <div className="btns">
            <button onClick={Utils.play} id="play" type="button">Play</button>
            <button onClick={Utils.paus} id="paus" type="button">Pause</button>
            <button onClick={Utils.load} id="load" type="button">Load</button>
            <button onClick={Utils.prev} id="prev" type="button">Prev</button>
            <button onClick={Utils.next} id="next" type="button">Next</button>
            <br></br>
            <button onClick={Utils.printList} id="print" type="button">Get PlayList</button>
        </div>
    )
}

export {Controls}