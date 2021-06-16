import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment-timezone';

import { FiCircle, FiCheckCircle, FiMoreHorizontal } from "react-icons/fi";
//FiCircle
//FiCheckCircle

const TaskContainer = styled.div`
  width: 100%;
  margin-bottom: 2em;
  border-radius: 20px;
  background-color: ${props => props.theme.gray850};
  
  .taskBody, .taskHeader, .taskFooter {
    padding: 20px;
    font-size: 16px;

    i { cursor: pointer; }

    svg {
      color: ${props => props.theme.purple};
    }
  }

  .taskHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;

      i { margin-right: 20px; }
    }
  }

  .taskBody {
    background-color: ${props => props.theme.gray900};
    line-height: 26px;
  }

  .taskFooter {
    text-align: center;
  }
`;

export default function Task({ taskContent, changeStatus }) {
  return (
    <TaskContainer>
      <div className="taskHeader">
        <div>
          <i 
            onClick={changeStatus}
          >
            {taskContent.status == 'open' ? <FiCircle size="30"/> : <FiCheckCircle size="35"/>}
          </i>
          {taskContent.title}
        </div>
        <i><FiMoreHorizontal size="25" /></i>
      </div>
      <div className="taskBody">
        {taskContent.description}
      </div>
      <div className="taskFooter">
        {'Created '}
        <Moment format="MMMM D, YYYY h:mma">
          {taskContent.creationDate}
        </Moment>
      </div>
    </TaskContainer>
  );
}
