/**
 * Year 2 Timetable Data - Fall 2025/2026
 * BATU IT Department
 * 4 Groups, each with 4 Classes (A/B divisions)
 */

// Year 2 - Group 1 Timetable (Saturday, Monday, Tuesday)
const year2Group1Data = [
    // SATURDAY
    { day: 'Saturday', time: '09:40-10:20', class: 'All', subject: 'Operating System', room: 'Lecture Hall A318', instructor: 'Dr. Muhammad Al-Sadiq', type: 'Lecture', group: '1', classDiv: 'All' },

    { day: 'Saturday', time: '11:40-13:00', class: 'All', subject: 'Digital Engineering', room: 'Lecture Hall A118', instructor: 'Dr. Osama El-Nahas / Dr. Rawda Magdy', type: 'Lecture', group: '1', classDiv: 'All' },
    { day: 'Saturday', time: '13:00-14:20', class: '1', subject: 'Web + C++ Lab 1', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: '1', classDiv: 'All' },
    { day: 'Saturday', time: '13:00-14:20', class: '4', subject: 'Web + C++ Lab 2', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: '1', classDiv: 'All' },
    { day: 'Saturday', time: '14:20-15:40', class: '4', subject: 'Web + C++ Lab 1', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: '1', classDiv: 'All' },
    // MONDAY
    { day: 'Monday', time: '09:40-11:00', class: '1', subject: 'Linux Section', room: 'Hall 204', instructor: 'Dr.Lamia', type: 'Section', group: '1', classDiv: 'A' },
    { day: 'Monday', time: '09:40-11:00', class: '1', subject: 'Linux Section', room: 'Hall 207', instructor: 'Dr.Mohammed Saeed', type: 'Section', group: '1', classDiv: 'B' },
    { day: 'Monday', time: '09:40-11:00', class: '3', subject: 'Linux Section', room: 'Hall 203', instructor: 'Dr. Mohammed Saeed', type: 'Section', group: '1', classDiv: 'A' },
    { day: 'Monday', time: '09:40-11:00', class: '3', subject: 'Linux Section', room: 'Hall 202', instructor: 'Dr.Lamia', type: 'Section', group: '1', classDiv: 'B' },
    { day: 'Monday', time: '09:40-11:00', class: '2', subject: 'DE Section', room: 'Hall 304', instructor: 'Dr. Rania', type: 'Section', group: '1', classDiv: 'A' },
    { day: 'Monday', time: '09:40-11:00', class: '2', subject: 'DE Section', room: 'Hall 207', instructor: 'Dr. Ahmed Kamel', type: 'Section', group: '1', classDiv: 'B' },
    { day: 'Monday', time: '11:40-12:20', class: '1', subject: 'DE Section', room: 'Hall 315', instructor: 'Dr. Osama El-Nahas', type: 'Section', group: '1', classDiv: 'All' },
    { day: 'Monday', time: '13:00-14:20', class: 'All', subject: 'Programming Essentials in C++', room: 'Lecture Hall A118', instructor: 'Dr. Nihal El-Azly', type: 'Lecture', group: '1', classDiv: 'All' },
    { day: 'Monday', time: '14:20-15:40', class: 'All', subject: 'Introduction to DB', room: 'Lecture Hall A118', instructor: 'Dr. Nihal El-Azly', type: 'Lecture', group: '1', classDiv: 'All' },
    { day: 'Monday', time: '11:00-11:40', class: '4', subject: 'DE Section', room: 'Hall 216', instructor: 'Dr.Bilal', type: 'Section', group: '1', classDiv: 'B' },
    // TUESDAY
    { day: 'Tuesday', time: '10:20-11:40', class: 'All', subject: 'Web Programming I', room: 'Lecture Hall A101', instructor: 'Dr. Ashraf', type: 'Lecture', group: '1', classDiv: 'All' },
    { day: 'Tuesday', time: '12:20-13:40', class: 'All', subject: 'Linux Essentials', room: 'Lecture Hall A301', instructor: 'Dr. Eman Shawky', type: 'Lecture', group: '1', classDiv: 'All' },
    { day: 'Tuesday', time: '13:40-15:00', class: '2', subject: 'Web + C++ Lab 1', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: '1', classDiv: 'All' }
];

