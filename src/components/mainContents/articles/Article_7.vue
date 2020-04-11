<template>
    <div>
        <NavDesign />
        <HeaderArticle
                series="Go Lang"
                main-title="Go Concurrency, things to know"
                subtitle="everything you need to know about go concurrency"
                published="May 06, 2019"
                background-style="background-color: #25274d;"
        />
        <ArticleBody />
        <Footer />
    </div>
</template>

<script>
    import NavDesign from '../../topNavBars/NavDesign01'
    import HeaderArticle from '../../headers/HeaderArticle'
    import ArticleBody from './articleBody/ArticleBody_7'
    import Footer from '../../footers/FooterDesign01'

    export default {
        name: "Article_7",
        metaInfo: {
            title: 'Go - Concurrency'
        },
        components: {
            NavDesign,
            HeaderArticle,
            ArticleBody,
            Footer
        }
    }
</script>
