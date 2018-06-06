<template>
  <div>
    <p>{{ message }}</p>
    <p class="test"> Some static text</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue! changed!"
    }
  }
}
</script>

<style scoped>
  p {
    font-size: 2em;
    text-align: center;
  }
</style>
