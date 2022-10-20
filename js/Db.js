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
        console.log("get all notes")
        $.ajax({
            url: "http://127.0.0.1:8000/api/getAllNotes",
            type: "GET",
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


    )

})



