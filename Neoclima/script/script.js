  $(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(1000);
  });//end slide toggle
  
  $(window).resize(function() {   
    if (  $(window).width() > 500 ) {     
      $('nav ul').removeAttr('style');
     }
  });//end resize
});//end ready




 $(document).ready(function(){

    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});
 function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
    }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validate(form) {
      var elems = form.elements;
	
      resetError(elems.company.parentNode);
      if (!elems.company.value) {
        showError(elems.company.parentNode, ' Укажите компанию');
		
      }
      resetError(elems.name.parentNode);
      if (!elems.name.value) {
        showError(elems.name.parentNode, ' Укажите от кого.');
      }
     

     resetError(elems.phone.parentNode);
      if (!elems.phone.value) {
        showError(elems.phone.parentNode, ' Укажите телефон');
      }
      resetError(elems.Email.parentNode);
      if (!elems.Email.value) {
        showError(elems.Email.parentNode, ' Укажите телефон');
      }
      resetError(elems.message.parentNode);
      if (!elems.message.value) {
        showError(elems.message.parentNode, ' Отсутствует текст.');
      }

    }
$(document).ready(function(){
$('.splLink').click(function(){
$(this).parent().children('div.splCont').toggle('normal');
return false;



});
});

