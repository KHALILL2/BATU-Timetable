/**
 * Year 4 Timetable Data
 * BATU University IT Department
 * Two majors: Software Engineering (SW) and Network Engineering (NET)
 */

// ========================================
// SOFTWARE ENGINEERING TIMETABLE
// ========================================

const year4SoftwareData = [
    // Saturday
    { day: 'Saturday', time: '09:00-10:20', class: 'All', subject: 'Artificial Intelligence', room: 'TBD', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '10:20-11:40', class: 'All', subject: 'Windows Programming 1', room: 'Lecture Hall 101', instructor: 'Dr. Ali Ahmed Abdel Fattah', type: 'Lecture', group: 1, classDiv: 'All' },
    
    // Sunday
    { day: 'Sunday', time: '09:00-10:20', class: '3', subject: 'CCNA 2 section', room: 'Rooms 202, 203', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Sunday', time: '09:00-10:20', class: '2', subject: 'Signal section', room: 'Room 207', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Sunday', time: '09:00-10:20', class: '1', subject: 'Signal section', room: 'Room 316', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Sunday', time: '10:20-11:00', class: '1', subject: 'Signal (continuation)', room: 'Room 316', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Sunday', time: '10:20-11:00', class: '2', subject: 'Signal (continuation)', room: 'Room 207', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Sunday', time: '10:20-11:00', class: '3', subject: 'IOT section', room: 'Room 106', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Sunday', time: '10:20-11:00', class: '3', subject: 'CCNA 2 (continuation)', room: 'Rooms 202, 203', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Sunday', time: '11:40-13:00', class: '1', subject: 'IOT section', room: 'Room 205', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Sunday', time: '11:40-13:00', class: '2', subject: 'IOT section', room: 'Room 216', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Sunday', time: '13:00-14:20', class: 'All', subject: 'IoT Architecture & Programming', room: 'Lecture Hall A118', instructor: 'Asst. Prof. Dr. Osama El-Nahas / Dr. May Mohamed', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Sunday', time: '14:20-15:45', class: 'All', subject: 'Mobile Programming 2', room: 'Lecture Hall 118', instructor: 'Dr. Dina Abdel Hafiz', type: 'Lecture', group: 1, classDiv: 'All' },
    
    // Wednesday
    { day: 'Wednesday', time: '09:00-10:20', class: 'All', subject: 'Signal Processing', room: 'Lecture Hall 301', instructor: 'Dr. Basant Talba', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Wednesday', time: '10:20-11:40', class: 'All', subject: 'CCNA R&S II', room: 'Lecture Hall 301', instructor: 'Dr. Eman Shawky', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Wednesday', time: '11:40-12:20', class: '3', subject: 'Signal section', room: 'TBD', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Wednesday', time: '11:40-12:20', class: 'All', subject: 'Mobile II Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Wednesday', time: '13:00-14:20', class: '3', subject: 'CCNA 2 section', room: 'Room 202', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Wednesday', time: '13:00-14:20', class: 'All', subject: 'Mobile II Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Wednesday', time: '14:20-15:45', class: 'All', subject: 'Mobile II Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' }
];

// ========================================
// NETWORK ENGINEERING TIMETABLE
// ========================================

