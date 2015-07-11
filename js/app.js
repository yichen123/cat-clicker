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
        init: function() {
            for (var i = 0, len = model.length; i < len; i++) {
                view.buttonView.buttonBuilder(model[i].name);
            }
        }
    };

    var view = {
        buttonView: {
            buttonBuilder: function(name) {
                var buttonList = document.getElementById('buttonList');
                var button = document.createElement('button');
                button.innerText = name;
                buttonList.appendChild(button);
            },
        },
        picView: {}
    };

    octopus.init();
});
