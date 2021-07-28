<template>
  <div class="d-flex flex-column justify-content-center align-items-center m-4">
    <MosshiLogo />
    <MosshiTrademark />
    <h1 class="text-center my-4">
      Work in progress
    </h1>
  </div>
</template>

<script>
import MosshiLogo from '@/components/MosshiLogo.vue'
import MosshiTrademark from '@/components/MosshiTrademark.vue'
export default {
  components: {
    MosshiTrademark,
    MosshiLogo
  }
}
</script>
