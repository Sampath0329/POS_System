import OrderModel from "../model/orderModel.js";
import CartTm from "../tm/cartTm.js";
import {customerArray, itemArray, orderArray, orderDetail,cartArray} from "../db/database.js";

const selectCustomer = document.getElementById("select_customer_id");
const selectItem = document.getElementById("item_select_id");
let netTotal = 0;
// // Remove any empty options
// [...selectCustomer.options].forEach(option => {
//     if (!option.value.trim()) {
//         option.remove();
//     }
// });


// load customer id customer select
export function loadItemIdSelector() {

    selectItem.innerHTML = ''; //

    // Add a default empty option
    const defaultOption = document.createElement("option");
    defaultOption.value = ""; // No value for the default option
    defaultOption.textContent = "Select Item Id";
    defaultOption.selected = true;
    selectItem.appendChild(defaultOption);

    itemArray.forEach((item, index) => {
        // console.log(item)
        const option = document.createElement("option");
        option.value = item.i_id;
        option.textContent = item.i_id;


        selectItem.appendChild(option);
    });
}


// load customer id customer select
export function loadCustomerIdSelector() {

    selectCustomer.innerHTML = ''; //

    // Add a default empty option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select Customer Id";
    defaultOption.selected = true;
    selectCustomer.appendChild(defaultOption);

    customerArray.forEach(item => {
        const option = document.createElement("option");
        option.value = item.c_id;
        option.textContent = item.c_id;

        selectCustomer.appendChild(option);
    });
}


// place order function
$('#btn_placeOrder').on('click', function () {
    let selectedOption = $("#select_customer_id>option:selected");
    let value = selectedOption.val(); // Get its value
    // console.log(value);
    // orderArray.push(new OrderModel(
    //     1,
    //     "",
    //     ""
    // ))
    updateOrderId();
    // delete cartArray all value
    cartArray.length=0;
    // renew netTotal vale & update
    netTotal = 0;
    $('#payment').val(netTotal);
    // set disable value
    disableValue();
    loadCartTable();
    clearItemForm();
    disableValue();

});


// set the name / address / contact in text field Invoice details
$('#select_customer_id').on('change', function () {
    let selectedCustomerId = $("#select_customer_id>option:selected").val();
    customerArray.forEach((item,number) =>{
        // console.log(item)
       if (item.c_id === selectedCustomerId){
           $('#name').val(item.f_name+" "+item.l_name);
           $('#address').val(item.address);
           $('#contact').val(item.contact);
       }
    });
});

// set the name / desc / price / qty / contact in text field item select form
$('#item_select_id').on('change', function () {
    let selectedItemId = $("#item_select_id>option:selected").val();
    // console.log(selectedItemId)
    itemArray.forEach((item,number) =>{
        // console.log(item)
        if (item.i_id == selectedItemId){
            $('#orderItemName').val(item.i_name);
            $('#price').val(item.i_price);
            $('#qty').val(item.i_qty);
        }
    });
});


// order id auto generate
let new_order_id;
export function updateOrderId() {
    if (orderArray.length === 0) {
        new_order_id = 1;
    } else {
        new_order_id = orderArray.at(-1).o_id + 1;
        // console.log(new_order_id)
    }
    // $('#orderId').attr('placeholder', new_order_id);
    $('#orderId').val(new_order_id);
}

//  add to cart function
$('#btn_add_to_cart').on('click', function () {
   $('#cart-table-body').empty();

   // let orderId = $('#orderId').val();
   let itemId = $("#item_select_id>option:selected").val();
   let itemName = $('#orderItemName').val();
   let price = $('#price').val();
   let orderQty = $('#orderQty').val();
   netTotal += (price*orderQty);

   let cartTm = new CartTm(
       itemId,
       itemName,
       price,
       orderQty,
       (price*orderQty)
   );
   cartArray.push(cartTm);
   console.log(cartArray);

   // update Payment field
    $('#payment').val(netTotal);

   loadCartTable();
   clearItemForm();
   calculatePayment();

});

// load cart table function
const loadCartTable = () => {
    if(cartArray.length>0){
        cartArray.map((item,number)=>{

            $("#cart-table-body").empty();

            cartArray.map((item) => {
                // create table row
                let data = `<tr>
            <td>${item.i_id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.qty}</td>
            <td>${item.total}</td>
          </tr>`;

                $("#cart-table-body").append(data);
            });
        });

    } else {
        $("#cart-table-body").empty();
    }
}

// calculate the payment value
function calculatePayment() {
    let cash = Number($('#cash').val()) || 0;
    let discount = parseFloat($('#discount').val()) || 0;
    let payment = parseInt($('#payment').val(), 10) || 0;

    let balance = (cash + discount) - payment;
    $('#balance').val(balance);
}

$('#cash').on('input', calculatePayment);

// set Disable value
export function disableValue() {
    $('#cash').attr('placeholder','0');
    $('#cash').val('');
    $('#discount').val(0);
    $('#orderQty').val(1);
    $('#balance').val(0);
}

// clear item form
function clearItemForm() {
    loadItemIdSelector();
    $('#orderItemName').val("");
    $('#price').val("");
    $('#qty').val("");
}