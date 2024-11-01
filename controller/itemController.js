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
    if(itemArray.length>0){
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

    } else {
        $("#item-table-body").empty();
    }
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

// item search Function
$('#btn_item_search').on('click', function () {
    let item_id = $('#itemId').val();
    itemArray.map((item,number) =>{

        // console.log(item);
        // console.log(number);

        if (item_id == itemArray[number].i_id){
            let item_obj = itemArray[number];

            // console.log(item_obj);
            // console.log(" : "+cus_obj)

            let id = item_obj.i_id;
            let name = item_obj.i_name;
            let desc = item_obj.i_description;
            let price = item_obj.i_price;
            let qty = item_obj.i_qty;

            $('#itemId').val(id);
            $('#itemName').val(name);
            $('#itemDescription').val(desc);
            $('#itemPrice').val(price);
            $('#itemQuantity').val(qty);

        }
    });
});

// item Update function
$('#btn_item_update').on('click', function () {
    let id = $('#itemId').val();

    itemArray.forEach((item, index) => {
        if (id == item.i_id) {

            item.i_name = $('#itemName').val();
            item.i_description = $('#itemDescription').val();
            item.i_price = $('#itemPrice').val();
            item.i_qty = $('#itemQuantity').val();

            // console.log("Updated item:", item);
        }
    });

    loadItemTable();
    item_form_clean();
});

// delete Item Function
$('#btn_item_delete').on('click', function () {
    let id = $('#itemId').val();

    itemArray.map((item,number)=>{

        if (id == itemArray[number].i_id){
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    itemArray.splice(number,1);
                    item_form_clean();
                    loadItemTable();
                }
            });
        }
    });

});