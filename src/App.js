import './App.css';
import { useRef, useState } from 'react';

function App() {
  const [todo,setState] = useState('')
  const [todos,settodos]= useState([])
  const input= useRef()

  function inputData(){
    if(todo.length == 0){
      input.current.style.border = "1px solid red"
      input.current.focus()
      
    } else{
      settodos([...todos,
        {key:Date.now(),
          text:todo,
          completeStatus : false,
          removeStatus : false}])
    }
  }
  return (
    <div className="container">
      <div className='container-header'>
      <h1>TODO LIST</h1>
      <hr />
      </div>
      <div className="container-input">
        <div className="input-div">
          <input type="text" ref={input} className='input' name="" id="" onChange={(e) => setState(e.target.value)}/>
        </div>
        <div className="container-add">
          <button className='container-add-button' onClick={() => inputData()}><i className="fa-solid fa-plus" ></i></button>
        </div>
      
      </div>
      <div className="activity">
        <div className="all-activity">
          <div className='header'>
            <h1>task</h1>
            <hr /><hr />
            <div>
            {
          todos.map((obj) => {
            if(obj.removeStatus === false && obj.completeStatus === false){
              return (
                <div className='output'>
                  <p className='output-line'>{obj.text}</p><i  className="fa-solid fa-trash output-line button-icon" onClick={() => {
                      todos.filter((obj2) => {
                        if(obj2.key === obj.key){
                          settodos([...todos,(obj.removeStatus=true)])
                        }
                      })
                      
                  }}></i><i className="fa-solid fa-check output-line " onClick={() => {
                    todos.filter((obj2) => {
                      if(obj2.key === obj.key) {
                        settodos([...todos,(obj.completeStatus = true)])
                      }
                    })
                  }}></i>               
                </div>
                
              )
            }
         
          })
        }
            </div>
          </div>
        </div>
        <div className="complete">
        <div className='header'>
            <h1>completed</h1>
            <hr /><hr />
            {
              todos.map((obj) => {
                if(obj.completeStatus === true && obj.removeStatus === false){
                  return (
                    <div className='output'>
                    <p className='output-line'>{obj.text}</p><i  className="fa-solid fa-trash output-line button-icon" onClick={() => {
                      todos.filter((obj2) => {
                        if(obj2.key === obj.key){
                          settodos([...todos,(obj.removeStatus=true)])
                        }
                      })
                      
                  }}></i>
                    </div>
                  )
                  
                }
              })
              }
          </div>
        </div>
        <div className="remove">
        <div className='header'>
            <h1>Removed</h1>
            <hr /><hr />
            {
              todos.map((obj) => {
                if(obj.removeStatus === true && obj.completeStatus === false){
                 
                  return (
                    <div className='output'>
                    <p className='output-line'>{obj.text}</p><i className=" fa-solid fa-repeat output-line button-icon" onClick={() => {
                      todos.filter((obj2) => {
                        if(obj2.key === obj.key){
                          settodos([...todos,(obj.removeStatus = false)])
                        }
                      })
                      
                  }}></i>
                    </div>
                  )
                }
              })
            }
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
