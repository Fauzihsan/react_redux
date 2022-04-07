import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TODO_COMPLETED, TODO_DELETE } from "../redux/todoSlice";
import deleteIcon from "../assets/img/delete.png";

function ListTodo() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.data);
  return (
    <div className="box mb-3 gap-3">
      {data.length > 0 ? (
        <>
          {data.map((element, index) => {
            return (
              <div className="list border-bottom border-dark p-2" key={element.id}>
                <input
                  type="checkbox"
                  defaultChecked={element.completed}
                  onClick={() => {
                    dispatch(TODO_COMPLETED(index));
                  }}
                />

                {element.completed ? (
                  <span className="btn-warning ps-3 pe-3">
                    <s style={{ color: "red" }}>{element.title}</s>
                  </span>
                ) : (
                  <span className="ps-3 pe-3">{element.title}</span>
                )}
                <button
                  onClick={() => dispatch(TODO_DELETE(element.id))}
                  style={{
                    background: "transparent",
                    border: "none",
                  }}
                >
                  <img srcSet={deleteIcon} alt="" style={{ width: "30px" }} />
                </button>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <p>You are not having any activities at the moment</p>
          <h1> have a good rest</h1>
        </>
      )}
    </div>
  );
}

export default ListTodo;
