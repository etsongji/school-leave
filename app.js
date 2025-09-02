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
      startDate: "2025-09-10",
      endDate: "2025-09-10",
      days: 1,
      reason: "결혼",
      status: "승인",
      appliedDate: "2025-08-30",
      approvedDate: "2025-08-31",
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
    "연가": { maxDays: 25, description: "재직기간에 따라 15-25일" },
    "병가": { maxDays: 60, description: "일반병가 연60일, 공무상병가 연180일" },
    "공가": { maxDays: -1, description: "공적사유 휴가" },
    "특별휴가": { maxDays: 5, description: "결혼, 출산, 사망 등" },
    "장기재직휴가": { maxDays: 7, description: "10년이상 5일, 20년이상 7일" }
  },
  absenceTypes: {
    "질병휴직": { maxMonths: 12, description: "1년이내, 공무상은 3년" },
    "병역휴직": { maxMonths: 36, description: "복무기간" },
    "육아휴직": { maxMonths: 36, description: "자녀1명당 1년, 여교원 3년" },
    "유학휴직": { maxMonths: 36, description: "3년이내" },
    "가족돌봄휴직": { maxMonths: 12, description: "1년이내, 총3년" }
  }
};

// Global variables
let currentTab = 'dashboard';
let charts = {};
let nextId = {
  teachers: 6,
  leaveApplications: 5,
  leaveOfAbsenceApplications: 2,
  contractTeachers: 4
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setCurrentDate();
  setupEventListeners();
  populateFilters();
  renderDashboard();
  renderAllTables();
  setupSearchAndFilters();
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

function setupEventListeners() {
  // Tab switching
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();
      switchTab(this.dataset.tab);
    });
  });

  // Global modal close handlers
  document.addEventListener('click', function(e) {
    const modal = document.getElementById('universalModal');
    const confirmModal = document.getElementById('confirmModal');
    
    if (modal && e.target === modal) {
      closeModal();
    }
    
    if (confirmModal && e.target === confirmModal) {
      closeConfirmModal();
    }
  });

  // Escape key to close modals
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeModal();
      closeConfirmModal();
    }
  });
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
  if (!pendingList) return;
  
  const pendingLeaves = appData.leaveApplications.filter(app => app.status === '승인대기');
  const pendingAbsences = appData.leaveOfAbsenceApplications.filter(app => app.status === '승인대기');
  const allPending = [...pendingLeaves, ...pendingAbsences];
  
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
  
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startDayOfWeek = firstDay.getDay();
  
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  let calendarHTML = weekdays.map(day => 
    `<div class="calendar-day calendar-day--header">${day}</div>`
  ).join('');
  
  for (let i = 0; i < startDayOfWeek; i++) {
    calendarHTML += '<div class="calendar-day"></div>';
  }
  
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dateStr = date.toISOString().split('T')[0];
    
    let dayClass = 'calendar-day';
    const isToday = date.toDateString() === today.toDateString();
    
    if (isToday) {
      dayClass += ' calendar-day--today';
    }
    
    const hasLeave = appData.leaveApplications.some(app => 
      app.status === '승인' && dateStr >= app.startDate && dateStr <= app.endDate
    );
    const hasAbsence = appData.leaveOfAbsenceApplications.some(app => 
      app.status === '승인' && dateStr >= app.startDate && dateStr <= app.endDate
    );
    
    if (hasAbsence) {
      dayClass += ' calendar-day--absence';
    } else if (hasLeave) {
      dayClass += ' calendar-day--leave';
    }
    
    calendarHTML += `<div class="${dayClass}">${day}</div>`;
  }
  
  calendarView.innerHTML = calendarHTML;
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

