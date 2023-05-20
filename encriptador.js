

var  ingreseTexto = document.querySelector(".textarea");
var  mostrarTexto = document.querySelector(".muestratexto");

var  permitido = new RegExp(/^[a-z\s]+$/i );
var permitido2 = new RegExp(/[A-Z]/)
let letras = [];
let resultado = "";

function generarEncriptado() {
    event.preventDefault();
    let string = ingreseTexto.value;
    if (validarTexto(string) == true) {
        let i = 0;
        encriptar(string);
        while (i < letras.length) {
            resultado = resultado + letras[i];
            i++;
        }
        
        string = "";
        letras = [];
        mostrarTexto.textContent = resultado;
        resultado = "";
    }
}

function generarDesencriptado() {
    let string = ingreseTexto.value;
    if (validarTexto(string) == true) {
        let i = 0;
        desencriptar(string);
        while (i < letras.length) {
            resultado = resultado + letras[i];
            i++;
        }
        string = "";
        letras = [];
        mostrarTexto.textContent = resultado;
        resultado = "";
    }
}



function validarTexto(text) {
    event.preventDefault();
        if (!permitido.test(text) || permitido2.test(text)) {
          mostrarTexto.textContent = "-----Texto Inválido----";
          return false;
        }
        return true;
      }


function encriptar(string){
    event.preventDefault();
	let letras=[];
	for (i = 0; i < string.length; i++) {
		if (string[i]== "e"){
			letras.push("enter");
		}

		else if (string[i] == "i") {
			letras.push("imes");
		}

		else if (string[i] == "a") {
			letras.push("ai");
		}

		else if (string[i] == "o") {
			letras.push("ober");
		}

		else if (string[i] == "u") {
			letras.push("ufat");
		}

		else {
			letras.push(string[i]);
		}
	}	
    resultado = letras.join("");
    console.log(letras, letras.length);
    return resultado;
	
	
}

function desencriptar(string) {
   	let letras=[];
    let i = 0;
    while (i < string.length) {
        switch (string[i]) {
            case 'a':
                letras.push('a');
                i += 2;
                break;
            case 'e':
                letras.push('e');
                i += 5;
                break;
            case 'i':
                letras.push('i');
                i += 4;
                break;
            case 'o':
                letras.push('o');
                i += 4;
                break;
            case 'u':
                letras.push('u');
                i += 4;
                break;
            default:
                letras.push(string[i]);
                i += 1;
                break;
        }
    }
    resultado = letras.join("");
    console.log(letras, letras.length);
    return resultado;
}

function copiar(){
    event.preventDefault();
    let copiarTexto = mostrarTexto;
    copiarTexto.select();
    document.execCommand("copy");
}

function borrar(){
    event.preventDefault();
    ingreseTexto.textContent = "";
    mostrarTexto.textContent = "";
    letras = [];
    resultado = "";
}


mostrarTexto.focus();