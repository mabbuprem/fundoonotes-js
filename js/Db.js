window.addEventListener('DOMContentLoaded', function () {

    let descriptionServer, titleServer;
    let title2 = document.querySelector(".titleMain");
    let titleDescription = document.querySelector(".takeNote")
    let descIcon = document.querySelector(".descriptionIcon")
    let bottomIcon = document.querySelector(".mainBottomIcons")
    let closeB = document.querySelector(".closeButton")
    let modeltitle = document.querySelector("#modaltitle")
    console.log(modeltitle)
    let modelDescription = document.querySelector("#modalDescription")
    console.log(modelDescription);

    let mainNoteBackgroundColor = document.querySelector(".notes-main")
    let token = localStorage.getItem('token')
    

    titleServer = "";
    descriptionServer = ""

    var modalNew = document.getElementById("noteModal");
    var container = document.getElementsByClassName("note1");

    container.onclick = function () {
        modal.style.display = "block";
    }
    window.onclick = function (event) {
        if (event.target == modalNew) {
            modalNew.style.display = "block";
        }
    }
    

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

        $(".closeButton").click(function () {
            title2.style.display = "none"
            descIcon.style.display = "contents"
            bottomIcon.style.display = "none"
            bottomIcon.style.height = "2px"
            title2.style.background = "#FFFFFF";
            titleDescription.style.background = "#FFFFFF";
            mainNoteBackgroundColor.style.background = "#FFFFFF";
            titleServer = " ";
            descriptionServer = " ";
            title2.value = "";
            titleDescription.value = "";
        })



    });
   

    //Note Added
    closeB.addEventListener("click", function (event) {
        event.preventDefault()
        const data = new FormData();
        data.append("title", titleServer);
        data.append("description", descriptionServer);
        $(document).ready(function () {
            $.ajax({
                url: "http://127.0.0.1:8000\api\createNote",
                type: "POST",
                data: data,
                // processData:false,
              
                headers: {
                    'Authorization': "Bearer " + token,
                    'content-Type': 'application/json'
                   
                },
                success: function (result) {
                    console.log(result);

                }
            })
        })
    
    }
    )

})



