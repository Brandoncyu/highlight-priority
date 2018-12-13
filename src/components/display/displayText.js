import React from 'react';
import { Row, Col } from 'reactstrap';

const DisplayText = (props) => {
  return (
    <span style={{backgroundColor:props.color}}>
      {props.text}
    </span>

  );
}

export default DisplayText;
