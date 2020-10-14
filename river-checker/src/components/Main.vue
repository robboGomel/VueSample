<template>
  <div>
    <h1>{{ad.company}}</h1>
    <h3>{{ad.text}}</h3>
    <Person  v-for ="person in personMass"
            :key="person.email"
            :avatar="person.avatar"
            :first-name="person.first_name"
            :last-name="person.last_name"
            :email="person.email">
    </Person>
  <br><a :href="ad.url">{{ad.url}}</a>
  </div>
</template>

<script>
import Reg from '../lib/api/River'
import Person from './PersonCard'
export default {
  name: 'Main',
  components: {
    Person
  },
  data () {
    return {
      regApi: new Reg(),
      personMass: [],
      ad: {
        company: null,
        text: null,
        url: null
      }
    }
  },
  methods: {
    getData: function () {
      this.regApi.getData(1).then(data => {
        this.ad.company = data.data.ad.company
        this.ad.text = data.data.ad.text
        this.ad.url = data.data.ad.url
        this.personMass = data.data.data
        console.log(this.personMass)
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>

<style scoped>

h1{
  color: #d2511e;
}
h3{
  color: coral;
}
span{
  color: #154088;
  font-weight: bold;
  border-bottom: 1px dashed;
}
a:link {
  color: #497DDD;
  font-weight: bold;
  border-bottom: 1px dashed;
}
a:visited {
  color: #2656e5;
}
a:hover {
  color: #154088;
  border-bottom: .07em solid;
}
a:active {
  color: #2656e5;
  border-bottom: 1px dashed;
}
</style>
