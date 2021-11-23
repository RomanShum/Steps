import Input from "./Input";
import Table from "./Table";
import { useState } from "react";

function Form() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    date: "",
    km: 1,
  });

  const handleChangeForm = (e, name) => {
    if (name === "km" && e !== "") {
      e = parseInt(e);
    }

    setForm((prevForm) => ({ ...prevForm, [name]: e }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let isset = false;
    data.map(function (item) {
      if (form.date === item.date) {
        item.km = Number(item.km) + Number(form.km);
        isset = true;
      }
      return true;
    });
    data.map(function (item) {
      if (form.date > item.date && isset === false) {
        isset = true;
        setData((prevData) => [...prevData, form]);
      }
      return true;
    });
    if (data.length === 0) {
      setData((prevData) => [...prevData, form]);
    }

    setForm({ date: "", km: 1 });
  };

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
