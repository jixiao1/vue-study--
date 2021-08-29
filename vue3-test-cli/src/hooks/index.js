import { onMounted, reactive, onBeforeUnmount } from 'vue'
function usePoint () {
  let point = reactive({
    x: 0,
    y: 0
  })
  function savePoint(event) {
    // console.log("event对象", event.pageX)
    point.x = event.pageX
    point.y = event.pageY
  }
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', savePoint)
  })
  return point
}
export default usePoint
