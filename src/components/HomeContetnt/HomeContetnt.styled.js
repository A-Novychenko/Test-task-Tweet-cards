import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h2`
  padding-top: 80px;
  margin-bottom: 80px;
  text-align: center;
  font-size: 48px;
  color: #5736a3;
`;

export const Descr = styled.p`
  text-align: center;
  font-size: 32px;
  margin-bottom: 80px;
`;

export const StartLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 26px;
  width: 200px;
  gap: 6px;

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
  text-decoration: none;

  cursor: pointer;

  &:hover {
    background-color: #5cd3a8;
    color: #373737;
  }
`;
