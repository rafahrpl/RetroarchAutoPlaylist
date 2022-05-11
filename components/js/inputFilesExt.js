// Function to define client HTML file extensions
function extDefine(){
  consoleName = document.getElementById("consoleName");
  //Varivel consoleName criada no escopo global
  consoleName = consoleName.options[consoleName.selectedIndex].value;

  if(consoleName === "Microsoft - Xbox.lpl"){
    document.getElementById("romsNames").setAttribute("accept", ".ext, .ext, .ext, .ext, .ext, .ext, .ext");
  } else if(consoleName === "Nintendo - Game Boy .lpl"){     // SET EXTENSIONS
    document.getElementById("romsNames").setAttribute("accept", ".ext, .ext, .ext, .ext, .ext, .ext, .ext");
  } else if(consoleName === "Nintendo - Game Boy Advance.lpl"){
    document.getElementById("romsNames").setAttribute("accept", ".gb, .gbc, .gba, .bin, .agb, .ndd");
  } else if(consoleName === "Nintendo - Game Boy Color.lpl"){     // SET EXTENSIONS
    document.getElementById("romsNames").setAttribute("accept", ".ext, .ext, .ext, .ext, .ext, .ext, .ext");
  } else if(consoleName === "Nintendo - GameCube.lpl"){     // Need more information exactly extensions
    document.getElementById("romsNames").setAttribute("accept", ".iso, .gcm, .dol, .wad, .tgc, .gcz, .ciso, .wbfs, .elf");
  } else if(consoleName === "Nintendo - Nintendo 3DS.lpl"){     // SET EXTENSIONS
    document.getElementById("romsNames").setAttribute("accept", ".ext, .ext, .ext, .ext, .ext, .ext, .ext");
  } else if(consoleName === "Nintendo - Nintendo 64.lpl"){
    document.getElementById("romsNames").setAttribute("accept", ".n64, .v64, .z64, .bin, .u1, .ndd");
  } else if(consoleName === "Nintendo - Nintendo DS.lpl"){
    document.getElementById("romsNames").setAttribute("accept", ".nds, .bin");
  } else if(consoleName === "Nintendo - Nintendo Entertainment System.lpl"){     // SET EXTENSIONS
    document.getElementById("romsNames").setAttribute("accept", ".ext, .ext, .ext, .ext, .ext, .ext, .ext");
  } else if(consoleName === "Nintendo - Super Nintendo Entertainment System.lpl"){
    document.getElementById("romsNames").setAttribute("accept", ".smc, .sfc, .swc, .bs, .st, .fig, .bml");
  } else if(consoleName === "Nintendo - Wii.lpl"){     // Need more information exactly extensions
    document.getElementById("romsNames").setAttribute("accept", ".iso, .gcm, .dol, .wad, .tgc, .gcz, .ciso, .wbfs, .elf");
  } else if(consoleName === "Sega - Dreamcast.lpl"){
    document.getElementById("romsNames").setAttribute("accept", ".cdi, .chd, .gdi");     // .7zip to Naomi / Atomiswave
  } else if(consoleName === "Sony - PlayStation.lpl"){
    document.getElementById("romsNames").setAttribute("accept", ".cue, .cbn, .chd, .img, .iso, .m3u, .mdf, .pbp, .toc, .z, .znx, .bin, .ccd");
  } else if(consoleName === "Sony - PlayStation 2.lpl"){
    document.getElementById("romsNames").setAttribute("accept", ".iso, .img, .bin, .mdf, .z, .z2, .bz2, .dump, .cso, .ima, .gz");
  } else if(consoleName === "Sony - PlayStation Portable.lpl"){
    document.getElementById("romsNames").setAttribute("accept", ".iso, .prx, .pbp, .cso, .elf");
  } else if(consoleName === "Sony - PlayStation Vita.lpl"){     // SET EXTENSIONS
    document.getElementById("romsNames").setAttribute("accept", ".ext, .ext, .ext, .ext, .ext, .ext, .ext");
  }
}

'use strict';
var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 ){
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
      countFiles = "greater1" // countFiles is a variable GLOBAL to lang.js
		}else{
			fileName = e.target.value.split( '\\' ).pop();
      countFiles = "smaller1" // countFiles is a variable GLOBAL to lang.js
		}
		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});
