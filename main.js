$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown()
    })

    $('.remover').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        let novaLista = $('#second').val()
        let novoItem = $('<li></li>')
        $(`<li> ${novaLista}</li>` ).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $('#second').val('')
        });
        $(document).on('click', '.res',function() {
            $('li').remove()
              
    })

    $(document).on('click', 'li', function(){
        $(this).toggleClass('linha')
    })

})

   


