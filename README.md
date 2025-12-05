# BATU IT Timetable 📅

## Hey! 👋

So this is our Web Programming project. We're Khalil and Mohammed, 2nd year IT students at BATU, and we built this website to help students (including ourselves lol) check our class schedules without having to dig through WhatsApp groups or ask the group admin every time.

**Who made this:**
- Khalil Muhammad - 2nd Year IT
- Mohammed Ali - 2nd Year IT  

**What it's for:** Web Programming Course Project  
**When:** Fall 2025/2026  
**Where:** Borg El Arab Technological University (BATU), Alexandria, Egypt

### Quick Info About BATU 🏛️

Our university started in 2022 (yeah, it's pretty new!). It's one of those technological universities that focus more on practical stuff rather than just theory. We're in Borg El Arab, Alexandria - the campus is huge (42,000 square meters!) with modern labs, workshops, and everything we need.

The whole idea is to get us ready for actual jobs in tech, not just memorize textbooks. That's why we get to do projects like this one!

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

## What We Built ✨

### The Main Stuff
- 📱 **Mobile-Friendly** - Works on your phone (because let's be honest, nobody checks schedules on laptops anymore)
- 🔍 **Search Bar** - Type anything - course name, instructor, room number - and it finds it
- 📅 **Day Filters** - Only want to see Saturday classes? Done.
- 🎯 **Track Tabs** - For Year 3 & 4 - easy switch between Software and Network Engineering
- 💾 **Remembers You** - Saves your last view so you don't have to select everything again
- 📖 **Course Info** - Click any class to see full details, instructor, room, everything
- ⏰ **12-Hour Format** - Times show as 9:00 AM instead of military time (we're not in the army!)

### What's Inside
- **Homepage** - Overview of all years and a schedule builder
- **Year 1 & 2 Pages** - All groups and classes with filters
- **Year 3 & 4 Pages** - Separated by major (Software or Network)
- **Each schedule is organized by day** - Saturday, Sunday/Monday, Tuesday/Wednesday

### Cool JavaScript Tricks We Added
- Real-time search (no refresh needed!)
- Filter dropdown that actually works
- Tab switching for majors
- Smooth scroll animations (looks fancy, right?)
- Mobile menu that collapses
- Performance optimization so it doesn't lag
## Tech Stack 🛠️

### What We Used
- **HTML5** - The basic structure
- **CSS3** - Made it look nice (check our custom styles in `css/main.css`)
- **Bootstrap 5** - Saved us SO much time on making it responsive
- **Font Awesome** - All those cool icons
- **JavaScript (Vanilla)** - No frameworks! Just pure JS for all the filters, search, and interactive stuff

### Tools We Worked With
- **VS Code** - Best editor, fight me
- **GitHub** - Where all our code lives (and where we learned about merge conflicts the hard way)
- **Git** - For version control (took us a while to get used to it tbh)
- **Chrome DevTools** - Spent half our time here debugging 😅

### Shoutout
We took some inspiration from other university timetable websites but added our own twist to make it unique for BATU!
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
1. Clone it:
   ```bash
   git clone https://github.com/KHALILL2/BATU-Timetable.git
   cd BATU-Timetable
   ```

2. If you have VS Code:
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"
   - It opens at `http://localhost:5500`

3. Edit whatever you want in the code!
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
## The Team 👥

Just two IT students trying to make life easier for everyone (and get a good grade lol):

- **Khalil Muhammad** - 2nd Year IT Student @ BATU
- **Mohammed Ali** - 2nd Year IT Student @ BATU

**Team Name:** NEXUS (sounds cool, right?)  
**Department:** Information Technology  
**University:** Borg El Arab Technological University, Alexandria, Egypt  
**Made in:** December 2025ming
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
- **Khalil Muhammad** - Find me in the IT labs usually
- **Mohammed Ali** - Same, probably debugging something

We're 2nd year students, so be nice 😅
## 🎓 Thanks To
## Big Thanks To 🙏

- **Our Web Programming Instructor** - For teaching us all this and being patient with our questions
- **BATU IT Department** - For the labs, wifi, and letting us stay late to finish this
- **Our Classmates** - For testing the site and telling us when stuff broke
- **Bootstrap Team** - Seriously saved us so much time
- **Font Awesome** - For all the icons
- **Stack Overflow** - You KNOW why 😂
- **YouTube** - For those "how to fix..." tutorials at 2 AM
- **Coffee** - The real MVP
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
---

**Made with ❤️ and lots of ☕ by Team NEXUS**

*Khalil Muhammad & Mohammed Ali*  
*2nd Year IT Students - BATU*  
*December 2025*

P.S. - If you find bugs, we probably already know about them but submit an issue anyway 😅  
P.P.S. - This is our first big web project, so feedback is appreciated!

---

*Last Updated: December 5, 2025*