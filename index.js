var katzDeli = [];

function takeANumber(katzDeli, name)
{
  for(let i = 0; i < katzDeli.length; i++)
  {
    if(katzDeli[i] === name)
    {
      return ("Welcome" + katzDeli[length+1] + ". You are number " + (i+1) + " in line.")
    }
  }
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