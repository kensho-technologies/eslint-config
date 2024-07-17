import {ClassNames, css} from '@emotion/react'

const divCss = css`
  background: blue;
`

interface MyComponentProps {
  a: string
  b: number
}

export default function MyComponent(props: MyComponentProps): JSX.Element {
  const {a, b} = props
  return (
    <div css={divCss}>
      <button type="button">{a}</button>
      <ClassNames>{({css}) => <div className={css({background: 'red'})}>{b}</div>}</ClassNames>
    </div>
  )
}
