<script lang="ts">
import type { users } from './types/Game';

export let name: typeof users[number];
export let owns = false;
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
}

// @media screen and (max-width: 440px) {
//   span {
//     display: list-item;
//     list-style-type: none;
//     margin-left: 0;
//   }
// }
</style>

<span class:owns>{name}</span>
