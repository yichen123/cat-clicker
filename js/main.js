var cat1Name = document.getElementById("cat1Name");
cat1Name.innerText = "Ross";
var cat2Name = document.getElementById("cat2Name");
cat2Name.innerText = "Bob";

var counting = function(){
  var counterTag = document.getElementById("counter");
  counterTag.innerText = parseInt(counterTag.innerText) + 1;
  console.log(counterTag.innerText);
};

var pic1 = document.getElementById("mycat1");
pic1.addEventListener('click', counting)

var pic2 = document.getElementById("mycat2");
pic2.addEventListener('click', counting)
