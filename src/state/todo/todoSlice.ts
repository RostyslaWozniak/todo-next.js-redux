import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
type TodoItem = {
  id: string;
  text: string;
  isDone: boolean;
};
type TodoState = {
  todos: TodoItem[];
};
const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodoAsync.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(updateTodoAsync.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id,
        );
        state.todos[index].isDone = !state.todos[index].isDone;
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.todos = state.todos.filter(
          (todo) => todo.id !== action.payload.id,
        );
      });
  },
});

// get all todos
export const getTodoAsync = createAsyncThunk("todos/getTodoAsync", async () => {
  const response = await axios.get("/api/todo/get");
  return response.data;
});

// add todo
export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (text: string) => {
    const data = {
      text: text,
      isDone: false,
    };
    try {
      const response = await axios.post("/api/todo/add", data);
      return response.data.data;
    } catch (err: any) {
      console.log(err.message);
    }
  },
);

// update todo
export const updateTodoAsync = createAsyncThunk(
  "todos/updateTodoAsync",
  async (id: string) => {
    try {
      const response = await axios.post(`/api/todo/update`, { id });
      return response.data;
    } catch (err: any) {
      console.log(err.message);
    }
  },
);

// delete todo
export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (id: string) => {
    try {
      const response = await axios.post(`/api/todo/delete`, { id });
      return response.data;
    } catch (err: any) {
      console.log(err.message);
    }
  },
);

export default todoSlice.reducer;
