export default function Step3({ data, setData }: any) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Tags</h3>
      <label className="block">
        Name Tag
        <input
          type="text"
          value={data.tags.Name}
          onChange={e => setData({ ...data, tags: { ...data.tags, Name: e.target.value } })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </label>
    </div>
  );
}