import { useState } from "react";
export default function Maincon() {
  return (
    <>
      <div>
        <div className="rent">
          <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span> 
          </h1>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div>
            <Form />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
export function Form() {
  const [formData,setFormData] = useState("")
  const [value, setValue] = useState(null);
  const handleSubmit = (e)=>{
    e.preventDefault();
     setFormData({...formData, value                                                        })
    }
  const handleClick = () => setValue("");
  const changes = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input value={value} type="text" name="" id="searchBar" onChange={changes} />
        <button onClick={handleClick} className="search">Search</button>
      </form>
    </>
  );
}
