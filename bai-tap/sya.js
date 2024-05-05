class menuDink {
    constructor(arr) {
        this.menu = arr;
    }

    showDrink() {
        let table = ''
        for (let i = 0; i < menu.length; i++) {
            table += 'tr';
            table += 'td';
            table += this.menu[i].id;
            table += '/td';

            table += 'tr';
            table += 'td';
            table += this.menu[i].img;
            table += '/td';

            table += 'tr';
            table += 'td';
            table += this.menu[i].giatien;
            table += '/td';

            table += 'tr';
            table += 'td';
            table += this.menu[i].tensanpham;
            table += '/td';

            table += 'tr';
            table += 'td';
            table += this.menu[i].soluong;
            table += '/td';
        }

    }
}