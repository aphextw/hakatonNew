import Button from "./components/button/button";
import { useEffect, useState } from "react";

export default function Admin() {
  const [data, setData] = useState(null); // Состояние для получения данных

  useEffect(() => {
    fetch("http://192.168.88.156:8000/events/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setData(data); // Сохраните данные в состоянии
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []); // Пустой массив зависимостей означает, что эффект выполняется только при монтировании компонента

  return (
    <div>
      <h1>Админ-панель</h1>
      {data && ( // Проверка, были ли данные получены
        <ul>
          {data.map((item) => (
            <li key={item.id}>{JSON.stringify(item)}</li> // Предполагается, что у элементов есть уникальный идентификатор
          ))}
        </ul>
      )}
    </div>
  );
}
