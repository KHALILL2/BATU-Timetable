# BATU IT Timetable

A responsive web application for managing and viewing class schedules for BATU IT Department students across all four years.

## Overview

This project was developed as part of our Web Programming course at Borg Al Arab Technological University (BATU). It provides an intuitive interface for students to access their class schedules, filter by groups and classes, and view detailed course information.

**Developers:**
- Khalil Muhammad (ID: 2420407)
- Mohammed Ali (ID: 2421066)

**Institution:** Borg Al Arab Technological University, Alexandria, Egypt  
**Department:** Information Technology  
**Academic Year:** 2025/2026 (Fall Semester)

---

## 🎓 Timetable Structure

### Year 1 - Foundation Year ✅
- **3 Groups**, each with **4 Classes** (some with A/B divisions)
## Academic Structure

The application covers the complete 4-year IT program structure:

### Year 1 - Foundation
- 3 Groups × 4 Classes (with A/B divisions)
- Schedule: Saturday, Sunday, Wednesday
- Core subjects: Python, Math, Physics, IT Fundamentals, English, Cyber Security
- Status: Complete (57 entries)

### Year 2 - Core Studies
- 4 Groups × 4 Classes
- Schedule: Saturday, Monday, Tuesday  
- Subjects: OS, Digital Engineering, Web Dev, C++, Data Structures, Databases
- Status: Complete (82 entries)

### Year 3 - Specialization
- Software Engineering Track (27 entries)
- Network Engineering Track (20 entries)
- Schedule: Saturday, Monday, Tuesday
- Status: Complete for both tracks

### Year 4 - Advanced
- Software Engineering Track (21 entries)
- Network Engineering Track (28 entries)
- Schedule: Saturday, Sunday, Wednesday
- Status: Complete for both tracks

## Features

### Core Functionality
- **Responsive Design** - Mobile-first approach, works on all devices
- **Personal Schedule Builder** - Select year/group/class to generate individual schedules
- **Day-Separated Layout** - Color-coded tables for each day (Blue/Green/Yellow)
- **Real-time Search** - Instant filtering across courses, instructors, and rooms
- **Smart Filters** - Group and Class filters for Years 1-2
- **Track Navigation** - Tab-based switching between Software and Network tracks (Years 3-4)
- **Course Details** - Modal popups with complete course information
- **12-Hour Time Format** - User-friendly AM/PM time display
- **URL Parameters** - Direct links to specific filtered views
- **Persistent State** - LocalStorage integration for user preferences

### Technical Implementation
- Modular JavaScript architecture with separate data files per year
- Custom `loadTimetableByDays()` function for day-separated rendering
- Debounced search for performance optimization
- Bootstrap 5 components with custom CSS enhancements
- Font Awesome icon integration
- Cross-browser compatibility
## Tech Stack 🛠️

### What We Used
- **HTML5** - The basic structure
- **CSS3** - Made it look nice (check our custom styles in `css/main.css`)
- **Bootstrap 5** - Saved us SO much time on making it responsive
- **Font Awesome** - All those cool icons
- **JavaScript (Vanilla)** - No frameworks! Just pure JS for all the filters, search, and interactive stuff

### Tools We Worked With
- **VS Code** - Best editor, fight me
## Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Bootstrap 5** - Responsive framework
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Font Awesome** - Icon library

### Development Tools
- VS Code
- Git & GitHub
- Chrome DevTools
- Live Server (for local development)5 framework
│   ├── all.min.css            # Font Awesome icons
│   └── main.css               # Our custom styles (day-separated tables, animations, etc.)
│
├── js/
│   ├── bootstrap.bundle.min.js # Bootstrap JavaScript
│   ├── all.min.js             # Font Awesome JavaScript
│   ├── main.js                # Core functions (search, filters, loadTimetableByDays, etc.)
│   ├── courses-data.js        # Complete course database (80+ courses, credits, hours)
│   ├── year1-data.js          # Year 1 data (3 groups, ~57 entries)
│   ├── year2-data.js          # Year 2 data (4 groups, 82 entries)
│   ├── year3-data.js          # Year 3 data (SW: 27, NET: 20 entries)
│   └── year4-data.js          # Year 4 data (SW: 21, NET: 28 entries)
│
├── pages/
│   ├── year1.html             # Year 1 page (3 day-separated tables)
│   ├── year2.html             # Year 2 page (3 day-separated tables)
│   ├── year3.html             # Year 3 page (6 day-separated tables - 3 per track)
│   └── year4.html             # Year 4 page (6 day-separated tables - 3 per track)
│
├── images/                    # BATU logo, IT logo, Faculty logo
├── webfonts/                  # Font Awesome font files
└── README.md                  # This file!
```
│   └── main.css               # Custom styles
│
├── js/
│   ├── bootstrap.bundle.min.js # Bootstrap JavaScript
│   ├── all.min.js             # Font Awesome JavaScript
│   ├── main.js                # Core functionality
│   ├── year1-data.js          # Year 1 timetable data
│   ├── year2-data.js          # Year 2 timetable data
│   ├── year3-data.js          # Year 3 SW & NET data
│   └── year4-data.js          # Year 4 SW & NET data
│
├── pages/
│   ├── year1.html             # Year 1 timetable page
│   ├── year2.html             # Year 2 timetable page
│   ├── year3.html             # Year 3 with SW/NET tabs
│   └── year4.html             # Year 4 with SW/NET tabs
│
├── images/                    # Image assets (logos, etc.)
├── webfonts/                  # Font Awesome font files
└── README.md                  # This file
```

