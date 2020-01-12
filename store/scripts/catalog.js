var items = [];


function fetchCatalog() {

    items = [
        {
            "code": "1234",
            "description": "phone",
            "price": 99.65,
            "image": "http://www.cellularcountry.com/images/Motorola_Atrix_HD_Camera_Android_4G_LTE_WHITE_Phone_ATT_35388_01.jpg",
            "category": "accessories",
            "stock": 12,
            "deliveryDays": 2
        },
        {
            "code": "8643",
            "description": "Men's Ties",
            "price": 30.46,
            "image": "https://tse1.mm.bing.net/th?id=OIP.IIpj6sV23K-ga3TiHjk44AHaHa&pid=Api&P=0&w=300&h=300",
            "category": "accessories",
            "stock": 12,
            "deliveryDays": 4
        },
        {
            "code": "6781D",
            "description": "jacket",
            "price": 200,
            "image": "https://tse1.mm.bing.net/th?id=OIP.CigumYdjrVMyRatOwKmVcgHaHm&pid=Api&rs=1&c=1&qlt=95&w=104&h=107",
            "category": "Accessories",
            "stock": 12,
            "deliveryDays": 5
        },
        {
            "code": "3457",
            "description": "Shoes",
            "price": 80.65,
            "image": "https://tse4.mm.bing.net/th?id=OIP._i07TxhnqEtdNQZ-w6SOzQHaHa&pid=Api&P=0&w=300&h=300",
            "category": "Accessories",
            "stock": 12,
            "deliveryDays": 7
        },

    ];
}

function displayCatalog() {
    //travel the array
    for (var i = 0; i < items.length; i++) {
        //get the item
        var item = items[i];
        //draw the item on the DOM (html)
        drawItem(item);
    }

}

function drawItem(item) {
    //create the syntax
    /* var sntx = "<div class='item'> <label>"+ item.code
    +"</label> <label>"+ item.description +"</label> </div>"; */

    var sntx =
        `<div class='item'>
<img src='${item.image}'>
<label class='code'>${item.code}</label>
<label class='cat'>${item.category}</label>

<label class='desc'>${item.description}</label>

<label class='price'>${item.price}</label>
<button class='btn btn-sm btn-info'> + </button>

</div>`;


    //get the element from the screen
    var container = $("#catalog");

    //append the syntax to the element
    container.append(sntx);

}

function init() {
    console.log("This is the catalog page");

    //get data
    fetchCatalog();
    displayCatalog();

    //hook events
}



window.onload = init;