import styles from './Caution.module.css';

function Caution() {
  return (
    <div className={styles.caution}>
      <p>
        ※ 상기 동·호수배치도는 오탈자 혹은 오류가 있을 수 있으므로 자세한 사항은
        견본주택에 문의하시기 바랍니다.
      </p>
    </div>
  );
}

export default Caution;
