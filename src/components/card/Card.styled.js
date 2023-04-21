import styled from 'styled-components';
import bgImg from '../../img/background.png';

export const CardWrap = styled.div`
  position: relative;
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

export const Wrap = styled.div`
  padding: 28px 36px 0 36px;
  margin-bottom: 88px;
`;
export const Background = styled.div`
  width: 308;
  height: 168px;
  background-image: url(${bgImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Logo = styled.img`
  position: absolute;
  left: 20px;
  top: 20px;

  width: '76';
  height: '22';
`;

export const AvatarBox = styled.div`
  position: absolute;
  width: 100%;
  top: 214px;
`;

export const Delimiter = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const BorderAvatar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;

  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const BackgroundAvatar = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 62px;
  height: 62px;

  border-radius: 50%;
  background-color: #5736a3;
  background-image: url(https://i.pravatar.cc/150?img=7);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Statistics = styled.p`
  margin-bottom: 16px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.33;
  text-transform: uppercase;

  color: #ebd8ff;

  :nth-last-child(-n + 2) {
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  margin-top: 26px;

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

  cursor: pointer;

  &:hover {
    background-color: #5cd3a8;
  }
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
