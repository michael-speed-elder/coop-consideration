import type { Game } from '../types/Game';
import gamesJSON from './data/games';
import { writable } from 'svelte/store';

const filteredGames = writable<Game[]>(gamesJSON);

export default filteredGames;
