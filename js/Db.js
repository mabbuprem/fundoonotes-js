window.addEventListener('DOMContentLoaded', function () {

    let descriptionServer, titleServer, archiveStatusServer;
    let title2 = document.querySelector(".titleMain");
    let titleDescription = document.querySelector(".takeNote")
    let descIcon = document.querySelector(".descriptionIcon")
    let bottomIcon = document.querySelector(".mainBottomIcons")
    let closeB = document.querySelector(".closeButton")
    let modeltitle = document.querySelector("#takeNoteTitleInput")
    let archiveButton = document.querySelector(".prem")
    console.log(modeltitle)
    let modelDescription = document.querySelector("#takeNoteDescrptionInput")
    console.log(modelDescription);
    let token = localStorage.getItem('token');
    // let mybtn = document.getElementById("myBtn")
    getallnotes();
    // ArchiveNotes()



    titleServer = "";
    descriptionServer = ""
    archiveStatusServer = false


    title2.addEventListener("change", function () {
        titleServer = title2.value
    })


    titleDescription.addEventListener("change", function () {
        descriptionServer = titleDescription.value
    })

    archiveButton.addEventListener("click", function (event) {
        event.preventDefault()
        archiveStatusServer = true
        console.log(archiveStatusServer)
    })


    console.log(archiveStatusServer)


    if (archiveStatusServer === true) {

        console.log("Hey its true from if condition to check if archive button is clicked")
    }


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
        <button class="btn-btn-primary prem" type="button" id="btn-colors" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"  aria-expanded="false">
        <img 
               class="icons" src="../assets/palette_FILL0_wght400_GRAD0_opsz48 (1).svg" alt="">
        </button>
        <div class="color-palette dropdown-menu" id ="color-palette">
            <div class="bg-white circled"></div>
            <div class="bg-red"></div>
            <div class="bg-orange"></div>
            <div class="bg-yellow"></div>
            <div class="bg-green"></div>
            <div class="bg-turquoise"></div>
            <div class="bg-blue"></div>
            <div class="bg-dark-blue"></div>
            <div class="bg-purple"></div>
            <div class="bg-pink"></div>
            <div class="bg-brown"></div>
            <div class="bg-grey"></div>
        </div>
    </div>
                <div>
                <img 
               class="icons" src="../assets/image_FILL0_wght400_GRAD0_opsz48 (1).svg" alt="">
                </div>
                <div id="ArchiveB">
                <button @onclick="ArchiveNotes()" class="btn-btn-primary prem"><img  
                    class="icons"   src="../assets/archive_FILL0_wght400_GRAD0_opsz48 (1).svg" alt=""></button>
                </div>
                <div class="dropdown">
                <button class="btn-btn-primary prem" id="myBtn" class="dropbtn"><img 
                class="icons"  src="../assets/more_vert_FILL0_wght400_GRAD0_opsz48 (1).svg" alt=""></button>
                <div id="myDropdown" class="dropdown-content">
                <a href=>Delete Note</a>
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


            ArchiveNotes() {
                let data = {
                    notearray: [currentTarget.id],
                    isArchived: true,

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


        })


   // Get the button, and when the user clicks on it, execute myFunction
   document.getElementById("myBtn").onclick = function() {myFunction()};

   /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
   function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
}



    }
    







})



