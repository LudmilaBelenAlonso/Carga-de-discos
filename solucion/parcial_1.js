/*
 *	ALONSO, LUDMILA
 */


// Variables:
var c = console.log, aDiscos=[];
    

// Funciones:
function Disco(){
    //private variables & array
    var nombre = 'Nombre del Disco';
    var autor = 'Nombre de la banda o artista';
    var cnu = 0;
    var pistas = [];
    
    //public methods
    this.PedirNombreDisco = function (){
        do {
            nombre = prompt('Por favor ingrese el nombre del disco =) Gracias!');
        } while (!isNaN(nombre))
    }
    
    this.LeerNombreDisco =  function () {
      return nombre;
    }
    
    this.PedirNombreAutor = function (){
        do {
            autor = prompt('Por favor ingrese el nombre del autor o la banda a la que pertenece el disco ingresado =) Gracias!');
        } while (!isNaN(nombre))
    }
    
    this.LeerNombreAutor =  function () {
      return autor;
    }
    
    this.PedirCNU = function (){
        do {
            cnu = parseInt(prompt('Por favor ingrese el código numérico del disco ingresado =) Gracias!'));
        } while (!(cnu >= 0 && cnu <= 9999))
    }
    
    this.LeerCNU =  function () {
      return cnu;
    }
    
    this.GuardarPista = function (pista){
        pistas.push(pista);
    }
    
    this.ArmarDisco = function (){
        var r = '';
		r += '<h2>Disco: ' + nombre + '</h2>';
        r += '<h3>Autor o Banda: ' + autor + '</h3>'
		r += '<ol>';
		for (var i = 0; i < pistas.length; i++) {
			r += '<li>' + pistas[i].ArmarPista() + '</li>';
		}
		r += '</ol>';
		return r;
    }
}
    
function Pista(){
       //private variables
       var track = 'Nombre de la pista';
       var time = 0; //duracion de la pista en segundos
       
       //public methods
       this.PedirTrack = function(){
           do {
              track = prompt ('Por favor ingrese el nombre de la pista/tema del disco =) Gracias!'); 
           }while (!isNaN(track))  
       }
       
       this.RetornarTrack = function(){
           return track;
       }
       
       this.AskTime = function (){
           do {
               time = parseInt(prompt('Por favor ingrese la duración de la pista/tema =) Gracias!'));
           } while (!(time > 0 && time <= 7200))
       }
       
       this.ReturnTime = function(){
           return time;
       }
       
       this.ArmarPista = function (){
           var r = '';
           r += 'Pista: ' + track + ' - duración: ' + time;
           return r;
       }
}


function Cargar() {
    //private variables
    var disco, pista;
    
    //create nuevo dico
    disco = new Disco();
    
    //pedir los atributos del disco
    disco.PedirNombreDisco();
    disco.PedirNombreAutor();
    disco.PedirCNU();
    
    //pedir las pistas del disco y sus atributos
    do {
        //crear nueva pista
        pista = new Pista();
        
        //pedir los artributos de la pista
        pista.PedirTrack();
        pista.AskTime();
        
        //guarda los datos de la pista
        disco.GuardarPista(pista);
    } while (confirm ('Desea seguir ingresando pistas?'))
        
    //guarda toda la informacion obtenida en el array
    aDiscos.push(disco);
}

function Mostrar() {
	// Variable que guardará la estructura HTML a mostrar:
	var r = ''
    
    for (var i = 0; i < aDiscos.length; i++){
        //muestro cada disco
        r += aDiscos[i].ArmarDisco();
    }
	
	// Llamo a la función 'Generar':
	Generar(r);
}