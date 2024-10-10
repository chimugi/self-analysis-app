'use client';
import { convertToPascalCaseWithSpaces } from "@/lib/util";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MyDatePicker(
  { id, defaultValue }: { id: 'eventDate' | 'startDate' | 'endDate', defaultValue?: Date}
) {
  const [date, setDate] = useState<Date | null>(defaultValue ?? null);
  const convertedId = convertToPascalCaseWithSpaces(id);

  return (
    <div>
      <div className="mt-2">{convertedId}</div>
      <DatePicker
        id={id}
        name={id}
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy-MM-dd"
        className="
          appearance-none relative block
          w-full px-3 py-2 rounded-md
          border border-gray-300 placeholder-gray-500 text-gray-900
          focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
    </div>
  );
}