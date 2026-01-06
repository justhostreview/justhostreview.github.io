// assets/js/compare-img.js

/**
 * 打开模态框显示放大的图片
 * @param {Element} element - 被点击的图片元素
 */
function openModal(element) {
    const img = element.querySelector('img');
    const label = element.querySelector('.image-label');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    
    if (!modal || !modalImg || !modalTitle) {
        console.error('Modal elements not found');
        return;
    }
    
    modalImg.src = img.src;
    modalImg.alt = img.alt;
    modalTitle.textContent = label.textContent;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

/**
 * 关闭模态框
 * @param {Event} event - 点击事件
 */
function closeModal(event) {
    // 如果点击的不是模态框本身，则返回
    if (event && event.target.id !== 'imageModal') {
        return;
    }
    
    const modal = document.getElementById('imageModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/**
 * 监听 ESC 键关闭模态框
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

/**
 * 防止模态框内容的点击事件冒泡
 */
document.addEventListener('DOMContentLoaded', () => {
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});