// Application data with enhanced structure
const appData = {
  teachers: [
    {
      id: 1,
      name: "김영희",
      subject: "국어",
      position: "정교사",
      yearsOfService: 15,
      annualLeaveDays: 23,
      usedLeaveDays: 8,
      remainingLeaveDays: 15,
      department: "국어과",
      status: "재직",
      hireDate: "2010-03-01",
      phone: "010-1234-5678",
      email: "kim@school.edu"
    },
    {
      id: 2,
      name: "박민수",
      subject: "수학",
      position: "정교사",
      yearsOfService: 8,
      annualLeaveDays: 22,
      usedLeaveDays: 5,
      remainingLeaveDays: 17,
      department: "수학과",
      status: "재직",
      hireDate: "2017-03-01",
      phone: "010-2345-6789",
      email: "park@school.edu"
    },
    {
      id: 3,
      name: "이서연",
      subject: "영어",
      position: "정교사",
      yearsOfService: 12,
      annualLeaveDays: 24,
      usedLeaveDays: 12,
      remainingLeaveDays: 12,
      department: "영어과",
      status: "육아휴직",
      hireDate: "2013-03-01",
      phone: "010-3456-7890",
      email: "lee@school.edu"
    },
    {
      id: 4,
      name: "정호준",
      subject: "체육",
      position: "정교사",
      yearsOfService: 20,
      annualLeaveDays: 25,
      usedLeaveDays: 3,
      remainingLeaveDays: 22,
      department: "체육과",
      status: "재직",
      hireDate: "2005-03-01",
      phone: "010-4567-8901",
      email: "jung@school.edu"
    },
    {
      id: 5,
      name: "최지원",
      subject: "과학",
      position: "정교사",
      yearsOfService: 6,
      annualLeaveDays: 21,
      usedLeaveDays: 15,
      remainingLeaveDays: 6,
      department: "과학과",
      status: "재직",
      hireDate: "2019-03-01",
      phone: "010-5678-9012",
      email: "choi@school.edu"
    }
  ],
  leaveApplications: [
    {
      id: 1,
      teacherId: 1,
      teacherName: "김영희",
      type: "연가",
      startDate: "2025-09-15",
      endDate: "2025-09-17",
      days: 3,
      reason: "개인사정",
      status: "승인대기",
      appliedDate: "2025-09-01",
      approvedDate: null,
      approver: null,
      rejectReason: null
    },
    {
      id: 2,
      teacherId: 2,
      teacherName: "박민수",
      type: "병가",
      startDate: "2025-09-05",
      endDate: "2025-09-06",
      days: 2,
      reason: "감기치료",
      status: "승인",
      appliedDate: "2025-09-04",
      approvedDate: "2025-09-04",
      approver: "교무부장",
      rejectReason: null
    },
    {
      id: 3,
      teacherId: 4,
      teacherName: "정호준",
      type: "장기재직휴가",
      startDate: "2025-09-20",
      endDate: "2025-09-24",
      days: 5,
      reason: "재충전 휴식",
      status: "승인",
      appliedDate: "2025-08-25",
      approvedDate: "2025-08-26",
      approver: "교무부장",
      rejectReason: null
    },
    {
      id: 4,
      teacherId: 5,
      teacherName: "최지원",
      type: "특별휴가",
      startDate: "2025-08-10",
      endDate: "2025-08-10",
      days: 1,
      reason: "결혼",
      status: "승인",
      appliedDate: "2025-07-30",
      approvedDate: "2025-07-31",
      approver: "교무부장",
      rejectReason: null
    },
    {
      id: 5,
      teacherId: 1,
      teacherName: "김영희",
      type: "연가",
      startDate: "2025-10-15",
      endDate: "2025-10-16",
      days: 2,
      reason: "가족여행",
      status: "승인대기",
      appliedDate: "2025-09-01",
      approvedDate: null,
      approver: null,
      rejectReason: null
    },
    {
      id: 6,
      teacherId: 2,
      teacherName: "박민수",
      type: "연가",
      startDate: "2025-07-22",
      endDate: "2025-07-24",
      days: 3,
      reason: "개인사정",
      status: "승인",
      appliedDate: "2025-07-10",
      approvedDate: "2025-07-11",
      approver: "교무부장",
      rejectReason: null
    }
  ],
  leaveOfAbsenceApplications: [
    {
      id: 1,
      teacherId: 3,
      teacherName: "이서연",
      type: "육아휴직",
      startDate: "2025-03-01",
      endDate: "2026-02-28",
      reason: "만 2세 자녀 양육",
      status: "승인",
      appliedDate: "2025-02-15",
      approvedDate: "2025-02-20",
      approver: "교장",
      documents: ["육아휴직신청서", "가족관계증명서"]
    }
  ],
  contractTeachers: [
    {
      id: 1,
      name: "한지민",
      subject: "영어",
      contractReason: "육아휴직 대체",
      contractStart: "2025-03-01",
      contractEnd: "2026-02-28",
      replacingTeacher: "이서연",
      status: "재직중",
      phone: "010-6789-0123",
      email: "han@temp.edu",
      qualification: "영어교육 학사"
    },
    {
      id: 2,
      name: "조성훈",
      subject: "수학",
      contractReason: "특정교과담당",
      contractStart: "2025-03-01",
      contractEnd: "2026-02-28",
      replacingTeacher: "",
      status: "재직중",
      phone: "010-7890-1234",
      email: "jo@temp.edu",
      qualification: "수학교육 석사"
    },
    {
      id: 3,
      name: "윤소영",
      subject: "미술",
      contractReason: "결원보충",
      contractStart: "2025-03-01",
      contractEnd: "2025-12-31",
      replacingTeacher: "",
      status: "계약만료예정",
      phone: "010-8901-2345",
      email: "yoon@temp.edu",
      qualification: "미술교육 학사"
    }
  ]
};

