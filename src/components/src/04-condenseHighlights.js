function condenseHighlights(highVals){
  //We are now condensing the highlights to see if consecutive values have the same properties and colors.
  let condHighVals = []
  if (highVals.length > 0){
    //As such we will iterate through the array, placing a holder highlight value and holder string.
    let holderValue = highVals[0]
    let holderString = highVals[0].string
    for (let i = 1; i < highVals.length; i++){
      //The below if/else conditional detrmines if there is a line break.
      if (!highVals[i].space){
        if (highVals[i].color === holderValue.color && highVals[i].priority === holderValue.priority){
          //If the colors of the array value has the same color and priority as the holder highlight value, then we add the array's string value to the holder string
          holderString = holderString + ' ' + highVals[i].string
        } else {
          //If it does NOT meet the conditional, then we need to reset the holder. First we will assign the holder to a new template (using object.assign again to not tamper with the origial key-value pair).
          let template = Object.assign({}, holderValue)
          //We will also add the holder string to the object, along with a space at the end of the string.
          template.text = holderString + ' '
          //We will then push that value into the accumulator.
          condHighVals.push(template)
          //We then reset the holder and holder string to the current array value.
          holderValue = highVals[i]
          holderString = highVals[i].string
        }
      } else {
        //If there is a line break, then we are replicating the same logic as lines 15-21; We will push the current holder value and string into the accumulator, but we will also push in the current line break value in as well. We will then iterate to the next value in the current array and set that the holder value and string.
        let template = Object.assign({}, holderValue)
        template.text = holderString
        condHighVals.push(template)
        //This is to ensure that, if there are consecutive line breaks, that the holder value and string are not set to line breaks.
        while (highVals[i].space){
          condHighVals.push(highVals[i])
          i++
        }
        holderValue = highVals[i]
        holderString = highVals[i].string
      }
    }
    //this pushes in the final holder value/string back into the accumuator.
    let finalHolder = Object.assign({}, holderValue)
    finalHolder.text = holderString
    condHighVals.push(finalHolder)
  }
  return condHighVals
}

export default condenseHighlights
