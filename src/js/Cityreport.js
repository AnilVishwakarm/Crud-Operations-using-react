import React, { useEffect, useState } from "react";
import database from "../firebase";
const Cityreport = () => {
  const [state,setState]=useState({});
  useEffect(()=>{

    database.ref('citydata').on("value",(snapshot)=>{
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
          <table border="1">
          <thead>
            <tr>
                 <th>sno</th>
                 <th>student name</th>
                 <th>city name</th>
                 </tr>
          </thead>
          <tbody>
                  {
                    Object.keys(state).map((id,index)=>{
                        return(
                            <tr key={id}>
                                <td>{index+1}</td>
                                <td>{state[id].student_name}</td>
                                <td>{state[id].city_name}</td>
                            </tr>
                        );
                    })
                  }
           </tbody>
          </table>
       
       </>
  );
};
export default Cityreport;