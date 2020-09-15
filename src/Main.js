import React, { useState } from "react";
import "./App.css";
import snarkdown from 'snarkdown';

const  Main=()=> {
const [markdown, setMarkdown] = useState("# hello there")

const handleChange = (e) => {  
    setMarkdown(e.target.value)
  } 
  const html = snarkdown(markdown);

  return (
    <div className="App text-white">
      <div className="text-center text-white display-4"> <strong>A Simple MarkDown Previewer</strong> </div>
  
<div style={{marginTop:100 }}>
      <div className="row">
      <div className="col-6">
          <h1>Enter your Markdown here!!</h1>
      </div>
      <div className="col-6" >
          <h1 className="text-white">MarkDown Preview</h1>
          </div>
          
      </div>
      <div className="row ">
        <div className="col-6">
          <textarea type="text "
           value= {markdown}
           onChange={handleChange}/>
           </div>
        <div className="col-6">
        <div  id="a" className="w-100  p-3 border border-white " dangerouslySetInnerHTML={{__html: html}}/>

        </div>
      </div>
          
        
      </div>
      </div>

  );
}

export default Main;
