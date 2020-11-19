// Add your code here

// fetch(destinationURL, configObj)
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (object) {
//   console.log(object)
//   })
//   .catch(function (error) {
//   alert("Bad things!")
//   console.log(error.message)
// })

const submitData = (name, email) => {

  let configObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  }

  return fetch('http://localhost:3000/users', configObj)
    .then(resp => resp.json())
    .then(data => {
      document.body.append(data.id)
    })
    .catch(error => {
      document.body.append(error.message)
    })
}
