function accept(data) {
    var type = typeof data;
    if (type === "string") {
        console.log("Это строка");
    } 
    if (type === "number") {
        console.log("Это число");
    } 
      
  }
  accept(7);
  accept("7");