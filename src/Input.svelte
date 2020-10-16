<!-- Simple form to create game objects -->
<script lang="ts">
import type { Game } from './types/Game';
import { users } from './types/Game';
import { writable } from 'svelte/store';
import PillBottle from './PillBottle.svelte';

const prosStore = writable(new Set<string>());
const consStore = writable(new Set<string>());
const videosStore = writable(new Set<string>());

let title: string;
let imageUrl: string;
let summary: string;
let storeUrl: string;
let owners: Game['owners'] = [];

let combined: Game;
$: combined = {
  title: title?.trim() || undefined,
  imageUrl: imageUrl?.trim() || undefined,
  summary: summary?.trim() || undefined,
  pros: $prosStore.size ? Array.from($prosStore) : undefined,
  cons: $consStore.size ? Array.from($consStore) : undefined,
  videos: $videosStore.size ? Array.from($videosStore) : undefined,
  storeUrl: storeUrl?.trim() || undefined,
  owners: owners.length ? owners : undefined,
};

const LOCAL_STORAGE_KEY = 'wip';
let saved = false;

const autosave: (() => void) & {
  timeout?: ReturnType<typeof setTimeout>;
} = () => {
  if (autosave.timeout) clearTimeout(autosave.timeout);
  autosave.timeout = setTimeout(save, 1000);
};

function save() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(combined));
  saved = true;
}

function restore() {
  const json: Game = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  title = json.title;
  imageUrl = json.imageUrl;
  summary = json.summary;
  prosStore.set(new Set<string>(json.pros));
  consStore.set(new Set<string>(json.cons));
  videosStore.set(new Set<string>(json.videos));
  storeUrl = json.storeUrl;
  owners = json.owners || [];
}

function clear() {
  title = undefined;
  imageUrl = undefined;
  summary = undefined;
  prosStore.set(new Set<string>());
  consStore.set(new Set<string>());
  videosStore.set(new Set<string>());
  storeUrl = undefined;
  owners = [];
}
</script>

<style lang="scss">
@import './styles/variables';

main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

section {
  display: flex;
  flex-direction: column;
}

fieldset label {
  display: inline;

  + label {
    margin-left: 1rem;
  }
}

textarea {
  height: 8rem;
  resize: vertical;

  &[readonly] {
    height: 100%;
    resize: none;
  }
}

// hr {
//   border: none;
//   border-top: 1px dashed #ccc;
//   margin: 1rem 0;
//   width: 100%;
// }

.buttons {
  display: flex;
  gap: 0.5rem;

  button {
    background-color: scale-color($svelte-orange, $lightness: 15%);
    border-radius: 5px;
    color: white;
    flex: 1;
    padding: 0.5rem;
    transition: 150ms background-color;

    &:hover {
      background-color: scale-color($color: $svelte-orange, $lightness: 30%);
    }
  }
}

@keyframes fadeOut {
  from {
    filter: opacity(1);
  }
  to {
    filter: opacity(0);
  }
}

.save-msg {
  animation: fadeOut 2s;
  color: $svelte-orange;
}
</style>

<svelte:body on:change="{autosave}" />

<main>
  <section>
    <input placeholder="Title" bind:value="{title}" />
    <input placeholder="Image" bind:value="{imageUrl}" />
    <textarea placeholder="Summary" bind:value="{summary}"></textarea>
    <PillBottle placeholder="features" store="{prosStore}" />
    <PillBottle placeholder="concerns" store="{consStore}" />
    <PillBottle placeholder="video URL" store="{videosStore}" long />
    <input placeholder="Store URL" bind:value="{storeUrl}" />
    <fieldset class="owners">
      <legend>owners</legend>
      {#each users as user}
        <label>
          <input type="checkbox" bind:group="{owners}" value="{user}" />
          {user}
        </label>
      {/each}
    </fieldset>

    <!-- <hr /> -->

    <div class="buttons">
      <button type="button" on:click={save}>Save</button>
      <button type="button" on:click={restore}>Restore</button>
      <button type="button" on:click={clear}>Clear</button>
    </div>
    {#if saved}
      <span
        class:saved
        class="save-msg"
        on:animationend="{() => (saved = false)}"
      >Saved!</span>
    {/if}
  </section>

  <textarea readonly>{JSON.stringify(combined, null, 4)}</textarea>
</main>
