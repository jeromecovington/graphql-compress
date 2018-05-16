# graphql-compress
Small regex-based compressor to be used before sending a graphql query over the wire.

Influenced by [graphql-query-compress](https://www.npmjs.com/package/graphql-query-compress), which takes a more complex, lexer-based approach.

## Installation
```shell
$ npm install graphql-compress
```

## Usage
```js
const graphQLCompress = require('graphql-compress');

const query = `
{
  allSpecies {
    edges {
      node {
        name
      }
    }
  }
}
`;

const uri = `http://graphql.org/swapi-graphql/?query=${graphQLCompress(query)}`;

// Send request to uri using fetch or the http library of your choice.
```
