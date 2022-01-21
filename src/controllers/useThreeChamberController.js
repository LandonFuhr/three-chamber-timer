import { useStopwatch } from "./useStopwatch";
import { useStopwatchOrchestrator } from "./useStopwatchOrchestrator";

const STOPWATCH_IDS = Object.freeze({
  OVERALL: "overall",
  LEFT_CAGE: "left_cage",
  RIGHT_CAGE: "right_cage",
  LEFT_CHAMBER: "left_chamber",
  MIDDLE_CHAMBER: "middle_chamber",
  RIGHT_CHAMBER: "right_chamber",
});

export function useThreeChamberController() {
  const overallStopwatch = useStopwatch(STOPWATCH_IDS.OVERALL);
  const leftCageStopwatch = useStopwatch(STOPWATCH_IDS.LEFT_CAGE);
  const rightCageStopwatch = useStopwatch(STOPWATCH_IDS.RIGHT_CAGE);
  const leftChamberStopwatch = useStopwatch(STOPWATCH_IDS.LEFT_CHAMBER);
  const middleChamberStopwatch = useStopwatch(STOPWATCH_IDS.MIDDLE_CHAMBER);
  const rightChamberStopwatch = useStopwatch(STOPWATCH_IDS.RIGHT_CHAMBER);

  const orchestrator = useStopwatchOrchestrator({
    globalStopwatch: overallStopwatch,
    singleSelectStopwatches: [
      leftChamberStopwatch,
      middleChamberStopwatch,
      rightChamberStopwatch,
      leftCageStopwatch,
      rightCageStopwatch,
    ],
    countingIds: [
      STOPWATCH_IDS.LEFT_CHAMBER,
      STOPWATCH_IDS.MIDDLE_CHAMBER,
      STOPWATCH_IDS.RIGHT_CHAMBER,
    ],
  });

  return {
    stopwatches: {
      overall: overallStopwatch,
      chambers: {
        left: leftChamberStopwatch,
        middle: middleChamberStopwatch,
        right: rightChamberStopwatch,
      },
      cages: {
        left: leftCageStopwatch,
        right: rightCageStopwatch,
      },
    },
    handlePlayPause: orchestrator.handleGlobalPlayPause,
  };
}
