import {PropTypes} from 'react' // eslint-disable-line

const MyComponent = props => (
  <div>
    {props.optionalProp}
    {props.optionalPropWithDefault}
    {props.requiredProp}
    {props.requiredPropWithDefault}
    {props.unspecifiedProp}
  </div>
)

MyComponent.propTypes = {
  optionalProp: PropTypes.string,
  optionalPropWithDefault: PropTypes.string,
  requiredProp: PropTypes.string.isRequired,
  requiredPropWithDefault: PropTypes.string.isRequired,
}

MyComponent.defaultProps = {
  optionalPropWithDefault: 'a',
  requiredPropWithDefault: 'b',
}

export default MyComponent
