import {
  deleteTodoAsync,
  getTodoAsync,
  updateTodoAsync,
} from "@/state/todo/todoSlice";
import { AppDispatch, RooteState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state: RooteState) => state.todo.todos);

  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteTodo = (id: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo?.isDone) {
      alert("This task has not been completed. Are you sure?");
      return;
    }
    dispatch(deleteTodoAsync(id));
  };
  useEffect(() => {
    dispatch(getTodoAsync());
  }, [dispatch]);
  return (
    <ul className="grid w-full gap-3">
      {todos.map(({ id, text, isDone }, index) => (
        <li key={id} className="flex items-center justify-between">
          <div className="relative flex">
            <span className="pr-2 font-bold">{index + 1}.</span>
            <div
              className="absolute left-0 top-1/2 h-[2px] bg-white duration-300"
              style={{
                right: isDone ? "0px" : "100%",
              }}
            />
            <p>{text}</p>
          </div>
          <div className="ml-5 flex gap-10">
            {isDone ? (
              <button
                onClick={() => dispatch(updateTodoAsync(id))}
                className="min-w-14 rounded border border-green-300 font-extrabold capitalize text-green-300"
              >
                ✓
              </button>
            ) : (
              <button
                onClick={() => dispatch(updateTodoAsync(id))}
                className="min-w-14 rounded border capitalize"
              >
                done
              </button>
            )}

            <button
              onClick={() => handleDeleteTodo(id)}
              className="rounded border border-red-500 px-2 capitalize text-red-500"
            >
              x
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
