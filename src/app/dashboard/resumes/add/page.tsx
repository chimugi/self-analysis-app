import { addResume } from "@/lib/actions";
import MyInput from "@/ui/dashboard/input";
import MyDatePicker from "@/ui/dashboard/date-picker";

export default function Add() {
  return (
    <form action={addResume}>
      <MyInput id="belongsTo" />
      <MyDatePicker id="startDate" />
      <MyDatePicker id="endDate" />
      <button type="submit"> Submit </button>
    </form>
  );
}