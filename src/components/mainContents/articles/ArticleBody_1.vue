<template>
    <div class="article-body">
        <div class="left-sidebar" style="color: #141e30;">
            <div class="container" style="background: linear-gradient(90deg, #141e30 0%, #243b55 100%); border-radius: 5px; padding: 10px">
                <div class="row">
                    <div class="col-xs-1 col-sm-6 col-md-10">
                        <p style="font-family: Poppins SemiBold; color: whitesmoke">Navigate the page</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-1 col-sm-6 col-md-12">
                        <ul class="nav flex-column" style="flex-wrap: wrap">
                            <li class="nav-item">
                                <a class="nav-link" href="#title-1" style="color: white; padding-bottom: 10px; font-family: Gotu Regular">
                                    packages in go
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="color: whitesmoke; padding-bottom: 10px; font-family: Poppins SemiBold">
                                    code snippets
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#snippet-1" style="color: white; padding-bottom: 10px; font-family: Gotu Regular">
                                                packages structure with binary executable
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#snippet-2" style="color: white; padding-bottom: 10px; font-family: Gotu Regular">
                                                packages structure with package archive
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#snippet-3" style="color: white; padding-bottom: 10px; font-family: Gotu Regular">
                                                go source file with package imports
                                            </a>
                                        </li>
                                    </ul>
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
        <div class="content" style="padding-right: 10px; font-family: Poppins Regular;">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-8 col-sm-8 col-md-8">
                        <ArticleBodyPara
                                style="font-size: 20px"
                                para="Go is build upon the DRY (Don’t Repeat Yourself) principal, with the mission to facilitate clean code. Functions are the basis which allows code reuse, next is Packages.
                                    Packages organize related files into modular units, which allows re-usability."
                        />
                        <ArticleBodyPara
                                id="title-1"
                                style="font-family: Poppins SemiBold; font-size: 25px"
                                para="Packages in Go"
                        />
                        <ArticleBodyPara
                                style="font-size: 20px"
                                para="A package is nothing but a collection of go source files. Every go source file should belong to a specific package. A go source file in a package could be either public or package private.
                                    Packages in a way reduce the compilation time, by recompiling only the changed source files."
                        />
                        <ArticleBodyPara
                                style="font-size: 20px"
                                para="main package"
                        />
                        <ArticleBodyPara
                                style="font-size: 20px"
                                para="This is the main entry package, which starts the application. Programs which needs to be executable, should have a main package. If there is a main package in your application,
                                    go install will create a binary executable"
                        />
                        <ArticleBodyQuote
                                section-style="border-left: 5px solid #7d7d69; background-color: #efefe8"
                                para-style="font-size: 20px; padding: 25px; font-family: Gotu Regular;"
                                para="“go install” by default will search your application in $GOPATH and in /home/go locations. If not found in either places, will throw an error."
                        />
                        <ArticleBodyCode
                                id="snippet-1"
                                lang="markdown"
                                code="
                                    ├── bin
                                    |  └── app (binary executable generated from main package)
                                    ├── pkg
                                    └── src
                                    ├── app
                                    └── application.go (package main)
                                    └── print
                                    └── text.go (package print)"
                        />
                        <ArticleBodyPara
                                style="font-size: 20px"
                                para="Similarly, if there is no main package in your application, go install will generate a package archive."
                        />
                        <ArticleBodyCode
                                id="snippet-2"
                                lang="markdown"
                                code="
                                    ├── bin
                                    ├── pkg
                                    |    └── app.a
                                    |    └── print.a
                                    └── src
                                       ├── app
                                           └── application.go (package app)
                                       └── print
                                           └── text.go (package print)
                                "
                        />
                        <ArticleBodyQuote
                                section-style="border-left: 5px solid #7d7d69; background-color: #efefe8"
                                para-style="font-size: 20px; padding: 25px; font-family: Gotu Regular;"
                                para="“fmt” is a package archive (fmt.a). Used as a shared library, which doesn’t contain a main package."
                        />
                        <ArticleBodyPara
                                style="font-size: 20px"
                                para="Main package contains the main() function which is the entry point for the executable program. Similarly,
                                    you can name any function main() outside main package and these functions will act just as other functions."
                        />
                        <ArticleBodyQuote
                                section-style="border-left: 5px solid #7d7d69; background-color: #efefe8"
                                para-style="font-size: 20px; padding: 25px; font-family: Gotu Regular;"
                                para="In Go, a variable/type/function which start with a Capital letter is visible outside the package and can be accessed
                                        after importing the package from anywhere. Anything that doesn’t start with a capital letter is package private."
                        />
                        <ArticleBodyPara
                                style="font-size: 20px"
                                para="All import paths in a go source file should be relative to the src directory. Package Alias allow resolving conflicts for packages with the same name."
                        />
                        <ArticleBodyCode
                                id="snippet-3"
                                lang="go"
                                code='
                                    package main
                                    import (
                                        "fmt",
                                        strNumRed  "/example/numb/red"
                                        strWordRed "/example/word/red"
                                    )
                                    ...
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 15px"
                                para="- End -"
                        />
                        <ArticleBodyTags
                                :tags="['go lang', 'packages', 'structure']"
                        />
                        <ArticleBodyDivider />

                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12">
                                <p style="font-size: 20px">
                                    Next in line <span><font-awesome-icon icon="arrow-circle-right" size="1x" style="color: #090979; cursor: pointer"/></span>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12" style="padding-bottom: 20px">
                                <ArticleCard
                                    published="Feb 01, 2020"
                                    title="Everything you need to know about creating a RESTful Api in Go — Part I"
                                    subtitle="detailed overview on go internal server"
                                    :tags="['internal', 'server']"
                                    card-no=4
                                    article-no="article_v00003"
                                    card-style="background: linear-gradient(90deg, #141e30 0%, #243b55 100%); box-shadow: 0 2px 4px 0 rgba(0,0,0,.15); flex: 0 0 350px; flex-grow: 1; max-width: 300px; max-height: 350px; padding-bottom: 25px"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-4 col-sm-4 col-md-4" style="background-color: white;">
                        <div class="row">
                            <div class="col-xs-4 col-sm-4 col-md-4"></div>
                            <div class="col-xs-8 col-sm-8 col-md-8" style="height: 25vh; background-color: white; box-shadow: 0 0 30px rgba(16,14,23,.25);">
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 d-flex" style="justify-content: center; padding-top: 10vh">
                                        <p>for sponsors</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4"></div>
                        </div>
                        <div class="row" style="padding-top: 50px">
                            <div class="col-xs-4 col-sm-4 col-md-4"></div>
                            <div class="col-xs-8 col-sm-8 col-md-8" style="height: 25vh; background-color: white; box-shadow: 0 0 30px rgba(16,14,23,.25);">
                                <div class="row">
                                    <div class="col-sm-12 col-md-12 d-flex" style="justify-content: center; padding-top: 10vh">
                                        <p>for sponsors</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4"></div>
                        </div>

