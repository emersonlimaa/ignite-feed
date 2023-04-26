import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts =[
  {
    id: 1,
    author:{
      avatarUrl: 'https:github.com//emersonlimaa.png',
      name: 'Emerson Lima',
      role: 'Frontend Developer'
    },
    content: [
        {type: 'paragraph', content: 'Fala Galeraaa!'},

        {type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, qui voluptatibus voluptatum doloribus aliquid unde, possimus molestias.'},
        {type: 'link', content: 'emersonlimaa.vercel.app'},
    ],
    publishedAt: new Date('2023-05-05 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https:github.com//emersonlimaa.png',
      name: 'Emerson Lima 2',
      role: 'Frontend Developer'
    },
    content: [
        {type: 'paragraph', content: 'Fala Galeraaa!'},

        {type: 'paragraph', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, qui voluptatibus voluptatum doloribus aliquid unde, possimus molestias.'},
        {type: 'link', content: 'emersonlimaa.vercel.app'},
    ],
    publishedAt: new Date('2022-02-02 20:00:00'),
  }
]

function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        {posts.map(post => {
          return (
          <Post 
            author={post.author}
          />
          )
        })}
      </main>
      </div>
    </div>
  )
}

export default App
