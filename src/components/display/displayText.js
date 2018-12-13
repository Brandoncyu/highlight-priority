import React from 'react';

const DisplayText = (props) => {
  return (
    <span style={{backgroundColor:props.color}}>
      {props.text}
    </span>
  );
}

export default DisplayText;
