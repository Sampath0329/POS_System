export default class CartTm {
    constructor(i_id,name,price,qty,total) {
        this._i_id = i_id;
        this._name = name;
        this._price = price;
        this._qty = qty;
        this._total = total;
    }

    get total() {
        return this._total;
    }
    set total(value) {
        this._total = value;
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