import styles from './SideTap.module.css';

export default function SideTap() {
  return (
    <div className={styles.side_tap}>
      <ul>
        <li>
          <a href="https://naver.me/GgW6tWP7" target="_blank" rel="noreferrer">
            방문예약
          </a>
        </li>
        <li>
          <a href="https://naver.me/GgW6tWP7" target="_blank" rel="noreferrer">
            오시는길
          </a>
        </li>
        <li>
          <a href="tel:1522-9022">전화연결</a>
        </li>
      </ul>
    </div>
  );
}
