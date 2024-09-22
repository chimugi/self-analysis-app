export default function MyInput(
  { id, defaultValue }: { id: string, defaultValue?: string | number }
) {
  return (
    <div>
      <label> {id}: </label>
      <input id={id} name={id} type="text" defaultValue={defaultValue} />
    </div>
  );
}