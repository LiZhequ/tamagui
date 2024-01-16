import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="M3.5 13h6" stroke={color} />
      <Path d="m2 16 4.5-9 4.5 9" stroke={color} />
      <Path d="M18 16V7" stroke={color} />
      <Path d="m14 11 4-4 4 4" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'AArrowUp'

export const AArrowUp = memo<IconProps>(themed(Icon))