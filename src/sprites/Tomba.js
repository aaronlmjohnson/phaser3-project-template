import 'phaser'
import tombaAnimations from '../animations/tombaAnimations';

export default class Tomba extends Phaser.GameObjects.Sprite{
    
    constructor(config){
        super(config.scene, config.x, config.y, 'tomba', 'frame000.png');
        this.setScale(2);
        this.scene = config.scene;
        this.maxJump = -400;

        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);

        this.body.setCollideWorldBounds(true);
        tombaAnimations(this.scene);

        this.cursors = this.scene.input.keyboard.createCursorKeys();
        
    }

    update() {
        //stop tomba from being in the jumping state
        if(this.body.blocked.down && this.isJumping) this.isJumping = false;
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
        this.body.setVelocityX(200);
        if(this.anims.getName() !==  'walk') this.body.setVelocityX(300);
        this.walkCycle();
        this.flipX = false;
    }

    moveLeft(){
        this.body.setVelocityX(-200);
        if(this.anims.getName() !==  'walk') this.body.setVelocityX(-300);
        this.walkCycle();    
        this.flipX = true;
    }

    setIdle(){         
        this.body.setVelocityX(0);
        this.anims.play('idle');
    }

    jump(){
        this.isJumping = true;
        this.body.setVelocityY(this.maxJump);
        this.anims.play('jump', true);
    }

    walkCycle(){
        if(this.anims.getName() !== 'jog' && this.anims.getName() !== 'jogStart'){
            this.anims.play('walk', true);
        };
        if(this.anims.getName() === 'walk') this.playAfterRepeat('jogStart');
        if(this.anims.getName() === 'jogStart') this.playAfterRepeat('jog');
    }

}

