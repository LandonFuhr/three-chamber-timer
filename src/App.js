import "./App.css";
import { Layout, Row, Col, Divider, Typography } from "antd";
import { Chamber } from "./components/Chamber";
import { Timer } from "./components/Timer";
import { Header } from "./components/Header";
import { useThreeChamberController } from "./controllers/useThreeChamberController";
import { PlayPauseButton } from "./components/PlayPauseButton";
import { ChamberResultsTable } from "./components/ChamberResultsTable";
import { CageResultsTable } from "./components/CageResultsTable";

function App() {
  const { stopwatches, handlePlayPause } = useThreeChamberController();

  return (
    <div className="App">
      <Layout style={{ height: "100%" }}>
        <Header />
        <Layout.Content
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            padding: "70px",
          }}
        >
          <Typography.Title>Timer</Typography.Title>
          <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Chamber
              chamberStopwatch={stopwatches.chambers.left}
              title="Left Chamber"
              cageStopwatch={stopwatches.cages.left}
            />
            <Chamber
              title="Middle Chamber"
              chamberStopwatch={stopwatches.chambers.middle}
            />
            <Chamber
              title="Right Chamber"
              chamberStopwatch={stopwatches.chambers.right}
              cageStopwatch={stopwatches.cages.right}
            />
          </Row>
          <Row
            justify="center"
            style={{ marginTop: "50px" }}
            gutter={{ xs: 8, sm: 16, md: 24 }}
          >
            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <PlayPauseButton
                isPaused={
                  stopwatches.overall.isFrozen || !stopwatches.overall.isRunning
                }
                onClick={handlePlayPause}
              />
              <Timer
                timeInMs={stopwatches.overall.elapsedTimeInMs}
                isSelected={stopwatches.overall.isRunning}
                isCounting={stopwatches.overall.isCounting}
              />
            </Col>
          </Row>
          <Divider />
          <Typography.Title>Results</Typography.Title>
          <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col>
              <ChamberResultsTable stopwatches={stopwatches} />
            </Col>
            <Col>
              <CageResultsTable stopwatches={stopwatches} />
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