// Configuration data
const config = {
  departments: ["국어과", "수학과", "영어과", "과학과", "사회과", "체육과", "음악과", "미술과", "기술가정과", "한문과"],
  subjects: ["국어", "수학", "영어", "과학", "사회", "체육", "음악", "미술", "기술가정", "한문", "정보", "진로"],
  positions: ["교장", "교감", "수석교사", "정교사", "기간제교사"],
  leaveTypes: {
    "연가": { maxDays: 25, description: "재직기간에 따라 15-25일", color: "#4CAF50" },
    "병가": { maxDays: 60, description: "일반병가 연60일, 공무상병가 연180일", color: "#FF9800" },
    "공가": { maxDays: -1, description: "공적사유 휴가", color: "#2196F3" },
    "특별휴가": { maxDays: 5, description: "결혼, 출산, 사망 등", color: "#9C27B0" },
    "장기재직휴가": { maxDays: 7, description: "10년이상 5일, 20년이상 7일", color: "#607D8B" }
  },
  absenceTypes: {
    "질병휴직": { maxMonths: 12, description: "1년이내, 공무상은 3년", color: "#F44336" },
    "병역휴직": { maxMonths: 36, description: "복무기간", color: "#795548" },
    "육아휴직": { maxMonths: 36, description: "자녀1명당 1년, 여교원 3년", color: "#E91E63" },
    "유학휴직": { maxMonths: 36, description: "3년이내", color: "#3F51B5" },
    "가족돌봄휴직": { maxMonths: 12, description: "1년이내, 총3년", color: "#009688" }
  }
};

// Global variables
let currentTab = 'dashboard';
let charts = {};
let nextId = {
  teachers: 6,
  leaveApplications: 7,
  leaveOfAbsenceApplications: 2,
  contractTeachers: 4
};

// Calendar state - Initialize with 2025 September
let currentCalendarYear = 2025;
let currentCalendarMonth = 8; // September (0-based index)

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setCurrentDate();
  initializeCalendar();
  setupEventListeners();
  populateFilters();
  renderDashboard();
  renderAllTables();
  setupSearchAndFilters();
  setupKeyboardShortcuts();
  loadCalendarStateFromURL();
}

function setCurrentDate() {
  const now = new Date();
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    weekday: 'long' 
  };
  document.getElementById('currentDate').textContent = 
    now.toLocaleDateString('ko-KR', options);
}

function initializeCalendar() {
  // Set current calendar to September 2025 as specified
  currentCalendarYear = 2025;
  currentCalendarMonth = 8; // September (0-based)
  updateCalendarSelectors();
}

function setupEventListeners() {
  // Tab switching
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      switchTab(this.dataset.tab);
    });
  });

  // Calendar controls
  setupCalendarControls();

  // Global modal close handlers
  document.addEventListener('click', function(e) {
    const modal = document.getElementById('universalModal');
    const confirmModal = document.getElementById('confirmModal');
    const dayModal = document.getElementById('dayDetailModal');
    
    if (modal && e.target === modal) {
      closeModal();
    }
    
    if (confirmModal && e.target === confirmModal) {
      closeConfirmModal();
    }

    if (dayModal && e.target === dayModal) {
      closeDayDetailModal();
    }
  });

  // Escape key to close modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
      closeConfirmModal();
      closeDayDetailModal();
    }
  });

  // Browser back/forward handling
  window.addEventListener('popstate', function(e) {
    if (e.state && e.state.year && e.state.month !== undefined) {
      currentCalendarYear = e.state.year;
      currentCalendarMonth = e.state.month;
      updateCalendarSelectors();
      renderCalendarView();
      updateMonthSummary();
    }
  });
}

function setupCalendarControls() {
  // Today button
  const todayBtn = document.getElementById('todayBtn');
  if (todayBtn) {
    todayBtn.addEventListener('click', function(e) {
      e.preventDefault();
      goToToday();
    });
  }

  // Export button
  const exportBtn = document.getElementById('exportBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', function(e) {
      e.preventDefault();
      exportMonthData();
    });
  }

  // Navigation buttons
  const prevBtn = document.getElementById('prevMonthBtn');
  const nextBtn = document.getElementById('nextMonthBtn');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function(e) {
      e.preventDefault();
      goToPreviousMonth();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function(e) {
      e.preventDefault();
      goToNextMonth();
    });
  }

  // Year and month selectors
  const yearSelect = document.getElementById('yearSelect');
  const monthSelect = document.getElementById('monthSelect');
  
  if (yearSelect) {
    yearSelect.addEventListener('change', function(e) {
      currentCalendarYear = parseInt(this.value);
      renderCalendarView();
      updateMonthSummary();
      updateURLState();
      saveCalendarState();
    });
  }
  
  if (monthSelect) {
    monthSelect.addEventListener('change', function(e) {
      currentCalendarMonth = parseInt(this.value);
      renderCalendarView();
      updateMonthSummary();
      updateURLState();
      saveCalendarState();
    });
  }
}

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', function(e) {
    // Only handle shortcuts when no modal is open and no input is focused
    if (document.querySelector('.modal:not(.hidden)') || 
        document.activeElement.tagName === 'INPUT' || 
        document.activeElement.tagName === 'SELECT' ||
        document.activeElement.tagName === 'TEXTAREA') {
      return;
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPreviousMonth();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNextMonth();
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToToday();
    }
  });
}

function updateCalendarSelectors() {
  const yearSelect = document.getElementById('yearSelect');
  const monthSelect = document.getElementById('monthSelect');
  
  if (yearSelect) {
    yearSelect.value = currentCalendarYear.toString();
  }
  
  if (monthSelect) {
    monthSelect.value = currentCalendarMonth.toString();
  }
}

