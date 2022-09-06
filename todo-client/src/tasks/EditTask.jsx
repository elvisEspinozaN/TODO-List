import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./AddTask.css";

export default function EditTask() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [task, setTask] = useState({
    title: "",
    tags: "",
    description: "",
  });

  const { title, tags, description } = task;

  const onInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadTask();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/task/${id}`, task);
    navigate("/");
  };

  const loadTask = async () => {
    const result = await axios.get(`http://localhost:8080/task/${id}`);
    setTask(result.data);
  };

  return (
    <div className="container" id="login-container">
      <div className="image"></div>
      <div className="frm">
        <h3>Edit task</h3>

        <form onSubmit={(e) => onSubmit(e)}>
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
            <Link className="btn btn-outline-danger btn-lg mx-2" to="/">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
