# 🍄️ / Example-02

## 👉🏻 Installing

1. Clone this repository using `git clone`.
2. Onto the repository, install the dependecies using `yarn install` or `npm install`

---

## 👉🏻 Running:

```shell
# Starting MongoDB
mongod

# Open a new tab
cd backend
yarn start

# Open a new tab
cd fronted
yarn start
```

---

## 👉🏻 Example of Query / Mutation / Subscription

Query

```
query {
  products {
    id
    name
    price
  }
}
```

```
query {
  productsPagination (
    cursor: "5bf4b359da6da62fecc9ae5b"
    limit: 2
  ) {
    edges {
      id
      name
      price
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

Mutation

```
mutation {
  createProduct(name: "Macbook Pro 13" price: "1900") {
    id
    name
  }
}
```


```
mutation {
  updateProduct(
    id: "5bf47890ed08cd2ca0628cf6"
    name:"Macbook Pro 13"
    description: "13.3-inch (diagonal) LED-backlit display with IPS technology."
  ) {
    name
    description
  }
}
```

```
mutation {
  deleteProduct (
    id: "5bf477a8ff477a485c1bc00a"
  ) {
    name
  }
}
```

Subscription

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