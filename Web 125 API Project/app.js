getData('GET','https://api.jsonbin.io/b/608d7d2692cb9267d0c8fc72',function(request){
    $('#information').html(render(request, 'usersinfo'));
})

function getData(method,url,callback){
    var xhr = new XMLHttpRequest;
    xhr.open(method,url);
    xhr.onreadystatechange = function(){
        if(xhr.status === 200 && xhr.readyState === 4)
          callback(JSON.parse(this.response));
    }
    xhr.send();
}

function render(data, infoID) {
    var datauser = $(`#${infoID}`).html();
    var info = Handlebars.compile(datauser);
    return info(data);
}