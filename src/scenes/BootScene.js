import 'phaser';

export default class BootScene extends Phaser.Scene {
    constructor(){
        super('Boot');
    }

    preload ()
    {
        console.log('boot preloaded');
    }
      
    create ()
    {
        this.scene.start('Preloader');
    }
}