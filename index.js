function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length > 0) {
  line.shift()
  return `Currently serving ${line[0]}.`


}
  else {
    return `There is nobody waiting to be served!`
  }
}
