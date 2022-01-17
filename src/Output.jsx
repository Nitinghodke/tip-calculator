import React from "react";

function Output(props) {
  let data = props.data;
  let sum=0;
  let newnum=data.map((ele) => {
    sum +=parseInt(ele.finalTip);
    return sum;
  })
  console.log(data);
  return (
    <>
      <div>
        {data.map((ele, ind) => {
          return (
            <ul>
              <li>{`${ele.name} offring a tip of ${ele.finalTip}`}</li>
            </ul>
          );
        })}
      </div>
      {/* <button>Calculate Tip & Person</button> */}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Total Person</th>
              <th scope="col">Tip </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.length}</td>
              <td>
                {newnum[newnum.length-1]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Output;
