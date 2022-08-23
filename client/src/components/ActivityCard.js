import React from 'react'


const ActivityCard = ({ user, category, activity, onActivityClick }) => {
  return (
        <div className="category-container" >
            <div className="category-activity-info">
              <div className="category-info">
                <h3>{category.name}</h3>
                <h4>{category.description}</h4>
              </div>
              <div className='card-container'>
                  Experience {category.name} with the following:
                   {category.activities.map(activity=>( 
                <div className='activity-container' key={activity.id}>
                  <div className="render-activity-info" >
                    <h4 className="activity-name">{activity.name}</h4>
                    <div className="activity-description">{activity.description}</div>
                    <div className="image-container">
                      <a href={activity.image_url}>
                        <img src={activity.image_url} alt="activity" />
                      </a>
                    </div>
                    <button onClick={()=>onActivityClick(activity, activity.id)}>Add to Bucket List</button>
                  </div>
                </div>
                ))}
              </div>
               
            </div>
        </div>

    

  )
}

export default ActivityCard

