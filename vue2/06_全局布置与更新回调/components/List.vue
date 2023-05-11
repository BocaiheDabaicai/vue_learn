<template>
  <div>
    <ul>
      <Item v-for="(itemObj) in tables" :key="itemObj.id" :itemObj="itemObj" :changeDone="changeDone" :deleteDone="deleteDone"></Item>
    </ul>
  </div>
</template>

<script>
import Item from "@/components/Item";

export default {
  name: "List",
  components: {Item},
  props:['tables','changeDone','deleteDone']
}
</script>

<style scoped>

</style>