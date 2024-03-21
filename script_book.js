$(document).ready(function() {
    $(".create").click(function() {
        window.location.href = 'add_page.html';
    });
    $(".edit").click(function() {
        window.location.href = 'edit.html';
    });
    $('.delete').click(function() {
        $(this).closest('tr').remove();
        localStorage.removeItem();
        window.location.reload();
    });
})

function appendRowIntoBookList(book_instance) {
    let bookBody = document.getElementById("id_bookbody")


    let bookDetailRow = `<tr>
      <td>${book_instance.book_id}</td>
      <td>${book_instance.book_name}</td>
      <td>${book_instance.publish_date}</td>
      <td>${book_instance.author_name}</td>
      <td>${book_instance.price}</td>
      <td>
        <button type="button" class="edit btn-primary">Edit </button>
        <button type="button" class="delete btn-danger">Delete </button>
      </td>
    </tr>`


    bookBody.insertAdjacentHTML("beforeend",bookDetailRow)
}


$(window).on("load", function() {
    let currentlocalStorageData = JSON.parse(localStorage.getItem("user_details"))
    for (i = 0; i < currentlocalStorageData.length; i++) {
        appendRowIntoBookList(currentlocalStorageData[i])
    }
});

