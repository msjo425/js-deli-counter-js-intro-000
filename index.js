function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length > 0) {
  // guest = line.shift()
  return `Currently serving ${line.shift()}.`


}
  else {
    return `There is nobody waiting to be served!`
  }
}
