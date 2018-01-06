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
             $(".Kategories").append('<option>'+data.menuList[i].BM_NAME+'</option>');
            };
              
            //클릭 가능하게끔 온클릭 이벤트 생성
            $(".sb-Menu a").click(function(){
              var id = $(this).attr('id');
              console.log("id : " + id);
              alert('CLEAR!')
            });

     }
 });

});