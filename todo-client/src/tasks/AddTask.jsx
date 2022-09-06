import React from "react";
import "./AddTask.css";

export default function AddTask() {
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
              className="form-control mb-4"
              placeholder="enter the name of the task"
            />
          </div>

          <div className="form-group mb-4">
            <label for="description">Description</label>
            <textarea
              type={"text"}
              className="form-control"
              placeholder="enter a description"
            />
          </div>

          <div class="form-check">
            <input
              class="form-check-input"
              type={"radio"}
              name="tags"
              value="Urgent"
            />
            <label class="form-check-label" for="Urgent">
              Urgent
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type={"radio"}
              name="tags"
              value="Medium"
            />
            <label class="form-check-label" for="Medium">
              Medium
            </label>
          </div>
          <div class="form-check mb-4">
            <input
              class="form-check-input"
              type={"radio"}
              name="tags"
              value="Minor"
            />
            <label class="form-check-label" for="Minor">
              Minor
            </label>
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
