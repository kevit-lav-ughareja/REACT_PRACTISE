import React, { useState, type ChangeEvent, type FormEvent } from "react";
import "./App.css";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [task, setTask] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      return;
    }

    setTask((prevTask) => [...prevTask, inputValue]);

    setInputValue("");
  };

  const handleRemove = (indexToRemove: number) => {
    const updatedTasks = task.filter((_, index) => index !== indexToRemove);
    setTask(updatedTasks);
  };
  const handleRemoveAll = () => {
    setTask([]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit} className="form">
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">Add Task</button>
            <button onClick={() => handleRemoveAll()}>Clear All</button>
          </form>
        </div>
        <div className="task-wrapper">
          <ul>
            {task.map((task, index) => {
              return (
                <li key={index}>
                  <div className="task-wrapper">
                    {task}
                    <button onClick={() => handleRemove(index)}>
                      Remove task
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
