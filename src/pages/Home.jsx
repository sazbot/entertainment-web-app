import Recommended from "../components/Recommended";
import Trending from "../components/Trending";

function Home() {
  return (
    <div>
      <p>Search for movies or TV series</p>

      <p>Trending</p>
      <Trending />

      <p>Recommended for you</p>
      <Recommended />
    </div>
  );
}

export default Home;
