<template>
  <div>
    <!-- <h1>This is {{ $route.params.username }}</h1>  this is before adding $route.params as a prop-->
    <h1>This is {{ username }}</h1>
  </div>
</template>

<script>
export default {
  props: ['username']
}
</script>
