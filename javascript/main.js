(function() {


  master.fetchContents(function (err, res) {
    if(err) { throw "outch ..." }

    var dir = master.getDirByName('_posts');

    dir.fetchContents(function (err, res) {
        if(err) { throw "outch ..." }

        console.log(dir.getContents());

        dir.eachContent(function (content) {
            console.log(content.name, content.type, content.size);

        });
    });

});





  }());
