import type { Game } from '../types/Game';
import gamesJSON from './data/games';
import { writable } from 'svelte/store';

const filteredGames = writable<Game[]>(
  gamesJSON.sort((a, b) => (a.title > b.title ? 1 : -1))
);

export default filteredGames;
