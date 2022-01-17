
import './App.css';

import { Todo } from './component/Todo';

import { Carosel } from './component/Carosel'

import { ImgCarosel } from './component/ImgCarosel';
import { TextCarosel } from './component/TextCarosel';

import { useState, useReducer } from 'react';


const heroImages = [
  'https://picsum.photos/id/1001/400/600',
  'https://picsum.photos/id/1002/400/600',
  'https://picsum.photos/id/1003/400/600',
  'https://picsum.photos/id/1004/400/600',
  'https://picsum.photos/id/1005/400/600',
  'https://picsum.photos/id/1006/400/600',
  'https://picsum.photos/id/1011/400/600',
  'https://picsum.photos/id/1008/400/600',
]

const images = [
  'https://picsum.photos/id/101/200/300',
  'https://picsum.photos/id/102/200/300',
  'https://picsum.photos/id/103/200/300',
  'https://picsum.photos/id/104/200/300',
  'https://picsum.photos/id/112/200/300',
  'https://picsum.photos/id/106/200/300',
  'https://picsum.photos/id/111/200/300',
  'https://picsum.photos/id/108/200/300',
]

const fakeReview = [
  'recensione 1',
  'recensione 2',
  'recensione 3',
  'recensione 4',
  'recensione 5',
  'recensione 6',
  'recensione 7',
  'recensione 8',
  'recensione 9',
  'recensione 10',,
  
]


export const ACTION = {

  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'

}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...state, newTodo(action.payload.name)]


    case ACTION.TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })

    case ACTION.DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.payload.id
      )


    default:
      return state
  }

}

const newTodo = (name) => {
  return {
    id: Date.now(),
    name: name,
    completed: false
  }
}



function App() {
  const [state, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  const submitTodo = (e) => {
    e.preventDefault()
    dispatch({ type: ACTION.ADD_TODO, payload: { name: name } })
    setName('')
  }


  return (
    <div className="App">

      <Carosel arr={heroImages}
        left={400}
        right={400}
        width={'1200px'}
        comp={heroImages.map((img, index) => <ImgCarosel img={img} key={index}/>)} />

      <form>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={submitTodo}>add</button>
      </form>
      {state.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}

      <Carosel arr={images}
        left={200}
        right={200}
        width={'880px'}
        comp={images.map((img, index) => <ImgCarosel img={img} key={index}/>)} />

      <Carosel arr={fakeReview}
              left={150}
              right={150}
              width={'650px'}
              comp={fakeReview.map((text, index) => <TextCarosel key={index} text={text}/>)} />

    </div>
  );
}

export default App;
