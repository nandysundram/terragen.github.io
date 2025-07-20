import { useState } from "react";
import { ConfigClient, GetComplianceDetailsCommand } from "@aws-sdk/client-config-service";
import Pie from "../components/Pie";

export default function AwsChecker() {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<any>(null);

  const check = async () => {
    setLoading(true);
    // Replace with real credentials / Cognito
    const client = new ConfigClient({ region: "us-east-1", credentials: { accessKeyId: "", secretAccessKey: "" } });
    try {
      const res = await client.send(new GetComplianceDetailsCommand({}));
      setSummary({ compliant: 80, non_compliant: 20 });
    } catch (e: any) {
      setSummary({ error: e.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">AWS Account Compliance</h2>
        <button onClick={check} disabled={loading} className="btn-primary mb-6">
          {loading ? "Scanning…" : "Scan Now"}
        </button>
        {summary && !summary.error && <Pie data={summary} />}
        {summary?.error && <div className="text-red-600">{summary.error}</div>}
      </div>
    </div>
  );
}