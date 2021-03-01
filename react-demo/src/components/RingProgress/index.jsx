import React from 'react'

export default function RingProgress(props) {
  const { width, radius, backgroundColor, barColor, progress } = props;
  return (
    <div>
      <svg style={{ transform: "rotate(-90deg)", width: width, height: width }} xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
        <circle
          r={(width - radius) / 2}
          cy={width / 2}
          cx={width / 2}
          strokeWidth={radius}
          stroke={backgroundColor}
          fill="none"
        />
        <circle
          // style={{ animationStyle }}
          r={(width - radius) / 2}
          cy={width / 2}
          cx={width / 2}
          strokeWidth={radius}
          stroke={barColor}
          strokeLinecap='square'
          strokeDasharray={(width - radius) * 3.14}
          strokeDashoffset={(width - radius) * 3.14 * (1 - progress)}
          fill="none"
        />
      </svg>
    </div>
  )
}

RingProgress.defaultProps = {
  width: 100,
  radius: 5,
  backgroundColor: '#dadada',
  barColor: '#79BEDB',
  progress: 0.5,
}
