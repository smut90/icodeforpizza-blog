<template>
    <div>
        <NavDesign />
        <HeaderArticle
                series="React"
                main-title="Everything you need to know about React"
                subtitle="building a practical react app, step by step guide"
                published="Apr 5, 2020"
                background-style="background-color: #25274d;"
        />
        <ArticleBody />
        <Footer />
    </div>
</template>

<script>
    import NavDesign from '../../topNavBars/NavDesign01'
    import HeaderArticle from '../../headers/HeaderArticle'
    import ArticleBody from './articleBody/ArticleBody_0'
    import Footer from '../../footers/FooterDesign01'

    export default {
        name: "Article_0",
        metaInfo: {
            // title will be injected into parent titleTemplate
            title: 'React - Building a react app'
        },
        components: {
            NavDesign,
            HeaderArticle,
            ArticleBody,
            Footer
        }
    }
</script>
