import { useForm, SubmitHandler } from "react-hook-form";
import { redirect } from "react-router-dom";

type Inputs = {
  income: number;
};

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    debugger;
    redirect("/matches");
  };

  return (
    <form
      className="flex flex-col items-center gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Current Income</label>
      <input
        className="border border-black rounded-sm"
        {...register("income", { minLength: 5, maxLength: 5 })}
      />

      {errors.income?.type === "required" && (
        <p role="alert">Income is required</p>
      )}

      {errors.income?.type === "minLength" && (
        <p role="alert">5 digits are required </p>
      )}

      {errors.income?.type === "maxLength" && (
        <p role="alert">5 digits are required </p>
      )}

      <input className="bg-sky-300 px-4 py-1 rounded-md" type="submit" />
    </form>
  );
}

export default Form;