// Year 2 - Groups 2, 3, 4 data would be added here following the same format
// For full implementation, see COMPLETE_YEAR2_DATA.txt

// Year 2 - Group 2 Timetable
const year2Group2Data = [
    // SATURDAY - Group 2
    { day: 'Saturday', time: '09:00-10:20', class: '1', subject: 'Web + C++ Lab 1', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: '2', classDiv: 'All' },
    { day: 'Saturday', time: '09:00-10:20', class: '2', subject: 'Web + C++ Lab 2', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: '2', classDiv: 'All' },
    { day: 'Saturday', time: '11:40-13:00', class: 'All', subject: 'Programming Essentials in C++', room: 'Lecture Hall A301', instructor: 'Dr.Mohamed Abd Al-Fattah', type: 'Lecture', group: '2', classDiv: 'All' },
    { day: 'Saturday', time: '13:00-14:20', class: 'All', subject: 'Operating System', room: 'Lecture Hall A301', instructor: 'Dr.Muhammad Al-Sadiq', type: 'Lecture', group: '2', classDiv: 'All' },
    // MONDAY - Group 2
    { day: 'Monday', time: '09:00-10:20', class: 'All', subject: 'Digital Engineering', room: 'Lecture Hall A301', instructor: 'Dr. Osama El-Nahas / Dr. Basant Talba', type: 'Lecture', group: '2', classDiv: 'All' },
    { day: 'Monday', time: '11:40-13:00', class: 'All', subject: 'Introduction to DB', room: 'Lecture Hall A118', instructor: 'Dr. Nihal El-Azly', type: 'Lecture', group: '2', classDiv: 'All' },
    { day: 'Monday', time: '13:00-14:20', class: '1', subject: 'Linux Section', room: 'Hall 205', instructor: 'Dr.Mohammed Saeed ', type: 'Section', group: '2', classDiv: 'A' },
    { day: 'Monday', time: '13:00-14:20', class: '1', subject: 'Linux Section', room: 'Hall 205', instructor: 'Dr.Lamia ', type: 'Section', group: '2', classDiv: 'B' },
    { day: 'Monday', time: '13:00-14:20', class: '2', subject: 'Linux Section', room: 'Hall 205', instructor: 'Dr.Mohammed Saeed ', type: 'Section', group: '2', classDiv: 'A' },
    { day: 'Monday', time: '13:00-14:20', class: '2', subject: 'Linux Section', room: 'Hall 205', instructor: 'Dr.Lamia ', type: 'Section', group: '2', classDiv: 'B' },
    { day: 'Monday', time: '13:00-14:20', class: '1', subject: 'DE Section', room: 'Hall 315', instructor: 'Dr. Ahmed Kamel', type: 'Section', group: '2', classDiv: 'All' },
    { day: 'Monday', time: '13:00-14:20', class: '2', subject: 'DE Section', room: 'Hall 304', instructor: 'Dr. Israa Mohsen', type: 'Section', group: '2', classDiv: 'All' },
    { day: 'Monday', time: '14:20-15:40', class: '3', subject: 'Linux Section', room: 'Hall 205', instructor: 'Dr.Rana Ahmed ', type: 'Section', group: '2', classDiv: 'All' },
    { day: 'Monday', time: '14:20-15:40', class: '4', subject: 'Linux Section', room: 'Hall 205', instructor: 'Dr.Rana Ahmed ', type: 'Section', group: '2', classDiv: 'All' },
    // TUESDAY - Group 2
    { day: 'Tuesday', time: '09:00-10:20', class: 'All', subject: 'Web Programming I', room: 'Lecture Hall A101', instructor: 'Dr. Ashraf', type: 'Lecture', group: '2', classDiv: 'All' },
    { day: 'Tuesday', time: '11:00-11:40', class: 'All', subject: 'Linux Essentials', room: 'Lecture Hall A118', instructor: 'Dr. Eman Shawky', type: 'Lecture', group: '2', classDiv: 'All' },
    { day: 'Tuesday', time: '11:40-13:00', class: '3', subject: 'Web + C++ Lab 1', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: '2', classDiv: 'All' },
    { day: 'Tuesday', time: '11:40-13:00', class: '4', subject: 'Web + C++ Lab 2', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: '2', classDiv: 'All' },
    { day: 'Tuesday', time: '13:00-14:20', class: '3', subject: 'DE Section', room: 'Hall 315', instructor: 'Dr. Ahmed Kamel', type: 'Section', group: '2', classDiv: 'All' },
    { day: 'Tuesday', time: '13:00-14:20', class: '4', subject: 'DE Section', room: 'Hall 304', instructor: 'Dr.Bilal ', type: 'Section', group: '2', classDiv: 'All' }
];

