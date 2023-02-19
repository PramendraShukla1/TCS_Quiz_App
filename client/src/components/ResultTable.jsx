import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

const ResultTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`,
      (res) => {
        setData(res);
      }
    );
  });

  return (
    <div className="">
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempt</td>
            <td>Points Earned</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {!data ?? <div>No data Found</div>}
          {
          data.map((v, i) => (
            <tr className="table-body" key={i}>
              <td>{v?.username || 0}</td>
              <td>{v?.attempts || 0}</td>
              <td>{v?.points || 0 }</td>
              <td>{v?.achived || ""}</td>
            </tr> 
          ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