function goToToday() {
  const today = new Date();
  currentCalendarYear = today.getFullYear();
  currentCalendarMonth = today.getMonth();
  updateCalendarSelectors();
  renderCalendarView();
  updateMonthSummary();
  updateURLState();
  saveCalendarState();
  showToast('현재 월로 이동했습니다.', 'info');
}

function goToPreviousMonth() {
  if (currentCalendarMonth === 0) {
    currentCalendarMonth = 11;
    currentCalendarYear--;
  } else {
    currentCalendarMonth--;
  }
  updateCalendarSelectors();
  renderCalendarView();
  updateMonthSummary();
  updateURLState();
  saveCalendarState();
}

function goToNextMonth() {
  if (currentCalendarMonth === 11) {
    currentCalendarMonth = 0;
    currentCalendarYear++;
  } else {
    currentCalendarMonth++;
  }
  updateCalendarSelectors();
  renderCalendarView();
  updateMonthSummary();
  updateURLState();
  saveCalendarState();
}

function updateURLState() {
  const url = new URL(window.location);
  url.searchParams.set('year', currentCalendarYear);
  url.searchParams.set('month', currentCalendarMonth);
  
  const state = {
    year: currentCalendarYear,
    month: currentCalendarMonth
  };
  
  window.history.replaceState(state, '', url);
}

function loadCalendarStateFromURL() {
  const url = new URL(window.location);
  const year = url.searchParams.get('year');
  const month = url.searchParams.get('month');
  
  if (year && month !== null) {
    currentCalendarYear = parseInt(year);
    currentCalendarMonth = parseInt(month);
    updateCalendarSelectors();
    renderCalendarView();
    updateMonthSummary();
  }
}

function saveCalendarState() {
  // Skip localStorage for this demo
  return;
}

function exportMonthData() {
  const monthData = getMonthData();
  const monthName = new Date(currentCalendarYear, currentCalendarMonth).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long' });
  
  // Create CSV content
  let csvContent = `${monthName} 휴가·휴직 현황\n\n`;
  
  // Summary
  csvContent += "월별 요약\n";
  csvContent += `총 휴가일수,${monthData.totalDays}일\n`;
  csvContent += `승인대기,${monthData.pendingCount}건\n`;
  csvContent += `승인완료,${monthData.approvedCount}건\n`;
  csvContent += `반려,${monthData.rejectedCount}건\n\n`;
  
  // Leave applications
  csvContent += "휴가 신청 내역\n";
  csvContent += "신청자,휴가종류,시작일,종료일,일수,사유,상태\n";
  
  monthData.leaves.forEach(leave => {
    csvContent += `${leave.teacherName},${leave.type},${leave.startDate},${leave.endDate},${leave.days},${leave.reason},${leave.status}\n`;
  });
  
  // Absence applications
  if (monthData.absences.length > 0) {
    csvContent += "\n휴직 신청 내역\n";
    csvContent += "신청자,휴직종류,시작일,종료일,사유,상태\n";
    
    monthData.absences.forEach(absence => {
      csvContent += `${absence.teacherName},${absence.type},${absence.startDate},${absence.endDate},${absence.reason},${absence.status}\n`;
    });
  }
  
  // Create and download file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `${monthName.replace(/\s/g, '_')}_휴가휴직현황.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  showToast(`${monthName} 데이터를 내보냈습니다.`, 'success');
}

function getMonthData() {
  const startOfMonth = new Date(currentCalendarYear, currentCalendarMonth, 1);
  const endOfMonth = new Date(currentCalendarYear, currentCalendarMonth + 1, 0);
  
  const monthLeaves = appData.leaveApplications.filter(leave => {
    const leaveStart = new Date(leave.startDate);
    const leaveEnd = new Date(leave.endDate);
    return (leaveStart <= endOfMonth && leaveEnd >= startOfMonth);
  });
  
  const monthAbsences = appData.leaveOfAbsenceApplications.filter(absence => {
    const absenceStart = new Date(absence.startDate);
    const absenceEnd = new Date(absence.endDate);
    return (absenceStart <= endOfMonth && absenceEnd >= startOfMonth);
  });
  
  const totalDays = monthLeaves
    .filter(leave => leave.status === '승인')
    .reduce((sum, leave) => sum + leave.days, 0);
  
  const pendingCount = monthLeaves.filter(leave => leave.status === '승인대기').length +
                      monthAbsences.filter(absence => absence.status === '승인대기').length;
  
  const approvedCount = monthLeaves.filter(leave => leave.status === '승인').length +
                        monthAbsences.filter(absence => absence.status === '승인').length;
  
  const rejectedCount = monthLeaves.filter(leave => leave.status === '반려').length +
                        monthAbsences.filter(absence => absence.status === '반려').length;
  
  return {
    leaves: monthLeaves,
    absences: monthAbsences,
    totalDays,
    pendingCount,
    approvedCount,
    rejectedCount
  };
}

function populateFilters() {
  // Populate department filters
  const departmentFilters = ['teacherDepartmentFilter'];
  departmentFilters.forEach(filterId => {
    const filter = document.getElementById(filterId);
    if (filter) {
      config.departments.forEach(dept => {
        const option = document.createElement('option');
        option.value = dept;
        option.textContent = dept;
        filter.appendChild(option);
      });
    }
  });
}