// Year 2 - Group 3 Timetable
const year2Group3Data = [
    // SATURDAY - Group 3
    { day: 'Saturday', time: '09:00-10:20', class: 'All', subject: 'Operating System', room: 'Lecture Hall A318', instructor: 'Dr.Muhammad Al-Sadiq', type: 'Lecture', group: '3', classDiv: 'All' },
    { day: 'Saturday', time: '10:20-11:00', class: '1', subject: 'DE Section', room: 'Hall 216', instructor: 'Dr.Bilal ', type: 'Section', group: '3', classDiv: 'All' },
    { day: 'Saturday', time: '10:20-11:40', class: '2', subject: 'Web + C++ Lab 2', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: '3', classDiv: 'All' },
    { day: 'Saturday', time: '10:20-11:00', class: '3', subject: 'Linux Section', room: 'Hall 205', instructor: 'Dr.Mariam', type: 'Section', group: '3', classDiv: 'All' },
    { day: 'Saturday', time: '10:20-11:40', class: '1', subject: 'Web + C++ Lab 1', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: '3', classDiv: 'All' },
    { day: 'Saturday', time: '11:40-12:20', class: '1', subject: 'Linux Section', room: 'Hall 216', instructor: 'Dr. Mariam', type: 'Section', group: '3', classDiv: 'All' },
    { day: 'Saturday', time: '11:40-12:20', class: '2', subject: 'DE Section', room: 'Hall 106', instructor: 'Dr.Asmaa ', type: 'Section', group: '3', classDiv: 'All' },
    { day: 'Saturday', time: '13:00-14:20', class: '4', subject: 'Linux Section', room: 'Hall 205', instructor: 'Dr. Mariam', type: 'Section', group: '3', classDiv: 'All' },
    { day: 'Saturday', time: '13:00-14:20', class: '2', subject: 'Linux Section', room: 'Hall 216', instructor: 'Dr. Mariam', type: 'Section', group: '3', classDiv: 'All' },
    { day: 'Saturday', time: '11:40-12:20', class: '4', subject: 'DE Section', room: 'Hall 106', instructor: 'Dr.Asmaa ', type: 'Section', group: '3', classDiv: 'All' },
    // MONDAY - Group 3
    { day: 'Monday', time: '10:20-11:00', class: '3', subject: 'DE Section', room: 'Hall 315', instructor: 'Dr. Israa Mohsen ', type: 'Section', group: '3', classDiv: 'All' },
    { day: 'Monday', time: '13:00-14:20', class: 'All', subject: 'Digital Engineering', room: 'Lecture Hall A301', instructor: 'Dr. Osama El-Nahas / Dr. Basant Talba', type: 'Lecture', group: '3', classDiv: 'All' },
    // TUESDAY - Group 3
    { day: 'Tuesday', time: '09:00-10:20', class: 'All', subject: 'Programming Essentials in C++', room: 'Lecture Hall A301', instructor: 'Dr. Nihal El-Azly', type: 'Lecture', group: '3', classDiv: 'All' },
    { day: 'Tuesday', time: '10:20-11:40', class: 'All', subject: 'Introduction to DB', room: 'Lecture Hall A301', instructor: 'Dr. Nihal El-Azly', type: 'Lecture', group: '3', classDiv: 'All' },
    { day: 'Tuesday', time: '11:40-13:00', class: 'All', subject: 'Linux Essentials', room: 'Lecture Hall A301', instructor: 'Dr. Eman Shawky', type: 'Lecture', group: '3', classDiv: 'All' },
    { day: 'Tuesday', time: '13:00-14:20', class: 'All', subject: 'Web Programming I', room: 'Lecture Hall A318', instructor: 'Dr. Ashraf', type: 'Lecture', group: '3', classDiv: 'All' },
    { day: 'Tuesday', time: '14:20-15:40', class: '3', subject: 'Web + C++ Lab 1', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: '3', classDiv: 'All' },
    { day: 'Tuesday', time: '14:20-15:40', class: '4', subject: 'Web + C++ Lab 2', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: '3', classDiv: 'All' }
];

