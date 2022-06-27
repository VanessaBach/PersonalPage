import {PencilLine} from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"  
      />
      
      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/9847731?v=4"/>

        <strong>Vanessa Bach</strong>
        <span>Web Developer</span>
        <footer>
          <a href="#">
            <PencilLine size={20}/>
            Editar seu perfil
          </a>
        </footer>

      </div>
    </aside>
  );
}