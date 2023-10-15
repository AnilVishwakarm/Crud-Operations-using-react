import React, { useState,useEffect } from "react";
import '../css/areaform.css';
import database from "../firebase";
const initialdata={
    student_name:"",
    area_name:"",
    city_name:""
}
const Areaform = ()=> {
    const [state,setstate] = useState(initialdata);
    const handlechange = (e) =>{
        const {name,value} = e.target;
        setstate({...state,[name]:value});
    }
    const handlesubmit = (e) =>
     {
        e.preventDefault();
        database.ref('areadata').push(state,(err)=>{
            if(err)
    {
      alert("not inserted");
    }
    else{
      alert("item inserted");
    }
        })
    }

    return(
        <>
            <div className='app'>
                <div className='area-form'>
                    <div className='title'>
                            Area form
                    </div>
                   <form onSubmit={handlesubmit}>
                    <div className='input-container'>
                    <label>student name</label>
                    <input
                       type="text"
                       name="student_name"
                       onChange={handlechange}
                       required
                    />
                    </div>
                    <div className='input-container'>
                    <label>area name</label>
                    <input
                       type="text"
                       name="area_name"
                       onChange={handlechange}
                       required
                    />
                    </div>
                    <div className='input-container'>
                    <label>city name</label>
                    <input
                       type="text"
                       name="city_name"
                       onChange={handlechange}
                       required
                    />
                    </div>
                    <div className='button-container'>
                        <input
                        type="submit"
                        value="save"
                        required
                        />
                    </div>
                     </form>
                </div>
            </div>
        </>
    );
}
export default Areaform;