// generate function that makes main layout
function generateHTML(teamstring) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body style="background-color: black;">

    <div class="container justify-align-center border rounded"
        style="background-color: greenyellow; height: 650px; margin-top: 60px; ">
        <div class="row m-4">

           
${teamstring}






            

           
            
        </div>


    </div>


</body>

</html>`


}






// generate function that makes the card 
function generateCard(arr) {
    console.log(arr)
    var roleInfo;
    if (arr.role === "Manager") {
        roleInfo = "Office Number: " + arr.officeNumber.officeNumber;
    } if (arr.role === "Intern") {
        roleInfo = "School: " + arr.school;
    }
    if (arr.role === "Engineer") {
        roleInfo = "Github: " + arr.github;
    }
    console.log(roleInfo);
    console.log(64)


    return `<div class="card col-md-3 ml-4 mt-4 border rounded" style="width: 20rem;">
<div class="card-body text-center">
    <h5 class="card-title"">${arr.name}</h5>
    <h6 class="card-subtitle mb-2 " >ID<span>${arr.id}</span></h6>
    <h6 class="card-subtitle mb-2 " >${arr.role}</h6>
    <p class="card-text" >${arr.email}</p>
    <p class="card-text" >${roleInfo}</p>


</div>
</div>`

}

exports.generateHTML = generateHTML;
exports.generateCard = generateCard;