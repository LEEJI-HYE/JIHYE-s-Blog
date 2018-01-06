$(document).ready(function(){

       $(".logo").on("click",function(){
          var className = $(this).attr('class');
          console.log("className : " + className);
       });  

       //마우스 클릭 : console.log 출력
       $(".menuBar1").click(function(){
         var id = $(this).attr('id');
         alert("id:" + id);
       });

       $("#FaceBookIcon").on("click",function(){
   			var openNewWindow = window.open('about:blank');
       		//alert('move Facebook');
       		openNewWindow.location.href="https://www.facebook.com/jihye.lee.54738";
       });

       $("#InstaGramIcon").on("click",function(){
   			var openNewWindow = window.open('about:blank');
       		//alert('move Instagram');
       		openNewWindow.location.href="https://www.instagram.com/wisdom__is/";
       });

       $("#GithubIcon").on("click",function(){
       		var openNewWindow = window.open('about:blank');
       		//alert('move Github');
       		openNewWindow.location.href="https://github.com/LEEJI-HYE";
       });
       $(".sb-Menu li").hover(function(){
       		$("ul:first",this).show();
       }, function(){
       		$("ul:first",this).hide();
       });

       $("#RESUMEPAGEGO").click(function(){
   			location.href = "blogResume.html";
       });

       $(".side_btn").click(function(){
       		location.href = "blogRead.html";
       });

    });