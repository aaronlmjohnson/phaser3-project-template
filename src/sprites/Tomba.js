import 'phaser'

export default class Tomba extends Phaser.GameObjects.Sprite{
    constructor(config){
        super(config.scene, config.x, config.y, 'tomba', 'frame000.png');

        this.scene = config.scene;

        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);

        this.body.setCollideWorldBounds(true);
        this.animationFrames = {};

        this.createAnimationFrames(16, 31, 'walk');
        
        this.scene.anims.create({
            key: 'walking', 
            frames: this.animationFrames.walk, 
            frameRate: 30, 
            repeat: -1
        }, );

    }

    update() {
        this.move();
    }

    createAnimationFrames(start, end, name){
        const frames = this.scene.anims.generateFrameNames('tomba', {
            start: 16, 
            end: 31, 
            zeroPad: 3, 
            prefix:'frame', 
            suffix:'.png'
        });

        this.animationFrames[name] = frames;
    }

    move(){
        const cursors = this.scene.input.keyboard.createCursorKeys();
   
        if(cursors.left.isDown){
            this.body.setVelocityX(-300);
            this.anims.play('walking', true);
            this.flipX = true;

        } else if(cursors.right.isDown){
            this.body.setVelocityX(300);
            this.anims.play('walking', true);
            this.flipX = false;
        }else{
            this.body.setVelocityX(0);
            //this.anims.play('idle')

        }
        
    }
}