// Year 2 - Group 4 Timetable
const year2Group4Data = [
    // SATURDAY - Group 4
    { day: 'Saturday', time: '09:00-10:20', class: 'All', subject: 'Operating System', room: 'Lecture Hall A318', instructor: 'Dr. Muhammad Al-Sadiq', type: 'Lecture', group: '4', classDiv: 'All' },
    { day: 'Saturday', time: '10:20-11:40', class: '2', subject: 'Web + C++ Lab 2', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: '4', classDiv: 'All' },
    { day: 'Saturday', time: '15:00-15:40', class: '1', subject: 'Web + C++ Lab 1', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: '4', classDiv: 'All' },
    { day: 'Saturday', time: '15:00-15:40', class: '3', subject: 'Web + C++ Lab 2', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: '4', classDiv: 'All' },
    // MONDAY - Group 4
    { day: 'Monday', time: '11:00-12:20', class: 'All', subject: 'Web Programming I', room: 'Lecture Hall A301', instructor: 'Dr. Ashraf', type: 'Lecture', group: '4', classDiv: 'All' },
    { day: 'Monday', time: '12:20-13:40', class: 'All', subject: 'Digital Engineering', room: 'Lecture Hall A101', instructor: 'Dr. Osama El-Nahas / Dr. Dina Abdel Hafiz', type: 'Lecture', group: '4', classDiv: 'All' },
    { day: 'Monday', time: '14:20-15:40', class: 'All', subject: 'Introduction to DB', room: 'Lecture Hall A101', instructor: 'Dr. Dina Abdel Hafiz', type: 'Lecture', group: '4', classDiv: 'All' },
    // TUESDAY - Group 4
    { day: 'Tuesday', time: '09:00-10:20', class: 'All', subject: 'Programming Essentials in C++', room: 'Lecture Hall A118', instructor: 'Dr. Mohamed Abd Al-Fattah', type: 'Lecture', group: '4', classDiv: 'All' },
    { day: 'Tuesday', time: '10:20-11:00', class: 'All', subject: 'Linux Essentials', room: 'Lecture Hall A118', instructor: 'Dr. Eman Shawky', type: 'Lecture', group: '4', classDiv: 'All' },
    { day: 'Tuesday', time: '11:00-11:40', class: '1', subject: 'Linux Section', room: 'Hall 316', instructor: 'Dr.Mohammed Saeed ', type: 'Section', group: '4', classDiv: 'A' },
    { day: 'Tuesday', time: '11:00-11:40', class: '1', subject: 'Linux Section', room: 'Hall 207', instructor: 'Dr. Hazem', type: 'Section', group: '4', classDiv: 'B' },
    { day: 'Tuesday', time: '11:00-11:40', class: '2', subject: 'Linux Section', room: 'Hall 202', instructor: 'Dr.Mariam ', type: 'Section', group: '4', classDiv: 'A' },
    { day: 'Tuesday', time: '11:00-11:40', class: '2', subject: 'Linux Section', room: 'Hall 203', instructor: 'Dr.Rana ', type: 'Section', group: '4', classDiv: 'B' },
    { day: 'Tuesday', time: '11:40-12:20', class: '1', subject: 'DE Section', room: 'Hall 304', instructor: 'Dr.Ahmed Kamel ', type: 'Section', group: '4', classDiv: 'All' },
    { day: 'Tuesday', time: '11:40-12:20', class: '2', subject: 'DE Section', room: 'Hall 315', instructor: 'Dr.Israa Mohsen ', type: 'Section', group: '4', classDiv: 'All' },
    { day: 'Tuesday', time: '11:40-12:20', class: '3', subject: 'Linux Section', room: 'Hall 202', instructor: 'Dr.Mohammed Saeed ', type: 'Section', group: '4', classDiv: 'A' },
    { day: 'Tuesday', time: '11:40-12:20', class: '3', subject: 'Linux Section', room: 'Hall 203', instructor: 'Dr. Hazem ', type: 'Section', group: '4', classDiv: 'B' },
    { day: 'Tuesday', time: '11:40-12:20', class: '4', subject: 'Linux Section', room: 'Hall 202', instructor: 'Dr.Mariam ', type: 'Section', group: '4', classDiv: 'A' },
    { day: 'Tuesday', time: '11:40-12:20', class: '4', subject: 'Linux Section', room: 'Hall 203', instructor: 'Dr.Rana ', type: 'Section', group: '4', classDiv: 'B' },
    { day: 'Tuesday', time: '12:20-13:40', class: '3', subject: 'DE Section', room: 'Hall 106', instructor: 'Dr.Israa Mohsen ', type: 'Section', group: '4', classDiv: 'All' },
    { day: 'Tuesday', time: '13:40-14:20', class: '4', subject: 'DE Section', room: 'Hall 106', instructor: 'Dr.Bilal ', type: 'Section', group: '4', classDiv: 'All' },
    { day: 'Tuesday', time: '13:40-14:20', class: '2', subject: 'Web + C++ Lab 2', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: '4', classDiv: 'All' }
];

