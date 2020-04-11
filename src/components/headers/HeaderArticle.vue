<template>
    <div class="container-fluid header-area" :style="backgroundStyle">
        <div id="nav-home" class="row" >
            <div class="col-xs-12 col-sm-12 col-md-12" >
                <div class="row" style="border-radius: 0 0 30% 0">
                    <div class="col-xs-2 col-sm-2 col-md-2"></div>
                    <div class="col-xs-6 col-sm-6 col-md-6" >
                        <div class="row">
                            <p style="font-family: Gotu Regular; font-weight: 400; font-size: 18px; color: #aaabbb">{{series}}</p>
                        </div>
                        <div class="row" style="padding-bottom: 10px">
                            <h1 style="font-family: Poppins SemiBold; color: #29648a">{{mainTitle}}</h1>
                        </div>
                        <div class="row">
                            <p style="font-family: Gotu Regular; color: #aaabbb; font-size: 25px; margin-bottom: 5px">{{subtitle}}</p>
                        </div>
                        <div class="row">
                            <p style="font-family: Gotu Regular; color: #aaabbb; font-size: 15px">{{published}}</p>
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderArticle",
        props:{
            series: String,
            mainTitle: String,
            subtitle: String,
            published: String,
            backgroundStyle: String
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
    @media (max-width: 500px) {
        /*Extra small devices (portrait phones, less than 576px)*/
        .header-area {
            /*height: 35vh;*/
            border-radius: 0 0 80px 0; padding-top: 18vh
        }
    }
    @media (max-width: 575.98px) {
        /*Extra small devices (portrait phones, less than 576px)*/
        .header-area {
            /*height: 35vh;*/
            border-radius: 0 0 80px 0; padding-top: 15vh
        }
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
        /*Small devices (landscape phones, 576px and up)*/
        .header-area {
            /*height: 35vh;*/
            border-radius: 0 0 80px 0; padding-top: 15vh
        }
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
        /*Medium devices (tablets, 768px and up)*/
        .header-area {
            /*height: 35vh;*/
            border-radius: 0 0 80px 0; padding-top: 15vh
        }
    }
    @media (min-width: 992px) and (max-width: 1199.98px) {
        /*Large devices (desktops, 992px and up)*/
        .header-area {
            /*height: 35vh;*/
            border-radius: 0 0 80px 0; padding-top: 12vh
        }
    }
    @media (min-width: 1200px) {
        /*Extra large devices (large desktops, 1200px and up)*/
        .header-area {
            /*height: 35vh;*/
            border-radius: 0 0 80px 0; padding-top: 12vh
        }

    }
</style>
