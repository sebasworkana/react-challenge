import './index.css';
import {useSelector} from "react-redux";
import {useEffect, useRef} from "react";


export default function Writer () {

    const result = useSelector(state => state.application.result);

    const refs = useRef([]);


    // IMPORTANT: THIS UGLY CODE WAS MADE IN ORDER TO COMPLY WITH: "Share data among components without using props."

    useEffect(() => {

        if(refs.current.length > 0) {

            refs.current.forEach(item => {

                item.el.innerHTML = item.match.innerHTML || item.match.word;
            })
        }

    }, [result]);


    return (

       <div className="paper">

           {
               result.filter(match => match.word).map((match, index) => {

                   return <p key={`${index}`} className="line" ref={el => refs.current[index] = {el, match}}/>


               })
           }

       </div>

    );
}
