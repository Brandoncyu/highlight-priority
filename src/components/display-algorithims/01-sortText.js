function sortText(text){
  //Line 4 will split the text into an array according to line breaks
  return text
  .split('\n')
  .map(text => {
    //the reason why there are two "trims" is that if there are multiple consectuive line breaks in the array, it will simply have "" as the placeholder in the array. We want to make sure that it will have the below character '&&&&&space' when it is rejoined into a word, but we still need to add that with a space to a word.
    text = text.trim() + ' &&&&&space'
    return text.trim()
  })
  .join(' ')
  .split(' ')
}

export default sortText
