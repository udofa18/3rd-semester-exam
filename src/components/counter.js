import { useStore } from "vuex";
import { computed } from "vue";

const useCounter = () => {
  const store = useStore();
  const counter = computed(() => store.getters.counter);

  function increment() {
    store.dispatch("increment");
  }
  function decrease() {
    store.dispatch("decrease");
  }
  function reset() {
    store.dispatch("reset");
  }
  function setValue(payload) {
    store.dispatch("setValue", payload);
  }
  return { counter, increment, decrease, reset, setValue };
};
export default useCounter;
