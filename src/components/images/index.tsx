import styles from "./images.module.css";
function Image({ src, color, className }: any) {
  return (
    <img
      className={`${styles.image} ${className}`}
      style={{ borderColor: color }}
      src={src}
      alt="devfestado picture"
    />
  );
}

export default Image;