function setupSearchAndFilters() {
  // Teacher filters
  const teacherSearch = document.getElementById('teacherSearch');
  const teacherDeptFilter = document.getElementById('teacherDepartmentFilter');
  const teacherStatusFilter = document.getElementById('teacherStatusFilter');
  
  if (teacherSearch) teacherSearch.addEventListener('input', filterTeachers);
  if (teacherDeptFilter) teacherDeptFilter.addEventListener('change', filterTeachers);
  if (teacherStatusFilter) teacherStatusFilter.addEventListener('change', filterTeachers);

  // Leave filters
  const leaveSearch = document.getElementById('leaveSearch');
  const leaveTypeFilter = document.getElementById('leaveTypeFilter');
  const leaveStatusFilter = document.getElementById('leaveStatusFilter');
  const leaveDateFrom = document.getElementById('leaveDateFrom');
  const leaveDateTo = document.getElementById('leaveDateTo');
  
  if (leaveSearch) leaveSearch.addEventListener('input', filterLeaves);
  if (leaveTypeFilter) leaveTypeFilter.addEventListener('change', filterLeaves);
  if (leaveStatusFilter) leaveStatusFilter.addEventListener('change', filterLeaves);
  if (leaveDateFrom) leaveDateFrom.addEventListener('change', filterLeaves);
  if (leaveDateTo) leaveDateTo.addEventListener('change', filterLeaves);

  // Absence filters
  const absenceSearch = document.getElementById('absenceSearch');
  const absenceTypeFilter = document.getElementById('absenceTypeFilter');
  const absenceStatusFilter = document.getElementById('absenceStatusFilter');
  
  if (absenceSearch) absenceSearch.addEventListener('input', filterAbsences);
  if (absenceTypeFilter) absenceTypeFilter.addEventListener('change', filterAbsences);
  if (absenceStatusFilter) absenceStatusFilter.addEventListener('change', filterAbsences);

  // Contract filters
  const contractSearch = document.getElementById('contractSearch');
  const contractReasonFilter = document.getElementById('contractReasonFilter');
  const contractStatusFilter = document.getElementById('contractStatusFilter');
  
  if (contractSearch) contractSearch.addEventListener('input', filterContracts);
  if (contractReasonFilter) contractReasonFilter.addEventListener('change', filterContracts);
  if (contractStatusFilter) contractStatusFilter.addEventListener('change', filterContracts);
}

function switchTab(tabName) {
  // Update active tab
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }

  // Update active content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  
  const activeContent = document.getElementById(tabName);
  if (activeContent) {
    activeContent.classList.add('active');
  }

  currentTab = tabName;

  // Render content based on tab
  if (tabName === 'statistics') {
    setTimeout(() => {
      renderStatistics();
    }, 100);
  }
}

// Dashboard functions
function renderDashboard() {
  updateSummaryCards();
  renderPendingApprovals();
  renderCalendarView();
  updateMonthSummary();
}

function updateSummaryCards() {
  const totalTeachers = appData.teachers.length;
  const onLeave = appData.leaveApplications.filter(app => 
    app.status === '승인' && isCurrentlyOnLeave(app.startDate, app.endDate)
  ).length;
  const onAbsence = appData.teachers.filter(t => t.status === '육아휴직' || t.status === '병가휴직').length;
  const contractTeachers = appData.contractTeachers.filter(t => t.status === '재직중').length;

  document.getElementById('totalTeachers').textContent = totalTeachers;
  document.getElementById('onLeave').textContent = onLeave;
  document.getElementById('onAbsence').textContent = onAbsence;
  document.getElementById('contractTeachers').textContent = contractTeachers;
}

function isCurrentlyOnLeave(startDate, endDate) {
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);
  return today >= start && today <= end;
}

function renderPendingApprovals() {
  const pendingList = document.getElementById('pendingList');
  const pendingCount = document.getElementById('pendingCount');
  if (!pendingList) return;
  
  const pendingLeaves = appData.leaveApplications.filter(app => app.status === '승인대기');
  const pendingAbsences = appData.leaveOfAbsenceApplications.filter(app => app.status === '승인대기');
  const allPending = [...pendingLeaves, ...pendingAbsences];
  
  if (pendingCount) {
    pendingCount.textContent = allPending.length;
  }
  
  if (allPending.length === 0) {
    pendingList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📝</div>
        <p>승인 대기중인 신청서가 없습니다.</p>
      </div>
    `;
    return;
  }

  pendingList.innerHTML = allPending.map(app => {
    const isLeave = pendingLeaves.includes(app);
    const type = isLeave ? 'leave' : 'absence';
    const period = isLeave ? 
      `${formatDateRange(app.startDate, app.endDate)} (${app.days}일)` :
      formatDateRange(app.startDate, app.endDate);
    
    return `
      <div class="pending-item">
        <div class="pending-item-info">
          <div class="pending-item-title">${app.teacherName} - ${app.type}</div>
          <div class="pending-item-subtitle">${period}</div>
        </div>
        <div class="pending-actions">
          <button class="action-btn action-btn--approve" onclick="approveApplication(${app.id}, '${type}')">
            승인
          </button>
          <button class="action-btn action-btn--reject" onclick="rejectApplication(${app.id}, '${type}')">
            반려
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function renderCalendarView() {
  const calendarView = document.getElementById('calendarView');
  if (!calendarView) return;
  
  const firstDay = new Date(currentCalendarYear, currentCalendarMonth, 1);
  const lastDay = new Date(currentCalendarYear, currentCalendarMonth + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDayOfWeek = firstDay.getDay();
  
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === currentCalendarYear && today.getMonth() === currentCalendarMonth;
  
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  let calendarHTML = weekdays.map((day, index) => 
    `<div class="calendar-day calendar-day--header ${index === 0 || index === 6 ? 'calendar-day--weekend' : ''}">${day}</div>`
  ).join('');
  
  // Previous month days
  const prevMonth = new Date(currentCalendarYear, currentCalendarMonth - 1, 0);
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    const day = prevMonth.getDate() - i;
    calendarHTML += `<div class="calendar-day calendar-day--other-month">${day}</div>`;
  }
  
  // Current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentCalendarYear, currentCalendarMonth, day);
    const dateStr = date.toISOString().split('T')[0];
    const dayOfWeek = date.getDay();
    
    let dayClass = 'calendar-day';
    const isToday = isCurrentMonth && date.getDate() === today.getDate();
    
    if (isToday) {
      dayClass += ' calendar-day--today';
    }
    
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      dayClass += ' calendar-day--weekend';
    }
    
    // Get events for this day
    const dayEvents = getDayEvents(dateStr);
    const eventsHTML = dayEvents.map(event => 
      `<div class="calendar-event calendar-event--${event.type}"></div>`
    ).join('');
    
    calendarHTML += `
      <div class="${dayClass}" onclick="showDayDetail('${dateStr}')">
        <span class="calendar-day-number">${day}</span>
        <div class="calendar-day-events">${eventsHTML}</div>
      </div>
    `;
  }
  
  // Next month days to fill the grid
  const totalCells = Math.ceil((startDayOfWeek + daysInMonth) / 7) * 7;
  const remainingCells = totalCells - (startDayOfWeek + daysInMonth);
  for (let day = 1; day <= remainingCells; day++) {
    calendarHTML += `<div class="calendar-day calendar-day--other-month">${day}</div>`;
  }
  
  calendarView.innerHTML = calendarHTML;
}

