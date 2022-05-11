/*  Manual List Generator.
 *  Copyright (C) 2019 - Raphael Alves
 *
 *  This program is free software: you can redistribute it and/or modify it under the terms
 *  of the GNU General Public License as published by the Free Software Found-
 *  ation, either version 3 of the License, or (at your option) any later version.
 *
 *  RetroArch is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 *  without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
 *  PURPOSE.  See the GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along with RetroArch.
 *  If not, see <http://www.gnu.org/licenses/>.
*/

  /*
      var file = document.getElementById('someId');

  file.onchange = function(e) {
    var ext = this.value.match(/\.([^\.]+)$/)[1];
    switch (ext) {
      case 'jpg':
      case 'bmp':
      case 'png':
      case 'tif':
        alert('Allowed');
        break;
      default:
        alert('Not allowed');
        this.value = '';
    }
  };
  */

  /*

      //  Testing extensions suitable for the console
      function TestFileType( fileName, fileTypes ) {
        if (!fileName) return;

        dots = fileName.split(".")
        //get the part AFTER the LAST period.
        fileType = "." + dots[dots.length-1];

        return (fileTypes.join(".").indexOf(fileType) != -1) ?
        alert('That file is OK!') :
        alert("Please only upload files that end in types: \n\n" + (fileTypes.join(" .")) + "\n\nPlease select a new file and try again.");
      }
      TestFileType(this.form.uploadfile.value, ['gif', 'jpg', 'png', 'jpeg']);

  */


function onLoadReset(){
  // Function for reset forms when F5 key is pressed
  document.getElementById("form").reset();


  //Function to page continue in pt-BR when user press F5 key
  var langCheckbox = document.getElementById("langCheckbox").checked;
  if(langCheckbox === false){
    document.getElementsByTagName("html")[0].setAttribute("lang", "en-US");
    document.getElementById("langCheckbox").checked = false;
    loadJSONFile("./components/i18n/en-US.json", function(text){
      data = JSON.parse(text);  // Variable data on global scope
      pageLang();  // Function page with translated names
    });
  } else if (langCheckbox === true){
    document.getElementsByTagName("html")[0].setAttribute("lang", "pt-BR");
    document.getElementById("langCheckbox").checked = true;
    loadJSONFile("./components/i18n/pt-BR.json", function(text){
      data = JSON.parse(text);  // Variable data on global scope
      pageLang();  // Function page with translated names
    });
  }


  // Function onchange js for select consoles disabled on enable form
  function selectedIndex(){
    var selectedIndex = document.getElementById("consoleName").selectedIndex;
    if(selectedIndex === 0){
      document.getElementById("romsNames").disabled = true;
      document.getElementById("inputPath").disabled = true;
      document.getElementById("createList").disabled = true;
    } else if (selectedIndex != 0){
      //document.getElementById("consoleName").setAttribute.selectedIndex = wwww;
      document.getElementById("romsNames").disabled = false;
      document.getElementById("inputPath").disabled = false;
      document.getElementById("createList").disabled = false;
    }
  }
  selectedIndex(); // Function on F5 pressed disable the enabled form

  // Function onchange js for select consoles disabled on enable form
  var select = document.getElementById("consoleName");
  select.addEventListener('change', selectedIndex);
}



function name() {
  var regexp = "/^\S*$/";
  var z = "^[a-zA-Z0-9]*$";
  var path = document.getElementById("inputPath");
  function zzz(){

  }
  path.addEventListener('change', zzz);
}


// Function group call the two others functions
function functionGroup() {
  listGenerator();
  downloadLink();
}


