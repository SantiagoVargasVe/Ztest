import Form from "../components/Form";

function Home() {
  return (
    <div className="flex flex-col gap-10 items-center  justify-center  h-full">
      <h1 className="font-bold text-3xl  text-black">Welcome to ACME Agency</h1>
      <Form />
    </div>
  );
}

export default Home;
