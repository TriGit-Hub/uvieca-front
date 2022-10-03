import styled from 'styled-components';
const ServicesArea = styled.section`
background: rgb(91,152,201);
background: -moz-linear-gradient(146deg, rgba(91,152,201,1) 0%, rgba(144,194,112,1) 100%);
background: -webkit-linear-gradient(146deg, rgba(91,152,201,1) 0%, rgba(144,194,112,1) 100%);
background: linear-gradient(146deg, rgba(91,152,201,1) 0%, rgba(144,194,112,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#5b98c9",endColorstr="#90c270",GradientType=1);
  @media (max-width: 768px) {
    padding-top: 30px;
  }
  .container {
    max-width: 1000px;
  }
  .servicePost {
    display: flex;
    margin-top: 70px;
    margin-bottom: 70px;
    background: #273F6E;
    padding: 10px;
    transition: 0.3s;
    border-radius: 20px;
    @media (max-width: 768px) {
      margin-top: 40px;
    }
    
    > img {
      flex-shrink: 0;
      width: 70px;
      height: 70px;
    }
    .content {
      margin-left: 20px;
      h3 {
        margin: 0;
        font-weight: bold;
        font-size: 18px;
        line-height: 1.27;
        // color: #0f2137;
        color: #72B842;
        margin-bottom: 10px;
        @media (max-width: 425px) {
          font-size: 16px;
        }
      }
      p {
        font-weight: normal;
        font-size: 15px;
        line-height: 1.87;
        color: #fff;
        margin: 0;
      }
    }
    &:hover {
      background: #72B842;
      h3{
        color: #273F6E;
      }
      .service-icon {
        animation: var(--shakeAnim);
      }
    }
  }

  
  .service-icon {
    width: var(--width);
    flex: 0 0 var(--width)
  }
`;
export default ServicesArea;

export const Row = styled.div`
  margin-left: -44px;
  margin-right: -44px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1199px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 768px) {
    margin-left: -15px;
    margin-right: -15px;
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 480px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
export const Col = styled.div`
  padding-left: 44px;
  padding-right: 44px;
  flex: 0 0 50%;
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 575px) {
    flex: 0 0 100%;
  }
`;
