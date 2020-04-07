<template>
    <div class="card card-shadow"
         @mouseover="mouseOver(cardNo)"
         @mouseout="mouseOut()"
         :class="{'card-hover': isHovering && hoverCard === cardNo}"
         style="flex: 0 0 350px; flex-grow: 1; max-width: 300px; max-height: 350px; padding-bottom: 25px; box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);"
    >
        <div class="card-body" style="padding: 20px">
            <div class="row" style="padding-top: 200px;">
                <div>
                    <p style="font-size: 18px; font-family: Poppins SemiBold; padding-top: 10px; color: whitesmoke">{{title}}</p>
                    <small style="font-size: 14px; font-family: Poppins Regular; color: beige"><strong>Sponsored by </strong></small>
                </div>
            </div>
            <div class="row">
                <div style="border-bottom: 2px solid #141e30">
                    <p style="font-size: 15px; font-family: Poppins Regular; color: whitesmoke; padding-bottom: 5px; margin-bottom: 0">{{sponsor}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleCardSponsor",
        props:{
            sponsor: String,
            title: String,
            cardNo: Number
        },
        data(){
            return {
                isHovering: false,
                hoverCard: null,
            }
        },
        methods: {
            mouseOver(cardNo){
                this.hoverCard = cardNo;
                this.isHovering = true;
            },
            mouseOut() {
                this.hoverCard = null;
                this.isHovering = false
            },
            // navigateToArticle() {
            //     this.$router.push({ name: this.articleNo});
            // }
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
    .card-shadow {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
        background: linear-gradient(90deg, #42275a 0%, #734b6d 100%);
    }
    .card-hover {
        transform: translate3d(0, 0, 10px);
        background: linear-gradient(90deg, #42275a 0%, #734b6d 100%);
        cursor: pointer;
    }
    @keyframes moveUp {
        0% {
            margin-bottom: 0;
        }
        100% {
            margin-bottom: 100px;
        }
    }
</style>
