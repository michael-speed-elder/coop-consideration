<script lang="ts">
import type { Game } from './types/Game';
import Tags from './types/Tags';
import { users } from './types/Game';
import gamesJson from './stores/data/games';
import filteredGames from './stores/filteredGames';

let ownersWhitelist: Game['owners'] = [];
let tagsWhitelist: Tags[] = [];
let alphabetize = true;

const filter = () => {
  filteredGames.update(() => {
    let filtered = gamesJson.filter((game) =>
      ownersWhitelist.every((user) => game.owners?.includes(user))
    );

    if (tagsWhitelist.length) {
      filtered = filtered.filter((game) =>
        tagsWhitelist.some((tag) => [...game.pros, ...game.cons].includes(tag))
      );
    }

    if (alphabetize)
      filtered = filtered.sort((a, b) => (a.title > b.title ? 1 : -1));

    return filtered;
  });
};

filter();
</script>

<style lang="scss">
details {
  background-color: #505050;
  font-size: 1rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;

  summary {
    cursor: pointer;
    outline: none;
    padding: 0.5em 0;

    .subtle {
      filter: opacity(0.6);
    }
  }

  fieldset {
    border-color: #999;
  }

  .owner-filter {
    display: flex;

    label + label {
      margin-left: 1em;
    }
  }
}

@media screen and (max-width: 800px) {
  details {
    left: 0;
  }
}
</style>

<details on:change={filter}>
  <summary>
    filters
    {#if $filteredGames.length !== gamesJson.length}
      <span class="subtle">(active)</span>
    {/if}
  </summary>

  <fieldset class="owner-filter">
    <legend>owners</legend>

    {#each users as user}
      <label>
        <input type="checkbox" value={user} bind:group={ownersWhitelist} />
        {user}
      </label>
    {/each}
  </fieldset>

  <fieldset>
    <legend>tags</legend>

    {#each Object.values(Tags) as tag}
      <label>
        <input type="checkbox" bind:group={tagsWhitelist} value={tag} />
        {tag}
      </label>
    {/each}
  </fieldset>

  <fieldset>
    <legend>sort</legend>

    <label>
      <input type="checkbox" bind:checked={alphabetize} />
      alphabetize
    </label>
  </fieldset>
</details>
