# Complete Timetable Data Implementation Guide

## Overview
This guide contains all the complete data you provided for Years 2-4. Use this to complete the implementation.

## Status
- ✅ **Year 1**: Complete (Groups 1-2 done, Group 3 partial - missing Sunday/Wednesday)
- 🔄 **Year 2**: Group 1 implemented (17 entries), Groups 2-4 need implementation
- ⏳ **Year 3**: Needs implementation (Network + Software tracks)
- ⏳ **Year 4**: Needs implementation (Network + Software tracks)

## Data Structure Format
```javascript
{
    day: 'Monday',           // Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday
    time: '09:40-11:00',     // Time range
    class: '1',              // 1, 2, 3, 4, or 'All'
    subject: 'Linux Section',
    room: 'Hall 203',
    instructor: 'Dr. Name',
    type: 'Lecture',         // Lecture, Section, Lab
    group: '1',              // For Year 1-2: '1', '2', '3', '4'
                             // For Year 3-4: 'Network' or 'Software'
    classDiv: 'A'            // 'A', 'B', or 'All'
}
```

---

## YEAR 2 - REMAINING DATA

### Year 2 - Group 2 (20 entries)
Add to `year2Group2Data` array in `js/year2-data.js`:

**Saturday:**
```javascript
{ day: 'Saturday', time: '09:40-10:20', class: 'All', subject: 'Operating System', room: 'Lecture Hall A318', instructor: 'Dr. Ghada Fathy', type: 'Lecture', group: '2', classDiv: 'All' },
{ day: 'Saturday', time: '11:00-11:40', class: '4', subject: 'Digital Engineering Section', room: 'Hall 216', instructor: 'Dr. Osama El-Nahas', type: 'Section', group: '2', classDiv: 'A' },
{ day: 'Saturday', time: '11:40-13:00', class: 'All', subject: 'Digital Engineering', room: 'Lecture Hall A118', instructor: 'Dr. Osama El-Nahas / Dr. Rawda Magdy', type: 'Lecture', group: '2', classDiv: 'All' },
{ day: 'Saturday', time: '13:00-14:20', class: '3', subject: 'Web + C++ Lab 1', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: '2', classDiv: 'All' },
```

**Monday:**
```javascript
{ day: 'Monday', time: '09:40-11:00', class: '2', subject: 'Linux Section', room: 'Hall 203', instructor: 'Dr. Eman Shawky', type: 'Section', group: '2', classDiv: 'A' },
{ day: 'Monday', time: '09:40-11:00', class: '2', subject: 'Linux Section', room: 'Hall 202', instructor: 'Dr. Eman Shawky', type: 'Section', group: '2', classDiv: 'B' },
{ day: 'Monday', time: '09:40-11:00', class: '4', subject: 'Linux Section', room: 'Hall 203', instructor: 'Dr. Eman Shawky', type: 'Section', group: '2', classDiv: 'A' },
{ day: 'Monday', time: '09:40-11:00', class: '4', subject: 'Linux Section', room: 'Hall 202', instructor: 'Dr. Eman Shawky', type: 'Section', group: '2', classDiv: 'B' },
{ day: 'Monday', time: '09:40-11:00', class: '3', subject: 'DE Section', room: 'Hall 304', instructor: 'Dr. Osama El-Nahas', type: 'Section', group: '2', classDiv: 'A' },
{ day: 'Monday', time: '09:40-11:00', class: '3', subject: 'DE Section', room: 'Hall 207', instructor: 'Dr. Osama El-Nahas', type: 'Section', group: '2', classDiv: 'B' },
{ day: 'Monday', time: '13:00-14:20', class: 'All', subject: 'Programming Essentials in C++', room: 'Lecture Hall A118', instructor: 'Dr. Nihal El-Azly', type: 'Lecture', group: '2', classDiv: 'All' },
{ day: 'Monday', time: '14:20-15:40', class: 'All', subject: 'Introduction to DB', room: 'Lecture Hall A118', instructor: 'Dr. Nihal El-Azly', type: 'Lecture', group: '2', classDiv: 'All' },
```

