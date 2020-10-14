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

  <br><button @click="page--" v-if="page != 1">Prev</button><a :href="ad.url">{{ad.url}}</a>
    <button @click="page++" v-if="page < totalPages">Next</button>
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
      page: 1,
      totalPages: 1,
      ad: {
        company: null,
        text: null,
        url: null
      }
    }
  },
  methods: {
    getData: function () {
      this.regApi.getData(this.page).then(data => {
        this.ad.company = data.data.ad.company
        this.ad.text = data.data.ad.text
        this.ad.url = data.data.ad.url
        this.personMass = data.data.data
        this.totalPages = data.data.total_pages
      })
    }
  },
  created () {
    this.getData()
  },
  watch: {
    page () {
      this.getData()
    }
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
