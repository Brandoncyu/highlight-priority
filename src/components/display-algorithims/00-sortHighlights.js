function sortHighlights(highlights){
  //This is to filter out any highlight values that do not fit the criteria (see line 43 of the read me. It will then sort the highlights with the highest priority (or lowest number) first)
  return highlights.filter(highlight =>
    highlight.startOffSet !== '' && highlight.endOffSet !== '' && highlight.priority !== '' && highlight.startOffset <= highlight.endOffset)
    .sort((a,b) => a.priority - b.priority)
}

export default sortHighlights
