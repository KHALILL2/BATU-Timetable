/**
 * Year 1 Timetable Data - Fall 2025/2026
 * BATU IT Department
 * 3 Groups, each with 4 Classes (A/B divisions)
 */

// Year 1 - Group 1 Timetable
const year1Group1Data = [
    // SATURDAY - Group 1
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
, class: '1', subject: 'Physics Section', room: 'Hall 304', instructor: 'Dr. Mohamed Adel', type: 'Section', group: '1', classDiv: 'All' },
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
, class: '1', subject: 'Math Section', room: 'Hall 315', instructor: 'Dr. Mohamed El-Shadhly', type: 'Section', group: '1', classDiv: 'All' },
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
, class: '2', subject: 'Physics Section', room: 'Hall 304', instructor: 'Dr. Mohamed Adel', type: 'Section', group: '1', classDiv: 'All' },
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
, class: '2', subject: 'Math Section', room: 'Hall 315', instructor: 'Dr. Mohamed El-Shadhly', type: 'Section', group: '1', classDiv: 'All' },
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
, class: '3', subject: 'Physics Section', room: 'Hall 304', instructor: 'Dr. Mohamed Adel', type: 'Section', group: '1', classDiv: 'All' },
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
, class: '4', subject: 'Physics Section', room: 'Hall 304', instructor: 'Dr. Mohamed Adel', type: 'Section', group: '1', classDiv: 'All' },
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
, class: 'All', subject: 'English', room: 'Auditorium 118', instructor: 'Dr. Mohamed El-Qadeem', type: 'Lecture', group: '1', classDiv: 'All' },
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
, class: 'All', subject: 'Python Programming', room: 'Auditorium 118', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lecture', group: '1', classDiv: 'All' },
    
    // SUNDAY - Group 1
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Math 1', room: 'Auditorium 118', instructor: 'Dr. Mohamed El-Shadhly', type: 'Lecture', group: '1', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Physics', room: 'Auditorium 118', instructor: 'Dr. Mohamed Adel', type: 'Lecture', group: '1', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'Python Lab 1', room: 'Lab 1', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lab', group: '1', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'IT Section', room: 'Hall 106 A+B', instructor: 'Mr. Mohamed Adel', type: 'Section', group: '1', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'Math Section', room: 'Hall 315', instructor: 'Dr. Mohamed El-Shadhly', type: 'Section', group: '1', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'IT Section', room: 'Hall 106 A+B', instructor: 'Mr. Mohamed Adel', type: 'Section', group: '1', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'Math Section', room: 'Hall 304', instructor: 'Dr. Mohamed El-Shadhly', type: 'Section', group: '1', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'Physics Section', room: 'Hall 216', instructor: 'Dr. Mohamed Adel', type: 'Section', group: '1', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'IT Section', room: 'Hall 316', instructor: 'Mr. Bilal', type: 'Section', group: '1', classDiv: 'A' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'IT Section', room: 'Hall 207', instructor: 'Mr. Osama', type: 'Section', group: '1', classDiv: 'B' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'IT Section', room: 'Hall 316', instructor: 'Mr. Bilal', type: 'Section', group: '1', classDiv: 'A' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'IT Section', room: 'Hall 207', instructor: 'Mr. Osama', type: 'Section', group: '1', classDiv: 'B' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'Python Lab 2', room: 'Lab 2', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lab', group: '1', classDiv: 'All' },
    
    // WEDNESDAY - Group 1
    { day: 'Wednesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'Math Section', room: 'Hall 304', instructor: 'Dr. Mohamed El-Shadhly', type: 'Section', group: '1', classDiv: 'All' },
    { day: 'Wednesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'Python Lab 1', room: 'Lab 1', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lab', group: '1', classDiv: 'All' },
    { day: 'Wednesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'Python Lab 2', room: 'Lab 2', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lab', group: '1', classDiv: 'All' },
    { day: 'Wednesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'Math Section', room: 'Hall 304', instructor: 'Dr. Mohamed El-Shadhly', type: 'Section', group: '1', classDiv: 'All' },
    { day: 'Wednesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'IT', room: 'Auditorium 118', instructor: 'Dr. May Mohamed', type: 'Lecture', group: '1', classDiv: 'All' },
    { day: 'Wednesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Cyber Security', room: 'Auditorium 118', instructor: 'Dr. Heman El-Sayed', type: 'Lecture', group: '1', classDiv: 'All' }
];

// Year 1 - Group 2 Timetable
const year1Group2Data = [
    // SATURDAY - Group 2
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
, class: '1', subject: 'Math Section', room: 'Hall 315', instructor: 'Mr. Bilal/Osama', type: 'Section', group: '2', classDiv: 'All' },
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
, class: '3', subject: 'Physics Section', room: 'Hall 205', instructor: 'Dr. Mohamed Adel', type: 'Section', group: '2', classDiv: 'All' },
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
, class: '4', subject: 'Physics Section', room: 'Hall 304', instructor: 'Dr. Mohamed Adel', type: 'Section', group: '2', classDiv: 'All' },
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
, class: '2', subject: 'Math Section', room: 'Hall 315', instructor: 'Dr. Mohamed El-Shadhly', type: 'Section', group: '2', classDiv: 'All' },
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
, class: '2', subject: 'Physics Section', room: 'Hall 205', instructor: 'Dr. Mohamed Adel', type: 'Section', group: '2', classDiv: 'All' },
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
, class: 'All', subject: 'English', room: 'Auditorium A101', instructor: 'Dr. Mohamed El-Qadeem', type: 'Lecture', group: '2', classDiv: 'All' },
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
, class: 'All', subject: 'Python Programming', room: 'Auditorium A101', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lecture', group: '2', classDiv: 'All' },
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
, class: 'All', subject: 'Physics', room: 'Auditorium A301', instructor: 'Dr. Jaser', type: 'Lecture', group: '2', classDiv: 'All' },
    
    // SUNDAY - Group 2
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Physics', room: 'Auditorium A301', instructor: 'Dr. Jaser', type: 'Lecture', group: '2', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Math 1', room: 'Auditorium A301', instructor: 'Dr. Mohamed El-Shadhly', type: 'Lecture', group: '2', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'Python Lab 2', room: 'Lab 2', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lab', group: '2', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'IT Section', room: 'Hall 106', instructor: 'Mr. Mohamed Adel', type: 'Section', group: '2', classDiv: 'A+B' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'IT Section', room: 'Hall 316', instructor: 'Mr. Bilal', type: 'Section', group: '2', classDiv: 'A' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'IT Section', room: 'Hall 207', instructor: 'Mr. Osama', type: 'Section', group: '2', classDiv: 'B' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'IT Section', room: 'Hall 202', instructor: 'Mr. Rania', type: 'Section', group: '2', classDiv: 'A' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'IT Section', room: 'Hall 203', instructor: 'Mr. Ghada', type: 'Section', group: '2', classDiv: 'B' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'IT Section', room: 'Hall 106', instructor: 'Mr. Mohamed Adel', type: 'Section', group: '2', classDiv: 'A+B' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '2', subject: 'Python Lab 2', room: 'Lab 2', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lab', group: '2', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'IT Section', room: 'Hall 202', instructor: 'Mr. Rania', type: 'Section', group: '2', classDiv: 'A' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'IT Section', room: 'Hall 203', instructor: 'Mr. Ghada', type: 'Section', group: '2', classDiv: 'B' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'IT Section', room: 'Hall 316', instructor: 'Mr. Bilal', type: 'Section', group: '2', classDiv: 'A' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'IT Section', room: 'Hall 207', instructor: 'Mr. Osama', type: 'Section', group: '2', classDiv: 'B' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '3', subject: 'Python Lab 1', room: 'Lab 1', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lab', group: '2', classDiv: 'All' },
    { day: 'Sunday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'Python Lab 2', room: 'Lab 2', instructor: 'Dr. Mohamed Abdel Fattah', type: 'Lab', group: '2', classDiv: 'All' },
    
    // WEDNESDAY - Group 2
    { day: 'Wednesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '1', subject: 'Math Section', room: 'Hall 304', instructor: 'Dr. Mohamed El-Shadhly', type: 'Section', group: '2', classDiv: 'All' },
    { day: 'Wednesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: '4', subject: 'Math Section', room: 'Hall 304', instructor: 'Dr. Mohamed El-Shadhly', type: 'Section', group: '2', classDiv: 'All' },
    { day: 'Wednesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'Cyber Security', room: 'Auditorium A118', instructor: 'Dr. Heman', type: 'Lecture', group: '2', classDiv: 'All' },
    { day: 'Wednesday', 
    $start_hour = [int]$matches[1]
    $start_min = $matches[2]
    $end_hour = [int]$matches[3]
    $end_min = $matches[4]
    
    $start_ampm = if($start_hour -ge 12) { "PM" } else { "AM" }
    $end_ampm = if($end_hour -ge 12) { "PM" } else { "AM" }
    
    $start_display = if($start_hour -eq 0) { 12 } elseif($start_hour -gt 12) { $start_hour - 12 } else { $start_hour }
    $end_display = if($end_hour -eq 0) { 12 } elseif($end_hour -gt 12) { $end_hour - 12 } else { $end_hour }
    
    "time: '$start_display`:$start_min $start_ampm-$end_display`:$end_min $end_ampm'"
, class: 'All', subject: 'IT', room: 'Auditorium A118', instructor: 'Dr. Heman', type: 'Lecture', group: '2', classDiv: 'All' }
];

// Year 1 - Group 3 Timetable
const year1Group3Data = [
    // SATURDAY - Group 3
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
, class: '1', subject: 'Physics Section', room: 'Hall 106', instructor: 'Mr. Rana Zakaria', type: 'Section', group: '3', classDiv: 'A+B' },
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
, class: '2', subject: 'IT Section', room: 'Hall 316', instructor: 'Mr. Rana Zakaria', type: 'Section', group: '3', classDiv: 'A' },
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
, class: '2', subject: 'IT Section', room: 'Hall 207', instructor: 'Mr. Rania', type: 'Section', group: '3', classDiv: 'B' },
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
, class: '1', subject: 'IT Section', room: 'Hall 207', instructor: 'Mr. Rania', type: 'Section', group: '3', classDiv: 'A' },
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
, class: '1', subject: 'IT Section', room: 'Hall 316', instructor: 'Mr. Rana Zakaria', type: 'Section', group: '3', classDiv: 'B' },
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
, class: '2', subject: 'Physics Section', room: 'Hall 106', instructor: 'Mr. Rana Zakaria', type: 'Section', group: '3', classDiv: 'A+B' },
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
, class: 'All', subject: 'English', room: 'Auditorium A101', instructor: 'Dr. Khaled', type: 'Lecture', group: '3', classDiv: 'All' }
];

