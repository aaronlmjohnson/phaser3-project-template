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
        this.tomba = new Tomba({scene:this, x: 0, y: this.game.config.height});

        // let walkingFrameNames = this.anims.generateFrameNames('tomba', {
        //     start: 16, end: 31, zeroPad: 3, prefix:'frame', suffix:'.png'});

        // let idleFrameName = this.anims.generateFrameNames('tomba', {
        //         start: 0, end: 0, zeroPad: 3, prefix:'frame', suffix:'.png'});

        // let jumpFrameNames = this.anims.generateFrameNames('tomba',{
        //     start: 59,
        //     end: 62,
        //     zeroPad: 3,
        //     prefix:'frame',
        //     suffix:'.png'
        // });
        
        // this.anims.create({
        //     key: 'walking', 
        //     frames: walkingFrameNames, 
        //     frameRate: 30, 
        //     repeat: -1
        // });

        // this.anims.create({
        //     key: 'idle', 
        //     frames: idleFrameName, 
        //     frameRate: 0, 
        //     repeat: 0
        // });

        // this.anims.create({
        //     key: 'jump', 
        //     frames: jumpFrameNames, 
        //     frameRate: 1, 
        //     repeat: 0
        // });
    }

    update() {
        this.tomba.update();
    }

}