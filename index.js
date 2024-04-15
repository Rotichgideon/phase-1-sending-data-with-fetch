// Add your code here

function submitData(usersName, usersEmail) {

    const usersData = {
        name: usersName,
        email: usersEmail,
    }

    const configData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(usersData),
};

return fetch("http://localhost:3000/users", configData)
.then(resp => resp.json())
.then((nameEmail) => {
    const userName = document.createElement("h1");
    userName.innerText = nameEmail.name;
    const userEmail = document.createElement("p");
    userEmail.innerText = nameEmail.email;

    document.body.appendChild(userName)
    document.body.appendChild(userEmail)
})
.catch((err) => {
    const errMsg = document.createElement("p")
    errMsg.innerText = err.message;

    document.body.appendChild(errMsg)
})
};

submitData()