<template>
    <div class="article-body">
        <div class="left-sidebar" style="color: #141e30;">
            <div class="container d-none d-md-block" style="background-color: #25274d; height: 100vh; padding: 6vh 10px 10px; font-family: Montserrat Regular">
                <div class="row">
                    <div class="col-xs-10 col-sm-10 col-md-10">
                        <p style="font-weight: bold; color: #aaabbb">Navigate the page</p>
                    </div>
                </div>
                <div class="row">
                    <div id="scroll-style" class="col-xs-12 col-sm-12 col-md-12" style="overflow-y: auto; height: 80vh;">
                        <ul class="nav flex-column" style="flex-wrap: wrap">
                            <li class="nav-item">
                                <a class="nav-link" href="#title-1" style="color: white; padding-bottom: 10px;">
                                    packages in go
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="color: whitesmoke; padding-bottom: 10px;">
                                    <span style="font-weight: bold; color: #aaabbb;">code snippets</span>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#snippet-1" style="color: white; padding-bottom: 10px;">
                                                packages structure with binary executable
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#snippet-2" style="color: white; padding-bottom: 10px;">
                                                packages structure with package archive
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#snippet-3" style="color: white; padding-bottom: 10px;">
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
        <div class="content" style="font-family: Montserrat Regular;">
            <div class="container-fluid">
                <div class="row">
                    <div class="content-pad col-xs-8 col-sm-8 col-md-8">
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Go is build upon the DRY (Don’t Repeat Yourself) principal, with the mission to facilitate clean code. Functions are the basis which allows code reuse, next is Packages.
                                    Packages organize related files into modular units, which allows re-usability."
                        />
                        <ArticleBodyPara
                                id="title-1"
                                style="font-weight: bold; font-size: 25px"
                                para="Packages in Go"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="A package is nothing but a collection of go source files. Every go source file should belong to a specific package. A go source file in a package could be either public or package private.
                                    Packages in a way reduce the compilation time, by recompiling only the changed source files."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="main package"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="This is the main entry package, which starts the application. Programs which needs to be executable, should have a main package. If there is a main package in your application,
                                    go install will create a binary executable"
                        />
                        <ArticleBodyQuote
                                section-style="border-left: 5px solid #7d7d69; background-color: #efefe8"
                                para-style="font-size: 18px; padding: 25px;;"
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
                                style="font-size: 18px"
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
                                para-style="font-size: 18px; padding: 25px; font-family: Gotu Regular;"
                                para="“fmt” is a package archive (fmt.a). Used as a shared library, which doesn’t contain a main package."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Main package contains the main() function which is the entry point for the executable program. Similarly,
                                    you can name any function main() outside main package and these functions will act just as other functions."
                        />
                        <ArticleBodyQuote
                                section-style="border-left: 5px solid #7d7d69; background-color: #efefe8"
                                para-style="font-size: 18px; padding: 25px; font-family: Gotu Regular;"
                                para="In Go, a variable/type/function which start with a Capital letter is visible outside the package and can be accessed
                                        after importing the package from anywhere. Anything that doesn’t start with a capital letter is package private."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
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
                                <p style="font-size: 18px">
                                    Next in line <span><font-awesome-icon icon="arrow-circle-right" size="1x" style="color: #090979; cursor: pointer"/></span>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="blog-articles" style="display: flex; flex-direction: row; flex-wrap: nowrap; overflow-x: auto; height: 400px; padding-top: 20px; padding-left: 20px">
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
    import ArticleCard from '../../ArticleCard'
    import ArticleBodyPara from '../../ArticleBodyPara'
    import ArticleBodyQuote from '../../ArticleBodyQuote'
    import ArticleBodyCode from '../../ArticleBodyCode'
    import ArticleBodyTags from '../../ArticleBodyTags'
    import ArticleBodyDivider from '../../ArticleBodyDivider'

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
        font-family: "Montserrat Regular";
        src: url("../../../../assets/Montserrat-Regular.ttf");
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

    @media (max-width: 575.98px) {
        /*Extra small devices (portrait phones, less than 576px)*/
        .left-sidebar {
            position: fixed; top: 60px;  left: 0; max-width: 0; max-height: 35%; border-right: 1px solid rgba(0,0,0,.07)
        }
        .content {
            margin-top: 25px; margin-left: 0; height: 100%;
        }
        .content-pad {
            padding-left: 10px;
        }
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
        /*Small devices (landscape phones, 576px and up)*/
        .left-sidebar {
            position: fixed; top: 60px;  left: 0; max-width: 0; max-height: 35%; border-right: 1px solid rgba(0,0,0,.07)
        }
        .content {
            margin-top: 25px; margin-left: 0; height: 100%; padding-right: 10px;
        }
        .content-pad {
            padding-left: 10px;
        }
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
        /*Medium devices (tablets, 768px and up)*/
        .left-sidebar {
            position: fixed; top: 60px;  left: 0; max-width: 15%; max-height: 35%; border-right: 1px solid rgba(0,0,0,.07)
        }
        .content {
            margin-top: 25px; margin-left: 15%; height: 100%; padding-right: 10px;
        }
        .content-pad {
            padding-left: 50px;
        }
    }
    @media (min-width: 992px) and (max-width: 1199.98px) {
        /*Large devices (desktops, 992px and up)*/
        .left-sidebar {
            position: fixed; top: 60px;  left: 0; max-width: 15%; max-height: 35%; border-right: 1px solid rgba(0,0,0,.07)
        }
        .content {
            margin-top: 25px; margin-left: 15%; height: 100%; padding-left: 10px; padding-right: 10px;
        }
        .content-pad {
            padding-left: 50px;
        }
    }
    @media (min-width: 1200px) {
        /*Extra large devices (large desktops, 1200px and up)*/
        .left-sidebar {
            position: fixed; top: 60px;  left: 0; max-width: 15%; max-height: 35%; border-right: 1px solid rgba(0,0,0,.07)
        }
        .content {
            margin-top: 25px; margin-left: 15%; height: 100%; padding-left: 10px; padding-right: 10px;
        }
        .content-pad {
            padding-left: 50px;
        }
    }
</style>
