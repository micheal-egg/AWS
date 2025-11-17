import { useState } from "react";

export default function App() {
  const [result, setResult] = useState("");

  const callApi = async () => {
    try {
      const res = await fetch(
        "https://mycqpsq69rj.execute-api.us-east-1.amazonaws.com/prod/"
      );
      const json = await res.json();
      setResult(JSON.stringify(json, null, 2));
    } catch (err) {
      setResult("Error: " + err);
    }
  };

  return (
    <div>
      <h1>Amplify + Lambda Test</h1>
      <button onClick={callApi}>Call Backend</button>
      <pre>{result}</pre>
    </div>
  );
}
