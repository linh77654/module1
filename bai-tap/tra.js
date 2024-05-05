class dink {
    constructor(id, img, giatien, tensanpham,soluong,) {
        this.id=id;
        this.img=img;
        this.giatien=giatien;
        this.tensanpham=tensanpham;
        this.soluong=soluong;
    }
    getId(){
        return this.id;
    }
    getImg(){
        return this.img;
    }
    getGiatien(){
        return this.giatien;
    }
    getTenSanPham(){
        return this.tensanpham;
    }
    getSoluong(){
        return this.soluong;
    }
    setId(id){
        this.id=id;
    }
    setImg(img){
        this.img=img;
    }
    setGiatieng(giatien){
        this.giatien=giatien;
    }
    setTensanpham(tensanpham){
        this.tensanpham=tensanpham;
    }
}