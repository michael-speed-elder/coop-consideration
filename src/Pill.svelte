<style lang="scss">
@import './styles/variables';

.pill {
  background-color: $svelte-orange;
  border-radius: 9999px;
  color: white;
  display: inline-flex;
  overflow: hidden;
  white-space: nowrap;
}

.text {
  border-right: 1px scale-color($color: $svelte-orange, $lightness: -22%) solid;
  line-height: 1.75;
  padding: 0 0.5em 0 0.6em;
}

:global(.long) {
  .pill,
  .text {
    flex: 1 1 100%;
  }
}

button {
  border-left: 1px scale-color($color: $svelte-orange, $lightness: 22%) solid;
  color: inherit;
  line-height: 1.75;
  padding: 0 0.6em 0 0.25em;
  transition: background-color 200ms;

  &:hover,
  &:focus {
    background-color: scale-color($svelte-orange, $lightness: 20%);
  }
}
</style>

<script lang="ts">
import { createEventDispatcher } from 'svelte';

export let text: string;
export let idx: number;

const dispatch = createEventDispatcher();

function killPill(msg) {
  dispatch('message', msg);
}
</script>

<span class="pill" data-pos="{idx}">
  <span class="text" title="{text}">{text}</span>
  <button type="button" on:click="{killPill.bind(this, text)}">×</button>
</span>
