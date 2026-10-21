import { getCollection, type CollectionEntry } from 'astro:content';

export type Artigo = CollectionEntry<'blog'>;

/** Todos os artigos, do mais novo para o mais antigo. */
export async function artigos(): Promise<Artigo[]> {
  const todos = await getCollection('blog');
  return todos.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export const urlDoArtigo = (a: Artigo) => `/blog/${a.id}/`;

const fmtData = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long', timeZone: 'UTC' });

/** "21 de outubro de 2026". UTC porque a data do frontmatter vem sem hora. */
export const formatarData = (d: Date) => fmtData.format(d);

/** Minutos de leitura, a ~200 palavras por minuto. */
export function minutosDeLeitura(texto: string = ''): number {
  const palavras = texto.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(palavras / 200));
}
