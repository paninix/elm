<template>
  <div>
    <topBar></topBar>
    <router-view/>
  </div>
</template>

<script>
  import topBar from '@/components/common/topBar'
  export default {
    components: {
      topBar
    },
    data() {
      return {};
    },
    methods: {}
  };
</script>

<style lang="less">

</style>
