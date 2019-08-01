var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


var paleta = document.getElementById('paleta')

var grilla_pixeles=document.getElementById('grilla-pixeles')


var colorElegido;
var nombreColorElegido;

var indicadorColor = document.getElementById('indicador-de-color');

var indicadorColorTexto = document.getElementById('indicador-de-color-mensaje');

var colorPersonalizado = document.getElementById('color-personalizado');

var mouseApretado = false;

var botonGuardar = document.getElementById('guardar');

var botonBorrar = document.getElementById('borrar');

var batmanImg = document.getElementById('batman');
var mujerMaravillaImg = document.getElementById('wonder');
var flashImg = document.getElementById('flash');
var invisibleImg = document.getElementById('invisible');




function actualizarPaleta(lista) {
  for (var i = 0; i < lista.length; i++) {
    var el = document.createElement('div')
    el.style.backgroundColor = lista[i];
    el.className = 'color-paleta';
    paleta.appendChild(el);

  }
}

function crearGrilla(){
  for (var i = 0; i < 1750; i++) {
    var pix = document.createElement('div');
    pix.className='pixels';
    grilla_pixeles.appendChild(pix);
    
  }

}

function elegirColor(){
  var color = document.getElementById('paleta');
  color.addEventListener("click", tomarColor);

  function tomarColor(e){
    indicadorColor.style.backgroundColor = e.target.style.backgroundColor;
    colorElegido = e.target.style.backgroundColor;
    indicadorColorTexto.textContent="Pincel Color "+colorElegido;
   }
}


grilla_pixeles.addEventListener("click",pintarPixel)

function pintarPixel(e){
    e.target.style.backgroundColor = indicadorColor.style.backgroundColor;
  }


// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.


colorPersonalizado.addEventListener('change', 
  (function() {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorColor.style.backgroundColor = colorActual;
    indicadorColorTexto.textContent = indicadorColor.style.backgroundColor;

  })
);


grilla_pixeles.addEventListener("mousedown", apretar);
grilla_pixeles.addEventListener("mouseup", suelto);
grilla_pixeles.addEventListener("mouseover", mover);

function apretar(e){
  mouseApretado=true;
}

function suelto(e){
  mouseApretado=false;
}

function mover(e) {
  if (mouseApretado) {
    pintarPixel(e);

     }
  }



// // Abre una ventana para guardar nuestro arte en un archivo pixel-art.png
// function guardarPixelArt() {
//   html2canvas($("#grilla-pixeles") , {
//     onrendered: function(canvas) {
//       theCanvas = canvas;
//       canvas.toBlob(function(blob) {
//         saveAs(blob, "pixel-art.png");
//       });
//     }
//   });
// }

// Carga a un superheroe predefinido
// function cargarSuperheroe(superheroe) {
//   var $pixeles = $("#grilla-pixeles div");
//   for (var i = 0; i < superheroe.length; i++) {
//     $pixeles[i].style.backgroundColor = superheroe[i];
//   }
// }


botonGuardar.addEventListener("click", guardarPixelArt); //esta funcion se encuentra en recursos.js

//Hago mi adaptación de la función de superheroes sin Jquery
function CargarHeroe(superheroe){
  var grilla = document.querySelectorAll("#grilla-pixeles div" );
  for (var i = 0; i < grilla.length; i++) {
    grilla[i].style.backgroundColor = superheroe[i];
  }
}



batmanImg.addEventListener("click", function(){
  CargarHeroe(batman);
})

mujerMaravillaImg.addEventListener("click", function(){
  CargarHeroe(wonder);
})

flashImg.addEventListener("click", function(){
  CargarHeroe(flash);
})

invisibleImg.addEventListener("click", function(){
  CargarHeroe(invisible);
})


function Borrar(){
  var grilla = document.querySelectorAll("#grilla-pixeles div" );
  for (var i = 0; i < grilla.length; i++) {
    grilla[i].style.backgroundColor = 'white';
  }
}


botonBorrar.addEventListener("click", function(){
  Borrar();
})






window.onload = function(){
  actualizarPaleta(nombreColores);
  crearGrilla();
  elegirColor();
}




