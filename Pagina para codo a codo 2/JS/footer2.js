var texto_footer2_html = `<nav>
<br>
<div id="footer" class="footer">
<a href="https://www.instagram.com/latiendaminima" target ="_blank">
    <i class="fab fa-instagram fa-2x"></i></i>/latiendaminima</a>
    
<br>
<br>
    <address>
        &copy; 2021-Todos los derechos reservados - JM SOFTWARE FACTORY
    </address>`;

        document.getElementById("footer2").innerHTML = texto_footer2_html;

var img_src = ['INSTAGRAM 1.jpg', 'INSTAGRAM 2.jpg' ]
var precio = [ '$300','$250']

var texto_html_main = "";
var cantidad_de_productos= 2;
var i = 0;

for (i=0; i<cantidad_de_productos; i++)
{texto_html_main = texto_html_main + `<img src="Imagenes/${(img_src[i])}" class='Productos_principal'>
  <div class='Precio'>Precio ${(precio[i])}</div>`
}

document.getElementById("productos_home").innerHTML = texto_html_main;
