export const CustomTbody = ({rows}) => {
  console.log(rows);
  return (
    <tbody>
      {rows.map((row) => (
        <tr key={row.id}>
          <td>{row.cuestn}</td>
          <td>{row.edad}</td>
          <td>{row.sexo}</td>
          <td>{row.p1}</td>
          <td>{row.p2}</td>
          <td>{row.p3}</td>
          <td>{row.p4}</td>
          <td>{row.p5}</td>
          <td>{row.p6}</td>
          <td>{row.p7}</td>
          <td>{row.p8}</td>
          <td>{row.p9}</td>
          <td>{row.p10}</td>
          <td>{row.p11}</td>
          <td>{row.p12}</td>
          <td>{row.p13}</td>
          <td>{row.p14}</td>
          <td>{row.p15}</td>
          <td>{row.p16}</td>
          <td>{row.p17}</td>
          <td>{row.p17_o}</td>
          <td>{row.p4_o}</td>
          <td>{row.p5_o}</td>
          <td>{row.p6_o}</td>
          <td>{row.p7_o}</td>
          <td>{row.p11_o}</td>
          <td>{row.p12_o}</td>
          <td>{row.p14_o}</td>
        </tr>
      ))}
    </tbody>
  );
};
