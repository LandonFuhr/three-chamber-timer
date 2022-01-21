import "./ResultsTable.css";
import { Table } from "antd";
import { formatTimeFromMs } from "../../utils/formatTimeFromMs";
import { prettifySnakeCase } from "../../utils/prettifySnakeCase";

function getDataFromStopwatch(stopwatch) {
  return {
    key: stopwatch.id,
    name: prettifySnakeCase(stopwatch.id),
    elapsedTime: formatTimeFromMs(stopwatch.elapsedTimeInMs),
  };
}

export const ResultsTable = ({ stopwatches }) => {
  const dataSource = [
    getDataFromStopwatch(stopwatches.chambers.left),
    getDataFromStopwatch(stopwatches.chambers.middle),
    getDataFromStopwatch(stopwatches.chambers.right),
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Elapsed Time (min:sec.ms)",
      dataIndex: "elapsedTime",
      key: "elapsedTime",
    },
  ];

  return (
    <div className="results-table">
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};
