<template>
  <div class="icon-wrapper">
    <svg class="icon" :width="width" :height="height">
      <use v-bind="{'xlink:href': '/icons.svg#' + name}" />
    </svg>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: 'alert',
    },
    width: {
      type: [Number, String],
      default: 20,
    },
    height: {
      type: [Number, String],
      default: 20,
    },
  },
}
</script>

<style>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin-right: 6px;
}
</style>
