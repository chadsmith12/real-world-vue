<template>
  <div>
    <h1>Ooops!</h1>
    <h3>The {{resource}} you're looking for was not found.</h3>
    <router-link :to="{name: 'event-list'}">Take me back home</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>
