import React, { memo } from 'react';
import PropTypes from 'prop-types';

const SVG = memo(({
  style,
  fill,
  width,
  height,
  className,
  viewBox,
  path,
  polygon,
  cx,
  cy,
  transform,
  cxCircle,
  cyCircle,
  radiusCircle,
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    cx={cx}
    cy={cy}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    transform={transform}
  >
    <g>
      <If condition={path}>
        <path
          fill={fill}
          d={path}
        />
      </If>
      <If condition={polygon}>
        <polygon
          fill={fill}
          points={polygon}
        />
      </If>
      <If condition={cxCircle && cyCircle && radiusCircle}>
        <circle
          fill={fill}
          cx={cxCircle}
          cy={cyCircle}
          r={radiusCircle}
        />
      </If>
    </g>
  </svg>
));

SVG.propTypes = {
  style: PropTypes.object,
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  viewBox: PropTypes.string,
  path: PropTypes.string,
  polygon: PropTypes.string,
  cx: PropTypes.string,
  cy: PropTypes.string,
  transform: PropTypes.string,
  cxCircle: PropTypes.string,
  cyCircle: PropTypes.string,
  radiusCircle: PropTypes.string,
};

SVG.defaultProps = {
  style: {},
  fill: '',
  width: '18px',
  height: '18px',
  className: '',
  viewBox: '0 0 18 18',
  path: '',
  polygon: '',
  cx: '50%',
  cy: '50%',
  transform: 'translate(0.000000, 0.000000)',
  cxCircle: '',
  cyCircle: '',
  radiusCircle: '',
};

export default SVG;
