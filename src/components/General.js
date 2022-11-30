import React, {useState} from 'react';


function General(){
  const initialState  = {name:'', address:'',}

  const [info, setInfo] = useState(initialState); 

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setInfo({...info, [name]:value})

  };


  //render() {
   // const {general, jobs} = this.props;

  return (//displays each task as a list item
  <div className = 'general-info'>
      <input type='text' name='name' value={info.name} onChange = {handleChange} placeholder="Name" id="name-input" />
      <div></div>
      <input type='text' name='address' value={info.address} onChange = {handleChange} placeholder="Address" id="address-input" />
    </div>
    );
 }; 
; 

export default General; 
