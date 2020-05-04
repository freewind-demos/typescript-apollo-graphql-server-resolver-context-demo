type Book = {
  title: string,
  author: string,
}

const books: Book[] = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

export default function filterBooks(keyword: string | undefined): Book[] {
  if (keyword) {
    return books.filter(it => it.title.includes(keyword));
  }
  return books;
}
