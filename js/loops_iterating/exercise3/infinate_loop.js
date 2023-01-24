// The following code causes an infinite loop 
//(a loop that never stops iterating). Why?

/*
let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
*/

/*
my attempt: when the code runs the while loop it will evaluate
to false and won't run the while block, then it will attempt
the if condition and will evaluate to false again so it will
not break (run the if condition code) then will start over again
will evaluate to false on both code blocks and continues running
so there is a problem with the first condition (should start
with 0)
*/

// book solution
/*
The problem occurs on line 3 where we assign 1 to counter 
inside the conditional part of the while loop. JavaScript 
accepts this code since the assignment always returns a 
truthy value (1 in this case), the loop condition never 
becomes false. Furthermore, the test on line 7 never 
becomes true since the assignment on line 3 ensures that 
counter is always equal to 2 when we execute line 7.
*/ 

/*
note: in the conditional expression provided in the while loop
the counter variable was reassigned to 1. this is what i had 
missed. i initially thought that that conditional expression
has nothing to do with the declaration of counter = 0 in the 
top level scope (outside the while loop). but access of a 
variable from the while loop is possible or even the case note
the instructor said: this is tricky because reassignment 
expressions always return the value that's been reassigned.
now when the counter is incremented by 1 and the new value
becomes 2 the if statment returns false and will not break. in
this situation the code returns to the top where counter is 
assigned to 0 then reassigned to 1 where the while loop will 
again log 1 to console ... etc
*/