import Input from "./Input";
import Table from "./Table";
import { useState } from "react";

function Form() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    date: "01.01.2021",
    km: 1,
  });

  const handleChangeForm = (e, name) => {
    setForm((prevForm) => ({ ...prevForm, [name]: e }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.date.length === 0) {
      return false;
    }
    let isset = false;
    data.map(function (item) {
      if (form.date === item.date) {
        item.km = parseFloat(item.km) + parseFloat(form.km);
        isset = true;
      }
      return true;
    });
    data.map(function (item) {
      if (isset === false) {
        isset = true;
        setData((prevData) => [...prevData, form]);
      }
      return true;
    });
    if (data.length === 0) {
      setData((prevData) => [...prevData, form]);
    }

    setForm({ date: "01.01.2021", km: 1 });
  };

  data.sort(function (a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const onRemove = (e) => {
    let new_data = data.filter(
      (item) => item.date !== e.target.getAttribute("date")
    );
    setData(new_data);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          title="Дата (ДД.ММ.ГГГГ)"
          name="date"
          value={form.date}
          onHandelChange={handleChangeForm}
        />
        <Input
          title="Пройдено км"
          name="km"
          value={form.km}
          onHandelChange={handleChangeForm}
        />
        <button type="submit">OK</button>
      </form>
      <Table data={data} onRemove={onRemove} />
    </>
  );
}

export default Form;
