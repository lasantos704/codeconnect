import { Link } from "react-router";
import styles from "./button.module.css";

export const Button = ({ children, outline, href, ...rest }) => {
  if (href) {
    return (
      <Link to={href} className={outline ? styles.outline : styles.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={outline ? styles.outline : styles.btn} {...rest}>
      {children}
    </button>
  );
};
