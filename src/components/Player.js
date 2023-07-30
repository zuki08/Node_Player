import SongData from "./SongData.js"
import AdminForm from "./AdminForm.js";
import { Controls } from "./Controls.js";
function Player(){
    return(
        <>
            <div className="container text-center" id="mainCont">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <div className="card" id="cheese">
                            <SongData />
                            <br></br>
                            <Controls />
                            <AdminForm />
                        </div>
                    </div>
                    <div className="col-3">
                        <p id="playlist"></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Player