<template>
    <div>
        <NavDesign />
        <HeaderArticle
                series="Go Lang"
                main-title="Everything you need to know about creating a RESTful Api in Go — Part III"
                subtitle="detailed overview on integrating swagger"
                published="Apr 21, 2019"
                background-style="background-color: #25274d;"
        />
        <ArticleBody />
        <Footer />
    </div>
</template>

<script>
    import NavDesign from '../../topNavBars/NavDesign01'
    import HeaderArticle from '../../headers/HeaderArticle'
    import ArticleBody from './articleBody/ArticleBody_4'
    import Footer from '../../footers/FooterDesign01'

    export default {
        name: "Article_4",
        metaInfo: {
            title: 'Go - Integrate Swagger'
        },
        components: {
            NavDesign,
            HeaderArticle,
            ArticleBody,
            Footer
        }
    }
</script>
