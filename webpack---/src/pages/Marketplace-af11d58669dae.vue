<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-3 col-12">
        <div class="flex-column nav">
          <form class="">

            <div class="form-group">
              <label class="text-center form-label" style="width: 100%;">Search by Id</label>
              <input @keyup="searchByInputId" placeholder="Search by Id" v-model="searchById" type="number" class="form-control">
            </div>
<!--            <div class="form-group">-->
<!--              <label class="text-center form-label" for="exampleForm.SelectCustomSizeSm" style="width: 100%;">Sort By</label>-->
<!--              <select id="exampleForm.SelectCustomSizeSm" class="custom-select custom-select-sm">-->
<!--                <option>Highest Price</option>-->
<!--                <option>Lowest Price</option>-->
<!--                <option>Highest Bid</option>-->
<!--                <option>Lowest Bid</option>-->
<!--                <option>Lowest Id</option>-->
<!--                <option>Highest Id</option>-->
<!--              </select>-->
<!--            </div>-->
<!--            <div class="form-group">-->
<!--              <div style="width: 100%; margin-bottom: 10px;" variant="outline-primary" role="group"-->
<!--                   class="btn-group btn-group-toggle"><label-->
<!--                      class="btn active btn-outline-primary"><input name="options" type="radio"-->
<!--                                                                    autocomplete="off"-->
<!--                                                                    value="saleUndefined" checked="">All</label><label-->
<!--                      class="btn btn-outline-primary"><input name="options" type="radio"-->
<!--                                                             autocomplete="off" value="saleOn">For-->
<!--                Sale</label><label class="btn btn-outline-primary"><input name="options"-->
<!--                                                                          type="radio"-->
<!--                                                                          autocomplete="off"-->
<!--                                                                          value="saleOff">Not For-->
<!--                Sale</label></div>-->
<!--              <div style="width: 100%;" variant="outline-primary" role="group"-->
<!--                   class="btn-group btn-group-toggle"><label-->
<!--                      class="btn active btn-outline-primary"><input name="options" type="radio"-->
<!--                                                                    autocomplete="off"-->
<!--                                                                    value="bidUndefined" checked="">All</label><label-->
<!--                      class="btn btn-outline-primary"><input name="options" type="radio"-->
<!--                                                             autocomplete="off"-->
<!--                                                             value="bidOn">Bids</label><label-->
<!--                      class="btn btn-outline-primary"><input name="options" type="radio"-->
<!--                                                             autocomplete="off" value="bidOff">No Bids</label>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div>-->
<!--              <button aria-controls="example-collapse-text" aria-expanded="false"-->
<!--                      style="margin-bottom: 5px;" type="button"-->
<!--                      class="btn btn-outline-dark btn-block">Type Filter-->
<!--              </button>-->
<!--              <div class="collapse row row-cols-lg-1 row-cols-md-1 row-cols-1">-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Alien (9/9)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Ape (24/24)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Female (3840/3840)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Male (6039/6039)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Zombie (88/88)</label></div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--            <div>-->
<!--              <button aria-controls="example-collapse-text" aria-expanded="false"-->
<!--                      style="margin-bottom: 5px;" type="button"-->
<!--                      class="btn btn-outline-dark btn-block">Attributes Filter-->
<!--              </button>-->
<!--              <div class="collapse row row-cols-lg-1 row-cols-md-1 row-cols-1">-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">3D Glasses (286/286)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Bandana (481/481)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Beanie (44/44)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Big Beard (146/146)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Big Shades (535/535)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Black Lipstick (617/617)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Blonde Bob (147/147)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Blonde Short (129/129)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Blue Eye Shadow (266/266)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Buck Teeth (78/78)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Cap (351/351)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Cap Forward (254/254)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Chinstrap (282/282)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Choker (48/48)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Cigarette (961/961)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Classic Shades (502/502)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Clown Eyes Blue (384/384)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Clown Eyes Green (382/382)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Clown Hair Green (148/148)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Clown Nose (212/212)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Cowboy Hat (142/142)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Crazy Hair (414/414)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Dark Hair (157/157)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Do-rag (300/300)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Earring (2459/2459)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Eye Mask (293/293)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Eye Patch (461/461)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Fedora (186/186)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Front Beard (273/273)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Front Beard Dark (260/260)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Frown (261/261)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Frumpy Hair (442/442)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Goat (295/295)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Gold Chain (169/169)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Green Eye Shadow (271/271)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Half Shaved (147/147)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Handlebars (263/263)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Headband (406/406)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Hoodie (259/259)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Horned Rim Glasses (535/535)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Hot Lipstick (696/696)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Knitted Cap (419/419)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Luxurious Beard (286/286)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Medical Mask (175/175)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Messy Hair (460/460)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Mohawk (441/441)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Mohawk Dark (429/429)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Mohawk Thin (441/441)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Mole (644/644)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Mustache (288/288)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Muttonchops (303/303)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Nerd Glasses (572/572)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Normal Beard (292/292)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Normal Beard Black (289/289)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Orange Side (68/68)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Peak Spike (303/303)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Pigtails (94/94)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Pilot Helmet (54/54)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Pink With Hat (95/95)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Pipe (317/317)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Police Cap (203/203)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Purple Eye Shadow (262/262)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Purple Hair (165/165)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Purple Lipstick (655/655)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Red Mohawk (147/147)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Regular Shades (527/527)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Rosy Cheeks (128/128)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Shadow Beard (526/526)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Shaved Head (300/300)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Silver Chain (156/156)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Small Shades (378/378)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Smile (238/238)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Spots (124/124)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Straight Hair (151/151)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Straight Hair Blonde (144/144)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Straight Hair Dark (148/148)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Stringy Hair (463/463)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Tassle Hat (178/178)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Tiara (55/55)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Top Hat (115/115)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">VR (332/332)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Vampire Hair (147/147)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Vape (272/272)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Welding Goggles (86/86)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Wild Blonde (144/144)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Wild Hair (447/447)</label></div>-->
<!--                </div>-->
<!--                <div class="col">-->
<!--                  <div class="form-check form-check-inline"><input type="checkbox"-->
<!--                                                                   class="form-check-input"><label-->
<!--                          title="" class="form-check-label">Wild White Hair (136/136)</label>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
          </form>
        </div>
      </div>
      <div class="col">
        <div class="infinite-scroll-component__outerdiv">
          <div class="infinite-scroll-component " style="height: auto; overflow: auto;">
            <div class="row">
              <div v-for="(punk) in punks" v-bind:key="punk.idx" style="margin-bottom: 10px;" class="col" >
                <div style="height: 100%; max-width: 300px; min-width: 210px;" class="card">

                  <img v-if="justin_Tpunks.indexOf(punk.idx) > -1" class="card-img-top pixelated" :src="('/justin/' +punk.idx +'-Tpunk.png')">
                  <img v-else-if="punk.idx < 10" class="card-img-top pixelated" :src="('https://www.larvalabs.com/public/images/cryptopunks/punk000'+ punk.idx +'.png')">
                  <img v-else-if="punk.idx < 100" class="card-img-top pixelated" :src="('https://www.larvalabs.com/public/images/cryptopunks/punk00'+ punk.idx +'.png')">
                  <img v-else-if="punk.idx < 1000" class="card-img-top pixelated" :src="('https://www.larvalabs.com/public/images/cryptopunks/punk0'+ punk.idx +'.png')">
                  <img v-else-if="punk.idx < 10000" class="card-img-top pixelated" :src="('https://www.larvalabs.com/public/images/cryptopunks/punk'+ punk.idx +'.png')">
                  <div @click="showDetail(punk.idx)" class="card-body">
                    <div class="stretched-link card-title h5">Tpunk {{ punk.idx }}</div>
                    <div>
                      <div class="text-muted card-subtitle h6">{{ punk.type }}</div>
                      <p class="card-text">
                        <table class="table table-sm table-borderless table-hover">
                          <tbody>
