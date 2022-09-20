import data from "../data.json";
import { useState } from "react";

function Trending() {
  const [trending, setTrending] = useState(
    data.filter((item) => item.isTrending)
  );

  const trendingElements = trending.map((item, index) => {
    return (
      <div key={index}>
        <p>{item.title}</p>
      </div>
    );
  });

  return <div>{trendingElements}</div>;
}

export default Trending;
