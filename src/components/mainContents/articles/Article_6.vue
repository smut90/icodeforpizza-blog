<template>
    <div>
        <NavDesign />
        <HeaderArticle
                series="Go Lang"
                main-title="Everything you need to know about creating a RESTful Api in Go — Part V"
                subtitle="detailed overview on consuming an external rest apis"
                published="May 12, 2019"
                background-style="background-color: #25274d;"
        />
        <ArticleBody />
        <Footer />
    </div>

</template>

<script>
    import NavDesign from '../../topNavBars/NavDesign01'
    import HeaderArticle from '../../headers/HeaderArticle'
    import ArticleBody from './articleBody/ArticleBody_6'
    import Footer from '../../footers/FooterDesign01'

    export default {
        name: "Article_6",
        metaInfo: {
            title: 'Go - Consume an external rest api'
        },
        components: {
            NavDesign,
            HeaderArticle,
            ArticleBody,
            Footer
        }
    }
</script>
