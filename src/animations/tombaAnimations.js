const tombaAnimations = (scene)=>{
    const animationFrames = {}
    
    const _createAnimationFrames = (start, end, name)=>{
        const frames = scene.anims.generateFrameNames('tomba', {
            start: start, 
            end: end, 
            zeroPad: 3, 
            prefix:'frame', 
            suffix:'.png'
        });

        animationFrames[name] = frames;
    }

    const _createAnim = (key, frames, frameRate, repeat)=>{
        scene.anims.create({
            key: key, 
            frames: frames, 
            frameRate: frameRate, 
            repeat: repeat
        });
    }

    

    const _walk = (()=>{
        _createAnimationFrames(16, 31, 'walk');
        _createAnim('walk', animationFrames.walk, 30, -1);
    })();


}

export default tombaAnimations;