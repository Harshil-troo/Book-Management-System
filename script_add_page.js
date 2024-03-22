//GLOBAL VARIABLES

STATIC_ROOT = "/home/sohal/Project/Book Management System/images/"

clientForm = document.getElementById("book-form")

clientForm.addEventListener("submit",function(e){
    e.preventDefault();
    var counter = setupLocalStorageCounter();
    if (this.imageUpload.files[0]){
        var bookImage = this.imageUpload.files[0].name
    }
    else{
        var bookImage = null;
    }
    const upcomingData = {
        book_id: counter,
        book_name:$("#book-name").val() ,
        publish_date:$("#publish-date").val(),
        author_name:$("#author-name").val(),
        price:$("#price").val(),
        image: bookImage
    }
        
    // local storage code
    if  (localStorage.getItem("user_details") === null){
        localStorage.setItem("user_details",JSON.stringify([upcomingData]));
    }
    else{
         let currentlocalStorageData = JSON.parse(localStorage.getItem("user_details"))
         currentlocalStorageData.push(upcomingData);
         // after manipulation set into local storage again
         localStorage.setItem("user_details",JSON.stringify(currentlocalStorageData))
        }

    window.location.href = 'book.html';
});

function setupLocalStorageCounter() {
     if(localStorage.getItem('counter') === null){
       localStorage.setItem('counter',1)
       var counter = localStorage.getItem('counter')
    }
    else{
        var counter =Number(localStorage.getItem('counter'));
        counter++;
        localStorage.setItem("counter",counter)
    }

    return Number(counter)
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}


$("#imageUpload").change(function() {

    readURL(this);
});































































































































































































































































