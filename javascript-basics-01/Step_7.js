function Kousa(){
    let shoesize = document.getElementById("shoe_size");
    let birth = document.getElementById('year');
    let doublesize = shoesize.value * 2;
    let addfive = doublesize + 5;
    let multiplyfifty = addfive * 50;
    let subtract = multiplyfifty - birth.value;
    let addlast = subtract + 1766;
    alert(addlast);
} 
