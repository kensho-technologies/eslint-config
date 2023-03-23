import {createContext, useContext, useState} from 'react'

const ThemeContext = createContext({color: 'red'})

interface ButtonProps {
  text: string
  unused: number
}

export default function Button(props: ButtonProps): JSX.Element {
  const {text, unused, ...rest} = props
  const theme = useContext(ThemeContext)
  const [count, setCount] = useState(1)
  return (
    <div style={{color: theme.color}} {...rest}>
      <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
        {text}
      </button>
      <span>{count}</span>
    </div>
  )
}
