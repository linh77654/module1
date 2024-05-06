class Phone {
    constructor(code, name, manufacturer, price) {
        this._code = code;
        this._name = name;
        this._manufacturer = manufacturer;
        this._price = price;
    }

    get code() {
        return this._code;
    }

    set code(newCode) {
        this._code = newCode;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get manufacturer() {
        return this._manufacturer;
    }

    set manufacturer(newManufacturer) {
        this._manufacturer = newManufacturer;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    // Phương thức toString
    toString() {
        return `Mã điện thoại: ${this._code}, Tên: ${this._name}, Hãng sản xuất: ${this._manufacturer}, Giá: ${this._price}`;
    }
}
