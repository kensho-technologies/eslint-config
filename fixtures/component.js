import PropTypes from 'prop-types' // eslint-disable-line
import {Component, Fragment} from 'react' // eslint-disable-line

export default class MyComponent extends Component {
  static propTypes = {
    string: PropTypes.string,
    number: PropTypes.number.isRequired,
    func: PropTypes.func.isRequired,
  }

  static defaultProps = {
    string: 'foo',
  }

  static staticProperty = 'bar'

  static staticMethod() {
    return 'foo'
  }

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
    const {func} = this.props
    func('mounted')
  }

  handleMouseEnter = (event) => {
    this.doSomething(event)
  }

  handleMouseLeave = (event) => {
    this.doSomething(event)
  }

  getSomething() {
    const {number} = this.props
    return number + this.instanceVariable
  }

  doSomething = () => {
    const {func} = this.props
    const {stateA} = this.state
    func(stateA)
  }

  renderSomething() {
    const {string} = this.props
    return <span>{string}</span>
  }

  renderSomethingElse() {
    const {number} = this.props
    return <span>{number}</span>
  }

  render() {
    return (
      <Fragment>
        <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          {this.getSomething()}
        </div>
        {this.renderSomething()}
        {this.renderSomethingElse()}
      </Fragment>
    )
  }
}
