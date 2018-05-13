import * as React from 'react' // eslint-disable-line

export default class MyComponent extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    return {nextProps}
  }

  render() {
    return <div />
  }
}
