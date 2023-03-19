import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/left-arrow.png";
import currency from "../assets/currency.png";
type Inputs = {
  income: number;
};

function Form() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    navigate(`/matches/${data.income}`);
  };

  return (
    <form
      className="px-4 w-full flex flex-col items-start gap-16  md:w-96 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col w-full gap-2self-center">
        <label className="text-zambezi">Current Income</label>
        <div className="relative w-full ">
          <img
            className="absolute left-2 top-[26%]"
            src={currency}
            alt="currency"
          />
          <input
            className="border h-10 border-gainsboro w-full rounded-md indent-6 text-primary"
            {...register("income", { minLength: 5, maxLength: 5 })}
          />
        </div>

        {errors.income?.type === "required" && (
          <p role="alert">Income is required</p>
        )}

        {errors.income?.type === "minLength" && (
          <p role="alert">5 digits are required </p>
        )}

        {errors.income?.type === "maxLength" && (
          <p role="alert">5 digits are required </p>
        )}
      </div>

      <div className="w-full relative md:flex md:justify-end">
        <img className="absolute top-1/3 right-4" src={arrow} alt="arrow" />
        <input
          className="bg-highlight text-white font-bold w-full h-12 px-4 py-1 rounded-md md:w-48 "
          type="submit"
          value="Get matches"
        />
      </div>
    </form>
  );
}

export default Form;
