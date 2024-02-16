import Loader from "./Loader";

type FormBtnProps = {
  isSubmitting: boolean;
};

const FormBtn = ({ isSubmitting }: FormBtnProps) => {
  return (
    <button
      type="submit"
      className="h-[34px] w-[150px] rounded border px-10 py-1 capitalize"
    >
      {isSubmitting ? <Loader /> : "add"}
    </button>
  );
};

export default FormBtn;