function getDayEvents(dateStr) {
  const events = [];
  
  // Check leave applications
  appData.leaveApplications.forEach(leave => {
    if (leave.status === '승인' && dateStr >= leave.startDate && dateStr <= leave.endDate) {
      events.push({
        type: `leave-${leave.type}`,
        data: leave
      });
    }
  });
  
  // Check absence applications
  appData.leaveOfAbsenceApplications.forEach(absence => {
    if (absence.status === '승인' && dateStr >= absence.startDate && dateStr <= absence.endDate) {
      events.push({
        type: 'absence',
        data: absence
      });
    }
  });
  
  return events;
}

function showDayDetail(dateStr) {
  const date = new Date(dateStr);
  const events = getDayEvents(dateStr);
  
  if (events.length === 0) {
    showToast('해당 날짜에 일정이 없습니다.', 'info');
    return;
  }
  
  const title = `${date.toLocaleDateString('ko-KR', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    weekday: 'long'
  })} 일정`;
  
  const eventsHTML = events.map(event => {
    const isLeave = event.type.startsWith('leave-');
    const data = event.data;
    
    return `
      <div class="day-event-item day-event-item--${isLeave ? 'leave' : 'absence'}">
        <div class="day-event-header">
          <span class="day-event-teacher">${data.teacherName}</span>
          <span class="status-badge ${getStatusBadgeClass(data.status)}">${data.type}</span>
        </div>
        <div class="day-event-type">${isLeave ? `${data.days}일간` : ''} ${data.type}</div>
        <div class="day-event-reason">${data.reason}</div>
      </div>
    `;
  }).join('');
  
  const modalBody = `
    <div class="day-events-list">
      ${eventsHTML}
    </div>
  `;
  
  openDayDetailModal(title, modalBody);
}

function openDayDetailModal(title, body) {
  const modal = document.getElementById('dayDetailModal');
  const modalTitle = document.getElementById('dayDetailTitle');
  const modalBody = document.getElementById('dayDetailBody');
  
  if (modal && modalTitle && modalBody) {
    modalTitle.textContent = title;
    modalBody.innerHTML = body;
    modal.classList.remove('hidden');
  }
}

