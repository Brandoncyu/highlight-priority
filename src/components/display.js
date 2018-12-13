import React from 'react';
import { Row, Col } from 'reactstrap';
import DisplayText from './display/displayText'

const Display = (props) => {
  let highlights = props.highlights.filter(highlight =>
    highlight.startOffSet !== '' && highlight.endOffSet !== '' && highlight.priority !== '' && highlight.startOffset <= highlight.endOffset).sort((a,b) => a.priority - b.priority)
  let text = props.text.split(' ')
  var highVals = []

  for (var i = 0; i < text.length; i++){
    let accumulator = {color: 'none', priority:'none'}
    for (var j = 0; j < highlights.length; j++){
      if (i >= highlights[j].startOffset && i <= highlights[j].endOffset) {
        accumulator = Object.assign({}, highlights[j])
        j = highlights.length
      }
    }
    highVals.push(accumulator)
  }

  let reducedHighVals = []
  let holder = highVals[0]
  let string = text[0]
  for (var i = 1; i < highVals.length; i++){
    if (highVals[i].color === holder.color && highVals[i].priority === holder.priority){
      string = string + ' ' + text[i]
    } else{
      let template = Object.assign({}, highVals[i - 1])
      template.text = string + ' '
      reducedHighVals.push(template)
      holder = highVals[i]
      string = text[i]
    }
  }
  let finalTemplate = highVals[highVals.length - 1]
  finalTemplate.text = string
  reducedHighVals.push(finalTemplate)

  return (
    <Row>
      <Col>
        <h3>Display</h3>
        <p id="display">
          {reducedHighVals.map((highVals, value) =>
            <DisplayText key={value} color={highVals.color} text={highVals.text} />)
          }
        </p>
      </Col>
    </Row>
  );
}

export default Display;
