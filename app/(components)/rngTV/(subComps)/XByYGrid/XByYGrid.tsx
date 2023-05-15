import styles from './XByYGrid.module.css'
import Circle from '../Circle/Circle'

type Props = {
  columns: number,
  rows: number,
}

const XByYGrid = ({columns, rows}: Props) => {

  const grid = [];

  for (let i = 0; i < columns; i++) {
    const row = [];
    for (let j = 0; j < rows; j++) {
      row.push(<Circle key={`${i}-${j}`} />);
    }
    grid.push(<div key={i} className={styles.columns}>{row}</div>);
  }

  

  return (
    <section className={styles.circlesGrid}>
      {grid}
    </section>
  )
}

export default XByYGrid