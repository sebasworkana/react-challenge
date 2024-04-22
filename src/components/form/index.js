import './index.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {processInput} from "../../thunks";


export default function Form () {

    const [firstname, setFirstname] = useState('');

    const [lastname, setLastname] = useState('');

    const dispatch = useDispatch();



    const onBreakify = event => {

        event.preventDefault();

        dispatch(processInput([firstname, lastname]))

    };


    return (

        <form className="form" onSubmit={onBreakify}>

            <div className="form__row form__row--inline">

                <div className="form__field">

                    <label>First Name</label>

                    <input type={'text'} value={firstname} onChange={e => setFirstname(e.target.value)} placeholder={'enter first name...'} data-testid="firsname-input"/>

                </div>

                <div className="form__field">

                    <label>Last Name</label>

                    <input type={'text'} value={lastname} onChange={e => setLastname(e.target.value)} placeholder={'enter last name...'} data-testid="lastname-input"/>

                </div>

            </div>

            <div className="form__row">

                <button type={'submit'} className={'form__button form__button--submit'} disabled={!firstname || !lastname}>Breakify</button>

            </div>

        </form>

    );
}
