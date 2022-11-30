import React, {useState} from 'react';

const Education = (props) => {
  const initialState  = {company: '', role: '', date: '', id: 1, 
      experience: [],}

  const [info, setInfo] = useState(initialState); 

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setInfo({...info, [name]:value})
  };
  
  const onSubmitTask = (e) => { // on button click, push input element to "Experience" array 
    e.preventDefault(); 
    //if (!info.role || !info.company || !info.date) {alert('Complete all forms'); return false}; 
    setInfo({ 
      experience: info.experience.concat({role: info.role, company: info.company, date: info.date , id: info.id}),
      company:'', role:'', date:'', id: info.id+1 } , 
    ); 

  }; 

  const editTask = (e) => { 
    e.preventDefault();
    const [company, role, date] = e.target.children; //arranges the multiple inputs into array 

    setInfo({ 
      experience: info.experience,
      company: company.value, role: role.value, date: date.value, id: info.id+1 });
   

    var a = document.getElementById("jobList"); 
    document.getElementById(company.role).remove();

  };


  //render() {
  return (//displays each task as a list item
    <div className = 'jobsInfo'>
        <form onSubmit={onSubmitTask}>
            <label htmlFor="taskInput"> <h3>Enter Education</h3></label> 
            <div></div>
            <input type='text' name='company' value={info.company} onChange = {handleChange} placeholder="School" id="company-input" />
            <div></div>
            <input type='text' name='role' value={info.role} onChange = {handleChange} placeholder="Degree" id="role-input" />
            <div></div>
            <input type='text' name='date' value={info.date} onChange = {handleChange} placeholder="Date" id="date-input" />
            <button type="submit"> Add Education</button>
        </form>   

        <ul id="jobList"> 
        <h3>Education</h3>
      {info.experience.map((experience) => {
        return <li key={experience.id} id={experience.id}>
                      
                    <form onSubmit={editTask}>
                      <input type='text' name='company' value={experience.company} onChange = {handleChange} readOnly id="company-input" role={experience.id} />
                      <input type='text' name='role' value={experience.role} onChange = {handleChange} readOnly id="role-input" />
                      <input type='text' name='date' value={experience.date} onChange = {handleChange} readOnly id="date-input" />
                      <button type="submit" > Edit </button>
                    </form>
                  </li>
                
                    
      })}
     </ul>
        {/* <Display info={info}  />   */}

    </div>
    );
  }; 


export default Education; 
