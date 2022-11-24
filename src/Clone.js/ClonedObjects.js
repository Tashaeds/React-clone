import React from 'react';
import {useState} from "react";
import ClonedObjects from './Clone/ClonedObjects';
import id1 from './img/id1.jpg';
import id2 from './img/id1.jpg';
import id3 from './img/id1.jpg';
import id4 from './img/id1.jpg';

function reviewee() {
  const [review, setReview] = useState([
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:id1,
        
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:id2,
        
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:id3,
       
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:id4,
        
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    }]);

   
      {review.map((review) => {
      return(
        <div id="container">
        <ClonedObjects 
        key={review.id}
        name={review.name} 
        job={review.job} 
        img={review.img} 
        text={review.text}
        />
        </div>
      );
      })}
  
    }
    export default ClonedObjects;