<template>
    <div class="card"
         @mouseover="mouseOver(cardNo)"
         @mouseout="mouseOut()"
         :class="{'card-hover': isHovering && hoverCard === cardNo}"
         @click.stop.prevent="navigateToArticle()"
         :style="cardStyle"
    >
        <div class="card-body">
            <div style="height: 200px">
                <small style="font-size: 14px; font-family: Poppins Regular; color: beige"><strong>Published </strong>{{published}}</small>
                <p style="font-size: 18px; font-family: Poppins SemiBold; padding-top: 10px; color: whitesmoke">{{title}}</p>
            </div>
            <div style="height: 75px;">
                <p style="font-size: 15px; font-family: Poppins Regular; color: whitesmoke">{{subtitle}}</p>
                <p style="font-family: Poppins Regular;">
                    <span :key="index" v-for="(tag, index) of tags"
                          style="border: 3px solid rgb(81, 78, 84); color: rgb(218, 206, 206); padding: 5px; font-size: 12px; border-radius: 5px; margin-right: 5px"
                    >
                        {{tag}}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleCard",
        props:{
            published: String,
            title: String,
            subtitle: String,
            tags: Array,
            cardNo: Number,
            articleNo: String,
            cardStyle: String
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
            navigateToArticle() {
                this.$router.push({ name: this.articleNo});
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
    .card-shadow {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
        background: linear-gradient(90deg, #141e30 0%, #243b55 100%);
    }
    .card-1 {
        animation: moveRight 2s;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
    }
    .card-hover {
        transform: translate3d(-20px, -20px, 0);
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
