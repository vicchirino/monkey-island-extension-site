import styled from "styled-components";

const TooltipText = styled.span`
   {
    visibility: hidden;
    background-color: ${({ theme }) => theme.colors.guybrush_black};
    color: ${({ theme }) => theme.colors.guybrush_white};
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    border-radius: 2px;
    position: absolute;
    z-index: 1;
    bottom: 110%;
    padding: 5px;
    left: 0%;
    border: 1px solid ${({ theme }) => theme.colors.gold_orange};
    transition: opacity 0.3s ease-in-out;
    :after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      border-width: 5px;
    }
    @media (max-width: 800px) {
      font-size: 13px;
      font-weight: 400;
      padding: 2px;
    }
    @media (max-width: 600px) {
      font-size: 8px;
      font-weight: 400;
      padding: 2px;
    }
  }
`;

const TooltipWrapper = styled.div`
   {
    position: relative;
    display: inline-block;
    :hover span {
      visibility: visible;
    }
  }
`;

const Tooltip = ({ children, text }) => (
  <TooltipWrapper>
    {children}
    <TooltipText>{text}</TooltipText>
  </TooltipWrapper>
);

export default Tooltip;
