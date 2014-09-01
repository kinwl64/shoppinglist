$(document).ready(function() {
	$('#add').on('click', addToList);

	$(document).on('click', 'span', finished );
//	$(document).on('click', 'span', finishedColor );
	$(document).on('click', '.delete', deleteItem );

//prevent default and submit with enter
	$('.addToListForm').submit( function(e) {
        e.preventDefault();
        
        return false;
    });

/*
$( "#todolist li").click(function() {
  $( this ).toggleClass( "crossed" );
	
	});
*/
/*
 $(function() {
    $( ".list" ).sortable();
    $( ".list" ).disableSelection();
	});
*/
});



function addToList(){
	var text = $('#item').val();
	$('#todolist').append('<li class= "done" draggable="true"><span class="crossed">' +text+ '<img class="delete" src="images/delete.jpg"></span></li>');
	$('#item').val('');
}

function deleteItem() {
	$(this).parent().parent().remove();
}



function finished() {
	if( $(this).parent().css('textDecoration') == 'line-through' ){
	$(this).parent().css('textDecoration', 'none');
	
	} else {
	
	$(this).parent().css('textDecoration', 'line-through');
	
	}
}

/*
function finishedColor() {
	if( $(this).parent().css('backgroundColor') == '#FF3030' ){
	$(this).parent().css('backgroundColor', 'none');
	
	} else {
	
	$(this).parent().css('backgroundColor', '#FF3030');
	
	}
}
*/


