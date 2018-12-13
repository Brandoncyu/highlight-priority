import React from 'react';
import { Row, Col } from 'reactstrap';
import DisplayText from './display/displayText'

const Display = (props) => {
  let highlights = props.highlights.filter(highlight =>
    highlight.startOffSet !== '' && highlight.endOffSet !== '' && highlight.priority !== '' && highlight.startOffset <= highlight.endOffset).sort((a,b) => a.priority - b.priority)
  let text = props.text.split('\n')
  .map(text => {
    text = text.trim() + ' &&&&&space'
    return text.trim()
  }).join(' ').split(' ')
  while (text[text.length - 1] === '&&&&&space'){
    text = text.slice(0, -1)
  }
  while (text[0] === '&&&&&space'){
    text = text.shift()
  }

  var highVals = []
  for (let i = 0, k = 0; i < text.length; i++){
    let offset = i - k
    let accumulator = {color: 'none', priority:'none', space:false}
    if (text[i] === '&&&&&space'){
      accumulator.space = true
      k++
    } else{
      for (let j = 0; j < highlights.length; j++){
        if (offset >= highlights[j].startOffset - 1 && offset <= highlights[j].endOffset - 1) {
          accumulator = Object.assign({}, highlights[j])
          j = highlights.length
        }
      }
      accumulator.string = text[i]
      accumulator.space = false
    }
    highVals.push(accumulator)
  }

  let condHighVals = []
  if (highVals.length > 0){
    let holder = highVals[0]
    let string = highVals[0].string
    for (let i = 1; i < highVals.length; i++){
      if (highVals[i].space){
        let template = Object.assign({}, highVals[i - 1])
        template.text = string
        condHighVals.push(template)
        while (highVals[i].space){
          condHighVals.push(highVals[i])
          i++
        }
        holder = highVals[i]
        string = highVals[i].string
        i++
      }
      if (highVals[i].color === holder.color && highVals[i].priority === holder.priority){
        string = string + ' ' + highVals[i].string
      } else{
        let template = Object.assign({}, highVals[i - 1])
        template.text = string + ' '
        condHighVals.push(template)
        holder = highVals[i]
        string = text[i]
      }
    }
    let finalTemplate = highVals[highVals.length - 1]
    finalTemplate.text = string
    condHighVals.push(finalTemplate)
  }

  return (
    <Row>
      <Col>
        <h3>Display</h3>
        <p id="display">
          {condHighVals.map((highVals, value) => {
              return highVals.space ? <br /> : <DisplayText key={value} color={highVals.color} text={highVals.text} />
            }
          )}
        </p>
      </Col>
    </Row>
  );
}

export default Display;
