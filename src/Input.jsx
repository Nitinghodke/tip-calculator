import React, { useState } from "react";
// import Output from "./Output";
import Out from "./Out";

function Input() {
  const [peopel, setpeopel] = useState([]);
  const [sum, setTotalSum] = useState(0);
  const [state, setState] = useState({
    name: "",
    amount: "",
    type: "",
    finalTip: "",
    percentage: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const cal = () => {
    // const finalTip = parseInt(percentage/100)*state.amount;
    const finalTip = parseInt(state.amount * state.percentage) / 100;

    //getTipamount(state.type)
    ///setState({...state,finalTip:finalTip})
    state.finalTip = finalTip; // mutably --->
    setTotalSum(sum + finalTip);

    setpeopel([...peopel, state]);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="bill"
        name="amount"
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={handleChange}
      />
      <br />
      <select name="percentage" onChange={handleChange}>
        <option value={20}>20%</option>
        <option value={10}>10%</option>
        <option value={5}>5%</option>
      </select>
      <br />
      <button onClick={cal}>Add People</button>

      {/* <Output  data={peopel}/>
      {peopel.map((ele, ind) => {
          return < Out 
                 key={ind}
                 value={ele}

           />
          
      })} */}





      {console.log(peopel + "people")}

      {/* {
    peopel.map((ele,ind)=>{
       
      return <div>
            
        <h1>
              {ele.name}
          </h1>
          <h1>
              {ele.amount}
          </h1>
        
          <h1>
              {ele.finalTip}
          </h1>
        
          <h2>
              {ind+1}
          </h2>

          <h1>
              {parseInt(ele.finalTip)+ parseInt(ele.finalTip)}
          </h1>
        
        
        
        </div>
        
    })
      
    
} */}
    </div>
  );
}

export default Input;
