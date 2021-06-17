import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  @media screen and (max-width: 500px) {
    margin-bottom: 40px;
  }

  .appName {
    display: flex;
    align-items: center;
    font-size: 26px;
    color: ${props => props.theme.fontBtn};

    .containerIcon {
      background-color: ${props => props.theme.purple};
      border-radius: 50%;
      display: flex;
      align-items: center;
      padding: .4em;
      margin-right: 1em;
      height: 40px;
      width: 40px;
    }
  }

  button {
    background-color: ${props => props.theme.purple};
    color: ${props => props.theme.fontBtn};
    border-radius: 20px;
    border: none;
    padding: 15px 63px;
    font-size: 16px;
    cursor: pointer;

    @media screen and (max-width: 500px) {
      padding: 15px 0;
      width: 100%;
      max-width: 163px;
    }
  }
`;

export default function Header({ newTaskClick }) {
  return (
    <HeaderWrapper>
      <div className="appName">
        <div className="containerIcon">
          <GiHamburgerMenu size="25"/>
        </div>
        tsks.
      </div>
      <button onClick={newTaskClick}>New Task</button>
    </HeaderWrapper>
  );
}