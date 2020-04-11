<template>
    <div>
        <NavDesign />
        <HeaderArticle
                series="S.R.Muthutantrige"
                main-title="Software Engineer"
                subtitle="Backend, Frontend & Mobile developer"
        />
        <Footer />
    </div>
</template>

<script>
    import NavDesign from '../../topNavBars/NavDesign01'
    import HeaderArticle from '../../headers/HeaderArticleAbout'
    import Footer from '../../footers/FooterDesign01'

    export default {
        name: "Article_About",
        metaInfo: {
            // title will be injected into parent titleTemplate
            title: 'About Author'
        },
        components: {
            NavDesign,
            HeaderArticle,
            Footer
        }
    }
</script>
