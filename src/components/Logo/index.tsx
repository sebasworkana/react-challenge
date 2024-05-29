import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/types';
import periodicElements from '../../data/periodicElements.json';
import { updateFirstName, updateLastName } from '../../store/actions';

import '../../App.css';

const periodicElementsSymbols = periodicElements.elementsSymbols;

function Logo() {
  const dispatch = useDispatch();
  const firstName = useSelector((state: RootState) => state.firstName);
  const lastName = useSelector((state: RootState) => state.lastName);
  const [firstSymbol, setFistSymbol] = useState('Br');
  const [lastSymbol, setLastSymbol] = useState('Ba');

  useEffect(() => {
    const checkSymbols = () => {
      const firstNameSymbol = periodicElementsSymbols.find(symbol => symbol === firstName.slice(0, 2));
      const lastNameSymbol = periodicElementsSymbols.find(symbol => symbol === lastName.slice(0, 2));

      if (firstNameSymbol && lastNameSymbol) {
        setFistSymbol(firstNameSymbol);
        setLastSymbol(lastNameSymbol);
      } else {
        dispatch(updateFirstName('Breaking'));
        dispatch(updateLastName('Bad'));
        alert('Error: Symbols not found');
      }
    };

    if (firstName && lastName) {
      checkSymbols();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstName, lastName]);
  
  return (
    <div className="text-white text-center mb-8">
        <div className="flex items-center justify-center mb-2">
            <div className="bg-green text-8xl font-bold">{firstSymbol}</div>
            <div className="text-8xl font-bold">{firstName.substring(2)}</div>
        </div>
        <div className="flex items-center justify-center">
            <div className="bg-green text-8xl font-bold">{lastSymbol}</div>
            <div className="text-8xl font-bold">{lastName.substring(2)}</div>
        </div>
    </div>
  );
}

export default Logo;