---

## 🚀 Getting Started
## How to Run This Thing 🚀

### What You Need
- Any modern browser (Chrome, Firefox, whatever you use)
- That's literally it for just viewing
- If you want to edit: VS Code or any text editor

### Running It Locally

**Super Easy Way:**
1. Download/clone this repo
2. Open `index.html` in your browser
3. Done!

**Fancy Way (for developers):**
## Getting Started

### Quick Start
```bash
# Clone the repository
git clone https://github.com/KHALILL2/BATU-Timetable.git

# Navigate to project directory
cd BATU-Timetable

# Open in browser
# Simply open index.html in your browser
# Or use Live Server extension in VS Code
```

### Local Development
1. Install VS Code Live Server extension (optional but recommended)
2. Right-click on `index.html` → "Open with Live Server"
3. Application will run at `http://localhost:5500`"
   - Drag and drop all project files
   - Commit changes

3. **Enable GitHub Pages:**
   - Go to repository **Settings**
   - Scroll to **Pages** section
   - Source: Select **main** branch
   - Folder: Select **/ (root)**
   - Click **Save**

4. **Access your site:**
   - Wait 2-3 minutes for deployment
   - Visit: `https://yourusername.github.io/batu-timetable/`

### Method 2: Git Command Line

```bash
# Initialize Git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: BATU Timetable Dashboard"

# Add remote repository
git remote add origin https://github.com/yourusername/batu-timetable.git

# Push to GitHub
git branch -M main
git push -u origin main

# Enable GitHub Pages via Settings → Pages (as described above)
```

---

## 📖 How to Use

### For Students

1. **Home Page:**
   - View university overview
   - See quick stats (courses, instructors, classrooms)
   - Navigate to any year using year cards

2. **Year 1 & 2 Pages:**
   - View complete weekly timetable
   - Filter by specific day
   - Search for courses, instructors, or rooms
   - Click "View" to see detailed course information

3. **Year 3 & 4 Pages:**
   - Choose your major: **Software Engineering** or **Network Engineering**
   - Use tabs to switch between majors
   - Filter and search within your major's timetable
   - View course details with modal popups

4. **Global Search:**
   - Click "Search Courses" on home page
   - Type to search across ALL timetables
   - Results show year, day, time, and location

### For Developers

1. **Adding New Courses:**
   - Edit corresponding year data file (e.g., `js/year1-data.js`)
   - Add course object to array:
     ```javascript
     {
       day: 'Monday',
       time: '08:00',
       subject: 'Course Name',
       room: 'Room Number',
       instructor: 'Instructor Name',
       type: 'Lecture', // or 'Lab', 'Tutorial'
       description: 'Course description'
     }
     ```

2. **Customizing Styles:**
   - Edit `css/main.css`
   - Modify CSS variables in `:root` section
   - Change colors, fonts, spacing as needed

3. **Adding Features:**
   - Main logic in `js/main.js`
   - Each year has its own data file
   - Use Bootstrap classes for consistency

---

## 🎨 Customization Guide

### Changing Theme Colors

Edit `css/main.css` root variables:

```css
:root {
    --primary-color: #0d6efd;     /* Change to your university color */
    --secondary-color: #6c757d;
    --success-color: #198754;
    --warning-color: #ffc107;
    --danger-color: #dc3545;
}
```

### Updating University Information

Edit footer in all HTML files:

```html
<p class="text-muted">
    <i class="fas fa-phone"></i> +251-11-123-4567<br>
    <i class="fas fa-envelope"></i> it@batu.edu.et<br>
    <i class="fas fa-map-marker-alt"></i> Bahir Dar, Ethiopia
</p>
```

### Adding Your Logo

1. Add logo image to `images/` folder
2. Update navbar brand in HTML files:
   ```html
   <a class="navbar-brand" href="index.html">
       <img src="images/logo.png" alt="BATU Logo" height="30">
       BATU IT Department
   </a>
   ```

---

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 576px
- **Tablet:** 576px - 768px
- **Desktop:** > 768px

### Mobile Features
- Collapsible navigation menu
- Stacked timetable cards
- Touch-friendly buttons
- Optimized font sizes
- Full-width components