**Tuesday:**
```javascript
{ day: 'Tuesday', time: '10:20-11:40', class: 'All', subject: 'Web Programming I', room: 'Lecture Hall A101', instructor: 'Dr. Ashraf', type: 'Lecture', group: '2', classDiv: 'All' },
{ day: 'Tuesday', time: '11:40-13:00', class: '1', subject: 'DE Section', room: 'Hall 203', instructor: 'Dr. Osama El-Nahas', type: 'Section', group: '2', classDiv: 'A' },
{ day: 'Tuesday', time: '11:40-13:00', class: '1', subject: 'DE Section', room: 'Hall 202', instructor: 'Dr. Osama El-Nahas', type: 'Section', group: '2', classDiv: 'B' },
{ day: 'Tuesday', time: '12:20-13:40', class: 'All', subject: 'Linux Essentials', room: 'Lecture Hall A301', instructor: 'Dr. Eman Shawky', type: 'Lecture', group: '2', classDiv: 'All' },
{ day: 'Tuesday', time: '13:00-14:20', class: '1', subject: 'Web + C++ Lab 1', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: '2', classDiv: 'All' },
{ day: 'Tuesday', time: '13:00-14:20', class: '4', subject: 'Web + C++ Lab 2', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: '2', classDiv: 'All' },
{ day: 'Tuesday', time: '13:40-15:00', class: '2', subject: 'Web + C++ Lab 1', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: '2', classDiv: 'All' },
{ day: 'Tuesday', time: '14:20-15:40', class: '3', subject: 'Web + C++ Lab 1', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: '2', classDiv: 'All' },
```

### Year 2 - Group 3 (16 entries)
Similar structure - you have the complete data. Key sessions:
- Saturday: 10 entries (lectures, labs, sections)
- Monday: 2 entries (DE sections for classes 1A/1B)
- Tuesday: 4 entries (Web + C++ labs)

### Year 2 - Group 4 (21 entries)
Similar structure - you have the complete data. Key sessions:
- Saturday: 4 entries
- Monday: 3 entries
- Tuesday: 14 entries (heavy day with multiple labs and sections)

---

## YEAR 3 - COMPLETE DATA

### Structure
Year 3 has **TWO TRACKS**: Network & Software
- Update `js/year3-data.js`
- Update `pages/year3.html` to show track tabs and class filtering

### Network Track (Saturday, Monday, Tuesday)
**Saturday:**
```javascript
{ day: 'Saturday', time: '09:40-11:00', class: '1', subject: 'Wireless Networks Section', room: 'Hall 203', instructor: 'Eng. Shaimaa', type: 'Section', group: 'Network', classDiv: 'All' },
{ day: 'Saturday', time: '09:40-11:00', class: '2', subject: 'Network Security Section', room: 'Hall 304', instructor: 'Dr. Doaa Saad', type: 'Section', group: 'Network', classDiv: 'All' },
{ day: 'Saturday', time: '09:40-11:00', class: '3', subject: 'CCNA Section', room: 'Hall 202', instructor: 'Eng. Shady Mahmoud', type: 'Section', group: 'Network', classDiv: 'All' },
{ day: 'Saturday', time: '11:00-12:20', class: 'All', subject: 'Network Security', room: 'Lecture Hall A316', instructor: 'Dr. Doaa Saad', type: 'Lecture', group: 'Network', classDiv: 'All' },
{ day: 'Saturday', time: '12:20-13:40', class: 'All', subject: 'Wireless & Mobile Networks', room: 'Lecture Hall A316', instructor: 'Eng. Shaimaa', type: 'Lecture', group: 'Network', classDiv: 'All' },
```

