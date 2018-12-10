barModal = document.getElementsByClassName('bar-modal')[0];

var checkBox = barModal.querySelector('input[type="checkbox"]');

window.onclick = function(event) {
    if (event.target === barModal) {
        barModal.style.display = "none";
    }
};

function closeModal() {
    barModal.style.display = "none";
}

function onDeadlineChange(deadline) {
    if (deadline.value !== '') {
        const deadlineDate = new Date(deadline.value);
        if (checkBox.checked) {
            addClassToElement(deadline, 'task-done');
        } else {
            const isWaringDate = Math.abs(Number.parseInt((new Date() - deadlineDate) / (3600 * 24 * 1000))) === 0;
            if (isWaringDate && deadlineDate > new Date()) {
                addClassToElement(deadline, 'warning');
            } else if (deadlineDate < new Date()) {
                addClassToElement(deadline, 'overdue');
            } else {
                addClassToElement(deadline);
            }
        }
    } else {
        addClassToElement(deadline);
    }
}

// thêm 1 class vào phần tử, nếu không có class nào được thêm thì chỉ gỡ bỏ
function addClassToElement(element, className=null) {
    for (let i of element.classList.values()) {
        element.classList.remove(i);
    }
    element.classList.add(className);
}

function removeHidden(btnBlock) {
    btnBlock.classList.remove('hidden')
}

function cancelInput(cancelBtn) {
    cancelBtn.parentElement.classList.add('hidden');
}