import styles from './Circle.module.css';

function Circle({ isShow, setIsShow }) {
  const arrowLeft = '←';
  const arrowRight = '→';
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={styles.circle}
      onClick={() => {
        setIsShow(true);
      }}
    >
      {isShow ? arrowRight : arrowLeft}
    </div>
  );
}

export default Circle;
