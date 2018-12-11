import React, { Component } from 'react';
import logo from './logo.svg';
import { Button, Form, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <Container>
        <Row className="my-4">
          <h1>This is my test for Textio!</h1>
        </Row>
        <Row>
          <Col>
            <Form>
              <Label htmlFor="user-text">Text</Label>
              <Input
                type="text"
                name="user-text"
                id="user-text"
                placeholder="Type In Your Text Here"
                value={this.state.text}
                onChange={e => this.setState({text: e.target.value})} />
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
