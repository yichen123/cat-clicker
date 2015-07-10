
var catNames = ["Bob", "Ross", "Eva"];

var increment = function(astring){
    console.log(astring);
}

var displayBox = document.getElementsByClassName("row");
for (var i = 0; i < catNames.length; i += 1) {
    var catContainer,
        imageContainer,
        image,
        informationContainer,
        nameContainer, //box for placing cat name
        catName,
        counterContainer, //box for placing counter
        counter;

    catContainer = document.createElement('div');
    catContainer.classList.add("catContainer");

    imageContainer = document.createElement('div');
    imageContainer.classList.add("imageContainer");
    image = document.createElement('img');
    var p = i + 1;
    image.src = "img/cat" + p + ".jpg";
    imageContainer.appendChild(image);
    catContainer.appendChild(imageContainer);

    informationContainer = document.createElement('div');
    informationContainer.classList.add("informationContainer");

    nameContainer = document.createElement('div');
    nameContainer.classList.add("nameContainer");
    catName = document.createElement('h2');
    catName.innerText = catNames[i];
    nameContainer.appendChild(catName);
    informationContainer.appendChild(nameContainer);

    counterContainer = document.createElement('div');
    counterContainer.classList.add("counterContainer");
    counter = document.createElement('h4');
    counter.innerText = 0;
    counterContainer.appendChild(counter);
    informationContainer.appendChild(counterContainer);
    catContainer.appendChild(informationContainer);

    displayBox[0].appendChild(catContainer);

    image.addEventListener('click', (function(number) {
        return function() {
            number.innerText = parseInt(number.innerText) + 1;
        }
    })(counter));
}
