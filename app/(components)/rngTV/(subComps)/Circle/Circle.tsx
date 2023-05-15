import styles from "./circle.module.css"

type elementProps = {
  inputSize?: Number
}

const defualtDiameterInPx = 10

const Circle = ({ inputSize }: elementProps) => {

  const size = `${ inputSize ? inputSize : defualtDiameterInPx }px`

  return (
    <div style={{
      height: size,
      width: size,
    }} className={styles.circle}>
      
    </div>
  )
}

export default Circle

