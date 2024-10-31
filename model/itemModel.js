export default class ItemModel {
    constructor(i_id,i_name,i_description,i_price,i_qty) {
        this._i_id = i_id;
        this._i_name = i_name;
        this._i_description = i_description;
        this._i_price = i_price;
        this._i_qty = i_qty;
    }

    get i_id() {
        return this._i_id;
    }

    set i_id(value) {
        this._i_id = value;
    }

    get i_name() {
        return this._i_name;
    }

    set i_name(value) {
        this._i_name = value;
    }

    get i_description() {
        return this._i_description;
    }

    set i_description(value) {
        this._i_description = value;
    }

    get i_price() {
        return this._i_price;
    }

    set i_price(value) {
        this._i_price = value;
    }

    get i_qty() {
        return this._i_qty;
    }

    set i_qty(value) {
        this._i_qty = value;
    }
}