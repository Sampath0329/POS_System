export default class OrderModel{
    constructor(o_id,c_id,o_amount) {
        this._oid = o_id;
        this._cic = c_id;
        this._oamount = o_amount;
    }

    get o_id() {
        return this._o_id;
    }

    set o_id(value) {
        this._o_id = value;
    }

    get c_id() {
        return this._c_id;
    }

    set c_id(value) {
        this._c_id = value;
    }

    get o_amount() {
        return this._o_amount;
    }

    set o_amount(value) {
        this._o_amount = value;
    }
}