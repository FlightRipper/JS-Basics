function changeImg(){
    let imageOne;
    let imageTwo;
    let imageThree;
    let imageFour;
    let imageFive;

    imageOne = document.getElementById('image1');
    imageTwo = document.getElementById('image2');
    imageThree = document.getElementById('image3');
    imageFour = document.getElementById('image4');
    imageFive = document.getElementById('image5');

    imageOne.src = 'images/image1_2.jpg';
    imageTwo.src = 'images/image2_2.jpg';
    imageThree.src = 'images/image3_2.jpg';
    imageFour.src = 'images/image4_2.jpg';
    imageFive.src = 'images/image5_2.jpg';


}

function changeImgBack(){
    let imageOne;
    let imageTwo;
    let imageThree;
    let imageFour;
    let imageFive;

    imageOne = document.getElementById('image1');
    imageTwo = document.getElementById('image2');
    imageThree = document.getElementById('image3');
    imageFour = document.getElementById('image4');
    imageFive = document.getElementById('image5');

    imageOne.src = "images/image1.jpg" ;
    imageTwo.src = "images/image2.jpg";
    imageThree.src = "images/image3.jpg" ;
    imageFour.src = "images/image4.jpg";
    imageFive.src = "images/image5.jpg" ;
   
}