import 'phaser'
import tombaAnimations from '../animations/tombaAnimations';

export default class Tomba extends Phaser.GameObjects.Sprite{
    
    constructor(config){
        super(config.scene, config.x, config.y, 'tomba', 'frame000.png');

        this.scene = config.scene;
        this.maxJump = -400;

        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);

        this.body.setCollideWorldBounds(true);
        tombaAnimations(this.scene);
        // this.animationFrames = {};
        
        // this.createAnimationFrames(16, 31, 'walk');
        // this.createAnimationFrames(0, 0, 'idle');
        // this.createAnimationFrames(59, 62, 'jump');
        //this.createAnimationFrames(126, 126, 'grabWall');
        
        // this.scene.anims.create({
        //     key: 'walking', 
        //     frames: this.animationFrames.walk, 
        //     frameRate: 30, 
        //     repeat: -1
        // });

        // this.scene.anims.create({
        //     key: 'idle',
        //     frames: this.animationFrames.idle,
        //     frameRate: 0,
        //     repeat: 0
        // });

        // this.scene.anims.create({
        //     key: 'jump',
        //     frames: this.animationFrames.jump,
        //     frameRate: 15,
        //     repeat: 0
        // });

        // this.scene.anims.create({
        //     key: 'grab-wall',
        //     frames: this.animationFrames.grabWall,
        //     frameRate: 0,
        //     repeat: 0
        // });



        this.cursors = this.scene.input.keyboard.createCursorKeys();
        
    }

    update() {
        //stick tomba to the wall
        this.body.drag.y = this.grabbing ? 1000 : 0;

        //stop tomba from being in the jumping state
        if(this.body.blocked.down && this.isJumping) this.isJumping = false;

        //stop tomba from grabbing wall when up button released
        // if(this.grabbing && this.cursors.left.isDown || this.cursors.right.isDown)
        //     this.grabbing = false;

        // this.grabWall();
        this.move();
    }

    createAnimationFrames(start, end, name){
        const frames = this.scene.anims.generateFrameNames('tomba', {
            start: start, 
            end: end, 
            zeroPad: 3, 
            prefix:'frame', 
            suffix:'.png'
        });

        this.animationFrames[name] = frames;
    }

    move(){
        if(this.isJumping) return;
        if(this.cursors.left.isDown)
            this.moveLeft()
        else if(this.cursors.right.isDown)
            this.moveRight();
        else
        this.setIdle();

        if(this.cursors.up.isDown) this.jump();
    }

    moveRight(){
        this.body.setVelocityX(300);
        this.anims.play('walk', true);
        this.flipX = false;
    }

    moveLeft(){
        this.body.setVelocityX(-300);
        this.anims.play('walk', true);
        this.flipX = true;
    }

    setIdle(){         
        this.body.setVelocityX(0);
        //this.anims.play('idle');
    }

    jump(){
        console.log(this.isJumping);
        this.isJumping = true;
        this.body.setVelocityY(this.maxJump);
        //this.anims.play('jump', true);
    }

    // grabWall(){
    //     if(!this.isJumping) return;
    //     if((this.body.blocked.right || this.body.blocked.left) ){
    //         this.grabbing = true;
    //         this.anims.play('grab-wall');
    //     }
    // }
    // isKeyDown(){
    //     for(let key in this.cursors)
    //         if(this.cursors[key].isDown) return true;
    // }

    
}