---

## 🧪 Testing Checklist

- ✅ Test on Chrome, Firefox, Safari, Edge
- ✅ Test on mobile devices (iOS & Android)
- ✅ Test on tablets (iPad, Android tablets)
- ✅ Verify all navigation links work
- ✅ Test filter functionality on all pages
- ✅ Test search functionality
- ✅ Verify modal popups work
- ✅ Check localStorage persistence
- ✅ Test tab switching (Year 3/4)
- ✅ Validate HTML/CSS (W3C Validator)

---
## The Team 👥

Just two IT students trying to make life easier for everyone (and get a good grade lol):

- **Khalil Muhammad** - 2nd Year IT Student @ BATU
- **Mohammed Ali** - 2nd Year IT Student @ BATU

**Team Name:** NEXUS (sounds cool, right?)  
**Department:** Information Technology  
**University:** Borg El Arab Technological University, Alexandria, Egypt  
**Made in:** December 2025ming
- **Date:** December 2025
## Contributors

**Team NEXUS**

- Khalil Muhammad (ID: 2420407) - 2nd Year IT Student
- Mohammed Ali (ID: 2421066) - 2nd Year IT Student

**Institution:** Borg Al Arab Technological University  
**Location:** New Borg El Arab, Alexandria, Egypt  
**Department:** Information Technology  
**Year:** 2nd Year (Fall 2025/2026)

## Contact

- **Repository:** [github.com/KHALILL2/BATU-Timetable](https://github.com/KHALILL2/BATU-Timetable)
- **Issues:** Feel free to open an issue for bugs or feature requestsdesign
- CSS custom properties for theming
- BEM-like naming conventions
- Cross-browser compatibility

### JavaScript Standards
- ES6+ modern syntax
- Modular code organization
- Comprehensive comments
- Performance optimizations (debouncing)
- Error handling

---

## 🔧 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | Latest  | ✅ Fully Supported |
| Firefox | Latest  | ✅ Fully Supported |
| Safari  | Latest  | ✅ Fully Supported |
| Edge    | Latest  | ✅ Fully Supported |
| Opera   | Latest  | ✅ Fully Supported |

---

## 📄 License

This project is created for educational purposes as part of the Front-End Web Development course at BATU University.

**Copyright © 2025 BATU IT Department. All Rights Reserved.**

---
## 🤝 Want to Contribute?
## Want to Help? 🤝

This is our course project, but if you're a BATU student and see something that could be better:

1. Fork the repo
2. Make your changes
3. Send us a pull request
4. We'll review it!

**Found a bug?** Open an issue on GitHub or just DM us!

## Contact 📞

Got questions? Want to roast our code? Hit us up:

- **GitHub Repo:** [BATU-Timetable](https://github.com/KHALILL2/BATU-Timetable)
- **Khalil Muhammad** - ID: 2420407 | Find me in the IT labs usually
- **Mohammed Ali** - ID: 2421066 | Same, probably debugging something

**University:** Borg Al Arab Technological University (BATU)  
**Location:** New Borg El Arab, Alexandria, Egypt  
**Department:** Information Technology  
**Year:** 2nd Year (Fall 2025/2026)

## 📚 Additional Resources

### Learning Resources
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS-Tricks](https://css-tricks.com/)

## 🏆 What We Actually Achieved

- ✅ **5 Complete Pages** - Homepage + 4 year pages, all fully functional
- ✅ **200+ Schedule Entries** - Every single class for all 4 years, all groups, all tracks
- ✅ **100% Responsive** - Tested on phones, tablets, laptops - works everywhere
- ✅ **Advanced JavaScript** - Multiple features: search, filters, tabs, modals, localStorage, URL params
- ✅ **Day-Separated Layout** - Organized schedules by day for better readability  
- ✅ **Personal Schedule Builder** - Interactive tool on homepage
- ✅ **Course Database** - Complete metadata for 80+ courses
- ✅ **GitHub Pages Ready** - All relative paths, deployed and live
- ✅ **12-Hour Time Format** - User-friendly AM/PM display
- ✅ **Clean Code** - Well-organized, commented, and maintainable
- ✅ **No Errors** - Tested and debugged (fixed that `formatTime()` bug!)
- ✅ **GitHub Integration** - Link in footer, proper version control

**Lines of Code Written:** Thousands (we lost count tbh)  
**Hours Spent:** Way more than we planned  
**Bugs Fixed:** Too many to count  
**Coffee Consumed:** ☕☕☕☕☕
✅ **Fully Responsive** - Works on all devices  
✅ **JavaScript Interactivity** - Multiple interactive features  
✅ **Clean Code Structure** - Well-organized and commented  
✅ **GitHub Pages Ready** - Relative paths, deployment-ready  
## Project Highlights

