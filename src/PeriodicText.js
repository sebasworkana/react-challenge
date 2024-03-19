import preidictable from './preidictable'

function PeriodicText({text}) {
  const lowerText = text?.toLowerCase();
  for(const element in preidictable) {
    const lowerElement = element.toLowerCase()
    if(lowerText?.includes(lowerElement)) {
      //@TODO Upgrade to not lost Uppercase
      const subText = lowerText?.split(lowerElement);
      return (
        <p>{subText[0]}<span class='element'>{element}</span>{subText[1]}</p>
      )
    }
  }
  return (
    <p>{text}</p>
  )
}

export default PeriodicText