function closeDayDetailModal() {
  const modal = document.getElementById('dayDetailModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function updateMonthSummary() {
  const monthData = getMonthData();
  
  const totalDaysEl = document.getElementById('monthTotalDays');
  const pendingCountEl = document.getElementById('monthPendingCount');
  const approvedCountEl = document.getElementById('monthApprovedCount');
  const rejectedCountEl = document.getElementById('monthRejectedCount');
  
  if (totalDaysEl) totalDaysEl.textContent = `${monthData.totalDays}일`;
  if (pendingCountEl) pendingCountEl.textContent = `${monthData.pendingCount}건`;
  if (approvedCountEl) approvedCountEl.textContent = `${monthData.approvedCount}건`;
  if (rejectedCountEl) rejectedCountEl.textContent = `${monthData.rejectedCount}건`;
}

// Table rendering functions
function renderAllTables() {
  renderTeachersTable();
  renderLeavesTable();
  renderAbsencesTable();
  renderContractTable();
}

function renderTeachersTable(filteredData = null) {
  const tbody = document.getElementById('teachersTable');
  if (!tbody) return;
  
  const data = filteredData || appData.teachers;
  
  tbody.innerHTML = data.map(teacher => `
    <tr>
      <td><input type="checkbox" class="row-checkbox" data-id="${teacher.id}"></td>
      <td>${teacher.name}</td>
      <td>${teacher.subject}</td>
      <td>${teacher.department}</td>
      <td>${teacher.yearsOfService}년</td>
      <td>${teacher.annualLeaveDays}일</td>
      <td>
        <div style="display: flex; align-items: center; gap: 4px;">
          <span style="font-size: var(--font-size-xs); color: var(--color-error);">${teacher.usedLeaveDays}</span>
          <span style="font-size: var(--font-size-xs); color: var(--color-text-secondary);">/</span>
          <span style="font-size: var(--font-size-xs); color: var(--color-success);">${teacher.remainingLeaveDays}</span>
        </div>
      </td>
      <td>
        <span class="status-badge ${getStatusBadgeClass(teacher.status)}">
          ${teacher.status}
        </span>
      </td>
      <td>
        <button class="action-btn action-btn--edit" onclick="editTeacher(${teacher.id})">수정</button>
        <button class="action-btn action-btn--delete" onclick="deleteTeacher(${teacher.id})">삭제</button>
        <button class="action-btn action-btn--view" onclick="viewTeacher(${teacher.id})">상세</button>
      </td>
    </tr>
  `).join('');
}

function renderLeavesTable(filteredData = null) {
  const tbody = document.getElementById('leavesTable');
  if (!tbody) return;
  
  const data = filteredData || appData.leaveApplications;
  
  tbody.innerHTML = data.map(leave => `
    <tr>
      <td><input type="checkbox" class="row-checkbox" data-id="${leave.id}"></td>
      <td>${formatDate(leave.appliedDate)}</td>
      <td>${leave.teacherName}</td>
      <td>${leave.type}</td>
      <td>${formatDateRange(leave.startDate, leave.endDate)}</td>
      <td>${leave.days}일</td>
      <td>${leave.reason}</td>
      <td>
        <span class="status-badge ${getStatusBadgeClass(leave.status)}">
          ${leave.status}
        </span>
      </td>
      <td>
        ${leave.status === '승인대기' ? `
          <button class="action-btn action-btn--approve" onclick="approveApplication(${leave.id}, 'leave')">승인</button>
          <button class="action-btn action-btn--reject" onclick="rejectApplication(${leave.id}, 'leave')">반려</button>
          <button class="action-btn action-btn--edit" onclick="editLeave(${leave.id})">수정</button>
          <button class="action-btn action-btn--delete" onclick="deleteLeave(${leave.id})">삭제</button>
        ` : `
          <button class="action-btn action-btn--view" onclick="viewLeave(${leave.id})">상세</button>
        `}
      </td>
    </tr>
  `).join('');
}

function renderAbsencesTable(filteredData = null) {
  const tbody = document.getElementById('absencesTable');
  if (!tbody) return;
  
  const data = filteredData || appData.leaveOfAbsenceApplications;
  
  tbody.innerHTML = data.map(absence => `
    <tr>
      <td><input type="checkbox" class="row-checkbox" data-id="${absence.id}"></td>
      <td>${formatDate(absence.appliedDate)}</td>
      <td>${absence.teacherName}</td>
      <td>${absence.type}</td>
      <td>${formatDateRange(absence.startDate, absence.endDate)}</td>
      <td>${absence.reason}</td>
      <td>
        <span class="status-badge ${getStatusBadgeClass(absence.status)}">
          ${absence.status}
        </span>
      </td>
      <td>
        ${absence.status === '승인대기' ? `
          <button class="action-btn action-btn--approve" onclick="approveApplication(${absence.id}, 'absence')">승인</button>
          <button class="action-btn action-btn--reject" onclick="rejectApplication(${absence.id}, 'absence')">반려</button>
          <button class="action-btn action-btn--edit" onclick="editAbsence(${absence.id})">수정</button>
          <button class="action-btn action-btn--delete" onclick="deleteAbsence(${absence.id})">삭제</button>
        ` : `
          <button class="action-btn action-btn--view" onclick="viewAbsence(${absence.id})">상세</button>
        `}
      </td>
    </tr>
  `).join('');
}

function renderContractTable(filteredData = null) {
  const tbody = document.getElementById('contractTable');
  if (!tbody) return;
  
  const data = filteredData || appData.contractTeachers;
  
  tbody.innerHTML = data.map(contract => `
    <tr>
      <td><input type="checkbox" class="row-checkbox" data-id="${contract.id}"></td>
      <td>${contract.name}</td>
      <td>${contract.subject}</td>
      <td>${contract.contractReason}</td>
      <td>${formatDateRange(contract.contractStart, contract.contractEnd)}</td>
      <td>${contract.replacingTeacher || '-'}</td>
      <td>
        <span class="status-badge ${getStatusBadgeClass(contract.status)}">
          ${contract.status}
        </span>
      </td>
      <td>
        <button class="action-btn action-btn--edit" onclick="editContract(${contract.id})">수정</button>
        <button class="action-btn action-btn--delete" onclick="deleteContract(${contract.id})">삭제</button>
        <button class="action-btn action-btn--view" onclick="viewContract(${contract.id})">상세</button>
      </td>
    </tr>
  `).join('');
}

// Filter functions
function filterTeachers() {
  const search = document.getElementById('teacherSearch')?.value.toLowerCase() || '';
  const dept = document.getElementById('teacherDepartmentFilter')?.value || '';
  const status = document.getElementById('teacherStatusFilter')?.value || '';
  
  let filtered = appData.teachers.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(search) ||
                         teacher.subject.toLowerCase().includes(search) ||
                         teacher.department.toLowerCase().includes(search);
    const matchesDept = !dept || teacher.department === dept;
    const matchesStatus = !status || teacher.status === status;
    
    return matchesSearch && matchesDept && matchesStatus;
  });
  
  renderTeachersTable(filtered);
}

function filterLeaves() {
  const search = document.getElementById('leaveSearch')?.value.toLowerCase() || '';
  const type = document.getElementById('leaveTypeFilter')?.value || '';
  const status = document.getElementById('leaveStatusFilter')?.value || '';
  const dateFrom = document.getElementById('leaveDateFrom')?.value || '';
  const dateTo = document.getElementById('leaveDateTo')?.value || '';
  
  let filtered = appData.leaveApplications.filter(leave => {
    const matchesSearch = leave.teacherName.toLowerCase().includes(search);
    const matchesType = !type || leave.type === type;
    const matchesStatus = !status || leave.status === status;
    const matchesDateFrom = !dateFrom || leave.startDate >= dateFrom;
    const matchesDateTo = !dateTo || leave.endDate <= dateTo;
    
    return matchesSearch && matchesType && matchesStatus && matchesDateFrom && matchesDateTo;
  });
  
  renderLeavesTable(filtered);
}

