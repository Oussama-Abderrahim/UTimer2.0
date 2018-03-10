let UTimer = function() {
    
    $millis1  = document.getElementById('ms1')
    $millis2  = document.getElementById('ms2')
    $seconds1 = document.getElementById('s1')
    $seconds2 = document.getElementById('s2')
    $minutes1 = document.getElementById('m1')
    $minutes2 = document.getElementById('m2')
    
    let id = null
    
    this.time = {
        get millis() {
            return millis;
        },
        set millis(value) {
            
            if (value > 1000) {
                this.seconds++
                millis = 0
            } else {
                millis = value
            }
            
            let ms1 = Math.floor(millis / 100)
            let ms2 = Math.floor((millis % 100) / 10)
            
            $millis1.innerText = ms1
            $millis2.innerText = ms2
        },
        get seconds() {
            return seconds;
        },
        set seconds(value) {
            
            if (value > 60) {
                this.minutes++
                seconds = 0
            } else {
                seconds = value
            }
            
            let s1 = Math.floor(seconds / 10)
            let s2 = seconds % 10
            
            $seconds1.innerText = s1
            $seconds2.innerText = s2
        },
        get minutes() {
            return minutes
        },
        set minutes(value) {
            if (value > 60) {
                this.hours++
                minutes = 0
            } else {
                minutes = value
            }
            
            let m1 = Math.floor(minutes / 10)
            let m2 = minutes % 10
            
            $minutes1.innerText = m1
            $minutes2.innerText = m2
        }
    }

    let self = this
    
    this.reset = function() {
        
        clearInterval(id)
        id = null
        
        self.time.millis = 0
        self.time.seconds = 0
        self.time.minutes = 0
    }
    
    this.pause = function() {
        clearInterval(id)
        id = null
    }

    function increment(val) {
        self.time.millis += val
    }
    
    this.reset()
    
    this.start = function() {
        
        if (id != null) {
            return
        }
        
        id = setInterval(function() {
            increment(10)
        }, 10)
    }    
    
    return this;
}

module.exports = UTimer
