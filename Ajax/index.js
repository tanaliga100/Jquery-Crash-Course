$(document).ready(function(){
    // $('#result').load('test1.html', function(responseTxt, statusTxt, xhr){
    //     if(statusTxt == 'success'){
    //         console.log('It went fine');
    //     }else if ( statusTx == 'error'){
    //         console.log('Something went wrong:' +xhr.statusTxt);
    //     }
    // })
    $.getJSON('users.json', function(data){
        $.each(data, function(i, user){
            $('#users').append('<li>' +user.firstName+'</li>')
        })
    })
    // $.ajax({
    //     method: 'GET',
    //     url: 'https://jsonplaceholder.typicode.com/users',
    //     dataType: 'json'

    // }).done(function(data){
    //     console.log(data);
    //     $.map(data, function(user){
    //         $('#result').append('<li>'+user.id+ ' '+ '<h1>'+user.name+ '</h1>'+ '' +user.username+'</li>')
    //     })
    // })
    $('#postForm').submit(function(e){
        e.preventDefault();
        
        var title = $('#title').val();
        var body = $('#body').val();
        var url = $(this).attr('action');

        $.ajax({
            method: 'POST',
            url: url,
            data: {
                title: title,
                body: body
            },
            dataType: 'json'
        }).done(function(data){
            console.log('Post saved');
            console.log(data);
        })
    })
})