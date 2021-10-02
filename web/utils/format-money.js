export default function formatMoney(number, decPlaces, decSep, thouSep) {
  return number.toLocaleString('en-AU', {style: 'currency', currency: 'AUD', minimumFractionDigits: 0})
};