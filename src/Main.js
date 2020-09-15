import React, { useState } from "react";
import "./App.css";


const  Main=()=> {
const [markdown, setMarkdown] = useState("")

const handleChange = (e) => {  
    setMarkdown(e.target.value)
  } 
  return (
    <div className="App">
      <div className="row">
        <div className="col-6">
          <input type="textarea"
          className="form-control"
           value= {markdown}
           onChange={handleChange}/>
        </div>
        <div className="col-6">
        <input type="textarea"
          className="form-control"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
