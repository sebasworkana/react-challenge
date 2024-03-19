import React, { useState } from "react";
import { changeNames } from './redux/names';
import { useDispatch, useSelector } from "react-redux";

function NameForm() {
  const { firstName, lastName } = useSelector((state) => state.names.value);
  const dispatch = useDispatch();
  const [ temFirstName, setFirstName] = useState(firstName);
  const [ temLastName, setLastName] = useState(lastName);

 
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const info = Object.fromEntries(formData.entries());
    console.log(info);
    dispatch(changeNames(info))
  }
  return (
    <form className="name-form" method="post" onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="input">
          <label>First Name</label>
          <input name="firstName" value={temFirstName} onChange={e => setFirstName(e.target.value)}/>
        </div>
        <div className="input">
          <label>Last Name</label>
          <input name="lastName" value={temLastName} onChange={e => setLastName(e.target.value)}/>
        </div>
      </div>
      <button type="submit">Breakify</button>
    </form>
  )
}

export default NameForm;
