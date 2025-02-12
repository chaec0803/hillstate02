import styles from './Caution.module.css';

function SmartCaution() {
  return (
    <div className={styles.caution}>
      <p>
        ※ 상기 마감 및 시스템 사양은 현장여건 및 구조, 성능, 상품 개선을 위하여
        입주 시 동등 수준의 제품으로 변경될 수 있습니다.
      </p>
      <p>
        ※ 스마트폰 키 및 스마트폰 자동 주차위치 저장 시스템은 스마트폰의
        Bluetooth 기능이 활성화되어 있어야 하며, 일부 스마트폰 기기에서는 이용에
        제한이 있을 수 있습니다.
      </p>
      <p>
        ※ 스마트폰 자동 주차위치 저장 시스템은 세대별 등록된 차량을 지하주차장에
        주차할 시 이용 가능합니다.
      </p>
      ※ 지하주차장 지능형 조명제어 시스템의 경우 지하주차장 차량통로구역에
      한하여 적용됩니다.
      <p>
        ※ 카투홈 서비스는 현대/기아차 19년이후 생산 모델 중 카투홈 기능이 있는
        차량으로 해당차량의 커넥티드서비스(블루링크,UVO,제네시스)에 가입된
        경우에 한하여 사용 가능합니다. 또한 해당서비스는 제조사의 운영 및
        요금정책에 따라 기능 및 비용이 변경될 수 있으며, 제조사의 홈페이지를
        참조하시기 바랍니다.
      </p>
      <p>
        ※ 하이오티 서비스의 경우 이동통신사/포털사/제휴사의 서비스가 포함될 수
        있으며, 해당 업체 정책에 따라 사용요금 및 사용제한이 발생할 수 있습니다.
      </p>
    </div>
  );
}

export default SmartCaution;
