import CustomerModel from "../model/customerModel.js";
import {customerArray} from "../db/database.js";


// Add new Customer Function
$('#btn_save_customer').on('click', function () {
    let customer_id = $('#newCustomerId').val();
    let customer_f_name = $('#newCustomerFirstName').val();
    let customer_l_name = $('#newCustomerLastName').val();
    let customer_address = $('#newCustomerAddress').val();
    let customer_contact = $('#newCustomerContact').val();
    let customer_salary = $('#newCustomerSalary').val();

    // console.log(`${customer_id}${customer_f_name}${customer_l_name}${customer_address}${customer_contact}${customer_salary}`)

    let new_customer = new CustomerModel(
      customer_id,
      customer_f_name,
      customer_l_name,
      customer_address,
      customer_contact,
      customer_salary
    );

    customerArray.push(new_customer);
    loadCustomerTable();
    customer_form_clean();

});

// customer table data load function
const loadCustomerTable = () => {
    customerArray.map((item,number)=>{
        // remove exist value
        // console.log(number);
        $("#customer-table-body").empty();

        customerArray.map((item) => {
            // create table row
            let data = `<tr>
            <td>${item.c_id}</td>
            <td>${item.f_name}</td>
            <td>${item.l_name}</td>
            <td>${item.address}</td>
            <td>${item.contact}</td>
            <td>${item.salary}</td>
          </tr>`;

            $("#customer-table-body").append(data);
        });
    });
}

// text field clean function
let customer_form_clean = () =>{
    $("#newCustomerId").val('');
    $("#newCustomerFirstName").val('');
    $("#newCustomerLastName").val('');
    $("#newCustomerAddress").val('');
    $("#newCustomerContact").val('');
    $("#newCustomerSalary").val('');

    $('#customerId').val('');
    $('#customerFirstName').val('');
    $('#customerLastName').val('');
    $('#customerAddress').val('');
    $('#customerContact').val('');
    $('#customerSalary').val('');
}

//  table click function
$('#customer-table-body').on('click','tr',function () {
    let index = $(this).index();
    let value = $(this).val();
    // console.log("Index : "+index)

    let cus_obj = customerArray[index];

    // console.log(" : "+cus_obj)

    let id = cus_obj.c_id;
    let fName = cus_obj.f_name;
    let lName = cus_obj.l_name;
    let address = cus_obj.address;
    let contact = cus_obj.contact;
    let salary = cus_obj.salary;

    $('#customerId').val(id);
    $('#customerFirstName').val(fName);
    $('#customerLastName').val(lName);
    $('#customerAddress').val(address);
    $('#customerContact').val(contact);
    $('#customerSalary').val(salary);

});

// customer search Function
$('#btn_customer_search').on('click', function () {
    let customer_id = $('#customerId').val();
    // console.log(customer_id);
    customerArray.map((item,number) =>{
        if (customer_id === customerArray[number].c_id){

            let cus_obj = customerArray[number];

            // console.log(" : "+cus_obj)

            let id = cus_obj.c_id;
            let fName = cus_obj.f_name;
            let lName = cus_obj.l_name;
            let address = cus_obj.address;
            let contact = cus_obj.contact;
            let salary = cus_obj.salary;

            $('#customerId').val(id);
            $('#customerFirstName').val(fName);
            $('#customerLastName').val(lName);
            $('#customerAddress').val(address);
            $('#customerContact').val(contact);
            $('#customerSalary').val(salary);

        }
    });
});

// customer Update function
$('#btn_customer_update').on('click', function () {
    let id = $('#customerId').val();

    customerArray.forEach((item) => {
        if (id === item.c_id) {
            item.f_name = $('#customerFirstName').val();
            item.l_name = $('#customerLastName').val();
            item.address = $('#customerAddress').val();
            item.contact = $('#customerContact').val();
            item.salary = $('#customerSalary').val();
        }
    });

    loadCustomerTable();
    customer_form_clean();
});

// delete Customer Function
$('#btn_customer_delete').on('click', function () {
    let id = $('#customerId').val();

    customerArray.map((item,number)=>{

        if (id === customerArray[number].c_id){
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
                    customerArray.splice(number,1);
                    customer_form_clean();
                    loadCustomerTable();
                }
            });
        }
    });

});

$('.btn_clear').on('click', function () {
    customer_form_clean();
})
