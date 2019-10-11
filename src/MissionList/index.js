import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

//Hint: You should not need to change this component
const Mission = ({ mission }) => (
  <div class='mission-card'>
    <div class='mission-title'>{mission.name}</div>
    <div class='mission-description'>{mission.description}</div>
    <div class='link-container'>
      <a class='mission-link' href={mission.wikipedia} alt='Link to mission wikipedia'>Learn More!</a>
    </div>
  </div>
)

//Hint: You should not need to change this component
const MissionList = ({ missions }) => (
  <div class='mission-list-container'>
    {missions.map((mission => <Mission mission={mission} />))}
  </div>
)

//Hint: You should not need to change this component
const Loading = () => (
  <div class='loading'>
    Loading...
  </div>
)

//Todo: fetch the necessary data from the server
export const MissionListContainer = () => { 
  return (
    <div>
    </div>
  )
}