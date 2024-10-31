import {itemArray} from "../db/database.js";
import ItemModel from "../model/itemModel.js";


// item id auto generate
let item_id;
setInterval(() => {
    if (itemArray.length ===0){
        item_id = 1;
        $('#newItemId').attr('placeholder',item_id);
    } else {
        item_id = itemArray.at(-1).i_id+1;
        $('#newItemId').attr('placeholder',item_id);
    }
}, 100);



// Add new Item Function
$('#btn_save_item').on('click', function () {

    let item_name = $('#newItemName').val();
    let item_description = $('#newItemDescription').val();
    let item_price = $('#newItemPrice').val();
    let item_qty = $('#newItemQuantity').val();

    let new_item = new ItemModel(
      item_id,
      item_name,
      item_description,
      item_price,
      item_qty
    );

    itemArray.push(new_item);
    loadItemTable();
    item_form_clean();

});

// item table data load function
const loadItemTable = () => {
    itemArray.map((item,number)=>{

        $("#item-table-body").empty();

        itemArray.map((item) => {
            // create table row
            let data = `<tr>
            <td>${item.i_id}</td>
            <td>${item.i_name}</td>
            <td>${item.i_description}</td>
            <td>${item.i_price}</td>
            <td>${item.i_qty}</td>
          </tr>`;

            $("#item-table-body").append(data);
        });
    });
};

//  table click function
$('#item-table-body').on('click','tr',function () {
    let index = $(this).index();
    let value = $(this).val();
    // console.log("Index : "+index)

    let item_obj = itemArray[index];

    // console.log(" : "+cus_obj)

    let id = item_obj.i_id;
    let name = item_obj.i_name;
    let description = item_obj.i_description;
    let price = item_obj.i_price;
    let qty = item_obj.i_qty;

    $('#itemId').val(id);
    $('#itemName').val(name);
    $('#itemDescription').val(description);
    $('#itemPrice').val(price);
    $('#itemQuantity').val(qty);

});

// text field clean function
let item_form_clean = () =>{
    $("#newItemId").val('');
    $("#newItemName").val('');
    $("#newItemPrice").val('');
    $("#newItemDescription").val('');
    $("#newItemQuantity").val('');

    $('#itemId').val('');
    $('#itemName').val('');
    $('#itemDescription').val('');
    $('#itemPrice').val('');
    $('#itemQuantity').val('');
}

// clear function
$('.btn_item_clear').on('click', function () {
    item_form_clean();
});

