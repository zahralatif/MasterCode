const userInput = prompt("Who's there?");

if (userInput === "Cancel") {
    alert("Canceled");
}
else if (userInput === "Other") {
    alert("I don't know");
}
else if (userInput === "Admin") {

    const passwordInput = prompt("Password");

    if (passwordInput === "Cancel") {
        alert("Canceled");
    }
    else if (passwordInput === "Other") {
        alert("Wrong password");
    }
    else if (passwordInput === "TheMaster") {
        alert("Welcome!");
    }
    else {
        alert("Wrong password");
    }
}
else {
    alert("I don't know");
}