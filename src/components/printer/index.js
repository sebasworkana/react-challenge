import './index.css'
import {useSelector} from "react-redux";
import Writer from "../writer";


export default function Printer () {

    const working = useSelector(state => state.application.working);

    return (

        <div>

            {
                working && (

                    <p>processing...</p>

                )
            }

            {
                (!working) && (

                    <Writer/>

                )
            }

        </div>
    );
}
