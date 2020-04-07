<template>
    <div class="row">
        <div class="col-md-12">
            <slot></slot>
            <p :style="style">
                {{para}} <span v-if="link" @click.stop.prevent="navigateTo(link)" style="border-bottom: 1px solid black; cursor: pointer;">link</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleBodyPara",
        props: {
            para: String,
            style: String,
            link: String
        },
        methods:{
            navigateTo(link){
                window.location.href = link;
            },
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
</style>
