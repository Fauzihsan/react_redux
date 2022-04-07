import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TODO_ADD } from "../redux/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();

  const [activity, setNewActivity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activity) return alert("Silahkan isi terlebih dahulu!");
    console.log(activity);
    addActivity(activity);
    setNewActivity("");
  };

  const addActivity = (text) => {
    const newTodos = { id: activity.length + 1, title: text, completed: false };
    dispatch(TODO_ADD(newTodos));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="row p-5">
        <div className="col-11">
          <label htmlFor="activity" className="visually-hidden">
            Masukan Todo
          </label>
          <input id="activity" type="text" value={activity} onChange={(e) => setNewActivity(e.target.value)} className="form-control" />
        </div>
        <div className="col-1">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
