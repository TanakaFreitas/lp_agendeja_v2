// Calcula contraste WCAG entre pares de cores: node scripts/contrast.mjs
const L = (hex) => {
  const c = hex.replace('#', '').match(/../g).map((h) => parseInt(h, 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => { const [x, y] = [L(a), L(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
const pares = process.argv.length > 2 ? [process.argv.slice(2)] : [
  ['#FFFFFF', '#1E2A38'], ['#FFFFFF', '#394D73'], ['#FFFFFF', '#928163'], ['#0B191E', '#928163'],
  ['#928163', '#FFFFFF'], ['#928163', '#F1F4F8'], ['#928163', '#1E2A38'], ['#928163', '#0B191E'], ['#928163', '#0D1E23'],
  ['#6D604A', '#FFFFFF'], ['#6D604A', '#F1F4F8'], ['#384E58', '#FFFFFF'], ['#384E58', '#F1F4F8'],
  ['#7292A0', '#0B191E'], ['#7292A0', '#0D1E23'], ['#8FA6D1', '#0B191E'], ['#8FA6D1', '#0D1E23'],
  ['#5FAE80', '#0D1E23'], ['#336A4A', '#FFFFFF'], ['#C8D7E4', '#1E2A38'], ['#B9C6D6', '#1E2A38'],
  ['#D9C9A8', '#1E2A38'], ['#C9B48C', '#1E2A38'], ['#C9B48C', '#394D73'], ['#0B191E', '#F3C344'], ['#FFFFFF', '#25503A'],
];
for (const [a, b] of pares) console.log(`${a} on ${b}: ${ratio(a, b).toFixed(2)}`);
