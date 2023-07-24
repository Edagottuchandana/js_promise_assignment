function greetPerson(name) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (name) {
          resolve(`Hello, ${name}!`);
        } else {
          reject("No name provided.");
        }
      }, 3000); 
    });
  }
const personName = "chandana";
   greetPerson(personName)
    .then((greeting) => {
      console.log(greeting); 
    })
    .catch((error) => {
      console.error(error); 
    });
  
