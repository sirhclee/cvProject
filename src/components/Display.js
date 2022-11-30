import React from 'react'; 


const Display = (props) => {
  const {info} = props;  //maps props as experiences
 // console.log(experience);


  const editForm = (e) =>{
    e.preventDefault(); 
   
  }


  return (//displays each experience as a list item
    <ul> 
      {info.experience.map((experience) => {
        return <li key={experience.id}>
                      {experience.text}
                    <form onSubmit = {editForm}>
                    <button type="submit"> Edit </button>
                    </form>
                  </li>
                
                    
      })}
    </ul>

  );
}; 

export default Display;
