import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const DatesAction = ({deleteData,onViewData}) => {
        return (
        <Row className="justify-content-center my-2">
          <Col sm="8" className="d-flex justify-content-between ">  
            <Button onClick={deleteData} className="btn-style p-2">Clear All</Button>
            <Button onClick={onViewData} className="btn-style p-2">Display data</Button>
           </Col>
        </Row>
        );
}

export default DatesAction;
