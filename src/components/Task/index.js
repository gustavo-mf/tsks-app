import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment-timezone';

import { IconName } from "react-icons/fi";
//FiCircle
//FiCheckCircle

const TaskContainer = styled.div`
  width: 100%;
`;

export default function Task({ taskContent, onChange }) {
  
  return (
    <TaskContainer>
      <div className="taskHeader">
        <div>
          icon
          {taskContent.title}
        </div>
        icon more actions
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
