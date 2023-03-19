import Form from "../components/Form";
import people from "../assets/home-people.png";
function Home() {
  return (
    <main className="flex flex-col gap-10 items-center  justify-center  h-full">
      <img src={people} alt="people avatars" />
      <h1 className="font-bold text-4xl text-center">
        Find the best agent for you!
      </h1>

      <p className="text-lg font-normal text-center">
        Fill the information below to get your matches.
      </p>
      <Form />
    </main>
  );
}

export default Home;
