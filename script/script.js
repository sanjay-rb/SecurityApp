function giveRules() {
  swal("Find all Security problems", "You have 7 chances(CLICKS) to spot bugs", "info");
}

var q1 = 0;
var q2 = 0;
var q3 = 0;
var q4 = 0;
var q5 = 0;
var q6 = 0;
var q7 = 0;
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
    if (click_count <= 7) {
      if ((event.clientX > 108 && event.clientX < 179) && (event.clientY > 235 && event.clientY < 310)) {
        //tcs password
        q1 = 1;
        if (click_count == 7) {
          var score = q1 + q2 + q3 + q4 + q5 + q6 + q7;
          swal("Do not store any credentials/sessions for any reason. (Security Pledge-7) --> GAME OVER", "Your scoure is : " + score, "success");
        } else {
          swal("Do not store any credentials/sessions for any reason. (Security Pledge-7)", "You are left with " + (7 - click_count) + " chances", "success");
        }
      }
      else if ((event.clientX > 868 && event.clientX < 1082) && (event.clientY > 55 && event.clientY < 78)) {
        //Phishing attack
        q2 = 1;
        if (click_count == 7) {
          var score = q1 + q2 + q3 + q4 + q5 + q6 + q7;
          swal("Do Not open any e-mails, URLs and file attachments received from unsolicited or unreliable and unknown sources and report all suspicious mails to internalIS.messaging@tcs.com(Refer Security Pledge-10) --> GAME OVER", "Your scoure is : " + score, "success");
        } else {
          swal("Do Not open any e-mails, URLs and file attachments received from unsolicited or unreliable and unknown sources and report all suspicious mails to internalIS.messaging@tcs.com(Refer Security Pledge-10)", "You are left with " + (7 - click_count) + " chances", "success");
        }
      }
      else if ((event.clientX > 1139 && event.clientX < 1513) && (event.clientY > 489 && event.clientY < 580)) {
        //USB
        q3 = 1;
        if (click_count == 7) {
          var score = q1 + q2 + q3 + q4 + q5 + q6 + q7;
          swal("Do not use any un-approved utility/device for accesssing customer or TCS infrastructure while connecting to TCS/Customer VDI/VPN. --> GAME OVER", "Your scoure is : " + score, "success");
        }
        else {
          swal("Do not use any un-approved utility/device for accesssing customer or TCS infrastructure while connecting to TCS/Customer VDI/VPN.", "You are left with " + (7 - click_count) + " chances", "success");
        }
      }
      else if ((event.clientX > 1111 && event.clientX < 1511) && (event.clientY > 596 && event.clientY < 715)) {
        // windows
        q4 = 1;
        if (click_count == 7) {
          var score = q1 + q2 + q3 + q4 + q5 + q6 + q7;
          swal("Ensure latest security patches and updated antiviruses are installed in the system and raise it  with IS team for any issues immediately.(Refer Security Pledge point-9) --> GAME OVER", "Your scoure is : " + score, "success");
        } else {
          swal("Ensure latest security patches and updated antiviruses are installed in the system and raise it  with IS team for any issues immediately.(Refer Security Pledge point-9)", "You are left with " + (7 - click_count) + " chances", "success");
        }
      }
      else if ((event.clientX > 313 && event.clientX < 531) && (event.clientY > 251 && event.clientY < 298)) {
        // Email ID
        q5 = 1;
        if (click_count == 7) {
          var score = q1 + q2 + q3 + q4 + q5 + q6 + q7;
          swal("Do Not open any e-mails, URLs and file attachments received from unsolicited or unreliable and unknown sources and report all suspicious mails to internalIS.messaging@tcs.com(Refer Security Pledge-10) --> GAME OVER", "Your scoure is : " + score, "success");
        } else {
          swal("Do Not open any e-mails, URLs and file attachments received from unsolicited or unreliable and unknown sources and report all suspicious mails to internalIS.messaging@tcs.com(Refer Security Pledge-10)", "You are left with " + (7 - click_count) + " chances", "success");
        }
      }
      else if ((event.clientX > 787 && event.clientX < 840) && (event.clientY > 714 && event.clientY < 747)) {
        // Whatsapp icon
        q6 = 1;
        if (click_count == 7) {
          var score = q1 + q2 + q3 + q4 + q5 + q6 + q7;
          swal("Do not use social media platforms like Whatsapp while discussing/sharing business information. No data should be out of TCS/Client network.(Security Pledge point 6) --> GAME OVER", "Your scoure is : " + score, "success");
        } else {
          swal("Do not use social media platforms like Whatsapp while discussing/sharing business information. No data should be out of TCS/Client network.(Security Pledge point 6)", "You are left with " + (7 - click_count) + " chances", "success");
        }
      }
      else if ((event.clientX > 104 && event.clientX < 181) && (event.clientY > 318 && event.clientY < 376)) {
        // Whatsapp icon desktop
        q7 = 1;
        if (click_count == 7) {
          var score = q1 + q2 + q3 + q4 + q5 + q6 + q7;
          swal("Do not use social media platforms like Whatsapp while discussing/sharing business information. No data should be out of TCS/Client network.(Security Pledge point 6) --> GAME OVER", "Your scoure is : " + score, "success");
        } else {
          swal("Do not use social media platforms like Whatsapp while discussing/sharing business information. No data should be out of TCS/Client network.(Security Pledge point 6)", "You are left with " + (7 - click_count) + " chances", "success");
        }
      } else {
        if (click_count == 7) {
          var score = q1 + q2 + q3 + q4 + q5 + q6 + q7;
          swal("Incorrect --> GAME OVER!", "Your scoure is : " + score, "warning");
          window.location.replace("./pre_index.html");
        } else {
          swal("Incorrect!", "You are left with " + (7 - click_count) + " chances", "error");
        }
      }
    } else {
      var score = q1 + q2 + q3 + q4 + q5 + q6 + q7;
      swal("GAME OVER", "Your scoure is : " + score, "info");
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
