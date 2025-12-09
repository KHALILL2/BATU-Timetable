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

**Total:** 200+ schedule entries across all 4 years

---

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

### Production-Ready Features (December 2025 Update)
- **SEO Optimized** - Comprehensive meta tags, Open Graph, and Twitter Card support
- **Accessibility Enhanced** - ARIA labels, table captions, keyboard navigation, skip-to-content links
- **GitHub Pages Ready** - Optimized for deployment with proper error handling
- **Production Config** - Debug mode toggle for development vs production environments
- **Error Handling** - Try-catch blocks and graceful fallbacks for robust operation
- **Performance Optimized** - Structured script loading, CSS improvements, loading states
- **No Console Pollution** - Production-safe logging via config.js
- **Cross-Browser Compatible** - Tested on Chrome, Firefox, Edge, and Safari

### Technical Implementation
- Font Awesome icon integration
- Cross-browser compatibility
- Modern ES6+ JavaScript
- Bootstrap 5 responsive framework
- Semantic HTML5 structure

---

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
- Live Server (for local development)

---

## Project Structure

```
BATU timeable/
│
├── index.html                 # Homepage with schedule builder
├── css/
│   ├── bootstrap.min.css      # Bootstrap 5 framework
│   ├── all.min.css            # Font Awesome icons
│   └── main.css               # Custom styles (day-separated tables, animations)
│
├── js/
│   ├── bootstrap.bundle.min.js # Bootstrap JavaScript
│   ├── all.min.js             # Font Awesome JavaScript
│   ├── config.js              # Production configuration & debug logger
│   ├── main.js                # Core functions (search, filters, loadTimetableByDays)
│   ├── schedule-builder.js    # Personal schedule generator
│   ├── courses-data.js        # Course database (80+ courses, credits, hours)
│   ├── year1-data.js          # Year 1 data (3 groups, 57 entries)
│   ├── year2-data.js          # Year 2 data (4 groups, 82 entries)
│   ├── year3-data.js          # Year 3 data (SW: 27, NET: 20 entries)
│   └── year4-data.js          # Year 4 data (SW: 21, NET: 28 entries)
│
├── pages/
│   ├── year1.html             # Year 1 page (3 day-separated tables)
│   ├── year2.html             # Year 2 page (3 day-separated tables)
│   ├── year3.html             # Year 3 page (6 day-separated tables)
│   └── year4.html             # Year 4 page (6 day-separated tables)
│
├── images/                    # BATU logo, IT logo, Faculty logo
├── webfonts/                  # Font Awesome font files
└── README.md                  # Documentation
```

---

## Deployment

### GitHub Pages Deployment

This project is optimized for GitHub Pages deployment:

1. **Repository Setup:**
   ```bash
   git clone https://github.com/KHALILL2/BATU-Timetable.git
   cd BATU-Timetable
   ```

2. **Enable GitHub Pages:**
   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Click Save

3. **Access Your Site:**
   - URL: `https://khalill2.github.io/BATU-Timetable/`
   - Deployment usually takes 2-5 minutes

4. **Production Mode:**
   - The site automatically runs in production mode (no console logs)
   - To enable debug mode, edit `js/config.js` and set `DEBUG_MODE: true`

### Local Development Server

```bash
# Using Python (recommended)
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using VS Code Live Server
# Install extension and click "Go Live"
```

---

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Text editor (VS Code recommended for development)

### Installation
```bash
# Clone the repository
git clone https://github.com/KHALILL2/BATU-Timetable.git

# Navigate to project directory
cd BATU-Timetable

# Open index.html in your browser
```

### Local Development
1. Install VS Code Live Server extension (optional but recommended)
2. Right-click on `index.html` → "Open with Live Server"
3. Application will run at `http://localhost:5500`

---

## Usage Guide

### For Students
1. Use the homepage schedule builder to select your year, group, and class
2. Navigate to your year page via the navigation menu
3. Use filters (Years 1-2) or tabs (Years 3-4) to view your specific schedule
4. Search for courses, instructors, or rooms using the search bar
5. Click on any course to view detailed information in a modal

### For Developers
**Adding Courses:**
Edit the corresponding year data file (`js/year1-data.js`, etc.) and add course objects:
```javascript
{
  day: 'Saturday',
  time: '9:00 AM-10:20 AM',
  class: '1',
  subject: 'Course Name',
  room: 'Room 101',
  instructor: 'Dr. Name',
  type: 'Lecture',
  group: '1',
  classDiv: 'All'
}
```

**Customizing Theme:**
Edit CSS variables in `css/main.css`:
```css
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  /* ... */
}
```

---

## Project Highlights

- **5 Fully Responsive Pages** - Homepage + 4 year pages optimized for all devices
- **200+ Schedule Entries** - Covering all years and tracks with complete data
- **Advanced JavaScript** - Search, filters, tabs, modals, error handling
- **Complete Course Database** - Metadata for 80+ courses with credits and hours
- **Day-Separated Layout** - Improved readability with color-coded tables
- **Personal Schedule Builder** - Generate custom schedules with URL parameters
- **Production-Ready Code** - SEO optimized, accessible, error-handled
- **GitHub Pages Optimized** - Fast deployment, no build process required
- **Clean Codebase** - Well-documented, maintainable, follows best practices
- **Accessibility First** - WCAG compliant with ARIA labels and semantic HTML
- **SEO Enhanced** - Open Graph, Twitter Cards, meta tags for social sharing

---

## Recent Updates (December 2025)

### Critical Improvements
✅ Fixed all inline styles (moved to external CSS)  
✅ Removed console.log statements from production code  
✅ Added comprehensive SEO meta tags (Open Graph, Twitter Cards)  
✅ Implemented accessibility features (ARIA labels, table captions, skip links)  
✅ Added error handling and graceful fallbacks  
✅ Created production config system (config.js)  
✅ Optimized for GitHub Pages deployment  

### Enhancements
✅ Added canonical URLs for all pages  
✅ Improved semantic HTML structure  
✅ Enhanced keyboard navigation support  
✅ Added loading states and error messages  
✅ Optimized script loading order  
✅ Cross-browser compatibility improvements  

---

## Contributors

**Team NEXUS**

- Khalil Muhammad (ID: 2420407) - 2nd Year IT Student
- Mohammed Ali (ID: 2421066) - 2nd Year IT Student

**Institution:** Borg Al Arab Technological University  
**Location:** New Borg El Arab, Alexandria, Egypt  
**Department:** Information Technology  
**Academic Year:** 2025/2026 (Fall Semester)

---

## Contributing

This is an academic project, but contributions are welcome:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

**Found a bug?** Please open an issue on GitHub.

---

## Contact

- **Repository:** [github.com/KHALILL2/BATU-Timetable](https://github.com/KHALILL2/BATU-Timetable)
- **Issues:** [Submit an issue](https://github.com/KHALILL2/BATU-Timetable/issues)

---

## Acknowledgments

- BATU IT Department and Web Programming instructors
- Bootstrap and Font Awesome teams for excellent documentation
- Our classmates for testing and feedback

---

## License

This project was created for educational purposes as part of the Web Programming course at BATU University.
