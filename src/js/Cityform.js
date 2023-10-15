import React,{useState} from "react";
import '../css/cityform.css'
import database from "../firebase";
const initialdata={
    student_name:"",
    city_name:""
}
const Cityform = ()=> {
    const [state,setstate] = useState(initialdata);
    const handlechange = (e) =>{
        const {name,value} = e.target;
        setstate({...state,[name]:value});
    }
    const handlesubmit = (e) =>
     {
        e.preventDefault();
        database.ref('citydata').push(state,(err)=>{
            if(err)
    {
      alert("not inserted");
    }
    else{
      alert("inserted");
    }
        })
     }

    return(
        <>
            <div className='app'>
                <div className='city-form'>
                    <div className='title'>
                        City form
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
export default Cityform;