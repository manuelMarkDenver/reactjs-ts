import { useEffect, useRef, useState } from "react";

import { Draggable } from "@hello-pangea/dnd";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

import { Todo } from "../types";

type SingleTodoProps = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<SingleTodoProps> = ({
  index,
  todo,
  todos,
  setTodos,
}: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, todo: editTodo } : todo;
      }),
    );

    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef && inputRef.current && inputRef.current.focus();
  }, [edit]);

  const handleCancel = () => {
    setEdit(false);
    setEditTodo(todo.todo);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`todos__single ${snapshot.isDragging ? "drag" : ""}`}
          onSubmit={(e) => handleEdit(e, todo.id)}
          ref={edit ? null : provided.innerRef}
          {...(edit ? {} : provided.draggableProps)}
          {...(edit ? {} : provided.dragHandleProps)}
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todos__single--text"
            />
          ) : todo.isDone ? (
            <s className="todos__single--text">{todo.todo}</s>
          ) : (
            <span className="todos__single--text">{todo.todo}</span>
          )}
          <div>
            {!edit ? (
              <>
                <span
                  className="icon"
                  onClick={() => {
                    if (!edit && !todo.isDone) {
                      setEdit(!edit);
                    }
                  }}
                >
                  <AiFillEdit />
                </span>
                <span className="icon" onClick={() => handleDelete(todo.id)}>
                  <AiFillDelete />
                </span>
                <span className="icon" onClick={() => handleDone(todo.id)}>
                  <MdDone />
                </span>
              </>
            ) : (
              <button
                type="button"
                className="input__cancel"
                onClick={() => handleCancel()}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
