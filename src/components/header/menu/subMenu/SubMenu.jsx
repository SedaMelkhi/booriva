import styles from './SubMenu.module.sass';

const SubMenu = ({ isShow, setIsShow }) => {
  return (
    <ul
      className={styles.submenu + ' ' + (isShow ? styles.show : styles.hidden)}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}></ul>
  );
};
export default SubMenu;
