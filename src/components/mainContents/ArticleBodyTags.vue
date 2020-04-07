<template>
    <div class="row">
        <div class="col-md-12">
            <p style="font-size: 20px;">
                <span :key="index" v-for="(tag, index) of tags" style="background-color: rgb(234, 231, 231); color: rgb(86, 81, 82); padding: 5px; font-size: 13px; border-radius: 5px; margin-right: 5px">
                    {{tag}}
                </span>
            </p>

        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleBodyTags",
        props: {
            tags: Array,
        }
    }
</script>

<style scoped>

</style>
