import './index.css';
import Printer from "../../components/printer";
import Form from "../../components/form";

function Breakify() {


    return (

        <div className="page">
            <div className="content">
                <Printer/>
                <Form/>
            </div>
        </div>
    );
}

export default Breakify;
