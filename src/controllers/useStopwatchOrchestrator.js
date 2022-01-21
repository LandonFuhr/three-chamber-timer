import { useCallback, useEffect, useMemo } from "react";

export function useStopwatchOrchestrator({
  globalStopwatch,
  singleSelectStopwatches,
}) {
  const allStopwatches = useMemo(
    () => [globalStopwatch, ...singleSelectStopwatches],
    [globalStopwatch, singleSelectStopwatches]
  );

  const handleSingleStopwatchToggle = useCallback(
    (toggledStopwatchId) => {
      const toggledStopwatch = singleSelectStopwatches.find(
        (stopwatch) => stopwatch.id === toggledStopwatchId
      );
      const isActivatingStopwatch = !toggledStopwatch.isRunning;
      if (isActivatingStopwatch) {
        singleSelectStopwatches
          .filter((stopwatch) => stopwatch.id !== toggledStopwatchId)
          .forEach((stopwatch) => {
            stopwatch.stopRunning();
          });
      }
    },
    [singleSelectStopwatches]
  );

  useEffect(() => {
    singleSelectStopwatches.forEach((stopwatch) => {
      stopwatch.onToggle(handleSingleStopwatchToggle);
    });
  }, [singleSelectStopwatches, handleSingleStopwatchToggle]);

  const handleGlobalPlayPause = useCallback(() => {
    if (globalStopwatch.isCounting) {
      allStopwatches.forEach((stopwatch) => stopwatch.freeze());
    } else {
      globalStopwatch.startRunning();
      allStopwatches.forEach((stopwatch) => stopwatch.unfreeze());
    }
  }, [allStopwatches, globalStopwatch]);

  return {
    handleGlobalPlayPause,
    globalStopwatch,
  };
}
