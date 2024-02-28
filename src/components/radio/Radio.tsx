import { FC } from 'react'
import './radio.css'
import { RadioNowProps } from '../../types/Types'

const Radio:FC<RadioNowProps> = ({radioNow}) => {
  return (
    <section className="audio-section">
    <audio controls key={radioNow} autoPlay>
      <source src={radioNow} type="audio/mpeg" />
    </audio>
  </section>
  )
}

export default Radio