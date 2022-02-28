import { useState } from "react";
import axios from "axios";

function App() {
  // form states
  const [anketa, setAnketa] = useState("");
  const [vopros1, setVopros1] = useState("");
  const [vopros2, setVopros2] = useState("");
  const [vopros3, setVopros3] = useState("");

  // submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(anketa, vopros1, vopros2, vopros3);
    const data = {
      No_Анкеты: anketa,
      Вопрос1: vopros1,
      Вопрос2: vopros2,
      Вопрос3: vopros3,
    };
    axios
      .post(
        "https://script.google.com/macros/s/AKfycbzs38xQuMbQ0IVnesgYRKOoOMQe52sF1K9my_pfDsMwtJxcKuJIS7mxahXBGY1ChetRNQ/exec",
        data
      )
      .then((response) => {
        console.log(response);
        setAnketa("");
        setVopros1("");
        setVopros2("");
        setVopros3("");
      });
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
}

export default App;
