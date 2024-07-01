import Space from 'const/space';
import styles from './SpaceNav.module.css';

function SpaceNav({ current, setCurrent }) {
  return (
    <div className={styles.space}>
      {Space.map((space) => (
        <p
          onClick={() => {
            if (current !== space) {
              setCurrent(space);
            }
          }}
          key={space}
          className={`${current === space ? styles.active : ''}`}
        >
          {space}
        </p>
      ))}
    </div>
  );
}

export default SpaceNav;
