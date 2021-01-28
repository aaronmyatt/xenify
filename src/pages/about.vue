<script lang="tsx">
import { ref, defineComponent } from 'vue'
import Layout from "../components/Layout.vue";

export default defineComponent({
  name: 'Index',
  render(){
    return <div>
        <Layout></Layout>
    </div>
  },
  components: {
      Layout
  },
  setup: () => {
  }
})
</script>