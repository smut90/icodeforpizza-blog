<template>
    <div class="card-wrapper" style="padding: 30px">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <p style="font-size: 20px; font-family: Poppins Regular; border-bottom: 2px solid rgb(245, 239, 239); padding-bottom: 10px">{{series.series}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-2 col-sm-2 col-md-2">
                <div class="ad-article" style="margin-right: 1rem; padding-top: 20px; ">
                    <ArticleCardSponsor v-if="series.sponsoredArticle"
                                        :title="series.sponsoredArticle.title"
                                        :sponsor="series.sponsoredArticle.sponsor"
                                        :card-no="series.sponsoredArticle.cardNo"
                    />
                    <div v-else style="max-width: 300px; max-height: 350px;"></div>
                </div>
            </div>
            <div class="col-xs-10 col-sm-10 col-md-10">
                <div class="blog-articles" id="scroll-style" style="display: flex; flex-direction: row; flex-wrap: nowrap; overflow-x: auto; height: 400px; padding-top: 20px; padding-left: 20px">
                    <ArticleCard
                            :key="index"
                            v-for="(article, index) of series.articles"
                            :published="article.published"
                            :title="article.title"
                            :subtitle="article.subtitle"
                            :tags="article.tags"
                            :card-no="article.cardNo"
                            :article-no="article.articleNo"
                            :card-style="series.cardSeriesStyle"
                    />
                </div>
            </div>
        </div>


<!--        <div class="container-fluid" style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: flex-start; ">-->
<!--            <div class="ad-article" style="margin-right: 1rem; padding-top: 20px; ">-->
<!--                <ArticleCardSponsor v-if="series.sponsoredArticle"-->
<!--                        :title="series.sponsoredArticle.title"-->
<!--                        :sponsor="series.sponsoredArticle.sponsor"-->
<!--                        :card-no="series.sponsoredArticle.cardNo"-->
<!--                />-->
<!--                <div v-else style="width: 300px; height: 350px;"></div>-->
<!--            </div>-->
<!--            <div class="blog-articles" id="scroll-style" style="display: flex; flex-direction: row; flex-wrap: nowrap; overflow-x: auto; height: 400px; padding-top: 20px; padding-left: 20px">-->
<!--                <ArticleCard-->
<!--                        :key="index"-->
<!--                        v-for="(article, index) of series.articles"-->
<!--                        :published="article.published"-->
<!--                        :title="article.title"-->
<!--                        :subtitle="article.subtitle"-->
<!--                        :tags="article.tags"-->
<!--                        :card-no="article.cardNo"-->
<!--                        :article-no="article.articleNo"-->
<!--                        :card-style="series.cardSeriesStyle"-->
<!--                />-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
    import ArticleCardSponsor from './ArticleCardSponsor'
    import ArticleCard from './ArticleCard'

    export default {
        name: "ArticleSeries",
        components: {
            ArticleCardSponsor,
            ArticleCard
        },
        props: {
            series: Object
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: "Poppins SemiBold";
        src: url("../../assets/Poppins-SemiBold.ttf");
    }
    @font-face {
        font-family: "Poppins Regular";
        src: url("../../assets/Poppins-Regular.ttf");
    }
    @font-face {
        font-family: "Gotu Regular";
        src: url("../../assets/Gotu-Regular.ttf");
    }
    #scroll-style::-webkit-scrollbar {
        background-color: rgb(243, 246, 249);
        border-radius: 10px;
        width: 5px;
    }
    #scroll-style::-webkit-scrollbar-thumb {
        background-color: #4f566b;
        border-radius: 10px;
    }
    .card-shadow {
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
    }
    .card-1 {
        animation: moveRight 2s;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.15);
    }
    .card-hover {
        box-shadow: rgba(0, 0, 0, 0.15) 0 12px 14px 10px;
    }
</style>
