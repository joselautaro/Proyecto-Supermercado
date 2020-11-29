
$("#titulo").ready(function(){
  $("#titulo").show(2000);
})
document.getElementById("product-form").addEventListener("submit", function (e) {
      e.preventDefault();

          const name = $("#name").val(),
      price = $("#price").val(),
      year = $("#year").val();

    
      const product = new Product(name, price, year);
      localStorage.setItem ('nombre', JSON.stringify (product))
      sessionStorage.setItem ('nombre', JSON.stringify (product))
    
    const ui = new UI();

    
    if (name === "" || price === "" || year === "") {
      return ui.showMessage("Por favor inserte información en los campos", "danger");
    }

   
    ui.addProduct(product);
    ui.showMessage("Producto agregado satisfactoriamente", "success");
    ui.resetForm();
});

$("#product-list").on("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});



$("#dolar").ready(mostrar)
function mostrar(){
    $.ajax({
        url: "https://www.dolarsi.com/api/api.php?type=valoresprincipales",
        type: "GET",
        dataType: "json"
    }).done( function(resultadoJson) {
    console.log(resultadoJson);
        var dolarHoyCompra = document.createTextNode("Valor dolar actual para la compra: " + " $ " + resultadoJson[0].casa.compra);
        $("#valorCompra").append(dolarHoyCompra).slideDown(5000);
        var dolarHoyVenta = document.createTextNode("Valor dolar actual para la venta: " + " $ " + resultadoJson[0].casa.venta);
        $("#valorVenta").append(dolarHoyVenta); 
    }).fail( function(xhr, status, error){         
        console.log(xhr);
        console.log(status);
        console.log(error);
    }) 
             

}

