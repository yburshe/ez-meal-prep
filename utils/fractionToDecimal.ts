export default function fractionToDecimal(fraction: string): number {
  const [numerator, denominator] = fraction.split("/").map(Number);
  return Number((numerator / denominator).toFixed(2));
}
