$(document).ready(function(){

    $('#send_message').on('click', function(event) {
        event.preventDefault();
        toastr.options = {
            "closeButton": false,
            "positionClass": "toast-bottom-center",
            "preventDuplicates": true,
            "onclick": null,
        };
        if(
			$("#nome").val() == "" || $("#nome").val() == null ||
			$("#email").val() == "" || $("#email").val() == null ||
			$("#telefone").val() == "" || $("#telefone").val() == null ||
			$("#assunto").val() == "" || $("#assunto").val() == null ||
			$("#mensagem").val() == "" || $("#mensagem").val() == null 
		){
			toastr.warning('Preencha todos os campos.');
		}else{		
			var mensagem = "Nome: " + $("#nome").val() + "<br/>" + 
			"Email: " + $("#email").val() + "<br/>" +
			"Telefone: " + $("#telefone").val() + "<br/>" +
			"Assunto: " + $("#assunto").val() + "<br/>" +
            "Mensagem: " + $("#mensagem").val();
            
            window.swal({
                title: "Enviando mensagem...",
                text: "Por favor aguarde.",
                showCancelButton: false,
                showConfirmButton: false
            });	
		
		
			$.ajax({
				url: "http://api-mobile-pvnext-stage.azurewebsites.net/v1/Sendmail",
				type: "POST",
				crossDomain: true,
				data: {
				  "Subject": "Fale Conosco - Compline",
				  "Email": "comercial@compline.com.br",
				  "MessageHtml": mensagem,
				  "Attachment": null
				},
				dataType: "json",
				success:function(result){					
                    toastr.success('Mensagem enviada com sucesso!');
                    window.swal.close();			
				},
				error:function(xhr,status,error){
                    toastr.error('Erro ao enviar mensagem!');
                    window.swal.close();
				}		
			});		

			$("#nome").val("");
			$("#email").val("");
			$("#telefone").val("");
			$("#assunto").val("");
			$("#mensagem").val("");
		} 
    });


    // Return to top
    $('#return-to-top').click(function(event) {     // When arrow is clicked
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 450, "easeOutQuad");
    });

    // Responsive Top navbar
    window.onscroll = function(ev) {
        if ($(this).scrollTop() >= 110) {
            $('#return-to-top').fadeIn(200); 
            $(".navbar-fixed nav").addClass('green');
            $('#back-to-top').css('opacity', '1').removeClass('scale-out');
        } else {
            $('#return-to-top').fadeOut(200);
            $(".navbar-fixed nav").removeClass('green');
            $('#back-to-top').addClass('scale-out');
        }
    };
    if ($(window).scrollTop() >= 110) { 
        $(".navbar-fixed nav").addClass('green');
        $('#back-to-top').css('opacity', '1');
    } else {
        $(".navbar-fixed nav").removeClass('green');
    }

    $("#back-to-top").click(function(event) {
        event.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
        if (document.documentMode || /Edge/.test(navigator.userAgent)) {
            $('html, body').animate({scrollTop: 0}, 600, "easeOutQuad");
        }
        else {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    });

    // Inicialização de componentes
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    var elem = document.querySelectorAll('.zoomed');
    var instance = M.Materialbox.init(elem, {
        onOpenStart: function () {
            $('.navbar-fixed').css('z-index', 0);
        },
        onCloseStart: function () {
            $('.navbar-fixed').css('z-index', 997);
        },
    });
    AOS.init({
        anchorPlacement: 'top-bottom',
    });
});

