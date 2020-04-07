<template>
    <div>
        <NavDesign />
        <HeaderArticle
                series="React"
                main-title="Everything you need to know about React"
                subtitle="building a practical react app, step by step guide"
                published="Apr 5, 2020"
                background-style="background: linear-gradient(90deg, #283c86 0%, #45a247 100%);"
        />
        <ArticleBody />
        <Footer />
    </div>
</template>

<script>
    import NavDesign from '../../topNavBars/NavDesign01'
    import HeaderArticle from '../../headers/HeaderArticle'
    import ArticleBody from './ArticleBody_0'
    import Footer from '../../footers/FooterDesign01'

    export default {
        name: "Article_0",
        components: {
            NavDesign,
            HeaderArticle,
            ArticleBody,
            Footer
        }
    }
</script>
