import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import BannerBg from '../../../common/assets/image/webApp/Vector3.png';
const BannerWrapper = styled.section`
#maletin{   animation: bounceIn 10s infinite alternate;
}
@keyframes bounceIn{

}

#Hat{
  animation: sombrero 4s infinite alternate;
  transform-origin: center;
  transform-box: fill-box;
}
#sombrero{
  transform: translatey(0px);
	animation: hat 4s ease-in-out infinite;
}
#Rotar{

  animation: wheel 4s infinite linear;
  transform-origin: center;
  transform-box: fill-box;

}

@keyframes rayo {
  0%{
   
    transform: scale(1);
  }
  50%{
    
    transform: scale(1.01);
  }
  80%{
   
    transform: scale(0.98);
  }
  100%{
    
    transform: scale(1);
  }
}

@keyframes wheel {
  from{
    transform: rotatez(0deg);
  }
  to{
    transform: rotatez(360deg);
  }
}
@keyframes sombrero{
  from{
    transform: rotatez(0deg);
  }
  to{
    transform: rotatez(20deg);
  }
}

#señal{
  overflow: hidden;
	box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
	transform: translatey(0px);
	animation: float 4s ease-in-out infinite;
}

@keyframes float {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}
@keyframes hat {
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(20px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
}

.cls-1 {
  isolation: isolate;
}

.cls-2 {
  fill: #151c26;
}

.cls-3 {
  fill: #141c25;
}

.cls-4 {
  fill: #0c3356;
}

.cls-5 {
  fill: #0c141b;
}

.cls-6 {
  fill: #0d3457;
}

.cls-7 {
  fill: #1a578b;
}

.cls-8 {
  fill: #151d27;
}

.cls-9 {
  fill: #202d3c;
}

.cls-10 {
  fill: #ffbe03;
}

.cls-11 {
  fill: gray;
  mix-blend-mode: multiply;
  opacity: 0.41;
}

.cls-12 {
  fill: #03569e;
}

.cls-13 {
  fill: #032a51;
}

.cls-14 {
  fill: #03417b;
}

.cls-15 {
  fill: #032446;
}

.cls-16 {
  fill: #03375e;
}

.cls-17 {
  fill: #03223d;
}

.cls-18 {
  fill: #033e68;
}

.cls-19 {
  fill: #959595;
}

.cls-20 {
  fill: #f6f6f6;
}

.cls-21 {
  fill: #a6a6a6;
}

.cls-22 {
  fill: #d0d0d0;
}

.cls-23 {
  fill: #ffffea;
}

.cls-24 {
  fill: #d1dbe6;
}

.cls-25 {
  fill: #f7a317;
}

.cls-26 {
  fill: #ffd51e;
}

.cls-27 {
  fill: #ffc71e;
}

.cls-28 {
  fill: #cd4528;
}

.cls-29 {
  fill: #032b4f;
}

.cls-30 {
  fill: #cdd7b8;
}

.cls-31 {
  fill: #b82d1f;
}

.cls-32 {
  fill: #f24634;
}

.cls-33 {
  fill: #f96254;
}

.cls-34 {
  fill: #9d9d9d;
}

.cls-35 {
  fill: #b4b4b4;
}

.cls-36 {
  fill: #03162b;
}

.cls-37 {
  fill: #afafaf;
}

.cls-38 {
  fill: #858585;
}

.cls-39 {
  fill: #031933;
}

.cls-40 {
  fill: #bababa;
}

.cls-41 {
  fill: #031123;
}

.cls-42 {
  fill: #031934;
}

.cls-43 {
  fill: #031b36;
}

.cls-44 {
  fill: #a0a0a0;
}

.cls-45 {
  fill: #a4a4a4;
}

.cls-46 {
  fill: #03172f;
}

.cls-47 {
  fill: #03162d;
}

.cls-48 {
  fill: #b9b9b9;
}

.cls-49 {
  fill: #031a36;
}

.cls-50 {
  fill: #b6b6b6;
}

.cls-51 {
  fill: #031a35;
}

.cls-52 {
  fill: #fff;
}

.cls-53 {
  fill: #868686;
}

.cls-54 {
  fill: #03274c;
}

.cls-55 {
  fill: #031124;
}

.cls-56 {
  fill: #082844;
}

.cls-57 {
  fill: #ecc199;
}

.cls-58 {
  fill: #14436c;
}

.cls-59 {
  fill: #a87a0c;
}

.cls-60 {
  fill: #7c634c;
}

.cls-61 {
  fill: #926909;
}

.cls-62 {
  fill: #8a7058;
}

.cls-63 {
  fill: #7d644e;
}

.cls-64 {
  fill: #092a46;
}

.cls-65 {
  fill: #836954;
}

.cls-66 {
  fill: #9e8064;
}

.cls-67 {
  fill: #b0800d;
}

.cls-68 {
  fill: #ffc018;
}

.cls-69 {
  fill: #ffdfbf;
}

.cls-70 {
  fill: #ffd62e;
}

.cls-71 {
  fill: #ffe12e;
}

.cls-72 {
  fill: #09111a;
}

.cls-73 {
  fill: #0f0f0f;
}

.cls-74 {
  fill: #394655;
}

.cls-75 {
  fill: #b2b2b2;
}

.cls-76 {
  fill: #d88500;
}






background-image: url(${BannerBg?.src});
background-repeat: no-repeat;
background-size: cover;
background-position: bottom left;
  padding-top: 120px;
  padding-bottom: 100px;
  @media (max-width: 1550px) {
    padding-bottom: 70px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 1551px) {
      max-width: 1430px;
    }
  }
  .content {
    flex: 0 0 46%;
    padding-top: 130px;
    @media (max-width: 1550px) {
      padding-top: 80px;
    }
    @media (max-width: 1199px) {
      padding-top: 40px;
    }
    @media (max-width: 768px) {
      flex: 0 0 100%;
      text-align: center;
    }
    @media (max-width: 768px) {
      padding-top: 0px;
    }
    h2 {
      font-weight: bold;
      font-size: 58px;
      line-height: 1.29;
      letter-spacing: -2px;
      color: #081c27;
      margin-bottom: 15px;
      @media (max-width: 1550px) {
        font-size: 48px;
        max-width: 550px;
      }
      @media (max-width: 1199px) {
        font-size: 38px;
      }
      @media (max-width: 768px) {
        max-width: 450px;
        margin-left: auto;
        margin-right: auto;
      }
      @media (max-width: 480px) {
        font-size: 32px;
        max-width: 360px;
      }
      @media (max-width: 425px) {
        font-size: 28px;
        max-width: 310px;
      }
    }
    .paragraph {
      font-size: 18px;
      font-family: 'Work Sans';
      line-height: 2.11;
      letter-spacing: -0.3px;
      color: #00334e;
      margin-bottom: 0;
      opacity: 0.8;
      @media (max-width: 1550px) {
        font-size: 16px;
      }
      @media (max-width: 1199px) {
        max-width: 400px;
      }
      @media (max-width: 768px) {
        margin-left: auto;
        margin-right: auto;
      }
      @media (max-width: 480px) {
        font-size: 15px;
        max-width: 350px;
      }
    }
    .tagLine {
      font-size: 15px;
      margin-bottom: 0;
      color: #33596a;
      font-family: 'DM Sans';
      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }
  .image {
    flex: 0 0 54%;
    // background-color: #fff2d9;
    @media (max-width: 768px) {
      flex: 0 0 100%;
      display: none;
    }
    @media (max-width: 768px) {
      margin-top: 50px;
    }
    .react-reveal {
      background-color: inherit;
    }
    img {
      mix-blend-mode: multiply;
      @media (max-width: 1550px) {
        width: 90%;
        margin-left: auto;
      }
      @media (max-width: 1199px) {
        margin-top: 60px;
      }
    }
  }
  .bannerForm {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%;
    max-width: 480px;
    margin-top: 40px;
    margin-bottom: 30px;
    @media (max-width: 1550px) {
      max-width: 430px;
    }
    @media (max-width: 1199px) {
      max-width: 400px;
    }
    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 425px) {
      margin-top: 30px;
      margin-bottom: 20px;
    }
    .mapPin {
      position: absolute;
      top: 50%;
      left: 25px;
      transform: translateY(-50%);
      z-index: 10;
    }
    input {
      width: 100%;
      max-width: 480px;
      background-color: #fff;
      border-radius: 5px;
      border: none;
      outline: none;
      height: 70px;
      border-radius: 5px;
      font-size: 16px;
      letter-spacing: -0.3px;
      color: rgba(0, 51, 78, 0.4);
      padding-left: 60px;
      padding-right: 80px;
      transition: all 500ms ease;
      &:focus {
        box-shadow: 0 0 0 1px ${themeGet('colors.blackTwo')};
      }
      @media (max-width: 1550px) {
        height: 60px;
        max-width: 430px;
        padding-right: 70px;
      }
      @media (max-width: 1199px) {
        max-width: 400px;
      }
    }
    ::placeholder {
      opacity: 1;
      color: rgba(0, 51, 78, 0.4);
    }
    button[type='submit'] {
      border: none;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 70px;
      border-radius: 5px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      background-color: ${themeGet('colors.blackTwo')};
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      opacity: 1;
      cursor: pointer;
      transition: opacity 500ms ease;
      &:hover {
        opacity: 0.85;
      }
      @media (max-width: 1550px) {
        height: 60px;
        width: 70px;
      }
    }
  }
  .buttonWrap {
    display: flex;
    // flex-direction: row;
    margin-top: 25px;
    @media (max-width: 768px) {
      justify-content: center !important;
    }

  }

 
  .troll{
    margin-top: 70px !important;
    @media (max-width: 768px) {
      justify-content: center !important;
    }

  }

  .boton{
    font-size: 1.275rem;
    padding-left: 30px;
    padding-right: 30px;
    line-height: 2.5rem;
    padding: 0.5rem 1rem;
    text-transform: none !important;
  }

  .b1{
    margin-right:20px;
    color:#fff;
    // border-color:#273F6E;
    background:#273F6E;
  }

  .b2{
    color:#273F6E;
    font-weight: 500;
    border-color:#273F6E;
    // margin-top:20px
  }

  .bannerAppBtn {
    background-color: #fff2d9;
    border: 1px solid #081c27;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding-left: 17px;
    padding-right: 17px;
    text-align: left;
    color: #081c27;
    padding-top: 14.5px;
    padding-bottom: 14.5px;
    transition: all 500ms ease;
    @media (max-width: 414px) {
      padding-left: 10px;
      padding-right: 10px;
    }

    + .bannerAppBtn {
      margin-left: 16px;
      @media (max-width: 414px) {
        margin-left: 10px;
      }
    }
    img {
      flex-shrink: 0;
      filter: invert(0%);
      transition: 500ms ease;
    }
    .btnContent {
      margin-left: 17px;
      @media (max-width: 480px) {
        margin-left: 10px;
      }
      @media (max-width: 414px) {
        margin-left: 5px;
      }
    }
    span {
      margin: 0;
      display: block;
      font-size: 13px;
      line-height: 1;
      letter-spacing: 0.2px;
      opacity: 0.8;
    }
    p {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      line-height: 1;
      margin-top: 5px;
      @media (max-width: 480px) {
        font-size: 16px;
      }
    }
    &:hover {
      background-color: #081c27;
      color: #fff;
      img {
        filter: invert(100%);
      }
    }
  }

 
`;

export default BannerWrapper;
