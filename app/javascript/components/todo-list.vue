<template>
  <ul>
    <li v-for="item in listItems">{{item.name}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      listItems:[
        {name: "Item 1"},
        {name: "Item 2"},
        {name: "Item 3"},
        {name: "Item 4"},
        {name: "Item 6"}
      ]
    }
  }
}
</script>

<style scoped>
  
</style>
