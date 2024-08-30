import { useState } from "react";
import "./styles.css"; // Importando o arquivo de estilos CSS

function TodoList() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    const atividade = {
      input: input,
      completed: false, // Adicionando o campo completed
    };

    setTodo([...todo, atividade]);
    setInput("");
  };

  const handleDelete = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  const handleToggleComplete = (index) => {
    const updatedTodo = todo.map((atividade, i) =>
      i === index
        ? { ...atividade, completed: !atividade.completed }
        : atividade
    );
    setTodo(updatedTodo);
  };

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <label htmlFor="todo-input">Atividade:</label>
        <input
          id="todo-input"
          value={input}
          type="text"
          placeholder="Nova atividade"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul className="todo-list">
        {todo.map((atividade, index) => (
          <li key={index} className="todo-item">
            <input
              type="checkbox"
              checked={atividade.completed}
              onChange={() => handleToggleComplete(index)}
              className="todo-checkbox"
            />
            <span
              className={`todo-text ${atividade.completed ? "completed" : ""}`}
            >
              {atividade.input}
            </span>
            <button className="todo-delete" onClick={() => handleDelete(index)}>
              Deletar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
