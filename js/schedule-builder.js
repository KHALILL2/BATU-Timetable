// Personal Schedule Builder
// Made by: Khalil Muhammad & Mohammed Ali

document.addEventListener('DOMContentLoaded', function() {
    let yearSelect = document.getElementById('yearSelect');
    let trackSelectContainer = document.getElementById('trackSelectContainer');
    let groupSelectContainer = document.getElementById('groupSelectContainer');
    let classSelectContainer = document.getElementById('classSelectContainer');
    let trackSelect = document.getElementById('trackSelect');
    let groupSelect = document.getElementById('groupSelect');
    let classSelect = document.getElementById('classSelect');
    let scheduleForm = document.getElementById('scheduleBuilderForm');
    let scheduleResult = document.getElementById('scheduleResult');

    // When user picks a year
    if (yearSelect) {
        yearSelect.addEventListener('change', function() {
            let year = this.value;
            
            // Clear other selections
            if (trackSelect) trackSelect.value = '';
            if (groupSelect) groupSelect.value = '';
            if (classSelect) classSelect.value = '';
            if (scheduleResult) scheduleResult.style.display = 'none';
            
            if (year === '3' || year === '4') {
                // Year 3 & 4 need track selection
                if (trackSelectContainer) {
                    trackSelectContainer.style.display = 'block';
                    trackSelect.required = true;
                }
                if (groupSelectContainer) groupSelectContainer.style.display = 'none';
                if (classSelectContainer) classSelectContainer.style.display = 'none';
                if (groupSelect) groupSelect.required = false;
                if (classSelect) classSelect.required = false;
            } else if (year === '1' || year === '2') {
                // Year 1 & 2 need group and class
                if (trackSelectContainer) {
                    trackSelectContainer.style.display = 'none';
                    trackSelect.required = false;
                }
                if (groupSelectContainer) groupSelectContainer.style.display = 'block';
                if (classSelectContainer) classSelectContainer.style.display = 'block';
                if (groupSelect) groupSelect.required = true;
                if (classSelect) classSelect.required = true;
                
                // Fill group dropdown
                populateGroups(year);
            } else {
                // Hide everything
                if (trackSelectContainer) trackSelectContainer.style.display = 'none';
                if (groupSelectContainer) groupSelectContainer.style.display = 'none';
                if (classSelectContainer) classSelectContainer.style.display = 'none';
                if (trackSelect) trackSelect.required = false;
                if (groupSelect) groupSelect.required = false;
                if (classSelect) classSelect.required = false;
            }
        });
    }

    // Fill groups dropdown based on year
    function populateGroups(year) {
        groupSelect.innerHTML = '<option value="">Choose...</option>';
        
        let numGroups = 0;
        if (year === '1') {
            numGroups = 3; // Year 1 has 3 groups
        } else if (year === '2') {
            numGroups = 4; // Year 2 has 4 groups
        }
        
        for (let i = 1; i <= numGroups; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.textContent = 'Group ' + i;
            groupSelect.appendChild(option);
        }
    }

    // When form is submitted
    if (scheduleForm) {
        scheduleForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let year = yearSelect.value;
            let track = trackSelect.value;
            let group = groupSelect.value;
            let classNum = classSelect.value;
            
            if (year === '1' || year === '2') {
                // Check if all required fields are filled
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

    // Generate schedule for Year 1 & 2
    function generateSchedule(year, group, classNum) {
        // Show success message
        let html = '<div class="alert alert-success">';
        html += '<h5><i class="fas fa-calendar-check"></i> Year ' + year + ' Schedule</h5>';
        html += '<p><strong>Year ' + year + '</strong> | <strong>Group ' + group + '</strong> | <strong>Class ' + classNum + '</strong></p>';
        html += '<p class="mb-2">Redirecting to your personalized schedule...</p>';
        html += '</div>';
        
        scheduleResult.innerHTML = html;
        scheduleResult.style.display = 'block';
        
        // Go to year page with filters
        setTimeout(function() {
            window.location.href = 'pages/year' + year + '.html?group=' + group + '&class=' + classNum;
        }, 1000);
    }

    // Generate schedule for Year 3 & 4
    function generateScheduleForTrack(year, track) {
        let trackName;
        if (track === 'software') {
            trackName = 'Software Development';
        } else {
            trackName = 'Network Engineering';
        }
        
        let html = '<div class="alert alert-success">';
        html += '<h5><i class="fas fa-calendar-check"></i> Year ' + year + ' - ' + trackName + '</h5>';
        html += '<p><strong>Year ' + year + '</strong> | <strong>' + trackName + ' Track</strong></p>';
        html += '<p class="mb-2">Redirecting to your personalized schedule...</p>';
        html += '</div>';
        
        scheduleResult.innerHTML = html;
        scheduleResult.style.display = 'block';
        
        // Go to year page with track
        setTimeout(function() {
            window.location.href = 'pages/year' + year + '.html#' + track;
        }, 1000);
    }

    // Display weekly schedule
    function displayWeeklySchedule(data, year, group, classNum) {
        // Filter data for selected group and class
        let filteredData = [];
        for (let i = 0; i < data.length; i++) {
            let item = data[i];
            if (item.group === group && (item.class === classNum || item.class === 'All')) {
                filteredData.push(item);
            }
        }

        if (filteredData.length === 0) {
            scheduleResult.innerHTML = '<div class="alert alert-warning">No classes found for your selection.</div>';
            scheduleResult.style.display = 'block';
            return;
        }

        // Sort by days
        let dayOrder = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'];
        let scheduleByDay = {};
        
        for (let d = 0; d < dayOrder.length; d++) {
            let day = dayOrder[d];
            scheduleByDay[day] = [];
            
            for (let i = 0; i < filteredData.length; i++) {
                if (filteredData[i].day === day) {
                    scheduleByDay[day].push(filteredData[i]);
                }
            }
        }

        // Build HTML
        let html = '<div class="alert alert-success">';
        html += '<h5><i class="fas fa-calendar-check"></i> Your Personal Schedule</h5>';
        html += '<p class="mb-0"><strong>Year ' + year + '</strong> | <strong>Group ' + group + '</strong> | <strong>Class ' + classNum + '</strong></p>';
        html += '</div>';

        for (let d = 0; d < dayOrder.length; d++) {
            let day = dayOrder[d];
            let dayClasses = scheduleByDay[day];
            
            if (dayClasses.length > 0) {
                html += '<div class="card mb-3 shadow-sm">';
                html += '<div class="card-header bg-primary text-white">';
                html += '<h5 class="mb-0"><i class="fas fa-calendar-day"></i> ' + day + '</h5>';
                html += '</div>';
                html += '<div class="card-body p-0">';
                html += '<div class="table-responsive">';
                html += '<table class="table table-hover mb-0">';
                html += '<thead class="table-light">';
                html += '<tr>';
                html += '<th><i class="fas fa-clock"></i> Time</th>';
                html += '<th><i class="fas fa-book"></i> Subject</th>';
                html += '<th><i class="fas fa-door-open"></i> Room</th>';
                html += '<th><i class="fas fa-user"></i> Instructor</th>';
                html += '<th><i class="fas fa-tag"></i> Type</th>';
                html += '<th><i class="fas fa-layer-group"></i> Division</th>';
                html += '</tr>';
                html += '</thead>';
                html += '<tbody>';

                // Sort by time
                dayClasses.sort(function(a, b) {
                    let timeA = a.time.split('-')[0];
                    let timeB = b.time.split('-')[0];
                    if (timeA < timeB) return -1;
                    if (timeA > timeB) return 1;
                    return 0;
                });

                for (let c = 0; c < dayClasses.length; c++) {
                    let classItem = dayClasses[c];
                    let badgeClass = getBadgeClass(classItem.type);
                    let courseJson = JSON.stringify(classItem).replace(/'/g, "&apos;");
                    
                    html += '<tr class="course-row-clickable" onclick=\'showCourseDetails(' + courseJson + ')\'>';
                    html += '<td><strong>' + classItem.time + '</strong></td>';
                    html += '<td><strong class="text-primary">' + classItem.subject + '</strong></td>';
                    html += '<td>' + classItem.room + '</td>';
                    html += '<td>' + classItem.instructor + '</td>';
                    html += '<td><span class="badge ' + badgeClass + '">' + classItem.type + '</span></td>';
                    html += '<td>' + classItem.classDiv + '</td>';
                    html += '</tr>';
                }

                html += '</tbody>';
                html += '</table>';
                html += '</div>';
                html += '</div>';
                html += '</div>';
            }
        }

        // Summary section
        let daysWithClasses = 0;
        for (let d = 0; d < dayOrder.length; d++) {
            if (scheduleByDay[dayOrder[d]].length > 0) {
                daysWithClasses++;
            }
        }

        html += '<div class="card border-primary">';
        html += '<div class="card-body">';
        html += '<h6 class="card-title"><i class="fas fa-info-circle"></i> Schedule Summary</h6>';
        html += '<p class="mb-2"><strong>Total Classes:</strong> ' + filteredData.length + '</p>';
        html += '<p class="mb-2"><strong>Days:</strong> ' + daysWithClasses + ' days/week</p>';
        html += '<p class="mb-0 text-muted"><small><i class="fas fa-lightbulb"></i> Click on any class to view detailed course information</small></p>';
        html += '</div>';
        html += '</div>';

        scheduleResult.innerHTML = html;
        scheduleResult.style.display = 'block';
        
        // Scroll to results
        scheduleResult.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Get badge color for course type
    function getBadgeClass(type) {
        if (type === 'Lecture') {
            return 'bg-primary';
        } else if (type === 'Lab') {
            return 'bg-success';
        } else if (type === 'Section') {
            return 'bg-info';
        } else if (type === 'Tutorial') {
            return 'bg-warning text-dark';
        } else {
            return 'bg-secondary';
        }
    }
});
