const list = document.querySelector(".gallery");
const imgs = document.querySelectorAll(`img[loading="lazy"]`);
const guard = document.querySelector(".js-guard")
const options = {
    rootMargin: "100px",
    threshold: 0
}
const observer = new IntersectionObserver(onEntry, options)

function onEntry(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            guard.classList.add("move")
            guard.setAttribute("src", guard.getAttribute("data-src"))
            observer.unobserve(guard)
        }
    })
}
observer.observe(guard);