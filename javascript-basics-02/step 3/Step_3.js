function kousa(){
    let div = document.querySelector('div');
    let input = document.querySelector('input');
    let value = input.value;
    div.innerHTML = div.innerHTML + input.value;
    input.value = "";
}