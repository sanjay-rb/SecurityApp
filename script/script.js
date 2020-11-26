function giveRules() {
  swal("Find all Security problems", "You have 6 chances(CLICKS) to spot bugs" , "info");
}

var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var click_count = 0;


function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    // glass = document.getElementById("glass");
    glass.setAttribute("class", "img-magnifier-glass");
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /* Click events */
    glass.addEventListener("click", function (event) {
      //alert(event.clientX + "-" + event.clientY);
      click_count += 1;
      if(click_count <= 6){
        if ((event.clientX > 20  && event.clientX < 78 ) && (event.clientY > 194  && event.clientY < 263)) {
          q1 = 1;
          if(click_count == 6){
            var score = q1 + q2 + q3 + q4 + q5 + q6;
            swal("Never store passwords --> Game Over","Your scoure is : " + score , "success");
          }else{
            swal("Never store passwords","You are left with "+ (6 - click_count) +" chances" , "success");
          }
        }
        else if ((event.clientX > 215 && event.clientX < 424 ) && (event.clientY > 526 && event.clientY < 545 )) {
          q2 = 1;
          if(click_count == 6){
            var score = q1 + q2 + q3 + q4 + q5 + q6;
            swal("It should be internalIS.messaging@tcs.com --> Game Over","Your scoure is : " + score , "success");
          }else{
            swal("It should be internalIS.messaging@tcs.com", "You are left with "+ (6 - click_count) +" chances" , "success");
          }
        }
        else if ((event.clientX > 268 && event.clientX < 726 ) && (event.clientY > 9  && event.clientY < 315 )) {
          q3 = 1;
          if(click_count == 6){
            var score = q1 + q2 + q3 + q4 + q5 + q6;
            swal("Correct no external softwares should be installed to TCS asset --> Game Over","Your scoure is : " + score , "success");
          }
          else{
            swal("Correct no external softwares should be installed to TCS asset", "You are left with "+ (6 - click_count) +" chances" , "success");
          }
        }
        else if ((event.clientX > 872 && event.clientX < 1062 ) && (event.clientY > 53 && event.clientY < 76 )) {
          q4 = 1;
          if(click_count == 6){
            var score = q1 + q2 + q3 + q4 + q5 + q6;
            swal("Phishing attack prevented --> Game Over","Your scoure is : " + score , "success");
          }else{
            swal("Phishing attack prevented", "You are left with "+ (6 - click_count) +" chances" , "success");
          }
        }
        else if ((event.clientX > 1054 && event.clientX < 1116 ) && (event.clientY > 420 && event.clientY < 485 )) {
          q5 = 1;
          if(click_count == 6){
            var score = q1 + q2 + q3 + q4 + q5 + q6;
            swal("No external social media allowed --> Game Over","Your scoure is : " + score , "success");
          }else{
            swal("No external social media allowed", "You are left with "+ (6 - click_count) +" chances" , "success");
          }
        }
        else if ((event.clientX > 1092 && event.clientX < 1512 ) && (event.clientY > 651 && event.clientY < 730 )) {
          q6 = 1;
          if(click_count == 6){
            var score = q1 + q2 + q3 + q4 + q5 + q6;
            swal("Always have latest versions! --> Game Over","Your scoure is : " + score , "success");
          }else{
            swal("Always have latest versions!", "You are left with "+ (6 - click_count) +" chances" , "success");
          }
        }else{
          if(click_count == 6){
            var score = q1 + q2 + q3 + q4 + q5 + q6;
            swal("Incorrect --> Game Over!","Your scoure is : " + score , "warning");
          }else{
            swal("Incorrect!", "You are left with "+ (6 - click_count) +" chances" , "error");
          }
        }
      }else{
        var score = q1 + q2 + q3 + q4 + q5 + q6;
        swal("Game Over", "Your scoure is : " + score , "info");
      }

    });

    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
        var pos, x, y;
        /*prevent any other actions that may occur when moving over the image*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        /*prevent the magnifier glass from being positioned outside the image:*/
        if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
        if (x < w / zoom) { x = w / zoom; }
        if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
        if (y < h / zoom) { y = h / zoom; }
        /*set the position of the magnifier glass:*/
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        /*display what the magnifier glass "sees":*/
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}
