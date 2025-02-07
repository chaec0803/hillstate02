import styles from './Caution.module.css';

function DesignCaution() {
  return (
    <div className={styles.caution}>
      <p>
        ※ 상기 이미지는 소비자의 이해를 돕기 위해 단지 주변의 아파트 및 기타
        건물들을 보이지 않게 처리하여 표현한 것으로 실제와 차이가 있을 수 있으니
        현장을 확인하시기 바랍니다.
      </p>
      <p>
        ※ 단지를 제외한 기타 배경(산, 공원, 조명, 식재 등)은 소비자의 이해를
        돕기 위한 참고 이미지를 활용하였으며, 실제와 다를 수 있습니다.
      </p>
      <p>
        ※ 실 시공 시 입면 디자인(저층부 석재 및 도장 디자인 포함), 줄눈, 주동
        출입구, 문주, 조경, 색채, 몰딩, 창호, 판매시설, 옥상 장식물, 필로티,
        외부 계단, 엘리베이터 등 각종 시설물의 디자인 및 마감 사양, 동선 체계
        등이 변경될 수 있습니다.
      </p>
    </div>
  );
}

export default DesignCaution;
