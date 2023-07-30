import { songs } from "../songs.js";
import { setTrack } from "./AudFunc.js";

function AdminForm(){
    const AddSong = () => {
        let title = document.getElementById("t")
        let artist = document.getElementById("a")
        let url = document.getElementById("u")
        songs.push({title: title.value, artist: artist.value, url: "files/" + url.value + ".mp3", id: songs.length-1});
        title.value = "";
        artist.value = "";
        url.value = "";
        LePrint();
    }
    const update = () => {
        let t = document.getElementById("t").value;
        let a = document.getElementById("a").value;
        document.getElementById("u").value = `${a} - ${t}`;
    }
    const LePrint = () => {
        let value = "";
        songs.forEach( x => value += JSON.stringify(x)+",\n");
        console.log(value);
    }
    const GoHide = () => {
        let leForm = document.getElementById("leForm");
        if(leForm.style.visibility === 'visible'){
            leForm.style.visibility = "hidden";
        }
        else{
            leForm.style.visibility = "visible";
        }
    }
    const leSkip = () =>{
        let val = document.getElementById('num');
        setTrack(Number(val.value));
        val.value = "";
        document.getElementById('leForm').style.visibility = 'hidden';
    }
    return (
        <>
            <div>
               <button onClick={GoHide} id="clickHide" type="button">~</button>
            </div>
            <form id="leForm" style={{visibility: "hidden"}}>
                <input type="text" id="num" className="txt" placeholder="Enter #"/>
                <input type="button" id="submit" value={"Click"} onClick={leSkip}/>
                <br></br>
                <input type="text" id = "t" className="txt" onKeyUp={update} placeholder="Title"/>
                <input type="text" id = "a" className="txt" onKeyUp={update} placeholder="Artist"/>
                <input type="text" id = "u" className="txt" placeholder="URL"/>
                <br></br>
                <input type="button" id="add" value={"Click To Add"} onClick={AddSong}></input>
                <input type="button" id="print" value={"Click to Generate"} onClick={LePrint}></input>
            </form>
        </>
    )
}

export default AdminForm;