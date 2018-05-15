import PropTypes from 'prop-types' // eslint-disable-line
import * as React from 'react' // eslint-disable-line

export default class MyComponent extends React.Component {
  static propTypes = {
    string: PropTypes.string,
    number: PropTypes.number.isRequired,
    func: PropTypes.func.isRequired,
  }

  static defaultProps = {
    string: 'foo',
  }

  static staticMethod() {
    return 'foo'
  }

  static staticProperty = 'bar'

  constructor(props) {
    super(props)
    props.func('constructor')
  }

  instanceVariable = 10

  state = {
    stateA: 'bar',
  }

  static getDerivedStateFromProps(nextProps) {
    return {nextProps}
  }

  componentDidMount() {
    this.props.func('mounted')
  }

  handleMouseEnter = event => {
    this.doSomething(event)
  }

  handleMouseLeave = event => {
    this.doSomething(event)
  }

  getSomething() {
    return this.props.number + this.instanceVariable
  }

  doSomething = () => {
    this.props.func(this.state.stateA)
  }

  renderSomething() {
    return <span>{this.props.string}</span>
  }

  renderSomethingElse() {
    return <span>{this.props.number}</span>
  }

  render() {
    return (
      <React.Fragment>
        <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          {this.getSomething()}
        </div>
        {this.renderSomething()}
        {this.renderSomethingElse()}
      </React.Fragment>
    )
  }
}
