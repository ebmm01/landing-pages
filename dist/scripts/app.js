$(document).ready(function(){$("#send_message").on("click",function(e){if(e.preventDefault(),toastr.options={closeButton:!1,positionClass:"toast-bottom-center",preventDuplicates:!0,onclick:null},""==$("#nome").val()||null==$("#nome").val()||""==$("#email").val()||null==$("#email").val()||""==$("#telefone").val()||null==$("#telefone").val()||""==$("#assunto").val()||null==$("#assunto").val()||""==$("#mensagem").val()||null==$("#mensagem").val())toastr.warning("Preencha todos os campos.");else{var a="Nome: "+$("#nome").val()+"<br/>Email: "+$("#email").val()+"<br/>Telefone: "+$("#telefone").val()+"<br/>Assunto: "+$("#assunto").val()+"<br/>Mensagem: "+$("#mensagem").val();window.swal({title:"Enviando mensagem...",text:"Por favor aguarde.",showCancelButton:!1,showConfirmButton:!1}),$.ajax({url:"http://api-mobile-pvnext-stage.azurewebsites.net/v1/Sendmail",type:"POST",crossDomain:!0,data:{Subject:"Fale Conosco - Compline",Email:"comercial@compline.com.br",MessageHtml:a,Attachment:null},dataType:"json",success:function(e){toastr.success("Mensagem enviada com sucesso!"),window.swal.close()},error:function(e,a,o){toastr.error("Erro ao enviar mensagem!"),window.swal.close()}}),$("#nome").val(""),$("#email").val(""),$("#telefone").val(""),$("#assunto").val(""),$("#mensagem").val("")}}),$("#return-to-top").click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},450,"easeOutQuad")}),window.onscroll=function(e){$(this).scrollTop()>=110?($("#return-to-top").fadeIn(200),$(".navbar-fixed nav").addClass("blue"),$("#back-to-top").css("opacity","1").removeClass("scale-out")):($("#return-to-top").fadeOut(200),$(".navbar-fixed nav").removeClass("blue"),$("#back-to-top").addClass("scale-out"))},$(window).scrollTop()>=110?($(".navbar-fixed nav").addClass("blue"),$("#back-to-top").css("opacity","1")):$(".navbar-fixed nav").removeClass("blue"),$("#back-to-top").click(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),document.documentMode||/Edge/.test(navigator.userAgent)?$("html, body").animate({scrollTop:0},600,"easeOutQuad"):window.scrollTo({top:0,behavior:"smooth"})}),$(".sidenav").sidenav(),$(".parallax").parallax(),$(".scrollspy").scrollSpy(),AOS.init({anchorPlacement:"top-bottom"})});