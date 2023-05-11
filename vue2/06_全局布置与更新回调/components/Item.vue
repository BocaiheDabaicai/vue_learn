<template>
  <li>
    <label>
      <input type="checkbox" :checked="itemObj.done" @click="change(itemObj.id)">
      <span v-show="!itemObj.isEdit">{{ itemObj.name }}</span>
      <input type="text" :value="itemObj.name" @blur="setItemObj(itemObj,$event)" v-show="itemObj.isEdit" ref="innerTitle">
    </label>
    <button @click="editItem(itemObj)" v-show="!itemObj.isEdit">编辑当前项</button>
    <button @click="throwObj(itemObj.id)">删除当前项</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "Item",
  props: ['itemObj', 'changeDone', 'deleteDone'],
  methods: {
    change(id) {
      this.changeDone(id)
    },
    throwObj(id) {
      console.log(id)
      this.deleteDone(id)
    },
    editItem(itemObj) {
      this.$set(itemObj, 'isEdit', true)
      this.$nextTick(function () {
        this.$refs.innerTitle.focus()
      })
    },
    setItemObj(itemObj, e) {
      // console.log('changeName', itemObj.id, e.target.value)
      if (!e.target.value.trim()) return alert('输入不能为空')
      // pubsub.publish('changeName', e.target.value)
      this.$bus.$emit('changeName',itemObj.id,e.target.value)
      itemObj.isEdit = false
    }
  }
}
</script>

<style scoped>
li button {
  display: none
}

li:hover {
  background-color: antiquewhite;
}

li:hover button {
  display: block;
}
</style>