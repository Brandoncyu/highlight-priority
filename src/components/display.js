import React from 'react';
import { Row, Col } from 'reactstrap';
import DisplayText from './display/displayText'
import sortHighlights from './display-algorithims/00-sortHighlights'
import sortText from './display-algorithims/01-sortText'
import removeLineBreaks from './display-algorithims/02-removeLineBreaks'
import applyHighlights from './display-algorithims/03-applyHiglights'
import condenseHighlights from './display-algorithims/04-condenseHighlights'

const Display = (props) => {
  let highlights = sortHighlights(props.highlights)
  let text = sortText(props.text)
  let textSpaceless = removeLineBreaks(text)
  let highlightValues = applyHighlights(highlights, textSpaceless)
  let condensedHighlightValues = condenseHighlights(highlightValues)

  return (
    <Row>
      <Col>
        <h3>Display</h3>
        <p id="display">
          {condensedHighlightValues.map((highlightValue, value) => {
              return highlightValue.space ? <br /> : <DisplayText key={value} color={highlightValue.color} text={highlightValue.text} />
            }
          )}
        </p>
      </Col>
    </Row>
  );
}

export default Display;
