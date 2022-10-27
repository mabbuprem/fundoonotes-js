//  window.addEventListener('DOMContentLoaded', function () {

let descriptionServer, titleServer, archiveStatusServer;
let title2 = document.querySelector(".titleMain");
let titleDescription = document.querySelector(".takeNote")
let descIcon = document.querySelector(".descriptionIcon")
let bottomIcon = document.querySelector(".mainBottomIcons")
let closeB = document.querySelector(".closeButton")
let modeltitle = document.querySelector("#takeNoteTitleInput")
let archiveButton = document.querySelector(".prem")
let trashButton = document.querySelector(".prem")
let colorButton = document.querySelector(".prem")
let btn = document.getElementById("btn-colors")
console.log(modeltitle)
let modelDescription = document.querySelector("#takeNoteDescrptionInput")
console.log(modelDescription);
let token = localStorage.getItem('token');
let mybtn = document.getElementById("myBtn")
getallnotes();
// ArchiveNotes()
getallarchivednotes();
getalltrashnotes();




titleServer = "";
descriptionServer = ""
archiveStatusServer = false


title2.addEventListener("change", function () {
    titleServer = title2.value
})


titleDescription.addEventListener("change", function () {
    descriptionServer = titleDescription.value
})

// archiveButton.addEventListener("click", function (event) {
//     event.preventDefault()
//     archiveStatusServer = true
//     console.log(archiveStatusServer)
// })


// console.log(archiveStatusServer)


// if (archiveStatusServer === true) {

//     console.log("Hey its true from if condition to check if archive button is clicked")
// }


$(document).ready(function () {
    $(".takeNote").click(function () {
        title2.style.display = "inline"
        title2.style.padding = "20px"
        titleDescription.style.border = "white"
        titleDescription.style.padding = "10px"
        titleDescription.style.paddingLeft = "20px"
        titleDescription.style.fontWeight = "lighter"
        descIcon.style.display = "none"
        bottomIcon.style.display = "flex"
        bottomIcon.style.height = "50px"

    });

    // $(".closeButton").click(function () {
    //     title2.style.display = "none"
    //     descIcon.style.display = "contents"
    //     bottomIcon.style.display = "none"
    //     bottomIcon.style.height = "2px"
    //     title2.style.background = "#FFFFFF";
    //     titleDescription.style.background = "#FFFFFF";
    //     titleServer = " ";
    //     descriptionServer = " ";
    //     title2.value = "";
    //     titleDescription.value = "";
    // })



});