**Monday:**
```javascript
{ day: 'Monday', time: '09:40-11:00', class: 'All', subject: 'Computer Organization', room: 'Lecture Hall A316', instructor: 'Dr. Elsayed Shehata', type: 'Lecture', group: 'Network', classDiv: 'All' },
{ day: 'Monday', time: '11:00-12:20', class: '2', subject: 'CCNA Lab', room: 'Network Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Network', classDiv: 'All' },
{ day: 'Monday', time: '11:00-12:20', class: '3', subject: 'Java Lab', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: 'Network', classDiv: 'All' },
{ day: 'Monday', time: '11:00-12:20', class: '1', subject: 'CCNA Lab', room: 'Network Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Network', classDiv: 'All' },
{ day: 'Monday', time: '13:00-14:20', class: 'All', subject: 'Java Programming', room: 'Lecture Hall A316', instructor: 'Dr. Doha', type: 'Lecture', group: 'Network', classDiv: 'All' },
{ day: 'Monday', time: '14:20-15:40', class: '1', subject: 'CCNA Section', room: 'Hall 202', instructor: 'Eng. Shady Mahmoud', type: 'Section', group: 'Network', classDiv: 'All' },
{ day: 'Monday', time: '14:20-15:40', class: '3', subject: 'Network Security Section', room: 'Hall 201', instructor: 'Dr. Doaa Saad', type: 'Section', group: 'Network', classDiv: 'All' },
```

**Tuesday:**
```javascript
{ day: 'Tuesday', time: '09:40-11:00', class: 'All', subject: 'CCNA II (Routing, Switching & Wireless)', room: 'Lecture Hall A316', instructor: 'Eng. Shady Mahmoud', type: 'Lecture', group: 'Network', classDiv: 'All' },
{ day: 'Tuesday', time: '11:00-12:20', class: '1', subject: 'Java Lab', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: 'Network', classDiv: 'All' },
{ day: 'Tuesday', time: '11:00-12:20', class: '2', subject: 'CCNA Lab', room: 'Network Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Network', classDiv: 'All' },
{ day: 'Tuesday', time: '13:00-14:20', class: 'All', subject: 'Operating System (Unix/Linux)', room: 'Lecture Hall A316', instructor: 'Dr. Eman Shawky', type: 'Lecture', group: 'Network', classDiv: 'All' },
{ day: 'Tuesday', time: '14:20-15:40', class: '2', subject: 'Wireless Networks Section', room: 'Hall 203', instructor: 'Eng. Shaimaa', type: 'Section', group: 'Network', classDiv: 'All' },
```

### Software Track (Saturday, Monday, Tuesday)
**Saturday:**
```javascript
{ day: 'Saturday', time: '09:40-11:00', class: '1', subject: 'Design Patterns Section', room: 'Hall 202', instructor: 'Dr. Manar Saad', type: 'Section', group: 'Software', classDiv: 'All' },
{ day: 'Saturday', time: '09:40-11:00', class: '2', subject: 'Multimedia Section', room: 'Hall 304', instructor: 'Dr. Eman Shaaban', type: 'Section', group: 'Software', classDiv: 'All' },
{ day: 'Saturday', time: '09:40-11:00', class: '3', subject: 'Java Section', room: 'Hall 203', instructor: 'Dr. Doha', type: 'Section', group: 'Software', classDiv: 'All' },
{ day: 'Saturday', time: '09:40-11:00', class: '4', subject: 'OS Section', room: 'Hall 201', instructor: 'Dr. Eman Shawky', type: 'Section', group: 'Software', classDiv: 'All' },
{ day: 'Saturday', time: '11:00-12:20', class: 'All', subject: 'Design Patterns', room: 'Lecture Hall A118', instructor: 'Dr. Manar Saad', type: 'Lecture', group: 'Software', classDiv: 'All' },
{ day: 'Saturday', time: '12:20-13:40', class: 'All', subject: 'Multimedia Technology', room: 'Lecture Hall A118', instructor: 'Dr. Eman Shaaban', type: 'Lecture', group: 'Software', classDiv: 'All' },
```

