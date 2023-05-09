import { useState, useEffect } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import "./App.scss";

function App() {
  const [input, setInput] = useState("");
  const [btn, setBtn] = useState([]);
  const [title, TitleCamp] = useState("");
  const TitleChange = (event) => {
    TitleCamp(event.target.value);
  };
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  //Adicionar a informacao capturada dentro de um array
  const handleClick = () => {
    const newTask = {
      id: Math.floor(Math.random() * 10000), // Gerar um ID aleatório único
      Titulo: title,
      tarefa: input,
      Dia: formatDate(date),
    };
    const newlist = [...btn, newTask];
    setBtn(newlist);
    setInput("");
    localStorage.setItem("tasks", JSON.stringify(newlist));
  };
  function formatDate(date) {
    const dateParts = date.split("-");
    const day = dateParts[2];
    const month = dateParts[1];
    const year = dateParts[0];
    return `${day}/${month}/${year}`;
  }
  // Remover uma tarefa da lista
  const handleRemove = (id) => {
    const newList = btn.filter((task) => task.id !== id);
    setBtn(newList);
    //Armazena o newlist no cokie apos retirar a variavel desejada
    localStorage.setItem("tasks", JSON.stringify(newList));
  };
  // Carregar a lista do Local Storage ao carregar a página
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setBtn(JSON.parse(storedTasks));
    }
  }, []);
  const [date, setDate] = useState(getFormattedDate());

  function getFormattedDate() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    if (date === "") {
      setDate(getFormattedDate());
    }
  }, [date]);
  function handleDateChange(event) {
    console.log(setDate(event.target.value));
  }
  return (
    <div className="App">
      <div className="App-note">
        <input
          className="App-inptext"
          type="text"
          placeholder="Digite Seu Titulo Aqui..."
          onChange={TitleChange}
          value={title}
        />
        <br />
        <div className="App-effectpage">
          <textarea
            placeholder="Hoje eu comi 3 biscoitos com morango..."
            value={input}
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="App-Function">
          <input
            min-date
            min="2023-01-01"
            max="2024-01-01"
            className="App-inpdate"
            type="date"
            value={date}
            onChange={handleDateChange}
          />
          <button onClick={handleClick}>
          
            Anotar
            <BsPencilSquare
              style={{ height: "15px", width: "12px" }}
            />
          </button>
        </div>
      </div>
      <div className="App Flex">
        {btn.map((task) => {
          return (
            <div className="App-card" key={task.id}>
              <div className="App-before"></div>
              <b onClick={() => handleRemove(task.id)}>
                <MdOutlineDeleteForever
                  style={{ height: "20px", width: "30px" }}
                />
              </b>
              <h4 className="App-card-title">{task.Titulo}</h4>

              <p>{task.tarefa}</p>
              <span>{task.Dia}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
