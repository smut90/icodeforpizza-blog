<template>
  <div id="nav-home">
    <NavDesign />
    <HeaderDesign />
    <MainContent />
    <Footer />
  </div>
</template>

<script>
  import NavDesign from './topNavBars/NavDesign01'
  import HeaderDesign from './headers/HeaderDesign02'
  import MainContent from './mainContents/MainContent01'
  import Footer from './footers/FooterDesign01'

  export default {
    name: 'Home',
    props: {
      msg: String
    },
    components: {
      NavDesign,
      HeaderDesign,
      MainContent,
      Footer
    }

}
</script>

<style scoped>
</style>
