<template>
    <div class="container-fluid header-area" >
        <div id="nav-home" class="row" >
            <div class="col-xs-12 col-sm-12 col-md-12" style="padding-top: 35vh;">
                <div class="row" style="border-radius: 0 0 30% 0">
                    <div class="col-xs-2 col-sm-2 col-md-2"></div>
                    <div class="col-xs-6 col-sm-6 col-md-6" >
                        <div class="row">
                            <p style="font-family: Gotu Regular; font-weight: 400; font-size: 18px; color: white; padding-bottom: 2px; margin-bottom: 0">{{series}}</p>
                        </div>
                        <div class="row" style="padding-bottom: 20px">
                            <h1 style="font-family: Poppins SemiBold; color: white">{{mainTitle}}</h1>
                        </div>
                        <div class="row">
                            <p style="font-family: Gotu Regular; color: white; font-size: 25px; margin-bottom: 5px">{{subtitle}}</p>
                        </div>
                        <div class="row">
                            <p style="font-family: Gotu Regular; color: white; font-size: 15px">{{published}}</p>
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
        name: "HeaderArticleAbout",
        props:{
            series: String,
            mainTitle: String,
            subtitle: String,
            published: String
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
        height: 100vh;
        background: linear-gradient(90deg, #43c6ac 0%, #191654 100%);
        border-radius: 0 0 80px 0;
    }
</style>
