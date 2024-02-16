import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputProps = {
  register: UseFormRegister<{
    text: string;
  }>;
  errors: FieldErrors<{
    text: string;
  }>;
};

const Input = ({ register, errors }: InputProps) => {
  return (
    <label className="min-h-16">
      <input
        {...register("text")}
        type="text"
        placeholder="Enter your todo"
        className="w-[400px] rounded p-1 text-black"
      />
      {errors.text?.message && (
        <p className="w-full text-start text-red-500">{errors.text.message}</p>
      )}
    </label>
  );
};

export default Input;
