function generateNumber(){
    const valor1 = Math.ceil(document.querySelector(".input1").value)
    const valor2 = Math.floor(document.querySelector(".input2").value)

    const result = Math.floor(Math.random() * (valor1 - valor2) + valor2); 
     
    alert(result)
}
