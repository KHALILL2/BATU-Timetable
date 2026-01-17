// BATU Timetable - Main JavaScript
// Made by: Khalil Muhammad & Mohammed Ali
// For our Web Programming project, 2nd Year

// Store all the timetable data here
let allTimetableData = {};

// Keys for saving stuff in browser
let STORAGE_KEYS = {
    THEME: 'batu_theme_preference',
    LAST_VIEWED: 'batu_last_viewed_year',
    FILTER_PREFERENCES: 'batu_filter_preferences'
};

// Start everything when page finishes loading
document.addEventListener('DOMContentLoaded', function() {
    initSmoothScrolling();
    initNavbarScroll();
    loadUserPreferences();
    
    // Setup search if we're on home page
    let searchBox = document.getElementById('globalSearch');
    if (searchBox) {
        initGlobalSearch();
    }
    
    saveLastViewedPage();
    activateTabFromHash();
    initScrollAnimations();
    
    if (typeof logger !== 'undefined') {
        logger.log('Timetable loaded!');
    }
});

// Hide/show navbar when scrolling
function initNavbarScroll() {
    let navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    let scrollThreshold = 5;
    let scrollTimer;
    
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimer);
        
        scrollTimer = setTimeout(function() {
            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            // Keep navbar visible at top
            if (currentScroll <= 100) {
                navbar.classList.remove('navbar-hidden');
                navbar.classList.add('navbar-visible');
                return;
            }
            
            // Only hide/show if scroll is significant
            if (Math.abs(currentScroll - lastScroll) < scrollThreshold) {
                return;
            }
            
            if (currentScroll > lastScroll) {
                // Scrolling down
                navbar.classList.add('navbar-hidden');
                navbar.classList.remove('navbar-visible');
            } else {
                // Scrolling up
                navbar.classList.remove('navbar-hidden');
                navbar.classList.add('navbar-visible');
            }
            
            lastScroll = currentScroll;
        }, 10);
    }, { passive: true });
    
    navbar.classList.add('navbar-visible');
}

