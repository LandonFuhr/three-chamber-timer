import "./App.css";
import { Layout, Row, Col, Divider } from "antd";
import { Chamber } from "./components/Chamber";
import { Timer } from "./components/Timer";
import { Header } from "./components/Header";
import { useThreeChamberController } from "./controllers/useThreeChamberController";
import { PlayPauseButton } from "./components/PlayPauseButton";
import { ResultsTable } from "./components/ResultsTable";

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
            gap: "100px",
            padding: "50px",
          }}
        >
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
          <Row justify="center" gutter={{ xs: 8, sm: 16, md: 24 }}>
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
          <ResultsTable stopwatches={stopwatches} />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
