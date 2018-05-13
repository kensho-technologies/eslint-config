import PropTypes from 'prop-types' // eslint-disable-line
import * as React from 'react' // eslint-disable-line

export default function MyComponent(props) {
  return (
    <div>
      {props.optionalProp}
      {props.optionalPropWithDefault}
      {props.requiredProp}
      {props.requiredPropWithDefault}
      {props.propWithoutPropType /* should be typed */}
    </div>
  )
}

MyComponent.propTypes = {
  optionalProp: PropTypes.string,
  optionalPropWithDefault: PropTypes.string,
  requiredProp: PropTypes.string.isRequired,
  requiredPropWithDefault: PropTypes.string.isRequired,
}

MyComponent.defaultProps = {
  optionalPropWithDefault: 'a',
  requiredPropWithDefault: 'b', // does not need a default
}
