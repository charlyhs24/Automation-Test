module.exports =  function () {
    this.Given(/User memilih aksi tambah barang$/,()=>{
        return driver.findElement(by.className('btn btn-primary')).click();
    })
    this.Given(/User mengisi id barang$/,()=>{
        return driver.findElement(by.id('id_barang')).sendKeys('113');
    })
    this.Given(/User mengisi nama barang$/,()=>{
        return driver.findElement(by.name('nama_barang')).sendKeys('Sabun Muka');
    })
    this.Given(/User mengisi harga barang$/,()=>{
        return driver.findElement(by.name('harga_barang')).sendKeys('14750');
    })
    this.Given(/User mengisi tanggal kadaluarsa$/,()=>{
        return driver.findElement(by.name('tgl_kadaluarsa')).sendKeys('2017-11-07');
    })
    this.Given(/User mengisi id supplier$/,()=>{
        return driver.findElement(by.name('id_supplier')).sendKeys('2');
    })
    // this.When(/user memilih button simpan$/,()=>{
    //     return driver.findElement(by.tagName('button')).click();
    //     var data = helpers.getAttributeValue('button', 'btn-primary');
    //     console.log('value button'+data);
    // })
    // this.Then(/user memilih button simpan$/,()=>{
    //     helpers.loadPage('http://localhost/PMPL/tubes2-master/admin');
    // })
}