import React, { useReducer, useRef } from 'react';
import { PatientReducer, patientState } from '../../Reducer/PatientReducer/PatientReducer';

const PatientManage = () => {
    const [state,dispatch]=useReducer(PatientReducer,patientState)
    const nameRef=useRef()
const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch({type:'ADD_PATIENT',name:nameRef.current.value,id:state.patients.length+1})
   nameRef.current.value=""
}

    
    return (
        <div>
                <h1>Patient Management :{state.patients.length}</h1>
                <form onSubmit={handleSubmit}>
                    <input ref={nameRef} placeholder="Enter Patient Name" ></input>
                </form>
                {
                    state.patients.map(pt=>{
                        return <li key={pt.id}
                                onClick={()=>dispatch({type:'REMOVE_PATIENT',id:pt.id})}
                                >
                            {pt.name}
                            </li>
                    })
                }
               
        </div>
    );
};

export default PatientManage;