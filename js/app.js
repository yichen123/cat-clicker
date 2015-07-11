document.addEventListener('DOMContentLoaded', function() {
    var model = [{
        'name': 'Bob',
        'counter': 0,
        'img': 'img/cat1.jpg'
    }, {
        'name': 'Jack',
        'counter': 0,
        'img': 'img/cat2.jpg'
    }, {
        'name': 'Ross',
        'counter': 0,
        'img': 'img/cat3.jpg'
    }, {
        'name': 'Marry',
        'counter': 0,
        'img': 'img/cat4.jpg'
    }, {
        'name': 'Lora',
        'counter': 0,
        'img': 'img/cat5.jpg'
    }];

    var octopus = {
        getModelI: function(button) {
            num = button.id;
            return model[num];
        },
        init: function() {
            for (var i = 0, len = model.length; i < len; i++) {
                var button = view.buttonView.buttonBuilder(model[i].name, i);
                button.addEventListener('click', function(){
                    var model = octopus.getModelI(this);
                    view.buttonView.click(model.img, model.counter);
                });
            }
        }
    };

    var view = {
        buttonView: {
            buttonBuilder: function(name, num) {
                var buttonList = document.getElementById('buttonList');
                var button = document.createElement('button');
                button.innerText = name;
                button.id = num;
                buttonList.appendChild(button);
                return button;
            },
            click: function(img, counter) {
                var pic = document.getElementById('pic');
                pic.src = img;
                var counterContainer = document.getElementsByTagName('h3')[0];
                counterContainer.innerHTML = "click counter = " + counter;
            }


        },
        picView: {
            click: function(counter) {
                var counterContainer = document.getElementById(counterContainer);
                counterContainer.innerText = "counter = " + counter;
            }
        }
    };

    octopus.init();
});
