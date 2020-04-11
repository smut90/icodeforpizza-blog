<template>
    <div id="nav-services" class="wrapper container-fluid">
        <ArticleSeries :series="series01" />
        <ArticleSeries :series="series02" />
    </div>
</template>

<script>
    import ArticleSeries from './ArticleSeries'

    export default {
        name: "MainContent01",
        components: {
            ArticleSeries
        },
        data(){
            return {
                series01: {
                    series: 'Go Lang',
                    sponsoredArticle: {
                        title: 'Best deals',
                        sponsor: 'sponsor goes here',
                        cardNo: 9
                    },
                    cardSeriesStyle: 'background: linear-gradient(90deg, #141e30 0%, #243b55 100%); box-shadow: 0 2px 4px 0 rgba(0,0,0,.15); flex: 0 0 350px; flex-grow: 1; max-width: 300px; max-height: 350px; padding-bottom: 25px',
                    articles: [
                        // {
                        //     published: 'May 06, 2019',
                        //     title: 'Go Concurrency, things to know',
                        //     subtitle: 'everything you need to know about go concurrency',
                        //     tags: ['goroutines', 'channels'],
                        //     cardNo: 9,
                        //     articleNo: 'article_v00008'
                        // },
                        {
                            published: 'May 12, 2019',
                            title: 'Everything you need to know about creating a RESTful Api in Go — Part V',
                            subtitle: 'detailed overview on consuming an external rest apis',
                            tags: ['3rd party', 'json', 'rest'],
                            cardNo: 8,
                            articleNo: 'article_v00007'
                        },
                        {
                            published: 'May 01, 2019',
                            title: 'Everything you need to know about creating a RESTful Api in Go — Part IV',
                            subtitle: 'detailed overview on integrating a postgresSQL database',
                            tags: ['database', 'postgres'],
                            cardNo: 7,
                            articleNo: 'article_v00006'
                        },
                        {
                            published: 'Apr 21, 2019',
                            title: 'Everything you need to know about creating a RESTful Api in Go — Part III',
                            subtitle: 'detailed overview on integrating swagger',
                            tags: ['swagger', 'api'],
                            cardNo: 6,
                            articleNo: 'article_v00005'
                        },
                        {
                            published: 'Apr 19, 2019',
                            title: 'Everything you need to know about creating a RESTful Api in Go — Part II',
                            subtitle: 'detailed overview on how to make the go endpoints restful',
                            tags: ['restful', 'endpoints'],
                            cardNo: 5,
                            articleNo: 'article_v00004'
                        },
                        {
                            published: 'Apr 15, 2019',
                            title: 'Everything you need to know about creating a RESTful Api in Go — Part I',
                            subtitle: 'detailed overview on go internal server',
                            tags: ['internal', 'server'],
                            cardNo: 4,
                            articleNo: 'article_v00003'
                        },
                        {
                            published: 'Apr 09, 2019',
                            title: 'Everything you need to know about Go packages',
                            subtitle: 'detailed overview on go package structure',
                            tags: ['packages', 'code'],
                            cardNo: 3,
                            articleNo: 'article_v00002'
                        }
                    ]
                },
                series02: {
                    series: 'React',
                    cardSeriesStyle: 'background: linear-gradient(90deg, #141e30 0%, #243b55 100%); box-shadow: 0 2px 4px 0 rgba(0,0,0,.15); flex: 0 0 350px; flex-grow: 1; max-width: 300px; max-height: 350px; padding-bottom: 25px',
                    articles: [
                        {
                            published: 'April 05, 2020',
                            title: 'Everything you need to know about React',
                            subtitle: 'Building a practical react app, step by step guide',
                            tags: ['react', 'bootstrap', 'google login'],
                            cardNo: 1,
                            articleNo: 'article_v00001'
                        }
                    ]
                },
            }
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
    .wrapper {
        min-height: 50vh;
        background-color: white;
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