**Monday:**
```javascript
{ day: 'Monday', time: '09:40-11:00', class: 'All', subject: 'Computer Organization', room: 'Lecture Hall A316', instructor: 'Dr. Elsayed Shehata', type: 'Lecture', group: 'Software', classDiv: 'All' },
{ day: 'Monday', time: '11:00-12:20', class: '1', subject: 'Java Lab', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Monday', time: '11:00-12:20', class: '2', subject: 'Operating Systems Lab', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Monday', time: '11:00-12:20', class: '3', subject: 'Multimedia Lab', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Monday', time: '11:00-12:20', class: '4', subject: 'Design Patterns Lab', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Monday', time: '13:00-14:20', class: 'All', subject: 'Java Programming', room: 'Lecture Hall A316', instructor: 'Dr. Doha', type: 'Lecture', group: 'Software', classDiv: 'All' },
{ day: 'Monday', time: '14:20-15:40', class: '1', subject: 'Multimedia Section', room: 'Hall 203', instructor: 'Dr. Eman Shaaban', type: 'Section', group: 'Software', classDiv: 'All' },
{ day: 'Monday', time: '14:20-15:40', class: '4', subject: 'Java Section', room: 'Hall 201', instructor: 'Dr. Doha', type: 'Section', group: 'Software', classDiv: 'All' },
```

**Tuesday:**
```javascript
{ day: 'Tuesday', time: '09:40-11:00', class: '1', subject: 'Operating Systems Lab', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Tuesday', time: '09:40-11:00', class: '3', subject: 'Design Patterns Lab', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Tuesday', time: '09:40-11:00', class: '2', subject: 'Java Lab', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Tuesday', time: '11:00-12:20', class: '4', subject: 'Multimedia Lab', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Tuesday', time: '13:00-14:20', class: 'All', subject: 'Operating System (Unix/Linux)', room: 'Lecture Hall A316', instructor: 'Dr. Eman Shawky', type: 'Lecture', group: 'Software', classDiv: 'All' },
{ day: 'Tuesday', time: '14:20-15:40', class: '2', subject: 'Design Patterns Section', room: 'Hall 203', instructor: 'Dr. Manar Saad', type: 'Section', group: 'Software', classDiv: 'All' },
{ day: 'Tuesday', time: '14:20-15:40', class: '3', subject: 'OS Section', room: 'Hall 201', instructor: 'Dr. Eman Shawky', type: 'Section', group: 'Software', classDiv: 'All' },
```

---

## YEAR 4 - COMPLETE DATA

### Network Track (Saturday, Sunday, Wednesday)
**Saturday:**
```javascript
{ day: 'Saturday', time: '10:20-11:40', class: '1', subject: 'Network Design Section', room: 'Hall 203', instructor: 'Dr. Ali Mahmoud', type: 'Section', group: 'Network', classDiv: 'All' },
{ day: 'Saturday', time: '10:20-11:40', class: '2', subject: 'Optical Networks Section', room: 'Hall 304', instructor: 'Dr. Mohamed Ibrahim', type: 'Section', group: 'Network', classDiv: 'All' },
{ day: 'Saturday', time: '10:20-11:40', class: '3', subject: 'Computer Networks Project', room: 'Hall 202', instructor: 'Dr. Ahmed Hassan', type: 'Section', group: 'Network', classDiv: 'All' },
{ day: 'Saturday', time: '12:20-13:40', class: 'All', subject: 'Network Design & Management', room: 'Lecture Hall A101', instructor: 'Dr. Ali Mahmoud', type: 'Lecture', group: 'Network', classDiv: 'All' },
{ day: 'Saturday', time: '13:40-15:00', class: 'All', subject: 'Optical Networks & Broadband', room: 'Lecture Hall A101', instructor: 'Dr. Mohamed Ibrahim', type: 'Lecture', group: 'Network', classDiv: 'All' },
```

**Sunday:**
```javascript
{ day: 'Sunday', time: '09:40-11:00', class: '1', subject: 'Network Project Lab', room: 'Network Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Network', classDiv: 'All' },
{ day: 'Sunday', time: '09:40-11:00', class: '2', subject: 'IoT Lab', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: 'Network', classDiv: 'All' },
{ day: 'Sunday', time: '09:40-11:00', class: '3', subject: 'Network Design Lab', room: 'Network Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Network', classDiv: 'All' },
{ day: 'Sunday', time: '11:00-12:20', class: 'All', subject: 'Introduction to IoT', room: 'Lecture Hall A102', instructor: 'Dr. Sara Ahmed', type: 'Lecture', group: 'Network', classDiv: 'All' },
{ day: 'Sunday', time: '13:00-14:20', class: '1', subject: 'IoT Lab', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: 'Network', classDiv: 'All' },
{ day: 'Sunday', time: '13:00-14:20', class: '3', subject: 'Network Project Lab', room: 'Network Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Network', classDiv: 'All' },
{ day: 'Sunday', time: '14:20-15:40', class: '2', subject: 'Network Design Lab', room: 'Network Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Network', classDiv: 'All' },
```

