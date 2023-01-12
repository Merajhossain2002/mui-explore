import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(!loading);
  }
  return (
    <div className="App">
      <h1>hello world, i am meraj faizan.</h1>
      <Button variant="text" style={{ margin: "10px" }}>
        Learn More
      </Button>
      <Button variant="contained" style={{ margin: "10px" }}>
        Learn More
      </Button>
      <Button variant="outlined" style={{ margin: "10px" }}>
        Learn More
      </Button>
      <LoadingButton
        size="small"
        onClick={handleClick}
        loading={loading}
        loadingIndicator="Loading…"
        variant="outlined"
      >
        Fetch data
      </LoadingButton>
      <LoadingButton
        color="secondary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        variant="contained"
      >
        Save
      </LoadingButton>
    </div>
  );
}

export default App;
