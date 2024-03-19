import React from 'react';
import PropTypes from 'prop-types';
import preiodicTable from './preidictable'

function PeriodicText({ text }) {
  const lowerText = text ? text.toLowerCase() : '';
  let bestLength = 0;
  let bestElem = '';
  preiodicTable.forEach((element) => {
    const lowerElement = element.toLowerCase()
    if (lowerElement.length > bestLength && lowerText.includes(lowerElement)) {
      bestLength = lowerElement.length;
      bestElem = element;
    }
  })
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
    const lowerElement = bestElem.toLowerCase()
    const subText = lowerText?.split(lowerElement);
    return(
      <p className='periodic-text'>{subText[0]}<span className='element'>{bestElem}</span>{subText[1]}</p>
    )
  } else {
    return (
      <p className='periodic-text'>{text}</p>
    )
  }

}

PeriodicText.propTypes = {
  text: PropTypes.string
}

export default PeriodicText;
