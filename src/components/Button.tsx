import { ReactNode } from 'react'
interface Props {
  color: string
  children: ReactNode
  click: () => void
}

const Button: React.FC<Props> = ({ color, click, children }) => {
  const [bg, setBg] = useState('primary')

  useEffect(() => {
    switch (color) {
      case 'primary':
        setBg('bg-primary')
        break
      case 'secondary':
        setBg('bg-secondary')
        break
    }
  }, [color])
  return (
    <button
      type="button"
      className={`rounded-lg p-3 font-bold text-lg transition duration-700 hover:opacity-80 ${bg} m-3 w-full text-primary`}
      onClick={click}
    >
      {children}
    </button>
  )
}
export default Button
