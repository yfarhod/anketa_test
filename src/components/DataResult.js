import { useState } from "react";

export const DataResult = () => {
  const [data, setData] = useState([]);
  const url =
    "https://script.google.com/macros/s/AKfycbzSBAO0OYd1hAKQ4FBLCK3mMkOhoevp8dydvjXyQSVd0ONdRkfXSZEbZcxbp5GGt8kk0w/exec";

  const handleSubmit = () => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((response) => setData(response.filter((v) => v !== response[0])));
    }, 500);
    console.log(data);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={handleSubmit}
        >
          Обновить результаты таблицы
        </button>
      </div>
      <br />
      {data && (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="row">No Анкеты</th>
              <th scope="row">Вопрос 1</th>
              <th scope="row">Вопрос 2</th>
              <th scope="row">Вопрос 3</th>
            </tr>
          </thead>
          <tbody>
            {data.map((v) => (
              <tr>
                {v.map((e) => (
                  <td>{e}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
