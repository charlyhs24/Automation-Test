Feature: Tambah Barang
user mengupdate data barang pada halaman website ACIM

@success
Scenario: menambahkan data barang baru
    Given User membuka halaman login
    And User memasukan username
    And User memasukan Password
    When User menekan button login
    Then User akan menuju halaman Kelola barang
    Given User memilih aksi edit 
    And User mengupdate nama barang
    And User mengupdate Harga Barang
    And User mengupdate stok barang
    And User mengupdate tanggal kadaluarsa
    And User mengupdate supplier

