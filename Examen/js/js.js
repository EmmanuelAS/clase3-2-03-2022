let resultado = document.getElementById("Resej1")
let Horas, Total, Valordehora
function leerdatos() {
    Horas = Number(prompt("ingrese cantidad de Horas"))

}
leerdatos()
console.log(calculadora(Horas))
function calculadora(Horas) {
    if (Horas <= 40) {
        Valordehora = 20000
        Total = Valordehora * Horas
    }
    else if (Horas > 40) {
        
        Valordehora = 20000
        Total = (Valordehora * 40) + ((Horas - 40) * 30000)
    }
    else{
        alert("error")
    }
    
    return Total
}
console.log(Total)
alert(Total)
