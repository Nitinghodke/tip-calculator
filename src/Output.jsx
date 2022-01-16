import React from "react";

function Output(props) {
    let data = props.data;
    console.log(data)
  return (

      <>
      <div className="container">
          {
              data.map((ele,ind)=>{
               return  <>
              
                <ul>
                <li>{`${ele.name} offring a tip of ${ele.finalTip}`}</li>
                 
               </ul>
               <table className="table">
        <thead>
          <tr>
            <th scope="col">Total Person</th>
            <th scope="col">Tip </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.length+1}</td>
            <td> {parseInt(data.ele.finalTip)+ parseInt(data.ele.finalTip)}</td>
          </tr>
        </tbody>
      </table>
               </>
              })
          }
        
      </div>
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Total Person</th>
            <th scope="col">Tip </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.length+1}</td>
            {/* <td> {parseInt(data.ele.finalTip)+ parseInt(data.ele.finalTip)}</td> */}
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Output;
