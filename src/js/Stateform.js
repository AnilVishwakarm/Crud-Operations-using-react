import React,{useState} from "react";
import '../css/stateform.css';
import database from "../firebase";
const initialdata={
    statename:""
}
const Stateform = ()=> 
{
    const [state,setstate] = useState(initialdata);
    const handlechange = (e) =>{
        const {name,value} = e.target;
        setstate({...state,[name]:value});
    }
     const handlesubmit = (e) =>
     {
        e.preventDefault();
        database.ref('statedata').push(state,(err)=>{
            if(err)
    {
      alert("data not inserted");
    }
    else{
      alert("data inserted");
    }
        })
     }

    return(
        <>
            <div className='app'>
                <div className='state-form'>
                    <div className='title'>
                        State form
                    </div>
                   <form onSubmit={handlesubmit}>
                    <div className='input-container'>
                    <label>state</label>
                    <input
                       type="text"
                       name="statename"
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
export default Stateform;