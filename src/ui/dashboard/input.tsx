import { convertToPascalCaseWithSpaces } from '@/lib/util';
import { NumberInputColumn, TextInputColumn } from './form';

export default function MyInput({ col }: { col: NumberInputColumn | TextInputColumn }) {
  const { name, type, defaultValue, required } = col;
  const convertedId = convertToPascalCaseWithSpaces(name);
  return (
    <div>
      <label className="mt-2">{convertedId}</label>
      {(() => {
        if (type === 'number') {
          return (
            <input
              id={name}
              name={name}
              type={type}
              defaultValue={defaultValue}
              required={required}
              min={col.min}
              max={col.max}
              className="
                appearance-none relative block
                w-full px-3 py-2 rounded-md
                border border-gray-300 placeholder-gray-500 text-gray-900
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
              "
            />
          );
        } else if (type === 'text') {
          return (
            <input
              id={name}
              name={name}
              type={type}
              defaultValue={defaultValue}
              required={required}
              className="
                appearance-none relative block
                w-full px-3 py-2 rounded-md
                border border-gray-300 placeholder-gray-500 text-gray-900
                focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm
              "
            />
          );
        }
      })()}
    </div>
  );
}