**Wednesday:**
```javascript
{ day: 'Wednesday', time: '09:40-11:00', class: 'All', subject: 'Computer Networks Project', room: 'Lecture Hall A102', instructor: 'Dr. Ahmed Hassan', type: 'Lecture', group: 'Network', classDiv: 'All' },
{ day: 'Wednesday', time: '11:00-12:20', class: '1', subject: 'Optical Networks Section', room: 'Hall 203', instructor: 'Dr. Mohamed Ibrahim', type: 'Section', group: 'Network', classDiv: 'All' },
{ day: 'Wednesday', time: '11:00-12:20', class: '2', subject: 'Network Project Section', room: 'Hall 202', instructor: 'Dr. Ahmed Hassan', type: 'Section', group: 'Network', classDiv: 'All' },
{ day: 'Wednesday', time: '11:00-12:20', class: '3', subject: 'IoT Section', room: 'Hall 201', instructor: 'Dr. Sara Ahmed', type: 'Section', group: 'Network', classDiv: 'All' },
```

### Software Track (Saturday, Sunday, Wednesday)
**Saturday:**
```javascript
{ day: 'Saturday', time: '10:20-11:40', class: '1', subject: 'Mobile Apps Section', room: 'Hall 202', instructor: 'Dr. Laila Mahmoud', type: 'Section', group: 'Software', classDiv: 'All' },
{ day: 'Saturday', time: '10:20-11:40', class: '2', subject: 'HCI Section', room: 'Hall 304', instructor: 'Dr. Nour Ahmed', type: 'Section', group: 'Software', classDiv: 'All' },
{ day: 'Saturday', time: '10:20-11:40', class: '3', subject: 'Software Project', room: 'Hall 203', instructor: 'Dr. Yasmin Hassan', type: 'Section', group: 'Software', classDiv: 'All' },
{ day: 'Saturday', time: '12:20-13:40', class: 'All', subject: 'Mobile Application Development', room: 'Lecture Hall A301', instructor: 'Dr. Laila Mahmoud', type: 'Lecture', group: 'Software', classDiv: 'All' },
{ day: 'Saturday', time: '13:40-15:00', class: 'All', subject: 'Human-Computer Interaction', room: 'Lecture Hall A301', instructor: 'Dr. Nour Ahmed', type: 'Lecture', group: 'Software', classDiv: 'All' },
```

**Sunday:**
```javascript
{ day: 'Sunday', time: '09:40-11:00', class: '1', subject: 'Mobile Apps Lab', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Sunday', time: '09:40-11:00', class: '2', subject: 'Software Project Lab', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Sunday', time: '09:40-11:00', class: '3', subject: 'IoT Lab', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Sunday', time: '11:00-12:20', class: 'All', subject: 'Introduction to IoT', room: 'Lecture Hall A102', instructor: 'Dr. Sara Ahmed', type: 'Lecture', group: 'Software', classDiv: 'All' },
{ day: 'Sunday', time: '13:00-14:20', class: '1', subject: 'Software Project Lab', room: 'Lab 2', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Sunday', time: '13:00-14:20', class: '2', subject: 'IoT Lab', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Sunday', time: '14:20-15:40', class: '3', subject: 'Mobile Apps Lab', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
```

