export default function MyInput({ id }: { id: string }) {
  return (
    <div>
      <label> {id}: </label>
      <input id={id} name={id} type="text" />
    </div>
  );
}