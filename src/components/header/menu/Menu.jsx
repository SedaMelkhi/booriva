import { useState } from 'react';
import styles from './Menu.module.css';

const Menu = ({ setIsShow }) => {
  const [menu, setMenu] = useState([
    {
      id: '000',
      text: 'Новинки',
      categories: 0,
    },
    {
      id: '001',
      text: 'Платья',
      categories: 6,
    },
    {
      id: '002',
      text: 'Верх',
      categories: 6,
    },
    {
      id: '003',
      text: 'Юбки',
      categories: 5,
    },
    {
      id: '004',
      text: 'Куртки',
      categories: 6,
    },
    {
      id: '005',
      text: 'Мелочи',
      categories: 0,
    },
    {
      id: '006',
      text: 'Костюмы',
    },
  ]);
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuli}>
        {menu.map(({ id, text }) => (
          <li key={id} onMouseEnter={() => setIsShow(true)} onMouseLeave={() => setIsShow(false)}>
            <a className={styles.list}>{text}</a>
          </li>
        ))}
        <li>
          <a className={styles.list}>#Boorivagirls</a>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
