module.exports =  function () {
    this.Given(/^User membuka halaman login$/,()=>{
        helpers.loadPage('http://localhost/PMPL/tubes2-master/');
    })
    this.Given(/^User memasukan username$/,()=>{
        return driver.findElement(by.name('id_karyawan')).sendKeys('101');
    })
    this.Given(/^User memasukan Password$/,()=>{
        return driver.findElement(by.name('password')).sendKeys('indonesia');
    })
    this.When(/^User menekan button login$/,()=>{
        return driver.findElement(by.tagName('button')).click();
    })
    this.Then(/User akan menuju halaman Kelola barang$/,()=>{
        helpers.loadPage('http://localhost/PMPL/tubes2-master/admin');
    })

}