<template>
    <div class="card">
          <div class="avatar">
            <img :src="avatar" alt="">
          </div>
      <div>{{firstName}} {{lastName}}</div>
      <div><a :href="email">{{email}}</a></div>
    </div>
</template>

<script>
export default {
  name: 'PersonCard',
  props: {
    avatar: null,
    firstName: null,
    lastName: null,
    email: null
  }
}
</script>

<style scoped>
  .card{
    border-radius: 15px;
    background: rgba(200,200,200,0.5);
    color: #060d98;
    font-weight: bold;
    width: 250px;
    margin: 20px;
    height: 170px;
    padding: 5px;
    display: inline-block;
    transition: .3s;
  }
  :hover.card {
    transform: scale(1.1, 1.1);
  }
</style>
