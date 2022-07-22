import {usetState} from "react";
import { ReactDOM } from "react";

function myForm() {
  const [textarea,setTextarea] = usetState("The content of a textarea goes in the valeu attribute.");
  const handleChange = (event) => {
    setTextarea(event.target.value);
  }
  
  return (
    <form>
      <textarea value = {textarea} onChange = {handleChange}/>
    </form>
  );
}

const root = ReactDOM.crateRoot(document.getElementById("root"));
root.render(<myForm/>);
