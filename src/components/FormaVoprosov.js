import { useState } from "react";

export const FormaVoprosov = () => {
  // form states
  const [anketa, setAnketa] = useState("");
  const [vopros1, setVopros1] = useState("");
  const [vopros2, setVopros2] = useState("");
  const [vopros3, setVopros3] = useState("");

  // submit event
  const url =
    "https://script.google.com/macros/s/AKfycbzSBAO0OYd1hAKQ4FBLCK3mMkOhoevp8dydvjXyQSVd0ONdRkfXSZEbZcxbp5GGt8kk0w/exec";
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(anketa, vopros1, vopros2, vopros3);
    const data = {
      anketa: anketa,
      vopros1: vopros1,
      vopros2: vopros2,
      vopros3: vopros3,
    };

    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    setAnketa("");
    setVopros1("");
    setVopros2("");
    setVopros3("");
  };
  return (
    <div className="container">
      <br />
      <h1>Форма для добавления анкеты</h1>
      <br />

      {/* form */}
      <form autoComplete="off" className="form-group" onSubmit={handleSubmit}>
        <label>No Анкеты</label>
        <input
          type="text"
          placeholder="введите номер анкеты"
          required
          className="form-control"
          onChange={(e) => setAnketa(e.target.value)}
          value={anketa}
        />
        <br />
        <label>Вопрос 1</label>
        <input
          type="text"
          placeholder="введите ответ"
          required
          className="form-control"
          onChange={(e) => setVopros1(e.target.value)}
          value={vopros1}
        />
        <br />
        <label>Вопрос 2</label>
        <input
          type="text"
          placeholder="введите ответ"
          required
          className="form-control"
          onChange={(e) => setVopros2(e.target.value)}
          value={vopros2}
        />
        <br />
        <label>Вопрос 3</label>
        <input
          type="text"
          placeholder="введите ответ"
          required
          className="form-control"
          onChange={(e) => setVopros3(e.target.value)}
          value={vopros3}
        />
        <br />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button type="submit" className="btn btn-primary">
            Добавить
          </button>
        </div>
      </form>
    </div>
  );
};
