<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #141e30; opacity: 0.9">
        <img src="../../assets/mainLogo-light.png" width="80" height="80" class="d-inline-block align-top" alt="">
<!--        <img src="../../assets/mainLogo-dark.png" width="80" height="80" class="d-inline-block align-top" alt="">-->
        <a class="navbar-brand" href="/home" style="font-family: Poppins SemiBold; font-size: 20px; color: rgb(107, 107, 93);">
            icodeforpizza
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" style="font-family: Gotu Regular;">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" @click.stop.prevent="setActiveTab('home')">
                    <router-link class="nav-link" to="/home">
                        <p style="color: #7d7d69; padding-bottom: 0; margin-bottom: 0;">
                            Home
<!--                            <span v-if="activeTab === 'home'">-->
<!--                                <hr class="animated zoomIn faster" style="margin-top: 0; margin-bottom: 0; padding-top: 0; border-top: 3px solid #dcd0c2">-->
<!--                            </span>-->
                        </p>
                    </router-link>
                </li>
                <li class="nav-item" @click.stop.prevent="setActiveTab('go')">
                    <router-link class="nav-link" to="/everything-you-need-to-know-about-go-packages-v00002">
                        <p style="color: #7d7d69; padding-bottom: 0; margin-bottom: 0;">
                            Go
<!--                            <span v-if="activeTab === 'go'">-->
<!--                                <hr class="animated zoomIn faster" style="margin-top: 0; margin-bottom: 0; padding-top: 0; border-top: 3px solid #dcd0c2">-->
<!--                            </span>-->
                        </p>
                    </router-link>
                </li>
                <li class="nav-item" @click.stop.prevent="setActiveTab('react')">
                    <router-link class="nav-link" to="/everything-you-need-to-know-about-react-app-v00001">
                        <p style="color: #7d7d69; padding-bottom: 0; margin-bottom: 0;">
                            React
<!--                            <span v-if="activeTab === 'react'">-->
<!--                                <hr class="animated zoomIn faster" style="margin-top: 0; margin-bottom: 0; padding-top: 0; border-top: 3px solid #dcd0c2">-->
<!--                            </span>-->
                        </p>
                    </router-link>
                </li>
                <li class="nav-item" @click.stop.prevent="setActiveTab('about')">
                    <router-link class="nav-link" to="/about-me" >
                        <p style="color: #7d7d69; padding-bottom: 0; margin-bottom: 0;">
                            About
<!--                            <span v-if="activeTab === 'about'">-->
<!--                                <hr class="animated zoomIn faster" style="margin-top: 0; margin-bottom: 0; padding-top: 0; border-top: 3px solid #dcd0c2">-->
<!--                            </span>-->
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavDesign01",
        data() {
            return {
                activeTab: 'home'
            }
        },
        methods: {
            setActiveTab(tab) {
                this.activeTab = tab;
            },
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: "Poppins SemiBold";
        src: url("../../assets/Poppins-SemiBold.ttf");
    }
    @font-face {
        font-family: "Gotu Regular";
        src: url("../../assets/Gotu-Regular.ttf");
    }
    .header-area {
        max-width: 100%;
        min-height: 8vh;
        margin-right: auto;
        margin-left: auto;
    }
    .navbar-area {
        max-width: 60%;
        min-height: 8vh;
        margin-right: auto;
        margin-left: auto;
    }
    .active{
        border-bottom: 3px solid #dcd0c2;
    }
    .non-active {
        border-bottom: none;
    }
</style>
