import React from 'react';
import { CirclePicker } from 'react-color';
import { Label, Input, FormGroup, Row, Col } from 'reactstrap';

const Highlights = (props) => {
  const handleChangeComplete = (color) => {
    props.edit(props.index, { color: color.hex });
  };

  const edit = (e) => {
    let value = Number(e.target.value)
    props.edit(props.index, { [e.target.name]: value });
  }

  return (
    <FormGroup className="highlight">
      <Row className = "my-4 mx-4">
        <Col xl="4">
          <Label htmlFor="user-text">Start Offset</Label>
          <Input
            type="number"
            name="startOffset"
            id="highlight-startOffset"
            value={props.highlight.startOffset}
            onChange={edit}
            required={true} />
          <Label htmlFor="user-text">End Offset</Label>
          <Input
            type="number"
            name="endOffset"
            id="user-endOffset"
            value={props.highlight.endOffset}
            onChange={edit}
            required={true} />
          <Label htmlFor="user-text">Priority</Label>
          <Input
            type="number"
            name="priority"
            id="highlight-priority"
            value={props.highlight.priority}
            onChange={edit}
            required={true} />
        </Col>
        <Col>
          <Label>Color</Label>
          <CirclePicker
            id="user-color"
            color={ props.highlight.color }
            onChangeComplete={ handleChangeComplete }
            circleSpacing={20}
          />
        </Col>
      </Row>
    </FormGroup>
  );
}

export default Highlights;
