chrome.contextMenus.create({"title": "Verificar com Verum", "contexts":["link"],
							"onclick": function(info, tab){
								/*icone
								titulo
								texto
								link*/
  var link = "www.google.com";
  ret = 1; //chama

 
//  xhr.open('GET', "https://postman-echo.com/get?foo1=bar1&foo2=bar2", true);
  //xhr.send(null);




  var imgR = "";
  switch(ret) {
      case 1:
          imgR = "https://raw.githubusercontent.com/clarissacastella/verum/master/verum-selos/selos-verum-01.png"; 
          break;
      case 2:
          imgR = "https://raw.githubusercontent.com/clarissacastella/verum/master/verum-selos/selos-verum-02.png"; 
          break;
      default:
          imgR = "https://raw.githubusercontent.com/clarissacastella/verum/master/verum-selos/selos-verum-03.png"; 
  }
 

  var w = 330;
  var h = 210 ;
  //var left = (screen.width/2)-(w/2);
  var left = screen.width - 500;
  var top = screen.height //- 200;
  //var top = (screen.height/2)-(h/2);

  var div = document.createElement("DIV");
  div.id = "Image";
  var img = document.createElement("IMG");
  img.src = imgR;
  div.appendChild(img);



  var createA = document.createElement('a');
  //var createAText = "link";
//  createA.setAttribute('href', link);
  createA.href = link;

  //createA.appendChild(createAText);
  div.appendChild(createA);

  var str = ""
  var myWindow = window.open("", "Verum check", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
   myWindow.document.body.appendChild(div);
							}

});

function readBody(xhr) {
    var data;
    if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
}


function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  window.close();
}

