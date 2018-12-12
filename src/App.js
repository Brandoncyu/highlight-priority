import React, { Component } from 'react';
import { Button, Form, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import Highlights from './components/highlights'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '',
      highlights: []
    }
  }

  addHighlights = () => {
    let highlightRules = {
      startOffset: '',
      endOffset: '',
      color: '',
      priority: ''
    }

    this.setState({
      highlights: this.state.highlights.concat(highlightRules),
    })
  }

  editHighlights = (index, obj) => {
    let highlightArray = this.state.highlights
    let newHighlight = {
      ...highlightArray[index],
      ...obj
    }

    let highlights = [...highlightArray.slice(0, index), newHighlight, ...highlightArray.slice(index + 1)]

    this.setState({
      highlights
    })
  }

  submit = () =>{
    console.log(this.state)
  }

  render() {
    return (
      <Container>
        <Row className="my-4">
          <h1>This is my test for Textio!</h1>
        </Row>
        <Row>
          <Col>
            <h3>Input</h3>
            <Form>
              <Label htmlFor="user-text">Text</Label>
              <Input
                type="text"
                name="user-text"
                id="user-text"
                placeholder="Type In Your Text Here"
                value={this.state.text}
                onChange={e => this.setState({text: e.target.value})} />
              <br />
              <Button color="primary" onClick={this.submit}>Render Your Text</Button>{' '}
              <Button color="secondary" onClick={this.addHighlights}>Add Highlights to Text</Button>
              {this.state.highlights.map((highlight, index)=>
                 <Highlights
                  key={index}
                  index={index}
                  highlight={highlight}
                  edit={this.editHighlights}
                 />
              )}
            </Form>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default App;
