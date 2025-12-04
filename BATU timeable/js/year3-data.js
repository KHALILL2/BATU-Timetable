/**
 * Year 3 Timetable Data
 * BATU University IT Department
 * Two majors: Software Engineering (SW) and Network Engineering (NET)
 */

// ========================================
// SOFTWARE ENGINEERING TIMETABLE
// ========================================

const year3SoftwareData = [
    // Saturday
    { day: 'Saturday', time: '09:00-10:20', class: '4', subject: 'Microprocessor section', room: 'Room 216', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '10:20-11:40', class: 'All', subject: 'Computer Architecture', room: 'Lecture Hall 301', instructor: 'Dr. Rawda Magdy', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '11:40-13:00', class: '4', subject: 'CA section', room: 'Room 203', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'A' },
    { day: 'Saturday', time: '11:40-13:00', class: '4', subject: 'CA section', room: 'Room 202', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    { day: 'Saturday', time: '13:00-13:40', class: '4', subject: 'CA section (continuation)', room: 'Room 203', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'A' },
    { day: 'Saturday', time: '13:00-13:40', class: '4', subject: 'CA section (continuation)', room: 'Room 202', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    
    // Monday
    { day: 'Monday', time: '09:00-10:20', class: 'All', subject: 'Microprocessor', room: 'Lecture Hall 118', instructor: 'Dr. Osama El-Nahas / Dr. Heman El-Sayed / Dr. Nassar', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '10:20-11:40', class: 'All', subject: 'Computer Graphics', room: 'Lecture Hall 118', instructor: 'Dr. Ashraf', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '11:40-13:00', class: 'All', subject: 'Advanced C', room: 'Lecture Hall 318', instructor: 'Dr. Dina', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '13:00-14:20', class: '4', subject: 'Micro section', room: 'Room 316', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'A' },
    { day: 'Monday', time: '13:00-14:20', class: '4', subject: 'Micro section', room: 'Room 207', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    { day: 'Monday', time: '13:00-14:20', class: '2', subject: 'Java Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '13:00-14:20', class: '1', subject: 'Java Lab 1', room: 'Lab 1', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '14:20-15:45', class: '2', subject: 'Java Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '14:20-15:45', class: '1', subject: 'Java Lab 1', room: 'Lab 1', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    
    // Tuesday
    { day: 'Tuesday', time: '09:00-10:20', class: '4', subject: 'Micro section', room: 'Room 106', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '09:00-10:20', class: '2', subject: 'CG + Advanced C Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '09:00-10:20', class: '1', subject: 'CG + Advanced C Lab 1', room: 'Lab 1', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '10:20-11:40', class: '4', subject: 'Micro section', room: 'Room 106', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '10:20-11:40', class: '2', subject: 'CG + Advanced C Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '10:20-11:40', class: '1', subject: 'CG + Advanced C Lab 1', room: 'Lab 1', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '10:20-11:40', class: '3', subject: 'CA section', room: 'Room 315', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '11:40-12:20', class: '3', subject: 'CA section', room: 'Room 106', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '12:20-13:00', class: '3', subject: 'CA section', room: 'Room 205', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '13:00-14:20', class: 'All', subject: 'Data Communication', room: 'Lecture Hall 301', instructor: 'Dr. Osama El-Nahas / Dr. Nehal El-Azly / Dr. Basant Talba', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '14:20-15:45', class: 'All', subject: 'Java Programming 2', room: 'Lecture Hall 301', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lecture', group: 1, classDiv: 'All' }
];

// ========================================
// NETWORK ENGINEERING TIMETABLE
// ========================================

const year3NetworkData = [
    // Saturday - Lectures for all classes
    { day: 'Saturday', time: '09:00-10:20', class: 'All', subject: 'Network Administration', room: 'Lecture Hall 301', instructor: 'Dr. Motaz', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Saturday', time: '10:20-11:40', class: 'All', subject: 'Computer Architecture', room: 'Lecture Hall 301', instructor: 'Dr. Rawda Magdy', type: 'Lecture', group: 1, classDiv: 'All' },
    
    // Monday
    { day: 'Monday', time: '09:00-10:20', class: '3', subject: 'CCNA section', room: 'Room 304', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '09:00-10:20', class: '1', subject: 'Java Lab 1', room: 'Lab 1', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '09:00-10:20', class: '2', subject: 'Java Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '10:20-11:40', class: 'All', subject: 'Microprocessor', room: 'Lecture Hall 301', instructor: 'Dr. Heman El-Sayed / Dr. Nassar / Dr. Osama El-Nahas', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '11:40-13:00', class: '1', subject: 'Java Lab 1', room: 'Lab 1', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '11:40-13:00', class: '2', subject: 'CCNA section', room: 'Room 202', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '11:40-13:00', class: '3', subject: 'CCNA section', room: 'Room 203', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '13:00-14:20', class: '2', subject: 'CCNA section', room: 'Room 202', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '13:00-14:20', class: '3', subject: 'CCNA section', room: 'Room 203', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Monday', time: '14:20-15:45', class: 'All', subject: 'Data Communication', room: 'Lecture Hall 301', instructor: 'Dr. Osama El-Nahas / Dr. Nehal El-Azly / Dr. Basant Talba', type: 'Lecture', group: 1, classDiv: 'All' },
    
    // Tuesday
    { day: 'Tuesday', time: '09:00-10:20', class: '1', subject: 'Micro section', room: 'Room 304', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '09:00-10:20', class: '2', subject: 'CA (Computer Architecture) section', room: 'Room 216', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '09:00-10:20', class: '3', subject: 'Micro section', room: 'Room 315', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '10:20-11:40', class: '1', subject: 'CA (Computer Architecture) section', room: 'Room 315', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '10:20-11:40', class: '2', subject: 'Micro section', room: 'Room 304', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '10:20-11:40', class: '3', subject: 'CA (Computer Architecture) section', room: 'Room 216', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '13:00-14:20', class: 'All', subject: 'Java Programming 2', room: 'Lecture Hall 118', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Tuesday', time: '14:20-15:45', class: 'All', subject: 'CCNA R&S II', room: 'Lecture Hall 118', instructor: 'Dr. May', type: 'Lecture', group: 1, classDiv: 'All' }
];

// Load timetables on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Year 3 Software data loaded:', year3SoftwareData.length, 'entries');
    console.log('Year 3 Network data loaded:', year3NetworkData.length, 'entries');
    
    setTimeout(() => {
        if (typeof loadTimetableByDays === 'function') {
            loadTimetableByDays('year3SW', year3SoftwareData, ['Saturday', 'Monday', 'Tuesday']);
            loadTimetableByDays('year3NET', year3NetworkData, ['Saturday', 'Monday', 'Tuesday']);
            console.log('Year 3 timetables loaded with day separation');
        } else {
            console.error('loadTimetableByDays function not found!');
        }
    }, 100);
});
