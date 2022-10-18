
 let flag = true;
 function openDrawer() {
    console.log('when click drop down open')
     if (flag) {
         flag = false;
         $(".drawer").css("width", "200px");
         $(".myDrawer").css("width", "200px");
         $(".drawer").css("border-radius", "0px 25px 25px 0px");
         $(".drawer-span").css("display", "flex");
         $(".drawer-span").css("margin-left", "30px");
         $(".main-section").css("left", "45%");
         $(".item-list").css("left", "15%");
         $(".Div1").css("left", "15%");
         $("#main").css("left", "15%");
     }
     else {
         flag = true;
         $(".drawer").css("width", "48px");
         $(".drawer").css("border-radius", "50%");
         $(".myDrawer").css("width", "65px");
         $(".drawer-span").css("display", "none");
         $(".main-section").css("left", "22%");
         $(".item-list").css("left", "10%");
     }
 }
 
 