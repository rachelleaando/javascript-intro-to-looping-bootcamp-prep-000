function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}


function whileLoop(n) {
  let countdown = n;
     while (countdown > 0) {
      console.log(--countdown)
    }
    return "done";
  }
  
  function doWhileLoop (array) {
    function maybeTrue() {
<<<<<<< HEAD
      
      
      //JUST FOUND THIS LINE AND STILL FIGURING OUT THE EXACT REASON WHY IT WORKS WELL
      //*********************************************************
     return Math.random() >= 0.5
      //*********************************************************
      
=======
      return array;
>>>>>>> 899936e8d2d1ed0413a4579925091b05f0032789
    }
    
   do {
    array.pop();
  } while (array.length > -1 && maybeTrue());
    return array;
}
  