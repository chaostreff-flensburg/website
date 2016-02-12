(function() {
  function setEventListener() {
    var header = document.getElementById("header");
    console.log(header);
    header.addEventListener("click", function() {
      //console.log("lol");
      window.location.href="./index.html";
    });

  }

  window.addEventListener("load", function(){
    setEventListener();
  });
}());
