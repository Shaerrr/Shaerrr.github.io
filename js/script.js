// Tailwind CSS 커스텀 설정 (선택 사항)
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'Noto Sans KR', 'sans-serif'],
            },
        },
    },
}

// 모바일 메뉴 등 상호작용 관련 자바스크립트는 여기에 추가하세요.
document.addEventListener('DOMContentLoaded', () => {
    // 경력 기간 동적 계산 (2025.07을 기준으로 현재 월까지)
    const startDate = new Date(2025, 6); // 2025년 7월 (자바스크립트 Date에서 월은 0부터 시작하므로 6)
    const today = new Date();
    
    let months = (today.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += today.getMonth();
    
    // 시작 월도 1개월로 포함
    months += 1;
    
    if (months < 1) months = 1;
    
    const durationElement = document.getElementById('experience-duration');
    if (durationElement) {
        durationElement.textContent = `(총 ${months}개월)`;
    }
});

// 이메일 모달 열기
function openEmailModal() {
    const modal = document.getElementById('emailModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

// 이메일 모달 닫기
function closeEmailModal() {
    const modal = document.getElementById('emailModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

// 이메일 복사 기능
function copyEmail() {
    const emailText = document.getElementById('modalEmailText').innerText;
    navigator.clipboard.writeText(emailText).then(() => {
        const toast = document.getElementById('copyToast');
        if (toast) {
            toast.classList.remove('opacity-0');
            setTimeout(() => {
                toast.classList.add('opacity-0');
            }, 2000);
        }
    }).catch(err => {
        console.error('클립보드 복사 실패:', err);
        alert('복사에 실패했습니다. 직접 텍스트를 선택하여 복사해주세요.');
    });
}

// 모달 외부 클릭시 닫기
document.addEventListener('click', (e) => {
    const modal = document.getElementById('emailModal');
    if (modal && !modal.classList.contains('hidden')) {
        // 모달 배경인 최상단 div를 클릭했을 때만 닫기 (내용 클릭시는 유지)
        if (e.target === modal) {
            closeEmailModal();
        }
    }
});
