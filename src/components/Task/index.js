import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';
import 'moment-timezone';

import { FiCircle, FiCheckCircle, FiMoreHorizontal, FiEdit2, FiTrash2 } from "react-icons/fi";
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
    position: relative;

    div {
      display: flex;
      align-items: center;

      i { margin-right: 20px; }
    }

    .optionsContainer {
      display: none;
      position: absolute;
      right: 10px;
      top: 10px;

      &.show { display:flex; }

      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
      }

      .optionsWindow {
        position: absolute;
        top: 0;
        right: 0;
        flex-direction: column;
        width: 80px;
        display: flex;

        button {
          width: 100%;
          text-align: left;
          border: none;
          background-color: ${props => props.theme.purple};
          color: ${props => props.theme.fontBtn};
          padding: .5em;
          display: flex;
          align-items: center;

          svg { 
            color: ${props => props.theme.fontBtn}; 
            margin-right: .2em;
          }

          &:first-child {
            border-bottom: 1px solid ${props => props.theme.gray900};
          }
        }
      }
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

export default function Task({ taskContent, changeStatus, editTask, removeTask }) {
  const [showOptions, setShowOptions] = React.useState(false);
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
        <i 
          className="optionsIcon" 
          onClick={() => setShowOptions(true) }>
            <FiMoreHorizontal size="25" />  
        </i>
        <div className={'optionsContainer '+(showOptions ? 'show' : '')}>
          <div className="overlay" onClick={() => setShowOptions(false) }></div>
          <div className="optionsWindow">
            <button onClick={editTask}><FiEdit2 size="15" /> Edit</button>
            <button onClick={() => {
              removeTask();
              setShowOptions(false);
            }}><FiTrash2 size="15" /> Remove</button>
          </div>
        </div>
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
