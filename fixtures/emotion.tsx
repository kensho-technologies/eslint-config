import {css} from '@emotion/react'

const divCss = css`
  background: blue;
`

interface MyComponentProps {
  a: string
  b: number
}

export default function MyComponent(props: MyComponentProps): JSX.Element {
  const {a} = props
  return (
    <div css={divCss}>
      <button type="button">{a}</button>
    </div>
  )
}
