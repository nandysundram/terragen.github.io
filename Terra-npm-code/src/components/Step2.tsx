export default function Step2({ data, setData }: any) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">EC2 Instance</h3>
      <label className="block">
        Instance Type
        <input
          type="text"
          value={data.instance.type}
          onChange={e => setData({ ...data, instance: { ...data.instance, type: e.target.value } })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </label>
      <label className="block">
        AMI ID
        <input
          type="text"
          value={data.instance.ami}
          onChange={e => setData({ ...data, instance: { ...data.instance, ami: e.target.value } })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </label>
    </div>
  );
}