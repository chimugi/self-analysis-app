'use client';
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function MyDatePicker({ id }: { id: 'startDate' | 'endDate' }) {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div>
      <label> {id}: </label>
      <DatePicker
        id={id}
        name={id}
        selected={date}
        onChange={(date) => setDate(date)}
        dateFormat="yyyy-MM-dd"
      />
    </div>
  );
}