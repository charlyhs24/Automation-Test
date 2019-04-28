module.exports = function(){
    this.Given(/User memilih aksi edit$/,()=>{
        return driver.findElement(by.className('text-warning')).click();
    })
    this.Given(/User mengupdate nama barang$/,()=>{
        return driver.findElement(by.name('nama_barang')).sendKeys('Sabun Muka');
    })
    this.Given(/User mengupdate Harga Barang$/,()=>{
        return driver.findElement(by.name('harga_barang')).sendKeys('14750');
    })
    this.Given(/User mengupdate stok barang$/,()=>{
        return driver.findElement(by.name('stok_barang')).sendKeys('20');
    })
    this.Given(/User mengupdate tanggal kadaluarsa$/,()=>{
        return driver.findElement(by.name('tgl_kadaluarsa')).sendKeys('2017-11-07');
    })
    this.Given(/User mengupdate supplier$/,()=>{
        return driver.findElement(by.name('id_supplier')).sendKeys('2');
    })
}