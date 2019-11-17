import styled from 'styled-components';
import colors from 'ColorsRoot';

const { primary } = colors;

const NotFoundWrap = styled.div`
    font-family: "Avenir Next";
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    padding-top: 25vh;
    border-top: 5px solid ${primary._404_border_color}
`;

const NotFoundInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    max-width: 90%;
    height: 200px;
    text-align: center;
`;

const NotFoundInfo = styled.p`
   font-size: 14px;
   color: ${primary._404_text_color}
`;

const HomeLink = styled.div`
    font-size: 16px;
    
    a {
      color: ${primary._404_link_color};
      text-decoration: underline;
      
    }
`;

const Icon = styled.div`
    width: 70px;
    height: 70px;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${primary._404_icon_bg};
`;

const NotFoundCode = styled.div`
    font-size: 26px;
    margin-top: 25px;
`;

export {
  NotFoundWrap,
  NotFoundInner,
  NotFoundInfo,
  HomeLink,
  Icon,
  NotFoundCode
};
