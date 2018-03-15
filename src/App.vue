<template>
  <v-app>
    <v-content class="content">
      <v-container grid-list-md text-xs-center  @keyup.right="nextSpeaker">
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
                <v-btn fab dark large color="indigo darken-4" @click="play">
                  <v-icon dark>play_arrow</v-icon>
                </v-btn>
                <v-btn fab dark large color="indigo darken-4" @click="pause">
                  <v-icon dark large>pause_circle_outline</v-icon>
                </v-btn>
                <v-btn fab dark large color="indigo darken-4" @click="reset">
                  <v-icon dark>replay</v-icon>
                </v-btn>
                <v-btn fab dark large color="indigo darken-4" @click="standby">STAND BY</v-btn>
              </v-container>
            </v-flex>
          </v-layout>
          <v-flex xs12 align-center class="speaker">
            <v-layout row>
              <v-flex xs1>
                <v-btn id="btn_left" class="speaker-btn" @click="prevSpeaker">
                  <v-icon dark>arrow_left</v-icon>
                </v-btn>
              </v-flex>
              <v-flex xs10>
                <v-container>
                  <h1>{{currentTalk.title}}</h1>
                  <h2>{{currentTalk.name}}</h2> 
                </v-container>
              </v-flex>
              <v-flex xs1>
                <v-btn id="btn_right" class="speaker-btn" @click="nextSpeaker">                  
                  <v-icon dark>arrow_right</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
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
        timer: Timer,
        TALKS : [
          {
            title: "Welcome !",
            name: "Our Great Audiance"
          },
          {
            title: "University Developpers Community",
            name: "MAHMOUDI Younes"
          },
          {
            title: "Computer brain vs Robot brain",
            name: "BENDAHMANE Amine"
          },
          {
            title: "3D Modeling",
            name: "BENMOHAMED Aek El Mehdi"
          },
          {
            title: "Software testing",
            name: "MAHMOUDI Younes"
          },
          {
            title: "Be S.O.L.I.D, don't smell",
            name: "HANIFI ELHACHEMI AMAR Yazid"
          },
          {
            title: "QUIZZ Time",
            name: "OUR GREAT AUDIANCE"
          },
          {
            title : "BREAK TIME",
            name : "Food"
          },
          {
            title: "Bitcoin : The first cryptocurrency",
            name: "BELMILOUD Salah"
          },
          {
            title: "The Hook Model",
            name: "RAHMOUNI Abdelhak"
          },
          {
            title: "Software Build Systems",
            name: "BENAFFANE Yacine"
          },
          {
            title: "Pitch Perfect: Sell Yourself to Sell Your Idea!",
            name: "ABDESSELAM Yasser"
          },
          {
            title: "QUIZZ Time again ",
            name: "OUR GREAT AUDIANCE"
          },
          {
            title: "REST to GraphQL : How to talk to your API",
            name: "ABDERRAHIM Oussama"
          },
          {
            title: "SSR vs CSR",
            name: "TAZI Abdelmounaim"
          },
          {
            title: "Open Science : Democratizing access to science",
            name: "BEKHELIFI Okba"
          },
          {
            title: "Recommender Systems",
            name: "BENADDA Reda"
          },
          {
            title: "QUIZZ Time !",
            name: "OUR GREAT AUDIANCE"
          },
          {
            title: "Who's your favourite speaker ?",
            name: "OUR GREAT AUDIANCE"
          },
        ],
        currentTalk:  {
          title: "",
          name: ""
        },
        talkId : 0
      }
    },
    methods: {
      nextSpeaker () {
        this.talkId++;
        this.talkId %= this.TALKS.length

        this.currentTalk = this.TALKS[this.talkId]
      },
      prevSpeaker () {
        this.talkId--;
        this.talkId = (this.talkId+this.TALKS.length) % this.TALKS.length

        this.currentTalk = this.TALKS[this.talkId]
      },
      standby () {
        this.currentTalk = {
          title : "",
          name : ""
        }
      },
      pause() {
        this.timer.pause()
      },
      reset() {
        this.timer.reset()
      },
      play() {
        this.timer.start()
      },
    },
    mounted() {
      this.timer = new Timer() 
      this.timer.reset()

      this.currentTalk = this.TALKS[0]
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
      padding-top: 30px;
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

    .speaker-btn {
      margin-top: 50px;
    }
    h1 {
      font-size: 3em;
      color: #00204a;
    }
    h2 {
      font-size: 2em;
      color: #005792;
    }
  }
</style>