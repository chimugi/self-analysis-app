import { addExperience } from "@/lib/actions";
import MyDatePicker from "@/ui/dashboard/experiences/date-picker";
import MyInput from "@/ui/dashboard/experiences/input";
import "react-datepicker/dist/react-datepicker.css";

export default function Add() {
  return (
    <form action={addExperience}>
      <MyInput id="title" />
      <MyInput id="experience" />
      <MyInput id="positivePoint" />
      <MyInput id="negativePoint" />
      <MyDatePicker id="startDate" />
      <MyDatePicker id="endDate" />
      <button type="submit"> Submit </button>
    </form>
  );
}