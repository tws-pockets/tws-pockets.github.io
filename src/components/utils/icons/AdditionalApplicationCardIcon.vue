<script>
export default {
  name: "AdditionalApplicationCardIcon",
};
</script>
<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
    <defs>
      <mask id="ipSTipsOne0">
        <g fill="none" stroke-linecap="round" stroke-width="4">
          <path
            :fill="$vuetify.theme.current.colors['card-icon-color']"
            stroke="white"
            stroke-linejoin="round"
            d="M44 8H4v30h15l5 5l5-5h15z"
          />
          <path stroke="white" d="M24 23v9m0-16v1" />
        </g>
      </mask>
    </defs>
    <path :fill="$vuetify.theme.current.colors['card-icon-color']" d="M0 0h48v48H0z" mask="url(#ipSTipsOne0)" />
  </svg>
</template>
