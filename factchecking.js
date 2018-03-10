chrome.contextMenus.create({"title": "Verificar com Verum", "contexts":["link"],
							"onclick": function(info, tab){
								/*icone
								titulo
								texto
								link*/


  var w = 400;
  var h = 200 ;
  //var left = (screen.width/2)-(w/2);
  var left = screen.width - 500;
  var top = screen.height - 200;
  //var top = (screen.height/2)-(h/2);
  var myWindow = window.open("", "Verum check", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
   myWindow.document.write("<p>This is 'MsgWindow'. Verum Rocks!</p>");

							}

});

function click(e) {
  chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
  window.close();
}

