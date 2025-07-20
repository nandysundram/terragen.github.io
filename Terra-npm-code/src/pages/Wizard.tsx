import { useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Preview from "../components/Preview";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Wizard() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    provider: { region: "us-east-1" },
    instance: { type: "t3.micro", ami: "ami-0abcdef1234567890" },
    tags: { Name: "DemoServer" }
  });

  const next = () => setStep(s => Math.min(s + 1, 4));
  const prev = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-muted p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Terraform Generator</h2>
        <div className="flex space-x-2 mb-6">
          {[1, 2, 3].map(n => (
            <div key={n} className={`h-2 flex-1 rounded ${step >= n ? "bg-primary" : "bg-gray-200"}`} />
          ))}
        </div>

        {step === 1 && <Step1 data={data} setData={setData} />}
        {step === 2 && <Step2 data={data} setData={setData} />}
        {step === 3 && <Step3 data={data} setData={setData} />}
        {step === 4 && <Preview data={data} />}

        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button onClick={prev} className="btn-secondary">
              <FaArrowLeft className="inline mr-2" />Back
            </button>
          )}
          {step < 4 ? (
            <button onClick={next} className="btn-primary ml-auto">
              Next<FaArrowRight className="inline ml-2" />
            </button>
          ) : (
            <button onClick={() => alert("Download .tf file from Preview!")} className="btn-primary ml-auto">
              Download
            </button>
          )}
        </div>
      </div>
    </div>
  );
}