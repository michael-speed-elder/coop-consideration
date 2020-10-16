import type { Game } from '../types/Game';

export default function (game: Game): string {
  let vidCtr = 0;
  let { summary, videos = [] } = game;
  summary = summary
    .replace(/_([^_]+)_/g, '<em>$1</em>')
    .replace(/\*([^*]+)\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<kbd>$1</kbd>')
    .replace(
      /\[([^\]]+)\]\[[0-9]\]/g,
      `<a href="${videos[vidCtr++]}" target="_blank">$1</a>`
    );
  return `<p>${summary.split('\n\n').join('</p><p>')}</p>`;
}
