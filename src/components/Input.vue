<script lang="ts" setup>
import { computed } from "vue";
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
});
const emit = defineEmits(["update:modelValue"]);

const model = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <label class="input" :class="{ _error: message }">
    <span>{{ label }}</span>
    <input type="text" v-bind="$attrs" v-model="model" />
    <span v-if="message">
      {{ message }}
    </span>
  </label>
</template>

<style lang="scss">
.input {
  display: flex;
  flex-direction: column;

  &._error {
    input {
      border-color: red;
    }
  }

  input {
    padding: 10px 6px;
    border: 1px solid #000;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
}
</style>
