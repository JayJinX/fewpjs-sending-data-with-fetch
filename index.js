// Add your code here
let formData = {
    name: "Steve",
    email:"steve@steve.com"
}

const destinationUrl = "http://localhost:3000/users"

let configObject = {
    method:"POST",
    headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
}

function submitData() {
    return fetch(destinationUrl, configObject)
    .then(response=>response.json())
    .then(e=>addId (e.id))
    .catch(error=>addId(error.message))
};

function addId(id) {
    let newId = document.createElement("p");
    document.body.appendChild(newId);
    newId.innerHTML = id
}
