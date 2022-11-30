import React , { Component} from 'react';
import General from "./components/General"; 
import Jobs from "./components/Jobs"; 
import Education from "./components/Education"; 

class App extends Component{ 
  constructor(){
    super(); 

    this.state = { 
      general: {name: '', address: '', number:''},
      job: {}, 
      experience: [],
      education: [], 
    };
}

// JS code

    render() {
      const {general, job, experience, education} = this.state; 
  

  return(
    <div className='app'>
      <div >
        <General general={general} />
      </div>

      <div>
        <Education education ={education}/>
      </div>


      <div>
        <Jobs job= {job} experience={experience}/>
      </div>



    </div>
  )

}
}

export default App;
