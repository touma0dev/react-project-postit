import { useState, useEffect } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { BsPencilSquare } from "react-icons/bs";
import { DragDropContext , Droppable ,Draggable} from "react-beautiful-dnd";
import {AiOutlineCopy} from "react-icons/ai"
import "./App.scss";
function App() {
  const [input, setInput] = useState("");
  const [btn, setBtn] = useState([]);
  const [title, TitleCamp] = useState("");
  const [classe, Classecamp] = useState("");
  const TitleChange = (event) => {
    if (event.target.value === '') return;
    TitleCamp(event.target.value);
  };
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  //Adicionar a informacao capturada dentro de um array
  const handleClick = () => {
    if ( !input) {
      return;
    }
  
    const newTask = {
      id: Math.floor(Math.random() * 10000),
      classe: classe || "padrao",
      Titulo: title,
      tarefa: input,
      Dia: formatDate(date)
    };
  
    const newlist = [...btn, newTask];
    setBtn(newlist);
    setInput("");
    TitleCamp("");
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
  const [btnw, setBtno] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const bn = () => {
    const newTaske = [
      { Class: "App-note-tema-1", color: "post-it-purple" },
      { Class: "App-note-tema-2", color: "post-it-pink" },
      { Class: "App-note-tema-3", color: "post-it-blue" },
      { Class: "App-note-tema-4", color: "post-it-yellow" },
      { Class: "App-note-tema-5", color: "post-it-green" },
      { Class: "App-note-tema-6", color: "posit-it-lovely" },
    ];
    setBtno(newTaske);
  };
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  function handleDivClick(value) {
    Classecamp(value)
  }
  useEffect(() => {
    bn();
  }, []);
  function handleOnDragEnd(result){
    if(!result.destination) return;
    const items=Array.from(btn);
    const [reorderedItem]=items.splice(result.source.index,1);
    items.splice(result.destination.index,0,reorderedItem)
    setBtn(items)
    
    localStorage.setItem("tasks", JSON.stringify(items));

  }
  const handleCopy = (content) => {
    navigator.clipboard.writeText(content);
  };
  return (
    <div className="App"> 
      {btnw.map((task, index) => (
        <div
          key={index}
          className={`App-note-tema ${task.Class} ${index === hoveredIndex ? 'hover' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleDivClick(task.color)}
        >
        </div>
      ))}
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
            min="2023-01-01"
            max="2024-01-01"
            className="App-inpdate"
            type="date"
            value={date}
            onChange={handleDateChange}
          />
          <button onClick={handleClick}>
            Anotar
            <BsPencilSquare style={{ height: "15px", width: "12px" }} />
          </button>
        </div>
      </div>
      { function handleOnDragEnd(result){
    if(!result.destination) return;
    const items=Array.from(btn);
    const [reorderedItem]=items.splice(result.source.index,1);
    items.splice(result.destination.index,0,reorderedItem)
    setBtn(items)
  }
  }
      <DragDropContext onDragEnd={handleOnDragEnd}> 
      
  <div className="App Flex">
  {btn.map((task, index) => (
  <Droppable key={task.id} droppableId={`droppable-${task.id}`}>
    {(provided) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        className="App"
      >
        <Draggable key={task.id} draggableId={`draggable-${task.id}`} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className={`App-card ${task.classe}`}
            >
              <div className="App-before"></div>
              <b onClick={() => handleRemove(task.id)}>
                <MdOutlineDeleteForever
                  style={{ height: "20px", width: "30px" }}
                />
              </b>

              <h4 className="App-card-title">
  {task.Titulo}
  <label className="App-card-copy" onClick={() => handleCopy(task.Titulo)}>
    <AiOutlineCopy />
  </label>
</h4>
<p className="App-card-title">
  {task.tarefa}
  <label className="App-card-copy" onClick={() => handleCopy(task.tarefa)}>
    <AiOutlineCopy />
  </label>
</p>
              <span>{task.Dia}</span>
            </div>
          )}
        </Draggable>
        {provided.placeholder}
      </div>
    )}
  </Droppable>
))}

  </div>
</DragDropContext>

</div>
  );}

export default App;
