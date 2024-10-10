import { convertToPascalCaseWithSpaces } from "@/lib/util";

export default function MyInput(
  { id, defaultValue }: { id: string, defaultValue?: string | number }
) {
  const convertedId = convertToPascalCaseWithSpaces(id);
  return (
    <div>
      <label className="mt-2">{convertedId}</label>
      <input id={id} name={id} type="text" defaultValue={defaultValue}
        className="
          appearance-none relative block
          w-full px-3 py-2 rounded-md
          border border-gray-300 placeholder-gray-500 text-gray-900
          focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
        "/>
    </div>
  );
}