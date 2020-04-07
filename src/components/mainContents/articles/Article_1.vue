<template>
    <div>
        <NavDesign />
        <HeaderArticle
                series="Go Lang"
                main-title="Everything you need to know about go packages"
                subtitle="Detailed overview on go package structure"
                published="Apr 9, 2019"
                background-style="background: linear-gradient(90deg, #283c86 0%, #45a247 100%);"
        />
        <ArticleBody />
        <Footer />
    </div>
</template>

<script>
    import NavDesign from '../../topNavBars/NavDesign01'
    import HeaderArticle from '../../headers/HeaderArticle'
    import ArticleBody from './ArticleBody_1'
    import Footer from '../../footers/FooterDesign01'

    export default {
        name: "Article_1",
        components: {
            NavDesign,
            HeaderArticle,
            ArticleBody,
            Footer
        }
    }
</script>
