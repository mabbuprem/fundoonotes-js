window.addEventListener('DOMContentLoaded', function () {

    let descriptionServer, titleServer;
    let title2 = document.querySelector(".titleMain");
    let titleDescription = document.querySelector(".takeNote")
    let descIcon = document.querySelector(".descriptionIcon")
    let bottomIcon = document.querySelector(".mainBottomIcons")
    let closeB = document.querySelector(".closeButton")
    let modeltitle = document.querySelector("#takeNoteTitleInput")
    console.log(modeltitle)
    let modelDescription = document.querySelector("#takeNoteDescrptionInput")
    console.log(modelDescription);
    let token = localStorage.getItem('token');
    getallnotes();


    titleServer = "";
    descriptionServer = ""

    title2.addEventListener("change", function () {
        titleServer = title2.value
    })


    titleDescription.addEventListener("change", function () {
        descriptionServer = titleDescription.value
    })

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
                document.getElementById('notediv').innerHTML = notearray.map((note) => `
                <div class="displaynotes">
     
                <p class="title">${note.title}</p>
                <p class="title">${note.description}</p>

                <div>
                    <div>
                        <img style="width: 25px;height: 25px; margin-top: 35px; margin-left: 10px;"
                            src="../assets/add_alert_FILL0_wght400_GRAD0_opsz48 (1).svg" alt="">
                    </div>
                    <div>
                        <img style="width: 25px;height: 25px; margin-top: -45px; margin-left: 50px;"
                            src="../assets/person_add_FILL0_wght400_GRAD0_opsz48 (1).svg" alt="">
                    </div>
                    <div class="colorPopup">
                        <div class="dropdown">
                            <div class="dropdown-content">
                            </div>
                            <div>
                                <img style="width: 20px;height: 25px; margin-top: -70px; margin-left: 90px;"
                                    src="../assets/palette_FILL0_wght400_GRAD0_opsz48 (1).svg" alt="">
                            </div>
                        </div>
                    </div>
                    <div>
                        <img style="width: 25px;height: 25px; margin-top: -100px; margin-left: 123px;"
                            src="../assets/image_FILL0_wght400_GRAD0_opsz48 (1).svg" alt="">
                    </div>
                    <div >
                        <img style="width: 25px;height: 25px; margin-top: -130px; margin-left: 165px;"
                            src="../assets/archive_FILL0_wght400_GRAD0_opsz48 (1).svg" alt="">
                    </div>
                    <div>
                        <img style="width: 25px;height: 25px; margin-top: -160px; margin-left: 195px;"
                            src="../assets/more_vert_FILL0_wght400_GRAD0_opsz48 (1).svg" alt="">
                    </div>
                </div>

                </div>
                
                `)



            }

        })
    }

})



