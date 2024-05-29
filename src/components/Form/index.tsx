import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFirstName, updateLastName } from '../../store/actions';

import { capitalizeFirstLetter } from '../../utils/strings';

import '../../App.css';

function Form() {
  const [firstName, setFistName] = useState('Breaking');
  const [lastName, setLastName] = useState('Bad');

  const dispatch = useDispatch();

  const handleBreakify = (e: any) => {// eslint-disable-line @typescript-eslint/no-explicit-any
    e.preventDefault();
    dispatch(updateFirstName(capitalizeFirstLetter(firstName)));
    dispatch(updateLastName(capitalizeFirstLetter(lastName)));
  }

  return (
    <form className="w-full max-w-md" onSubmit={handleBreakify}>
        <div className="flex justify-between mb-4 px-4">
            <div className="w-1/2 mr-2">
                <label htmlFor="firstName" className="block text-white mb-1">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFistName(e.target.value)}
                    placeholder=""
                    className="bg-gray text-black p-2 rounded w-full"
                />
            </div>
            <div className="w-1/2 ml-2">
                <label htmlFor="lastName" className="block text-white mb-1">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder=""
                    className="bg-gray text-black p-2 rounded w-full"
                />
            </div>
        </div>
        <button className="bg-secondgreen text-white p-2 mt-2 rounded w-full">
            Breakify
        </button>
    </form>
  );
}

export default Form;
