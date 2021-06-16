import styled from 'styled-components';

const FooterWrapper = styled.footer`
  border-top: 1px solid #414052;
  text-align: center;
  padding-top: 20px;
  font-size: 16px;
  color: ${props => props.theme.fontBtn};
  margin-bottom: 20px;
`;

export default function Footer(props) {
  return (
    <FooterWrapper>
      Developed by Outboxup
    </FooterWrapper>
  );
}