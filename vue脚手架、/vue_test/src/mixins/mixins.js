export let  a = {
  methods: {
    show () {
      console.log("改变num2222=====")
    }
  }
}
export let moa = {
  data () {
    return {
    x: 100,
    y: 200
    }
  },
  mounted() {
    console.log("mouted加载mixins")
  },
}