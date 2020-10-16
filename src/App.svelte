<script lang="ts">
import type { Game } from './types/Game';
import { users } from './types/Game';
import markdown from './utils/markdown';
import gamesJson from './stores/data/games';
import Owner from './Owner.svelte';
import Input from './Input.svelte';

const lastGameKey = 'game';
const lastGame = localStorage.getItem(lastGameKey);

let activeGame: Game =
  gamesJson.find((game) => game.title === lastGame) || gamesJson[0];

// console.debug(markdown(activeGame));
let userFilter = [];

let filteredGames: Game[];
$: filteredGames = gamesJson.filter((game) =>
  userFilter.every((user) => game.owners?.includes(user))
);
</script>

<style lang="scss">
@import './styles/App';
</style>

<main>
  <!--  -->
  <!-- game images -->
  <aside>
    <details class="filters">
      <summary>
        filters
        {#if filteredGames.length !== gamesJson.length}
          <span class="subtle">(active)</span>
        {/if}
      </summary>
      <fieldset class="user-filter">
        {#each users as user}
          <label>
            <input type="checkbox" value={user} bind:group={userFilter} />
            {user}
          </label>
        {/each}
      </fieldset>
    </details>
    <nav>
      <ul>
        {#each filteredGames as game}
          <li class:active={game === activeGame}>
            <button
              type="button"
              on:click={() => ((activeGame = game), localStorage.setItem(lastGameKey, activeGame.title))}
            >
              <img src={game.imageUrl} alt={game.title} title={game.title} />
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  </aside>

  <!--  -->
  <!-- active game -->
  <article>
    <h2>{activeGame.title}</h2>

    <div class="owners">
      {#each users as user}
        <Owner name={user} owns={activeGame.owners?.includes(user)} />
      {/each}
    </div>

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
      page</a>

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
