import 'phaser';

export default class PreloaderScene extends Phaser.Scene {
    constructor(){
        super('Preloader');
    }

    preload ()
    {
        this.load.atlas('tomba', '/src/assets/tomba.png', '/src/assets/tomba.json');
    }
      
    create ()
    {
        this.scene.start('Game');

    }
}