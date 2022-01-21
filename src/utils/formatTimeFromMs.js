const MS_PER_MINUTE = 60000;
const MS_PER_SECOND = 1000;

function divideAndModulo(numerator, denominator) {
  const dividend = Math.floor(numerator / denominator);
  const moduloResult = numerator % denominator;
  return [dividend, moduloResult];
}

export function formatTimeFromMs(timeInMs) {
  const [minutes, secondsRemaining] = divideAndModulo(timeInMs, MS_PER_MINUTE);
  const [seconds, millisecondsRemaining] = divideAndModulo(
    secondsRemaining,
    MS_PER_SECOND
  );
  const minStr = String(minutes);
  const secondsStr = String(seconds).padStart(2, "0");
  const millisecondsStr = String(millisecondsRemaining).padStart(3, "0");
  return `${minStr}:${secondsStr}.${millisecondsStr}`;
}
