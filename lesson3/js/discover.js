//Getting images with data-src attribute
const images = document.querySelectorAll ("[data-src]");

//For intersectional observation
const imgOptions = {
    threshold: 1,
    rootMargin:"0px 0px -500px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () =>{
        image.removeAttribute("data-src");};
};

//for external intersection observer is supported
if ("intersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items, 
        imgObserver) => {
        items.forEach(item => {
            if (!item.isIntersecting) {
                return;
            } else{
                preloadImage(item.target);
                imgObserver.unobserve(item.target);
        
            }
        });
    }, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);

});
}