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
        getPicFromButton: function(button) {
            var num = button.id;
            return model[num].img;
        },
        getNameFromButton: function(button) {
            return model[button.id].name;
        },

        getCounterFromPic: function(pic) {
            return model[pic.id].counter;
        },
        incrementCounter: function(pic) {
            model[pic.id].counter++;
        },
        init: function() {
            for (var i = 0, len = model.length; i < len; i++) {
                var button = view.buttonView.buttonBuilder(model[i].name, i);

            }
            view.buttonView.init();
            view.picView.init();
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
            },
            displayName: function(button) {
                var nameContainer = document.getElementById('nameContainer');
                var name = octopus.getNameFromButton(button);
                nameContainer.innerHTML = name;
            },
            changePicIdByButton: function(button) {
                var num = button.id;
                var pic = document.getElementsByTagName('img')[0];
                pic.id = num;
            },
            click: function(button) {
                view.buttonView.displayName(button);
                var img = octopus.getPicFromButton(button);
                var pic = document.getElementsByTagName('img')[0];
                pic.src = img;
                view.buttonView.changePicIdByButton(button);
                view.picView.displayCounter(pic);
            },
            init: function() {
                buttons = document.getElementsByTagName('button');
                for (var i = 0, len = buttons.length; i < len; i++) {
                    buttons[i].addEventListener('click', function() {
                        view.buttonView.click(this);
                    });
                }
            }
        },
        picView: {
            displayCounter: function(pic) {
                var counterContainer = document.getElementsByTagName('h3')[0];
                var counter = octopus.getCounterFromPic(pic);
                counterContainer.innerHTML = counter;
            },
            click: function(pic) {
                if (pic.id) {
                    octopus.incrementCounter(pic);
                    view.picView.displayCounter(pic);
                }
            },
            init: function() {
                var pic = document.getElementsByTagName('img')[0];
                pic.addEventListener('click', function() {
                    view.picView.click(this);
                })
            }
        }
    };

    octopus.init();
});