const year4NetworkData = [
    // Saturday
    { day: 'Saturday', time: '09:00-10:20', class: 'All', subject: 'CCNA Cyber Security / Cybersecurity Operations', room: 'Lecture Hall 118', instructor: 'Dr. Ali Ahmed Abdel Fattah', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '10:20-11:40', class: 'All', subject: 'Artificial Intelligence', room: 'Lecture Hall 118', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '11:40-13:00', class: '1', subject: 'IOT section', room: 'TBD', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '11:40-13:00', class: '2', subject: 'IOT section', room: 'TBD', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '11:40-13:00', class: '3', subject: 'IOT section', room: 'TBD', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '13:00-13:40', class: '1', subject: 'CCNA Cyber Security section', room: 'Room 205', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '13:00-13:40', class: '2', subject: 'CCNA Cyber Security section', room: 'Room 315', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '13:00-13:40', class: '3', subject: 'CCNA Cyber Security section', room: 'Room 304', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '14:20-15:00', class: 'All', subject: 'Ency section (Encryption)', room: 'Rooms 207, 216, 315', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '15:00-15:45', class: 'All', subject: 'Ency section (Encryption)', room: 'Rooms 203, 202', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    
    // Sunday
    { day: 'Sunday', time: '09:00-10:20', class: 'All', subject: 'Ency section (Encryption)', room: 'Rooms 116, 115', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Sunday', time: '11:40-13:00', class: 'All', subject: 'IoT Architecture & Programming', room: 'Lecture Hall A118', instructor: 'Asst. Prof. Dr. Osama El-Nahas / Dr. May Mohamed', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Sunday', time: '13:40-15:00', class: 'All', subject: 'Encryption Algorithm', room: 'Lecture Hall 301', instructor: 'Dr. Rawda Magdy Sobhy', type: 'Lecture', group: 1, classDiv: 'All' },
    
    // Wednesday
    { day: 'Wednesday', time: '09:00-10:20', class: 'All', subject: 'CCNA 4', room: 'Lecture Hall 118', instructor: 'Dr. Eman Shawky', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Wednesday', time: '10:20-11:40', class: 'All', subject: 'Server Administration', room: 'Lecture Hall 118', instructor: 'Dr. Motaz Hassan Khalil', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Wednesday', time: '11:40-13:00', class: '1', subject: 'CCNA 4 section', room: 'Room 316', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    { day: 'Wednesday', time: '11:40-13:00', class: '2', subject: 'CCNA 4 section', room: 'Room 316', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'A' },
    { day: 'Wednesday', time: '11:40-13:00', class: '3', subject: 'CCNA 4 section', room: 'Room 207', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    { day: 'Wednesday', time: '13:00-14:20', class: '1', subject: 'CCNA 4 section', room: 'Room 207', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    { day: 'Wednesday', time: '13:00-14:20', class: '2', subject: 'CCNA 4 section', room: 'Room 207', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'A' },
    { day: 'Wednesday', time: '13:00-14:20', class: '3', subject: 'CCNA 4 section', room: 'Room 316', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    { day: 'Wednesday', time: '13:00-14:20', class: '2', subject: 'IOT section', room: 'Room 304', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    { day: 'Wednesday', time: '13:00-14:20', class: '3', subject: 'IOT section', room: 'Room 304', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'A' },
    { day: 'Wednesday', time: '14:20-15:45', class: '1', subject: 'CCNA 4 section', room: 'Room 304', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    { day: 'Wednesday', time: '14:20-15:45', class: '2', subject: 'CCNA 4 section', room: 'Room 304', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'A' },
    { day: 'Wednesday', time: '14:20-15:45', class: '3', subject: 'CCNA 4 section', room: 'Room 316', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    { day: 'Wednesday', time: '14:20-15:45', class: '2', subject: 'IOT section', room: 'Room 207', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    { day: 'Wednesday', time: '14:20-15:45', class: '3', subject: 'IOT section', room: 'Room 207', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'A' }
];

// Load timetables on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Year 4 Software data loaded:', year4SoftwareData.length, 'entries');
    console.log('Year 4 Network data loaded:', year4NetworkData.length, 'entries');
    
    setTimeout(() => {
        if (typeof loadTimetableByDays === 'function') {
            loadTimetableByDays('year4SW', year4SoftwareData, ['Saturday', 'Sunday', 'Wednesday']);
            loadTimetableByDays('year4NET', year4NetworkData, ['Saturday', 'Sunday', 'Wednesday']);
            console.log('Year 4 timetables loaded with day separation');
        } else {
            console.error('loadTimetableByDays function not found!');
        }
    }, 100);
});
