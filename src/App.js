import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks'
import { MissionListContainer } from './MissionList/index'
import './App.css';
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div class='outer-container'>
        <div class='container'>
          <div class='title'>SpaceX Missions</div>
          <MissionListContainer />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;