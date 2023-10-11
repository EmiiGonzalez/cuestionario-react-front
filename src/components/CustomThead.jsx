import React from 'react'

export const CustomThead = () => {

  const columns = ["cuestn","edad", "sexo", "p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16"]

  return (
    <thead className="">
      <tr>
        {columns.map((column) => (
          <th scope="col" key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  )
}
