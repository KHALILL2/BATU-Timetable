/**
 * BATU IT Department Timetable Website
 * Main JavaScript File
 * 
 * Made by: Khalil Muhammad & Mohammed Ali
 * Course: Web Programming
 * Year: 2nd Year IT - BATU
 * 
 * This file handles all the cool interactive stuff:
 * - Searching through timetables
 * - Filtering by days
 * - Opening course detail popups
 * - Saving user preferences
 * - Smooth scrolling and animations
 */

// ========================================
// GLOBAL STUFF
// ========================================

// Store all our timetable data here
let allTimetableData = {};

// Keys for saving stuff in browser storage
const STORAGE_KEYS = {
    THEME: 'batu_theme_preference',
    LAST_VIEWED: 'batu_last_viewed_year',
    FILTER_PREFERENCES: 'batu_filter_preferences'
};

// ========================================
// PAGE INITIALIZATION
// ========================================

/**
 * This runs when the page loads
 */
document.addEventListener('DOMContentLoaded', function() {
    // Make scrolling smooth
    initSmoothScrolling();
    
    // Load user's saved preferences
    loadUserPreferences();
    
    // Setup global search if we're on home page
    if (document.getElementById('globalSearch')) {
        initGlobalSearch();
    }
    
    // Remember what page they're on
    saveLastViewedPage();
    
    // Handle tab switching for Year 3/4
    activateTabFromHash();
    
    // Add scroll animations
    initScrollAnimations();
    
    console.log('Timetable website loaded! Built by Khalil & Mohammed');
});

// ========================================
// SMOOTH SCROLLING (looks cool!)
// ========================================

/**
 * Makes clicking on links scroll smoothly instead of jumping
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or a tab trigger
            if (href === '#' || this.getAttribute('data-bs-toggle')) {
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// SAVING USER STUFF (LocalStorage)
// ========================================

/**
 * Load what the user saved before
 */
function loadUserPreferences() {
    // Load last viewed page
    const lastViewed = localStorage.getItem(STORAGE_KEYS.LAST_VIEWED);
    // Silent load for production
    
    // Load filter preferences
    const filterPrefs = localStorage.getItem(STORAGE_KEYS.FILTER_PREFERENCES);
    if (filterPrefs) {
        const prefs = JSON.parse(filterPrefs);
        // Preferences loaded successfully
    }
}

/**
 * Save the current page to localStorage
 */
function saveLastViewedPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    localStorage.setItem(STORAGE_KEYS.LAST_VIEWED, currentPage);
}

/**
 * Save filter preferences to localStorage
 */
function saveFilterPreferences(year, filters) {
    const prefs = JSON.parse(localStorage.getItem(STORAGE_KEYS.FILTER_PREFERENCES) || '{}');
    prefs[year] = filters;
    localStorage.setItem(STORAGE_KEYS.FILTER_PREFERENCES, JSON.stringify(prefs));
}

// ========================================
// TAB MANAGEMENT (Year 3/4 Majors)
// ========================================

/**
 * Activate tab based on URL hash
 */
function activateTabFromHash() {
    const hash = window.location.hash;
    if (hash === '#software' || hash === '#network') {
        const tabTrigger = document.querySelector(`button[data-bs-target="${hash}"]`);
        if (tabTrigger) {
            const tab = new bootstrap.Tab(tabTrigger);
            tab.show();
        }
    }
}

/**
 * Update URL hash when tab is clicked
 */
document.addEventListener('shown.bs.tab', function(e) {
    const target = e.target.getAttribute('data-bs-target');
    if (target) {
        window.location.hash = target;
    }
});

// ========================================
// FILTERING TIMETABLES
// ========================================

/**
 * Filter the timetable to show only one day
 * year = which year's timetable
 * day = which day to show (or 'all' for everything)
 */
function filterByDay(year, day) {
    const tbody = document.getElementById(`timetableBody${year.replace('year', '')}`);
    if (!tbody) return;
    
    const rows = tbody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const dayCell = row.querySelector('.day-cell');
        if (!dayCell) return;
        
        if (day === 'all' || dayCell.textContent.trim() === day) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
    
    // Save preference
    saveFilterPreferences(year, { day: day });
}

