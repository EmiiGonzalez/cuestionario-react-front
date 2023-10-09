import React from 'react'

export const CustomThead = () => {

  const columns = ["cuestn", "edad", "sexo", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p17_o", "p4_o", "p5_o", "p6_o", "p7_o", "p11_o", "p12_o", "p14_o"]

  return (
    <thead className="thead-dark">
      <tr>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  )
}