// Smooth scrolling for links
function initSmoothScrolling() {
    let links = document.querySelectorAll('a[href^="#"]');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            let href = this.getAttribute('href');
            
            // Skip empty links or bootstrap tabs
            if (href === '#' || this.getAttribute('data-bs-toggle')) {
                return;
            }
            
            let target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// ========================================
// USER PREFERENCES (saving stuff)
// ========================================

// Load saved preferences
function loadUserPreferences() {
    // Check what page user viewed last time
    let lastViewed = localStorage.getItem(STORAGE_KEYS.LAST_VIEWED);
    
    // Load filter settings
    let filterPrefs = localStorage.getItem(STORAGE_KEYS.FILTER_PREFERENCES);
    if (filterPrefs) {
        let prefs = JSON.parse(filterPrefs);
        // Could apply these prefs automatically here
    }
}

// Save current page to remember it later
function saveLastViewedPage() {
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    localStorage.setItem(STORAGE_KEYS.LAST_VIEWED, currentPage);
}

// Save filter choices
function saveFilterPreferences(year, filters) {
    let allPrefs = localStorage.getItem(STORAGE_KEYS.FILTER_PREFERENCES) || '{}';
    let prefs = JSON.parse(allPrefs);
    prefs[year] = filters;
    localStorage.setItem(STORAGE_KEYS.FILTER_PREFERENCES, JSON.stringify(prefs));
}

// ========================================
// TAB STUFF (for Year 3/4 majors)
// ========================================

// Show the right tab based on URL
function activateTabFromHash() {
    let hash = window.location.hash;
    if (hash === '#software' || hash === '#network') {
        let tabButton = document.querySelector('button[data-bs-target="' + hash + '"]');
        if (tabButton) {
            let tab = new bootstrap.Tab(tabButton);
            tab.show();
        }
    }
}

// Update URL when tab changes
document.addEventListener('shown.bs.tab', function(e) {
    let target = e.target.getAttribute('data-bs-target');
    if (target) {
        window.location.hash = target;
    }
});

// ========================================
// FILTERING
// ========================================

// Filter timetable to show only one day
function filterByDay(year, day) {
    let yearNum = year.replace('year', '');
    
    // Update which tab looks selected
    let tabsContainer = document.getElementById('dayTabs' + yearNum);
    if (tabsContainer) {
        let allTabs = tabsContainer.querySelectorAll('.nav-link');
        for (let i = 0; i < allTabs.length; i++) {
            allTabs[i].classList.remove('active');
        }
        
        // Make clicked tab active
        let activeTabId;
        if (day === 'all') {
            activeTabId = 'all-days-tab-' + yearNum;
        } else {
            activeTabId = day + '-tab-' + yearNum;
        }
        let activeTab = document.getElementById(activeTabId);
        if (activeTab) {
            activeTab.classList.add('active');
        }
    }
    
    // Show/hide days
    let daySchedules = document.querySelectorAll('.day-schedule');
    
    if (daySchedules.length > 0) {
        for (let i = 0; i < daySchedules.length; i++) {
            let schedule = daySchedules[i];
            let scheduleClasses = schedule.className.toLowerCase();
            
            if (day === 'all') {
                schedule.style.display = '';
            } else if (scheduleClasses.includes(day.toLowerCase())) {
                schedule.style.display = '';
            } else {
                schedule.style.display = 'none';
            }
        }
    }
    
    // Save what user picked
    saveFilterPreferences(year, { day: day });
}

// Search through timetable
function searchTimetable(year, searchText) {
    let yearNum = year.replace('year', '');
    let tbody = document.getElementById('timetableBody' + yearNum);
    if (!tbody) return;
    
    let search = searchText.toLowerCase().trim();
    let rows = tbody.querySelectorAll('tr');
    
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let text = row.textContent.toLowerCase();
        
        if (search === '' || text.includes(search)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    }
}

// Reset all filters back to default
function resetFilters(year) {
    let yearNum = year.replace('year', '');
    
    let groupFilter = document.getElementById('groupFilter' + yearNum);
    let classFilter = document.getElementById('classFilter' + yearNum);
    
    if (groupFilter) groupFilter.value = 'all';
    if (classFilter) classFilter.value = 'all';
    
    // Clear search box
    let searchInput = document.getElementById('searchInput' + yearNum);
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Figure out which days this year has
    let yearDays = [];
    let tracks = [''];
    
    if (year === 'year1') {
        yearDays = ['Saturday', 'Sunday', 'Wednesday'];
    } else if (year === 'year2') {
        yearDays = ['Saturday', 'Monday', 'Tuesday'];
    } else if (year === 'year3') {
        yearDays = ['Saturday', 'Monday', 'Tuesday'];
        tracks = ['SW', 'NET'];
    } else if (year === 'year4') {
        yearDays = ['Saturday', 'Sunday', 'Wednesday'];
        tracks = ['SW', 'NET'];
    }
    
    // Show all rows in all tables
    for (let t = 0; t < tracks.length; t++) {
        let track = tracks[t];
        for (let d = 0; d < yearDays.length; d++) {
            let day = yearDays[d];
            let tableId;
            if (track) {
                tableId = 'timetableBody' + yearNum + track + day;
            } else {
                tableId = 'timetableBody' + yearNum + day;
            }
            
            let table = document.getElementById(tableId);
            if (table) {
                let rows = table.querySelectorAll('tr');
                for (let r = 0; r < rows.length; r++) {
                    rows[r].style.display = '';
                }
            }
        }
    }
    
    // Update count
    updateResultCount(year, yearDays, tracks);
    
    // Clear saved preferences
    let allPrefs = localStorage.getItem(STORAGE_KEYS.FILTER_PREFERENCES) || '{}';
    let prefs = JSON.parse(allPrefs);
    delete prefs[year];
    localStorage.setItem(STORAGE_KEYS.FILTER_PREFERENCES, JSON.stringify(prefs));
}

// Apply group and class filters
function applyFilters(year) {
    let yearNum = year.replace('year', '');
    let groupFilter = document.getElementById('groupFilter' + yearNum);
    let classFilter = document.getElementById('classFilter' + yearNum);
    
    if (!classFilter) return;
    
    let selectedGroup = groupFilter ? groupFilter.value : 'all';
    let selectedClass = classFilter.value;
    
    // Get days for this year
    let yearDays = [];
    let tracks = [''];
    
    if (year === 'year1') {
        yearDays = ['Saturday', 'Sunday', 'Wednesday'];
    } else if (year === 'year2') {
        yearDays = ['Saturday', 'Monday', 'Tuesday'];
    } else if (year === 'year3') {
        yearDays = ['Saturday', 'Monday', 'Tuesday'];
        tracks = ['SW', 'NET'];
    } else if (year === 'year4') {
        yearDays = ['Saturday', 'Sunday', 'Wednesday'];
        tracks = ['SW', 'NET'];
    }
    
    // Apply filters to each table
    for (let t = 0; t < tracks.length; t++) {
        let track = tracks[t];
        for (let d = 0; d < yearDays.length; d++) {
            let day = yearDays[d];
            let tableId;
            if (track) {
                tableId = 'timetableBody' + yearNum + track + day;
            } else {
                tableId = 'timetableBody' + yearNum + day;
            }
            
            let table = document.getElementById(tableId);
            if (!table) continue;
            
            let rows = table.querySelectorAll('tr');
            for (let r = 0; r < rows.length; r++) {
                let row = rows[r];
                let rowGroup = row.getAttribute('data-group');
                let rowClass = row.getAttribute('data-class');
                
                let groupMatch = (selectedGroup === 'all' || rowGroup === selectedGroup);
                let classMatch = (selectedClass === 'all' || rowClass === selectedClass || rowClass === 'All');
                
                if (groupMatch && classMatch) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            }
        }
    }
    
    updateResultCount(year, yearDays, tracks);
}

// Update the count of visible classes
function updateResultCount(year, yearDays, tracks) {
    let yearNum = year.replace('year', '');
    let countElement = document.getElementById('resultCount' + yearNum);
    
    if (!countElement) return;
    
    let totalVisible = 0;
    
    for (let t = 0; t < tracks.length; t++) {
        let track = tracks[t];
        for (let d = 0; d < yearDays.length; d++) {
            let day = yearDays[d];
            let tableId;
            if (track) {
                tableId = 'timetableBody' + yearNum + track + day;
            } else {
                tableId = 'timetableBody' + yearNum + day;
            }
            
            let table = document.getElementById(tableId);
            if (!table) continue;
            
            let rows = table.querySelectorAll('tr');
            for (let r = 0; r < rows.length; r++) {
                if (rows[r].style.display !== 'none') {
                    totalVisible++;
                }
            }
        }
    }
    
    countElement.textContent = 'Showing ' + totalVisible + ' classes';
}

// ========================================
// HOME PAGE SEARCH
// ========================================

// Setup search box on home page
function initGlobalSearch() {
    let searchInput = document.getElementById('globalSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', debounce(function(e) {
        performGlobalSearch(e.target.value);
    }, 300));
}

// Search across all timetables
function performGlobalSearch(searchText) {
    let resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer) return;
    
    let search = searchText.toLowerCase().trim();
    
    if (search === '') {
        resultsContainer.innerHTML = '<p class="text-muted text-center">Start typing to search...</p>';
        return;
    }
    
    // Sample results for now - would search real data later
    let sampleResults = [
        {
            year: 'Year 1',
            subject: 'Mathematics 101',
            instructor: 'Dr. Ahmed',
            day: 'Monday',
            time: '9:00 AM',
            room: 'A101'
        },
        {
            year: 'Year 2',
            subject: 'Web Programming',
            instructor: 'Prof. Sara',
            day: 'Tuesday',
            time: '11:00 AM',
            room: 'B202'
        }
    ];
    
    // Filter results
    let matchingResults = [];
    for (let i = 0; i < sampleResults.length; i++) {
        let item = sampleResults[i];
        if (item.subject.toLowerCase().includes(search) ||
            item.instructor.toLowerCase().includes(search) ||
            item.room.toLowerCase().includes(search)) {
            matchingResults.push(item);
        }
    }
    
    if (matchingResults.length === 0) {
        resultsContainer.innerHTML = '<p class="text-muted text-center">No results found.</p>';
        return;
    }
    
    // Build HTML
    let html = '';
    for (let i = 0; i < matchingResults.length; i++) {
        let result = matchingResults[i];
        html += '<div class="search-result-item">';
        html += '<h6 class="mb-1"><strong>' + result.subject + '</strong></h6>';
        html += '<p class="mb-1 text-muted">';
        html += '<i class="fas fa-calendar"></i> ' + result.day + ' ' + result.time + ' | ';
        html += '<i class="fas fa-door-open"></i> ' + result.room + ' | ';
        html += '<i class="fas fa-user"></i> ' + result.instructor;
        html += '</p>';
        html += '<small class="badge bg-primary">' + result.year + '</small>';
        html += '</div>';
    }
    
    resultsContainer.innerHTML = html;
}

