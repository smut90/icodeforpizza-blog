<template>
    <div class="row">
        <div class="col-md-12">
            <slot></slot>
            <p :style="style">
                {{para}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleBodyPara",
        props: {
            para: String,
            style: String
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
