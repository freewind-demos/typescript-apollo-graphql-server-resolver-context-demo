import {ApolloServer} from 'apollo-server';
import filterBooks from './data';
import typeDefs from './typeDefs';

type Context = {
  keyword?: string
}

const server = new ApolloServer({
  typeDefs,
  context: ({req}): Context => ({
    keyword: req.query['keyword'] as string
  }),
  resolvers: {
    Query: {
      books: (parent, args, context: Context, info) => filterBooks(context.keyword),
    },
  }
});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});

