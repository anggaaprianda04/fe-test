import useHome from "./useHome";

const Home = () => {
  const { dataUsers, isLoadingUser } = useHome();

  console.log("user", dataUsers);
  console.log("loading", isLoadingUser);

  return (
    <div>
      <h1>Halaman Home</h1>
    </div>
  );
};

export default Home;
