var katzDeli = [];

function takeANumber(katzDeli, name)
{
  katzDeli.push(name)
  return ("Welcome" + name + ". You are number " + (katzDeli.length) + " in line.")
}

function nowServing(katzDeli)
{
  if(katzDeli.length === 0)
  {
    return "There is nobody waiting to be served!"
  }
  
  var firstPerson = katzDeli[0]
  katzDeli.shift()
  return firstPerson
}

function currentLine(katzDeli)
{
  if(katzDeli.length === 0)
  {
    return "The line is currently empty."  
  }
  return ("The line is currently: " + katzDeli)
}