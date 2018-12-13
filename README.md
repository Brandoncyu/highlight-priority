# Textio Take Home Challenge

For my application for the Front-End Engineer at Textio, I was tasked with creating a web service that will highlight phrases in a document given a string and an array of highlight objects. If highlights overlap, it will show the higher-priority highlights over the lower-priority highlights.

**[A further description of the coding challenge can be found here](./Short-Take-Home-Textio-Application-Engineering.pdf)**.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software.

* fork and clone this repository

### Installing

Install the Node dependencies:

```shell
run npm start
```

## Key Features

This application requires two inputs: **text** that will be manipulated and **highlight values** that will control the manipulation.

The **text** can be input in the text box on the left.

To add **highlight values**, click the yellow button labeled "Add Highlights to Text." A form group will be rendered below. You can add as many as you'd like; add more by pressing the button again.

Within each form group, type in a number in the "Start Offset" box for which word you'd like the highlights to begin, and a number in the "End Offset" box for the word which you'd like the highlights to end.

You will also need to type in a number in the "Priority" box to determine the order in which the highlights will be prioritized. **The priorities will be determined by ascending order.** For example, the highlight value with a priority value of '0' will have a higher priority with a higlight value with a priority of '1'. You can determine your highlight color by clicking the colored circle of your choosing in the color swatch on the right of the box.

Please note that you **must** have the "Start Offset", "End Offset", and "Priority" boxes filled in order for each highlight value to be rendered. The "Start Offset" value must also be less than or equal to the "End Offset" value. **Any highlight values that do not fit the above criteria will not be considered.**

To render your text, click the blue button labeled "Render Your Text". The text will then be rendered with the highlight values on the right side of your screen. To clear the text and the highlights on the form on the left, click the red button labeled "Clear Text/Highlights".

## Built With

* [JavaScript](https://www.javascript.com/) - The language
* [Bootstrap](https://bootstrap.com/) - The css framework used
* [React](https://reactjs.org/) - Frontend library
* [Node](https://nodejs.org/en/) - Package ecosystem
* [React Color](https://casesandberg.github.io/react-color/) - A package that creates color-picking packages in React

## Author

* **Brandon Yu** - *Initial work* - [Brandoncyu](https://github.com/Brandoncyu)
