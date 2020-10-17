<script lang="ts">
import type { Game } from './types/Game';
import { users } from './types/Game';
import gamesJson from './stores/data/games';
import filteredGames from './stores/filteredGames';

let userFilter: Game['owners'] = [];

const filterByOwner = () => {
  filteredGames.update(() =>
    gamesJson.filter((game) =>
      userFilter.every((user) => game.owners?.includes(user))
    )
  );
};
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

    .subtle {
      filter: opacity(0.6);
    }
  }

  fieldset {
    border-color: #999;
  }

  .user-filter {
    display: flex;
    justify-content: space-around;
  }
}

@media screen and (max-width: 800px) {
  details {
    left: 0;

    summary {
      padding: 0.5em 0;
    }
  }
}
</style>

<details>
  <summary>
    filters
    {#if $filteredGames.length !== gamesJson.length}
      <span class="subtle">(active)</span>
    {/if}
  </summary>
  <fieldset class="user-filter" on:change={filterByOwner}>
    {#each users as user}
      <label>
        <input type="checkbox" value={user} bind:group={userFilter} />
        {user}
      </label>
    {/each}
  </fieldset>
</details>
