/*
 *	ALONSO, LUDMILA
 */


// Variables:
var c = console.log, aDiscos=[], aCNU=[];
    

// Funciones:
function Disco(){
    //private variables & array
    var nombre = 'Nombre del Disco';
    var autor = 'Nombre de la banda o artista';
    var cnu = 0;
    var pistas = [];
    var acumtiempo = 0;
    
    
    //public methods
    this.PedirNombreDisco = function (){
        do {
            nombre = prompt('Por favor ingrese el nombre del disco =) Gracias!');
        } while (!(NombreDiscoValido(nombre)))
    }
    

    this.PedirNombreAutor = function (){
        do {
            autor = prompt('Por favor ingrese el nombre del autor o la banda a la que pertenece el disco ingresado =) Gracias!');
        } while (!AutorBanda(autor))
    }
    
    
    this.PedirCNU = function (){
        do {
            cnu = parseInt(prompt('Por favor ingrese el código numérico del disco ingresado =) Gracias!'));
        } while (!CNUvalido(cnu))
        aCNU.push(cnu);
    }
    
    
    this.GuardarPista = function (pista){
        pistas.push(pista);
    }
    
    this.ArmarDisco = function (){
        var r = '';
        r += '<h2>Disco: ' + nombre + '</h2>';
        r += '<h3>Autor o Banda: ' + autor + '</h3>'
        r += '<p> Cantidad de pistas del disco: ' + pistas.length + '</p>';
        r += '<ol>';
		for (var i = 0; i < pistas.length; i++) {
            r += pistas[i].ArmarPista(); + '</li>';
		}
		r += '</ol>';
        
		return r;
    }
    
    this.DuracionDisco = function (){
        var  contDuracion = 0, promDuracion, cantDisco = aDiscos.length, cantPistas = pistas.length, cuentas='';
        
        for (var i = 0; i< pistas.length; i++){
            acumtiempo += pistas[i].ReturnTiempo();
        }
        
        contDuracion++;
        
        promDuracion = acumtiempo / cantPistas;
        
        cuentas += '<ul>'
            cuentas += '<li>La duracion promedio del disco es: ' + promDuracion + ' segundos</li>';
            cuentas +='<li>La duracion total del disco es: ' + acumtiempo + ' segundos</li>';
        cuentas += '</ul>';

        return cuentas;
        
       }
       
}

    
function Pista(){
       //private variables
       var track = 'Nombre de la pista';
       var tiempo = 0; //duracion de la pista en segundos
       
       //public methods
       this.PedirTrack = function(){
           do {
              track = prompt ('Por favor ingrese el nombre de la pista/tema del disco =) Gracias!'); 
           }while (!isNaN(track))  
       }
       
       //this.RetornarTrack = function(){
         //  return track;
       //}
       
       this.PedirDuracion = function (){
           do {
               tiempo = parseInt(prompt('Por favor ingrese la duración de la pista/tema en segundos =) Gracias!'));
           } while (!(DuracionDisco(tiempo)))
       }
       
       this.ReturnTiempo = function(){
           return tiempo;
       }
       
       this.ArmarPista = function (){
           var r = '<li style="color: ';
        {
             r += (tiempo > 180 ? 'red':'')+ '">' + 'Pista: ' + track + ' - duración: ' + tiempo + ' segundos.'; 
           }
           return r;
       }
       
}

       
//validation functions       
function CNUvalido(cnu){
    //private variable
    var control = true;
    
    //validations
    if (!(cnu > 0 && cnu <= 9999)){
        control = false;
        alert ('Está ingresando un código incorrecto, el código esta compuesto solo por hasta cuatro digitos y debe ser mayor a cero');
    }  
    if (!(aCNU.indexOf(cnu) == -1)){
        contro = false;
        alert ('El código ingresado ya se encuentra registrado, por favor intentelo nuevamente')
    }
     
    return control;
}                     
       
function NombreDiscoValido(nombre){
    //private variable
    var control = true;
 
    //validation nombre del disco   
    if (!(isNaN(nombre))){
        control = false;
        alert ('No sé si ud es un gato, perro, mono o persona, pero por favor deje de presionar enter y escriba el nombre del disco que quiere ingresar, de lo contrario entregue el teclado a alguien que sepa utilizarlo y pueda cargar los datos solicitados correctamente. Gracias =)')
        }
    
    return control;
}
           
function AutorBanda(autor){
    //private variable
    var control = true;
 
    //validation cicle autor   
    if (!(isNaN(autor))){
        control = false;
        alert ('Estimado, tiene que ingresar el autor o banda del disco, y en este momento esta dejando el campo vácio, por favor ingrese el nombre del autor o la banda a la que pertenece el disco antes de presionar Aceptar y continuar con la carga de datos.')
    } 
    
    return control;
}
           
function DuracionDisco(tiempo){
    //private variable
    var control = true;
    
    //validations
    if (!(tiempo > 0 && tiempo <= 7200)){
        control = false;
        alert ('La duración ingresada no es válida. La duración ingresada debe ser mayor a 0 y menor a 7200 segundos. Por favor intentelo nuevamente.');
    }  
    
    return control;
    
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
        pista.PedirDuracion();
        
        //guarda los datos de la pista
        disco.GuardarPista(pista);
    } while (confirm ('Desea seguir ingresando pistas?'))
        
        
    //guarda toda la informacion obtenida en el array
    aDiscos.push(disco);
}

function Mostrar() {
	// Variable que guardará la estructura HTML a mostrar:
	var r = '';
    
    
    for (var i = 0; i < aDiscos.length; i++){
        r +='<div>'
        //muestro cada disco
        r += aDiscos[i].ArmarDisco();
        r += aDiscos[i].DuracionDisco();
        r += '</div>';
    }
    
    
    
    r += '<p> Cantidad de discos cargados hasta el momento: ';
        r +='<span>' + aDiscos.length + '</span>';
    r += '</p>';
    
    
	
	// Llamo a la función 'Generar':
	Generar(r);
}