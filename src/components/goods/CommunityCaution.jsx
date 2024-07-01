import styles from './Caution.module.css';

function CommunityCaution() {
  return (
    <div className={styles.caution}>
      <p>
        ※ 상기 이미지는 입주자의 이해를 돕기 위한 이미지컷으로 실제와 다를 수
        있습니다.
      </p>
      <p>※ 각 시설의 설치 개소 및 장소는 계약시 반드시 확인하시기 바랍니다.</p>
      <p>
        ※ 현장 여건 및 구조, 성능, 상품개선을 위하여 평면 및 디자인이 변경될 수
        있습니다.
      </p>
      <p>
        ※ 부대시설 일체의 운영 및 유지관리는 입주민이 자체적으로 해야하며,
        커뮤니티 공간 내 운동기구, 옷장(락카)은 기본 제공되며, 작은 도서관,
        골프연습장, 스크린골프, 어린이집, 경로당 등의 시설관리 및 운영을 위한
        가구, 비품, 스탠드, 각종 집기류는 제공되지 않습니다
      </p>
    </div>
  );
}

export default CommunityCaution;
