import { useEffect, useState } from 'react'
import { Calendar } from "@/components/ui/calendar";
import '../globals.css';

export default function ScheduleCalendar({
    date,
    setDate,
    onAvailabilitiesChange,
    startDate,
    endDate
}: {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
    onAvailabilitiesChange: (availabilities: Record<number, number>) => void;
    startDate?: Date;
    endDate?: Date;
}) {
    const [availabilities, setAvailabilities] = useState<Record<number, number>>({});
    const [rangeStart, setRangeStart] = useState<Date | null>(null);
    const [rangeEnd, setRangeEnd] = useState<Date | null>(null);

    useEffect(() => {
        fetch('/api/get-date-range')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setRangeStart(data.startDate ? new Date(data.startDate) : null);
                    setRangeEnd(data.endDate ? new Date(data.endDate) : null);
                }
            })
            .catch(err => console.error('Failed to fetch date range', err));
    }, []);

    async function getAvailability(month?: number) {
        try {
            const monthToPass = month ?? date?.getMonth()! + 1;
            const yearToPass = date?.getFullYear()!;

            let startDateDay: number | undefined = undefined;
            let endDateDay: number | undefined = undefined;

            if (rangeStart && rangeStart.getMonth() + 1 === monthToPass && rangeStart.getFullYear() === yearToPass) {
                startDateDay = rangeStart.getDate();
            }

            if (rangeEnd && rangeEnd.getMonth() + 1 === monthToPass && rangeEnd.getFullYear() === yearToPass) {
                endDateDay = rangeEnd.getDate();
            }

            const response = await fetch('/api/get-availability', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    month: String(monthToPass),
                    ...(startDateDay !== undefined && { startDate: startDateDay }),
                    ...(endDateDay !== undefined && { endDate: endDateDay }),
                }),
            });

            if (response.ok) {
                const data = await response.json();
                setAvailabilities(data.availabilities || {});
                onAvailabilitiesChange(data.availabilities || {});
            } else {
                console.error('Failed to fetch availabilities');
            }
        } catch (error) {
            console.error('Error fetching availabilities:', error);
        }
    }

    useEffect(() => {
        if (date) {
            monthChange();
        }
    }, [date, rangeStart, rangeEnd]);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const buttons = document.querySelectorAll('button[role="gridcell"][name="day"]');
        buttons.forEach(button => {
            const day = parseInt(button.textContent?.trim() || '', 10);
            if (!button.classList.contains('day-outside') && day && availabilities[day] !== undefined) {
                const availability = availabilities[day];
                button.classList.remove('bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-gray-300');
                const colorClass = getAvailabilityColor(availability);
                if (colorClass) button.classList.add(colorClass);
            }
        });
    }, [availabilities]);


    async function monthChange() {
        await new Promise((resolve) => setTimeout(resolve, 0));

        const monthText = document.querySelector('[role="presentation"][id="react-day-picker-1"]')?.textContent?.split(" ")[0];
        const yearText = document.querySelector('[role="presentation"][id="react-day-picker-1"]')?.textContent?.split(" ")[1];

        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const monthIndex = monthNames.indexOf(monthText || '') + 1;
        const year = parseInt(yearText || '', 10);

        if (monthIndex !== -1 && !isNaN(year)) {
            const currentMonthDate = new Date(year, monthIndex - 1, 1);

            if (
                rangeStart &&
                rangeEnd &&
                currentMonthDate >= new Date(rangeStart.getFullYear(), rangeStart.getMonth(), 1) &&
                currentMonthDate <= new Date(rangeEnd.getFullYear(), rangeEnd.getMonth(), 1)
            ) {
                await getAvailability(monthIndex);
            } else {
                setAvailabilities({});
                onAvailabilitiesChange({});
            }
        } else {
            console.error('Invalid month or year text:', monthText, yearText);
        }
    }

    function getAvailabilityColor(availability: number): string {
        switch (availability) {
            case 0: return 'availability-available';
            case 1: return 'availability-limited';
            case 2: return 'availability-unavailable';
            default: return '';
        }
    }

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => setDate(selectedDate)}
            onMonthChange={monthChange}
            className="rounded-md border"
        />
    );
}
