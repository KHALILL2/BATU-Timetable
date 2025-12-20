/**
 * Personal Schedule Builder
 * Generates customized weekly schedules based on user selection
 */

document.addEventListener('DOMContentLoaded', function() {
    const yearSelect = document.getElementById('yearSelect');
    const trackSelectContainer = document.getElementById('trackSelectContainer');
    const groupSelectContainer = document.getElementById('groupSelectContainer');
    const classSelectContainer = document.getElementById('classSelectContainer');
    const trackSelect = document.getElementById('trackSelect');
    const groupSelect = document.getElementById('groupSelect');
    const classSelect = document.getElementById('classSelect');
    const scheduleForm = document.getElementById('scheduleBuilderForm');
    const scheduleResult = document.getElementById('scheduleResult');

    // Year selection change handler
    if (yearSelect) {
        yearSelect.addEventListener('change', function() {
            const year = this.value;
            
            // Reset other fields
            if (trackSelect) trackSelect.value = '';
            if (groupSelect) groupSelect.value = '';
            if (classSelect) classSelect.value = '';
            if (scheduleResult) scheduleResult.style.display = 'none';
            
            if (year === '3' || year === '4') {
                // Show track selection for Year 3 & 4
                if (trackSelectContainer) {
                    trackSelectContainer.style.display = 'block';
                    trackSelect.required = true;
                }
                if (groupSelectContainer) groupSelectContainer.style.display = 'none';
                if (classSelectContainer) classSelectContainer.style.display = 'none';
                if (groupSelect) groupSelect.required = false;
                if (classSelect) classSelect.required = false;
            } else if (year === '1' || year === '2') {
                // Show group and class selection for Year 1 & 2
                if (trackSelectContainer) {
                    trackSelectContainer.style.display = 'none';
                    trackSelect.required = false;
                }
                if (groupSelectContainer) groupSelectContainer.style.display = 'block';
                if (classSelectContainer) classSelectContainer.style.display = 'block';
                if (groupSelect) groupSelect.required = true;
                if (classSelect) classSelect.required = true;
                
                // Populate groups
                populateGroups(year);
            } else {
                // Hide all
                if (trackSelectContainer) trackSelectContainer.style.display = 'none';
                if (groupSelectContainer) groupSelectContainer.style.display = 'none';
                if (classSelectContainer) classSelectContainer.style.display = 'none';
                if (trackSelect) trackSelect.required = false;
                if (groupSelect) groupSelect.required = false;
                if (classSelect) classSelect.required = false;
            }
        });
    }

    // Populate groups based on year
    function populateGroups(year) {
        groupSelect.innerHTML = '<option value="">Choose...</option>';
        
        const groupCounts = {
            '1': 3, // Year 1: 3 groups
            '2': 4  // Year 2: 4 groups
        };
        
        const count = groupCounts[year] || 0;
        for (let i = 1; i <= count; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `Group ${i}`;
            groupSelect.appendChild(option);
        }
    }

    // Form submission handler
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const year = yearSelect.value;
            const track = trackSelect.value;
            const group = groupSelect.value;
            const classNum = classSelect.value;
            
            if (year === '1' || year === '2') {
                if (!year || !group || !classNum) {
                    alert('Please select all required fields');
                    return;
                }
                generateSchedule(year, group, classNum);
            } else if (year === '3' || year === '4') {
                if (!year || !track) {
                    alert('Please select all required fields');
                    return;
                }
                generateScheduleForTrack(year, track);
            }
        });
    }

    /**
     * Generate schedule for Year 1 & 2 (Group + Class based)
     */
    function generateSchedule(year, group, classNum) {
        // Redirect to the appropriate year page with filters
        scheduleResult.innerHTML = `
            <div class="alert alert-success">
                <h5><i class="fas fa-calendar-check"></i> Year ${year} Schedule</h5>
                <p><strong>Year ${year}</strong> | <strong>Group ${group}</strong> | <strong>Class ${classNum}</strong></p>
                <p class="mb-2">Redirecting to your personalized schedule...</p>
            </div>
        `;
        scheduleResult.style.display = 'block';
        
        // Redirect to year page with group and class filters applied
        setTimeout(() => {
            window.location.href = `pages/year${year}.html?group=${group}&class=${classNum}`;
        }, 1000);
    }

    /**
     * Generate schedule for Year 3 & 4 (Track based)
     */
    function generateScheduleForTrack(year, track) {
        const trackName = track === 'software' ? 'Software Development' : 'Network Engineering';
        
        scheduleResult.innerHTML = `
            <div class="alert alert-success">
                <h5><i class="fas fa-calendar-check"></i> Year ${year} - ${trackName}</h5>
                <p><strong>Year ${year}</strong> | <strong>${trackName} Track</strong></p>
                <p class="mb-2">Redirecting to your personalized schedule...</p>
            </div>
        `;
        scheduleResult.style.display = 'block';
        
        // Redirect to year page with track tab
        setTimeout(() => {
            window.location.href = `pages/year${year}.html#${track}`;
        }, 1000);
    }

    /**
     * Display weekly schedule organized by days
     */
    function displayWeeklySchedule(data, year, group, classNum) {
        // Filter data for selected group and class
        const filteredData = data.filter(item => {
            return item.group === group && (item.class === classNum || item.class === 'All');
        });

        if (filteredData.length === 0) {
            scheduleResult.innerHTML = '<div class="alert alert-warning">No classes found for your selection.</div>';
            scheduleResult.style.display = 'block';
            return;
        }

        // Group by days
        const dayOrder = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
        const scheduleByDay = {};
        
        dayOrder.forEach(day => {
            scheduleByDay[day] = filteredData.filter(item => item.day === day);
        });

        // Generate HTML
        let html = `
            <div class="alert alert-success">
                <h5><i class="fas fa-calendar-check"></i> Your Personal Schedule</h5>
                <p class="mb-0"><strong>Year ${year}</strong> | <strong>Group ${group}</strong> | <strong>Class ${classNum}</strong></p>
            </div>
        `;

        dayOrder.forEach(day => {
            const dayClasses = scheduleByDay[day];
            
            if (dayClasses.length > 0) {
                html += `
                    <div class="card mb-3 shadow-sm">
                        <div class="card-header bg-primary text-white">
                            <h5 class="mb-0"><i class="fas fa-calendar-day"></i> ${day}</h5>
                        </div>
                        <div class="card-body p-0">
                            <div class="table-responsive">
                                <table class="table table-hover mb-0">
                                    <thead class="table-light">
                                        <tr>
                                            <th><i class="fas fa-clock"></i> Time</th>
                                            <th><i class="fas fa-book"></i> Subject</th>
                                            <th><i class="fas fa-door-open"></i> Room</th>
                                            <th><i class="fas fa-user"></i> Instructor</th>
                                            <th><i class="fas fa-tag"></i> Type</th>
                                            <th><i class="fas fa-layer-group"></i> Division</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                `;

                // Sort by time
                dayClasses.sort((a, b) => {
                    const timeA = a.time.split('-')[0];
                    const timeB = b.time.split('-')[0];
                    return timeA.localeCompare(timeB);
                });

                dayClasses.forEach(classItem => {
                    const badgeClass = getBadgeClass(classItem.type);
                    
                    html += `
                        <tr class="course-row-clickable" onclick='showCourseDetails(${JSON.stringify(classItem).replace(/'/g, "&apos;")})'>
                            <td><strong>${classItem.time}</strong></td>
                            <td><strong class="text-primary">${classItem.subject}</strong></td>
                            <td>${classItem.room}</td>
                            <td>${classItem.instructor}</td>
                            <td><span class="badge ${badgeClass}">${classItem.type}</span></td>
                            <td>${classItem.classDiv}</td>
                        </tr>
                    `;
                });

                html += `
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                `;
            }
        });

        // Summary
        html += `
            <div class="card border-primary">
                <div class="card-body">
                    <h6 class="card-title"><i class="fas fa-info-circle"></i> Schedule Summary</h6>
                    <p class="mb-2"><strong>Total Classes:</strong> ${filteredData.length}</p>
                    <p class="mb-2"><strong>Days:</strong> ${Object.values(scheduleByDay).filter(d => d.length > 0).length} days/week</p>
                    <p class="mb-0 text-muted"><small><i class="fas fa-lightbulb"></i> Click on any class to view detailed course information</small></p>
                </div>
            </div>
        `;

        scheduleResult.innerHTML = html;
        scheduleResult.style.display = 'block';
        
        // Smooth scroll to results
        scheduleResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    /**
     * Get badge class for course type
     */
    function getBadgeClass(type) {
        switch(type) {
            case 'Lecture':
                return 'bg-primary';
            case 'Lab':
                return 'bg-success';
            case 'Section':
                return 'bg-info';
            case 'Tutorial':
                return 'bg-warning text-dark';
            default:
                return 'bg-secondary';
        }
    }
});
