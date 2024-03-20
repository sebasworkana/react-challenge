import React from 'react';
import PropTypes from 'prop-types';
import periodicTable from './periodicTable';

function PeriodicText({ text }) {
  const lowerText = text ? text.toLowerCase() : '';
  let bestLength = 0;
  let bestElem = '';
  periodicTable.forEach((element) => {
    const lowerElement = element.toLowerCase();
    if (lowerElement.length > bestLength && lowerText.includes(lowerElement)) {
      bestLength = lowerElement.length;
      bestElem = element;
    }
  });
  /*
  for (const element of preidictable) {
    const lowerElement = element.toLowerCase()
    if (lowerText.includes(lowerElement)) {
      //@TODO Upgrade to not lost Uppercase
      const subText = lowerText?.split(lowerElement);
      return (
        <p className='periodic-text'>{subText[0]}<span className='element'>{element}</span>{subText[1]}</p>
      )
    }
  }
  */
  if (bestLength) {
    const lowerElement = bestElem.toLowerCase();
    const subText = lowerText?.split(lowerElement);
    const subTextWithCaps = [ text?.substr(0, subText[0].length), text?.substr(subText[0].length + bestElem.length)]
    return(
      <p className='periodic-text'>{subTextWithCaps[0]}<span className='element'>{bestElem}</span>{subTextWithCaps[1]}</p>
    );
  } else {
    return (
      <p className='periodic-text'>{text}</p>
    );
  }

}

PeriodicText.propTypes = {
  text: PropTypes.string
};

export default PeriodicText;