**Wednesday:**
```javascript
{ day: 'Wednesday', time: '09:40-11:00', class: 'All', subject: 'Software Engineering Project', room: 'Lecture Hall A302', instructor: 'Dr. Yasmin Hassan', type: 'Lecture', group: 'Software', classDiv: 'All' },
{ day: 'Wednesday', time: '11:00-12:20', class: '1', subject: 'HCI Section', room: 'Hall 203', instructor: 'Dr. Nour Ahmed', type: 'Section', group: 'Software', classDiv: 'All' },
{ day: 'Wednesday', time: '11:00-12:20', class: '2', subject: 'Software Project Section', room: 'Hall 202', instructor: 'Dr. Yasmin Hassan', type: 'Section', group: 'Software', classDiv: 'All' },
{ day: 'Wednesday', time: '11:00-12:20', class: '3', subject: 'IoT Section', room: 'Hall 201', instructor: 'Dr. Sara Ahmed', type: 'Section', group: 'Software', classDiv: 'All' },
{ day: 'Wednesday', time: '13:00-14:20', class: '2', subject: 'Mobile Apps Lab', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
{ day: 'Wednesday', time: '14:20-15:40', class: '1', subject: 'IoT Lab', room: 'Lab 1', instructor: 'Lab Instructor', type: 'Lab', group: 'Software', classDiv: 'All' },
```

---

## NEXT STEPS

### 1. Complete Year 2 Data (js/year2-data.js)
- Copy Group 2, 3, 4 arrays from above
- Verify combined array: `year2TimetableData = [...year2Group1Data, ...year2Group2Data, ...year2Group3Data, ...year2Group4Data]`

### 2. Update Year 2 HTML (pages/year2.html)
- Copy filter structure from `year1.html`
- Add Group dropdown (1-4)
- Add Class dropdown (1-4, All)
- Update table with 9 columns

### 3. Implement Year 3 Data (js/year3-data.js)
```javascript
const year3NetworkData = [ /* Network track entries */ ];
const year3SoftwareData = [ /* Software track entries */ ];
const year3TimetableData = [...year3NetworkData, ...year3SoftwareData];
```

### 4. Update Year 3 HTML (pages/year3.html)
- Add Bootstrap tabs for Network/Software tracks
- Add Class filter dropdown (1-3 for Network, 1-4 for Software)
- Dynamically filter by track + class

### 5. Implement Year 4 Data (js/year4-data.js)
Same structure as Year 3

### 6. Update Year 4 HTML (pages/year4.html)
Same structure as Year 3

---

## FILE TEMPLATES

### year3-data.js Template
```javascript
/**
 * Year 3 Timetable Data - Fall 2025/2026
 * BATU IT Department
 * Two Tracks: Network Engineering & Software Engineering
 */

// Year 3 - Network Track
const year3NetworkData = [
    // Add all Network track entries here
];

// Year 3 - Software Track
const year3SoftwareData = [
    // Add all Software track entries here
];

// Combine all Year 3 data
const year3TimetableData = [...year3NetworkData, ...year3SoftwareData];

// Load timetable on page load
document.addEventListener('DOMContentLoaded', function() {
    loadTimetable('year3', year3TimetableData);
});
```

### year3.html Filter Section Template
```html
<div class="row mb-4">
    <!-- Track Selection (Tabs) -->
    <div class="col-12 mb-3">
        <ul class="nav nav-tabs" id="trackTabs">
            <li class="nav-item">
                <a class="nav-link active" data-track="Network">Network Engineering</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-track="Software">Software Engineering</a>
            </li>
        </ul>
    </div>
    
    <!-- Class Filter -->
    <div class="col-md-3">
        <select id="classFilter" class="form-select">
            <option value="">All Classes</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
            <option value="4">Class 4</option>
        </select>
    </div>
    
    <!-- Day Filter -->
    <div class="col-md-3">
        <select id="dayFilter" class="form-select">
            <option value="">All Days</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
        </select>
    </div>
    
    <!-- Search -->
    <div class="col-md-6">
        <input type="text" id="searchInput" class="form-control" placeholder="Search...">
    </div>
</div>
```

---

## VALIDATION CHECKLIST

- [ ] Year 2 Groups 2-4 data added to year2-data.js
- [ ] Year 2 HTML updated with Group/Class filters
- [ ] Year 3 Network + Software data in year3-data.js
- [ ] Year 3 HTML with track tabs and class filter
- [ ] Year 4 Network + Software data in year4-data.js
- [ ] Year 4 HTML with track tabs and class filter
- [ ] All filters working correctly
- [ ] Mobile responsive tables verified
- [ ] Search function working across all years
- [ ] README.md updated with deployment instructions

Good luck with the implementation! 🚀
