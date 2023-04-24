import { Suspense } from 'react';
import { Circles } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { Container, Title } from './SharedLayout.styled';

export const SharedLayout = () => (
  <>
    <Container>
      <main>
        <Title>Tweets APP</Title>
        <Suspense
          fallback={
            <Circles
              height="300"
              width="300"
              color="#5736a3"
              ariaLabel="circles-loading"
              wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                position: 'fixed',
                top: '150px',
                left: '50%',
                transform: 'translate(-50%)',
              }}
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Container>
  </>
);
