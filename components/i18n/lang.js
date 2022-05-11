// Synchronous (open("POST", file, false)) XMLHttpRequest is in the process of being removed from the web standard.
function loadJSONFile(file, callback) {
    var requestVar = new XMLHttpRequest();
    requestVar.overrideMimeType("application/json");
    requestVar.open("POST", file, true);
    requestVar.onreadystatechange = function() {
        if (requestVar.readyState === 4 && requestVar.status == "200") {
            callback(requestVar.responseText);
        }
    }
    requestVar.send(null);
}

function pageLang(){
  document.getElementById("title").innerHTML = data.title;
  document.getElementById("navh2").innerHTML = data.navh2;
  document.getElementById("langSwitch").innerHTML = data.langSwitch;
  document.getElementById("instructions").innerHTML = data.instructions;
  document.getElementById("instructParag").innerHTML = data.instructParag;
  document.getElementById("selectConsoleh3").innerHTML = data.selectConsoleh3;
  document.getElementById("consoleName").options[selectedIndex = "0"].text = data.consoleName;
  document.getElementById("selectRomsh3").innerHTML = data.selectRomsh3;
  document.getElementById("selectRomsParag").innerHTML = data.selectRomsParag;
  document.getElementById("romsNames").setAttribute("data-multiple-caption", data.romsNames);
  document.getElementById("filesChoose").innerHTML = data.filesChoose;
  document.getElementById("textNamesError").innerHTML = data.textNamesError;
  document.getElementById("inputPathText").innerHTML = data.inputPathText;
  document.getElementById("examples").innerHTML = data.examples;
  document.getElementById("inputPath").setAttribute("placeholder", data.inputPath)
  document.getElementById("spanCreateList").innerHTML = data.spanCreateList;
  document.getElementById("labelModalDownload").innerHTML = data.labelModalDownload;
  document.getElementById("closeModalDownload").innerHTML = data.closeModalDownload;
  if(countFiles = "smaller1"){ // countFiles is a variable GLOBAL to lang.js
    document.getElementById("romsNames").setAttribute("data-multiple-caption", data.romsNamesSm);
  } else if (countFiles = "greater1"){ // countFiles is a variable GLOBAL to lang.js
    document.getElementById("romsNames").setAttribute("data-multiple-caption", data.romsNamesPl);
  }
}

function langFunction() {
  var langCheckbox = document.getElementById("langCheckbox").checked;
  var lang = document.getElementsByTagName("html")[0].getAttribute('lang');
  pageLang();
  if (!langCheckbox === false){
    document.getElementsByTagName("html")[0].setAttribute("lang", "en-US");
    loadJSONFile("./components/i18n/en-US.json", function(text){
      data = JSON.parse(text);  // Variable data on global scope
      pageLang();  // Function page with translated names
    });
  }
  if (!langCheckbox === true){
    document.getElementsByTagName("html")[0].setAttribute("lang", "pt-BR");
    loadJSONFile("./components/i18n/pt-BR.json", function(text){
      data = JSON.parse(text);  // Variable data on global scope
      pageLang();  // Function page with translated names
    });
  }
}
