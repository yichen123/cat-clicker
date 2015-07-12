document.addEventListener('DOMContentLoaded', function() {
    // model
    var model = {
        currentCat: {

        },
        cats: [{
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
        }]

    };

    var octopus = {
        setCurrent: function(name, counter, img) {
            model.currentCat.name = name;
            model.currentCat.counter = counter;
            model.currentCat.img = img;
        }
    }
});
