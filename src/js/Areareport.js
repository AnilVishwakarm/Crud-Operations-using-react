import React, { useEffect, useState } from "react";
import database from "../firebase";
import '../css/areareport.css';
const Areareport = () => {
  const [state,setState]=useState({});
  useEffect(()=>{

    database.ref('areadata').on("value",(snapshot)=>{
      if(snapshot.val()!==null){
        setState({...snapshot.val()});
      }
      else{
        setState({});
          }
           })
              },[]);
 
  return (
       <>
          <div className="margin">
          <table border="1" className="content-table">
          <thead>
            <tr>
                 <th>sno</th>
                 <th>student name</th>
                 <th>area name</th>
                 <th>city name</th>
                 <th>Action</th>
                 </tr>
          </thead>
          <tbody>
                  {
                    Object.keys(state).map((id,index)=>{
                        return(
                            <tr key={id}>
                                <td>{index+1}</td>
                                <td>{state[id].student_name}</td>
                                <td>{state[id].area_name}</td>
                                <td>{state[id].city_name}</td>
                                <td>
                                <button 
                                   className="btn btn-edit"
                                  >
                                    edit
                                  </button>
                                  <button 
                                   className="btn btn-delete"
                                  >
                                    delete
                                  </button>
                                </td>
                            </tr>
                        );
                    })
                  }
           </tbody>
          </table>
          </div>
       
       </>
  );
};
export default Areareport;