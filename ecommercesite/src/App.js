import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
const users = [
  { name: "amol shelke", age: 18 },
  { name: "Max", age: 22 },
  { name: "Naruto Uzumaki", age: 20 },
];
function App() {
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3800/users`).then((res) => {
      const persons = res.data;
      console.log(res);
      console.log(persons);
      setData(persons);
    });
    axios
      .get("http://localhost:4000/api/shoes")
      .then((res) => setList(JSON.parse(res.data)));
  }, []);
  let val = list.map((item) => {
    return <li key={item.id}>{item.name}</li>;
  });
  if (data) {
    return (
      <div>
        <ul>
          {data.map((user) => {
            return (
              <li key={Math.random().toString()}>
                {user.name} {user.age}(years old)
              </li>
            );
          })}
        </ul>
        <h1>hello world</h1>
        <p>i live in this world</p>
        <ol>{val}</ol>
      </div>
    );
  } else {
    return null;
  }
}

export default App;
