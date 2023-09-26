import styles from "./buttons.module.css";

export const RegularButton = ({ title, className, onClick }: any) => {
  return (
    <button
      className={`${styles.regularButton} ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
