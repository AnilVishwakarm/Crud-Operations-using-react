import React, { useEffect, useState } from "react";
import database from "../firebase";
const Statereport = () => {
  const [state,setState]=useState({});
  useEffect(()=>{

    database.ref('statedata').on("value",(snapshot)=>{
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
                 <th>state</th>
                 </tr>
          </thead>
          <tbody>
                  {
                    Object.keys(state).map((id,index)=>{
                        return(
                            <tr key={id}>
                                <td>{index+1}</td>
                                <td>{state[id].statename}</td>
                            </tr>
                        );
                    })
                  }
           </tbody>
          </table>
       
       </>
  );
};
export default Statereport;