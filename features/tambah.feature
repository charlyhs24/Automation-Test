Feature: Tambah Barang
user menambahkan data barang baru pada halaman website ACIM

@success
Scenario: menambahkan data barang baru
    Given User membuka halaman login
    And User memasukan username
    And User memasukan Password
    When User menekan button login
    Then User akan menuju halaman Kelola barang
    Given User memilih aksi tambah barang 
    And User mengisi id barang
    And User mengisi nama barang
    And User mengisi harga barang
    And User mengisi tanggal kadaluarsa
    And User mengisi id supplier
    # When User memilih button simpan
    # Then User menuju halaman Kelola Barang