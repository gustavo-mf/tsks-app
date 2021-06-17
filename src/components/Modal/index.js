import React from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

const ModalWrapper = styled.div`

  .overlay {
    position: fixed;
    opacity: 0.9;
    top: 0;
    width: 100%;
    height: 100vh;
    left: 0;
    background-color: ${props => props.theme.black};
  }

  .modalContainer {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 60px 48px;
    border-radius: 20px;
    background-color: ${props => props.theme.gray900};
    width: 100%;
    max-width: 576px;

    @media screen and (max-width: 650px) {
      margin: 16px;
      top: 50%;
      transform: none;
      left: 0;
      width: calc(100% - 32px) ;
      transform: translate(0, calc( -50% - 16px));
    }

    .modalHeader {
      margin-bottom: 44px;

      .iconContainer {
        position: absolute;
        top: 21px;
        right: 21px;
        cursor: pointer;
      }

      .titleContainer { font-size: 26px; }
    }

    .modalBody {
      display: flex;
      flex-direction: column;

      input, textarea {
        max-width: 480px;
        width: 100%;
        margin-bottom: 20px;
        border-radius: 20px;
        background-color: ${props => props.theme.gray850};
        border: none;
        font-size: 16px;
        color: ${props => props.theme.gray};
        line-height: 19.36px;
        font-family: sans-serif;
      }

      input { 
        height: 64px; 
        padding: 20px 24px;
      }

      textarea { 
        height: 234px; 
        padding: 16px 24px;
        resize: none;
      }

      button {
        background-color: ${props => props.theme.purple};
        color: ${props => props.theme.font};
        border-radius: 20px;
        border: none;
        width: 100%;
        font-size: 16px;
        padding: 20px 0;
        cursor: pointer;
      }
    }

  }
`;

export default function modal({ show, close, task, saveTask }) {
  if(!show) return null;
  
  const taskCopy = {
    title:'',
    description: ''
  };

  if(task) {
    taskCopy.title = task.title;
    taskCopy.description = task.description;
  }

  const [title, setTitle] = React.useState(taskCopy.title);
  const [description, setDescription] = React.useState(taskCopy.description);

  return (
    <ModalWrapper>
      <div className="overlay" onClick={close}></div>
      <div className="modalContainer">
        <div className="modalHeader">
          <div className="iconContainer" onClick={close}>
            <AiOutlineClose size="18" />
          </div>
          <div className="titleContainer">
            { (task ? 'Edit Task' : 'New Task') }
          </div>
        </div>
        
        <div className="modalBody">
          <input 
            placeholder="Title" 
            value={title} 
            onChange={(infos) => {setTitle(infos.target.value);}} 
          />
          <textarea 
            placeholder="Description" 
            value={description} 
            onChange={(infos) => {setDescription(infos.target.value);}} 
          />
          <button 
            onClick={() => {
              saveTask(title, description);
              close();
            }}>
              Save
            </button>
        </div>
      </div>
    </ModalWrapper>
  );
}