function filterAbsences() {
  const search = document.getElementById('absenceSearch')?.value.toLowerCase() || '';
  const type = document.getElementById('absenceTypeFilter')?.value || '';
  const status = document.getElementById('absenceStatusFilter')?.value || '';
  
  let filtered = appData.leaveOfAbsenceApplications.filter(absence => {
    const matchesSearch = absence.teacherName.toLowerCase().includes(search);
    const matchesType = !type || absence.type === type;
    const matchesStatus = !status || absence.status === status;
    
    return matchesSearch && matchesType && matchesStatus;
  });
  
  renderAbsencesTable(filtered);
}

function filterContracts() {
  const search = document.getElementById('contractSearch')?.value.toLowerCase() || '';
  const reason = document.getElementById('contractReasonFilter')?.value || '';
  const status = document.getElementById('contractStatusFilter')?.value || '';
  
  let filtered = appData.contractTeachers.filter(contract => {
    const matchesSearch = contract.name.toLowerCase().includes(search) ||
                         contract.subject.toLowerCase().includes(search);
    const matchesReason = !reason || contract.contractReason === reason;
    const matchesStatus = !status || contract.status === status;
    
    return matchesSearch && matchesReason && matchesStatus;
  });
  
  renderContractTable(filtered);
}

// Application approval/rejection functions
function approveApplication(id, type) {
  if (type === 'leave') {
    const app = appData.leaveApplications.find(a => a.id === id);
    if (app) {
      app.status = '승인';
      app.approvedDate = new Date().toISOString().split('T')[0];
      app.approver = '교무부장';
      
      // Update teacher's used leave days
      const teacher = appData.teachers.find(t => t.id === app.teacherId);
      if (teacher) {
        teacher.usedLeaveDays += app.days;
        teacher.remainingLeaveDays -= app.days;
      }
      
      showToast('휴가 신청이 승인되었습니다.', 'success');
    }
  } else if (type === 'absence') {
    const app = appData.leaveOfAbsenceApplications.find(a => a.id === id);
    if (app) {
      app.status = '승인';
      app.approvedDate = new Date().toISOString().split('T')[0];
      app.approver = '교장';
      
      // Update teacher status
      const teacher = appData.teachers.find(t => t.id === app.teacherId);
      if (teacher) {
        teacher.status = app.type;
      }
      
      showToast('휴직 신청이 승인되었습니다.', 'success');
    }
  }
  
  // Refresh all displays
  updateSummaryCards();
  renderPendingApprovals();
  renderCalendarView();
  updateMonthSummary();
  renderLeavesTable();
  renderAbsencesTable();
  renderTeachersTable();
}

function rejectApplication(id, type) {
  const reason = prompt('반려 사유를 입력해주세요:');
  if (!reason) return;
  
  if (type === 'leave') {
    const app = appData.leaveApplications.find(a => a.id === id);
    if (app) {
      app.status = '반려';
      app.approvedDate = new Date().toISOString().split('T')[0];
      app.approver = '교무부장';
      app.rejectReason = reason;
      
      showToast('휴가 신청이 반려되었습니다.', 'warning');
    }
  } else if (type === 'absence') {
    const app = appData.leaveOfAbsenceApplications.find(a => a.id === id);
    if (app) {
      app.status = '반려';
      app.approvedDate = new Date().toISOString().split('T')[0];
      app.approver = '교장';
      app.rejectReason = reason;
      
      showToast('휴직 신청이 반려되었습니다.', 'warning');
    }
  }
  
  // Refresh displays
  updateSummaryCards();
  renderPendingApprovals();
  renderLeavesTable();
  renderAbsencesTable();
}

// Statistics rendering
function renderStatistics() {
  renderLeaveTypesChart();
  renderMonthlyLeaveChart();
  renderContractChart();
  renderDepartmentChart();
}