// CRUD Functions - Teachers
function openTeacherForm(teacherId = null) {
  const isEdit = teacherId !== null;
  const teacher = isEdit ? appData.teachers.find(t => t.id === teacherId) : null;
  
  const title = isEdit ? '교원 정보 수정' : '신규 교원 등록';
  const submitText = isEdit ? '수정' : '등록';
  
  const modalBody = `
    <form id="teacherForm" onsubmit="saveTeacher(event, ${teacherId})">
      <div class="form-section">
        <div class="form-section-title">기본 정보</div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label" for="teacherName">성명 *</label>
            <input type="text" id="teacherName" class="form-control" value="${teacher?.name || ''}" required>
            <div class="form-error" id="teacherNameError"></div>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="teacherEmail">이메일 *</label>
            <input type="email" id="teacherEmail" class="form-control" value="${teacher?.email || ''}" required>
            <div class="form-error" id="teacherEmailError"></div>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="teacherPhone">연락처 *</label>
            <input type="tel" id="teacherPhone" class="form-control" value="${teacher?.phone || ''}" required>
            <div class="form-error" id="teacherPhoneError"></div>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="teacherHireDate">입사일 *</label>
            <input type="date" id="teacherHireDate" class="form-control" value="${teacher?.hireDate || ''}" required>
            <div class="form-error" id="teacherHireDateError"></div>
          </div>
        </div>
      </div>
      
      <div class="form-section">
        <div class="form-section-title">직무 정보</div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label" for="teacherSubject">담당과목 *</label>
            <select id="teacherSubject" class="form-control" required>
              <option value="">과목 선택</option>
              ${config.subjects.map(subject => 
                `<option value="${subject}" ${teacher?.subject === subject ? 'selected' : ''}>${subject}</option>`
              ).join('')}
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="teacherDepartment">부서 *</label>
            <select id="teacherDepartment" class="form-control" required>
              <option value="">부서 선택</option>
              ${config.departments.map(dept => 
                `<option value="${dept}" ${teacher?.department === dept ? 'selected' : ''}>${dept}</option>`
              ).join('')}
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="teacherPosition">직급 *</label>
            <select id="teacherPosition" class="form-control" required>
              <option value="">직급 선택</option>
              ${config.positions.map(pos => 
                `<option value="${pos}" ${teacher?.position === pos ? 'selected' : ''}>${pos}</option>`
              ).join('')}
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="teacherYearsOfService">재직연수</label>
            <input type="number" id="teacherYearsOfService" class="form-control" min="0" max="40" 
                   value="${teacher?.yearsOfService || ''}" readonly>
            <div class="form-help">입사일을 기준으로 자동 계산됩니다</div>
          </div>
        </div>
      </div>
      
      <div class="modal-actions">
        <button type="button" class="btn btn--secondary" onclick="closeModal()">취소</button>
        <button type="submit" class="btn btn--primary">${submitText}</button>
      </div>
    </form>
  `;
  
  openModal(title, modalBody);
  
  // Auto-calculate years of service when hire date changes
  document.getElementById('teacherHireDate').addEventListener('change', function() {
    const hireDate = new Date(this.value);
    const now = new Date();
    const years = Math.floor((now - hireDate) / (365.25 * 24 * 60 * 60 * 1000));
    document.getElementById('teacherYearsOfService').value = Math.max(0, years);
  });
  
  // Trigger initial calculation if editing
  if (teacher?.hireDate) {
    document.getElementById('teacherHireDate').dispatchEvent(new Event('change'));
  }
}

function saveTeacher(event, teacherId = null) {
  event.preventDefault();
  
  const formData = {
    name: document.getElementById('teacherName').value.trim(),
    email: document.getElementById('teacherEmail').value.trim(),
    phone: document.getElementById('teacherPhone').value.trim(),
    hireDate: document.getElementById('teacherHireDate').value,
    subject: document.getElementById('teacherSubject').value,
    department: document.getElementById('teacherDepartment').value,
    position: document.getElementById('teacherPosition').value,
    yearsOfService: parseInt(document.getElementById('teacherYearsOfService').value) || 0
  };
  
  // Validate form
  if (!validateTeacherForm(formData)) {
    return;
  }
  
  if (teacherId) {
    // Update existing teacher
    const teacher = appData.teachers.find(t => t.id === teacherId);
    if (teacher) {
      Object.assign(teacher, formData);
      // Recalculate leave days based on years of service
      teacher.annualLeaveDays = calculateAnnualLeaveDays(teacher.yearsOfService);
      teacher.remainingLeaveDays = teacher.annualLeaveDays - teacher.usedLeaveDays;
      
      showToast('교원 정보가 수정되었습니다.', 'success');
    }
  } else {
    // Add new teacher
    const newTeacher = {
      id: nextId.teachers++,
      ...formData,
      annualLeaveDays: calculateAnnualLeaveDays(formData.yearsOfService),
      usedLeaveDays: 0,
      remainingLeaveDays: calculateAnnualLeaveDays(formData.yearsOfService),
      status: '재직'
    };
    
    appData.teachers.push(newTeacher);
    showToast('새 교원이 등록되었습니다.', 'success');
  }
  
  closeModal();
  renderTeachersTable();
  filterTeachers(); // Apply current filters
  updateSummaryCards();
}

