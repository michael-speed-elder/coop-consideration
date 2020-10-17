export const users = ['impirator', 'tonnant', 'alomo'] as const;

export interface Game {
  title: string;
  imageUrl: string;
  summary?: string;
  pros: string[];
  cons: string[];
  videos?: string[];
  storeUrl: string;
  owners?: typeof users[number][];
}
