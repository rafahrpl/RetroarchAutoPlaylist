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
// Create download link with code generated
(function () {
  // Seleciona o elemento por Id e define o nome do atributo download
  var consoleName = document.getElementById("consoleName");
  //Varivel consoleName criada no escopo global
  consoleName = consoleName.options[consoleName.selectedIndex].value;
  document.getElementById("downloadLink").setAttribute("download", consoleName);

  var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    return textFile;
  };

  create.addEventListener('click', function () {
    var link = document.getElementById('downloadLinkPrev');
    link.href = makeTextFile(fullFile);
    link.style.display = 'block';
  }, false);
})();
*/

/*

  //var downloadLink = document.createElement('a');
  var downloadLink = document.createElement('a');
  downloadLink.setAttribute('id', 'downloadLink');
  downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fullFile));
  downloadLink.setAttribute('download', consoleName);
  downloadLink.innerHTML = consoleName;
  downloadLink.style.display = 'block';
  downloadLink.click();
  document.getElementById("downloadButton").appendChild(downloadLink);
  counter++;

*/

function downloadLink(){    // Start file download.
  // fullFile is a text of archive
  // consoleName is a filename of download archive
  // Variable counter make it impossible to create two or more download buttons on function downloadLink
  //var downloadLink = document.createElement('a');
  paragraph = document.getElementById("paragraph"); // Variable on global scope
  downloadButton = document.getElementById("labelModalDownload").value = "Error of Path";
  if(error == 1){
    paragraph.style.display = 'block';
    paragraph.innerText = "<span style=\"color: red;\">Error: </span>Select yours files roms and Insert a valid path without spaces.";
    document.getElementById("labelModalDownload").innerHTML = "Select yours files Roms and Insert a valid path without spaces";
  } else if(error == 2){
    paragraph.style.display = 'block';
    paragraph.style.color = 'red';
    paragraph.innerText = "<span style=\"color: red;\">Error: </span>Select yours files roms.";
    document.getElementById("labelModalDownload").innerHTML = "Select yours files Roms";
  } else if(error == 3){
    paragraph.style.display = 'block';
    paragraph.innerText = "<span style=\"color: red;\">Error: </span>Insert a valid path without spaces.";
    document.getElementById("labelModalDownload").innerHTML = "Insert a valid path without spaces";
  } else if(error == 0){
    paragraph.style.display = 'none';
    paragraph.innerText = "";
    var downloadButton = document.getElementById("downloadButton");
    downloadButton.style.display = 'block';
    var downloadLink = document.getElementById("downloadLink");
    downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(fullFile));
    downloadLink.setAttribute('download', consoleName);
    downloadLink.innerHTML = consoleName;
    document.getElementById("labelModalDownload").innerHTML = "Download file";
  }
  //document.body.removeChild(element);
  // addEventListener("click", var) your functionality is only on buttom, on top required 2 click
}
