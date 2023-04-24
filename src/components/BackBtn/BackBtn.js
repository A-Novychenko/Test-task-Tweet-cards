import { Button } from 'components/BackBtn';

export const BackBtn = ({ location }) => (
  <Button to="/" state={{ from: location }}>
    Back
  </Button>
);
