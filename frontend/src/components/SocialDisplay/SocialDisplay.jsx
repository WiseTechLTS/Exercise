import { useEffect } from "react";
import { useState } from "react";

import LikeButton from "../LikeButton/LikeButton";
import "./SocialDisplay.css";

const SocialDisplay = (props) => {
  const [reversedArray, setReversedArray] = useState([])

  useEffect(() => {
    var reversedArray = props.allWorkouts.reverse()
    setReversedArray(reversedArray)
  }, [])
  return (
    <div>
      {reversedArray.map((workout, index) => {
        return (
            <div className="flex-container">
            <div className="text-center" style={{
              border:'2px solid black',
              borderRadius:'225px',
              margin: 'auto',
              fontSize: 'x-large',
              width: '100%',
              height: '75%',
              position: 'relative',
              }}>
              <span>{workout.user.username} has completed a {workout.muscle_group.name} workout on {workout.date} totalling {workout.total_weight} lbs! <LikeButton /></span>
            </div>
            </div>

        );
      })}


    </div>

  );
}

export default SocialDisplay;