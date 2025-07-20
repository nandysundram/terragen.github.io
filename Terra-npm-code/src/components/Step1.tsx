export default function Step1({ data, setData }: any) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Provider Configuration</h3>
      <label className="block">
        <span>AWS Region</span>
        <select
          value={data.provider.region}
          onChange={e => setData({ ...data, provider: { region: e.target.value } })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          <option>us-east-1</option>
          <option>us-west-2</option>
        </select>
      </label>
    </div>
  );
}