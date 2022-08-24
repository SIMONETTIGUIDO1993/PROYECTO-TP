let boton=document.getElementById('agregarProducto');
let lista=document.getElementById('lista');
let data=[];
let cant=0;

boton.addEventListener("click",agregar)

function agregar(){
  let nombreProducto=document.getElementById('nombreProducto').value;
  let precio=parseFloat(document.getElementById('precio').value);
  let cantidad=parseFloat(document.getElementById('cantidad').value);
  let total=precio*cantidad;
  // console.log(total)
  //agragar elemento al arreglo
  data.push(
    {
      "id":cant,
      "nombreProducto":nombreProducto,
      "precio":precio,
      "cantidad":cantidad,
      "total":total

    }
  );
 
  document.getElementById("lista").innerHTML += '<tr"><td>'+nombreProducto+'</td><td>'+precio+'</td><td>'+cantidad+'</td><td>'+total+'</td></tr>';
  document.getElementById("nombreProducto").value ="";
  document.getElementById("precio").value ="";
  document.getElementById("cantidad").value ="";

  cant++
  calcularElTotal();


}




 
function calcularElTotal(){
  
  let tot=0;
  for(x of data){
    tot=tot+x.total;
  }
  document.getElementById('total').innerHTML="Total   "+tot;
}

function eliminarUltimo  () {
  data.pop()
  lista.removeChild(lista.lastChild);
  //console.log("escucha el boton")
  document.getElementById('total').innerHTML="";
  calcularElTotal();

}

function eliminarTodos () {
  data.pop()
  lista.innerHTML ='';
  document.getElementById('total').innerHTML="";
  calcularElTotal();

}


let botoneliminarUltimo = document.querySelector("#eliminarProducto");
botoneliminarUltimo.addEventListener("click",eliminarUltimo);

let calcularTotales = document.querySelector("#calcularTotal");
calcularTotales.addEventListener("click",calcularElTotal);

let eliminarTodosLosProductos = document.querySelector("#eliminarTodosLosProductos");
eliminarTodosLosProductos.addEventListener("click",eliminarTodos);





