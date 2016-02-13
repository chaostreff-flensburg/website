(function(){
  var chaos = new Gh3.User("chaostreff-flensburg"),
    repoTitle = $("blogPostTitle")

  //get one repository
  var chaosBlog = new Gh3.Repository("blog", chaos);

  chaosBlog.fetch(function(err, res) {
    if (err) {
      console.log("Error", err.message, res.status)
      throw err
    }
    console.log("Repository : ", chaosBlog);

    chaosBlog.fetchBranches(function(err, res) {
      if (err) {
        console.log("Error", err.message, res.status)
        throw err
      }
      console.log("Array of branches : ", chaosBlog.getBranches());
      chaosBlog.eachBranch(function(branch) {
          console.log(branch.name);
        })
        //and :
      var ghpages = chaosBlog.getBranchByName("gh-pages");
      ghpages.fetchContents(function(err, res) {
        if (err) {
          throw "outch ..."
        }
        var dir = ghpages.getDirByName('_posts');
        dir.fetchContents(function(err, res) {
          //console.log(res.contents[res.contents.length-1]);
          var lastFile = res.contents[res.contents.length - 1];
          var fetchFileXHR = new XMLHttpRequest();
          fetchFileXHR.open("get", lastFile.download_url);
          fetchFileXHR.send();
          fetchFileXHR.onreadystatechange = function() {
            console.log(fetchFileXHR.responseURL.split("/")[3]);
            if (fetchFileXHR.readyState === 4 && fetchFileXHR.status === 200) {
              //console.log(marked(fetchFileXHR.responseText.split("---\n")[2].split("<!--")[0]));
              console.log(fetchFileXHR.responseText.split("---\n")[1].split("title:")[1].split("\n")[0].split("#")[0]);
              var blogPostTitle = fetchFileXHR.responseText.split("---\n")[1].split("title:")[1].split("\n")[0].split("#")[0];
              var blogPostContent = marked(fetchFileXHR.responseText.split("---\n")[2].split("<!--")[0]);
              var blogPostElem=document.getElementById("blogContent");
              var titleHtmlElem = document.createElement("h3");
              titleHtmlElem.appendChild(document.createTextNode(blogPostTitle));
              titleHtmlElem.setAttribute("id", "blogPostTitle");
              blogPostElem.appendChild(titleHtmlElem);
              var wrapperDIV = document.createElement('div');
              wrapperDIV.innerHTML = blogPostContent;
              var wrapperDIVContents = wrapperDIV.childNodes;
              for (index = 0; index < wrapperDIVContents.length; ++index) {
                blogPostElem.appendChild(wrapperDIVContents[index]);
              }
            }
          }
        });
      })
    })
  });


  function scrollToAnchor(aid){
      var aTag = $("a[name='"+ aid +"']");
      $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }


  function setClickListenerToNavLinks(){

    var navLinks= document.getElementById("nav").getElementsByTagName("a");
    console.log(navLinks.length);

  for (var i=0; i<navLinks.length; i++){
      console.log(i);
      navLinks[i].addEventListener("click", function(e){
        e.preventDefault();
        console.log(e.srcElement.hash);
        scrollToAnchor(e.srcElement.hash.split("#")[1])
      })
    }

  }


window.addEventListener("click", setClickListenerToNavLinks());



}());
