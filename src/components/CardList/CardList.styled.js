import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1280px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  margin-top: 26px;
  width: 200px;

  margin-left: auto;
  margin-right: auto;

  background-color: #5736a3;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #fff;

  cursor: pointer;

  &:hover {
    color: #373737;
    background-color: #5cd3a8;
  }
`;
