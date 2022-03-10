import 'phaser'

export default class Tomba extends Phaser.GameObjects.Sprite{
    
    constructor(config){
        super(config.scene, config.x, config.y, 'tomba', 'frame000.png');

        this.scene = config.scene;
        this.maxJump = -200;

        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);

        this.body.setCollideWorldBounds(true);
        this.animationFrames = {};

        this.createAnimationFrames(16, 31, 'walk');
        this.createAnimationFrames(0, 0, 'idle');
        this.createAnimationFrames(59, 62, 'jump');
        
        this.scene.anims.create({
            key: 'walking', 
            frames: this.animationFrames.walk, 
            frameRate: 30, 
            repeat: -1
        }, );

        this.scene.anims.create({
            key: 'idle',
            frames: this.animationFrames.idle,
            frameRate: 0,
            repeat: 0
        });

        this.scene.anims.create({
            key: 'jump',
            frames: this.animationFrames.jump,
            frameRate: 30,
            repeat: 0
        });
    }

    update() {
        //stop tomba from being in the jumping state
        if(this.body.blocked.down) this.isJumping = false;

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
        const cursors = this.scene.input.keyboard.createCursorKeys();
   
        if(cursors.left.isDown){
            if(this.isJumping) return;
            this.body.setVelocityX(-300);
            this.anims.play('walking', true);
            this.flipX = true;

        } else if(cursors.right.isDown){
            if(this.isJumping) return;
            this.body.setVelocityX(300);
            this.anims.play('walking', true);
            this.flipX = false;
        }else{
            if(this.isJumping) return;
            
            this.body.setVelocityX(0);
            this.anims.play('idle');

        }

        if(cursors.up.isDown && this.body.blocked.down){
            this.jump();
        }
        
    }

    jump(){
        this.isJumping = true;
        
        this.body.setVelocityY(this.maxJump);
        this.anims.play('jump', true);
    }
}

