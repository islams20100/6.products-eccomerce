var prodcutNameInput = document.getElementById('prodcutNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var prodcutCategoryInput = document.getElementById('prodcutCategoryInput');
var prodcutDescInput = document.getElementById('prodcutDescInput');
var searchInput = document.getElementById('searchInput');

var allProduct;

if (localStorage.getItem('websiteProdcuts') == null) {
    //first time , create your array
    allProduct = [];
} else {
    //second time , return prodcuts and add them to your array
    allProduct = JSON.parse(localStorage.getItem('websiteProdcuts'));//JSON.parse convert string to json (array pf objects)
    displayProducts(allProduct);
}

function addProduct() {
    var product =
    {
        name: prodcutNameInput.value,
        price: productPriceInput.value,
        category: prodcutCategoryInput.value,
        desc: prodcutDescInput.value
    }
    allProduct.push(product);
    localStorage.setItem('websiteProdcuts', JSON.stringify(allProduct));//JSON.stringfy convert json(array of objects) to string
    displayProducts(allProduct);

    clearForm();


}

function displayProducts(displayArr) {
    var container = ' ';
    for (var i = 0; i < displayArr.length; i++) {
        container += `<tr>
                <td>${i}</td>
                <td>${displayArr[i].name}</td>
                <td>${displayArr[i].price}</td>
                <td>${displayArr[i].category}</td>
                <td>${displayArr[i].desc}</td>
                <td><button class="btn btn-success">Update</button></td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
                </tr>`
    }
    document.getElementById('table-content').innerHTML = container;
}


function deleteProduct(index) {
    allProduct.splice(index, 1);
    localStorage.setItem('websiteProdcuts', JSON.stringify(allProduct));
    displayProducts(allProduct);
}


function clearForm() {
    prodcutNameInput.value = '';
    productPriceInput.value = '';
    prodcutCategoryInput.value = '';
    prodcutDescInput.value = '';
}


function searchProduct() {
    var term = searchInput.value;
    var wantedProducts = [];
    for (var i = 0; i < allProduct.length; i++) {
        if (allProduct[i].name.toLowerCase().includes(term.toLowerCase())) {
            wantedProducts.push(allProduct[i]);
        }
    }
    displayProducts(wantedProducts);
}