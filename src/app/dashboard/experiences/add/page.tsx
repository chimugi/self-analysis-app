'use client';
import { addExperience } from "@/lib/actions";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Add() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <form action={addExperience}>
      <div>
        <label> title: </label>
        <input id="title" name="title" type="text" />
      </div>
      <div>
        <label> experience: </label>
        <input id="experience" name="experience" type="text" />
      </div>
      <div>
        <label> positivePoint: </label>
        <input id="positivePoint" name="positivePoint" type="text" />
      </div>
      <div>
        <label> negativePoint: </label>
        <input id="negativePoint" name="negativePoint" type="text" />
      </div>
      <div>
        <label> startDate: </label>
        <DatePicker
          id="startDate"
          name="startDate"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <div>
        <label> endDate: </label>
        <DatePicker
          id="endDate"
          name="endDate"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
        />
      </div>
      <button type="submit"> Submit </button>
    </form>
  );
}