//Note Added
closeB.addEventListener("click", function (event) {
    event.preventDefault()
    let data = {
        "title": titleServer,
        "description": descriptionServer
    }
    console.log("show data", data, token)


    // $(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:8000/api/createNote",
        type: "POST",
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        success: function (result) {
            console.log(result);


        }

    })



})
//get all notes
function getallnotes() {
    console.log("get all notes")
    $.ajax({
        url: "http://127.0.0.1:8000/api/getAllNotes",
        type: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },

        success: function (result) {
            console.log(result.notes);
            let notearray = result.notes
            // this.notesarray.reverse()
            document.getElementById('notediv').innerHTML = notearray.map((note) => `
                
                <div class="displaynotes" >
                
                <p class="title">${note.title}</p>
                <p class="description">${note.description}</p>
                <div  class="d-flex flex-row justify-content-start" >
                <div>
                <img class="icons"
                            src="../assets/add_alert_FILL0_wght400_GRAD0_opsz48 (1).svg" alt="">
                </div>
                <div>
                <img
                    class="icons"  src="../assets/person_add_FILL0_wght400_GRAD0_opsz48 (1).svg" alt="">
                </div>
    
                <div class="btn-group dropup" id="color-palette-dropdown">
                <button onclick="colorbtn()" class="prem" type="button" id="btn-colors" >
                <img 
               class="icons" src="../assets/palette_FILL0_wght400_GRAD0_opsz48 (1).svg" alt=""></img>
                </button>
                <div class="color-palette dropdown-menu" id ="color-palette">
                <button onclick="colournote(${note.id},'white',)" class="bg-white circled prem"></button>
                <button onclick="colournote(${note.id},'red')" class="bg-red"></button>
                <button onclick="colournote(${note.id},'orange')" class="bg-orange"></button>
                <button onclick="colournote(${note.id},'yellow')" class="bg-yellow"></button>
                <button onclick="colournote(${note.id},'green')" class="bg-green"></button>
                <button onclick="colournote(${note.id},'turquoise')" class="bg-turquoise"></button>
                <button onclick="colournote(${note.id},'blue')" class="bg-blue"></button>
                <button onclick="colournote(${note.id},'dark-blue')" class="bg-dark-blue"></button>
                <button onclick="colournote(${note.id},'purple')" class="bg-purple"></button>
                <button onclick="colournote(${note.id},'white')" class="bg-pink"></button>
                <button onclick="colournote(${note.id},'pink')" class="bg-brown"></button>
                <button onclick="colournote(${note.id},'grey')" class="bg-grey"></button>
                </div>
                </div>
    
                <div>
                <img 
               class="icons" src="../assets/image_FILL0_wght400_GRAD0_opsz48 (1).svg" alt="">
                </div>
                <div id="ArchiveB">
                <button onclick="ArchiveNotes(${note.id})" class="btn-btn-primary prem"><img  
                    class="icons"   src="../assets/archive_FILL0_wght400_GRAD0_opsz48 (1).svg" alt=""></button>
                </div>
                <div class="dropdown">
                <button class="btn-btn-primary prem" id="myBtn" class="dropbtn"><img 
                class="icons"  src="../assets/more_vert_FILL0_wght400_GRAD0_opsz48 (1).svg" alt=""></button>
                <div id="myDropdown" class="dropdown-content">
               <button onclick="trashNoteById(${note.id})" class="prem" <a href=>Delete Note</a></button>
                <a href=>Add label</a>
                <a href=>Add drawing</a>
                <a href=>make a copy</a>
                <a href=>show checkbox</a>
                  
                </div>
              </div>
               
                </div>
            </div>


                
                `)
        },


    })


    // Get the button, and when the user clicks on it, execute myFunction
    // document.getElementById("myBtn").onclick = function () { myFunction() };

    /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
    // function myFunction() {
    //     document.getElementById("myDropdown").classList.toggle("show");
    // }



}
//ArchiveNotes
function ArchiveNotes(id) {
    console.log("archive", id)
    let data = {
        id: id
    }
    console.log("show data")

    // $(document).ready(function () {
    $.ajax({
        url: "http://127.0.0.1:8000/api/archivenote",
        type: "POST",
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        success: function (result) {
            console.log(result);


        }

    })
}
//trashNoteById
function trashNoteById(id) {
    console.log("trashnote", id)
    let data = {
        id: id
    }
    // console.log("show data")
    $.ajax({
        url: "http://127.0.0.1:8000/api/trashNoteById",
        type: "POST",
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        success: function (result) {
            console.log(result);


        }

    })
}
//colornote
function colournote(id, code) {
    console.log("color", id, code)
    let data = {
        id: id,
        colour: code
    }
    // console.log("show data")

    $.ajax({
        url: "http://127.0.0.1:8000/api/colournote",
        type: "POST",
        data: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },
        success: function (result) {
            console.log(result);


        }

    })
}
//colour button function
function colorbtn() {
    console.log("click btn")
    document.getElementById('color-palette').style.display = "block"
}

// get all archive notes function
function getallarchivednotes() {
    console.log("getallarchivednotes")
    $.ajax({
        url: "http://127.0.0.1:8000/api/getallarchivednotes",
        type: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },

        success: function (result) {
            console.log(result.notes);
            // this.notesarray.reverse()
        },


    })






}
// get all trash notes function
function getalltrashnotes(){
    console.log('get all trash notes')

    $.ajax({
        url: "http://127.0.0.1:8000/api/getAllTrashedNotes",
        type: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        },

        success: function (result) {
            console.log(result.notes);
            // this.notesarray.reverse()
        },


    })
}





//   })



