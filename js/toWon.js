function toWon(amount) {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    minimumFractionDigits: 0, // 소수점 제거
    maximumFractionDigits: 0, // 소수점 제거
  }).format(amount);
}
