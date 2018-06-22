import PropTypes from 'prop-types' // eslint-disable-line
import * as React from 'react' // eslint-disable-line

export default function MyComponent(props) {
  const {
    optionalProp,
    optionalPropWithDefault,
    requiredProp,
    requiredPropWithDefault,
    propWithoutPropType,
  } = props
  return (
    <div>
      {optionalProp}
      {optionalPropWithDefault}
      {requiredProp}
      {requiredPropWithDefault}
      {propWithoutPropType /* should be typed */}
    </div>
  )
}

MyComponent.propTypes = {
  optionalProp: PropTypes.string,
  optionalPropWithDefault: PropTypes.string,
  requiredProp: PropTypes.string.isRequired,
  requiredPropWithDefault: PropTypes.string.isRequired,
  unusedProp: PropTypes.string,
}

MyComponent.defaultProps = {
  optionalPropWithDefault: 'a',
  requiredPropWithDefault: 'b', // does not need a default
}
