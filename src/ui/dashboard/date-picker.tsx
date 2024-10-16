'use client';
import { useState } from "react";
import { getMonth, getYear } from 'date-fns';
import DatePicker from "react-datepicker";
import { convertToPascalCaseWithSpaces } from "@/lib/util";
import "react-datepicker/dist/react-datepicker.css";

function range(start: number, end: number, step: number = 1): number[] {
  const result = [];
  for (let i = start; i < end; i += step) {
    result.push(i);
  }
  return result;
}

export default function MyDatePicker(
  { id, defaultValue }: { id: 'eventDate' | 'startDate' | 'endDate', defaultValue?: Date}
) {
  const [date, setDate] = useState<Date | null>(defaultValue ?? null);
  const convertedId = convertToPascalCaseWithSpaces(id);

  const years = range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September","October", "November", "December",
  ];

  return (
    <div>
      <div className="mt-2">{convertedId}</div>
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value as unknown as number)} // TODO: Fix assertion
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        id={id}
        name={id}
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy-MM-dd"
        required
        className="
          appearance-none relative block
          w-full px-3 py-2 rounded-md
          border border-gray-300 placeholder-gray-500 text-gray-900
          focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      />
    </div>
  );
}