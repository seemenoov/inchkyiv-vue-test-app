<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  name: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: null,
  },
  value: {
    type: [String, Number, Boolean],
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const isChecked = computed(() => {
  return props.modelValue === props.value;
});
</script>

<template>
  <label class="radio">
    <input
      class="radio__input"
      type="radio"
      :name="name"
      :disabled="disabled"
      :value="value"
      :checked="isChecked"
      @change="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="label" class="radio__label">{{ label }}</span>
  </label>
</template>

<style lang="scss">
.radio {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
