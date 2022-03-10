import 'phaser';
import Tomba from '../sprites/Tomba';

export default class GameScene extends Phaser.Scene {
    constructor(){
        super('Game');
    }

    preload ()
    {

    }
      
    create ()
    {
        this.tomba = new Tomba({scene:this, x: 0, y: this.game.config.height-50});
    }

    update() {
        this.tomba.update();
    }

}