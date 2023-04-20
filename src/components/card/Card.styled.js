import styled from 'styled-components';
import bgImg from '../../img/background.png';

export const CardWrap = styled.div`
  width: 380px;
  height: 460px;

  text-align: center;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Background = styled.div`
  width: 308;
  height: 168px;
  background-image: url(${bgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Delimiter = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Statistics = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.33;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
`;
// export const Button!!!!!!!!!! = styled.p`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   padding: 14px 28px;
//   gap: 6px;

//   position: absolute;
//   width: 196px;
//   height: 50px;
//   left: 92px;
//   top: 374px;

//   background: #5cd3a8;
//   box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
//   border-radius: 10.3108px;
// `;
