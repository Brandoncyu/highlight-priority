function removeLineBreaks(text){
  //This is to make sure that there are no line breaks at the end of the array.
  while (text[text.length - 1] === '&&&&&space'){
    text.pop()
  }
  //This is to make sure that there are no line breaks at the beginning of the array.
  while (text[0] === '&&&&&space'){
    text.shift()
  }
  return text
}

export default removeLineBreaks
