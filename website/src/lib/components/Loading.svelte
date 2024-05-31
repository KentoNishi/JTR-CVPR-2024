<script lang="ts">
	// import { exioLoadingBarAnimation } from 'exio/svelte';
  import { fade } from 'svelte/transition';
</script>

<div
  style="
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 100;
  "
  transition:fade
>
  <!-- <div
    style="
      height: 5px;
      width: min(80%, 250px);
      --exio-loader-fill-color: black;
      background-color: white;
    "
    use:exioLoadingBarAnimation
  /> -->
</div>
