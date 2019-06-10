/** Define an object for handling sound */
let sound = function(src) {
    this.sound = document.createElement("audio");
    
    this.sound.src = src;           // the source of the audio file
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    /*
        Method for playing the audio
    */
    this.play = function(){
        this.sound.play();
    }
    /*
        Method for stopping the audio
    */
    this.stop = function(){
        this.sound.pause();
    }
    
    /*
        Method for setting the volume of the sound object
    */
    this.setVolume = function(vol) {
        this.sound.volume = vol / 100;
    }
    this.getSource = function() {
        return this.sound.src;
    }
}