// ========================================
// COURSE DETAILS POPUP
// ========================================

// Show course info in a popup
function showCourseDetails(course) {
    try {
        // Get extra course info if available
        let courseDetails = null;
        if (typeof getCourseDetails === 'function') {
            courseDetails = getCourseDetails(course.subject);
        }
        
        // Update popup title
        let modalTitle = document.getElementById('courseModalLabel');
        if (modalTitle) {
            modalTitle.innerHTML = '<i class="fas fa-book"></i> ' + course.subject;
        }
    
    // Fill in class details
    setTextContent('modalDay', course.day);
    setTextContent('modalTime', course.time);
    setTextContent('modalRoom', course.room);
    setTextContent('modalInstructor', course.instructor);
    
    if (course.group) {
        setTextContent('modalGroup', 'Group ' + course.group);
    } else {
        setTextContent('modalGroup', 'N/A');
    }
    
    let typeElement = document.getElementById('modalType');
    if (typeElement) {
        typeElement.textContent = course.type;
        typeElement.className = 'badge ' + getBadgeClass(course.type);
    }
    
    // If we have detailed course info
    if (courseDetails) {
        // Basic course info
        setTextContent('modalCourseCode', courseDetails.code || 'N/A');
        setTextContent('modalCourseTitle', courseDetails.title || course.subject);
        
        // Credits and semester
        if (courseDetails.credits) {
            setTextContent('modalCredits', courseDetails.credits + ' Credits');
        } else {
            setTextContent('modalCredits', 'N/A');
        }
        setTextContent('modalSemester', courseDetails.semester || 'N/A');
        
        // Hours
        if (courseDetails.hours && courseDetails.hours.total) {
            setTextContent('modalTotalHours', courseDetails.hours.total + ' hours/week');
        } else {
            setTextContent('modalTotalHours', 'N/A');
        }
        setTextContent('modalYear', courseDetails.year || 'N/A');
        
        // Hours breakdown
        if (courseDetails.hours) {
            let breakdown;
            if (typeof formatCourseHours === 'function') {
                breakdown = formatCourseHours(courseDetails.hours);
            } else {
                breakdown = courseDetails.hours.lecture + 'h Lecture + ' + 
                           courseDetails.hours.tutorial + 'h Tutorial + ' + 
                           courseDetails.hours.lab + 'h Lab';
            }
            setTextContent('modalHoursBreakdown', breakdown);
        }
        
        // Description
        let descSection = document.getElementById('modalDescriptionSection');
        if (courseDetails.description) {
            setTextContent('modalDescription', courseDetails.description);
            descSection.style.display = '';
        } else {
            descSection.style.display = 'none';
        }
        
        // Topics list
        let topicsSection = document.getElementById('modalTopicsSection');
        let topicsList = document.getElementById('modalTopics');
        if (courseDetails.topics && courseDetails.topics.length > 0) {
            let topicsHtml = '';
            for (let i = 0; i < courseDetails.topics.length; i++) {
                topicsHtml += '<li>' + courseDetails.topics[i] + '</li>';
            }
            topicsList.innerHTML = topicsHtml;
            topicsSection.style.display = '';
        } else {
            topicsSection.style.display = 'none';
        }
    } else {
        // No detailed info - just show basics
        setTextContent('modalCourseCode', 'Course Info Not Available');
        setTextContent('modalCourseTitle', course.subject);
        setTextContent('modalCredits', 'N/A');
        setTextContent('modalSemester', 'Fall 2025/2026');
        setTextContent('modalTotalHours', 'N/A');
        setTextContent('modalYear', 'N/A');
        setTextContent('modalHoursBreakdown', 'N/A');
        
        // Hide extra sections
        let descSection = document.getElementById('modalDescriptionSection');
        let topicsSection = document.getElementById('modalTopicsSection');
        if (descSection) descSection.style.display = 'none';
        if (topicsSection) topicsSection.style.display = 'none';
    }
    
    // Show the popup
    let modal = new bootstrap.Modal(document.getElementById('courseModal'));
    modal.show();
    } catch (error) {
        // Ignore errors silently
        if (CONFIG && CONFIG.DEBUG_MODE) {
            console.error('Error showing course details:', error);
        }
    }
}

