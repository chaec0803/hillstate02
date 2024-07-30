import styles from './Caution.module.css';

function EatateCaution() {
  return (
    <div className={styles.caution}>
      <p>
        ※ 상기 단지배치도는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을
        수 있습니다.
      </p>
      <p>
        ※ 배치도 내 단지 경계선 및 방위표는 CG상의 표현으로 실제와 다소 차이가
        있을 수 있으며, 구획선 및 시설물의 위치, 규모, 조경계획 등은 측정결과 및
        각종 기관의 평가에 따라 실 시공시 다소 변경될 수 있습니다.
      </p>
      <p>
        ※ 지하주차장 입구와 인접한 세대 및 단지내·외 도로(도시계획도로,
        비상차로, 소방차전용구역) 등에 인접한 저층부 세대의 경우 차량소음,
        자동차 전조등, 조경등에 의한 환경권, 사생활권이 침해될 수 있습니다.
      </p>
    </div>
  );
}

export default EatateCaution;
