export default class OrderDetailModel {
    constructor(o_id,c_id,i_id,name,qty,total) {
        this._o_id = o_id;
        this._c_id = c_id;
        this._i_id = i_id;
        this._name = name;
        this._qty = qty;
        this._total = total;
    }


    get total() {
        return this._total;
    }

    set total(value) {
        this._total = value;
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

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

}