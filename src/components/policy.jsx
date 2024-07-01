import React from 'react';

function PrivacyPolicy({ window }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>개인정보처리방침안내</h1>
      <p>해당 홈페이지에 맞는 개인정보처리방침을 입력합니다.</p>
      <button
        type="button"
        onClick={() => {
          window.close();
        }}
      >
        확인
      </button>
    </div>
  );
}

export default PrivacyPolicy;
