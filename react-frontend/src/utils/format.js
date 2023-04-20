export function numberWithCommas(x) {
  const decimalPart = (Math.round(parseFloat(x) * 100) / 100).toFixed(2);
  const integerPart = decimalPart.toString().split(".")[0];
  const formattedDecimalPart = decimalPart.toString().split(".")[1];
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );
  return `${formattedIntegerPart}.${formattedDecimalPart}`;
}
