<template>
    <div class="row">
        <div class="col-md-12">
            <div :style="sectionStyle">
                <p :style="paraStyle">
                    {{para}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleBodyQuote",
        props: {
            para: String,
            paraStyle: String,
            sectionStyle: String
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: "Gotu Regular";
        src: url("../../assets/Gotu-Regular.ttf");
    }
</style>
