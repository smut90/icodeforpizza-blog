<template>
    <div class="container-fluid header-area">
        <div id="nav-home" class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="row" style="border-radius: 0 0 30% 0">
                    <div class="col-xs-2 col-sm-2 col-md-2"></div>
                    <div class="col-xs-10 col-sm-10 col-md-10" style="padding-top: 15vh;">
                        <div class="row">
                            <p style="font-family: Gotu Regular; font-weight: 400; font-size: 18px; color: white">Tech Journey</p>
                        </div>
                        <div class="row" style="padding-bottom: 20px">
                            <h1 style="font-family: Poppins SemiBold; color: white"><span>Let's code for free </span> <span>{{headerDisplayContent}}</span></h1>
                        </div>
                        <div class="row">
                            <p style="font-family: Gotu Regular; color: white; font-size: 25px; margin-bottom: 5px">A series of tech articles that will help, excel the techie in you</p>
                        </div>
                        <div class="row">
                            <p style="font-family: Gotu Regular; color: white; font-size: 20px">while enjoying free pizza</p>
                        </div>
                        <div class="row">
                            <button type="submit" class="btn btn-lg float-left" style="background-color: rgb(9, 9, 121); color: white; font-family: Gotu Regular">
                                Let's Learn
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderDesign02",
        data() {
            return{
                headerDisplayContent: '...'
            }
        },
        mounted() {
            this.typeDynamicHeaderContent();
        },
        methods: {
            async typeDynamicHeaderContent() {
                const wordList = [
                    {
                        text: '|',
                        time: 500,
                    },
                    {
                        text: '',
                        time: 500,
                    },
                    {
                        text: '|',
                        time: 200,
                    },
                    {
                        text: 'P',
                        time: 500,
                    },
                    {
                        text: 'Pi',
                        time: 200,
                    },
                    {
                        text: 'Piz',
                        time: 200,
                    },
                    {
                        text: 'Pizz',
                        time: 200,
                    },
                    {
                        text: 'Pizza',
                        time: 1000,
                    },
                    {
                        text: 'Pizz',
                        time: 250,
                    },
                    {
                        text: 'Piz',
                        time: 250,
                    },
                    {
                        text: 'Pi',
                        time: 200,
                    },
                    {
                        text: 'P',
                        time: 100,
                    },
                    {
                        text: '|',
                        time: 500,
                    },
                    {
                        text: '',
                        time: 500,
                    },
                    {
                        text: '|',
                        time: 200,
                    },
                    {
                        text: 'B',
                        time: 500,
                    },
                    {
                        text: 'Be',
                        time: 200,
                    },
                    {
                        text: 'Bee',
                        time: 200,
                    },
                    {
                        text: 'Beer',
                        time: 1000,
                    },
                    {
                        text: 'Bee',
                        time: 200,
                    },
                    {
                        text: 'Be',
                        time: 150,
                    },
                    {
                        text: 'B',
                        time: 140,
                    },
                    {
                        text: '|',
                        time: 500,
                    },
                    {
                        text: '',
                        time: 500,
                    },
                    {
                        text: '|',
                        time: 200,
                    },
                    {
                        text: 'T',
                        time: 500,
                    },
                    {
                        text: 'T-',
                        time: 200,
                    },
                    {
                        text: 'T-s',
                        time: 200,
                    },
                    {
                        text: 'T-sh',
                        time: 200,
                    },
                    {
                        text: 'T-shi',
                        time: 150,
                    },
                    {
                        text: 'T-shir',
                        time: 150,
                    },
                    {
                        text: 'T-shirt',
                        time: 150,
                    },
                    {
                        text: 'T-shirts',
                        time: 1000,
                    },
                    {
                        text: 'T-shirt',
                        time: 200,
                    },
                    {
                        text: 'T-shir',
                        time: 200,
                    },
                    {
                        text: 'T-shi',
                        time: 150,
                    },
                    {
                        text: 'T-sh',
                        time: 130,
                    },
                    {
                        text: 'T-s',
                        time: 120,
                    },
                    {
                        text: 'T-',
                        time: 120,
                    },
                    {
                        text: 'T',
                        time: 100,
                    }
                ];

                let i = 0;
                while (i < wordList.length) {
                    this.headerDisplayContent = wordList[i].text;
                    await this.wait(wordList[i].time);
                    if (i === (wordList.length - 1)) {
                        i = 0;
                    } else {
                        i = i + 1;
                    }
                }

            },
            wait(ms) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve()
                    }, ms)
                })
            },
            myMove() {
                const wordList = [
                    {
                        text: 'G',
                        timeout: 1000,
                    }
                ];
                let playBackIndex = 0;
                const numEntries = wordList.length;
                let startTime = new Date();
                let endMillis = 0;
                let text;
                let currentText;

                if (numEntries > 0) {
                    endMillis = wordList[playBackIndex].timeout;
                    text = wordList[playBackIndex].text;
                    console.log('HERE =>', text)
                }

                let id = setInterval(() => { frame();}, 1);

                function frame() {
                    // let elem = document.getElementById("container");
                    let currentTime = new Date();
                    if ((playBackIndex < numEntries)) {
                        while ((currentTime - startTime) > endMillis &&
                        (playBackIndex < numEntries)) {
                            // endMillis = wordList[playBackIndex].timeout;
                            // text = wordList[playBackIndex].text;
                            playBackIndex++;
                            console.log('HERE 2 ==> ');
                        }
                        console.log('HERE 3 ==> ');
                        if (text !== currentText) {
                            // elem.style.background = text;
                            this.headerDisplayContent = text;
                            currentText = text;
                        }
                    } else {
                        clearInterval(id);
                    }
                }
            }
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: "Poppins SemiBold";
        src: url("../../assets/Poppins-SemiBold.ttf");
    }
    @font-face {
        font-family: "Poppins Regular";
        src: url("../../assets/Poppins-Regular.ttf");
    }
    @font-face {
        font-family: "Gotu Regular";
        src: url("../../assets/Gotu-Regular.ttf");
    }
    .header-area {
        min-height: 60vh;
        /*background-color: black;*/
        /*background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 15%, rgba(0,212,255,1) 100%);*/
        background: linear-gradient(90deg, #1D4350 0%, #A43931 100%);
        border-radius: 0 0 80px 0;
    }
    .text-animate-1 {
        animation: showup 5s 5s infinite;
    }
    .text-animate-2 {
        animation: showup 15s 10s infinite;
    }
    @keyframes showup {
        0% {
            opacity:0;
        }
        20% {
            opacity:1;
            border-bottom: 5px solid yellow;
        }
        80% {
            opacity:1;
            border-bottom: 5px solid yellow;
        }
        100% {
            opacity:0;
        }
    }
</style>
