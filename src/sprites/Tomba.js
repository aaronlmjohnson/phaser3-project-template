import 'phaser'

export default class Tomba extends Phaser.GameObjects.Sprite{
    constructor(config){

        super(config.scene, config.x, config.y, 'tomba', 'frame000.png');

        config.scene.add.existing(this);
        config.scene.physics.add.existing(this);

        this.body.setCollideWorldBounds(true);

        
    }
}