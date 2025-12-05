# 🎯 QUICK START GUIDE

## For Students - How to Use This Project

### 1️⃣ Open the Website
- Double-click `index.html` to open in your browser
- OR use VS Code Live Server for best experience

### 2️⃣ Navigate the Dashboard
- **Home Page**: Overview of all years
- **Year Pages**: Click year cards or use navigation menu
- **Year 3/4**: Use tabs to switch between Software and Network Engineering

### 3️⃣ Use the Features

#### 🔍 Search for Courses
- Click "Search Courses" button on home page
- Type course name, instructor, or room number
- Results appear instantly

#### 🎯 Filter Timetables
- Select a day from the dropdown (Monday, Tuesday, etc.)
- Type in the search box to filter by keyword
- Click "Reset Filters" to clear all filters

#### 📖 View Course Details
- Click "View" button next to any course
- See full details in a popup window
- Close with X or "Close" button

---

## For Developers - How to Customize

### 📝 Add New Courses

**Example: Add a course to Year 1**

1. Open `js/year1-data.js`
2. Add to the array:
```javascript
{ 
    day: 'Monday', 
    time: '14:00', 
    subject: 'New Course Name', 
    room: 'A-101', 
    instructor: 'Dr. Name', 
    type: 'Lecture',
    description: 'Course description here'
}
```
3. Save and refresh browser

### 🎨 Change Colors

1. Open `css/main.css`
2. Find the `:root` section at the top
3. Change color values:
```css
:root {
    --primary-color: #0d6efd;  /* Your university color */
    --secondary-color: #6c757d;
}
```

### 📸 Add Your Logo

1. Save logo as `logo.png` in `images/` folder
2. Open `index.html` (and other HTML files)
3. Find the navbar brand section
4. Add before "BATU IT Department":
```html
<img src="images/logo.png" alt="BATU Logo" height="30" class="me-2">
```

### 📧 Update Contact Info

1. Open any HTML file
2. Scroll to footer section
3. Update:
   - Phone number
   - Email address
   - Physical address

---

## 🚀 Deploy to GitHub Pages

### Super Quick Method

1. **Create GitHub account** (if you don't have one)
   - Go to github.com
   - Sign up (it's free!)

2. **Create new repository**
   - Click "+" → "New repository"
   - Name: `batu-timetable`
   - Select "Public"
   - Create repository

3. **Upload files**
   - Click "uploading an existing file"
   - Drag all project files
   - Commit changes

4. **Enable Pages**
   - Go to Settings → Pages
   - Source: main branch, / (root)
   - Save

5. **Get your link**
   - Wait 2 minutes
   - Visit: `https://YOUR-USERNAME.github.io/batu-timetable/`

**See DEPLOYMENT.md for detailed instructions!**

---

## ⚡ Quick Testing Checklist

Before submission:

- [ ] Open website in Chrome
- [ ] Open website in Firefox
- [ ] Test on mobile phone
- [ ] Click all navigation links
- [ ] Test search function
- [ ] Test filter dropdowns
- [ ] Test major tabs (Year 3/4)
- [ ] View course details modals
- [ ] Check footer links
- [ ] Test on different screen sizes

---

## 🐛 Common Issues & Solutions

### Website looks broken?
- Clear browser cache (Ctrl+F5)
- Make sure all files are in correct folders
- Check browser console for errors (F12)

### Search not working?
- Check `js/main.js` is loaded
- Look for JavaScript errors in console
- Ensure data files are linked in HTML

### Images not showing?
- Check file paths are relative (`images/logo.png` not `C:\images\logo.png`)
- Verify image files exist in `images/` folder
- Check file name capitalization

### Filters not working?
- Ensure each year's data file is loaded
- Check filter IDs match in HTML and JS
- Test with browser console open (F12)

---

## 📚 Files You Can Edit

**Safe to edit:**
- ✅ `js/year1-data.js` - Year 1 courses
- ✅ `js/year2-data.js` - Year 2 courses
- ✅ `js/year3-data.js` - Year 3 SW & NET courses
- ✅ `js/year4-data.js` - Year 4 SW & NET courses
- ✅ `css/main.css` - Styles and colors
- ✅ `README.md` - Project documentation
- ✅ Footer content in HTML files

**Edit carefully:**
- ⚠️ HTML files - Structure
- ⚠️ `js/main.js` - Core functionality

**Don't edit:**
- ❌ `css/bootstrap.min.css`
- ❌ `css/all.min.css`
- ❌ `js/bootstrap.bundle.min.js`

---

## 💡 Pro Tips

1. **Always test locally before deploying**
2. **Use VS Code Live Server** for instant previews
3. **Commit to GitHub regularly** (save your work!)
4. **Test on multiple devices** (phone, tablet, desktop)
5. **Add comments to your code** (helps with grading!)
6. **Keep README updated** with your names and student IDs

---

## 📞 Need Help?

1. Read `README.md` for full documentation
2. Check `DEPLOYMENT.md` for deployment help
3. Look at code comments for explanations
4. Ask your instructor
5. Search on Stack Overflow

---

## 🎓 What to Submit

For your course project:

1. **All project files** (entire folder)
2. **GitHub repository link**
3. **Live website URL** (GitHub Pages)
4. **README with your names and IDs**
5. **Screenshots** (mobile & desktop views)

---

**Good luck with your project! 🚀**

*Make sure to add your names and student IDs to README.md!*