<!--                        <div style="position: absolute; width: 60%; height: 12%; background-color: rgb(226, 226, 218);"></div>-->
<!--                        <div style="position: absolute; width: 60%; height: 12%; background-color: white; box-shadow: 0 0 30px rgba(16,14,23,.25); top: 15px; right: 85px;">-->
<!--                            <div class="row">-->
<!--                                <div class="col-sm-12 col-md-12 d-flex" style="justify-content: center; padding-top: 40%">-->
<!--                                    <p>for sponsors</p>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticleCard from '../ArticleCard'
    import ArticleBodyPara from '../ArticleBodyPara'
    import ArticleBodyQuote from '../ArticleBodyQuote'
    import ArticleBodyCode from '../ArticleBodyCode'
    import ArticleBodyTags from '../ArticleBodyTags'
    import ArticleBodyDivider from '../ArticleBodyDivider'

    export default {
        name: "ArticleBody_1",
        components: {
            ArticleCard,
            ArticleBodyPara,
            ArticleBodyQuote,
            ArticleBodyCode,
            ArticleBodyTags,
            ArticleBodyDivider
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: "Poppins SemiBold";
        src: url("../../../assets/Poppins-SemiBold.ttf");
    }
    @font-face {
        font-family: "Poppins Regular";
        src: url("../../../assets/Poppins-Regular.ttf");
    }
    @font-face {
        font-family: "Gotu Regular";
        src: url("../../../assets/Gotu-Regular.ttf");
    }

    .left-sidebar {
        position: fixed; top: 46vh;  left: 0; max-width: 15%; max-height: 35%; border-right: 1px solid rgba(0,0,0,.07)
        /*position: fixed; top:35vh; left: 0; width: 15%; height: 100%; background-color: rgb(29, 67, 84); border-right: 1px solid rgba(0,0,0,.07)*/
    }
    .content {
        margin-top: 25px; margin-left: 15%; height: 100%; padding-left: 10px;
    }
</style>