// Helper to set text safely
function setTextContent(elementId, text) {
    let element = document.getElementById(elementId);
    if (element) {
        if (text) {
            element.textContent = text;
        } else {
            element.textContent = 'N/A';
        }
    }
}

// Get the right color for course type badge
function getBadgeClass(type) {
    if (type === 'Lecture') {
        return 'badge-lecture';
    } else if (type === 'Lab') {
        return 'badge-lab';
    } else if (type === 'Tutorial') {
        return 'badge-tutorial';
    } else {
        return 'bg-secondary';
    }
}

// ========================================
// ANIMATIONS
// ========================================

// Make cards animate when scrolling
function initScrollAnimations() {
    let observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    let observer = new IntersectionObserver(function(entries) {
        for (let i = 0; i < entries.length; i++) {
            if (entries[i].isIntersecting) {
                entries[i].target.classList.add('animate-left');
            }
        }
    }, observerOptions);
    
    // Watch year cards
    let cards = document.querySelectorAll('.year-card');
    for (let i = 0; i < cards.length; i++) {
        observer.observe(cards[i]);
    }
}

// ========================================
// HELPER FUNCTIONS
// ========================================

// Prevents search from running too many times
function debounce(func, wait) {
    let timeout;
    return function() {
        let args = arguments;
        let later = function() {
            clearTimeout(timeout);
            func.apply(null, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Convert 24-hour time to 12-hour (like 14:00 to 2:00 PM)
function formatTime(time) {
    if (!time) return time;
    
    let parts = time.split(':');
    let hours = parts[0];
    let minutes = parts[1];
    let hour = parseInt(hours);
    
    let ampm = 'AM';
    if (hour >= 12) {
        ampm = 'PM';
    }
    
    let displayHour = hour % 12;
    if (displayHour === 0) {
        displayHour = 12;
    }
    
    return displayHour + ':' + minutes + ' ' + ampm;
}

// ========================================
// LOADING TIMETABLES
// ========================================

// Load timetable data for day-separated tables
function loadTimetableByDays(year, data, days) {
    try {
        let yearNum = year.replace('year', '');
        
        for (let d = 0; d < days.length; d++) {
            let day = days[d];
            let tbody = document.getElementById('timetableBody' + yearNum + day);
            if (!tbody) continue;
            
            // Clear table
            tbody.innerHTML = '';
            
            // Get courses for this day
            let dayData = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].day === day) {
                    dayData.push(data[i]);
                }
            }
            
            // Add rows
            for (let i = 0; i < dayData.length; i++) {
                let row = createTimetableRowByDay(dayData[i], i);
                tbody.appendChild(row);
            }
        }
    } catch (error) {
        if (CONFIG && CONFIG.DEBUG_MODE) {
            console.error('Error loading timetable:', error);
        }
    }
}

// Create a table row for day-separated tables
function createTimetableRowByDay(course, index) {
    let tr = document.createElement('tr');
    tr.setAttribute('data-index', index);
    tr.setAttribute('data-day', course.day);
    tr.setAttribute('data-group', course.group || '');
    tr.setAttribute('data-class', course.class || '');
    tr.setAttribute('data-div', course.classDiv || '');
    
    // Make clickable
    tr.style.cursor = 'pointer';
    tr.classList.add('course-row-clickable');
    tr.addEventListener('click', function() {
        showCourseDetails(course);
    });
    
    // Check if year has groups (Year 1-2) or not (Year 3-4)
    let hasGroup = (course.group !== undefined && course.group !== null && course.group !== '');
    
    let html = '';
    html += '<td class="subject-cell" data-label="Subject:"><strong>' + course.subject + '</strong></td>';
    html += '<td data-label="Type:"><span class="badge ' + getBadgeClass(course.type) + '">' + course.type + '</span></td>';
    html += '<td class="time-cell" data-label="Time:">' + course.time + '</td>';
    
    if (hasGroup) {
        html += '<td class="group-cell" data-label="Group:">Group ' + course.group + '</td>';
    }
    
    if (course.class === 'All') {
        html += '<td class="class-cell" data-label="Class:">All</td>';
    } else {
        html += '<td class="class-cell" data-label="Class:">Class ' + course.class + '</td>';
    }
    
    html += '<td class="div-cell" data-label="Division:">' + course.classDiv + '</td>';
    html += '<td class="instructor-cell" data-label="Instructor:">' + course.instructor + '</td>';
    html += '<td class="room-cell" data-label="Place:">' + course.room + '</td>';
    
    tr.innerHTML = html;
    return tr;
}

// Load regular timetable data
function loadTimetable(year, data) {
    let yearNum = year.replace('year', '');
    let tbody = document.getElementById('timetableBody' + yearNum);
    if (!tbody) return;
    
    // Store data
    allTimetableData[year] = data;
    
    // Clear table
    tbody.innerHTML = '';
    
    // Add rows
    for (let i = 0; i < data.length; i++) {
        let row = createTimetableRow(data[i], i);
        tbody.appendChild(row);
    }
    
    setupFilterListeners(year);
}

// Create a regular table row
function createTimetableRow(course, index) {
    let tr = document.createElement('tr');
    tr.setAttribute('data-index', index);
    tr.setAttribute('data-day', course.day);
    tr.setAttribute('data-group', course.group || '');
    tr.setAttribute('data-class', course.class || '');
    tr.setAttribute('data-div', course.classDiv || '');
    
    // Make clickable
    tr.style.cursor = 'pointer';
    tr.classList.add('course-row-clickable');
    tr.addEventListener('click', function() {
        showCourseDetails(course);
    });
    
    let html = '';
    html += '<td class="day-cell" data-label="Day:">' + course.day + '</td>';
    html += '<td class="time-cell" data-label="Time:">' + course.time + '</td>';
    
    // Year 1-2 have groups
    if (course.group && course.group > 1) {
        html += '<td class="group-cell" data-label="Group:">Group ' + course.group + '</td>';
    }
    
    if (course.class === 'All') {
        html += '<td class="class-cell" data-label="Class:">All</td>';
    } else {
        html += '<td class="class-cell" data-label="Class:">Class ' + course.class + '</td>';
    }
    
    html += '<td class="div-cell" data-label="Division:">' + course.classDiv + '</td>';
    html += '<td class="subject-cell" data-label="Subject:"><strong>' + course.subject + '</strong></td>';
    html += '<td class="room-cell" data-label="Room:">' + course.room + '</td>';
    html += '<td class="instructor-cell" data-label="Instructor:">' + course.instructor + '</td>';
    html += '<td data-label="Type:"><span class="badge ' + getBadgeClass(course.type) + '">' + course.type + '</span></td>';
    
    tr.innerHTML = html;
    return tr;
}

// Make functions available for HTML onclick
window.loadTimetableByDays = loadTimetableByDays;
window.showCourseDetails = showCourseDetails;
window.filterByDay = filterByDay;
window.applyFilters = applyFilters;
window.searchTimetable = searchTimetable;
window.resetFilters = resetFilters;
window.updateResultCount = updateResultCount;
window.formatTime = formatTime;