/*const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
  };
  
  // method: "POST" is missing from the object below
  const configurationObject = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  
  fetch("http://localhost:3000/dogs", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object);
    })
    .catch(function (error) {
      alert("Bad things! Ragnarők!");
      console.log(error.message);
    });
*/
    function submitData (usersName,usersEmail){
        
        const configurationObject = {
            method :"POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
                name:"`${usersName}`",
                email:"`${usersEmail}`"
            }),
          };


        return fetch("http://localhost:3000/users",configurationObject) 
        .then(function (response){
            return response.json();
        })
        .then (function(object){
        const idNumber = document.createElement('div');
        const NumberofId = document.createTextNode(`${object.id}`);
        console.log(NumberofId);
        theId=idNumber.appendChild(NumberofId);
        document.body.appendChild(idNumber);
        
            console.log(object.id);
            return theId;
        })

    }
