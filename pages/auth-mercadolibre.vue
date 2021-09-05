<script>
export default {
  asyncData ({ redirect }) {
    const mercadolibreUrl = process.env.mercadolibreUrl
    const mercadolibreClientId = process.env.mercadolibreClientId
    const url = `${mercadolibreUrl}/authorization?response_type=code&client_id=${mercadolibreClientId}`
    redirect(url)
    return null
  }
}
</script>
