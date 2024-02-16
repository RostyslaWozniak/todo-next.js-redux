"use client";
import TodoList from "@/components/TodoList";
import Form from "@/components/formTodo/Form";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="mx-auto flex min-h-screen w-[600px] flex-col items-center">
        <h1>ToDoList</h1>
        <Form />
        <TodoList />
      </div>
    </Provider>
  );
}
