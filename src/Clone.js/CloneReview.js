import React from "react";
function reviewee() {
  const [review, setReview] = useState([])
  return(
    <div>
      <ul>
        {
          review.map(  review => <li key={review.id}>{review.value}</li>

          )
        }
      </ul>
    </div>
  )}