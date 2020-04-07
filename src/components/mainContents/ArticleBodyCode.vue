<template>
    <div class="row">
        <div class="col-md-12">
            <pre v-highlightjs>
                <code :class="lang">
                    {{code}}
                </code>
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleBodyCode",
        props: {
            code: String,
            lang: String,
        }
    }
</script>

<style scoped>

</style>
