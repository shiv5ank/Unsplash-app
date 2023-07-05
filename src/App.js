import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [fetchData, setFetchData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("Sports cars");

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=qd11Z665L1ygx5qj7YBwhDZexk3PLM7xO_83uHue95w`
    )
      .then((res) => res.json())
      .then((data) => setFetchData(data.results));
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  function getSearch(e) {
    e.preventDefault();
    setQuery(search);

    setSearch("");
  }

  return (
    <div className="App">
      <h2>UNSPLASH</h2>
      <form className="form" onSubmit={getSearch}>
        <input
          className="search_container"
          type="search"
          placeholder="Search Image Name..."
          aria-label="Search"
          value={search}
          onChange={updateSearch}
        />
        <button id="btn" className="" type="submit">
          Search
        </button>
      </form>
      <div className="container">
        {fetchData.map((item, key) => {
          return (
            <div className="images" key={key}>
              <img
                src={item.urls.small}
                style={{ width: "350px", height: "auto" }}
                alt="images"
              />
              <a href={item.links.download} target="_blank" rel="noreferrer">
                download
              </a>
              <h6>user :{item.user.name}</h6>
              <h6>created_at :{item.created_at}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