function validateTeacherForm(data) {
  let isValid = true;
  
  // Reset errors
  document.querySelectorAll('.form-error').forEach(error => {
    error.classList.remove('show');
    error.textContent = '';
  });
  
  document.querySelectorAll('.form-control').forEach(control => {
    control.classList.remove('error');
  });
  
  // Validate name
  if (!data.name) {
    showFieldError('teacherName', '성명을 입력해주세요.');
    isValid = false;
  } else if (data.name.length < 2) {
    showFieldError('teacherName', '성명은 2자 이상이어야 합니다.');
    isValid = false;
  }
  
  // Validate email
  if (!data.email) {
    showFieldError('teacherEmail', '이메일을 입력해주세요.');
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    showFieldError('teacherEmail', '올바른 이메일 형식이 아닙니다.');
    isValid = false;
  }
  
  // Validate phone
  if (!data.phone) {
    showFieldError('teacherPhone', '연락처를 입력해주세요.');
    isValid = false;
  } else if (!/^010-\d{4}-\d{4}$/.test(data.phone)) {
    showFieldError('teacherPhone', '010-0000-0000 형식으로 입력해주세요.');
    isValid = false;
  }
  
  // Validate hire date
  if (!data.hireDate) {
    showFieldError('teacherHireDate', '입사일을 입력해주세요.');
    isValid = false;
  }
  
  return isValid;
}

function calculateAnnualLeaveDays(yearsOfService) {
  if (yearsOfService >= 20) return 25;
  if (yearsOfService >= 10) return 24;
  if (yearsOfService >= 5) return 22;
  if (yearsOfService >= 3) return 20;
  return 15;
}

function editTeacher(teacherId) {
  openTeacherForm(teacherId);
}

function deleteTeacher(teacherId) {
  const teacher = appData.teachers.find(t => t.id === teacherId);
  if (!teacher) return;
  
  showConfirmDialog(
    `${teacher.name} 교원을 정말 삭제하시겠습니까?`,
    () => {
      appData.teachers = appData.teachers.filter(t => t.id !== teacherId);
      
      // Remove related leave applications
      appData.leaveApplications = appData.leaveApplications.filter(app => app.teacherId !== teacherId);
      appData.leaveOfAbsenceApplications = appData.leaveOfAbsenceApplications.filter(app => app.teacherId !== teacherId);
      
      renderTeachersTable();
      filterTeachers();
      updateSummaryCards();
      showToast('교원이 삭제되었습니다.', 'success');
    }
  );
}

