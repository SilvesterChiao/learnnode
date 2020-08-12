(function(){
  var xmlrequest = new XMLHttpRequest();
  var uri = 'http://localhost:3004/getinfo';
  xmlrequest.open('GET', uri, true);
  xmlrequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xmlrequest.onreadystatechange = function(){
    if(xmlrequest.readyState === 4){
      if(xmlrequest.status === 200){
        var userInfo = JSON.parse(xmlrequest.responseText);
        console.log(userInfo);
      };
    };
  };
  xmlrequest.send(null);
})();
