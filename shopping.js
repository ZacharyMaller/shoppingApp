$(document).ready(function() {
	$( "#js-shopping-list-form" ).submit(function( event ){
		event.preventDefault();
		const item= $(".js-shopping-list-entry").val()
		const itemHTML=`<li>
	        <span class="shopping-item">${item}</span>
	        <div class="shopping-item-controls">
	          <button class="shopping-item-toggle">
	            <span class="button-label">check</span>
	          </button>
	          <button class="shopping-item-delete">
	            <span class="button-label">delete</span>
	          </button>
	        </div>
	      </li>`;
		$(".shopping-list").append(itemHTML);
	})


	$(".shopping-list").on("click", ".shopping-item-delete", function(){
		$(this).parent().parent().remove()
	});




$(".shopping-list").on("click", ".shopping-item-toggle", function(){
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item-checked");
	});


});