//Deli Counter Lab
//By: Ryan Smith 
//
//


var deliLine = []; //Creates the array to hold the names of the customers

function takeANumber (line, name) { /* This function first enters the name 
of any new customer then greets them by name */

  line.push(name);
  console.log("Welcome, " + line[line.length - 1] + ". You are number " + line.length + " in line."); 
  return "Welcome, " + line[line.length - 1] + ". You are number " + line.length + " in line.";
}

function nowServing (line) { /* The now serving function will either server
the first person in line, or state that there's no one in line all based off the length of the array */
  if (line.length === 0){

    console.log ("There is nobody waiting to be served!");
    return "There is nobody waiting to be served!";

  }
  else{
     var serve = line[0]
     
     line.shift();
     console.log( "Currently serving " + serve + ".");
     return "Currently serving " + serve + "." ;
  }
}

function currentLine (line) { /* The current line function assigns each customer's name with a number,
then outputs the full list of customers name and numbers in the order they are in line  */

  if (line.length === 0) {

    console.log ("The line is currently empty.");
    return "The line is currently empty.";
  }
  else{

    var order = [];
     
    for(i=1; i <= line.length; i++){
    order.push(" " + i + ". " + line[i-1] )
     
    }
    
    console.log ("Current line is:" + order.toString() + "\n");
    return "Current line is: " + order.toString();
   
  } 
}

takeANumber(deliLine, "Ada");
 currentLine(deliLine);
takeANumber(deliLine, "Grace");
 currentLine(deliLine);
 nowServing(deliLine);
takeANumber(deliLine, "Kent");
 currentLine(deliLine);
takeANumber(deliLine, "Matz");
takeANumber(deliLine, "Steven");
takeANumber(deliLine, "Blake");
 currentLine(deliLine);
nowServing(deliLine);
currentLine(deliLine);
nowServing(deliLine);
currentLine(deliLine);
nowServing(deliLine);
currentLine(deliLine);
nowServing(deliLine);
currentLine(deliLine);
nowServing(deliLine);
currentLine(deliLine);
nowServing(deliLine);

