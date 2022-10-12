import { Button, Container, Row ,Col} from "react-bootstrap";
import React, { useState,useEffect } from 'react'
import { person } from "./data";
import DatesCount from "./components/DatesCount";
import Dateslist from "./components/Dateslist";
import DatesAction from "./components/DatesAction";


function App() {

  const [personData, setPersonData] = useState(person)
  const onDelete=()=>{
    setPersonData([])
  }
  const onViewData=()=>{
    setPersonData(person)
  }

  useEffect(() => {
    setPersonData([])
  }, [])

  return (
    <div className="font color-body">

      <Container className="py-5">
        <DatesCount person={personData}/>
        <Dateslist person={personData}/>
        <DatesAction deleteData={onDelete} onViewData={onViewData}/>
        
      </Container>
    </div>
  );
}

export default App;
