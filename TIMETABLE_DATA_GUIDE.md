# Timetable Data Guide - Fall 2025/2026

## ✅ COMPLETED
- Year 1 Group 1 - Fully implemented with exact schedule
- Enhanced filtering system (Group, Class, Day, Search)
- Updated UI with new table columns

## 📝 TO BE COMPLETED

Please add the complete schedules for the following to their respective data files:

### **Year 1** (`js/year1-data.js`)
- **Group 2** - Add to `year1Group2Data` array (replace the TBA placeholder)
- **Group 3** - Add to `year1Group3Data` array (replace the TBA placeholder)

### **Year 2** (`js/year2-data.js`)
Create similar structure with 4 groups:
```javascript
const year2Group1Data = [ /* Group 1 schedule */ ];
const year2Group2Data = [ /* Group 2 schedule */ ];
const year2Group3Data = [ /* Group 3 schedule */ ];
const year2Group4Data = [ /* Group 4 schedule */ ];
const year2TimetableData = [...year2Group1Data, ...year2Group2Data, ...year2Group3Data, ...year2Group4Data];
```

### **Year 3** (`js/year3-data.js`)
Split into Network and Software tracks:
```javascript
// NETWORK Track (1 Group, 3 Classes A/B)
const year3NetworkData = [ /* Network track schedule */ ];

// SOFTWARE Track (1 Group, 4 Classes A/B)
const year3SoftwareData = [ /* Software track schedule */ ];
```

### **Year 4** (`js/year4-data.js`)
Similar to Year 3:
```javascript
// NETWORK Track (1 Group, 3 Classes A/B)
const year4NetworkData = [ /* Network track schedule */ ];

// SOFTWARE Track (1 Group, 3 Classes A/B)
const year4SoftwareData = [ /* Software track schedule */ ];
```

## 📋 Data Format Example

Each schedule entry should follow this format:

```javascript
{
    day: 'Saturday',              // Day of the week
    time: '11:00-13:00',         // Time slot
    class: '1',                   // Class number (1-4) or 'All' for lectures
    subject: 'Python Programming', // Course name
    room: 'Lab 1',               // Room/Hall number
    instructor: 'Dr. Mohamed',   // Instructor name
    type: 'Lab',                 // 'Lecture', 'Lab', 'Section', 'Tutorial'
    group: '1',                  // Group number
    classDiv: 'All'              // 'All', 'A', or 'B'
}
```

## 🎯 Next Steps

1. **Gather Complete Data**: Get all schedules for Groups 2-3 (Year 1), all 4 groups (Year 2), and both tracks (Years 3-4)

2. **Update Data Files**: Replace TBA placeholders with actual schedules in:
   - `js/year1-data.js`
   - `js/year2-data.js` 
   - `js/year3-data.js`
   - `js/year4-data.js`

3. **Update HTML Pages**: Add Group/Class filters to Year 2, update Year 3/4 for track filtering

4. **Test**: Verify all filters work correctly with complete data

5. **Deploy**: Push to GitHub Pages

## 💡 Tips

- Keep time format consistent: 'HH:MM-HH:MM' (e.g., '09:00-10:20')
- Use 'All' for lectures that all classes attend together
- Use 'A' or 'B' for class divisions where applicable
- Days: Saturday, Sunday, Monday, Tuesday, Wednesday, Thursday
- Types: Lecture, Lab, Section, Tutorial

## 🔧 Current Status

**Working Features:**
✅ Year 1 Group 1 complete schedule
✅ Filter by Group (1-3)
✅ Filter by Class (1-4, All)
✅ Filter by Day
✅ Real-time search
✅ Responsive table design
✅ Result count display

**Pending:**
⏳ Complete schedules for Year 1 Groups 2-3
⏳ All Year 2 data (4 groups)
⏳ Year 3 Network & Software tracks
⏳ Year 4 Network & Software tracks
⏳ Year 2 HTML page update with filters
⏳ Year 3/4 track-specific filtering

---

**Made by Team NEXUS** - Khalil Muhammad & Mohammed Ali
