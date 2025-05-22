'use client'

import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format, parseISO } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { GripVertical } from "lucide-react";
import {
    DndContext,
    closestCenter,
    useSensor,
    useSensors,
    PointerSensor
} from "@dnd-kit/core";
import {
    SortableContext,
    useSortable,
    arrayMove,
    verticalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger
} from "@/components/ui/collapsible";

interface Member {
    nickname: string;
    user_id: string;
}

function SortableItem({
    id,
    nickname,
    selected,
    onClick
}: {
    id: string;
    nickname: string;
    selected: boolean;
    onClick: () => void;
}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={cn(
                "border p-2 rounded-md shadow-sm mb-1 flex items-center justify-between cursor-pointer",
                selected ? "bg-blue-200 border-blue-600" : "bg-white"
            )}
            onClick={onClick}
        >
            <span>{nickname}</span>
            <span
                {...attributes}
                {...listeners}
                className="cursor-grab p-1"
                onClick={e => e.stopPropagation()}
            >
                <GripVertical className="w-4 h-4" />
            </span>
        </div>
    );
}

function DatePicker({ date, setDate, label }: { date: Date | undefined; setDate: (date: Date | undefined) => void; label: string }) {
    return (
        <div className="flex flex-col space-y-1.5">
            <Label htmlFor={`${label.toLowerCase()}-date`}>{label} Date</Label>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        id={`${label.toLowerCase()}-date`}
                        variant="outline"
                        className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}

export default function AdminPanel() {
    const [selectedAdmin, setSelectedAdmin] = useState<string | null>(null);
    const [isSavingOrder, setIsSavingOrder] = useState(false);
    const [isSavingDates, setIsSavingDates] = useState(false);
    const [members, setMembers] = useState<Member[]>([]);
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [dateUpdateStatus, setDateUpdateStatus] = useState<string>("");
    const sensors = useSensors(useSensor(PointerSensor));
    
    // Ref to track selected members
    const membersListRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Fetch members
        fetch("/api/get-members")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    setMembers(data.members);
                }
            });

        // Fetch current date range
        fetch("/api/get-date-range")
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    if (data.startDate) {
                        setStartDate(parseISO(data.startDate));
                    }
                    if (data.endDate) {
                        setEndDate(parseISO(data.endDate));
                    }
                }
            })
            .catch(err => {
                console.error("Error fetching date range:", err);
            });
    }, []);

    // Add click outside event listener
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (membersListRef.current && !membersListRef.current.contains(event.target as Node)) {
                setSelectedAdmin(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const oldIndex = members.findIndex(m => m.user_id === active.id);
        const newIndex = members.findIndex(m => m.user_id === over.id);
        setMembers(arrayMove(members, oldIndex, newIndex));
    };

    const handleSaveOrder = async () => {
        setIsSavingOrder(true);
        const ordered = members.map((m, i) => ({
            groupmeid: m.user_id,
            name: m.nickname,
            pickorder: i.toString(),
            totalpoints: "0",
            admin: false
        }));

        const res = await fetch("/api/set-members", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ people: ordered })
        });

        setIsSavingOrder(false);

        if (res.ok) {
            alert("Saved pick order!");
        } else {
            alert("Failed to save.");
        }
    };

    const handleMemberClick = async (userId: string) => {
        // If same as current selection → promote to admin
        if (selectedAdmin === userId) {
            try {
                const res = await fetch("/api/set-owner", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        newOwner: userId
                    })
                });

                if (res.ok) {
                    alert("Transferred group ownership!");
                    setSelectedAdmin(null);
                } else {
                    alert("Failed to transfer ownership.");
                }
            } catch (err) {
                console.error(err);
                alert("Error during ownership change.");
            }
        } else {
            setSelectedAdmin(userId);
        }
    };

    const handleSaveDates = async () => {
        if (!startDate || !endDate) {
            alert("Please select both start and end dates");
            return;
        }

        if (startDate > endDate) {
            alert("Start date must be before end date");
            return;
        }

        setIsSavingDates(true);

        try {
            // First, update the date range
            const res = await fetch("/api/update-date-range", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    startDate: startDate.toISOString(), 
                    endDate: endDate.toISOString() 
                })
            });

            if (!res.ok) {
                setIsSavingDates(false);
                const error = await res.json();
                alert(`Failed to update date range: ${error.error || "Unknown error"}`);
                return;
            }

            // Next, set up the appointment slots
            const appointmentsRes = await fetch("/api/set-new-appointments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    startDate: startDate.toISOString(), 
                    endDate: endDate.toISOString() 
                })
            });

            if (!appointmentsRes.ok) {
                setIsSavingDates(false);
                const error = await appointmentsRes.json();
                alert(`Date range updated, but failed to create appointments: ${error.error || "Unknown error"}`);
                return;
            }

            // Finally, calculate total points
            const setPointsRes = await fetch("/api/set-total-points", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString()
                })
            });

            setIsSavingDates(false);

            if (setPointsRes.ok) {
                const appointmentsData = await appointmentsRes.json();
                alert(`Success! ${appointmentsData.message}. Points have been calculated.`);
            } else {
                alert("Date range and appointments updated, but point distribution failed.");
            }

        } catch (error) {
            setIsSavingDates(false);
            alert(`Error: ${error}`);
        }
    };

    return (
        <div className="space-y-4 max-w-md mx-auto">
            {/* Reorder Members Dropdown */}
            <Collapsible>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between text-left text-lg font-semibold">
                        Reorder Members
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                        Reorder members based on house points. This will determine pick order and total points. Make sure you update the date range again after setting pick order.
                    </p>
                    <ScrollArea className="h-96">
                        <div ref={membersListRef}>
                            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                                <SortableContext items={members.map(m => m.user_id)} strategy={verticalListSortingStrategy}>
                                    {members.map(m => (
                                        <SortableItem 
                                            key={m.user_id} 
                                            id={m.user_id} 
                                            nickname={m.nickname} 
                                            selected={selectedAdmin === m.user_id}
                                            onClick={() => handleMemberClick(m.user_id)} 
                                        />
                                    ))}
                                </SortableContext>
                            </DndContext>
                        </div>
                    </ScrollArea>
                    <Button onClick={handleSaveOrder} className="w-full" disabled={isSavingOrder}>
                        {isSavingOrder ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                            "Save Order"
                        )}
                    </Button>
                </CollapsibleContent>
            </Collapsible>

            <Separator />

            {/* Quarter Date Range Dropdown */}
            <Collapsible>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between text-left text-lg font-semibold">
                        Quarter Date Range
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                        Set the start and end dates for the current quarter. These dates determine which 
                        months users can access in the calendar.
                    </p>
                    <div className="grid gap-4">
                        <DatePicker 
                            date={startDate} 
                            setDate={setStartDate} 
                            label="Start" 
                        />
                        <DatePicker 
                            date={endDate} 
                            setDate={setEndDate} 
                            label="End" 
                        />
                    </div>
                    {dateUpdateStatus && (
                        <p className={cn(
                            "text-sm mt-2",
                            dateUpdateStatus.includes("success") ? "text-green-600" : "text-red-600"
                        )}>
                            {dateUpdateStatus}
                        </p>
                    )}
                    <Button onClick={handleSaveDates} className="w-full" disabled={isSavingDates}>
                        {isSavingDates ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                            "Save Date Range"
                        )}
                    </Button>
                </CollapsibleContent>
            </Collapsible>

            <Separator></Separator>

            <Button variant="ghost" className="w-full justify-between text-left text-lg font-semibold" onClick={() => fetch('/api/send-daily-messages')}>
                Send Daily Messages
            </Button>
        </div>
    );
}