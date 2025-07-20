import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";

export default function Compliance() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<any>(null);

  const check = async () => {
    // stub API call
    const { data } = await axios.post("/api/check", { code });
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-muted p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">Paste Terraform</h2>
          <Editor
            height="400px"
            language="hcl"
            value={code}
            onChange={v => setCode(v || "")}
            theme="vs-light"
          />
          <button onClick={check} className="btn-primary mt-4">Check Compliance</button>
        </div>
        {result && (
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-bold mb-2">Results</h3>
            <pre className="text-sm bg-muted p-4 rounded">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}