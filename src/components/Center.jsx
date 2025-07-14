import React, { useState } from 'react';
import './Center.css';

export default function Center() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  function addTask(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput('');
  }

  function toggleDone(id) {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function startEdit(id, currentText) {
    setEditId(id);
    setEditText(currentText);
  }

  function cancelEdit() {
    setEditId(null);
    setEditText('');
  }

  function saveEdit(id) {
    if (!editText.trim()) return;
    setTasks(tasks.map(task => task.id === id ? { ...task, text: editText } : task));
    setEditId(null);
    setEditText('');
  }

  return (
    <div className="center-container">
      <h2>Minhas Tarefas</h2>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.done ? 'done' : ''}>
            {editId === task.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={e => setEditText(e.target.value)}
                />
                <button onClick={() => saveEdit(task.id)}>Salvar</button>
                <button onClick={cancelEdit}>Cancelar</button>
              </>
            ) : (
              <>
                <span onClick={() => toggleDone(task.id)}>{task.text}</span>
                <div>
                  <button onClick={() => startEdit(task.id, task.text)}>Editar</button>
                  <button onClick={() => removeTask(task.id)}>X</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
