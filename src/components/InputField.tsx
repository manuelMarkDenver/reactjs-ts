import "./styles.css";

type InputFieldProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

const InputField = ({ todo, setTodo }: InputFieldProps) => {
  return (
    <form className="input">
      <input type="text" placeholder="Add a task" className="input__box" />
      <button type="submit" className="input__submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
