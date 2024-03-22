// GLOBAL VARIABLES


function imagePreview(home_instance){
    let bookBody = document.getElementById("kanban_image")

    let bookDetailRow = `<div class="container col-md-3">
                    <img src="images/${home_instance.image}" alt="BookImage">
                    <div class="center text-light">${home_instance.book_name}</div>
                    <div class="bottom-left text-light">Price: $ ${home_instance.price}</div>
                    <div class="bottom-right text-light">- ${home_instance.author_name}</div>
            </div>`


    bookBody.insertAdjacentHTML("beforeend",bookDetailRow)
}

$(window).on("load", function() {
    let currentlocalStorageData = JSON.parse(localStorage.getItem("user_details"))
    for (i = 0; i < currentlocalStorageData.length; i++) {
        imagePreview(currentlocalStorageData[i])
    }
});