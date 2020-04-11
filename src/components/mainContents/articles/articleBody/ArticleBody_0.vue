<template>
    <div class="article-body">
        <div class="left-sidebar " style="color: #141e30;">
            <div class="container d-none d-md-block" style="background-color: #25274d; height: 100vh; padding: 6vh 10px 10px; font-family: Montserrat Regular">
                <div class="row">
                    <div class="col-xs-10 col-sm-10 col-md-10">
                        <p style="font-weight: bold; color: #aaabbb">Navigate the page</p>
                    </div>
                </div>
                <div class="row" >
                    <div id="scroll-style" class="col-xs-1 col-sm-6 col-md-12" style="overflow-y: auto; height: 80vh;">
                        <ul class="nav flex-column" style="flex-wrap: wrap">
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-1" style="color: white; padding-bottom: 10px;">
                                    what to expect
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-2" style="color: white; padding-bottom: 10px;">
                                    prerequisites
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-3" style="color: white; padding-bottom: 10px;">
                                    step 1
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-4" style="color: white; padding-bottom: 10px;">
                                    step 2
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-5" style="color: white; padding-bottom: 10px;">
                                    step 3
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-6" style="color: white; padding-bottom: 10px;">
                                    step 4
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#nav-title-7" style="color: white; padding-bottom: 10px;">
                                    step 5
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" style="color: whitesmoke; padding-bottom: 10px;">
                                    <span style="font-weight: bold; color: #aaabbb;">code snippets</span>
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-1" style="color: white; padding-bottom: 10px;">
                                                create app
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-2" style="color: white; padding-bottom: 10px;">
                                                hello world
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-3" style="color: white; padding-bottom: 10px;">
                                                import component
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-4" style="color: white; padding-bottom: 10px;">
                                                install google login
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-5" style="color: white; padding-bottom: 10px;">
                                                google login component
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-6" style="color: white; padding-bottom: 10px;">
                                                add login component to main file
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-7" style="color: white; padding-bottom: 10px;">
                                                integrate external api
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-8" style="color: white; padding-bottom: 10px;">
                                                integrate external api
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-9" style="color: white; padding-bottom: 10px;">
                                                integrate google login with external api call
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#nav-snippet-10" style="color: white; padding-bottom: 10px;">
                                                beautify app
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
                                style="font-size: 18px"
                                para="Building a practical react app, step by step guide"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="In order to create the basic react framework, will be using create-react-app which is originally published by Facebook"
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                <strong>Note:</strong> Implementations done in each step is included as separate a branch. Use my Github Project to follow along: (<a href="https://github.com/smut90/react-app">link</a>)
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                id="nav-title-1"
                                style="font-weight: bold; font-size: 25px"
                                para="What to expect"
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px; padding-left: 25px">
                                <strong>Step1:</strong> How to get things started by creating a basic react skeleton.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara>
                            <p style="font-size: 18px; padding-left: 25px">
                                <strong>Step2:</strong> How to start adding components.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara>
                            <p style="font-size: 18px; padding-left: 25px">
                                <strong>Step3:</strong> How to create a login component for users to login, using a social login such as google, facebook and etc.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara>
                            <p style="font-size: 18px; padding-left: 25px">
                                <strong>Step4:</strong> How to execute an api call to a backend service from your react application.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara>
                            <p style="font-size: 18px; padding-left: 25px">
                                <strong>Step5:</strong> How to beautify your application using bootstrap and bootstrap templates.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                id="nav-title-2"
                                style="font-weight: bold; font-size: 18px"
                                para="Prerequisites"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="1. Install npx : npm i npx"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="2. Install create-react-app: npm i create-react-app"
                        />
                        <ArticleBodyPara
                                id="nav-title-3"
                                style="font-weight: bold; font-size: 18px"
                                para="Step 1"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Create basic framework using create-react."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Command to execute: npx create-react-app {your-app-name}"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-1"
                                lang="markdown"
                                code="npx create-react-app react-app"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="This will create the basic framework including the following folder structure"
                        />

                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A0-1.png" alt="image goes here">
                        </div>

                        <ArticleBodyQuote
                                section-style="border-left: 5px solid #7d7d69; background-color: #efefe8"
                                para-style="font-size: 18px; padding: 25px; font-family: Gotu Regular;"
                                para="In order to fetch changes, checkout to step1 - git checkout step1"
                        />
                        <ArticleBodyPara
                                id="nav-title-4"
                                style="font-weight: bold; font-size: 18px"
                                para="Step 2"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Let’s clean this code and get things started. From the above code base, remove files in src folder except index.js and App.js files."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Will start by creating a small hello world component."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Add the following code snippet to App.js file. Here we are importing React from react library and creating a class called App by extending React.Component."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-2"
                                lang="js"
                                code="
                                    import React from 'react';

                                    export default class App extends React.Component {

                                        render() {
                                            return (
                                                <div>
                                                    <h1>Hello World</h1>
                                                    <p>This is my first react component</p>
                                                </div>
                                            );
                                        }

                                    }
                                "
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Let’s import this component in to the main index.js file, so it can be rendered and will be able to see the output"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-3"
                                lang="js"
                                code="
                                    import React from 'react';
                                    import ReactDOM from 'react-dom';
                                    import App from './App'

                                    ReactDOM.render(<App/>, document.getElementById('root'));
                                "
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now that the files are ready, let’s start the server. Execute yarn start to start the server which will start the local server
                                instance listening to default port 3000"
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A0-2.png" alt="image goes here">
                        </div>
                        <ArticleBodyQuote
                                section-style="border-left: 5px solid #7d7d69; background-color: #efefe8"
                                para-style="font-size: 18px; padding: 25px; font-family: Gotu Regular;"
                                para="In order to fetch changes, checkout to step2 - git checkout step2"
                        />
                        <ArticleBodyPara
                                id="nav-title-5"
                                style="font-weight: bold; font-size: 18px"
                                para="Step 3"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Let’s spicy things up a little. Will create a simple social login application which uses sign up using google.
                                First will create the frontend portion of it and then see how fetched information from google can be sent to a backend service via an Api call."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="First install the Google oAUth Sign-in / Log-in Component for React."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-4"
                                lang="markdown"
                                code="npm i react-google-login"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Create a new file (Google.js) in src folder and copy the following code snippet"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-5"
                                lang="js"
                                code='
                                    import React from "react";
                                    import { GoogleLogin } from "react-google-login";
                                    import { GoogleLogout } from "react-google-login";

                                    export default class Google extends React.Component {
                                        render() {
                                            const onLoginSuccess = (response) => {
                                                console.log("Successfully logged in as: ", response.w3.ofa, response.w3.wea);
                                            };

                                            const onLoginFailure = (response) => {
                                                console.log("Login Failed", response);
                                            };

                                            const onLogoutSuccess = () => {
                                                console.log("Successfully logged out!");
                                            };

                                            return (
                                                <div>
                                                    <GoogleLogin
                                                        clientId="REPLACE-WITH-YOUR-REGISTERED-APP-ID"
                                                        buttonText="Login"
                                                        onSuccess={onLoginSuccess}
                                                        onFailure={onLoginFailure}
                                                    />
                                                    <GoogleLogout
                                                        buttonText="Logout"
                                                        onLogoutSuccess={onLogoutSuccess}
                                                    >
                                                    </GoogleLogout>
                                                </div>
                                            );
                                        }
                                    }
                                '
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                Obtain a valid client Id (which should replace ”REPLACE-WITH-YOUR-REGISTERED-APP-ID”) by following (<a href="https://developers.google.com/identity/sign-in/web/sign-in?authuser=4">link</a>)
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyQuote
                                section-style="border-left: 5px solid #7d7d69; background-color: #efefe8"
                                para-style="font-size: 18px; padding: 25px; font-family: Gotu Regular;"
                                para="Use an environment variable to inject the client id to the component and should avoid declaring in line. This will provide much better security to your application."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Here, a console log is added to method onLoginSuccess to see the user of a successful login."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Change App.js file to incorporate newly added google login component"
                        />
                        <ArticleBodyCode
                                id="nav-snippet-6"
                                lang="js"
                                code="
                                    import React from 'react';
                                    import Google from './Google'

                                    export default class App extends React.Component {

                                        render() {
                                            return (
                                                <div>
                                                    <h1>Hello World</h1>
                                                    <p>Let's login!!</p>
                                                    <Google />
                                                </div>
                                            );
                                        }
                                    }
                                "
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Restart the server to check the newly included changes"
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A0-3.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Similarly pressing Logout will logout the user."
                        />
                        <ArticleBodyQuote
                                section-style="border-left: 5px solid #7d7d69; background-color: #efefe8"
                                para-style="font-size: 18px; padding: 25px; font-family: Gotu Regular;"
                                para="In order to fetch changes, checkout to step3 - git checkout step3"
                        />
                        <ArticleBodyPara
                                id="nav-title-6"
                                style="font-weight: bold; font-size: 18px"
                                para="Step 4"
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now that we receive oAuth signing information from google login components,
                                will mimic the process of using this information to execute a POST request to a backend server.
                                Here the main purpose is to make an API call from within our react application."
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                For this purpose, since there is no such backend service, I have used a dummy service to consume a working
                                endpoint which accepts a POST call (view more info on this service: <a href="https://jsonplaceholder.typicode.com/">link</a>).
                                Now that we have an working endpoint to do a POST call, lets implement the functionality.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Create a new file (Service.js), which will be used to execute the API call."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-7"
                                lang="js"
                                code='
                                    export const validateUser = (credentials) => {
                                        console.log("credentials to be sent to backend", credentials);
                                        fetch("https://jsonplaceholder.typicode.com/posts", {
                                            method: "POST",
                                            body: JSON.stringify({
                                                title: "foo",
                                                body: "bar",
                                                userId: 1
                                            }),
                                            headers: {
                                                "Content-type": "application/json; charset=UTF-8"
                                            }
                                        })
                                            .then(response => response.json())
                                            .then(json => console.log(json))
                                    };
                                '
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                Here, we have used <strong>fetch</strong>, which is a new powerful web API to make asynchronous requests (good write up on various
                                applications of fetch, <a href="https://www.freecodecamp.org/news/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa/">link</a>).
                                Note that we have not used the credentials object which includes google user login information which is required when there is a
                                service to consume this piece of information. This information can be easily included into the body section when required.
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Will call this js function from within our login component. Let’s change the Google.js file to included this function."
                        />
                        <ArticleBodyCode
                                id="nav-snippet-8"
                                lang="js"
                                code='
                                    ...//rest of the code
                                    import { validateUser } from "./Service"

                                    export default class Google extends React.Component {

                                        render() {
                                            const onLoginSuccess = (response) => {
                                                ...//rest of the code
                                                let credentials = {
                                                    firstName: response.w3.ofa,
                                                    lastName: response.w3.wea
                                                }
                                                validateUser(credentials);
                                            };
                                        ...//rest of the code
                                    }
                                '
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Now once logged in you’ll be able to see the POST request been sent."
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A0-4.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Above serve response ({title: “foo”, body: “bar”, userId: 1, id: 101}) in the image confirms
                                that it has reached the backend service. View the network call to see that the dummy service has accepted our POST request."
                        />
                        <ArticleBodyQuote
                                section-style="border-left: 5px solid #7d7d69; background-color: #efefe8"
                                para-style="font-size: 18px; padding: 25px; font-family: Gotu Regular;"
                                para="In order to fetch changes, checkout to step4 - git checkout step4"
                        />
                        <ArticleBodyPara
                                id="nav-title-7"
                                style="font-weight: bold; font-size: 18px"
                                para="Step 5"
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                It’s now time to make our app look visually appealing. From a basic skeleton to make our app look promising and beautify, we’ll use bootstrap for styling.
                                There are several ways to add styling to our react components (a good write up on how to style react components, <a href="https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822">link</a>).
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Lets, install few libraries before applying css styling to our application."
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                Add bootstrap an a dependency and import it into your file (read more: <a href="https://blog.logrocket.com/how-to-use-bootstrap-with-react-a354715d1121/">link</a>).
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyCode
                                id="nav-snippet-9"
                                lang="markdown"
                                code="npm install bootstrap --save"
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                Add fontawesome to include all types of symbols and awesome fonts (installation and usage: <a href="https://www.npmjs.com/package/react-fontawesome">link</a>).
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyCode
                                id="nav-snippet-10"
                                lang="markdown"
                                code="npm install react-fontawesome --save"
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                If you need modify or use an already existing custom bootstrap template, a great place to start would be, (<a href="https://pingendo.com/">link</a>).
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="I created a basic template using the above mentioned template builder tool. Then using the template html page, first identified which sections could be used as components and
                                created separate reusable react components out of each section. Next, css styling also separated into different files and imported and used within each component. Here, you are free
                                to use your own folder structure."
                        />
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="Once all the pieces are combined together, you’ll see something as follows."
                        />
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A0-6.png" alt="image goes here">
                        </div>
                        <div style="margin-bottom: 25px">
                            <img class="img-fluid" src="../../../../assets/articles/A0-7.png" alt="image goes here">
                        </div>
                        <ArticleBodyPara
                                style="font-size: 18px"
                                para="The social login components which we created earlier, will popup, once you click on the red Login button."
                        />
                        <ArticleBodyQuote
                                section-style="border-left: 5px solid #7d7d69; background-color: #efefe8"
                                para-style="font-size: 18px; padding: 25px; font-family: Gotu Regular;"
                                para="In order to fetch changes, checkout to step5 - git checkout step5"
                        />
                        <ArticleBodyPara>
                            <p style="font-size: 18px">
                                Use your creativity to come up with your own design. For now check out my latest code base and start experimenting (github: <a href="https://github.com/smut90/react-app">link</a>).
                            </p>
                        </ArticleBodyPara>
                        <ArticleBodyPara
                                style="font-size: 15px"
                                para="- End -"
                        />
                        <ArticleBodyTags
                                :tags="['react', 'bootstrap', 'google login']"
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
                                    title="Everything you need to know about Go packages"
                                    subtitle="detailed overview on go package structure"
                                    :tags="['packages', 'code']"
                                    card-no=3
                                    article-no="article_v00002"
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
        name: "ArticleBody_0",
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
