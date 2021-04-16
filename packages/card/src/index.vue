<template>
  <div class="mt-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'">
    <div v-if="$slots.header || header" class="mt-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="mt-card__body" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MtCard',
  props: {
    header: {
      type: String,
      default: '',
    },
    bodyStyle: {
      type: [String, Object, Array],
      default: '',
    },
    shadow: {
      type: String,
      default: '',
    },
  },
})
</script>