// Note: Year 1 Group 3 Sunday and Wednesday schedules were not provided in the complete data
// Please add them when available

// Combine all Year 1 data
const year1TimetableData = [...year1Group1Data, ...year1Group2Data, ...year1Group3Data];

// Load timetable on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Year 1 data loaded:', year1TimetableData.length, 'entries');
    
    // Wait a bit to ensure main.js is fully loaded
    setTimeout(() => {
        if (typeof loadTimetableByDays === 'function') {
            // Load data into day-separated tables (Year 1: Saturday, Sunday, Wednesday)
            loadTimetableByDays('year1', year1TimetableData, ['Saturday', 'Sunday', 'Wednesday']);
            console.log('Year 1 timetables loaded with day separation');
            
            // Check URL parameters and auto-filter
            const urlParams = new URLSearchParams(window.location.search);
            const groupParam = urlParams.get('group');
            const classParam = urlParams.get('class');
            
            if (groupParam) {
                const groupSelect = document.getElementById('groupFilter1');
                if (groupSelect) {
                    groupSelect.value = groupParam;
                }
            }
            
            if (classParam) {
                const classSelect = document.getElementById('classFilter1');
                if (classSelect) {
                    classSelect.value = classParam;
                }
            }
            
            // Apply filters if any were set
            if (groupParam || classParam) {
                if (typeof applyFilters === 'function') {
                    applyFilters('year1');
                }
            }
        } else {
            console.error('loadTimetableByDays function not found!');
        }
    }, 100);
});
