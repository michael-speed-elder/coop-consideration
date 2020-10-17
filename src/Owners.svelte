<script lang="ts">
import { users } from './types/Game';

export let owners: typeof users[number][];
</script>

<style lang="scss">
span {
  display: inline-block;
  font-variant: small-caps;

  &::before {
    content: '☐ ';
    color: gray;
  }

  &.owns::before {
    content: '☑ ';
    color: #3c6;
  }

  + span {
    margin-left: 1em;
  }
}

@media screen and (max-width: 500px) {
  span {
    display: block;

    + span {
      margin-left: 0;
    }
  }
}
</style>

<div>
  {#each users as user}
    <span class:owns={owners.includes(user)}>{user}</span>
  {/each}
</div>
