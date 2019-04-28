Feature: login
user melakukan login pada halaman website ACIM

@success
Scenario: user melihat data barang
    Given User membuka halaman login
    And User memasukan username
    And User memasukan Password
    When User menekan button login
    Then User akan menuju halaman Kelola barang
