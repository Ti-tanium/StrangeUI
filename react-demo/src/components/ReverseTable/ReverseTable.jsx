import React from 'react'
import styles from './ReverseTable.less'

export default function ReverseTable(props) {
  const { dataSource, columns, direction } = props;
  let rowDirection = { display: 'flex', flexDirection: "row" };
  let columnDirection = { display: 'flex', flexDirection: 'column' };
  let rowStyle = { padding: 8 };
  let cellStyle = { padding: 4 }
  if (direction == 'vertical') {
    let tmp = rowDirection;
    rowDirection = columnDirection;
    columnDirection = tmp;
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row', padding: 16, overflowX: 'auto' }}>
      <table style={{ ...rowDirection }}>
        <thead>
          <tr style={{ ...columnDirection, ...rowStyle, minWidth: 80, fontWeight: 'bold' }}>
            {
              columns.map(column => {
                return <td key={column.dataIndex} style={{ ...column.style, ...cellStyle }}>{column.title}</td>
              })
            }
          </tr>
        </thead>
        <tbody style={{ ...rowDirection }}>
          {
            dataSource.map(row => {
              return (
                <tr key={row.id} gutter={[0, 8]} style={{ ...columnDirection, ...rowStyle }} className={styles.reverseRow} key={row.id}>
                  {columns.map(item => {
                    return <td key={item.dataIndex} style={{ ...cellStyle, textAlign: 'right' }}>{item.render ? item.render(row) : row[item.dataIndex]}</td>
                  })}
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
