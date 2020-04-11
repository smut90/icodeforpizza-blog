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
                                <a class="nav-link" href="#nav-title-1" style="color: white; padding-bottom: 10px; ">
                                    go rest endpoints
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-2" style="color: white; padding-bottom: 10px; ">
                                    handle routing, gorilla/mux
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-3" style="color: white; padding-bottom: 10px; ">
                                    expected api spec
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-4" style="color: white; padding-bottom: 10px; ">
                                    createAccountHandler
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-5" style="color: white; padding-bottom: 10px; ">
                                    postman for post call
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-6" style="color: white; padding-bottom: 10px; ">
                                    server logs for post call
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-7" style="color: white; padding-bottom: 10px; ">
                                    getAccountHandler
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-8" style="color: white; padding-bottom: 10px; ">
                                    When account is found
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-9" style="color: white; padding-bottom: 10px; ">
                                    When account is not found
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-10" style="color: white; padding-bottom: 10px; ">
                                    deleteAccountHandler
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="color: whitesmoke; padding-bottom: 10px;">
                                    <span style="font-weight: bold; color: #aaabbb;">code snippets</span>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-1" style="color: white; padding-bottom: 10px; ">
                                                overview from prev article
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-2" style="color: white; padding-bottom: 10px; ">
                                                allow other http methods
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-3" style="color: white; padding-bottom: 10px; ">
                                                add gorilla/mux dependency
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-4" style="color: white; padding-bottom: 10px; ">
                                                improve multiple http methods support
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-5" style="color: white; padding-bottom: 10px; ">
                                                code skeleton for expected api spec
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-6" style="color: white; padding-bottom: 10px; ">
                                                account payload
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-7" style="color: white; padding-bottom: 10px; ">
                                                account struct
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-8" style="color: white; padding-bottom: 10px; ">
                                                add implementation details to createAccountHandler
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-9" style="color: white; padding-bottom: 10px; ">
                                                map request payload to struct
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-10" style="color: white; padding-bottom: 10px; ">
                                                placeholder data repository
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-11" style="color: white; padding-bottom: 10px; ">
                                                complete post rest endpoint
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-12" style="color: white; padding-bottom: 10px; ">
                                                entire code thus far
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-13" style="color: white; padding-bottom: 10px; ">
                                                complete get rest endpoint
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-14" style="color: white; padding-bottom: 10px; ">
                                                extract request params
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-15" style="color: white; padding-bottom: 10px; ">
                                                final code implementation
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
        <div class="content" style="font-family: Montserrat Regular">
            <div class="container-fluid">
                <div class="row">
                    <div class="content-pad col-xs-8 col-sm-8 col-md-8">
                        <ArticleBodyPara
                                id="nav-title-1"
                                style="font-weight: bold; font-size: 25px"
                                para="Go REST endpoints"
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                In the Previous article (<router-link to="/everything-you-need-to-know-about-go-internal-serve-v00003">PART I</router-link>)
                                we created an endpoint which didn’t do much but printed some stuff in the server console. The code snippet we used to start
                                the serve and accept request is as follows,
                            </p>
                        </ArticleBodyPara>
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
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now let’s say we want expose an endpoint other than a http “GET”. In the above code base, the handler function could only accept GET methods.
                                If we are to change this and allow other http methods, we need to do something like the following,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-2"
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
                                        if r.METHOD == "POST" {
                                            // post handler
                                        } else if r.r.METHOD == "GET"{
                                            // get handler
                                        }

                                        fmt.Println("Request came through to Home Page")
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="As you can see, identifying and dedicating to handlers in
                                this way seems less extensible and ugly. For this purpose there is a better 3rd party router and a dispatcher that we could make use of."
                        />
                        <ArticleBodyPara
                                id="nav-title-2"
                                style="font-weight: bold; font-size: 25px"
                                para="gorilla/mux to handle routing"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="This package implements a request router and a dispatcher, which routes the incoming requests to a handler based on the matching url.
                                To install the package type,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-3"
                                lang="go"
                                code='
                                    go get github.com/gorilla/mux
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now let’s improve the above code to support multiple http methods."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-4"
                                lang="go"
                                code='
                                    [app.go]
                                    package main
                                    import (
                                        "fmt"
                                        "log"
                                        "net/http"
                                        "github.com/gorilla/mux"
                                    )
                                    func main()  {
                                        r := mux.NewRouter()
                                        r.HandleFunc("/", homePageHandler).Methods("GET")
                                        r.HandleFunc("/", homePageHandlerPost).Methods("POST")

                                        log.Fatal(http.ListenAndServe(":8080", r))
                                    }
                                    func homePageHandler(w http.ResponseWriter, r *http.Request) {
                                        fmt.Println("Request came through to Home Page Get method")
                                    }
                                    func homePageHandlerPost(w http.ResponseWriter, r *http.Request) {
                                        fmt.Println("Request came through to Home Page Post method")
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="When you run the application and execute POST and GET calls subsequently, you will get the following output,
                                which shows that the router is working as expected."
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A3-1.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                id="nav-title-3"
                                style="font-weight: bold; font-size: 25px"
                                para="Let’s rethink our scenario for a better API spec"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Let’s consider an Account flow and come up with a proper API spec. Our api will do following tasks,"
                        />
                        <ArticleBodyPara>
                            <ul>
                                <li><strong>POST</strong> /accounts: create an account</li>
                                <li><strong>GET</strong> /accounts/{id}: return an account by account id</li>
                                <li><strong>DELETE</strong> /account/{id}: delete an account by account id</li>
                            </ul>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now, will change our code to support above functionalities."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-5"
                                lang="go"
                                code='
                                    [app.go]
                                    package main
                                    import (
                                        "log"
                                        "net/http"
                                        "github.com/gorilla/mux"
                                    )
                                    func main()  {
                                        r := mux.NewRouter()
                                        r.HandleFunc("/accounts", createAccountHandler).Methods("POST")
                                        r.HandleFunc("/accounts/{id}", getAccountHandler).Methods("GET")
                                        r.HandleFunc("/accounts/{id}", deleteAccountHandler)
                                         .Methods("DELETE")
                                        log.Fatal(http.ListenAndServe(":8080", r))
                                    }
                                    func createAccountHandler(w http.ResponseWriter, r *http.Request) {
                                        log.Print("Request received to create an Account")
                                    }
                                    func getAccountHandler(w http.ResponseWriter, r *http.Request) {
                                        log.Print("Request received to get an Account by account id")
                                    }
                                    func deleteAccountHandler(w http.ResponseWriter, r *http.Request) {
                                        log.Print("Request received to delete an Account by account id")
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="I have updated the fmt.Println function with log.Print, changed the handler methods and updated the routers as well.
                                When you run the server and trigger above endpoints separately via Postman, following logs can be seen in the server."
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A3-2.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                id="nav-title-4"
                                style="font-weight: bold; font-size: 25px"
                                para="createAccountHandler"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="This handler should expect an Account request json payload, and persist the account. Persisting the account can be
                                to a database or for the scope of this tutorial will be kept in-memory. The structure of the Account payload is as follows."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-6"
                                lang="go"
                                code='
                                    [Request Payload]
                                    Account {
                                       Number id
                                       String firstName
                                       String lastName
                                       String userName
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Let’s change our code base to accept a json payload as above and save it in memory, so that when we implement getAccountHandler,
                                we could fetch in-memory saved accounts."
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                A class in object-oriented paradigm is somewhat similar to a struct in Go but Go doesn’t allow inheritance but support composition (read more about structs -
                                <a href="https://www.callicoder.com/golang-structs/">source</a>). We should create an Account struct to hold account related information.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyCode
                                id="nav-snippet-7"
                                lang="go"
                                code='
                                    [Request Payload]
                                    Account {
                                       Number id
                                       String firstName
                                       String lastName
                                       String userName
                                    }
                                    [Equivalent Account struct]
                                    type Account struct {
                                       id int8 `json:"ref"`
                                       firstName string `json:"first_name"`
                                       lastName string `json:"last_name"`
                                       userName string `json:"user_name"`
                                    }
                                '
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                Note that json tags for each field (`json:”first_name”`, `json:”last_name”`, etc.) specifies how these fields will appear in the Account json request payload (read more —
                                <a href="https://godoc.org/encoding/json">source</a>).
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                I have updated the <strong>createAccountHandler</strong> function with the following implementation details,
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyCode
                                id="nav-snippet-8"
                                lang="go"
                                code='
                                    import (
                                      "encoding/json"
                                      ...
                                    )
                                    var accountMap map[string]Account
                                    func init() {
                                       accountMap = make(map[string]Account)
                                    }
                                    ...
                                    func createAccountHandler(w http.ResponseWriter, r *http.Request){
                                       log.Print("Request received to create an Account")
                                       var account Account
                                       json.NewDecoder(r.Body).Decode(&account)
                                       id := account.ID
                                       accountMap[id] = account
                                       log.Print("Added the Account ", account, " to list of accounts ",
                                       accountMap)
                                    }
                                    ...
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Here I have imported go built-in json encoding decoding package to map Account json request payload to Account struct."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-9"
                                lang="go"
                                code='
                                    var account Account
                                    json.NewDecoder(r.Body).Decode(&account)
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="var account Account initialize a new memory location to hold Account data. In the next line, a Decoder reads a json payload and
                                (decodes) converts it into a go struct. Here NewDecoder(r.Body), returns a new decoder that reads from the incoming request payload.
                                On the other hand, func Decode reads the next json-encoded value, decodes it and stores it in the value pointed to (in this instance to account pointer)."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="So the line, json.NewDecoder(r.Body).Decode(&account) reads a json payload, decodes it and store it in the value pointed in (here &account refers to
                                a memory address of account)."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="The idea behind creating a map (key: account id, value: account struct) is to be able to fetch our accounts fast. Since we are not using any databases as of now,
                                we’ll store our data in-memory and retrieve in other operations such as getAccountHandler. I have only extracted the required code snippets which deals with initializing the map and populating it."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-10"
                                lang="go"
                                code='
                                    ...
                                    var accountMap map[string]Account
                                    func init() {
                                       accountMap = make(map[string]Account)
                                    }
                                    ...
                                    func createAccountHandler(w http.ResponseWriter, r *http.Request){
                                       ...
                                       id := account.ID
                                       accountMap[id] = account
                                       ...
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Line, var accountMap map[string]Account, declares a map which contains a string as its key and an Account struct as its value. Inside init() function,
                                we initialize the account map using make(map[string]Account)
                                else the map will be empty, so we won’t be able to populate it with data."
                        />
                        <ArticleBodyPara>
                            <div style="font-size: 18px; padding: 20px; border-left: 5px solid #7d7d69; background-color: #efefe8; font-family: Gotu Regular;">
                                <p>“The make function allocates and initializes a hash map data structure and returns a map value that points to it”. —</p>
                                <a href="https://blog.golang.org/maps">source</a>.
                            </div>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Line, id := account.ID, gets the incoming account id and assigns to String variable, id. Then, accountMap[id] = account, assigns the account struct to
                                accountMap where the key: id and value account."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="In order for our createAccountHandler function to be completed as a proper RESTful endpoint, we need to add the proper response headers and status code. Let’s update our code,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-11"
                                lang="go"
                                code='
                                    func createAccountHandler(w http.ResponseWriter, r *http.Request){
                                    ...
                                       log.Print("Added the Account ", account, " to list of accounts ",
                                       accountMap)
                                       w.Header().Add("Content-Type", "application/json")
                                       w.WriteHeader(http.StatusCreated)
                                       json.NewEncoder(w).Encode(account)
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Up until now we didn’t use the (w http.ResponseWriter) interface. Line w.Header().Add(“Content-Type”, “application/json”),
                                adds a response header and w.WriteHeader(http.StatusCreated), specifies the intended status code as 201 Created since this is a POST request which creates a resource."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="In line json.NewEncoder(w).Encode(account), json.NewEncoder(w) create a new encoder which writes to w. Our intention is to prepare the response by specifying proper headers,
                                status code and if required return the created payload as the response body. Line json.NewEncoder(w) will return the response header and status code. If we don’t want to return any
                                response payload as part of the response body, only this line is sufficient. Whereas line, Encode(account), converts the account struct to a json payload and returns as part of the
                                response along with header and status code."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="The entire code so far is as follows,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-12"
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
                                       log.Print("Request received to get an Account by account id")
                                    }
                                    func deleteAccountHandler(w http.ResponseWriter, r *http.Request) {
                                       log.Print("Request received to delete an Account by account id")
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Will execute postman and see what we get,"
                        />
                        <ArticleBodyPara
                                id="nav-title-5"
                                style="font-weight: bold; font-size: 25px"
                                para="Postman"
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A3-3.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                id="nav-title-6"
                                style="font-weight: bold; font-size: 25px"
                                para="Server Logs"
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A3-4.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="As you can see, running createAccountHandler POST method returns the intended response body along with 201 status code and headers."
                        />
                        <ArticleBodyPara
                                id="nav-title-7"
                                style="font-weight: bold; font-size: 25px"
                                para="getAccountHandler"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Steps we had to go though when implementing createAccountHandler was lengthy. Now we have to get whatever stored accounts.
                                Since we created a map to store created account, this section is all about accessing that map and return the account if found."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-13"
                                lang="go"
                                code='
                                    ...
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
                                    ...
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Following code snippet, extracts the path variable in incoming URI <host>/accounts/1 and assigns it to id in <host>/accounts/{id}."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-14"
                                lang="go"
                                code='
                                    params := mux.Vars(r)
                                    id := params["id"]
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Line, account, key := accountMap[id], access the account map with the id specified in the incoming URL. Here, account in {account, key}
                                gets the account struct stored in the accountMap and key gets a true or false value depending on whether the key is found or not."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="The rest of the code in getAccountHandler is to return account with status code 200 OK if found in the map, or 404 Not Found if not found in the map."
                        />
                        <ArticleBodyPara
                                id="nav-title-8"
                                style="font-weight: bold; font-size: 25px"
                                para="When account is found"
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A3-5.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                id="nav-title-9"
                                style="font-weight: bold; font-size: 25px"
                                para="When account is not found"
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A3-6.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                id="nav-title-10"
                                style="font-weight: bold; font-size: 25px"
                                para="deleteAccountHandler"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="The final function is to remove a resource from the list of accounts if found.
                                Similar to what we did in createAccountHandler and getAccountHandler, you can complete implementing deleteAccountHandler on your own."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="What we have implemented so far is as follows,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-15"
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
                                para="So, this is the end of a lengthy article, Next will see how to expose the API spec via swagger."
                        />
                        <ArticleBodyPara
                                style="font-size: 15px"
                                para="- End -"
                        />
                        <ArticleBodyTags
                                :tags="['restful', 'endpoints']"
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
                                    published="Apr 15, 2019"
                                    title="Everything you need to know about creating a RESTful Api in Go — Part I"
                                    subtitle="detailed overview on go internal server"
                                    :tags="['internal', 'server']"
                                    card-no=4
                                    article-no="article_v00003"
                                    card-style="background: linear-gradient(90deg, #141e30 0%, #243b55 100%); box-shadow: 0 2px 4px 0 rgba(0,0,0,.15); flex: 0 0 350px; flex-grow: 1; max-width: 300px; max-height: 350px; padding-bottom: 25px"
                                />
                                <ArticleCard
                                        published="Apr 21, 2019"
                                        title="Everything you need to know about creating a RESTful Api in Go — Part III"
                                        subtitle="detailed overview on integrating swagger"
                                        :tags="['swagger', 'api']"
                                        card-no=4
                                        article-no="article_v00005"
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
        name: "ArticleBody_3",
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
