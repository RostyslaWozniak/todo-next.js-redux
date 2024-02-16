import { TTodoSchema, todoSchema } from "@/lib/todoZod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormBtn from "./ui/FormBtn";
import Input from "./ui/Input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { addTodoAsync } from "@/state/todo/todoSlice";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TTodoSchema>({
    resolver: zodResolver(todoSchema),
  });
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: TTodoSchema) => {
    dispatch(addTodoAsync(data.text));
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-start gap-10 py-5"
    >
      <Input register={register} errors={errors} />
      <FormBtn isSubmitting={isSubmitting} />
    </form>
  );
};

export default Form;
