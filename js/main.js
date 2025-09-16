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


// --- INTERACTIVE GALLERY LIGHTBOX CODE ---
const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxOverlay = document.getElementById('lightbox-overlay');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCloseBtn = document.getElementById('lightbox-close-btn');

// Check if we are on a page with a gallery
if (galleryItems.length > 0) {
    galleryItems.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault(); // Prevents the link from navigating away
            const imageUrl = item.getAttribute('href');
            lightboxImage.setAttribute('src', imageUrl);
            lightboxOverlay.style.display = 'flex';
        });
    });

    // Function to close the lightbox
    const closeLightbox = () => {
        lightboxOverlay.style.display = 'none';
    };

    // Close by clicking the button or the overlay
    lightboxCloseBtn.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', e => {
        // Only close if the dark overlay itself is clicked, not the image
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });
}