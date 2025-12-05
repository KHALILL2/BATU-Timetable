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
    { day: 'Saturday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'Microprocessor section', room: 'Room 216', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Saturday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Computer Architecture', room: 'Lecture Hall 301', instructor: 'Dr. Rawda Magdy', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Saturday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'CA section', room: 'Room 203', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'A' },
    { day: 'Saturday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'CA section', room: 'Room 202', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    { day: 'Saturday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'CA section (continuation)', room: 'Room 203', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'A' },
    { day: 'Saturday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'CA section (continuation)', room: 'Room 202', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    
    // Monday
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Microprocessor', room: 'Lecture Hall 118', instructor: 'Dr. Osama El-Nahas / Dr. Heman El-Sayed / Dr. Nassar', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Computer Graphics', room: 'Lecture Hall 118', instructor: 'Dr. Ashraf', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Advanced C', room: 'Lecture Hall 318', instructor: 'Dr. Dina', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'Micro section', room: 'Room 316', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'A' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'Micro section', room: 'Room 207', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'B' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'Java Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'Java Lab 1', room: 'Lab 1', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'Java Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'Java Lab 1', room: 'Lab 1', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    
    // Tuesday
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'Micro section', room: 'Room 106', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'CG + Advanced C Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'CG + Advanced C Lab 1', room: 'Lab 1', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'Micro section', room: 'Room 106', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'CG + Advanced C Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'CG + Advanced C Lab 1', room: 'Lab 1', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'CA section', room: 'Room 315', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'CA section', room: 'Room 106', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'CA section', room: 'Room 205', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Data Communication', room: 'Lecture Hall 301', instructor: 'Dr. Osama El-Nahas / Dr. Nehal El-Azly / Dr. Basant Talba', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Java Programming 2', room: 'Lecture Hall 301', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lecture', group: 1, classDiv: 'All' }
];

// ========================================
// NETWORK ENGINEERING TIMETABLE
// ========================================

const year3NetworkData = [
    // Saturday - Lectures for all classes
    { day: 'Saturday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Network Administration', room: 'Lecture Hall 301', instructor: 'Dr. Motaz', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Saturday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Computer Architecture', room: 'Lecture Hall 301', instructor: 'Dr. Rawda Magdy', type: 'Lecture', group: 1, classDiv: 'All' },
    
    // Monday
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'CCNA section', room: 'Room 304', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'Java Lab 1', room: 'Lab 1', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'Java Lab 2', room: 'Lab 2', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Microprocessor', room: 'Lecture Hall 301', instructor: 'Dr. Heman El-Sayed / Dr. Nassar / Dr. Osama El-Nahas', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'Java Lab 1', room: 'Lab 1', instructor: 'TBD', type: 'Lab', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'CCNA section', room: 'Room 202', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'CCNA section', room: 'Room 203', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'CCNA section', room: 'Room 202', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'CCNA section', room: 'Room 203', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Monday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Data Communication', room: 'Lecture Hall 301', instructor: 'Dr. Osama El-Nahas / Dr. Nehal El-Azly / Dr. Basant Talba', type: 'Lecture', group: 1, classDiv: 'All' },
    
    // Tuesday
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'Micro section', room: 'Room 304', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'CA (Computer Architecture) section', room: 'Room 216', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'Micro section', room: 'Room 315', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'CA (Computer Architecture) section', room: 'Room 315', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'Micro section', room: 'Room 304', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'CA (Computer Architecture) section', room: 'Room 216', instructor: 'TBD', type: 'Section', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Java Programming 2', room: 'Lecture Hall 118', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lecture', group: 1, classDiv: 'All' },
    { day: 'Tuesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'CCNA R&S II', room: 'Lecture Hall 118', instructor: 'Dr. May', type: 'Lecture', group: 1, classDiv: 'All' }
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
