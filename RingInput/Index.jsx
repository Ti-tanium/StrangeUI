import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import RingProgress from '../RingProgress'
import styles from './index.less'
// For number selecting
export default function RingInput(props) {
  const { width, radius, backgroundColor, barColor, defaultValue, range, onChange, stepLength, style, className } = props;
  const [value, setValue] = useState(defaultValue)
  const onPlus = () => {
    if (value < range[0] || value >= range[1]) return
    setValue(value + stepLength);
    onChange(value + stepLength)
  }
  const onMinus = () => {
    if (value <= range[0] || value > range[1]) return
    setValue(value - stepLength);
    onChange(value - stepLength);
  }
  return (
    <div style={style} className={className}>
      <RingProgress width={width} radius={radius} progress={value / (range[1] - range[0])} backgroundColor={backgroundColor} barColor={barColor}></RingProgress>
      <div className={styles.inside} style={{
        width: width,
        height: width,
        marginTop: -1 * width - 3,
        zIndex: 1
      }}>
        <button className={styles.iconButton} onClick={onPlus}>
          <FontAwesomeIcon icon={faPlus} style={{ fontSize: 0.13 * width }}></FontAwesomeIcon>
        </button>
        <div style={{ textAlign: 'center', fontSize: 0.25 * width }}>{value}</div>
        <button className={styles.iconButton} onClick={onMinus}>
          <FontAwesomeIcon icon={faMinus} style={{ fontSize: 0.13 * width }}></FontAwesomeIcon>
        </button>
      </div>
    </div >
  )
}

RingInput.defaultProps = {
  width: 100,
  radius: 5,
  backgroundColor: '#dadada',
  barColor: '#79BEDB',
  defaultValue: 0,
  range: [0, 10],
  stepLength: 1,
  onChange: function (value) { }
}
