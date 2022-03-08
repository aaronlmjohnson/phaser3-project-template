export const changeTextureFrameNames = (url, prefix)=>{
    const jsonData = require('./assets/tomba.json');

    const tombaFrames = jsonData.textures[0].frames;
    

    for(let frame in tombaFrames) {
        let zeroPad = frame < 10 ? '00' : '0';
        if(frame > 99) zeroPad = '';

        tombaFrames[frame].filename = `${prefix}${zeroPad}${frame}.png`;
    }

    console.log(JSON.stringify(jsonData));

}