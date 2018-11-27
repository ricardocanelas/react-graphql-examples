# 🍄️ / Example-03

Working..

## 👉🏻 Installing

1. Clone this repository using `git clone`.
2. Onto the repository, install the dependecies using `yarn install` or `npm install`

---

## 👉🏻 My Notes

**Watchman**

You need `watchman` to run `yarn relay`

If you are using windows, follow [this instruction](https://github.com/facebook/watchman/issues/641#issuecomment-419176095).

**Query**

Example: in App.js

```
const queryProducts = graphql`
  query AppQuery {
    products {
      name
    }
  }
`
```

Note that the name of the query must be `<FileName>Query`. So query AppQuery { ... } will only work if the query is in a file named App.js... So query ProductListQuery { ... } will only work if the query is in a file named ProductListQuery.js.
