<template>
    <div>
        <NavDesign />
        <HeaderArticle
                series="Go Lang"
                main-title="Everything you need to know about creating a RESTful Api in Go — Part II"
                subtitle="detailed overview on how to make the Go endpoints RESTful"
                published="Apr 19, 2019"
                background-style="background-color: #25274d;"
        />
        <ArticleBody />
        <Footer />
    </div>
</template>

<script>
    import NavDesign from '../../topNavBars/NavDesign01'
    import HeaderArticle from '../../headers/HeaderArticle'
    import ArticleBody from './articleBody/ArticleBody_3'
    import Footer from '../../footers/FooterDesign01'

    export default {
        name: "Article_3",
        metaInfo: {
            title: 'Go - RESTFul api endpoints'
        },
        components: {
            NavDesign,
            HeaderArticle,
            ArticleBody,
            Footer
        }
    }
</script>