<!--                          <tr>-->
<!--                            <td>Price</td>-->
<!--                            <td>Not Listed</td>-->
<!--                          </tr>-->
<!--                          <tr>-->
<!--                            <td>Bid</td>-->
<!--                            <td>No Bids</td>-->
<!--                          </tr>-->
                          </tbody>
                        </table>
                        <span v-for="(tag, index) in punk.attributes" v-bind:key="index" style="margin-right: 4px;" class="badge badge-primary">{{ tag }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h4></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Home",
  data(){
    return {
        searchById : '',
      punks : [],
        last_add : false,
        justin_Tpunks : [3442, 910, 846, 794, 377, 373, 300, 224, 220, 81, 57]
    }
  },
  mounted() {
      for(let i=0; i<20; i++){
          this.punks.push(window.punks[i]);
      }
  },
    created() {

        window.onscroll = ()=>{
            if(document.documentElement.scrollTop + window.innerHeight + 400 > document.documentElement.offsetHeight){
                this.addPunks();
                console.log(this.punks.length);
            }
        }
    },
    methods: {
      addPunks(){
          if(!this.last_add) {
              this.last_add = setTimeout(() => {

                  let l = this.punks.length;

                  for (let i = l; i < l + 20; i++) {
                      this.punks.push(window.punks[i]);
                      console.log(i);
                  }

                  clearTimeout(this.last_add);
                  this.last_add = false;
              }, 500);
          }
      },
      showDetail(index){
          console.log(index);
          // this.$router.push({name: "details", params : {id : index}});
      },
        searchByInputId(){
            this.punks = [];
          if(this.searchById.trim()){
              for(let i=0; i<10000; i++){
                  if(this.searchById.trim() > -1 && this.searchById.trim() == i){
                      this.punks.push(window.punks[i]);
                  }
              }
          }else{
              this.addPunks();
          }
        }


  },
};
</script>