/**
 * Search through the timetable
 * Looks in course names, instructors, and rooms
 */
function searchTimetable(year, searchText) {
    const tbody = document.getElementById(`timetableBody${year.replace('year', '')}`);
    if (!tbody) return;
    
    const rows = tbody.querySelectorAll('tr');
    const search = searchText.toLowerCase().trim();
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        
        if (search === '' || text.includes(search)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

/**
/**
 * Reset button - clears all filters
 */
function resetFilters(year) {
    const yearNum = year.replace('year', '');
    
    // Reset day filter
    const dayFilter = document.getElementById(`dayFilter${yearNum}`);
    if (dayFilter) {
        dayFilter.value = 'all';
    }
    
    // Reset group filter
    const groupFilter = document.getElementById(`groupFilter${yearNum}`);
    if (groupFilter) {
        groupFilter.value = 'all';
    }
    
    // Reset class filter
    const classFilter = document.getElementById(`classFilter${yearNum}`);
    if (classFilter) {
        classFilter.value = 'all';
    }
    
    // Reset search
    const searchInput = document.getElementById(`searchInput${yearNum}`);
    if (searchInput) {
        searchInput.value = '';
    }
    
    // Show all rows
    const days = {
        'year1': ['Saturday', 'Sunday', 'Wednesday'],
        'year2': ['Saturday', 'Monday', 'Tuesday'],
        'year3': ['Saturday', 'Monday', 'Tuesday'],
        'year4': ['Saturday', 'Sunday', 'Wednesday']
    };
    
    const yearDays = days[year] || [];
    const tracks = (year === 'year3' || year === 'year4') ? ['SW', 'NET'] : [''];
    
    tracks.forEach(track => {
        yearDays.forEach(day => {
            const tableId = track ? `timetableBody${yearNum}${track}${day}` : `timetableBody${yearNum}${day}`;
            const table = document.getElementById(tableId);
            if (table) {
                table.querySelectorAll('tr').forEach(row => {
                    row.style.display = '';
                });
            }
        });
    });
    
    // Update result count
    updateResultCount(year, yearDays, tracks);
    
    // Clear saved preferences
    const prefs = JSON.parse(localStorage.getItem(STORAGE_KEYS.FILTER_PREFERENCES) || '{}');
    delete prefs[year];
    localStorage.setItem(STORAGE_KEYS.FILTER_PREFERENCES, JSON.stringify(prefs));
}

/**
 * Filter by group
 */
function filterByGroup(year, group) {
    const yearNum = year.replace('year', '');
    const table = document.getElementById(`timetableBody${yearNum}`);
    if (!table) return;
    
    table.querySelectorAll('tr').forEach(row => {
        const rowGroup = row.getAttribute('data-group');
        if (group === 'all' || rowGroup === group) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
    
    updateResultCount(year);
}

/**
 * Filter by class
 */
function filterByClass(year, classNum) {
    const yearNum = year.replace('year', '');
    const table = document.getElementById(`timetableBody${yearNum}`);
    if (!table) return;
    
    table.querySelectorAll('tr').forEach(row => {
        const rowClass = row.getAttribute('data-class');
        if (classNum === 'all' || rowClass === classNum || rowClass === 'All') {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
    
    updateResultCount(year);
}

/**
 * Apply both group and class filters together (works with day-separated tables)
 */
function applyFilters(year) {
    const yearNum = year.replace('year', '');
    const groupFilter = document.getElementById(`groupFilter${yearNum}`);
    const classFilter = document.getElementById(`classFilter${yearNum}`);
    
    // For Year 3-4, only classFilter exists
    if (!classFilter) return;
    
    const selectedGroup = groupFilter ? groupFilter.value : 'all';
    const selectedClass = classFilter.value;
    
    // Apply filters to all day tables for this year
    const days = {
        'year1': ['Saturday', 'Sunday', 'Wednesday'],
        'year2': ['Saturday', 'Monday', 'Tuesday'],
        'year3': ['Saturday', 'Monday', 'Tuesday'],
        'year4': ['Saturday', 'Sunday', 'Wednesday']
    };
    
    const yearDays = days[year] || [];
    
    // For Year 3-4, we need to apply to both SW and NET tracks
    const tracks = (year === 'year3' || year === 'year4') ? ['SW', 'NET'] : [''];
    
    tracks.forEach(track => {
        yearDays.forEach(day => {
            const tableId = track ? `timetableBody${yearNum}${track}${day}` : `timetableBody${yearNum}${day}`;
            const table = document.getElementById(tableId);
            if (!table) return;
            
            let visibleCount = 0;
            table.querySelectorAll('tr').forEach(row => {
                const rowGroup = row.getAttribute('data-group');
                const rowClass = row.getAttribute('data-class');
                
                const groupMatch = selectedGroup === 'all' || rowGroup === selectedGroup;
                const classMatch = selectedClass === 'all' || rowClass === selectedClass || rowClass === 'All';
                
                if (groupMatch && classMatch) {
                    row.style.display = '';
                    visibleCount++;
                } else {
                    row.style.display = 'none';
                }
            });
        });
    });
    
    updateResultCount(year, yearDays, tracks);
}

/**
 * Update result count display
 */
function updateResultCount(year, yearDays, tracks) {
    const yearNum = year.replace('year', '');
    const countElement = document.getElementById(`resultCount${yearNum}`);
    
    if (!countElement) return;
    
    let totalVisible = 0;
    
    tracks.forEach(track => {
        yearDays.forEach(day => {
            const tableId = track ? `timetableBody${yearNum}${track}${day}` : `timetableBody${yearNum}${day}`;
            const table = document.getElementById(tableId);
            if (!table) return;
            
            const visibleRows = Array.from(table.querySelectorAll('tr')).filter(row => row.style.display !== 'none');
            totalVisible += visibleRows.length;
        });
    });
    
    countElement.textContent = `Showing ${totalVisible} classes`;
}

// ========================================
// GLOBAL SEARCH (Home Page)
// ========================================

/**
 * Initialize global search functionality
 */
function initGlobalSearch() {
    const searchInput = document.getElementById('globalSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', debounce(function(e) {
        performGlobalSearch(e.target.value);
    }, 300));
}

/**
 * Perform search across all timetables
 * @param {string} searchText - Text to search for
 */
function performGlobalSearch(searchText) {
    const resultsContainer = document.getElementById('searchResults');
    if (!resultsContainer) return;
    
    const search = searchText.toLowerCase().trim();
    
    if (search === '') {
        resultsContainer.innerHTML = '<p class="text-muted text-center">Start typing to search across all timetables...</p>';
        return;
    }
    
    // This is a placeholder - you would search through actual timetable data
    const sampleResults = [
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
    ].filter(item => 
        item.subject.toLowerCase().includes(search) ||
        item.instructor.toLowerCase().includes(search) ||
        item.room.toLowerCase().includes(search)
    );
    
    if (sampleResults.length === 0) {
        resultsContainer.innerHTML = '<p class="text-muted text-center">No results found.</p>';
        return;
    }
    
    let html = '';
    sampleResults.forEach(result => {
        html += `
            <div class="search-result-item">
                <h6 class="mb-1"><strong>${result.subject}</strong></h6>
                <p class="mb-1 text-muted">
                    <i class="fas fa-calendar"></i> ${result.day} ${result.time} | 
                    <i class="fas fa-door-open"></i> ${result.room} | 
                    <i class="fas fa-user"></i> ${result.instructor}
                </p>
                <small class="badge bg-primary">${result.year}</small>
            </div>
        `;
    });
    
    resultsContainer.innerHTML = html;
}

// ========================================
// COURSE DETAILS MODAL
// ========================================

/**
 * Show course details in modal with full course information
 * @param {Object} course - Course data object from timetable
 */
function showCourseDetails(course) {
    try {
        // Get course details from database if available
        const courseDetails = typeof getCourseDetails === 'function' ? getCourseDetails(course.subject) : null;
        
        // Update modal title
        const modalTitle = document.getElementById('courseModalLabel');
        if (modalTitle) {
            modalTitle.innerHTML = `<i class="fas fa-book"></i> ${course.subject}`;
        }
    
    // Populate class details (right side card)
    setTextContent('modalDay', course.day);
    setTextContent('modalTime', course.time);
    setTextContent('modalRoom', course.room);
    setTextContent('modalInstructor', course.instructor);
    setTextContent('modalGroup', course.group ? `Group ${course.group}` : 'N/A');
    
    const typeElement = document.getElementById('modalType');
    if (typeElement) {
        typeElement.textContent = course.type;
        typeElement.className = `badge ${getBadgeClass(course.type)}`;
    }
    
    // If we have detailed course info from database
    if (courseDetails) {
        // Course code and title
        setTextContent('modalCourseCode', courseDetails.code || 'N/A');
        setTextContent('modalCourseTitle', courseDetails.title || course.subject);
        
        // Course information
        setTextContent('modalCredits', courseDetails.credits ? `${courseDetails.credits} Credits` : 'N/A');
        setTextContent('modalSemester', courseDetails.semester || 'N/A');
        setTextContent('modalTotalHours', courseDetails.hours ? `${courseDetails.hours.total} hours/week` : 'N/A');
        setTextContent('modalYear', courseDetails.year || 'N/A');
        
        // Hours breakdown
        if (courseDetails.hours) {
            const breakdown = typeof formatCourseHours === 'function' 
                ? formatCourseHours(courseDetails.hours) 
                : `${courseDetails.hours.lecture}h Lecture + ${courseDetails.hours.tutorial}h Tutorial + ${courseDetails.hours.lab}h Lab`;
            setTextContent('modalHoursBreakdown', breakdown);
        }
        
        // Description
        const descSection = document.getElementById('modalDescriptionSection');
        if (courseDetails.description) {
            setTextContent('modalDescription', courseDetails.description);
            descSection.style.display = '';
        } else {
            descSection.style.display = 'none';
        }
        
        // Topics
        const topicsSection = document.getElementById('modalTopicsSection');
        const topicsList = document.getElementById('modalTopics');
        if (courseDetails.topics && courseDetails.topics.length > 0) {
            topicsList.innerHTML = courseDetails.topics.map(topic => `<li>${topic}</li>`).join('');
            topicsSection.style.display = '';
        } else {
            topicsSection.style.display = 'none';
        }
    } else {
        // No detailed info available - show basic info
        setTextContent('modalCourseCode', 'Course Info Not Available');
        setTextContent('modalCourseTitle', course.subject);
        setTextContent('modalCredits', 'N/A');
        setTextContent('modalSemester', 'Fall 2025/2026');
        setTextContent('modalTotalHours', 'N/A');
        setTextContent('modalYear', 'N/A');
        setTextContent('modalHoursBreakdown', 'N/A');
        
        // Hide description and topics sections
        const descSection = document.getElementById('modalDescriptionSection');
        const topicsSection = document.getElementById('modalTopicsSection');
        if (descSection) descSection.style.display = 'none';
        if (topicsSection) topicsSection.style.display = 'none';
    }
    
    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('courseModal'));
    modal.show();
    } catch (error) {
        // Silently handle errors in production
        if (CONFIG && CONFIG.DEBUG_MODE) {
            console.error('Error showing course details:', error);
        }
    }
}

/**
 * Helper function to safely set text content
 * @param {string} elementId - Element ID
 * @param {string} text - Text to set
 */
function setTextContent(elementId, text) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = text || 'N/A';
    }
}

/**
 * Get badge class for course type
 * @param {string} type - Course type
 * @returns {string} - Bootstrap badge class
 */
function getBadgeClass(type) {
    switch(type) {
        case 'Lecture':
            return 'badge-lecture';
        case 'Lab':
            return 'badge-lab';
        case 'Tutorial':
            return 'badge-tutorial';
        default:
            return 'bg-secondary';
    }
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

/**
 * Initialize scroll-triggered animations
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-left');
            }
        });
    }, observerOptions);
    
    // Observe year cards
    document.querySelectorAll('.year-card').forEach(card => {
        observer.observe(card);
    });
}

// ========================================
// UTILITY FUNCTIONS
// ========================================
// UTILITY FUNCTIONS (helper stuff)
// ========================================

/**
 * Debounce - prevents search from running too many times
 * Makes it wait a bit before searching
 */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Format time to 12-hour format
 * Convert 24-hour time to 12-hour (like 14:00 to 2:00 PM)
 * @param {string} time - Time in 24-hour format
 * @returns {string} - Time in 12-hour format
 */
function formatTime(time) {
    if (!time) return time;
    
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
}

/**
 * Load and render timetable data into day-separated tables
 * @param {string} year - Year identifier
 * @param {Array} data - Timetable data array
 * @param {Array} days - Array of day names for this year
 */
function loadTimetableByDays(year, data, days) {
    try {
        const yearNum = year.replace('year', '');
        
        days.forEach(day => {
            const tbody = document.getElementById(`timetableBody${yearNum}${day}`);
            if (!tbody) {
                // Table not found - silent fail for GitHub Pages compatibility
                return;
            }
            
            // Clear existing content
            tbody.innerHTML = '';
            
            // Filter data for this day
            const dayData = data.filter(course => course.day === day);
            
            // Create and append rows
            dayData.forEach((course, index) => {
                const row = createTimetableRowByDay(course, index);
                tbody.appendChild(row);
            });
        });
    } catch (error) {
        if (CONFIG && CONFIG.DEBUG_MODE) {
            console.error('Error loading timetable by days:', error);
        }
    }
}

/**
 * Create a timetable row for day-separated tables (no Day column)
 */
function createTimetableRowByDay(course, index) {
    const tr = document.createElement('tr');
    tr.setAttribute('data-index', index);
    tr.setAttribute('data-day', course.day);
    tr.setAttribute('data-group', course.group || '');
    tr.setAttribute('data-class', course.class || '');
    tr.setAttribute('data-div', course.classDiv || '');
    
    // Make row clickable to show course details
    tr.style.cursor = 'pointer';
    tr.classList.add('course-row-clickable');
    tr.addEventListener('click', function() {
        showCourseDetails(course);
    });
    
    // Check if this is Year 1-2 (with group column) or Year 3-4 (without group column)
    // Year 1-2 have group property, Year 3-4 don't have group property
    if (course.group !== undefined && course.group !== null && course.group !== '') {
        // Year 1-2: Show Group column
        tr.innerHTML = `
            <td class="subject-cell" data-label="Subject:"><strong>${course.subject}</strong></td>
            <td data-label="Type:"><span class="badge ${getBadgeClass(course.type)}">${course.type}</span></td>
            <td class="time-cell" data-label="Time:">${course.time}</td>
            <td class="group-cell" data-label="Group:">Group ${course.group}</td>
            <td class="class-cell" data-label="Class:">${course.class === 'All' ? 'All' : 'Class ' + course.class}</td>
            <td class="div-cell" data-label="Division:">${course.classDiv}</td>
            <td class="instructor-cell" data-label="Instructor:">${course.instructor}</td>
            <td class="room-cell" data-label="Place:">${course.room}</td>
        `;
    } else {
        // Year 3-4: No Group column
        tr.innerHTML = `
            <td class="subject-cell" data-label="Subject:"><strong>${course.subject}</strong></td>
            <td data-label="Type:"><span class="badge ${getBadgeClass(course.type)}">${course.type}</span></td>
            <td class="time-cell" data-label="Time:">${course.time}</td>
            <td class="class-cell" data-label="Class:">${course.class === 'All' ? 'All' : 'Class ' + course.class}</td>
            <td class="div-cell" data-label="Division:">${course.classDiv}</td>
            <td class="instructor-cell" data-label="Instructor:">${course.instructor}</td>
            <td class="room-cell" data-label="Place:">${course.room}</td>
        `;
    }
    
    return tr;
}

/**
 * Load and render timetable data
 * @param {string} year - Year identifier
 * @param {Array} data - Timetable data array
 */
function loadTimetable(year, data) {
    const tbody = document.getElementById(`timetableBody${year.replace('year', '')}`);
    if (!tbody) {
        // Table not found - silent fail for GitHub Pages compatibility
        return;
    }
    
    // Store data globally
    allTimetableData[year] = data;
    
    // Clear existing rows
    tbody.innerHTML = '';
    
    // Render rows
    data.forEach((course, index) => {
        const row = createTimetableRow(course, index);
        tbody.appendChild(row);
    });
    
    // Setup event listeners for filters
    setupFilterListeners(year);
}

/**
 * Create a timetable row element
 * @param {Object} course - Course data
 * @param {number} index - Row index
 * @returns {HTMLElement} - Table row element
 */
function createTimetableRow(course, index) {
    const tr = document.createElement('tr');
    tr.setAttribute('data-index', index);
    tr.setAttribute('data-day', course.day);
    tr.setAttribute('data-group', course.group || '');
    tr.setAttribute('data-class', course.class || '');
    tr.setAttribute('data-div', course.classDiv || '');
    
    // Make row clickable to show course details
    tr.style.cursor = 'pointer';
    tr.classList.add('course-row-clickable');
    tr.addEventListener('click', function() {
        showCourseDetails(course);
    });
    
    // Year 1-2: Show Group column (multiple groups per year)
    if (course.group && course.group > 1) {
        tr.innerHTML = `
            <td class="day-cell" data-label="Day:">${course.day}</td>
            <td class="time-cell" data-label="Time:">${course.time}</td>
            <td class="group-cell" data-label="Group:">Group ${course.group}</td>
            <td class="class-cell" data-label="Class:">${course.class === 'All' ? 'All' : 'Class ' + course.class}</td>
            <td class="div-cell" data-label="Division:">${course.classDiv}</td>
            <td class="subject-cell" data-label="Subject:"><strong>${course.subject}</strong></td>
            <td class="room-cell" data-label="Room:">${course.room}</td>
            <td class="instructor-cell" data-label="Instructor:">${course.instructor}</td>
            <td data-label="Type:"><span class="badge ${getBadgeClass(course.type)}">${course.type}</span></td>
        `;
    } else {
        // Year 3-4: No Group column (single group per track)
        tr.innerHTML = `
            <td class="day-cell" data-label="Day:">${course.day}</td>
            <td class="time-cell" data-label="Time:">${course.time}</td>
            <td class="class-cell" data-label="Class:">${course.class === 'All' ? 'All' : 'Class ' + course.class}</td>
            <td class="div-cell" data-label="Division:">${course.classDiv}</td>
            <td class="subject-cell" data-label="Subject:"><strong>${course.subject}</strong></td>
            <td class="room-cell" data-label="Room:">${course.room}</td>
            <td class="instructor-cell" data-label="Instructor:">${course.instructor}</td>
            <td data-label="Type:"><span class="badge ${getBadgeClass(course.type)}">${course.type}</span></td>
        `;
    }
    
    return tr;
}

/**
 * Setup filter event listeners for a specific year
 * @param {string} year - Year identifier
 */
function setupFilterListeners(year) {
    const yearSuffix = year.replace('year', '');
    
    // Day filter
    const dayFilter = document.getElementById(`dayFilter${yearSuffix}`);
    if (dayFilter) {
        dayFilter.addEventListener('change', function(e) {
            filterByDay(year, e.target.value);
        });
    }
    
    // Search input
    const searchInput = document.getElementById(`searchInput${yearSuffix}`);
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function(e) {
            searchTimetable(year, e.target.value);
        }, 300));
    }
}

// ========================================
// MAKE FUNCTIONS WORK EVERYWHERE
// ========================================

// These let us use these functions from other files too
window.loadTimetable = loadTimetable;
window.loadTimetableByDays = loadTimetableByDays;
window.showCourseDetails = showCourseDetails;
window.filterByDay = filterByDay;
window.filterByGroup = filterByGroup;
window.filterByClass = filterByClass;
window.applyFilters = applyFilters;
window.searchTimetable = searchTimetable;
window.resetFilters = resetFilters;
window.updateResultCount = updateResultCount;
window.formatTime = formatTime;