function renderLeaveTypesChart() {
  const canvas = document.getElementById('leaveTypesChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  if (charts.leaveTypes) {
    charts.leaveTypes.destroy();
  }
  
  const leaveTypes = {};
  appData.leaveApplications.forEach(leave => {
    if (leave.status === '승인') {
      leaveTypes[leave.type] = (leaveTypes[leave.type] || 0) + 1;
    }
  });
  
  charts.leaveTypes = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(leaveTypes),
      datasets: [{
        data: Object.values(leaveTypes),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function renderMonthlyLeaveChart() {
  const canvas = document.getElementById('monthlyLeaveChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  if (charts.monthlyLeave) {
    charts.monthlyLeave.destroy();
  }
  
  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  const monthlyData = new Array(12).fill(0);
  
  appData.leaveApplications.forEach(leave => {
    if (leave.status === '승인') {
      const month = new Date(leave.startDate).getMonth();
      monthlyData[month] += leave.days;
    }
  });
  
  charts.monthlyLeave = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
        label: '휴가일수',
        data: monthlyData,
        backgroundColor: '#1FB8CD'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function renderContractChart() {
  const canvas = document.getElementById('contractChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  if (charts.contract) {
    charts.contract.destroy();
  }
  
  const contractReasons = {};
  appData.contractTeachers.forEach(contract => {
    contractReasons[contract.contractReason] = (contractReasons[contract.contractReason] || 0) + 1;
  });
  
  charts.contract = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(contractReasons),
      datasets: [{
        data: Object.values(contractReasons),
        backgroundColor: ['#FFC185', '#B4413C', '#5D878F', '#ECEBD5']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

function renderDepartmentChart() {
  const canvas = document.getElementById('departmentChart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  if (charts.department) {
    charts.department.destroy();
  }
  
  const departments = {};
  appData.teachers.forEach(teacher => {
    const usage = teacher.annualLeaveDays > 0 ? (teacher.usedLeaveDays / teacher.annualLeaveDays) * 100 : 0;
    if (departments[teacher.department]) {
      departments[teacher.department].push(usage);
    } else {
      departments[teacher.department] = [usage];
    }
  });
  
  // Calculate average for each department
  const departmentAvg = {};
  Object.keys(departments).forEach(dept => {
    const avg = departments[dept].reduce((sum, val) => sum + val, 0) / departments[dept].length;
    departmentAvg[dept] = Math.round(avg * 100) / 100;
  });
  
  charts.department = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(departmentAvg),
      datasets: [{
        label: '휴가 사용률 (%)',
        data: Object.values(departmentAvg),
        backgroundColor: '#1FB8CD'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });
}

// Utility functions
function openModal(title, body) {
  const modal = document.getElementById('universalModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  
  if (modal && modalTitle && modalBody) {
    modalTitle.textContent = title;
    modalBody.innerHTML = body;
    modal.classList.remove('hidden');
  }
}

function closeModal() {
  const modal = document.getElementById('universalModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function showConfirmDialog(message, onConfirm) {
  const modal = document.getElementById('confirmModal');
  const messageEl = document.getElementById('confirmMessage');
  const confirmBtn = document.getElementById('confirmButton');
  
  if (modal && messageEl && confirmBtn) {
    messageEl.textContent = message;
    
    // Remove previous event listeners
    const newConfirmBtn = confirmBtn.cloneNode(true);
    confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
    
    newConfirmBtn.addEventListener('click', () => {
      onConfirm();
      closeConfirmModal();
    });
    
    modal.classList.remove('hidden');
  }
}

function closeConfirmModal() {
  const modal = document.getElementById('confirmModal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  
  const typeIcons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  
  toast.innerHTML = `
    <div class="toast-header">
      <div class="toast-title">${typeIcons[type] || ''} ${type === 'success' ? '성공' : type === 'error' ? '오류' : type === 'warning' ? '경고' : '알림'}</div>
      <button class="toast-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
    </div>
    <div class="toast-message">${message}</div>
  `;
  
  container.appendChild(toast);
  
  // Show toast
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR');
}

function formatDateRange(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (startDate === endDate) {
    return start.toLocaleDateString('ko-KR');
  }
  
  return `${start.toLocaleDateString('ko-KR')} ~ ${end.toLocaleDateString('ko-KR')}`;
}

function getStatusBadgeClass(status) {
  switch (status) {
    case '승인대기': return 'status-badge--pending';
    case '승인': return 'status-badge--approved';
    case '반려': return 'status-badge--rejected';
    case '재직': return 'status-badge--active';
    case '재직중': return 'status-badge--active';
    case '육아휴직': 
    case '병가휴직':
    case '질병휴직':
    case '유학휴직':
    case '가족돌봄휴직': return 'status-badge--absence';
    case '계약만료예정': return 'status-badge--expired';
    case '계약종료': return 'status-badge--rejected';
    default: return '';
  }
}

// Mock CRUD functions (keeping existing implementations)
function openTeacherForm() {
  showToast('교원 등록 기능은 구현 예정입니다.', 'info');
}

function editTeacher(id) {
  showToast(`교원 ${id} 수정 기능은 구현 예정입니다.`, 'info');
}

function deleteTeacher(id) {
  showToast(`교원 ${id} 삭제 기능은 구현 예정입니다.`, 'info');
}

function viewTeacher(id) {
  showToast(`교원 ${id} 상세 보기 기능은 구현 예정입니다.`, 'info');
}

function openLeaveForm() {
  showToast('휴가 신청 기능은 구현 예정입니다.', 'info');
}

function editLeave(id) {
  showToast(`휴가 ${id} 수정 기능은 구현 예정입니다.`, 'info');
}

function deleteLeave(id) {
  showToast(`휴가 ${id} 삭제 기능은 구현 예정입니다.`, 'info');
}

function viewLeave(id) {
  showToast(`휴가 ${id} 상세 보기 기능은 구현 예정입니다.`, 'info');
}

function openAbsenceForm() {
  showToast('휴직 신청 기능은 구현 예정입니다.', 'info');
}

function editAbsence(id) {
  showToast(`휴직 ${id} 수정 기능은 구현 예정입니다.`, 'info');
}

function deleteAbsence(id) {
  showToast(`휴직 ${id} 삭제 기능은 구현 예정입니다.`, 'info');
}

function viewAbsence(id) {
  showToast(`휴직 ${id} 상세 보기 기능은 구현 예정입니다.`, 'info');
}

function openContractForm() {
  showToast('기간제교원 등록 기능은 구현 예정입니다.', 'info');
}

function editContract(id) {
  showToast(`기간제교원 ${id} 수정 기능은 구현 예정입니다.`, 'info');
}

function deleteContract(id) {
  showToast(`기간제교원 ${id} 삭제 기능은 구현 예정입니다.`, 'info');
}

function viewContract(id) {
  showToast(`기간제교원 ${id} 상세 보기 기능은 구현 예정입니다.`, 'info');
}

// Make functions available globally
window.switchTab = switchTab;
window.goToToday = goToToday;
window.goToPreviousMonth = goToPreviousMonth;
window.goToNextMonth = goToNextMonth;
window.showDayDetail = showDayDetail;
window.closeDayDetailModal = closeDayDetailModal;
window.exportMonthData = exportMonthData;
window.openTeacherForm = openTeacherForm;
window.editTeacher = editTeacher;
window.deleteTeacher = deleteTeacher;
window.viewTeacher = viewTeacher;
window.openLeaveForm = openLeaveForm;
window.editLeave = editLeave;
window.deleteLeave = deleteLeave;
window.viewLeave = viewLeave;
window.openAbsenceForm = openAbsenceForm;
window.editAbsence = editAbsence;
window.deleteAbsence = deleteAbsence;
window.viewAbsence = viewAbsence;
window.openContractForm = openContractForm;
window.editContract = editContract;
window.deleteContract = deleteContract;
window.viewContract = viewContract;
window.approveApplication = approveApplication;
window.rejectApplication = rejectApplication;
window.closeModal = closeModal;
window.closeConfirmModal = closeConfirmModal;