// Combine all Year 2 data
const year2TimetableData = [...year2Group1Data, ...year2Group2Data, ...year2Group3Data, ...year2Group4Data];

// Load timetable on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Year 2 data loaded:', year2TimetableData.length, 'entries');
    
    // Wait a bit to ensure main.js is fully loaded
    setTimeout(() => {
        if (typeof loadTimetableByDays === 'function') {
            loadTimetableByDays('year2', year2TimetableData, ['Saturday', 'Monday', 'Tuesday']);
            console.log('Year 2 timetables loaded with day separation');
            
            // Update result count
            if (typeof updateResultCount === 'function') {
                updateResultCount('year2');
            }
            
            // Check URL parameters and auto-filter
            const urlParams = new URLSearchParams(window.location.search);
            const groupParam = urlParams.get('group');
            const classParam = urlParams.get('class');
            
            if (groupParam) {
                const groupSelect = document.getElementById('groupFilter2');
                if (groupSelect) {
                    groupSelect.value = groupParam;
                }
            }
            
            if (classParam) {
                const classSelect = document.getElementById('classFilter2');
                if (classSelect) {
                    classSelect.value = classParam;
                }
            }
            
            // Apply filters if any were set
            if (groupParam || classParam) {
                if (typeof applyFilters === 'function') {
                    applyFilters('year2');
                }
            }
        } else {
            console.error('loadTimetableByDays function not found!');
        }
    }, 100);
});

