import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Todo } from "../types";
import { MdDone } from "react-icons/md";

type SingleTodoProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<SingleTodoProps> = ({
  todo,
  todos,
  setTodos,
}: SingleTodoProps) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
