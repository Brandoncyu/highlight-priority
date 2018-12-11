import React, { Component } from 'react';
import { CirclePicker } from 'react-color';
import { Button, Form, Label, Input, FormGroup, Container, Row, Col } from 'reactstrap';

class Highlights extends Component {
  constructor(props){
    super(props)
    this.state = {
      startOffset: '',
      endOffset: '',
      color: '',
      priority: ''
    }
  }

  handleChangeComplete = (color) => {
    this.setState({ color: color.hex });
  };

  render() {
    return (
      <FormGroup>
        <Row>
          <Col xl="2">
            <Label htmlFor="user-text">Start Of Set</Label>
            <Input
              type="number"
              name="highlight-startOffset"
              id="highlight-startOffset"
              value={this.state.startOffset}
              onChange={e => this.setState({startOffset: e.target.value})} />
              <Label htmlFor="user-text">End Of Set</Label>
              <Input
                type="number"
                name="user-endOffset"
                id="user-endOffset"
                value={this.state.endOffset}
                onChange={e => this.setState({endOffset: e.target.value})} />
                <Label htmlFor="user-text">Priority</Label>
                <Input
                  type="number"
                  name="highlight-priority"
                  id="highlight-priority"
                  value={this.state.priority}
                  onChange={e => this.setState({priority: e.target.value})} />
          </Col>

          <Col>
            <Label>Color</Label>
            <CirclePicker
              id="user-color"
              color={ this.state.color }
              onChangeComplete={ this.handleChangeComplete }
              circleSpacing={20}
            />
          </Col>

        </Row>
      </FormGroup>
    );
  }
}

export default Highlights;
