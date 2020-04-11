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
                    <div id="scroll-style"  class="col-xs-12 col-sm-12 col-md-12" style="overflow-y: auto; height: 80vh;">
                        <ul class="nav flex-column" style="flex-wrap: wrap">
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-1" style="color: white; padding-bottom: 10px;">
                                    consume external rest services
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="padding-bottom: 10px;">
                                    <span style="font-weight: bold; color: #aaabbb;">code snippets</span>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-1" style="color: white; padding-bottom: 10px;">
                                                service layer package structure
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-2" style="color: white; padding-bottom: 10px; ">
                                                get employee endpoint
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-3" style="color: white; padding-bottom: 10px; ">
                                                post employee endpoint
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-4" style="color: white; padding-bottom: 10px; ">
                                                service layer implementation
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-5" style="color: white; padding-bottom: 10px;">
                                                controller layer implementation
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
                    <div class="content-pad col-xs-8 col-sm-8 col-md-8" >
                        <ArticleBodyPara
                                id="nav-title-1"
                                style="font-weight: bold; font-size: 25px"
                                para="Go Consume external rest services"
                        />

                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Most of the API’s that are there requires consuming other external APIs within the application.
                                Depending on the complexity, an application may consume multiple external services as required.
                                This article is about learning how to make our go application consume external API endpoints which could be a GET, POST, PUT, PATCH or DELETE."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="First will discuss the service layer, then integrate the service layer with the application control layer and finally trigger our application
                                endpoints through POSTMAN to see our implementation in action."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Let’s create the service layer. Will create a separate package to host service implementations."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-1"
                                lang="go"
                                code='
                                    [Folder structure]
                                    go/
                                      |_ bin
                                      |_ pkg
                                      |_ src
                                           |_ app
                                                |_ app.go
                                           |_ service
                                                |_ employeeService.go
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="What’s bold above is the new package for our application. Here, employeeService is responsible for client side implementation of the external
                                API we are going to consume. For ease, I’ll be using an already available dummy API which can be found in here. I’ll be describing about integrating
                                Get all employee data and create a new employee REST API endpoints."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-2"
                                lang="go"
                                code='
                                    [employeeService.go]
                                    package service

                                    import (
                                       "bytes"
                                       "encoding/json"
                                       "io"
                                       "io/ioutil"
                                       "log"
                                       "net/http"
                                    )
                                    type Employees []Employee

                                    //Employee response object
                                    //{
                                    //  "id": "719",
                                    //  "employee_name": "test",
                                    //  "employee_salary": "123",
                                    //  "employee_age": "23",
                                    //  "profile_image": "",
                                    //}
                                    type Employee struct {
                                       Id     string `json:"id"`
                                       Name   string `json:"employee_name"`
                                       Salary string `json:"employee_salary"`
                                       Age    string `json:"employee_age"`
                                       Image  string `json:"profile_image"`
                                    }

                                    // simple GET implementation
                                    func DoSimpleGet() Employees {
                                       log.Print("Start fetching data from service")
                                       response, err :=
                                       http.Get("http://dummy.restapiexample.com/api/v1/employees")
                                       if err != nil {
                                         log.Panic(err.Error())
                                       }

                                       defer response.Body.Close()
                                       responseData, err := ioutil.ReadAll(response.Body)
                                       if err != nil {
                                        log.Fatal(err)
                                       }

                                       var res Employees
                                       json.Unmarshal(responseData, &res)
                                       log.Print("Data fetched from service: ", string(res))
                                       log.Print("Leaving fetch data from service")
                                       return res
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Function DoSimpleGet() implementation provides the details on integrating the GET endpoint. We’ve used the internal http package to consume
                                external services. Function http.GET(url string) requires passing the url parameter. Then we validate the output for any errors, next we should defer
                                response.Body.Close() which will close the response body once all the other tasks are done. Line, ioutil.ReadAll(response.Body) reads the returned values
                                in response.Body till the EOF and returns a []byte."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now we have a []byte which needs to map to a certain struct. We have created a struct called Employees
                                which is another struct comprised of a list of Employee structs. Line, json.Unmarshal(responseData, &res) takes the previously returned byte array and the address
                                location of Employees struct, then unmarshal data which will end up populating the Employees struct from the json response returned in the Get endpoint.
                                Finally we return the populated Employees struct."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Similarly, the function with the post request implementation is as follows,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-3"
                                lang="go"
                                code='
                                    [employeeService.go]
                                    ...
                                    // simple POST request
                                    func DoSimplePost() CreateEmployee {
                                       log.Print("Initiate post request to service")
                                       jsonData := map[string]string{"name": "name1115", "salary":
                                                   "123", "age": "23"}
                                       jsonValue, _ := json.Marshal(jsonData)
                                       response, err := http.Post(
                                                        "http://dummy.restapiexample.com/api/v1/create",
                                                        "application/json",
                                                        bytes.NewBuffer(jsonValue))
                                       if err != nil {
                                         log.Panic(err.Error())
                                       }
                                       data, err := ioutil.ReadAll(response.Body)
                                       if err != nil {
                                         log.Fatal(err)
                                       }
                                       var responseObject CreateEmployee
                                       json.Unmarshal(data, &responseObject)
                                       log.Print("Data created from service: ", responseObject)
                                       return responseObject
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="The difference in post request is the payload and header values we send. Here, we’ve hard coded the request payload (body).
                                Json payload is generated via a string key, value map, which is then marshalled using json.Marshal(). Compared to get method, http.Post()
                                requires passing contentyType and body parameters along with the url. Other parts of the method are more or less the same as in the get method,
                                where once the post request is sent, it accepts the response, unmarshal it and populate the createEmployee struct."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="When looking at both get and post methods, it is clear that there are some common expressions used. Such as, post method contains two extra
                                parameters compared to get and other error handling and unmarshalling can be considered common to both approaches."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="We can extract the common parts and restructure above code as follows,"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-4"
                                lang="go"
                                code='
                                    [employeeService.go]
                                    package service
                                    import (
                                       "bytes"
                                       "encoding/json"
                                       "io"
                                       "io/ioutil"
                                       "log"
                                       "net/http"
                                    )
                                    type Employees []Employee
                                    //Create Employee response object
                                    //{
                                    //  "id": "719",
                                    //  "name": "test",
                                    //  "salary": "123",
                                    //  "age": "23",
                                    //}
                                    type CreateEmployee struct {
                                       Id     string `json:"id"`
                                       Name   string `json:"name"`
                                       Salary string `json:"salary"`
                                       Age    string `json:"age"`
                                    }
                                    //Employee response object
                                    //{
                                    //  "id": "719",
                                    //  "employee_name": "test",
                                    //  "employee_salary": "123",
                                    //  "employee_age": "23",
                                    //  "profile_image": "",
                                    //}
                                    type Employee struct {
                                       Id     string `json:"id"`
                                       Name   string `json:"employee_name"`
                                       Salary string `json:"employee_salary"`
                                       Age    string `json:"employee_age"`
                                       Image  string `json:"profile_image"`
                                    }
                                    // get request
                                    func DoGet() Employees {
                                       log.Print("Start fetching data from service")
                                       response := doApiRequest(
                                                     "GET",
                                                     "http://dummy.restapiexample.com/api/v1/employees",
                                                      nil
                                                   )
                                       var responseObject Employees
                                       json.Unmarshal(response, &responseObject)
                                       log.Print("Data fetched from service: ", responseObject)
                                       return responseObject
                                    }
                                    // post request
                                    func DoPost() CreateEmployee {
                                       log.Print("Start create request")
                                       jsonData := map[string]string{"name": "test10", "salary": "123",
                                                                     "age": "23"}
                                       jsonValue, _ := json.Marshal(jsonData)
                                       response := doApiRequest(
                                                        "POST",
                                                        "http://dummy.restapiexample.com/api/v1/create",
                                                        bytes.NewBuffer(jsonValue)
                                                   )
                                       var responseObject CreateEmployee
                                       json.Unmarshal(response, &responseObject)
                                       log.Print("Data received from post request: ", responseObject)
                                       return responseObject
                                    }
                                    // common method
                                    func doApiRequest(method string, url string, body io.Reader) []byte {
                                       client := &http.Client{}
                                       req, err := http.NewRequest(method, url, body)
                                       if err != nil {
                                         log.Panic(err.Error())
                                       }
                                       req.Header.Add("Accept", "application/json")
                                       req.Header.Add("Content-Type", "application/json")
                                       response, err := client.Do(req)
                                       if err != nil {
                                         log.Panic(err.Error())
                                       }
                                       defer response.Body.Close()
                                       responseData, err := ioutil.ReadAll(response.Body)
                                       if err != nil {
                                         log.Fatal(err)
                                       }
                                       log.Print("Return service response: ", string(responseData))
                                       return responseData
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para='I have restructured the previous code to create a common method which can be used whether it is a Get, Post, Put, Patch or Delete.
                                The common method doApiRequest uses a http.Client{} which takes a http.NewRequest where we can pass the method as a string. For our get method
                                NewRequest contains the method name "Get", url and the body parameter as nil (since GET doesn’t contain a request body in this case). In comparison,
                                the post method would contain the name as "Post", url and the body which would be passed in. Next, our common method assigns the header values.
                                Here, you can specify any header values required by the external service. A good practice is to pass the header values necessary per each http method,
                                which is hard coded in this instance. Once the request is ready, the service invocation happens by executing, client.Do(request). The rest of the method
                                is to get the response, convert it to a byte array to return to the source method.'
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="I have changed previously used two methods DoSimpleGet and DoSimplePost as DoGet and DoPost which uses the common doApiRequest method internally.
                                The primary objective of both DoGet and DoPost methods are to prepare the data which is required by the common method as well as handle its own
                                responsibility. Further, these two methods will be exposed to the controller layer."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now we have completed our service layer implementation, let’s create two new endpoints from the controller layer, which should use above created service
                                layer methods to invoke the external APIs."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-5"
                                lang="go"
                                code='
                                    [app.go]
                                    package main
                                    import (
                                       "encoding/json"
                                       "log"
                                       "net/http"
                                       "service"
                                       "github.com/gorilla/mux"
                                    )

                                    func main() {
                                       r := mux.NewRouter()
                                       r.HandleFunc("/employee", fetchEmployeeHandler).Methods("GET")
                                       r.HandleFunc("/employee", createEmployeeHandler).Methods("POST")
                                       ...
                                       log.Fatal(http.ListenAndServe(":8080", r))
                                    }

                                    func fetchEmployeeHandler(w http.ResponseWriter, r *http.Request) {
                                       log.Print("Request received to fetch list of employees")
                                       //fetch list of employees
                                       listOfEmployees := service.DoGet()
                                       w.Header().Add("Content-Type", "application/json")
                                       w.WriteHeader(http.StatusOK)
                                       json.NewEncoder(w).Encode(listOfEmployees)
                                    }

                                    func createEmployeeHandler(w http.ResponseWriter, r *http.Request) {
                                       log.Print("Request received to create an employee")
                                       //create employee
                                       employee := service.DoPost()
                                       w.Header().Add("Content-Type", "application/json")
                                       w.WriteHeader(http.StatusCreated)
                                       json.NewEncoder(w).Encode(employee)
                                    }
                                    ...
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Two handler methods fetchEmployeeHandler and createEmployeeHandler are used herein, which are exposed via new Get and Post REST API
                                endpoints of our application. The fetchEmployeeHandler method is responsible for invoking previously implemented DoGet method which will
                                return a list of Employees from the external service. Similarly, createEmployeeHandler method use DoPost service method to invoke the post
                                request which will create a new employee using the external API."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Let’s trigger our endpoints using Postman and see the results."
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A6-1.png" alt="image goes here">
                        </div>
                        <div>
                            <img class="img-fluid" src="../../../../assets/articles/A6-2.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="As you can see we get the responses from our application as intended which consumes the external APIs within the application."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="It’s the end of another article. Up until now we have completed most of the things that you would require when creating a Go REST API.
                                Thus far we’ve learnt,"
                        />
                        <ArticleBodyPara>
                            <ul>
                                <li>How to expose a simple API</li>
                                <li>How to integrate swagger documentation</li>
                                <li>How to connect to a database</li>
                                <li>How to consume a 3rd party REST API’s within our go application.</li>
                            </ul>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="For now that’s it. See you soon with another article."
                        />
                        <ArticleBodyPara
                                style="font-size: 15px"
                                para="- End -"
                        />
                        <ArticleBodyTags
                                :tags="['3rd party', 'json', 'rest']"
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
                                        published="Apr 15, 2019"
                                        title="Everything you need to know about creating a RESTful Api in Go — Part IV"
                                        subtitle="detailed overview on integrating a postgresSQL database"
                                        :tags="['database', 'postgres']"
                                        card-no=7
                                        article-no="article_v00006"
                                        card-style="background: linear-gradient(90deg, #141e30 0%, #243b55 100%); box-shadow: 0 2px 4px 0 rgba(0,0,0,.15); flex: 0 0 350px; flex-grow: 1; max-width: 300px; max-height: 350px; padding-bottom: 25px"
                                />
                                <!--                                <ArticleCard-->
                                <!--                                        published="May 06, 2019"-->
                                <!--                                        title="Go Concurrency, things to know"-->
                                <!--                                        subtitle="everything you need to know about go concurrency"-->
                                <!--                                        :tags="['goroutines', 'channels']"-->
                                <!--                                        card-no=9-->
                                <!--                                        article-no="article_v00008"-->
                                <!--                                        card-style="background: linear-gradient(90deg, #141e30 0%, #243b55 100%); box-shadow: 0 2px 4px 0 rgba(0,0,0,.15); flex: 0 0 350px; flex-grow: 1; max-width: 300px; max-height: 350px; padding-bottom: 25px"-->
                                <!--                                />-->
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
        name: "ArticleBody_6",
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
