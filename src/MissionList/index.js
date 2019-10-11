import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const GET_MISSIONS = gql`
  {
    missions(limit: 50) {
      name
      description 
      wikipedia
    }
  }
`

const Mission = ({ mission }) => (
  <div class='mission-card'>
    <div class='mission-title'>{mission.name}</div>
    <div class='mission-description'>{mission.description}</div>
    <div class='link-container'>
      <a class='mission-link' href={mission.wikipedia} alt='Link to mission wikipedia'>Learn More!</a>
    </div>
  </div>
)

const MissionList = ({ missions }) => (
  <div class='mission-list-container'>
    {missions.map((mission => <Mission mission={mission} />))}
  </div>
)

const Loading = () => (
  <div class='loading'>
    Loading...
  </div>
)

export const MissionListContainer = () => {
  const { loading, error, data } = useQuery(GET_MISSIONS)
  if (loading) return <Loading />
  if (error) return `Error: ${error.message}`
  return (
    <div>
      <MissionList missions={data.missions} />
    </div>
  )
}