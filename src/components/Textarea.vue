<script setup lang="ts">
import { computed } from "vue";
defineOptions({
  inheritAttrs: false,
});

const emit = defineEmits(["update:modelValue"]);

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
  <label class="textarea">
    <span class="textarea__label">
      {{ label }}
    </span>
    <textarea
      class="textarea__input"
      :class="{ _error: message }"
      v-bind="$attrs"
      v-model="model"
    ></textarea>
    <span v-if="message">
      {{ message }}
    </span>
  </label>
</template>

<style lang="scss">
.textarea {
  &__input {
    width: 100%;
    padding: 12px;
    height: 100%;
    min-height: 84px;
    resize: none;
    color: #000;
    border-radius: 4px;
    border: 1px solid #000;
    transition: 0.3s border;

    &._error {
      border-color: red;
    }
  }
}
</style>
