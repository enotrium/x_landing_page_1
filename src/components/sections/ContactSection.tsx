"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { siteConfig } from "@/config/content";
import { useState } from "react";

export function ContactSection() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const title = typeof siteConfig.contact.title === 'string'
        ? siteConfig.contact.title
        : siteConfig.contact.title.join(' ');

    const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"];

    // Get next 5 weekdays for quick selection
    const getWeekdays = () => {
        const days = [];
        const today = new Date();
        let offset = 1;
        while (days.length < 5) {
            const date = new Date(today);
            date.setDate(today.getDate() + offset);
            if (date.getDay() !== 0 && date.getDay() !== 6) {
                days.push(date);
            }
            offset++;
        }
        return days;
    };

    const weekdays = getWeekdays();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    // Calendar functions
    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const formatDate = (date: Date) => {
        return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    };

    return (
        <section id="contact" className="relative py-20 md:py-32">
            {/* Section Divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-12">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <ScrollReveal>
                        <span className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase font-[family-name:var(--font-space-grotesk)]">
                            {siteConfig.contact.label}
                        </span>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mt-6 font-[family-name:var(--font-space-grotesk)]">
                            {title}
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2}>
                        <div className="w-px h-12 bg-gradient-to-b from-transparent via-border to-transparent mx-auto mt-8" />
                    </ScrollReveal>
                </div>

                {/* Description */}
                <ScrollReveal delay={0.3}>
                    <p className="text-center text-base md:text-xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 md:mb-16 font-[family-name:var(--font-space-grotesk)]">
                        {siteConfig.contact.description}
                    </p>
                </ScrollReveal>

                {/* Scheduling Form */}
                <ScrollReveal delay={0.4} width="100%">
                    <div className="border border-border p-6 md:p-10 lg:p-12">
                        {/* Date Selection */}
                        <div className="mb-10 md:mb-12">
                            <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-4 md:mb-6 font-[family-name:var(--font-space-grotesk)]">
                                Select Date
                            </span>

                            {/* Quick date picker - responsive grid */}
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 md:gap-3 mb-4">
                                {weekdays.map((date, i) => {
                                    const isSelected = selectedDate?.toDateString() === date.toDateString();
                                    return (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedDate(date)}
                                            className={`py-4 md:py-6 text-center border transition-colors duration-200 ${isSelected
                                                    ? 'border-foreground bg-foreground text-background'
                                                    : 'border-border hover:border-foreground/50'
                                                }`}
                                        >
                                            <div className="text-[10px] md:text-xs opacity-60 mb-1 font-[family-name:var(--font-space-grotesk)]">
                                                {dayNames[date.getDay()]}
                                            </div>
                                            <div className="text-lg md:text-2xl font-light font-[family-name:var(--font-space-grotesk)]">
                                                {date.getDate()}
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* More dates button */}
                            <button
                                onClick={() => setIsCalendarOpen(true)}
                                className="w-full py-3 border border-border text-sm text-muted-foreground hover:border-foreground/50 transition-colors font-[family-name:var(--font-space-grotesk)]"
                            >
                                {selectedDate && !weekdays.find(d => d.toDateString() === selectedDate.toDateString())
                                    ? formatDate(selectedDate)
                                    : "More dates →"
                                }
                            </button>
                        </div>

                        {/* Time Selection - responsive grid */}
                        <div className="mb-10 md:mb-12">
                            <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-4 md:mb-6 font-[family-name:var(--font-space-grotesk)]">
                                Select Time
                            </span>
                            <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
                                {timeSlots.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setSelectedTime(time)}
                                        className={`py-3 md:py-4 text-xs md:text-sm border transition-colors duration-200 font-[family-name:var(--font-space-grotesk)] ${selectedTime === time
                                                ? 'border-foreground bg-foreground text-background'
                                                : 'border-border hover:border-foreground/50'
                                            }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="mb-8 md:mb-10">
                            <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase block mb-4 font-[family-name:var(--font-space-grotesk)]">
                                Your Email
                            </span>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                className="w-full bg-transparent border-b border-border py-3 md:py-4 text-base md:text-lg font-light focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/40 font-[family-name:var(--font-space-grotesk)]"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            className="w-full py-4 md:py-5 bg-foreground text-background text-sm tracking-wider hover:opacity-90 transition-opacity font-[family-name:var(--font-space-grotesk)]"
                        >
                            Schedule Demo →
                        </button>
                    </div>
                </ScrollReveal>

                {/* Footer Divider */}
                <div className="flex items-center justify-center pt-12 md:pt-20">
                    <ScrollReveal delay={0.5}>
                        <div className="h-px w-48 bg-gradient-to-r from-transparent via-border to-transparent" />
                    </ScrollReveal>
                </div>
            </div>

            {/* Calendar Popup Modal */}
            {isCalendarOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        onClick={() => setIsCalendarOpen(false)}
                    />

                    {/* Calendar */}
                    <div className="relative bg-background border border-border p-6 md:p-8 w-full max-w-sm md:max-w-md">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6 md:mb-8">
                            <button
                                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                                className="p-2 hover:bg-muted transition-colors text-lg"
                            >
                                ←
                            </button>
                            <span className="text-base md:text-lg font-light font-[family-name:var(--font-space-grotesk)]">
                                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                            </span>
                            <button
                                onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                                className="p-2 hover:bg-muted transition-colors text-lg"
                            >
                                →
                            </button>
                        </div>

                        {/* Day headers */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
                                <div key={day} className="text-center text-xs text-muted-foreground py-2">
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* Days */}
                        <div className="grid grid-cols-7 gap-1">
                            {Array.from({ length: getFirstDayOfMonth(currentMonth) }).map((_, i) => (
                                <div key={`empty-${i}`} className="aspect-square" />
                            ))}
                            {Array.from({ length: getDaysInMonth(currentMonth) }).map((_, i) => {
                                const day = i + 1;
                                const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
                                const isPast = date < today;
                                const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                                const isSelected = selectedDate?.toDateString() === date.toDateString();
                                const isDisabled = isPast || isWeekend;

                                return (
                                    <button
                                        key={day}
                                        onClick={() => {
                                            if (!isDisabled) {
                                                setSelectedDate(date);
                                                setIsCalendarOpen(false);
                                            }
                                        }}
                                        disabled={isDisabled}
                                        className={`aspect-square flex items-center justify-center text-sm transition-colors ${isSelected
                                                ? 'bg-foreground text-background'
                                                : isDisabled
                                                    ? 'text-muted-foreground/30 cursor-not-allowed'
                                                    : 'hover:bg-muted'
                                            }`}
                                    >
                                        {day}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Close button */}
                        <button
                            onClick={() => setIsCalendarOpen(false)}
                            className="absolute top-3 right-3 md:top-4 md:right-4 text-muted-foreground hover:text-foreground transition-colors text-lg"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
