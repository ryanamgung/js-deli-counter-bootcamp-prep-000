var katzDeli = [];

function takeANumber(katzDeli, name)
{
  katzDeli.push(name)
  return ("Welcome, " + name + ". You are number " + (katzDeli.length) + " in line.")
}

function nowServing(katzDeli)
{
  if(katzDeli.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  
  var firstPerson = katzDeli[0]
  katzDeli.shift()
  return "Currently serving " + firstPerson + "."
}

function currentLine(katzDeli)
{
  var line = [];
  
  if(katzDeli.length === 0)
  {
    return "The line is currently empty."  
  }
  
  for(let i = 0; i < katzDeli.length; i++)
  {
    line.push()
  }
      for(var i = 0; i < x.length; i++) {
        line += (i + 1) + ". " + x[i] + ", "
      }
      line = line.slice(0, line.length-2)
      return "The line is currently: " + line
}