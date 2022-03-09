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
        const tomba = new Tomba({scene:this, x: 0, y: this.game.config.height});
        
        // this.tomba = this.physics.add.sprite(0, this.game.config.height, 'tomba');
        // this.physics.add.sprite()
        
        // this.tomba.setCollideWorldBounds(true);

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
        //this.walk();
    }

    walk() {
        const cursors = this.input.keyboard.createCursorKeys();
   
        if(cursors.left.isDown){
            
            this.tomba.setVelocityX(-300);

            this.tomba.anims.play('walking', true);
            this.tomba.flipX = true;

        } else if(cursors.right.isDown){
            this.tomba.setVelocityX(300);
            this.tomba.anims.play('walking', true);
            this.tomba.flipX = false;
        }
        else{
            this.tomba.setVelocityX(0);
            this.tomba.anims.play('idle')

        }
    }
}