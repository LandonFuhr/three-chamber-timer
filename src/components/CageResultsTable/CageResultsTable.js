import { Table } from "antd";
import { formatTimeFromMs } from "../../utils/formatTimeFromMs";
import { prettifySnakeCase } from "../../utils/prettifySnakeCase";

function getCageData(stopwatches, region) {
  const cageStopwatch = stopwatches.cages[region];

  return {
    key: cageStopwatch.id,
    name: prettifySnakeCase(cageStopwatch.id),
    interactionTime: formatTimeFromMs(cageStopwatch.elapsedTimeInMs),
    nInteractions: cageStopwatch.nStarts,
  };
}

export const CageResultsTable = ({ stopwatches }) => {
  const dataSource = [
    getCageData(stopwatches, "left"),
    getCageData(stopwatches, "right"),
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Interaction Time",
      dataIndex: "interactionTime",
      key: "interactionTime",
    },
    {
      title: "# of Interactions",
      dataIndex: "nInteractions",
      key: "nInteractions",
    },
  ];

  return <Table dataSource={dataSource} columns={columns} />;
};
