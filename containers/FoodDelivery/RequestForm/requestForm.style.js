import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import BgImage from '../../../common/assets/image/foodDelivery/bulb.png';
const RequestFormWrapper = styled.section`
.containerx {
display: flex;
flex-wrap: wrap;
justify-content: center;
    align-content: center;
    align-items: center;
    max-width: 886px;
}
.container2 {
  
  display: flex;
  margin-top: 30px;
  justify-content: start;
      align-content: center;
      align-items: center;
      flex-direction:column;
      
  }
.p-float-label{

  margin-bottom: 15px;
  margin-top: 15px;
  margin-right:15px;
  margin-left:15px
}
.form {
  background: $white;
  padding: 3em;
  // height: 550px;
  display: flex;
  border-radius: 20px;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  backdrop-filter: blur(10px);
  box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
 
}


.textsub{
  max-width: 286px;
}


@media only screen and (max-width: 992px) {
  .form  {
    // background-color: lightblue;
    flex-direction: column;
  }
  .textsub{
    max-width: 100%;
  }
}
@media only screen and (max-width: 992px) {

}

::placeholder {
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.4);
}

.drop {
  background: $white;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border-left: 1px solid $white;
  border-top: 1px solid $white;
  box-shadow: 10px 10px 60px -8px rgba(0,0,0,0.2);
  position: absolute;
  transition: all 0.2s ease;
  
  &-1 {
    height: 80px;
    width: 80px;
    top: -20px;
    left: -40px;
    z-index: -1;
  }
  
  &-2 {
    height: 80px;
    width: 80px;
    bottom: -30px;
    right: -10px;
  }
  
  &-3 {
    height: 100px;
    width: 100px;
    bottom: 120px;
    right: -50px;
    z-index: -1;
  }
  
  &-4 {
    height: 120px;
    width: 120px;
    top: -60px;
    right: -60px;
  }
  
  &-5 {
    height: 60px;
    width: 60px;
    bottom: 170px;
    left: 90px;
    z-index: -1;
  }
}

a,
input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}







background-image: url(${BgImage?.src});
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
.ct{
  padding-bottom: 20px;
}
  padding-top: 140px;
  @media (max-width: 1550px) {
    padding-top: 90px;
  }
  @media (max-width: 768px) {
    padding-top: 70px;
  }
  h2 {
    text-align: center;
    margin-bottom: 0px;
    font-weight: bold;
    color: ${themeGet('colors.darkText', '#0F2137')};
    font-size: 26px;
    @media (max-width: 1199px) {
      font-size: 24px;
    }
    @media (max-width: 480px) {
      font-size: 22px;
    }
    @media (max-width: 425px) {
      max-width: 290px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .postWrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
  }
  .post {
    flex: 0 0 33.333%;
    max-width: 33.333%;
    padding: 0 15px;
    margin-top: 50px;
    @media (max-width: 1550px) {
      margin-top: 40px;
    }
    @media (max-width: 768px) {
      flex: 0 0 50%;
      max-width: 50%;
      margin-top: 30px;
    }
    @media (max-width: 480px) {
      flex: 0 0 100%;
      max-width: 100%;
    }
    img {
      transform: translateY(0px);
      transition: transform 500ms ease;
    }
    &:hover {
      img {
        transform: translateY(-10px);
      }
    }
    h3 {
      margin: 0;
      font-size: 18px;
      font-weight: 500;
      margin-top: 20px;
      color: ${themeGet('colors.darkText', '#0F2137')};
      @media (max-width: 1199px) {
        font-size: 17px;
      }
      @media (max-width: 768px) {
        font-size: 16px;
      }
      a {
        color: inherit;
        transition: all 500ms ease;
        &:hover {
          color: ${themeGet('colors.secondary')};
        }
      }
    }
  }
  .postMeta {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    a {
      transition: all 500ms ease;
      font-size: 16px;
      color: ${themeGet('colors.darkText', '#0F2137')};
      @media (max-width: 1199px) {
        font-size: 15px;
      }
      &:hover {
        color: ${themeGet('colors.primary')};
      }
    }
    a:not(:last-of-type)::after {
      content: '•';
      margin-left: 10px;
      margin-right: 10px;
      &:hover {
        color: ${themeGet('colors.darkText', '#0F2137')};
      }
    }
  }
  .text-center {
    margin-bottom: 50px;
    text-align: center;
    margin-top: 50px;
    @media (max-width: 1550px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }
    @media (max-width: 768px) {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
  .MoreButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: ${themeGet('colors.primary')};
    color: #fffaf0;
    transition: all 500ms ease;
    padding: 17px 26px;
    border-radius: 100px;
    font-weight: 700;
    i {
      margin-left: 10px;
    }
    &:hover {
      background-color: ${themeGet('colors.primaryHover')};
    }
  }
  .inputContainer{
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`;

export default RequestFormWrapper;
