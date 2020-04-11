<template>
    <div>
        <NavDesign />
        <HeaderArticle
                series="Go Lang"
                main-title="Everything you need to know about creating a RESTful Api in Go — Part I"
                subtitle="detailed overview on go internal server"
                published="Apr 15, 2019"
                background-style="background-color: #25274d;"
        />
        <ArticleBody />
        <Footer />
    </div>
</template>

<script>
    import NavDesign from '../../topNavBars/NavDesign01'
    import HeaderArticle from '../../headers/HeaderArticle'
    import ArticleBody from './articleBody/ArticleBody_2'
    import Footer from '../../footers/FooterDesign01'

    export default {
        name: "Article_2",
        metaInfo: {
            title: 'Go - Go internal server'
        },
        components: {
            NavDesign,
            HeaderArticle,
            ArticleBody,
            Footer
        }
    }
</script>
