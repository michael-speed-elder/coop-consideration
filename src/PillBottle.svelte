<script lang="ts">
  import type { Writable } from 'svelte/store';
  import Pill from './Pill.svelte';

  export let long = false;
  export let placeholder: string;
  export let store: Writable<Set<string>>;

  const onSubmit = (evt: Event) => {
    evt.preventDefault();
    store.update((set) => set.add(value.trim()));
    (evt.target as HTMLFormElement).reset();
  };

  let value: string;

  const killPill = (evt) => {
    store.update((set) => (set.delete(evt.detail), set));
  };
</script>

<style lang="scss">
  form {
    padding: 0;

    .pills {
      display: flex;
      flex-flow: row wrap;
      gap: 0.5em;
      padding: 0.5rem;
    }

    input {
      border-width: 1px 0 0;
      border-style: dashed;
      border-color: inherit;
      margin: 0;
      width: 100%;
    }
  }
</style>

<form class="pill-bottle" class:long on:submit={onSubmit}>
  <div class="pills">
    {#each Array.from($store) as pill, idx}
      <Pill text={pill} {idx} on:message={killPill} />
    {/each}
  </div>
  <input {placeholder} bind:value />
</form>
