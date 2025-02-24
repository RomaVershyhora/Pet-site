document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".backdrop");
    const openModalBtn = document.querySelector(".header-basket-contact button");
    const closeModalBtn = document.querySelector(".modal-btn-close");

    // Функція для відкриття модального вікна
    function openModal() {
        modal.classList.add("is-open");
    }

    // Функція для закриття модального вікна
    function closeModal() {
        modal.classList.remove("is-open");
    }

    // Відкриття при натисканні на кнопку "Contact us"
    openModalBtn.addEventListener("click", openModal);

    // Закриття при натисканні на кнопку "Close"
    closeModalBtn.addEventListener("click", closeModal);

    // Закриття при кліку на фон (backdrop)
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Закриття модального вікна при натисканні Escape
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && modal.classList.contains("is-open")) {
            closeModal();
        }
    });
});