import React, { useState } from 'react';
import './App.css';

function App() {

  let post = 'React로 블로그 만들기';

  let [title, setTitle] = useState(['졸리다','낮잠','자고 싶다']);
  let [likes, setLikes] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [id, setId] = useState(0);
  let [input, setInput] = useState('');
  const today = () => {
    let now = new Date();
    let month = now.getMonth()+1;
    let date = now.getDate();
    return month+'월'+date+'일'
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h3>Jisu-Log</h3>
      </div>

      <input onChange={(e)=>{
        setInput(e.target.value)
        console.log(input)
      }}/>
      
      <button onClick={()=>{
        let arr = [...title];
        let copy = [...likes];  
        input !== '' ? 
          arr.unshift(input)&&copy.unshift(0)
          : alert('내용을 입려해주세요');
        setTitle(arr);
        setLikes(copy);
      }}
      >발행</button>

      {
        modal === true ? <Modal title={title} id={id}/> : null
      }

      {
        title.map(function(e, i){
          return (
            <div className='list' key={i}>
            <h4 onClick={()=>{setModal(!modal); setId(i)}}>
              {title[i]}
            <span onClick={(e)=>{ e.stopPropagation();
              let copy = [...likes];
              copy[i] += 1;
              setLikes(copy)}}>
              👍
            </span>   
            {likes[i]} 
            </h4>
            <p> {today()} 발행</p>
            <button onClick={()=>{
              let arr = [...title];
              arr.splice(i,1);
              setTitle(arr);
            }}>삭제</button>
          </div>
          )
        })
      }

      <button onClick={()=>{
        let arr = ([...title]).sort();
        setTitle(arr);}}>
        가나다순 정렬하기
      </button>

      <h4 style={{fontSize:'20px'}}>{post}</h4>

      <Modal2></Modal2>
    </div>
  );
}


function Modal(props){
  
  return (
    <div className='modal'>
      <h4>{props.title[props.id]}</h4>
      <p>7월 29일 발행</p>
      <p>상세내용</p>
      <button>수정</button>    
    </div>
  )
}

class Modal2 extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      name: '안녕 나는 Class'
    }
  }
    render(){
      return (
        <div> {this.state.name} 
          <button onClick={()=>{
            this.setState({name:'나는 이제 안 써'})
          }}
          >눌러봐</button>
        </div>
      )
    }
}

export default App;