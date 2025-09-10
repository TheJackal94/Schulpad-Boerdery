// --- MODAL FUNCTIONALITY ---
const modalOverlay = document.getElementById('modal-overlay');
const recipeCards = document.querySelectorAll('.recipe-card');

// First, check if we are on a page that actually has modals
if (modalOverlay && recipeCards.length > 0) {
    const closeButtons = document.querySelectorAll('.close-btn');

    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        modalOverlay.classList.add('active');
    }

    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
    }

    recipeCards.forEach(card => {
        card.addEventListener('click', () => {
            const modal = document.querySelector(card.dataset.modalTarget);
            openModal(modal);
        });
    });

    modalOverlay.addEventListener('click', () => {
        const activeModal = document.querySelector('.modal.active');
        closeModal(activeModal);
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });
}


// --- INTERACTIVE GALLERY CODE ---
const galleryPhotos = document.querySelectorAll('.gallery-photo');

// Now, check if we are on a page that has a gallery
if (galleryPhotos.length > 0) {
    galleryPhotos.forEach(photo => {
        photo.addEventListener('click', () => {
            // First, remove 'active' class from any other photo
            galleryPhotos.forEach(p => {
                if (p !== photo) {
                    p.classList.remove('active');
                }
            });
            // Then, toggle the 'active' class on the clicked photo
            photo.classList.toggle('active');
        });
    });
}