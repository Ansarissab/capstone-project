import React from 'react'

const ActivityCard = ({ activity, onActivityClick }) => {
  return (
        <div className="activity" onClick={()=>onActivityClick(activity)}>
            <img alt="activity-pic" src={activity.image}/>
            <div className="activity-info">
                <h3>{activity.name}</h3>
                <h4>{activity.description}</h4>
                <h4>{activity.location}</h4>
            </div>
        </div>

  )
}

export default ActivityCard