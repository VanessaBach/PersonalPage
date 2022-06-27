import { Header } from './components/Header';
import { Post} from './components/Post' ;
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';


// author: { avatar_url:"",  name:"", role:""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/VanessaBach.png',
      name: 'Vanessa Bach',
      role: 'Web Developer'
    },
    content: [          
      {type: 'paragraph', content: 'My name is Vanessa.'},
      {type: 'paragraph', content: 'I am Full Stack Web Dev.'},
      {type: 'link', content: 'operantar.live'},    
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/soutobias.png',
      name: 'Tobias',
      role: 'Data Scientist'
    },
    content: [          
      {type: 'paragraph', content: 'My name is Tobias.'},
      {type: 'paragraph', content: 'I am Data Scientist.'},
      {type: 'link', content: 'operantar.live'},    
    ],
    publishedAt: new Date('2022-06-20 20:00:00')
  },
];


export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id }
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
      </div>
    </div>
  )
}


