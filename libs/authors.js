export const authors = [
  {
    name: "THE JOURNAL",
    slug: "the-journal",
    bio: "Thoughts, stories and ideas from the editorial team.",
    avatar: null,
  }
];

export function getAuthorBySlug(slug) {
  return authors.find(author => author.slug === slug);
}

export function getAuthorByName(name) {
  return authors.find(author => author.name.toLowerCase() === name.toLowerCase());
}
