import { useState } from "react";
export default function Form() {
    const [formData, setFormData] = useState("");
    const [value, setValue] = useState(null);
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormData({ ...formData, value });
    };
    const handleClick = () => setValue("");
    const changes = (e) => {
      e.preventDefault();
      setValue(e.target.value);
    };
    return (
      <>
        <form action="" onSubmit={handleSubmit}>
          <input
            value={value}
            type="text"
            name=""
            id="searchBar"
            onChange={changes}
          />
          <button onClick={handleClick} className="search">
            Search
          </button>
        </form>
      </>
    );
  }