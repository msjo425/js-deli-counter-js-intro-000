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
  let i = 0
  for i > line.length {
    cue = cue + line[i]

}
}
else{
  return `The line is currently empty.`
}
  }