// Main function on last button to run script
function listGenerator() {

  consoleName = document.getElementById("consoleName");
  //Varivel consoleName criada no escopo global
  consoleName = consoleName.options[consoleName.selectedIndex].value;

  // Recebendo valor do campo input com id="inputPath"
  var path = document.getElementById("inputPath").value; // Variable path is path of folder
  var pathNumber = path.length; // Variable pathNumber check number of caracters of path

  // get item  --->>>  file = files.item(i);
  //or  --->>>  file = files[i];
  var rN = document.getElementById('romsNames');
  fullFile = "";
  if (rN.files.length < 1 && (path === "" || pathNumber < 15)) {      // Verifica se variavel é menor que 1
    textNamesError = document.getElementById("textNamesError");
    textNamesError.style.display = 'block';
    textNamesError.innerHTML = "<br><span style=\"color: red;\">Select yours files roms.</span>";
    textPathError = document.getElementById("textPathError");
    textPathError.style.display = 'block';
    textPathError.innerHTML = "<br><span style=\"color: red;\">Invalid path, must contain at least 15 characters, without spaces.</span>";
    error = 1;
  } else if (rN.files.length < 1) {      // Verifica se variavel é menor que 1
    textNamesError = document.getElementById("textNamesError");
    textNamesError.style.display = 'block';
    textNamesError.innerHTML = "<br><span style=\"color: red;\">Select yours files roms.</span>";
    textPathError.style.display = 'none';
    textPathError.innerHTML = "";
    error = 2;
  } else if (path === "" || pathNumber < 15 ) {     // Verifica se variavel é nula ou é menor que 15
    document.getElementById("textNamesError").innerHTML = "";
    textNamesError.style.display = 'none';
    textNamesError.innerHTML = "";
    textPathError = document.getElementById("textPathError");
    textPathError.style.display = 'block';
    textPathError.innerHTML = "<br><span style=\"color: red;\">Invalid path, must contain at least 15 characters, without spaces.</span>";
    error = 3;
  } else {
    document.getElementById("textNamesError").innerHTML = "";
    document.getElementById("textPathError").innerHTML = "";
    var i = 0, text = "", virgula = "", romName = [];      // Define variables
    for (i = 0; i < rN.files.length; i++) {             // For function usage to define all array romName
      var name = rN.files.item(i).name;                 // Nome do arquivo completo
      romName[i] = name;                               // Define array romName for use sort function
    }
    //romName.sort();     --->>>     Sort an array alphabetically(error: don't sort numbers correctly/error: files with lower case will go to the end)
    //romName.sort(function(a, b){return a-b});          // Sort an array alphabetically correctly numbers and lower case with capital letters
    label="";
    for (i = 0; i < rN.files.length; i++) {
      label[i] = romName[i].slice(0,-4);              // label -> mostra apenas o nome sem extensao / slice trunca 3 caracteres apartir da direita
      text += virgula + "\n    {\n      \"path\": \"" + path + romName[i] + "\",\n      \"label\": \"" + label + "\",\n      \"core_path\": \"DETECT\",\n      \"core_name\": \"DETECT\",\n      \"crc32\": \"00000000|crc\",\n      " + "\"db_name\": \"" + consoleName + "\"\n    }";
      var virgula = ",";                                // Impreess comma after first block
    }
    fullFile = "{\n  \"version\": \"1.0\",\n  \"items\": [" + text + "\n  ]\n}";  // fullFile set all text to variable
    error = 0;
  }


(function(){

    function onChange(event) {
        var reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
        console.log(event.target.result);
        var obj = JSON.parse(event.target.result);
        alert_data(obj.name, obj.family);
    }

    function alert_data(name, family){
        alert('Name : ' + name + ', Family : ' + family);
    }

    document.getElementById('file').addEventListener('change', onChange);

}());


listOne = document.getElementById('listOne');
console.log(listOne);
 //listOne = JSON.parse(listOne);
 listTwo = JSON.parse(fullFile);




  var z = 0, text = "", virgula = "", listOneRomName = [];      // Define variables
  listOneLabel = "";
  for (z = 0; z < listOne.files.length; z++) {             // For function usage to define all array listOneRomName
    var listOneName = listOne.files.item(z).name;                 // Nome do arquivo completo
    listOneRomName[z] = listOneName;                               // Define array listOneRomName for use sort function
    listOneLabel[z] = listOneRomName[z].slice(0,-4);
  }
  //listOneRomName.sort();     --->>>     Sort an array alphabetically(error: don't sort numbers correctly/error: files with lower case will go to the end)
  //listOneRomName.sort(function(a, b){return a-b});          // Sort an array alphabetically correctly numbers and lower case with capital letters



  if((listOne.version) === (listTwo.version)){
    // length is number of lines
    j = 0; k = 0;
    var jlength = Object.keys(listOne.items).length;
    var klength = Object.keys(listTwo.items).length;

    //j is number of atual line
    for (;k<klength;){
      if (label[k] === listOneLabel[j]) {
        listTwo.items[k].label = listOne.items[j].label;
        listTwo.items[k].crc32 = listOne.items[j].crc32;
        k++;
        j = 0;
        console.log(listTwo.items[k].path);
        console.log("2IF");
      } else {
        j++;
        if (j === jlength) {
          k++;
          j = 0;
        }
      }
      console.log(j,listOneLabel[j]);
      //console.log(listTwo.items[k].path === listOne.items[j].path);
    }
  }




}
