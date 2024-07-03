// eslint-disable-next-line import/no-extraneous-dependencies
import ReactDOM from 'react-dom';
import Policy from 'components/policy';
import styles from './Register.module.css';

function Register() {
  const openPrivacyPolicy = () => {
    const newWindow = window.open('', '', 'width=600,height=400');

    newWindow.document.write('<div id="privacy-policy-root"></div>');
    newWindow.document.title = '개인정보처리방침안내';
    newWindow.document.body.style.margin = 0;

    const container = newWindow.document.getElementById('privacy-policy-root');
    ReactDOM.createRoot(container).render(<Policy window={newWindow} />);
  };

  return (
    <div className={styles.register}>
      <h3>관심고객 등록</h3>
      <div>
        <div className={styles.input_box}>
          <div className={styles.input}>
            <input placeholder="이름" />
            <input placeholder="연락처" />
            <input placeholder="내용" />
          </div>
          <div className={styles.check}>
            <p>
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <span
                onClick={() => {
                  openPrivacyPolicy();
                }}
              >
                개인정보처리방침
              </span>{' '}
              동의
            </p>
            <input
              className={styles.check_box}
              id="privacy-policy"
              name="privacy-policy"
              type="checkbox"
            />
          </div>
        </div>
      </div>
      <div className={styles.register_btn}>관심고객 등록하기</div>
    </div>
  );
}

export default Register;
