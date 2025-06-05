// 공통 함수들

// 인증 확인
function checkAuth() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// 사이드바 토글
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// 로그아웃
function logout() {
    if (confirm('정말 나갈거에요?')) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userEmail');
        window.location.href = 'index.html';
    }
}

// 날짜 포맷팅
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR');
}

// 숫자 포맷팅 (천단위 콤마)
function formatNumber(number) {
    return number.toLocaleString('ko-KR');
}

// 모달 외부 클릭 시 닫기
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
        }
        
        const activeSidebar = document.querySelector('.sidebar.active');
        if (activeSidebar) {
            toggleSidebar();
        }
    }
});
