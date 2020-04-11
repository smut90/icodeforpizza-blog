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
                                <a class="nav-link" href="#nav-title-1" style="color: white; padding-bottom: 10px;">
                                    go internal server
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-2" style="color: white; padding-bottom: 10px;">
                                    http Refresher
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-3" style="color: white; padding-bottom: 10px;">
                                    how http works under the hood, over a network connection
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-4" style="color: white; padding-bottom: 10px;">
                                    go net/http package
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-5" style="color: white; padding-bottom: 10px;">
                                    http.ListenAndServe
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-6" style="color: white; padding-bottom: 10px;">
                                    http.HandleFunc
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-7" style="color: white; padding-bottom: 10px;">
                                    http.ResponseWriter
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-8" style="color: white; padding-bottom: 10px;">
                                    http.Request
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="color: whitesmoke; padding-bottom: 10px;">
                                    <span style="font-weight: bold; color: #aaabbb;">code snippets</span>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-1" style="color: white; padding-bottom: 10px;">
                                                go server overview
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-2" style="color: white; padding-bottom: 10px;">
                                                import packages
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-3" style="color: white; padding-bottom: 10px;">
                                                func ListenAndServe
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-4" style="color: white; padding-bottom: 10px;">
                                                func HandleFunc
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-5" style="color: white; padding-bottom: 10px;">
                                                func homePageHandler
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-6" style="color: white; padding-bottom: 10px;">
                                                http.ResponseWriter
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-7" style="color: white; padding-bottom: 10px;">
                                                func homePageHandler extended
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-8" style="color: white; padding-bottom: 10px;">
                                                *http.Request
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-9" style="color: white; padding-bottom: 10px;">
                                                start the go server
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
                                id="nav-title-1"
                                style="font-weight: bold; font-size: 25px"
                                para="Go internal server"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="In this section we will create a simple endpoint to accept a http request."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="First let’s create a simple go file and describe what each section does."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-1"
                                lang="go"
                                code='
                                    [app.go]

                                    package main
                                    import (
                                        "fmt"
                                        "log"
                                        "net/http"
                                    )
                                    func main()  {
                                        http.HandleFunc("/", homePageHandler)
                                        log.Fatal(http.ListenAndServe(":8080", nil))
                                    }
                                    func homePageHandler(w http.ResponseWriter, r *http.Request) {
                                        fmt.Println("Request came through to Home Page")
                                    }
                                '
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                In previous article, I mentioned about the package structure, executable and package archive etc
                                (Link: <router-link to="/everything-you-need-to-know-about-go-packages-v00002">Go Packages</router-link>)
                                Now lets take each section and see how go works behind the scene to accept http requests and serve.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyCode
                                id="nav-snippet-2"
                                lang="go"
                                code='
                                    import (
                                        "fmt"
                                        "log"
                                        "net/http"
                                    )
                                '
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                In the import section, there are three packages we have used. <strong>“fmt”</strong> (formatted I/O) is similar to C’s printf and scanf.
                                According to the documentation this is much simpler compared to C’s printf and scanf (Link:
                                <a href="https://golang.org/pkg/fmt/">source</a>) <strong>“log”</strong> is a simple logging library and there are some out of the box methods
                                you can use to get the job done.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                <strong>“net/http”</strong> is the most important of the three for the purpose of handling http requests.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                id="nav-title-2"
                                style="font-weight: bold; font-size: 25px"
                                para="HTTP Refresher"
                        />
                        <ArticleBodyPara>
                            <div style="font-size: 18px; padding: 20px; border-left: 5px solid #7d7d69; background-color: #efefe8; font-family: Gotu Regular;">
                                <p>Before we dive into the package, let’s look at some network fundamentals.</p>
                                <br>
                                <p>
                                    HTTP (Hyper Text Transfer Protocol) is a protocol that two machines over the internet (client and server) uses to communicate with each other.
                                    Think of it as grammar which shapes the language in use to communicate. TCP (Transmission Control Protocol) is used to transmit data between two machines.
                                    It establishes the connection and guarantees the delivery from one machine to another. HTTP uses TCP to communicate over the internet.
                                </p>
                                <br>
                                <p>Let’s try to simplify using an analogy</p>
                                <br>
                                <p>
                                    Think that I have written a letter (HTML), in a way both parties can understand (HTTP) and I have a trustworthy postman (TCP) to deliver my letter.
                                    Next, I need to have a way to specify the recipient, so the postman knows whom to deliver my letter to. This sender and recipient identification is
                                    done via something knows as IP (Internet Protocol). With an IP address in place, I can say to my postman, “Go to this house (machine/server) in this
                                    address (IP) and hand it over to this person (port)”. Once the letter is safely delivered, the postman comes back and let me know that the recipient
                                    accepted it (Acknowledgement), so I can be sure that the intended party received it.
                                </p>
                            </div>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="With the above high level understanding, let’s look at how clients and servers communicate via the network."
                        />
                        <ArticleBodyPara
                                id="nav-title-3"
                                style="font-weight: bold; font-size: 25px"
                                para="How http works under the hood, over a network connection"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="A Socket is nothing but the combination of an IP address and a Port. So for the communication to work between a client and a server,
                                there should be a client socket, a network connection and a server socket. A server socket should contain a well defined port number to it, so all the clients
                                connect to the server know where exactly it should connect to (in our analogy, whom exactly to deliver our letter to) since the server is accepting requests 24/7.
                                On the other hand, client sockets could have randomly assigned port numbers since it is short lived and required only when communicating with the server."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="In order for HTTP to work, first the server should open a socket connection (server has an IP address and a dedicated port to receive client requests) and listen to any incoming requests.
                                The client, on the other hand, initiates a connection request (client too has an IP address and gets a random port number) and sends a request to the server socket.
                                Upon receiving the request, the server assigns the client request to a process, to a thread in a thread queue or to an event in an event loop depending on the underlying
                                server architecture and the main socket goes back to accept incoming requests. In the client request itself, is a footprint of the client socket address, hence the serve knows where to send the response
                                to once the server side processing is completed. Once the server sends the HTTP response back to the client, the connection will be closed."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="The above explanation shows how a simple server works behind the scene. With this knowledge at hand, let’s look at how internal go server works under the hood."
                        />
                        <ArticleBodyPara
                                id="nav-title-4"
                                style="font-weight: bold; font-size: 25px"
                                para="Go net/http package"
                        />
                        <ArticleBodyPara>
                            <div style="font-size: 18px; padding: 20px; border-left: 5px solid #7d7d69; background-color: #efefe8; font-family: Gotu Regular;">
                                <p><strong>net</strong></p>
                                <br>
                                <p>
                                    “Package net provides a portable interface for network I/O, including TCP/IP, UDP, domain name resolution, and Unix domain sockets.
                                </p>
                                <br>
                                <p>
                                    Although the package provides access to low-level networking primitives, most clients will need only the basic interface provided by the Dial,
                                    Listen, and Accept functions and the associated Conn and Listener interfaces.” - <a href="https://godoc.org/net">source</a>
                                </p>
                                <br>
                                <p><strong>http</strong></p>
                                <br>
                                <p>
                                    “Package http provides HTTP client and server implementations.” - <a href="https://godoc.org/net/http">source</a>
                                </p>
                            </div>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                id="nav-title-5"
                                style="font-weight: bold; font-size: 25px"
                                para="http.ListenAndServe"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-3"
                                lang="markdown"
                                code='
                                    func ListenAndServe(addr string, handler Handler) error
                                '
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                http.ListenAndServe(“:8080”, nil) starts a server listening to port 8080 and the second argument of this method is a handler.
                                Since we have passed <strong>nil</strong> as the handler, go uses <strong>DefaultServeMux</strong> as the default handler.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="We have a server up and running and listening to incoming requests on port 8080. Now we should define an endpoint so that the clients can query various resources from the server."
                        />
                        <ArticleBodyPara
                                id="nav-title-6"
                                style="font-weight: bold; font-size: 25px"
                                para="http.HandleFunc"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-4"
                                lang="markdown"
                                code='
                                    func HandleFunc(pattern string, handler func(ResponseWriter, *Request))
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="http.HandleFunc(“/home”, homePageHandler) expects a resource in uri path “/home” which executes handler function “homePageHandler”.
                                This way if a client sends a request to /home, func homePageHandler will get executed."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-5"
                                lang="go"
                                code='
                                    func homePageHandler(w http.ResponseWriter, r *http.Request) {
                                        fmt.Println("Request came through to Home Page")
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="This way http.HandleFunc maps certain endpoints to dedicated handlers."
                        />
                        <ArticleBodyPara
                                id="nav-title-7"
                                style="font-weight: bold; font-size: 25px"
                                para="http.ResponseWriter"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-6"
                                lang="markdown"
                                code='
                                    http.ResponseWriter
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="As seen above, a handler takes two arguments and the first one is the http.ResponseWriter.
                                The ResponseWriter is an interface which is used by the handler to construct an HTTP response."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-7"
                                lang="go"
                                code='
                                    func homePageHandler(w http.ResponseWriter, r *http.Request) {
                                        w.Header().Set("Content-Type", "text/plain; charset=utf-8")
                                        w.WriteHeader(http.StatusOK)
                                    }
                                '
                        />
                        <ArticleBodyPara
                                id="nav-title-8"
                                style="font-weight: bold; font-size: 25px"
                                para="http.Request"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-8"
                                lang="markdown"
                                code='
                                    *http.Request
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="As the name implies, http.Request is a struct which is the expected request by the server or the request sent by the client."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="So to sums up, ListenAndServe starts the go server listening to incoming requests on a specified port, where each endpoint is
                                assigned to a handler function which takes a request struct and a response interface, which then process the request and prepare the response and sends the info back to the client."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now let’s run the application and see what we get. First go to the go source file location and execute the following,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-9"
                                lang="markdown"
                                code='
                                    go run app.go
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="This will start the serve and will be listening to port 8080. Now go the the browser and type http://localhost:8080/. You can see logs been printed in the server console,
                                which indicates that the server is accepting requests. Browser on the other hand will be empty since the server is not sending any payload back to the client.
                                In the next section will see how we can enhance this to be a proper REST endpoint."
                        />
                        <ArticleBodyPara
                                style="font-size: 15px"
                                para="- End -"
                        />
                        <ArticleBodyTags
                                :tags="['internal', 'server']"
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
                                    published="Apr 09, 2019"
                                    title="Everything you need to know about Go packages"
                                    subtitle="detailed overview on go package structure"
                                    :tags="['packages', 'code']"
                                    card-no=4
                                    article-no="article_v00002"
                                    card-style="background: linear-gradient(90deg, #141e30 0%, #243b55 100%); box-shadow: 0 2px 4px 0 rgba(0,0,0,.15); flex: 0 0 350px; flex-grow: 1; max-width: 300px; max-height: 350px; padding-bottom: 25px"
                                />
                                <ArticleCard
                                        published="Apr 19, 2019"
                                        title="Everything you need to know about creating a RESTful Api in Go — Part II"
                                        subtitle="detailed overview on how to make the go endpoints restful"
                                        :tags="['restful', 'endpoints']"
                                        card-no=4
                                        article-no="article_v00004"
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

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ArticleCard from '../../ArticleCard'
    import ArticleBodyPara from '../../ArticleBodyPara'
    import ArticleBodyCode from '../../ArticleBodyCode'
    import ArticleBodyTags from '../../ArticleBodyTags'
    import ArticleBodyDivider from '../../ArticleBodyDivider'

    export default {
        name: "ArticleBody_2",
        components: {
            ArticleCard,
            ArticleBodyPara,
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
