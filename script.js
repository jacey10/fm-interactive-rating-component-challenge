const ratingCard = document.getElementById('card');
const container = document.getElementById('btnContainer');
const submitBtn = document.getElementById('submitBtn');
const successBlock = document.getElementById('successPage');
const ratingNum = document.querySelector('.rating--number');

let selectedRating = 0;

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('rate--btn')) {
        const activeBtn = container.querySelector('.active');

        if (activeBtn === e.target) {
            activeBtn.classList.remove('active');
            submitBtn.setAttribute('aria-disabled', 'true');
            selectedRating = 0;
        } else {
            if (activeBtn) activeBtn.classList.remove('active');
            e.target.classList.add('active');
            submitBtn.removeAttribute('aria-disabled');
            selectedRating = Number(e.target.dataset.rate);
        }
    }
})

submitBtn.addEventListener('click', () => {
    if (selectedRating) {
        showSuccess();
    }
});

function showSuccess() {
    ratingCard.classList.add('hidden');
    successBlock.classList.remove('hidden');
    ratingNum.textContent = selectedRating;
}
