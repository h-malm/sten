<template>
    <div class="section" id="calendar">
        <div class="calendar lekton-regular">
            <div class="calendar-header tiny5-regular">
                <div id="month-year"></div>
            </div>
            <div class="calendar-body">
                <div class="calendar-weekdays">
                    <div>M</div>
                    <div>T</div>
                    <div>W</div>
                    <div>T</div>
                    <div>F</div>
                    <div>S</div>
                    <div>S</div>
                </div>
                <div class="calendar-dates">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';


onMounted( () => {
    const calendarDates = document.querySelector( '.calendar-dates' );
    const monthYear = document.getElementById( 'month-year' );

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    function renderCalendar ( month, year ) {
        monthYear.textContent = `${months[month]} ${year}`;

        // Get today's date
        const today = new Date();

        // Gets the weekday by number, i.e. Wednesday returns 3.
        const firstDay = new Date( year, month, 0 ).getDay();

        // Gets the number of days in the month 
        const daysInMonth = new Date( year, month + 1, 0 ).getDate();

        // Insert blank spaces for the weekdays before the first date of the month 
        for ( let i = 0; i < firstDay; i++ ) {
            const blank = document.createElement( 'div' );
            calendarDates.appendChild( blank );
        }

        // Create the days of the month as divs 
        for ( let i = 1; i <= daysInMonth; i++ ) {
            const day = document.createElement( 'div' );
            day.textContent = i;

            // Highlight today's date 
            if (
                i === today.getDate() &&
                month === today.getMonth() &&
                year === today.getFullYear()
            ) {
                day.classList.add( 'current-date' );
            }

            calendarDates.appendChild( day );
        }
    }

    renderCalendar( currentMonth, currentYear );
} )
</script>
