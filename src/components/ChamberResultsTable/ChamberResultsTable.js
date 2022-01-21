import { Table } from "antd";
import { formatTimeFromMs } from "../../utils/formatTimeFromMs";
import { prettifySnakeCase } from "../../utils/prettifySnakeCase";

function getChamberData(stopwatches, region) {
  const chamberStopwatch = stopwatches.chambers[region];
  const cageStopwatch = stopwatches.cages[region];

  const totalElapsedTime =
    chamberStopwatch.elapsedTimeInMs +
    (cageStopwatch ? cageStopwatch.elapsedTimeInMs : 0);

  return {
    key: chamberStopwatch.id,
    name: prettifySnakeCase(chamberStopwatch.id),
    elapsedTime: formatTimeFromMs(totalElapsedTime),
    nEntries: 0,
  };
}

export const ChamberResultsTable = ({ stopwatches }) => {
  const dataSource = [
    getChamberData(stopwatches, "left"),
    getChamberData(stopwatches, "middle"),
    getChamberData(stopwatches, "right"),
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Time in Chamber (min:sec.ms)",
      dataIndex: "elapsedTime",
      key: "elapsedTime",
    },
    {
      title: "# of entries",
      dataIndex: "nEntries",
      key: "nEntries",
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};
