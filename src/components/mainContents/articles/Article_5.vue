<template>
    <div>
        <NavDesign />
        <HeaderArticle
                series="Go Lang"
                main-title="Everything you need to know about creating a RESTful Api in Go — Part IV"
                subtitle="detailed overview on integrating a postgresSQL database"
                published="May 01, 2019"
                background-style="background-color: #25274d;"
        />
        <ArticleBody />
        <Footer />
    </div>
</template>

<script>
    import NavDesign from '../../topNavBars/NavDesign01'
    import HeaderArticle from '../../headers/HeaderArticle'
    import ArticleBody from './articleBody/ArticleBody_5'
    import Footer from '../../footers/FooterDesign01'

    export default {
        name: "Article_5",
        metaInfo: {
            title: 'Go - Integrate postgres sql database'
        },
        components: {
            NavDesign,
            HeaderArticle,
            ArticleBody,
            Footer
        }
    }
</script>
