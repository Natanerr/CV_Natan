import React from 'react'


import './App.scss'


import Avatar from "../Avatar/avatar";
import Generalinfo from "../Generalinfo/generalinfo";
import Languages from "../languages/languages";
import Knowledge from "../My-knowledge/knowledge";
import Experience from "../WorkExp/experience";
import FAQ from "../zFAQ/FAQ";



function App() {
  return (
      <div className={"container"}>
          <Avatar> </Avatar>
          <Generalinfo> </Generalinfo>
          <Languages> </Languages>
          <Knowledge> </Knowledge>
          <Experience> </Experience>
          <FAQ> </FAQ>
      </div>

  )

}


export default App;
