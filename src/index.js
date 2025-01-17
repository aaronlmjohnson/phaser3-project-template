import Phaser from 'phaser';
import config from './config/config';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
//import {changeTextureFrameNames} from './changeTextureFrameNames';


class Game extends Phaser.Game {
    constructor(){
        super(config);
        this.scene.add('Game', GameScene);
        this.scene.add('Boot', BootScene);
        this.scene.add('Preloader', PreloaderScene);
        
        this.scene.start('Boot');
    }
}

window.onload = ()=>{
    window.game = new Game();

}
