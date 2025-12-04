# BATU | IT Timetable

## 📚 About This Project

Hey there! This is our web programming course project - a complete timetable management system for BATU IT students. 

**Made by:** Team NEXUS - Khalil Muhammad & Mohammed Ali (2nd Year IT Students)  
**Course:** Web Programming  
**University:** Borg El Arab Technological University (BATU)  
**Semester:** Fall 2025/2026
**Live Site:** [Will add GitHub Pages link here]

### About BATU 🏛️
**Borg El Arab Technological University** was established in **2022** under Law No. 72 of 2019, which created technological universities in Egypt to provide applied/technical education aligned with labor market needs.

- 📍 **Location:** Universities District, New Borg El Arab, Alexandria Governorate, Egypt
- 🏗️ **Campus Size:** 42,000 square meters
- 🎓 **Facilities:** Educational buildings, modern labs & workshops, library, admin buildings, student facilities
- 🎯 **Mission:** Combining practical hands-on training with theoretical knowledge for real-world tech careers

---

## 🎓 Timetable Structure

### Year 1 - Foundation Year
- **3 Groups**, each with **4 Classes** (some with A/B divisions)
- Subjects: Python Programming, Math, Physics, IT, English, Cyber Security
- Fully implemented with Fall 2025/2026 schedule

### Year 2 - Core Studies  
- **4 Groups**, each with **4 Classes**
- Advanced programming, databases, data structures, web development
- *Data entry pending*

### Year 3 - Specialization
- **2 Tracks:** Software Engineering OR Network Engineering
- Each track has its own group and class structure
- *Data entry pending*

### Year 4 - Advanced & Graduation
- **2 Tracks:** Software Engineering OR Network Engineering  
- Final year courses + graduation project
- *Data entry pending*

---

## ✨ What We Built

### Main Features
- 📱 **Works on Your Phone** - Designed mobile-first, works great on any screen size
- 🔍 **Easy Search** - Find any course, instructor, or room quickly
- 📅 **Filter by Day** - Just wanna see Monday classes? We got you!
- 🎯 **Year 3/4 Tabs** - Easy switching between Software and Network tracks
- 💾 **Remembers Your Choice** - Uses localStorage to save what you last viewed
- 📖 **Course Details** - Click any course to see more info in a popup

### Pages We Made
- **Home Page** - Overview of all years with quick stats
- **Year 1 & 2** - Basic timetables with search and filters
- **Year 3 & 4** - Split into Software and Network Engineering tracks

### JavaScript Interactivity
- 🔍 **Smart Filtering** - Filter timetables by day with dropdown menus
- 🔎 **Real-time Search** - Instant search across subjects, instructors, and rooms
- 🔄 **Tab Navigation** - Toggle between SW and NETWORK majors (Year 3/4)
- 💾 **Data Persistence** - User preferences saved in localStorage
- 📱 **Mobile Menu** - Collapsible navigation for small screens
- 🎯 **Smooth Animations** - Scroll-triggered animations for engaging UX
- ⚡ **Debounced Search** - Optimized performance for search operations

## 🛠️ What We Used

### Technologies
- **HTML5** - For the page structure
- **CSS3** - Custom styling (check out `css/main.css`)
- **Bootstrap 5** - Makes it responsive and look good
- **Font Awesome** - For the icons
- **JavaScript** - All the interactive stuff (filters, search, etc.)

### Tools
- **VS Code** - Our code editor
- **GitHub** - For hosting and version control
- **Bootstrap & Font Awesome** - Already included in the project!

### Inspiration
We checked out some other university timetable sites and added our own style to it!el.app/index.html](https://it-batu.vercel.app/index.html)
- Custom BATU University theme colors
- Professional academic dashboard aesthetic

---

## 📁 Project Structure

```
BATU timeable/
│
├── index.html                 # Home page with year overview
├── css/
│   ├── bootstrap.min.css      # Bootstrap 5 framework
│   ├── all.min.css            # Font Awesome icons
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

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Git (for version control)
- Basic knowledge of HTML, CSS, JavaScript

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/batu-timetable.git
   cd batu-timetable
   ```

2. **Open the project:**
   - Navigate to the project folder
   - Open `index.html` in your browser
   - Or use VS Code Live Server extension

3. **Local Development:**
   - Install VS Code Live Server extension
   - Right-click `index.html` → "Open with Live Server"
   - View at `http://localhost:5500`

---

## 🌐 Deployment to GitHub Pages

### Method 1: GitHub Web Interface

1. **Create a new repository on GitHub:**
   - Go to [GitHub.com](https://github.com)
   - Click "New Repository"
   - Name: `batu-timetable` (or your preferred name)
   - Make it **Public**
   - Click "Create repository"

2. **Upload your files:**
   - Click "uploading an existing file"
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

## 👥 Project Team

## 👥 Our Team

**Web Programming Course Project**

- **Developer 1:** Khalil Muhammad
- **Developer 2:** Mohammed Ali
- **Year:** 2nd Year IT Students
- **University:** Bahir Dar University (BATU)
- **Department:** Information Technology
- **Course:** Web Programming
- **Date:** December 2025

## 📝 Code Quality

### HTML Standards
- Semantic HTML5 elements
- Proper nesting and indentation
- Accessibility attributes (aria-labels)
- SEO-friendly meta tags

### CSS Best Practices
- Mobile-first responsive design
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

This is our course project, but if you're a BATU IT student and want to add something:

1. Fork our repo
2. Make your changes
3. Send us a pull request
4. We'll check it out!

Found a bug? Let us know!t push origin feature/improvement`)
5. Open a Pull Request

## 📞 Contact Us

Questions about the project? Reach out!

- **Khalil Muhammad** - BATU IT Student
- **Mohammed Ali** - BATU IT Student
- **GitHub:** [Will add repo link]

This project is part of our Web Programming course at BATU.
- **Location:** Bahir Dar, Ethiopia
- **GitHub Issues:** [Project Issues Page]

## 🎓 Thanks To

- **Our Web Programming Instructor** - For teaching us this stuff!
- **BATU IT Department** - Our home for the past 2 years
- **Bootstrap & Font Awesome** - Made our lives easier
- **Our Classmates** - For testing and feedback
- **Stack Overflow** - You know why 😄
- **Font Awesome** - For comprehensive icon library
- **Design Inspiration** - [it-batu.vercel.app](https://it-batu.vercel.app)

---

## 📚 Additional Resources

### Learning Resources
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)
- [CSS-Tricks](https://css-tricks.com/)

### Tools Used
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [GitHub Pages](https://pages.github.com/)
- [Font Awesome](https://fontawesome.com/)

---

## 🏆 Project Achievements

✅ **5+ Pages** - Exceeds minimum requirement  
✅ **Fully Responsive** - Works on all devices  
✅ **JavaScript Interactivity** - Multiple interactive features  
✅ **Clean Code Structure** - Well-organized and commented  
✅ **GitHub Pages Ready** - Relative paths, deployment-ready  
✅ **Modern Design** - Professional university aesthetic  
✅ **LocalStorage Integration** - Enhanced user experience  
✅ **Search Functionality** - Global and per-page search  
✅ **Filter System** - Dynamic timetable filtering  
---

**Made with ❤️ and lots of ☕ by Khalil & Mohammed**

*BATU IT Department - 2nd Year Students*  
*December 2025*

P.S. - If you find any bugs, we probably know about them already 😅nts**

*Last Updated: December 3, 2025*
