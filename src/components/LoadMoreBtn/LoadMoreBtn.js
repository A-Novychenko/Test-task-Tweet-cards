import { Button } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ nextPage }) => (
  <Button type="button" onClick={() => nextPage()}>
    Load More
  </Button>
);
