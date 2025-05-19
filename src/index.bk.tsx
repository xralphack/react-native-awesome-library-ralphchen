import * as ort from 'onnxruntime-react-native';

console.log('ort', ort);

export function multiply(a: number, b: number): number {
  return a * b;
}
