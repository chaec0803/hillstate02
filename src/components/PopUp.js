import pop02 from 'assets/images/pop02.jpg';
import styles from './PopUp.module.css';
import { setCookie } from '../util/cookie';

export default function PopUp({ setIsShow }) {
  return (
    <div className={styles.pop}>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <a target="_blank" href="https://naver.me/GgW6tWP7" rel="noreferrer">
        <div className="flex">
          <img src={pop02} alt="이벤트" />
        </div>
      </a>
      <ul className={styles.close_choice}>
        <li
          className="not_today"
          onClick={() => {
            setCookie('isShow', 'false');
            setIsShow();
          }}
        >
          오늘 하루 보지 않기
        </li>
        <li className="close_btn" onClick={setIsShow}>
          닫기
        </li>
      </ul>
    </div>
  );
}
