export default class CustomerModel{
    constructor(c_id,f_name,l_name,address,contact,salary) {
        this._c_id = c_id;
        this._f_name = f_name;
        this._l_name = l_name;
        this._address = address;
        this._contact = contact;
        this._salary = salary;
    }

    get c_id() {
        return this._c_id;
    }

    set c_id(value) {
        this._c_id = value;
    }

    get f_name() {
        return this._f_name;
    }

    set f_name(value) {
        this._f_name = value;
    }

    get l_name() {
        return this._l_name;
    }

    set l_name(value) {
        this._l_name = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get contact() {
        return this._contact;
    }

    set contact(value) {
        this._contact = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }
}