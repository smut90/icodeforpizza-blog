<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'I Code for Pizza',
    // all titles will be injected into this template
    titleTemplate: '%s | I Code for Pizza'
  }
}
</script>

<style>
</style>
