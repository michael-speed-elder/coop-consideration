<script lang="ts">
import type { Game } from './types/Game';
import markdown from './utils/markdown';
import gamesJson from './stores/data/games';
import filteredGames from './stores/filteredGames';

import Filters from './Filters.svelte';
import Owners from './Owners.svelte';

const lastGameKey = 'game';
const lastGame = localStorage.getItem(lastGameKey);

let activeGame: Game =
  gamesJson.find((game) => game.title === lastGame) || $filteredGames[0];

// console.debug(markdown(activeGame));
</script>

<style lang="scss">
@import './styles/App';
</style>

<main>
  <!--  -->
  <!-- game images -->
  <aside>
    <Filters />

    <nav>
      <ul>
        {#if $filteredGames}
          {#each $filteredGames as game}
            <li class:active={game === activeGame}>
              <button
                type="button"
                on:click={() => ((activeGame = game), localStorage.setItem(lastGameKey, activeGame.title))}
              >
                <img src={game.imageUrl} alt={game.title} title={game.title} />
              </button>
            </li>
          {/each}
        {:else}
          <li>All games hidden by filters</li>
        {/if}
      </ul>
    </nav>
  </aside>

  <!--  -->
  <!-- active game -->
  <article>
    <h2>{activeGame.title}</h2>

    <Owners owners={activeGame.owners || []} />

    {#if activeGame.pros?.length}
      <fieldset>
        <legend>features</legend>
        {#each activeGame.pros as pro}<span class="tag">{pro}</span>{/each}
      </fieldset>
    {/if}

    {#if activeGame.cons?.length}
      <fieldset>
        <legend>concerns</legend>
        {#each activeGame.cons as con}<span class="tag">{con}</span>{/each}
      </fieldset>
    {/if}

    {@html markdown(activeGame)}

    <a href={activeGame.storeUrl} target="_blank">↗
      {activeGame.storeUrl.includes('steampowered') ? 'Steam' : 'Store'}
      page
    </a>

    {#if activeGame.videos?.length}
      <h3>Videos</h3>
      <ul class="videos">
        {#each activeGame.videos as video}
          <li><a href={video} target="_blank">{video}</a></li>
        {/each}
      </ul>
    {/if}
  </article>
</main>
