const resizeTextarea = (e) => {
  const numberOfLineBreaks = (e.target.value.match(/\n/g) || []).length
  const newHeight = 4.24 + numberOfLineBreaks * 2.24
  e.target.style.height = newHeight + 'rem'
}

export default resizeTextarea
