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

//octopus
    var octopus = {
        setCurrentWithButton: function(cat) {
            model.currentCat.name = cat.name;
            model.currentCat.counter = cat.counter;
            model.currentCat.img = cat.img;
        },
        getCurrentCat: function(){
            return model.currentCat;
        },
        getCats: function() {
            return model.cats;
        }

    }

    //view
    var view = {
        buttonView: {
            buttonBuidler: function(name) {

            }
        }
    }
});
