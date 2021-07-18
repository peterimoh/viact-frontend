import React from 'react'
import { useFetch } from "./useFetch";


function Seach(props) {
  const searchValue = React.useRef("");
  const { query, setQuery } = useFetch();
  const [searchTerm, setSearchTerm] = React.useState("");


  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
 

    const handleSubmit = (e) => {
      e.preventDefault();
    };
    return (
      <section className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            value={searchTerm || ""}
            ref={searchValue}
            // onKeyPress={(e) => setFilter(e.target.value)}
            // className="form-input"
            id="myInput"
          />
        </form>
      </section>
    );
}

export default Seach
