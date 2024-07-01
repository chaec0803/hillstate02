import styles from './Caution.module.css';

function Caution() {
  return (
    <div className={styles.caution}>
      <p>
        ※ 상기 위치도는 소비자의 이해를 돕기 위해 제작한 것으로 실제와 차이가
        있을 수 있습니다.
      </p>
      <p>
        ※ 단지 인근의 각종 개발계획 및 도로 등의 기반시설은 인·허가나 정부시책에
        따라 변경 및 취소 가능한 바, 해당 인·허가청 및 현장에서 확인하시기
        바라며 조합 및 시공사와는 무관합니다.
      </p>
      <p>
        ※ 상기 위치도의 도시철도 2호선 개발계획은 대전광역시
        보도자료(2024.03.05)를 참조했으며, 상기계획은 사업주체, 국가기관, 지자체
        및 기타 기관의 사업추진 중 변경, 지연, 취소될 수 있습니다.
      </p>
      <p>
        ※ 상기 위치도의 도마·변동 개발계획은 대전광역시 고시 제 2023-28호,
        157호를 참조했으며, 상기계획은 사업주체, 국가기관, 지자체 및 기타 기관의
        사업추진 중 변경, 지연, 취소될 수 있습니다.
      </p>
      <p>
        ※ 국가첨단산업벨트 조성계획은 국토교통부 2023년 3월 15일 발표내용을 참조
        하였습니다.
      </p>
    </div>
  );
}

export default Caution;
