import React from "react";
import '../try.css'

function Plan(props) {
    return (
        <>
            {/* <div id="inputmar ">
                <l1 className="text-center">{props.values} </l1>
                <button type="submit" className="btn btn-danger mx-2" onClick={()=>{props.senddel(props.id)}}>Delete</button>
                <br />
            </div> */}
            <div className="container">
                <div className="row brow">
                    <div className="col-3 "></div>
                    <div className="col-6 bcol">
                        <div className="row shadow-lg rounded mx-auto">
                            <div className="col-10 ccol ">
                            <l1 className="text-start mt-3">{props.values} </l1>

                            </div>
                            <div className="col-2 ccol">
                            <button type="submit" className="btn btn-danger mx-3" onClick={()=>{props.senddel(props.id)}}>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 "></div>
                </div>
            </div>

        </>
    )
}

export default Plan