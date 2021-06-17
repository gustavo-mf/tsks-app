import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';

import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import TaskComponent from '../src/components/Task';
import Modal from '../src/components/Modal';

import tasks from '../tasks.json';

const BodyWrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 60px;

  @media screen and (max-width: 1200px) {
    padding: 60px 1em;
  }
`;

const MainWrapper = styled.main`
  margin: 0 auto 1em;

  h1 { 
    font-size: 42px; 
    margin-bottom: 61px;
  }

  .containerStatus {
    margin-bottom: 60px;

    button {
      border-radius: 20px;
      border: 1px solid;
      border-color: ${props => props.theme.gray750};
      background-color: ${props => props.theme.black};
      color: ${props => props.theme.font};
      font-size: 16px;
      padding: 14px 77px;
      cursor: pointer;
    }

    button:first-child { margin-right: 20px; }

    button.clicked {
      background-color: ${props => props.theme.gray750};
    }

    @media screen and (max-width: 500px) {
      display: flex;
      justify-content: space-between;

      button {
        width: 47%;
        padding: 14px 0;
      }
    }
  }

  .noTask {
    font-size: 26px;
    color: ${props => props.theme.purple};
  }
`;

export default function Home() {
  const [status, setStatus] = React.useState('open');
  const [tasksList, setTasksList] = React.useState(tasks);
  const [showModal, setshowModal] = React.useState(false);
  const [taskToEdit, setTaskToEdit] = React.useState(null);

  const arrayTasks = tasksList.map((elem, index) => {
    if(elem.status == status) {
      return (
        <TaskComponent 
          key={'t-'+index} 
          taskContent={elem} 
          changeStatus={() => {         
            let newArr = [...tasksList];
            elem.status = (elem.status == 'open' ?'closed':'open');
            newArr[index] = elem;
            setTasksList(newArr);
          }}
          editTask={() => {
            const taskCopy = elem;
            taskCopy.index = index;

            setTaskToEdit(taskCopy);
            setshowModal(true);
          }}
          removeTask={() => {
            let newArr = tasksList.filter((cur, indexFilter) => {
              return indexFilter != index;
            });
            
            setTasksList(newArr);
          }}
        />
      );
    }
  }).filter((elem) => elem);

  return (
    <BodyWrapper>
      <Head>
        <title>Tsks. app</title>
        <meta name="description" content="Created for a test on outboxup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header newTaskClick={
        () => {
          setTaskToEdit(null);
          setshowModal(true);
        }}
      />
        
      <MainWrapper>
        <h1>
          Hi there.
        </h1>

        <div className="containerStatus">
          <button 
            className={(status == 'open'? 'clicked':'')}
            onClick={(infosEvento) => { setStatus('open'); }
            }>To do</button>
          <button
            className={(status == 'closed'? 'clicked':'')}
            onClick={(infosEvento) => { setStatus('closed'); }
          }>Closed</button>
        </div>

        <div className="containerTasks" >
          {console.log(arrayTasks)}
          { arrayTasks.length > 0 ? arrayTasks : <p className="noTask">No tasks</p> }
          
        </div>

      </MainWrapper>

      <Footer />

      <Modal 
        show={showModal} 
        close={() => setshowModal(false)}
        task={taskToEdit}
        saveTask={(title, description) => {
          if(taskToEdit) {
            //edit task

            const newArr = [...tasksList];
            const newTask = taskToEdit;
            newTask.title = title;
            newTask.description = description;

            newArr[newTask.index] = newTask;
            setTasksList(newArr);
          } else {
            //new task
            const newTask = {
              "title": title,
              "description": description,
              "creationDate": new Date().toISOString(),
              "status": "open"
            };

            const newArr = [newTask, ...tasksList];
            setTasksList(newArr);
          }
        }}
      />
    </BodyWrapper>
  )
}
