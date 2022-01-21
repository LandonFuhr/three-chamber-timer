import { useEffect, useState, useCallback, useRef, useMemo } from "react";

const UPDATE_INTERVAL_IN_MS = 16; // 60 FPS

export function useStopwatch(stopwatchId) {
  const [isFrozen, setIsFrozen] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTimeInMs, setElapsedTimeInMs] = useState(0);
  const onToggleCallback = useRef(null);

  const onToggle = useCallback(
    (callback) => {
      onToggleCallback.current = callback;
    },
    [onToggleCallback]
  );

  useEffect(() => {
    let interval;
    if (isRunning && !isFrozen) {
      interval = setInterval(() => {
        setElapsedTimeInMs(
          (currElapsedTimeInMs) => currElapsedTimeInMs + UPDATE_INTERVAL_IN_MS
        );
      }, UPDATE_INTERVAL_IN_MS);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning, isFrozen]);

  const startRunning = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stopRunning = useCallback(() => {
    setIsRunning(false);
  }, []);

  const toggleIsRunning = useCallback(() => {
    setIsRunning((currIsRunning) => !currIsRunning);
    const callback = onToggleCallback.current;
    if (callback) {
      callback(stopwatchId);
    }
  }, [onToggleCallback, stopwatchId]);

  const unfreeze = useCallback(() => {
    setIsFrozen(false);
  }, []);

  const freeze = useCallback(() => {
    setIsFrozen(true);
  }, []);

  const isCounting = useMemo(
    () => isRunning && !isFrozen,
    [isRunning, isFrozen]
  );

  return {
    id: stopwatchId,
    isRunning,
    isFrozen,
    isCounting,
    elapsedTimeInMs,
    startRunning,
    stopRunning,
    toggleIsRunning,
    onToggle,
    freeze,
    unfreeze,
  };
}
