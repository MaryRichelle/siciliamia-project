import styled from "styled-components";

const TripadvisorReviewsRoot = styled.div`
  position: relative;
  font-size: var(--font-size-lg);
  line-height: 21px;
  font-family: var(--font-lato);
  color: var(--color-chocolate-100);
  text-align: left;
  display: flex;
  align-items: center;
  width: 205px;
  height: 13px;
`;
const TripAdvisorReviews = () => {
  return <TripadvisorReviewsRoot>TripAdvisor reviews</TripadvisorReviewsRoot>;
};

export default TripAdvisorReviews;
