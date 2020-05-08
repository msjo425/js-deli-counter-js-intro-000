function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length > 0) {
  return `Currently serving ${line.shift()}.`

}
  else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine (line){
  var cue = ""
  if (line.length > 0){
  for (i =0, i < line.length) {
    cue = cue + line[i]
}
  return `The line is currently ${cue}`
}
else{
  return `The line is currently empty.`
}
  }
