<template>
  <div class="d-flex flex-column justify-content-center align-items-center m-4">
    <MosshiLogo />
    <MosshiTrademark />
    <h1 class="text-center my-4">
      Redirect...
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
  },
  mounted () {
    this.init()
  },
  methods: {
    getCode () {
      const { query: { code } } = this.$route
      return code
    },
    async sendCode (code) {
      const moshiApi = process.env.moshiApi
      const body = JSON.stringify({ code })
      const options = { method: 'POST', body }
      const { redirect } = await fetch(moshiApi, options)
      return redirect
    },
    redirect (redirect) {
      if (redirect) {
        this.$router.push({ path: '/' })
      }
    },
    init () {
      const code = this.getCode()

      if (code) {
        const redirect = this.sendCode(code)
        this.redirect(redirect)
      }
    }
  }
}
</script>
