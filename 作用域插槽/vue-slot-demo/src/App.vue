<template>
  <div id="app">
    <!-- <slot-demo title="游戏">
      <template scope="abc">
        <ul>
          <li v-for="(item ,index) in abc.games" :key="index">
            {{item}}
          </li>
        </ul>
      </template>
    </slot-demo>
    <slot-demo title="游戏">
     <template scope="abc">
        <ol>
          <li v-for="(item ,index) in abc.games" :key="index">
            {{item}}
          </li>
        </ol>
      </template>
    </slot-demo>
    <slot-demo title="游戏">
      <template scope="abc">
        <h4>
          <li v-for="(item ,index) in abc.games" :key="index">
            {{item}}
          </li>
        </h4>
      </template>
    </slot-demo> -->
    <Count></Count>
    <hr>
    <Person></Person>
  </div>
</template>

<script>
// import SlotDemo from './components/Slotdemo'
import Count from './components/Count'
import Person from './components/Person'
export default {
  name: 'App',
  components: {
    // 'slot-demo': SlotDemo,
    Count,
    Person
  }
}
</script>

<style scoped>
</style>
