function applyHighlights(highlights, text){
  //what this function does is that it iterates through the text array. It determines whether each array value fits into the offset of a highlight value. If it does, it then pushes the lowest priority highlight value into a new array. The returned array will be the same length as the text array that is input.
  var highVals = []
  for (let i = 0, spaceCount = 0; i < text.length; i++){
    //line breaks are not included in terms of "characters", so the purpose of the code below is to determine a word's "true" position in an array.
    let offset = i - spaceCount
    let accumulator = {color: 'none', priority:'none', space:false}
    if (text[i] === '&&&&&space'){
      //if there is a space, it flips the key value pair to true and adds one to the spaceCount
      accumulator.space = true
      spaceCount++
    } else{
      for (let j = 0; j < highlights.length; j++){
        //I subtract one from the start and end offset because users will likely figure the first character as '1', the second as '2', whereas JavaScript starts with '0'
        if (offset >= highlights[j].startOffset - 1 && offset <= highlights[j].endOffset - 1) {
          //This object assign is necessary, otherwise the orignal object will be affected.
          accumulator = Object.assign({}, highlights[j])
          //If there is an offset match, it will break the loop because the found highlight value is the higher priority
          j = highlights.length
        }
      }
      //We are also adding the string to the object that is being passed into the array, if there is one.
      accumulator.string = text[i]
      accumulator.space = false
    }
    //the value is then pushed into the array that the function will return.
    highVals.push(accumulator)
  }
  return highVals
}

export default applyHighlights
