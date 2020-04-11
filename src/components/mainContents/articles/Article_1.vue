<template>
    <div>
        <NavDesign />
        <HeaderArticle
                series="Go Lang"
                main-title="Everything you need to know about go packages"
                subtitle="Detailed overview on go package structure"
                published="Apr 9, 2019"
                background-style="background-color: #25274d;"
        />
        <ArticleBody />
        <Footer />
    </div>
</template>

<script>
    import NavDesign from '../../topNavBars/NavDesign01'
    import HeaderArticle from '../../headers/HeaderArticle'
    import ArticleBody from './articleBody/ArticleBody_1'
    import Footer from '../../footers/FooterDesign01'

    export default {
        name: "Article_1",
        metaInfo: {
            // title will be injected into parent titleTemplate
            title: 'Go - Go packages'
        },
        components: {
            NavDesign,
            HeaderArticle,
            ArticleBody,
            Footer
        }
    }
</script>
