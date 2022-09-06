import React, { useState } from "react";
import "./AddTask.css";

export default function AddTask() {
  const [task, setTask] = useState({
    title: "",
    tags: "",
    description: "",
  });

  const { title, tags, description } = task;

  const onInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" id="login-container">
      <div className="image"></div>
      <div className="frm">
        <h3>Create a task</h3>
        <form>
          <div className="form-group">
            <label for="title">Title of task</label>
            <input
              type={"text"}
              name="title"
              className="form-control mb-4"
              placeholder="enter the name of the task"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group mb-5">
            <label for="description">Description</label>
            <textarea
              type={"text"}
              name="description"
              className="form-control"
              placeholder="enter a description"
              value={description}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="dropdown mb-4">
            <label className="btn-light disabled mx-3">Urgency : </label>
            <select
              className="btn btn-outline-secondary dropdown-toggle"
              value={tags}
              name="tags"
              onChange={(e) => onInputChange(e)}
            >
              <option value="Urgent">Urgent</option>
              <option value="Medium">Medium</option>
              <option value="Minor">Minor</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-outline-danger btn-lg mx-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
