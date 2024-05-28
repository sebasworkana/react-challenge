/* eslint-disable linebreak-style */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { setWord1, setWord2, setBreakify } from "../../../store/actions/word";
import "../styles.css";

function Inputs() {
    const dispatch = useDispatch();
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const handleBreakify = () => {
        if(input1 && input2){
            dispatch(setBreakify(true));
            setTimeout(() => {
                dispatch(setBreakify(false));
            }, 900);
        } else {
            Swal.fire("Escribe las palabras en los inputs");
        }
    };

    useEffect(() => {
        dispatch(setWord1(input1));
    }, [input1]);

    useEffect(() => {
        dispatch(setWord2(input2));
    }, [input2]);

    return (
        <>
            <div className="flex flex-row div-inputs">
                <div>
                    <label className="label-inputs">First Name</label>
                    <input
                        value={input1}
                        type="text"
                        pattern="\S+"
                        onChange={(e) => setInput1(e.target.value.replace(/\s+/g, ""))}
                    />
                </div>
                <div>
                    <label className="label-inputs">Second Name</label>
                    <input
                        value={input2}
                        type="text"
                        pattern="\S+"
                        onChange={(e) => setInput2(e.target.value.replace(/\s+/g, ""))}
                    />
                </div>
            </div>
            <div className="block div-button">
                <button onClick={handleBreakify}>Breakify</button>
            </div>
        </>
    );
}

export default Inputs;