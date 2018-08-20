var game = new Phaser.Game(800,600,Phaser.CANVAS, 'gameDiv');

var sky;

var mainState = {
    preload: function(){

        game.load.image('sky', 'sky.png');
    },
    create: function(){
        sky = game.add.tileSprite(0,0,800,600,'sky');
    },
    update: function(){

    }

}

game.state.add('mainState', mainState);

game.state.start('mainState');