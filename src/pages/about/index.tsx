import {
  elements,
  getElement,
  getCompound,
  isErrorResult
} from "@shangzhen/periodic-table";
import Controller from './components/controller'
const About: React.FC = () => {
  const firstName = useSelector((state: Name) => state.firstName)
  const lastName = useSelector((state: Name) => state.lastName)
  const markElements = elements
    .filter(element => element.symbol.length === 2)
    .map(element => element.symbol.toLowerCase());

  const front_linkedLetters: string[] = [];
  for (let i = 0; i < firstName.length - 1; i++) {
    const pair = firstName[i] + firstName[i + 1];
    if (markElements.includes(pair.toLowerCase())) {
      front_linkedLetters.push(pair);
    }
  }

  const front_highlightLinkedLetters = (name: string) => {
    let highlightedName = name;
    front_linkedLetters.forEach(pair => {
      highlightedName = highlightedName.replace(pair, `<span class="bg-secondary">${pair}</span>`);
    });

    return <div dangerouslySetInnerHTML={{ __html: highlightedName }} />;
  };

  const back_linkedLetters: string[] = [];
  for (let i = 0; i < lastName.length - 1; i++) {
    const pair = lastName[i] + lastName[i + 1];
    console.log(pair)
    if (markElements.includes(pair.toLowerCase())) {
      back_linkedLetters.push(pair);
    }
  }

  const back_highlightLinkedLetters = (name: string) => {
    let highlightedName = name;
    back_linkedLetters.forEach(pair => {
      highlightedName = highlightedName.replace(pair, `<span class="bg-secondary">${pair}</span>`);
    });
    return <div dangerouslySetInnerHTML={{ __html: highlightedName }} />;
  };


  return (
    <div className='p-[100px] flex flex-col justify-center items-center h-screen'>
      <div className="text-center text-8xl text-primary py-6">
        {front_highlightLinkedLetters(firstName)}
      </div>
      <div className="text-center text-8xl text-primary py-6">
        {back_highlightLinkedLetters(lastName)}
      </div>
      <Controller />
    </div>
  )
}

export default About