function viewTeacher(teacherId) {
  const teacher = appData.teachers.find(t => t.id === teacherId);
  if (!teacher) return;
  
  const leaveHistory = appData.leaveApplications.filter(app => app.teacherId === teacherId);
  const absenceHistory = appData.leaveOfAbsenceApplications.filter(app => app.teacherId === teacherId);
  
  const modalBody = `
    <div class="detail-grid">
      <div class="detail-row">
        <span class="detail-label">성명</span>
        <span class="detail-value">${teacher.name}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">이메일</span>
        <span class="detail-value">${teacher.email}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">연락처</span>
        <span class="detail-value">${teacher.phone}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">담당과목</span>
        <span class="detail-value">${teacher.subject}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">부서</span>
        <span class="detail-value">${teacher.department}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">직급</span>
        <span class="detail-value">${teacher.position}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">입사일</span>
        <span class="detail-value">${formatDate(teacher.hireDate)}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">재직연수</span>
        <span class="detail-value">${teacher.yearsOfService}년</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">연가일수</span>
        <span class="detail-value">${teacher.annualLeaveDays}일</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">사용연가</span>
        <span class="detail-value">${teacher.usedLeaveDays}일</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">잔여연가</span>
        <span class="detail-value">${teacher.remainingLeaveDays}일</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">현재 상태</span>
        <span class="detail-value">
          <span class="status-badge ${getStatusBadgeClass(teacher.status)}">
            ${teacher.status}
          </span>
        </span>
      </div>
    </div>
    
    ${leaveHistory.length > 0 || absenceHistory.length > 0 ? `
      <div class="leave-history">
        <h4>휴가/휴직 이력</h4>
        ${leaveHistory.map(leave => `
          <div class="history-item">
            <div class="history-header">
              <span class="history-type">${leave.type}</span>
              <span class="status-badge ${getStatusBadgeClass(leave.status)}">${leave.status}</span>
            </div>
            <div class="history-period">${formatDateRange(leave.startDate, leave.endDate)} (${leave.days}일)</div>
            <div class="history-reason">${leave.reason}</div>
          </div>
        `).join('')}
        ${absenceHistory.map(absence => `
          <div class="history-item">
            <div class="history-header">
              <span class="history-type">${absence.type}</span>
              <span class="status-badge ${getStatusBadgeClass(absence.status)}">${absence.status}</span>
            </div>
            <div class="history-period">${formatDateRange(absence.startDate, absence.endDate)}</div>
            <div class="history-reason">${absence.reason}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;
  
  openModal(`${teacher.name} 교원 상세 정보`, modalBody);
}

// CRUD Functions - Leave Applications
function openLeaveForm(leaveId = null) {
  const isEdit = leaveId !== null;
  const leave = isEdit ? appData.leaveApplications.find(l => l.id === leaveId) : null;
  
  const title = isEdit ? '휴가 신청 수정' : '새 휴가 신청';
  const submitText = isEdit ? '수정' : '신청';
  
  const modalBody = `
    <form id="leaveForm" onsubmit="saveLeave(event, ${leaveId})">
      <div class="form-section">
        <div class="form-section-title">휴가 정보</div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label" for="leaveTeacher">신청자 *</label>
            <select id="leaveTeacher" class="form-control" required ${isEdit ? 'disabled' : ''}>
              <option value="">교원 선택</option>
              ${appData.teachers.filter(t => t.status === '재직').map(teacher => 
                `<option value="${teacher.id}" ${leave?.teacherId === teacher.id ? 'selected' : ''}>${teacher.name} (${teacher.department})</option>`
              ).join('')}
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="leaveType">휴가 종류 *</label>
            <select id="leaveType" class="form-control" required>
              <option value="">휴가 종류 선택</option>
              ${Object.keys(config.leaveTypes).map(type => 
                `<option value="${type}" ${leave?.type === type ? 'selected' : ''}>${type}</option>`
              ).join('')}
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="leaveStartDate">시작일 *</label>
            <input type="date" id="leaveStartDate" class="form-control" value="${leave?.startDate || ''}" required>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="leaveEndDate">종료일 *</label>
            <input type="date" id="leaveEndDate" class="form-control" value="${leave?.endDate || ''}" required>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="leaveDays">휴가일수</label>
            <input type="number" id="leaveDays" class="form-control" value="${leave?.days || ''}" readonly>
            <div class="form-help">날짜 선택시 자동 계산됩니다</div>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="leaveReason">사유 *</label>
            <textarea id="leaveReason" class="form-control" rows="3" required>${leave?.reason || ''}</textarea>
          </div>
        </div>
      </div>
      
      <div class="modal-actions">
        <button type="button" class="btn btn--secondary" onclick="closeModal()">취소</button>
        <button type="submit" class="btn btn--primary">${submitText}</button>
      </div>
    </form>
  `;
  
  openModal(title, modalBody);
  
  // Auto-calculate days when dates change
  const startDateInput = document.getElementById('leaveStartDate');
  const endDateInput = document.getElementById('leaveEndDate');
  const daysInput = document.getElementById('leaveDays');
  
  function calculateDays() {
    const startDate = new Date(startDateInput.value);
    const endDate = new Date(endDateInput.value);
    
    if (startDate && endDate && startDate <= endDate) {
      const diffTime = endDate - startDate;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      daysInput.value = diffDays;
    }
  }
  
  startDateInput.addEventListener('change', calculateDays);
  endDateInput.addEventListener('change', calculateDays);
  
  // Trigger initial calculation if editing
  if (leave?.startDate && leave?.endDate) {
    calculateDays();
  }
}

function saveLeave(event, leaveId = null) {
  event.preventDefault();
  
  const teacherId = parseInt(document.getElementById('leaveTeacher').value);
  const teacher = appData.teachers.find(t => t.id === teacherId);
  
  const formData = {
    teacherId: teacherId,
    teacherName: teacher?.name || '',
    type: document.getElementById('leaveType').value,
    startDate: document.getElementById('leaveStartDate').value,
    endDate: document.getElementById('leaveEndDate').value,
    days: parseInt(document.getElementById('leaveDays').value) || 0,
    reason: document.getElementById('leaveReason').value.trim()
  };
  
  // Validate form
  if (!validateLeaveForm(formData, teacher)) {
    return;
  }
  
  if (leaveId) {
    // Update existing leave
    const leave = appData.leaveApplications.find(l => l.id === leaveId);
    if (leave) {
      Object.assign(leave, formData);
      showToast('휴가 신청이 수정되었습니다.', 'success');
    }
  } else {
    // Add new leave
    const newLeave = {
      id: nextId.leaveApplications++,
      ...formData,
      status: '승인대기',
      appliedDate: new Date().toISOString().split('T')[0],
      approvedDate: null,
      approver: null,
      rejectReason: null
    };
    
    appData.leaveApplications.push(newLeave);
    showToast('휴가 신청이 접수되었습니다.', 'success');
  }
  
  closeModal();
  renderLeavesTable();
  filterLeaves();
  renderPendingApprovals();
}

function validateLeaveForm(data, teacher) {
  let isValid = true;
  
  if (!data.teacherId) {
    showToast('신청자를 선택해주세요.', 'error');
    isValid = false;
  }
  
  if (!data.type) {
    showToast('휴가 종류를 선택해주세요.', 'error');
    isValid = false;
  }
  
  if (!data.startDate || !data.endDate) {
    showToast('휴가 기간을 입력해주세요.', 'error');
    isValid = false;
  } else if (new Date(data.startDate) > new Date(data.endDate)) {
    showToast('종료일이 시작일보다 빠를 수 없습니다.', 'error');
    isValid = false;
  }
  
  if (!data.reason) {
    showToast('휴가 사유를 입력해주세요.', 'error');
    isValid = false;
  }
  
  // Check if teacher has enough remaining leave days
  if (teacher && data.type === '연가' && data.days > teacher.remainingLeaveDays) {
    showToast(`잔여 연가일수(${teacher.remainingLeaveDays}일)가 부족합니다.`, 'error');
    isValid = false;
  }
  
  // Check for overlapping leave periods
  const hasOverlap = appData.leaveApplications.some(leave => 
    leave.teacherId === data.teacherId &&
    leave.status === '승인' &&
    !(new Date(data.endDate) < new Date(leave.startDate) || new Date(data.startDate) > new Date(leave.endDate))
  );
  
  if (hasOverlap) {
    showToast('선택한 기간에 이미 승인된 휴가가 있습니다.', 'error');
    isValid = false;
  }
  
  return isValid;
}

function editLeave(leaveId) {
  openLeaveForm(leaveId);
}

function deleteLeave(leaveId) {
  const leave = appData.leaveApplications.find(l => l.id === leaveId);
  if (!leave) return;
  
  if (leave.status !== '승인대기') {
    showToast('승인대기 상태의 신청서만 삭제할 수 있습니다.', 'error');
    return;
  }
  
  showConfirmDialog(
    `${leave.teacherName}의 ${leave.type} 신청을 삭제하시겠습니까?`,
    () => {
      appData.leaveApplications = appData.leaveApplications.filter(l => l.id !== leaveId);
      renderLeavesTable();
      filterLeaves();
      renderPendingApprovals();
      showToast('휴가 신청이 삭제되었습니다.', 'success');
    }
  );
}

function viewLeave(leaveId) {
  const leave = appData.leaveApplications.find(l => l.id === leaveId);
  if (!leave) return;
  
  const modalBody = `
    <div class="detail-grid">
      <div class="detail-row">
        <span class="detail-label">신청자</span>
        <span class="detail-value">${leave.teacherName}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">휴가종류</span>
        <span class="detail-value">${leave.type}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">신청일</span>
        <span class="detail-value">${formatDate(leave.appliedDate)}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">휴가기간</span>
        <span class="detail-value">${formatDateRange(leave.startDate, leave.endDate)}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">휴가일수</span>
        <span class="detail-value">${leave.days}일</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">사유</span>
        <span class="detail-value">${leave.reason}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">상태</span>
        <span class="detail-value">
          <span class="status-badge ${getStatusBadgeClass(leave.status)}">${leave.status}</span>
        </span>
      </div>
      ${leave.approvedDate ? `
        <div class="detail-row">
          <span class="detail-label">처리일</span>
          <span class="detail-value">${formatDate(leave.approvedDate)}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">처리자</span>
          <span class="detail-value">${leave.approver || '-'}</span>
        </div>
      ` : ''}
      ${leave.rejectReason ? `
        <div class="detail-row">
          <span class="detail-label">반려사유</span>
          <span class="detail-value">${leave.rejectReason}</span>
        </div>
      ` : ''}
    </div>
  `;
  
  openModal(`휴가 신청 상세`, modalBody);
}

// CRUD Functions - Absence Applications
function openAbsenceForm(absenceId = null) {
  const isEdit = absenceId !== null;
  const absence = isEdit ? appData.leaveOfAbsenceApplications.find(a => a.id === absenceId) : null;
  
  const title = isEdit ? '휴직 신청 수정' : '새 휴직 신청';
  const submitText = isEdit ? '수정' : '신청';
  
  const modalBody = `
    <form id="absenceForm" onsubmit="saveAbsence(event, ${absenceId})">
      <div class="form-section">
        <div class="form-section-title">휴직 정보</div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label" for="absenceTeacher">신청자 *</label>
            <select id="absenceTeacher" class="form-control" required ${isEdit ? 'disabled' : ''}>
              <option value="">교원 선택</option>
              ${appData.teachers.filter(t => t.status === '재직').map(teacher => 
                `<option value="${teacher.id}" ${absence?.teacherId === teacher.id ? 'selected' : ''}>${teacher.name} (${teacher.department})</option>`
              ).join('')}
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="absenceType">휴직 종류 *</label>
            <select id="absenceType" class="form-control" required>
              <option value="">휴직 종류 선택</option>
              ${Object.keys(config.absenceTypes).map(type => 
                `<option value="${type}" ${absence?.type === type ? 'selected' : ''}>${type}</option>`
              ).join('')}
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="absenceStartDate">시작일 *</label>
            <input type="date" id="absenceStartDate" class="form-control" value="${absence?.startDate || ''}" required>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="absenceEndDate">종료일 *</label>
            <input type="date" id="absenceEndDate" class="form-control" value="${absence?.endDate || ''}" required>
          </div>
          
          <div class="form-group" style="grid-column: 1 / -1;">
            <label class="form-label" for="absenceReason">사유 *</label>
            <textarea id="absenceReason" class="form-control" rows="4" required>${absence?.reason || ''}</textarea>
          </div>
        </div>
      </div>
      
      <div class="modal-actions">
        <button type="button" class="btn btn--secondary" onclick="closeModal()">취소</button>
        <button type="submit" class="btn btn--primary">${submitText}</button>
      </div>
    </form>
  `;
  
  openModal(title, modalBody);
}

function saveAbsence(event, absenceId = null) {
  event.preventDefault();
  
  const teacherId = parseInt(document.getElementById('absenceTeacher').value);
  const teacher = appData.teachers.find(t => t.id === teacherId);
  
  const formData = {
    teacherId: teacherId,
    teacherName: teacher?.name || '',
    type: document.getElementById('absenceType').value,
    startDate: document.getElementById('absenceStartDate').value,
    endDate: document.getElementById('absenceEndDate').value,
    reason: document.getElementById('absenceReason').value.trim()
  };
  
  // Basic validation
  if (!formData.teacherId || !formData.type || !formData.startDate || !formData.endDate || !formData.reason) {
    showToast('모든 필수 항목을 입력해주세요.', 'error');
    return;
  }
  
  if (new Date(formData.startDate) > new Date(formData.endDate)) {
    showToast('종료일이 시작일보다 빠를 수 없습니다.', 'error');
    return;
  }
  
  if (absenceId) {
    // Update existing absence
    const absence = appData.leaveOfAbsenceApplications.find(a => a.id === absenceId);
    if (absence) {
      Object.assign(absence, formData);
      showToast('휴직 신청이 수정되었습니다.', 'success');
    }
  } else {
    // Add new absence
    const newAbsence = {
      id: nextId.leaveOfAbsenceApplications++,
      ...formData,
      status: '승인대기',
      appliedDate: new Date().toISOString().split('T')[0],
      approvedDate: null,
      approver: null,
      documents: []
    };
    
    appData.leaveOfAbsenceApplications.push(newAbsence);
    showToast('휴직 신청이 접수되었습니다.', 'success');
  }
  
  closeModal();
  renderAbsencesTable();
  filterAbsences();
  renderPendingApprovals();
}

function editAbsence(absenceId) {
  openAbsenceForm(absenceId);
}

function deleteAbsence(absenceId) {
  const absence = appData.leaveOfAbsenceApplications.find(a => a.id === absenceId);
  if (!absence) return;
  
  if (absence.status !== '승인대기') {
    showToast('승인대기 상태의 신청서만 삭제할 수 있습니다.', 'error');
    return;
  }
  
  showConfirmDialog(
    `${absence.teacherName}의 ${absence.type} 신청을 삭제하시겠습니까?`,
    () => {
      appData.leaveOfAbsenceApplications = appData.leaveOfAbsenceApplications.filter(a => a.id !== absenceId);
      renderAbsencesTable();
      filterAbsences();
      renderPendingApprovals();
      showToast('휴직 신청이 삭제되었습니다.', 'success');
    }
  );
}

function viewAbsence(absenceId) {
  const absence = appData.leaveOfAbsenceApplications.find(a => a.id === absenceId);
  if (!absence) return;
  
  const modalBody = `
    <div class="detail-grid">
      <div class="detail-row">
        <span class="detail-label">신청자</span>
        <span class="detail-value">${absence.teacherName}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">휴직종류</span>
        <span class="detail-value">${absence.type}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">신청일</span>
        <span class="detail-value">${formatDate(absence.appliedDate)}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">휴직기간</span>
        <span class="detail-value">${formatDateRange(absence.startDate, absence.endDate)}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">사유</span>
        <span class="detail-value">${absence.reason}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">상태</span>
        <span class="detail-value">
          <span class="status-badge ${getStatusBadgeClass(absence.status)}">${absence.status}</span>
        </span>
      </div>
      ${absence.approvedDate ? `
        <div class="detail-row">
          <span class="detail-label">처리일</span>
          <span class="detail-value">${formatDate(absence.approvedDate)}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">처리자</span>
          <span class="detail-value">${absence.approver || '-'}</span>
        </div>
      ` : ''}
      ${absence.documents && absence.documents.length > 0 ? `
        <div class="detail-row">
          <span class="detail-label">첨부서류</span>
          <span class="detail-value">${absence.documents.join(', ')}</span>
        </div>
      ` : ''}
    </div>
  `;
  
  openModal(`휴직 신청 상세`, modalBody);
}

// CRUD Functions - Contract Teachers
function openContractForm(contractId = null) {
  const isEdit = contractId !== null;
  const contract = isEdit ? appData.contractTeachers.find(c => c.id === contractId) : null;
  
  const title = isEdit ? '기간제교원 정보 수정' : '기간제교원 등록';
  const submitText = isEdit ? '수정' : '등록';
  
  const modalBody = `
    <form id="contractForm" onsubmit="saveContract(event, ${contractId})">
      <div class="form-section">
        <div class="form-section-title">기본 정보</div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label" for="contractName">성명 *</label>
            <input type="text" id="contractName" class="form-control" value="${contract?.name || ''}" required>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="contractEmail">이메일 *</label>
            <input type="email" id="contractEmail" class="form-control" value="${contract?.email || ''}" required>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="contractPhone">연락처 *</label>
            <input type="tel" id="contractPhone" class="form-control" value="${contract?.phone || ''}" required>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="contractSubject">담당과목 *</label>
            <select id="contractSubject" class="form-control" required>
              <option value="">과목 선택</option>
              ${config.subjects.map(subject => 
                `<option value="${subject}" ${contract?.subject === subject ? 'selected' : ''}>${subject}</option>`
              ).join('')}
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="contractQualification">자격사항</label>
            <input type="text" id="contractQualification" class="form-control" value="${contract?.qualification || ''}">
          </div>
        </div>
      </div>
      
      <div class="form-section">
        <div class="form-section-title">계약 정보</div>
        <div class="form-grid">
          <div class="form-group">
            <label class="form-label" for="contractReason">임용사유 *</label>
            <select id="contractReason" class="form-control" required>
              <option value="">임용사유 선택</option>
              <option value="육아휴직 대체" ${contract?.contractReason === '육아휴직 대체' ? 'selected' : ''}>육아휴직 대체</option>
              <option value="질병휴직 대체" ${contract?.contractReason === '질병휴직 대체' ? 'selected' : ''}>질병휴직 대체</option>
              <option value="특정교과담당" ${contract?.contractReason === '특정교과담당' ? 'selected' : ''}>특정교과담당</option>
              <option value="결원보충" ${contract?.contractReason === '결원보충' ? 'selected' : ''}>결원보충</option>
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="contractReplacingTeacher">대체교원</label>
            <select id="contractReplacingTeacher" class="form-control">
              <option value="">해당없음</option>
              ${appData.teachers.filter(t => t.status !== '재직').map(teacher => 
                `<option value="${teacher.name}" ${contract?.replacingTeacher === teacher.name ? 'selected' : ''}>${teacher.name}</option>`
              ).join('')}
            </select>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="contractStartDate">계약시작일 *</label>
            <input type="date" id="contractStartDate" class="form-control" value="${contract?.contractStart || ''}" required>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="contractEndDate">계약종료일 *</label>
            <input type="date" id="contractEndDate" class="form-control" value="${contract?.contractEnd || ''}" required>
          </div>
        </div>
      </div>
      
      <div class="modal-actions">
        <button type="button" class="btn btn--secondary" onclick="closeModal()">취소</button>
        <button type="submit" class="btn btn--primary">${submitText}</button>
      </div>
    </form>
  `;
  
  openModal(title, modalBody);
}

function saveContract(event, contractId = null) {
  event.preventDefault();
  
  const formData = {
    name: document.getElementById('contractName').value.trim(),
    email: document.getElementById('contractEmail').value.trim(),
    phone: document.getElementById('contractPhone').value.trim(),
    subject: document.getElementById('contractSubject').value,
    qualification: document.getElementById('contractQualification').value.trim(),
    contractReason: document.getElementById('contractReason').value,
    replacingTeacher: document.getElementById('contractReplacingTeacher').value,
    contractStart: document.getElementById('contractStartDate').value,
    contractEnd: document.getElementById('contractEndDate').value
  };
  
  // Basic validation
  if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.contractReason || !formData.contractStart || !formData.contractEnd) {
    showToast('필수 항목을 모두 입력해주세요.', 'error');
    return;
  }
  
  if (new Date(formData.contractStart) > new Date(formData.contractEnd)) {
    showToast('계약종료일이 시작일보다 빠를 수 없습니다.', 'error');
    return;
  }
  
  if (contractId) {
    // Update existing contract
    const contract = appData.contractTeachers.find(c => c.id === contractId);
    if (contract) {
      Object.assign(contract, formData);
      // Update status based on end date
      const endDate = new Date(formData.contractEnd);
      const today = new Date();
      const daysUntilEnd = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
      
      if (daysUntilEnd < 0) {
        contract.status = '계약종료';
      } else if (daysUntilEnd <= 30) {
        contract.status = '계약만료예정';
      } else {
        contract.status = '재직중';
      }
      
      showToast('기간제교원 정보가 수정되었습니다.', 'success');
    }
  } else {
    // Add new contract
    const endDate = new Date(formData.contractEnd);
    const today = new Date();
    const daysUntilEnd = Math.ceil((endDate - today) / (1000 * 60 * 60 * 24));
    
    let status = '재직중';
    if (daysUntilEnd < 0) {
      status = '계약종료';
    } else if (daysUntilEnd <= 30) {
      status = '계약만료예정';
    }
    
    const newContract = {
      id: nextId.contractTeachers++,
      ...formData,
      status: status
    };
    
    appData.contractTeachers.push(newContract);
    showToast('기간제교원이 등록되었습니다.', 'success');
  }
  
  closeModal();
  renderContractTable();
  filterContracts();
  updateSummaryCards();
}

function editContract(contractId) {
  openContractForm(contractId);
}

function deleteContract(contractId) {
  const contract = appData.contractTeachers.find(c => c.id === contractId);
  if (!contract) return;
  
  showConfirmDialog(
    `${contract.name} 기간제교원을 삭제하시겠습니까?`,
    () => {
      appData.contractTeachers = appData.contractTeachers.filter(c => c.id !== contractId);
      renderContractTable();
      filterContracts();
      updateSummaryCards();
      showToast('기간제교원이 삭제되었습니다.', 'success');
    }
  );
}

function viewContract(contractId) {
  const contract = appData.contractTeachers.find(c => c.id === contractId);
  if (!contract) return;
  
  const modalBody = `
    <div class="detail-grid">
      <div class="detail-row">
        <span class="detail-label">성명</span>
        <span class="detail-value">${contract.name}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">이메일</span>
        <span class="detail-value">${contract.email}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">연락처</span>
        <span class="detail-value">${contract.phone}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">담당과목</span>
        <span class="detail-value">${contract.subject}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">자격사항</span>
        <span class="detail-value">${contract.qualification || '-'}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">임용사유</span>
        <span class="detail-value">${contract.contractReason}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">대체교원</span>
        <span class="detail-value">${contract.replacingTeacher || '-'}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">계약기간</span>
        <span class="detail-value">${formatDateRange(contract.contractStart, contract.contractEnd)}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">현재상태</span>
        <span class="detail-value">
          <span class="status-badge ${getStatusBadgeClass(contract.status)}">${contract.status}</span>
        </span>
      </div>
    </div>
  `;
  
  openModal(`${contract.name} 기간제교원 상세`, modalBody);
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

function showFieldError(fieldId, message) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(fieldId + 'Error');
  
  if (field && error) {
    field.classList.add('error');
    error.textContent = message;
    error.classList.add('show');
  }
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

// Make functions available globally
window.switchTab = switchTab;
window.openTeacherForm = openTeacherForm;
window.saveTeacher = saveTeacher;
window.editTeacher = editTeacher;
window.deleteTeacher = deleteTeacher;
window.viewTeacher = viewTeacher;
window.openLeaveForm = openLeaveForm;
window.saveLeave = saveLeave;
window.editLeave = editLeave;
window.deleteLeave = deleteLeave;
window.viewLeave = viewLeave;
window.openAbsenceForm = openAbsenceForm;
window.saveAbsence = saveAbsence;
window.editAbsence = editAbsence;
window.deleteAbsence = deleteAbsence;
window.viewAbsence = viewAbsence;
window.openContractForm = openContractForm;
window.saveContract = saveContract;
window.editContract = editContract;
window.deleteContract = deleteContract;
window.viewContract = viewContract;
window.approveApplication = approveApplication;
window.rejectApplication = rejectApplication;
window.closeModal = closeModal;
window.closeConfirmModal = closeConfirmModal;