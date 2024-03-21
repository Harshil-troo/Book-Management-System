clientForm = document.getElementById("book-form")

clientForm.addEventListener("submit",function(e){
    e.preventDefault();
    var counter = setupLocalStorageCounter();

    const upcomingData = {
        book_id: counter,
        book_name:$("#book-name").val() ,
        publish_date:$("#publish-date").val(),
        author_name:$("#author-name").val(),
        price:$("#price").val()
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

    window.location.href = '/book.html';
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































































































































































































































































