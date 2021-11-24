function Table({ data, onRemove }) {
  const onRemoveItem = (e) => {
    onRemove(e);
  };

  if (typeof data === "undefined") {
    return <></>;
  }

  const new_data = data.map((item) => (
    <tr>
      <td>{item.date}</td>
      <td>{item.km}</td>
      <td className="pointer" date={item.date} onClick={onRemoveItem}>
        ✘
      </td>
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

Table.defaultProps = {
  data: {},
};

export default Table;
