/* eslint-disable linebreak-style */
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getWord1, getWord2, getStatusBreakify } from "../../../store/reselect";
import { getArrayWords } from "../../../functions";
import "../styles.css";

function TexView() {
    const word1 = useSelector(getWord1);
    const word2 = useSelector(getWord2);
    const isBreakify = useSelector(getStatusBreakify);
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const [listWords1, setListWords1] = useState([]);
    const [listWords2, setListWords2] = useState([]);

    const lookForWord = () => {
        const arrayWord1 = getArrayWords(word1);
        setListWords1([...arrayWord1]);
        const arrayWord2 = getArrayWords(word2);
        setListWords2([...arrayWord2]);
    };

    useEffect(() => {
        if (isBreakify) {
            lookForWord();
        }
    }, [isBreakify]);

    useEffect(() => {
        if (listWords1?.length) {
            const currentText = ref1.current.innerText;
            if (currentText) {
                const item = listWords1[0].toLowerCase();
                const newText = currentText.replace(item, `<span class="element-found">${item}</span>`);
                ref1.current.innerHTML = newText;
            }
        }
    }, [listWords1]);

    useEffect(() => {
        if (listWords2?.length) {
            const currentText = ref2.current.innerText;
            if (currentText) {
                const item = listWords2[0].toLowerCase();
                const newText = currentText.replace(item, `<span class="element-found">${item}</span>`);
                ref2.current.innerHTML = newText;
            }
        }
    }, [listWords2]);

    return (
        <div className="flex flex-column div-textView">
            <h1 ref={ref1}>
                {word1 ? word1 : <span style={{ opacity: .1 }}>Text here</span>}
            </h1>
            <h1 ref={ref2}>
                {word2 ? word2 : <span style={{ opacity: .1 }}>Text here</span>}
            </h1>
        </div>
    );
}

export default TexView;