function doSomething() {
    let myVar = 1;
    if (true) {
      let myVar = 2;
      console.log(myVar);
    }
    console.log(myVar);
  }
  
  doSomething();