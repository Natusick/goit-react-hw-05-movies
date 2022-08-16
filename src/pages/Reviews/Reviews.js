import { useEffect, useState } from "react";
import * as getApi from "../../services/Api";
import { useParams } from "react-router-dom";
import { ReviewsList } from "../../components/ReviewsList/ReviewsList";

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getApi
      .fetchReviews(movieId)
      .then((data) => setReviews(data))
      .catch(console.log("error"));
  }, [movieId]);

  return (
    <>
      <ReviewsList reviews={reviews} />
    </>
  );
};

export default Reviews;
