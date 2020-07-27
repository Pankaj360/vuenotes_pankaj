<template>
  <div class="hello">
    <video width="720" height="360" controls>
  <source src="../assets/Fake News, Mob Lynchings Aur Vikas - Stand-up Comedy by Punit Pania.mp4">

  Your browser does not support the video tag.
</video>
    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
export default {
  name: 'laugh',
  data () {
    return {
      msg: 'Welcome to Your comic page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
