function que1( ){
    var sum=0;
    for(var i=0; i<=10; i++){
        sum=sum+i;
    }
    document.write("the sum of 10 natural no is :"+sum);
    }
function que2( ){
    var x = parseInt(prompt("Enter the starting Number", "0"), 10);
        var y = parseInt(prompt("Enter the ending number", "0"), 10);
        var sum = 0;
        for( var s = x+1; s<y; s++){
            sum = sum + s;
        }
        document.write("The sum is : "+ sum);
}
function que3( ){
    document.write(" The Table of 5 <br>");
    var x = 5;

    for( var s = 1; s <= 10; s++){
        document.write(x+ " x "+ s +" = " + x*s +"<br>");
    }
}
function que4( ){
    var x = parseInt(prompt("Enter the starting Number", "0"), 10);
    document.write(" The Table of " + x +"<br>");
    
    for( var s = 1; s <= 10; s++){
        document.write(x+ " x "+ s +" = " + x*s +"<br>");
    }
}
function que5( ){
    var value = parseInt(prompt("Enter the Number to calculate Sum of : ","0"), 10);
      var sum = 0;
      while (value) {
          sum += value % 10;
          value = Math.floor(value / 10);
      }
      document.write("<br>The sum of the given Number is : "+ sum);
}
function que6(  ){
    var value = parseInt(prompt("to reverse : ","0"), 10);

        return (
        parseFloat(
          num
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(num)
      )
}
function que7( ){
    document.write("even no from 0 to 10 : <br>")
    for(var i=0; i<=10; i++){
        if(i%2==0){
            document.write(i + "<br>")
        }
    }
}
function que9( ){
    document.write("number divisible by 3 from 1 to 30: <br>")
    for(var i=1; i<=30; i++){
        if(i%3==0){
            document.write(i + "<br>")
        }
    }
}
function que8( ){
    var x = parseInt(prompt("Enter the starting Number", "0"), 10);
        var y = parseInt(prompt("Enter the ending number", "0"), 10);
    document.write("odd number are : <br>")
    for(var i=x; i<=y; i++){
        if(i%2 != 0){
            document.write(i + "<br>")
        }
    }
}
function que10( ){
    var x = parseInt(prompt("Enter the starting Number", "0"), 10);
        var y = parseInt(prompt("Enter the ending number", "0"), 10);
    for(var i=x; i<=y; i++){
        if(i%3!=0){
            document.write(i + "<br>")
        }
    }
}
function que11( ){
    var x = parseInt(prompt("Enter the Number", "0"), 10);
        document.write("The Double of the given Number is : "+ x*2 + "<br>");
}
function que12( ){
    var day = window.prompt("Enter the day of the week in lower case : ");
        if(day = "saturday" || day == "sunday") document.write("It's Weekend !\n");
        else document.write("Alas !, It's a working day \n");
}
function que13(){
    const number = parseInt(prompt('Enter the number of terms: '));
      let n1 = 0, n2 = 1, nextTerm;
      document.write("Fibonacci Series:<br>");
       for (let i = 1; i <= number; i++) {
      document.write(n1 + "<br>");
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
      }
}
function que14( ){
    var x = parseInt(prompt("Enter the Number", "0"), 10);
      document.write("The Square of "+ x + " is : "+ x*x +"<br><br>");
      document.write("The Cube of "+ x + " is : "+ x*x*x +"\n");
}
function que16( ){
    var x = parseInt(prompt("Enter the First Number", "0"), 10);
       var y = parseInt(prompt("Enter the Second Number", "0"), 10);
       var z = parseInt(prompt("Enter the Third Number", "0"), 10);
       (x>y && x>z)?document.write(x + " is greatest"):((y>x && y>z)?document.write(y + " is greatest"):document.write(z + " is greatest"));
}
function que17( ){
    var sum = 0;
       var x = parseInt(prompt("Enter the Number", "0"), 10);
       for(var i = 1; i<x; i++){
           sum = sum + i;
       }
       document.write("<br>The sum of First "+ x + " natural numbers is : " + sum );
}
function que19( ){
    let str = prompt("Enter the text: ");
      if (Number.isFinite(Number(str))) document.write("Entered text is a number.");
      else documet.write("Entered text is not a number.");
}
function que20( ){
    var x = parseInt(prompt("Enter the Number", "<number here>"), 10);
        (x==0)?document.write("Number is zero\n"):((x>0)?document.write("Number is Positive"):document.write("Number is Negative"));
}
