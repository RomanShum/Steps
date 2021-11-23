function Table({ data }) {
  const new_data = data.map((item) => (
    <tr>
      <td>{item.date}</td>
      <td>{item.km}</td>
      <td>✘</td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>{new_data}</tbody>
    </table>
  );
}

export default Table;
