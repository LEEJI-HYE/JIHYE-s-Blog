$(document).ready(function(){


         $.ajax({
          type: "GET",
          url: "http://localhost:8080/privateBlog/sample/getMenuList.do",
          dataType: "jsonp",
          async: false,
          error: function(data){
                  alert("수신 실패")
          },
          success: function(data){
                    //console.log(data);

                    for (var i = 0; i < data.menuList.length; i++){

                    //console.log('data.menuList['+i+'].BM_NAME : ' + data.menuList[i].BM_NAME);
                    //console.log('data.menuList['+i+'].BM_LEV : ' + data.menuList[i].BM_LEV);
                    //console.log('data.menuList['+i+'].BM_STEP : ' + data.menuList[i].BM_STEP);
                    //console.log('data.menuList['+i+'].ROWNUM : ' + data.menuList[i].ROWNUM);
                    //console.log('data.menuList['+i+'].BM_REF : ' + data.menuList[i].BM_REF);
                    //console.log('data.menuList['+i+'].BM_ISDEL : ' + data.menuList[i].BM_ISDEL);
                    //console.log('data.menuList['+i+'].BM_IDNUM : ' + data.menuList[i].BM_IDNUM);

                     $(".sb-Menu").append('<li><a href="#" id="'+data.menuList[i].BM_IDNUM+'">'+data.menuList[i].BM_NAME+'</a></li>');
                    };

                    //클릭 가능하게끔 온클릭 이벤트 생성
                    $(".sb-Menu a").click(function(){
                      var id = $(this).attr('id');
                      console.log("id : " + id);
                      alert('CLEAR!')
                    });
             }
         }); 


       $(".Kategories").append('<option value='+data.menuList[i].BM_NAME+'>'+data.menuList[i].BM_NAME+'</option>');

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