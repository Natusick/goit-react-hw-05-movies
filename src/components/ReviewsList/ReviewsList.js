export const ReviewsList = (reviews) => {
  return (
    <>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>{author}</p>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have reviews for this movie</p>
        )}
      </ul>
    </>
  );
};
export default ReviewsList;
