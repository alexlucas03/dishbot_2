'use client'

import { useEffect, useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDate, getMonth, getYear, addMonths, subMonths } from "date-fns";
import axios from "axios";

export default function DishCalendar() {
  const [days, setDays] = useState<Date[]>([]);
  const [appointments, setAppointments] = useState<Record<number, any[]>>({});
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [popupData, setPopupData] = useState<any[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [filterName, setFilterName] = useState("");
  const [filterType, setFilterType] = useState("");

  const month = getMonth(currentDate) + 1;
  const year = getYear(currentDate);

  useEffect(() => {
    const allDays = eachDayOfInterval({
      start: startOfMonth(currentDate),
      end: endOfMonth(currentDate)
    });
    setDays(allDays);

    async function fetchAppointments() {
      const dailyAppointments: Record<number, any[]> = {};

      for (const day of allDays) {
        const dayNum = getDate(day);
        const response = await fetch("/api/get-appointments", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ day: dayNum.toString(), month: month.toString(), year: year.toString() })
        });

        const data = await response.json();
        if (data.success) {
          dailyAppointments[dayNum] = data.dishInstances;
        }
      }

      setAppointments(dailyAppointments);
    }

    fetchAppointments();
  }, [month, year, currentDate]);

  async function handleClick(day: number) {
    setSelectedDay(day);
    const response = await axios.post("/api/get-appointments", {
      day: day.toString(),
      month: month.toString(),
      year: year.toString()
    });

    if (response.data.success) {
      setPopupData(response.data.dishInstances);
    }
  }

  function applyFilters(data: any[]) {
    return data.filter(d =>
      (!filterName || d.owner.toLowerCase().includes(filterName.toLowerCase())) &&
      (!filterType || d.type.toLowerCase().includes(filterType.toLowerCase()))
    );
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <Button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>Previous</Button>
        <h2 className="text-xl font-bold">Dish Assignments for {format(currentDate, "MMMM yyyy")}</h2>
        <Button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>Next</Button>
      </div>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Filter by name"
          className="border rounded px-2 py-1"
          value={filterName}
          onChange={e => setFilterName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by type"
          className="border rounded px-2 py-1"
          value={filterType}
          onChange={e => setFilterType(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => {
          const dayNum = getDate(day);
          const initials = (appointments[dayNum] || [])
            .map(d => d.owner.split(" ").map((s: string) => s[0]).join(""));
          return (
            <Card
              key={dayNum}
              className="p-2 cursor-pointer hover:bg-blue-100"
              onClick={() => handleClick(dayNum)}
            >
              <div className="font-semibold">{dayNum}</div>
              <div className="text-sm text-gray-600">{initials.join(", ")}</div>
            </Card>
          );
        })}
      </div>

      <Dialog open={selectedDay !== null} onOpenChange={() => setSelectedDay(null)}>
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h3 className="text-lg font-bold mb-2">Details for {selectedDay}</h3>
          <ul className="space-y-1">
            {applyFilters(popupData).map((dish: any, index: number) => (
              <li key={index}>
                <strong>{dish.type}:</strong> {dish.owner}
              </li>
            ))}
          </ul>
        </div>
      </Dialog>
    </div>
  );
}
