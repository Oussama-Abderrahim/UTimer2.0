<template>
  <v-app>
    <v-content class="content">
      <v-container grid-list-md text-xs-center>
  
        <v-layout row wrap>
  
          <v-layout row class="logo">
            <v-flex xs6 fill-height>
              <v-container fluid align-center class="logo-uconf">
                <img class="logo-uconf-pic" src="/public/img/UConf3.0.png" alt="UConf">
              </v-container>
            </v-flex>
  
            <v-flex xs6 fill-height>
              <v-container fluid align-center class="logo-udev">
                <img class="logo-udev-pic" src="/public/img/Udev_Logo_Dark_Night.png" alt="UDev">
              </v-container>
            </v-flex>
          </v-layout>
  
          <v-layout row class="timer">
            <v-flex xs6 align-center>
              <v-container align-center class="timer-time">
                <div class="timer-time-minutes">
                  <span class="timer-time-digit" id="m1">0</span>
                  <span class="timer-time-digit" id="m2">0</span>
                </div>
                <span class="timer-time-digit">:</span>
                <div class="timer-time-seconds">
                  <span class="timer-time-digit" id="s1">0</span>
                  <span class="timer-time-digit" id="s2">0</span>
                </div>
                <span class="timer-time-digit">:</span>
                <div class="timer-time-milis">
                  <span class="timer-time-digit" id="ms1">0</span>
                  <span class="timer-time-digit" id="ms2">0</span>
                </div>
              </v-container>
            </v-flex>
  
            <v-flex xs6 align-center>
              <v-container align-center class="timer-buttons">
                <v-btn fab dark large @click="play">
                  <v-icon dark>play_arrow</v-icon>
                </v-btn>
                <v-btn fab dark large @click="pause">
                  <v-icon dark large>pause_circle_outline</v-icon>
                </v-btn>
                <v-btn fab dark large @click="reset">
                  <v-icon dark>replay</v-icon>
                </v-btn>
                <v-btn fab dark large @click="quizz">
                  QUIZZ
                </v-btn>
              </v-container>
            </v-flex>
          </v-layout>
  
          <v-flex xs12 align-center class="speaker">
            <v-container>
              <h1>REST to GraphQL : How to talk to your API</h1>
              <h2>ABDERRAHIM Oussama</h2>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  
    <v-footer app>
      <span>&copy; UDev Community 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Timer from '../public/js/Timer'

  export default {
    data() {
      return {
        timer: Timer
      }
    },
    methods: {
      pause() {
        this.timer.pause()
      },
      reset() {
        this.timer.reset()
      },
      play() {
        this.timer.start()
      },
      quizz() {
  
      }
    },
    mounted() {
      this.timer = new Timer()
      this.timer.reset()
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    overflow-x: hidden;
    width: 100%;
    margin: 20px 10px;
  }
  
  .logo {
    padding-top: 20px;
    &-udev {
      padding-top: 45px;
      width: 100%;
      &-pic {
        width: 350px;
      }
    }
    &-uconf {
      width: 100%;
      &-pic {
        width: 90%;
      }
    }
  }
  
  .timer {
    padding-top: 90px;
    &-time {
      text-align: center;
      &-minutes,
      &-seconds,
      &-milis {
        width: 90px;
        display: inline-block;
        padding: 0;
        margin: 0;
      }
      &-digit {
        display: inline-block;
        width: 43px;
        font-size: 83px;
        text-align: center;
        padding: 0;
        margin: 0;
        color: #00204a;
      }
    }
    &-buttons {
      padding-top: 35px;
      .v-btn {
        background-color: #00204a;
      }
    }
  }
  
  .speaker {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    width: 100%;
    color: #00202f;
    h1 {
      font-size: 4em;
      color: #00204a;
    }
    h2 {
      font-size: 2em;
      color: #005792;
    }
  }
</style>