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
                                <a class="nav-link" href="#nav-title-2" style="color: white; padding-bottom: 10px;">
                                    what is swagger
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-3" style="color: white; padding-bottom: 10px;">
                                    steps
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-4" style="color: white; padding-bottom: 10px;">
                                    go-swagger
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-6" style="color: white; padding-bottom: 10px;">
                                    add swagger annotations to rest api endpoints
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-7" style="color: white; padding-bottom: 10px;">
                                    generate swagger doc
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-8" style="color: white; padding-bottom: 10px;">
                                    visualize swagger doc
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-11" style="color: white; padding-bottom: 10px;">
                                    swaggerui
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="padding-bottom: 10px;">
                                    <span style="font-weight: bold; color: #aaabbb;">code snippets</span>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-1" style="color: white; padding-bottom: 10px;">
                                                api overview
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-2" style="color: white; padding-bottom: 10px;">
                                                steps
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-3" style="color: white; padding-bottom: 10px;">
                                                install go-swagger
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-4" style="color: white; padding-bottom: 10px;">
                                                generate swagger spec
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-8" style="color: white; padding-bottom: 10px;">
                                                api implementation thus far
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-9" style="color: white; padding-bottom: 10px;">
                                                go-swagger meta annotation
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-15" style="color: white; padding-bottom: 10px;">
                                                swagger annotation for get endpoint
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-16" style="color: white; padding-bottom: 10px;">
                                                complete swagger annotations
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-17" style="color: white; padding-bottom: 10px;">
                                                generated full swagger file
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-21" style="color: white; padding-bottom: 10px;">
                                                access swaggerui via uri
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-22" style="color: white; padding-bottom: 10px;">
                                                start the server
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
                                para="Integrate Swagger to Go rest apis"
                        />
                        <ArticleBodyPara
                                id="nav-title-2"
                                style="font-weight: bold; font-size: 25px"
                                para="What is Swagger"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Have you ever come across a situation where you have implemented set of apis to be used by
                                other components but find it difficult to explain. Things such as what’s the URI, what’s the request
                                payload looks like, what are the HTTP status codes to be expected and so on. Other engineers might
                                also asked you to send curl commands or Postman collections to get an idea about the Apis."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Swagger provides a better way to overcome some of the main challengers when it comes to develop APIs.
                                It provides a set of tools to make the best use of APIs. One way to deal with the above mentioned limitation
                                in APIs is to provide an API documentation where anyone can get the full picture of how to use it,
                                or in best case scenario, the ability to interact with the API spec. Thus API consumers know what to expect
                                and how to work with it."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Swagger provides multiple options when dealing with APIs. But what we want is to be able to provide an API documentation.
                                That is to provide an API spec for our previously implemented go RESTful APIs."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="What we have is a set of APIs written in go,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-1"
                                lang="go"
                                code='
                                    [app.go]
                                    package main
                                    ...
                                    func main() {
                                       r := mux.NewRouter()
                                       r.HandleFunc("/accounts", createAccountHandler).Methods("POST")
                                       r.HandleFunc("/accounts/{id}", getAccountHandler).Methods("GET")
                                       r.HandleFunc("/accounts/{id}",deleteAccountHandler)
                                        .Methods("DELETE)
                                       log.Fatal(http.ListenAndServe(":8080", r))
                                    }
                                    ...
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="We want it to be accessible to any consumer, by making it look something like this,"
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A4-1.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Steps to follow in order to create a swagger documentation for our go REST APIs is as follows,"
                        />
                        <ArticleBodyPara
                                id="nav-title-3"
                                style="font-weight: bold; font-size: 25px"
                                para="Steps"
                        />
                        <ArticleBodyPara>
                            <div style="font-size: 18px; padding-left: 20px">
                                <p>1. Add swagger annotations to our go rest api endpoints</p>
                                <p>2. Generate swagger doc — swagger.json</p>
                                <p>3. visualize swagger doc (swagger.json) using SwaggerUI</p>
                            </div>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Prerequisites"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="We should have a tool to complete Steps 1 and 2, which is to generate a swagger.json files from a predefined set of annotations written to describe our api endpoints.
                                Developers coming from Spring, Spring Boot background, should be familiar with annotations such as @ApiOperation, @ApiResponses and etc. Similarly, there should be a tool in
                                golang which supports similar sort of api annotations, once executed, generates a swagger.json file which then can be visualized via SwaggerUI."
                        />
                        <ArticleBodyPara
                                id="nav-title-4"
                                style="font-weight: bold; font-size: 25px"
                                para="Go-Swagger"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="A golang implementation of Swagger 2.0, which provides several swagger specific features in go. It includes generating go servers and clients from swagger spce and what matters to us,
                                is the ability to generate a swagger specification from go annotated code."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-2"
                                lang="markdown"
                                code='
                                    [Steps]
                                    go-swagger --------------> swagger.json --------------> SwaggerUI
                                                 (generate)                   (visualize)
                                '
                        />
                        <ArticleBodyPara
                                id="nav-title-5"
                                style="font-weight: bold; font-size: 25px"
                                para="install go swagger"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="There are many ways to install go-swagger (source), but herein used the following approach."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-3"
                                lang="go"
                                code='
                                    go get -u github.com/go-swagger/go-swagger/cmd/swagger
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="This will add the swagger dependency to bin folder."
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A4-2.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Check whether go-swagger works by running the following command"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-4"
                                lang="go"
                                code='
                                    swagger generate spec -o ./swagger.json
                                '
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px"><strong>Note:</strong> make sure that swagger executable could be accessible when executing the above statement.</p>
                        </ArticleBodyPara>
                        <ArticleBodyCode
                                id="nav-snippet-5"
                                lang="go"
                                code='
                                    Ex: if your current location is outsider bin folder,
                                    go
                                      /bin
                                         |-- swagger
                                      /pkg
                                      /src
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="execute the above as"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-6"
                                lang="go"
                                code='
                                    $ bin/swagger generate spec -o ./swagger.json
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Above will generate a swagger.json file, but since we didn’t add any go specific annotations to our code,
                                it will only include something similar to,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-7"
                                lang="markdown"
                                code='
                                   [swagger.json]
                                    {
                                       "swagger": "2.0",
                                       "paths": {}
                                    }
                                    [File Path]
                                    go
                                      /bin
                                         |-- swagger
                                      /pkg
                                      /src
                                      |--swagger.json
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="With swagger.json file been created, we know that go-swagger works as intended. Now It’s time to add annotations to our go REST endpoints."
                        />
                        <ArticleBodyPara
                                id="nav-title-6"
                                style="font-weight: bold; font-size: 25px"
                                para="1. Add swagger annotations to rest api endpoints"
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                From the previous article (<router-link to="/everything-you-need-to-know-about-go-restful-endpoints-v00004">PART III</router-link>),
                                we’ve completed our REST endpoints. The full source code is as follows,
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyCode
                                id="nav-snippet-8"
                                lang="go"
                                code='
                                   [app.go]
                                    package main
                                    import (
                                       "encoding/json"
                                       "log"
                                       "net/http"
                                       "github.com/gorilla/mux"
                                    )
                                    //Account Json request payload is as follows,
                                    //{
                                    //  "id": "1",
                                    //  "first_name": "james",
                                    //  "last_name":  "bolt",
                                    //  "user_name":  "james1234"
                                    //}
                                    type Account struct {
                                       ID        string `json:"id"`
                                       FirstName string `json:"first_name"`
                                       LastName  string `json:"last_name"`
                                       UserName  string `json:"user_name"`
                                    }
                                    var accountMap map[string]Account
                                    func init() {
                                       accountMap = make(map[string]Account)
                                    }
                                    func main() {
                                       r := mux.NewRouter()
                                       r.HandleFunc("/accounts", createAccountHandler).Methods("POST")
                                       r.HandleFunc("/accounts/{id}", getAccountHandler).Methods("GET")
                                       r.HandleFunc("/accounts/{id}",deleteAccountHandler)
                                        .Methods("DELETE)
                                       log.Fatal(http.ListenAndServe(":8080", r))
                                    }
                                    func createAccountHandler(w http.ResponseWriter, r *http.Request) {
                                       log.Print("Request received to create an Account")

                                       var account Account
                                       json.NewDecoder(r.Body).Decode(&account)
                                       id := account.ID
                                       accountMap[id] = account
                                       log.Print("Successfully created the Account ", account)
                                       w.Header().Add("Content-Type", "application/json")
                                       w.WriteHeader(http.StatusCreated)
                                       json.NewEncoder(w).Encode(account)
                                    }
                                    func getAccountHandler(w http.ResponseWriter, r *http.Request) {
                                       params := mux.Vars(r)
                                       id := params["id"]
                                       log.Print("Request received to get an account by account id: "
                                          ,id)
                                       account, key := accountMap[id]
                                       w.Header().Add("Content-Type", "application/json")
                                       if key {
                                         log.Print("Successfully retrieved the account ", account, " for
                                             account id: ", id)
                                         w.WriteHeader(http.StatusOK)
                                         json.NewEncoder(w).Encode(account)
                                       } else {
                                         log.Print("Requested account is not found for account id: ",id)
                                         w.WriteHeader(http.StatusNotFound)
                                         json.NewEncoder(w)
                                       }
                                    }
                                    func deleteAccountHandler(w http.ResponseWriter, r *http.Request) {
                                       log.Print("Request received to delete an Account by account id")
                                       //add your own flavor to this function :)
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Will start adding go-swagger specific annotations to the above code, which will then be used to generate the swagger.json api spec."
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                If you want a detailed overview of go-swagger provided annotations, refer the guide (
                                <a href="https://goswagger.io/use/spec.html">source</a>). First will start adding annotations to get the API spec meta information.
                            </p>
                        </ArticleBodyPara>
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A4-3.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Add go-swagger meta annotations to our go source file."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-9"
                                lang="go"
                                code='
                                   [app.go]
                                    // Package classification Account API.
                                    //
                                    // this is to show how to write RESTful APIs in golang.
                                    // that is to provide a detailed overview of the language specs
                                    //
                                    // Terms Of Service:
                                    //
                                    //     Schemes: http, https
                                    //     Host: localhost:8080
                                    //     Version: 1.0.0
                                    //     Contact: Supun Muthutantri<mydocs@example.com>
                                    //
                                    //     Consumes:
                                    //     - application/json
                                    //
                                    //     Produces:
                                    //     - application/json
                                    //
                                    //     Security:
                                    //     - api_key:
                                    //
                                    //     SecurityDefinitions:
                                    //     api_key:
                                    //          type: apiKey
                                    //          name: KEY
                                    //          in: header
                                    //
                                    // swagger:meta
                                    package main
                                    import (
                                       "encoding/json"
                                       "log"
                                       "net/http"
                                       "github.com/gorilla/mux"
                                    )
                                    ...
                                '
                        />
                        <ArticleBodyPara
                                id="nav-title-7"
                                style="font-weight: bold; font-size: 25px"
                                para="2. Generate swagger doc"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Execute the following command to generate the swagger.json file."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-10"
                                lang="markdown"
                                code='
                                   $ bin/swagger generate spec -o ./swagger.json
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="The generated swagger.json file for the annotations we specified is as follows,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-11"
                                lang="markdown"
                                code='
                                   [swagger.json]
                                    consumes:
                                      - application/json
                                    produces:
                                      - application/json
                                    schemes:
                                      - http
                                      - https
                                    swagger: "2.0"
                                    info:
                                    description: |-
                                    the purpose of this application is to show how to write RESTful APIs in golang.
                                    that is to provide a detailed overview of the language specs
                                    title: Account API.
                                    contact:
                                    name: Supun Muthutantri
                                    email: mydocs@example.com
                                    version: 1.0.0
                                    host: localhost:8080
                                    paths: {}
                                    securityDefinitions:
                                    api_key:
                                    type: apiKey
                                    name: KEY
                                    in: header
                                    security:
                                    - api_key: []
                                '
                        />
                        <ArticleBodyPara
                                id="nav-title-8"
                                style="font-weight: bold; font-size: 25px"
                                para="3. visualize swagger doc"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Swagger.io has an online editor for us to visualize swagger specifications.
                                You just have to provide a json or yaml file similar to what was generated in step 2."
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                Copy the above specification in swagger.json and paste it in the
                                <a href="https://editor.swagger.io/">editor</a>
                            </p>
                        </ArticleBodyPara>
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A4-4.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="You can use this editor to visualize the generated API spec and improve it until you get the final version."
                        />
                        <ArticleBodyPara
                                id="nav-title-9"
                                style="font-weight: bold; font-size: 25px"
                                para="4. Iterate steps 1, 2 and 3 till you get the full API spec"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Will continue adding annotations to our go REST endpoints. Let’s add go-swagger annotations to the GET endpoint."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-12"
                                lang="go"
                                code='
                                   [app.go]
                                    ...
                                    func main() {
                                       ...
                                       // swagger:operation GET /accounts/{id} accounts getAccount
                                       // ---
                                       // summary: Return an Account provided by the id.
                                       // description: If the account is found, account will be returned
                                       else Error Not Found (404) will be returned.
                                       // parameters:
                                       // - name: id
                                       //   in: path
                                       //   description: id of the account
                                       //   type: string
                                       //   required: true
                                       // responses:
                                       //   "200":
                                       //     "$ref": "#/responses/accountRes"
                                       //   "400":
                                       //     "$ref": "#/responses/badReq"
                                       //   "404":
                                       //     "$ref": "#/responses/notFoundReq"
                                       r.HandleFunc("/accounts/{id}", getAccountHandler).Methods("GET")
                                       ...
                                    }
                                    ...
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="As you can see, we have added annotations above GET handler function which looks like comments.
                                Whether the endpoint it GET, POST or DELETE the structure remains more or less similar."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Things to note"
                        />
                        <ArticleBodyPara>
                            <div style="font-size: 18px">
                                <ul>
                                    <li><strong>swagger:operation →</strong>Links a path to the method <a href="https://goswagger.io/use/spec/operation.html">source</a></li>
                                </ul>
                            </div>
                        </ArticleBodyPara>
                        <ArticleBodyCode
                                id="nav-snippet-13"
                                lang="go"
                                code='
                                   swagger:operation [method] [path pattern] [?tag1 tag2 tag3] [operation id]
                                '
                        />
                        <ArticleBodyPara>
                            <div style="font-size: 18px">
                                <ul>
                                    <li><strong>parameters →</strong>URL parameters, in our case it’s the description of {id} in /accounts/{id}</li>
                                </ul>
                            </div>
                        </ArticleBodyPara>
                        <ArticleBodyPara>
                            <div style="font-size: 18px">
                                <ul>
                                    <li><strong>responses →</strong>Description of endpoint responses, it mentions the status codes, error messages and response payloads.</li>
                                </ul>
                            </div>
                        </ArticleBodyPara>
                        <ArticleBodyPara>
                            <div style="font-size: 18px">
                                <ul>
                                    <li><strong>$ref →</strong>Relates to responses, links to the annotated structs.</li>
                                </ul>
                            </div>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="$ref should contain all the response structs annotated in a similar way. Here Response codes for 200,
                                400 and 404 should contain separate annotated structs for accountRes, badReq and notFoundReq."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-14"
                                lang="go"
                                code='
                                   [Preparing accountRes]
                                    [Annotated Account struct]
                                    // Account request model
                                    type Account struct {
                                       // Id of the account
                                       ID string `json:"id"`
                                       // First Name of the account holder
                                       FirstName string `json:"first_name"`
                                       // Last Name of the account holder
                                       LastName string `json:"last_name"`
                                       // User Name of the account holder
                                       UserName string `json:"user_name"`
                                    }
                                    [Annotated accountRes response struct]
                                    // Account response payload
                                    // swagger:response accountRes
                                    type swaggAccountRes struct {
                                       // in:body
                                       Body Account
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="As you can see, in order to define the swagger annotations for response codes and response payloads we have created a separate struct swaggAccountRes."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Complete annotations for our GET endpoint is as follows,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-15"
                                lang="go"
                                code='
                                   [app.go]
                                    ...
                                    // Account request model
                                    type Account struct {
                                       // Id of the account
                                       ID string `json:"id"`
                                       // First Name of the account holder
                                       FirstName string `json:"first_name"`
                                       // Last Name of the account holder
                                       LastName string `json:"last_name"`
                                       // User Name of the account holder
                                       UserName string `json:"user_name"`
                                    }
                                    // Account response payload
                                    // swagger:response accountRes
                                    type swaggAccountRes struct {
                                       // in:body
                                       Body Account
                                    }
                                    // Error Bad Request
                                    // swagger:response badReq
                                    type swaggReqBadRequest struct {
                                       // in:body
                                       Body struct {
                                          // HTTP status code 400 -  Bad Request
                                          Code int `json:"code"`
                                       }
                                    }
                                    // Error Not Found
                                    // swagger:response notFoundReq
                                    type swaggReqNotFound struct {
                                       // in:body
                                       Body struct {
                                          // HTTP status code 404 -  Not Found
                                          Code int `json:"code"`
                                       }
                                    }
                                    ...
                                    func main() {
                                    ...
                                    // swagger:operation GET /accounts/{id} accounts getAccount
                                       // ---
                                       // summary: Return an Account provided by the id.
                                       // description: If the account is found, account will be returned
                                       else Error Not Found (404) will be returned.
                                       // parameters:
                                       // - name: id
                                       //   in: path
                                       //   description: id of the account
                                       //   type: string
                                       //   required: true
                                       // responses:
                                       //   "200":
                                       //     "$ref": "#/responses/accountRes"
                                       //   "400":
                                       //     "$ref": "#/responses/badReq"
                                       //   "404":
                                       //     "$ref": "#/responses/notFoundReq"
                                       r.HandleFunc("/accounts/{id}", getAccountHandler).Methods("GET")
                                    ...
                                    }
                                    ...
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="For ease of referencing I have bold the reference structs in the above code snippet.
                                Similarly, you can add annotations to POST and DELETE endpoints as well."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Once completed the go endpoints with the annotations will look as follows,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-16"
                                lang="go"
                                code='
                                   [app.go]
                                    ...
                                    // Account request model
                                    type Account struct {
                                       // Id of the account
                                       ID string `json:"id"`
                                       // First Name of the account holder
                                       FirstName string `json:"first_name"`
                                       // Last Name of the account holder
                                       LastName string `json:"last_name"`
                                       // User Name of the account holder
                                       UserName string `json:"user_name"`
                                    }
                                    // Account response payload
                                    // swagger:response accountRes
                                    type swaggAccountRes struct {
                                       // in:body
                                       Body Account
                                    }
                                    // Success response
                                    // swagger:response okResp
                                    type swaggRespOk struct {
                                       // in:body
                                       Body struct {
                                          // HTTP status code 200 - OK
                                          Code int `json:"code"`
                                       }
                                    }
                                    // Error Bad Request
                                    // swagger:response badReq
                                    type swaggReqBadRequest struct {
                                       // in:body
                                       Body struct {
                                          // HTTP status code 400 -  Bad Request
                                          Code int `json:"code"`
                                       }
                                    }
                                    // Error Not Found
                                    // swagger:response notFoundReq
                                    type swaggReqNotFound struct {
                                       // in:body
                                       Body struct {
                                          // HTTP status code 404 -  Not Found
                                          Code int `json:"code"`
                                       }
                                    }
                                    ...
                                    func main() {
                                       r := mux.NewRouter()
                                       // swagger:operation POST /accounts/ accounts createAccount
                                       // ---
                                       // summary: Creates a new account.
                                       // description: If account creation is success, account will be
                                       returned with Created (201).
                                       // parameters:
                                       // - name: account
                                       //   description: account to add to the list of accounts
                                       //   in: body
                                       //   required: true
                                       //   schema:
                                       //     "$ref": "#/definitions/Account"
                                       // responses:
                                       //   "200":
                                       //     "$ref": "#/responses/okResp"
                                       //   "400":
                                       //     "$ref": "#/responses/badReq"
                                       r.HandleFunc("/accounts", createAccountHandler).Methods("POST")
                                       // swagger:operation GET /accounts/{id} accounts getAccount
                                       // ---
                                       // summary: Return an Account provided by the id.
                                       // description: If the account is found, account will be returned
                                       else Error Not Found (404) will be returned.
                                       // parameters:
                                       // - name: id
                                       //   in: path
                                       //   description: id of the account
                                       //   type: string
                                       //   required: true
                                       // responses:
                                       //   "200":
                                       //     "$ref": "#/responses/accountRes"
                                       //   "400":
                                       //     "$ref": "#/responses/badReq"
                                       //   "404":
                                       //     "$ref": "#/responses/notFoundReq"
                                       r.HandleFunc("/accounts/{id}", getAccountHandler).Methods("GET")
                                       // swagger:operation DELETE /accounts/{id} accounts deleteAccount
                                       // ---
                                       // summary: Deletes requested account by account id.
                                       // description: Depending on the account id, HTTP Status Not
                                       Found (404) or HTTP Status OK (200) may be returned.
                                       // parameters:
                                       // - name: id
                                       //   in: path
                                       //   description: account id
                                       //   type: string
                                       //   required: true
                                       // responses:
                                       //   "200":
                                       //     "$ref": "#/responses/okResp"
                                       //   "400":
                                       //     "$ref": "#/responses/badReq"
                                       //   "404":
                                       //     "$ref": "#/responses/notFoundReq"
                                       r.HandleFunc("/accounts/{id}",
                                         deleteAccountHandler).Methods("DELETE")
                                    }
                                    ...
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now execute swagger generation command."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-17"
                                lang="go"
                                code='
                                   $ bin/swagger generate spec -o ./swagger.json
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Which will generate the following swagger.json file."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-18"
                                lang="go"
                                code='
                                   [swagger.json]
                                    consumes:
                                      - application/json
                                    produces:
                                      - application/json
                                    schemes:
                                      - http
                                      - https
                                    swagger: "2.0"
                                    info:
                                      description: |-
                                        the purpose of this application is to show how to write RESTful APIs in golang
                                        that is to provide a detailed overview of the language specs
                                      title: Account API.
                                      contact:
                                        name: Supun Muthutantri
                                        email: mydocs@example.com
                                      version: 1.0.0
                                    host: localhost:8080
                                    paths:
                                      /accounts/:
                                        post:
                                          description: "If account creation is success, account will be returned with Created (201)."
                                          tags:
                                            - accounts
                                          summary: Creates a new account.
                                          operationId: createAccount
                                          parameters:
                                            - description: account to add to the list of accounts
                                              name: account
                                              in: body
                                              required: true
                                              schema:
                                                $ref: "#/definitions/Account"
                                          responses:
                                            "200":
                                              $ref: "#/responses/okResp"
                                            "400":
                                              $ref: "#/responses/badReq"
                                      "/accounts/{id}":
                                        get:
                                          description: "If the account is found, account will be returned else Error Not Found (404) will be returned."
                                          tags:
                                            - accounts
                                          summary: Return an Account provided by the id.
                                          operationId: getAccount
                                          parameters:
                                            - type: string
                                              description: id of the account
                                              name: id
                                              in: path
                                              required: true
                                          responses:
                                            "200":
                                              $ref: "#/responses/accountRes"
                                            "400":
                                              $ref: "#/responses/badReq"
                                            "404":
                                              $ref: "#/responses/notFoundReq"
                                        delete:
                                          description: "Depending on the account id, HTTP Status Not Found (404) or HTTP Status OK (200) may be returned."
                                          tags:
                                            - accounts
                                          summary: Deletes requested account by account id.
                                          operationId: deleteAccount
                                          parameters:
                                            - type: string
                                              description: account id
                                              name: id
                                              in: path
                                              required: true
                                          responses:
                                            "200":
                                              $ref: "#/responses/okResp"
                                            "400":
                                              $ref: "#/responses/badReq"
                                            "404":
                                              $ref: "#/responses/notFoundReq"
                                    definitions:
                                      Account:
                                        description: Account request model
                                        type: object
                                        properties:
                                          first_name:
                                            description: First Name of the account holder
                                            type: string
                                            x-go-name: FirstName
                                          id:
                                            description: Id of the account
                                            type: string
                                            x-go-name: ID
                                          last_name:
                                            description: Last Name of the account holder
                                            type: string
                                            x-go-name: LastName
                                          user_name:
                                            description: User Name of the account holder
                                            type: string
                                            x-go-name: UserName
                                        x-go-package: app
                                    responses:
                                      accountRes:
                                        description: Account response payload
                                        schema:
                                          $ref: "#/definitions/Account"
                                      badReq:
                                        description: Error Bad Request
                                        schema:
                                          type: object
                                          properties:
                                            code:
                                              description: HTTP status code 400 -  Bad Request
                                              type: integer
                                              format: int64
                                              x-go-name: Code
                                      forbiddenReq:
                                        description: Error Forbidden
                                        schema:
                                          type: object
                                          properties:
                                            code:
                                              description: HTTP status code 403 -  Forbidden
                                              type: integer
                                              format: int64
                                              x-go-name: Code
                                      notFoundReq:
                                        description: Error Not Found
                                        schema:
                                          type: object
                                          properties:
                                            code:
                                              description: HTTP status code 404 -  Not Found
                                              type: integer
                                              format: int64
                                              x-go-name: Code
                                      okResp:
                                        description: Success response
                                        schema:
                                          type: object
                                          properties:
                                            code:
                                              description: HTTP status code 200 - OK
                                              type: integer
                                              format: int64
                                              x-go-name: Code
                                    securityDefinitions:
                                      api_key:
                                        type: apiKey
                                        name: KEY
                                        in: header
                                    security:
                                      - api_key: []
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="You can use the generated swagger.json file to visualize the API spec using Swagger editor."
                        />
                        <ArticleBodyPara
                                id="nav-title-10"
                                style="font-weight: bold; font-size: 25px"
                                para="Interact with SwaggerUI and execute api’s via swaggerUI"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Up until now we have been able to generate the swagger.json and visualize using swagger editor.
                                In order to be able to serve the swagger spec within our application, will use swaggerUI."
                        />
                        <ArticleBodyPara
                                id="nav-title-11"
                                style="font-weight: bold; font-size: 25px"
                                para="SwaggerUI"
                        />
                        <ArticleBodyPara>
                            <div style="font-size: 18px; padding: 20px; border-left: 5px solid #7d7d69; background-color: #efefe8; font-family: Gotu Regular;">
                                <p>
                                    “Swagger UI allows anyone — be it your development team or your end consumers — to visualize and interact with the API’s resources without having any of
                                    the implementation logic in place. It’s automatically generated from your OpenAPI (formerly known as Swagger) Specification, with the visual documentation
                                    making it easy for back end implementation and client side consumption” - (<a href="https://swagger.io/tools/swagger-ui/">source</a>)
                                </p>
                            </div>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="With our swagger.json in place will use swaggerUI to make our API spec available via the same go server.
                                Will see how we can setup swaggerUI inside our code base to serve generated swagger.json file."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="1. Download and integrate SwaggerUI to our code base"
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px;">
                                Go to swagger-ui github page (<a href="https://github.com/swagger-api/swagger-ui">source</a>), and clone the repo
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara>
                            <p style="font-size: 18px;">
                                Copy the <strong>dist</strong> folder inside swagger-ui directory and paste it inside our go source folder src directory and rename it to <strong>swaggerui</strong>
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyCode
                                id="nav-snippet-19"
                                lang="go"
                                code='
                                   [go source folder]
                                    go
                                      /bin
                                      /pkg
                                      /src
                                        |--swaggerui (dist dir renamed to swaggerui)
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Copy previously generated swagger.json file in to swaggerui folder and change “swagger url” in index.html file inside swaggerui pointing to the swagger.json file."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-20"
                                lang="go"
                                code='
                                   [index.html]
                                    ...
                                        window.onload = function() {
                                          // Begin Swagger UI call region
                                          const ui = SwaggerUIBundle({
                                            url: "./swagger.json",
                                            dom_id: "#swagger-ui",
                                            deepLinking: true,
                                            presets: [
                                                SwaggerUIBundle.presets.apis,
                                                SwaggerUIStandalonePreset
                                            ],
                                            plugins: [
                                                SwaggerUIBundle.plugins.DownloadUrl
                                            ],
                                            layout: "StandaloneLayout"
                                        })
                                    ...
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="2. Change our code base to access swaggerui via URI"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-21"
                                lang="go"
                                code='
                                   [app.go]
                                    ...
                                    func main() {
                                       ...
                                       fs := http.FileServer(http.Dir("./swaggerui"))
                                       r.PathPrefix("/swaggerui/").Handler
                                         (http.StripPrefix("/swaggerui/", fs))
                                       log.Fatal(http.ListenAndServe(":8080", r))
                                    }
                                    ...
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="3. Run go application which will start the internal go server"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-22"
                                lang="go"
                                code='
                                   $ go run app.go
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="4. Navigate to the browser and view swaggerui."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="http://localhost:8080/swaggerui/"
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A4-5.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="You can trigger the endpoints via swaggerui and witness how it works."
                        />

                        <ArticleBodyPara
                                style="font-size: 15px"
                                para="- End -"
                        />
                        <ArticleBodyTags
                                :tags="['swagger', 'api']"
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
                                        published="Apr 21, 2019"
                                        title="Everything you need to know about creating a RESTful Api in Go — Part II"
                                        subtitle="detailed overview on how to make the go endpoints restful"
                                        :tags="['restful', 'endpoints']"
                                        card-no=5
                                        article-no="article_v00004"
                                        card-style="background: linear-gradient(90deg, #141e30 0%, #243b55 100%); box-shadow: 0 2px 4px 0 rgba(0,0,0,.15); flex: 0 0 350px; flex-grow: 1; max-width: 300px; max-height: 350px; padding-bottom: 25px"
                                />
                                <ArticleCard
                                        published="Apr 15, 2019"
                                        title="Everything you need to know about creating a RESTful Api in Go — Part IV"
                                        subtitle="detailed overview on integrating a postgresSQL database"
                                        :tags="['database', 'postgres']"
                                        card-no=7
                                        article-no="article_v00006"
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
        name: "ArticleBody_4",
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
