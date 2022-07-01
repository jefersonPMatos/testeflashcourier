import Background from "./assets/videos/boxes2.mp4";

import Home from "./pages/home";

import { VideoBackground, StyledVideo } from "./styles/styles";
import { Reset } from "./styles/reset";

function App() {
  return (
    <>
      <VideoBackground autoPlay loop muted>
        <StyledVideo src={Background} type="video/mp4" />
      </VideoBackground>
      <Home />
      <Reset />
    </>
  );
}

export default App;
