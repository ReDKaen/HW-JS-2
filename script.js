let enterName = prompt("Enter Name")
let enterAge = parseFloat(prompt("Enter Age"))

while(!enterName|| isNaN(enterAge)){
    if(!enterName){
        enterName = prompt("Please enter your name")
    }

    if(isNaN(enterAge)){
        enterAge = parseFloat(prompt("Please enter your age"))
    }
}



if(enterAge < 18){
    alert("You are not allowed to visit this website")
} else if(enterAge >18,enterAge <=22){
    let confirmAge = confirm("Are you sure you want to continue?")

    if(confirmAge){
        alert(`Welcome, ${enterName} `)
    } else {
        alert("welcome")
    }

} 

if(enterAge >= 22){
    alert(`Welcome, ${enterName}`)
}



