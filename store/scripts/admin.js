function saveItem() {
    //get the values
    var code = $("#txtCode").val();
    var description = $("#txtDescription").val();
    var price = $("#txtPrice").val();
    var image = $("#txtimage").val();
    var category = $("#txtCategory").val();
    var stock = $("#txtStock").val();
    var deliveryDays = $("#txtDeliveryDays").val();

    //read the values from the rest of the input fields

    console.log(code);
    console.log(description);
    console.log(price);
    console.log(image);
    console.log(category);
    console.log(stock);
    console.log(deliveryDays);
}

function init() {
    console.log("This is the Admin Page!!");

    //used to retrieve the initial data
    //hook events
    $("#btnSave").click(saveItem);
}


window.onload = init;





