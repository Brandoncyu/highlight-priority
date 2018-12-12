import React, { Component } from 'react';
import { Button, Form, Label, Input, Container, Row, Col } from 'reactstrap';
import Display from './components/display'
import Highlights from './components/highlights'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '',
      highlights: [],
      displayText: '',
      displayHighlights: [],
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
    this.setState({
      displayText: this.state.text,
      displayHighlights: this.state.highlights,
    })
  }

  clear = () =>{
    this.setState({
      text: '',
      highlights: []
    })
  }

  render() {
    return (
      <Container>
        <Display
          text={this.state.displayText}
          highlights={this.state.displayHighlights}
        />
        <Row>
          <Col>
            <h3>Input</h3>
            <Form>
              <Label htmlFor="user-text">Text</Label>
              <Input
                type="textarea"
                name="user-text"
                id="user-text"
                placeholder="Type In Your Text Here"
                value={this.state.text}
                onChange={e => this.setState({text: e.target.value})} />
              <br />
              <Button color="primary" onClick={this.submit}>Render Your Text</Button>{' '}
              <Button color="warning" onClick={this.addHighlights}>Add Highlights to Text</Button>{' '}
              <Button color="danger" onClick={this.clear}>Clear Text</Button>
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
