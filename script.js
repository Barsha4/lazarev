function navAnimation() {
    var nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
        .to(".nav-part2 h5", {
            display: "block",
            duration: 0.05
        })
        .to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        });
    });

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();

        tl.to(".nav-part2 h5 span", {
            y: 27,
            stagger: {
                amount: 0.1
            }
        })
        .to(".nav-part2 h5", {
            opacity: 0,
            duration: 0.1,
            onComplete: function() {
                document.querySelectorAll(".nav-part2 h5").forEach(el => el.style.display = "none");
            }
        })
        .to("#nav-bottom", {
            height: 0,
            duration: 0.1,
            delay:0
        });
    });
}

navAnimation();
