$(document).ready(function() {
    $(".create").click(function(){
        window.location.href = 'add_page.html';
    });
    $(".edit").click(function(){
        window.location.href = 'add_page.html';
    });
    $('.delete').click(function() {
        $(this).closest('tr').remove();
    });
})

