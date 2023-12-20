// масив зображень
const imgs = document.querySelectorAll(`img[loading="lazy"]`);
// налаштування
const options = {
    rootMargin: "100px",
    threshold: 0
}
// екземпляр обзервер
const observer = new IntersectionObserver(onEntry, options)
// колбек для обсервера
function onEntry(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target
            image.classList.add("move")
            image.setAttribute("src", image.getAttribute("data-src"))
            observer.unobserve(image)
        }
    })
}
// підключення спостерігача для кожного елементу масиву
imgs.forEach(img => observer.observe(img))