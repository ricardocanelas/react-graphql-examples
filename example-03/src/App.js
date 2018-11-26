import React, { Component } from 'react';
import { graphql, QueryRenderer } from 'react-relay';
import environment from './environment';

// ATTENTION
// Note that the name of the query must be <FileName>Query.
// So query AppQuery { ... } will only work if the query is in a file named App.js.
// So query ProductListQuery { ... } will only work if the query is in a file named ProductListQuery.js.
// So on...
const queryProducts = graphql`
  query AppQuery {
    products {
      name
    }
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        Working...

        <QueryRenderer
          environment={environment}
          query={queryProducts}
          variables={{}}
          render={({error, props}) => {
            if (error) {
              return <div>Error!</div>;
            }
            if (!props) {
              return <div>Loading...</div>;
            }

            return <div>We have {props.products.length} products.</div>
          }}
        />

      </div>
    );
  }
}

export default App;
