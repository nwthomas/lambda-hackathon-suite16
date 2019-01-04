import React from "react";
import "./Rating.css";
import { checkPropTypes } from "prop-types";

const Rating = props => {
  return (
    <div>
      <div class="star-rating">
        <input
          type="radio"
          id="5-stars"
          name="rating"
          value="5"
          onClick={() => props.stars(5, props._id)}
        />
        <label for="5-stars" class="star">
          &#9733;
        </label>
        <input
          type="radio"
          id="4-stars"
          name="rating"
          value="4"
          onClick={() => props.stars(4, props._id)}
        />
        <label for="4-stars" class="star">
          &#9733;
        </label>
        <input
          type="radio"
          id="3-stars"
          name="rating"
          value="3"
          onClick={() => props.stars(3, props._id)}
        />
        <label for="3-stars" class="star">
          &#9733;
        </label>
        <input
          type="radio"
          id="2-stars"
          name="rating"
          value="2"
          onClick={() => props.stars(2, props._id)}
        />
        <label for="2-stars" class="star">
          &#9733;
        </label>
        <input
          type="radio"
          id="1-star"
          name="rating"
          value="1"
          onClick={() => props.stars(1, props._id)}
        />
        <label for="1-star" class="star">
          &#9733;
        </label>
      </div>
    </div>
  );
};

export default Rating;
