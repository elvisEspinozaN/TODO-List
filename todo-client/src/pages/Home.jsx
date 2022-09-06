import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrFormView } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";

export default function Home() {
  const [tasks, setTasks] = useState([]); // empty array init

  useEffect(() => {
    // when page is loaded
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const result = await axios.get("http://localhost:8080/tasks");
    setTasks(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Tags</th>
              <th scope="col">Created</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(
              (
                task,
                index // make data dynamic
              ) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{task.title}</td>
                  <td>{task.tags}</td>
                  <td>{task.createTime}</td>
                  <td>
                    <button className="btn btn-primary mx-1">
                      <GrFormView />
                    </button>
                    <button className="btn btn-outline-primary mx-1">
                      <AiOutlineEdit />
                    </button>
                    <button className="btn btn-danger mx-1">
                      <RiDeleteBin5Line />
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
