import React from "react";
import "./Rating.css";
import { checkPropTypes } from "prop-types";

const Rating = props => {
  return (
    <div>
      <div className="star-rating">
        <input
          type="radio"
          id="5-stars"
          name="rating"
          value="5"
          onClick={e => props.stars(e, props._id)}
        />
        <label for="5-stars" className="star">
          &#9733;
        </label>
        <input
          type="radio"
          id="4-stars"
          name="rating"
          value="4"
          onClick={e => {
            console.log(props._id);
            props.stars(e, props._id);
          }}
        />
        <label for="4-stars" className="star">
          &#9733;
        </label>
        <input
          type="radio"
          id="3-stars"
          name="rating"
          value="3"
          onClick={e => props.stars(e, props._id)}
        />
        <label for="3-stars" className="star">
          &#9733;
        </label>
        <input
          type="radio"
          id="2-stars"
          name="rating"
          value="2"
          onClick={e => props.stars(e, props._id)}
        />
        <label for="2-stars" className="star">
          &#9733;
        </label>
        <input
          type="radio"
          id="1-star"
          name="rating"
          value="1"
          onClick={e => props.stars(e, props._id)}
        />
        <label for="1-star" className="star">
          &#9733;
        </label>
      </div>
    </div>
  );
};

export default Rating;
