import styles from "./NavbarItem.module.css";

const NavbarItem = (props) => {
  const { navbarItem } = props;
  return <li className={styles.navbar__item}>{navbarItem.title}</li>;
};

export default NavbarItem;
