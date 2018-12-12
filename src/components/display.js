import React from 'react';
import { Row, Col } from 'reactstrap';

const Display = (props) => {
  let highlights = props.highlights.filter(highlight =>
    highlight.startOffSet !== '' && highlight.endOffSet !== '' && highlight.priority !== '' && highlight.startOffset <= highlight.endOffset).sort((a,b) => a.priority - b.priority)
  let text = props.text.split('')
  console.log(highlights)
  return (
    <div>
      <Row className="my-4">
        <h1>This is my test for Textio!</h1>
      </Row>
      <Row>
        <Col>
          <h3>Display</h3>
          <p id="display"><span style={{backgroundColor:"#f44336"}}>{props.text}</span></p>
        </Col>
      </Row>
    </div>
  );
}

export default Display;
