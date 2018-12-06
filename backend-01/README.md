# Backend 01

Using [graphql-yoga](https://github.com/prisma/graphql-yoga) (Fully-featured GraphQL Server).

**Installing**

```
yarn install
```

**Getting Started**

```
mongod
```

```
yarn start
```

+ Playground URL: http://localhost:4000/playground
+ Endpoint URL: http://localhost:4000/graphql
+ Subscriptions URL: http://localhost:4000/subscriptions

---

## 🐥 Query

```
query {
  product(id: "1234567THEID") {
    id
    name
  }
}
```

```
query {
  products {
    id
    name
  }
}
```

```
query {
  productsPagination (limit: 5) {
    totalCount
    edges {
      id
      name
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

## 🐣 Mutation

```
mutation {
  createProduct (
    name:  "Laptop"
    price: "1200"
  ) {
    id
    name
    price
  }
}
```

```
mutation {
  updateProduct (
    id: "1234567THEID"
    price: "899"
  ) {
    id
    name
    price
  }
}
```

```
mutation {
  deleteProduct (
    id: "1234567THEID"
  ) {
    id
    name
    price
  }
}
```

## 🐤 Subscription

```
subscription {
  productCreated {
    message {
      id
      name
      price
    }
  }
}
```