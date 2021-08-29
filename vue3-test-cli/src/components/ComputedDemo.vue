<template>
  <div class="ComputedDemo">
    <div>
      姓：<input type="text" v-model="person.firstName"><br>
      名：<input type="text" v-model="person.lastName">
    </div>
    <div>
       <!-- <span>姓名： {{ fullName }}</span> -->
       <span>姓名： {{ person.fullName }}</span>
    </div>
  </div>
</template>
<script>
import { reactive, computed } from 'vue'
export default {
  name: 'computedDemo',
  // vue2中computed中的写法
  // computed: {
  //   fullName () {
  //     return this.person.firstName + '-'+ this.person.lastName
  //   }
  // },
  setup () {
    let person = reactive({
      firstName: '张',
      lastName: '三'
    })
    // person.fullName = computed(()=> {
    //   return person.firstName + '-'+ person.lastName
    // })
    person.fullName = computed({
       get () {
        return person.firstName + '-'+ person.lastName
      },
      set (val) {
        // console.log(val)
        let nameArr = val.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
    return {
      person
    }
  }
}
</script>
<style scoped>
</style>