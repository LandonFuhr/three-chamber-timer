import { useStopwatch } from "./useStopwatch";
import { useStopwatchOrchestrator } from "./useStopwatchOrchestrator";

export function useThreeChamberController() {
  const leftCageStopwatch = useStopwatch("left_cage");
  const rightCageStopwatch = useStopwatch("right_cage");
  const overallStopwatch = useStopwatch("overall");
  const leftChamberStopwatch = useStopwatch("left_chamber");
  const middleChamberStopwatch = useStopwatch("middle_chamber");
  const rightChamberStopwatch = useStopwatch("right_chamber");

  const orchestrator = useStopwatchOrchestrator({
    globalStopwatch: overallStopwatch,
    singleSelectStopwatches: [
      leftChamberStopwatch,
      middleChamberStopwatch,
      rightChamberStopwatch,
      leftCageStopwatch,
      rightCageStopwatch,
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
