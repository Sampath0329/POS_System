export default class OrderDetail {
    constructor(o_id,i_id,name,price,qty) {
        this._o_id = o_id;
        this._i_id = i_id;
        this._name = name;
        this._price = price;
        this._qty = qty;
    }


    get o_id() {
        return this._o_id;
    }

    set o_id(value) {
        this._o_id = value;
    }

    get i_id() {
        return this._i_id;
    }

    set i_id(value) {
        this._i_id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }
}