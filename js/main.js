let up = document.querySelector(".up");

    window.onscroll = function () {
        if (window.scrollY >= 400) {
        up.style.display = "flex";
        } else {
        up.style.display = "none";
        }
    };

    up.onclick = function () {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };





const startTime = new Date('2025-06-08T12:11:00').getTime() ;

function updateTimer() {
    const now = new Date().getTime();
    const difference = now - startTime; 

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.querySelector('.days').textContent = days;
    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;
}

updateTimer(); 
setInterval(updateTimer, 1000); 

// error validation

const form = document.getElementById("contact-form")
const emailInput = document.getElementById("email")
const emailError = document.getElementById("email-error")
    form.addEventListener("submit" , function(e) {
        e.preventDefault();
        
        if(emailInput.value.trim () === "" ) {
            emailError.textContent = "Please Write Your E-mail";
            emailError.style.display = "block";
        }else {
            emailError.style.display="none";
            alert("Submitted successfully!")
            form.reset();
        }
    })

    // Smoth the-progress
window.addEventListener("load", function () {
    const spans = document.querySelectorAll(".the-progress span");

        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    });

    // change Images 
document.addEventListener("DOMContentLoaded" , function () {
    const imageLastItimes = document.querySelectorAll(".list ul li ");
    const previewImage = document.querySelector(".preview img");
    const previewInfo =  document.querySelector(".preview .info")

    const imageData = [
        { title: "team-01", image: "imgs/team-01.jpg" },
        { title: "team-02", image: "imgs/team-02.jpg" },
        { title: "Image preview", image: "imgs/video-preview.jpg" },
        { title: "cat-06", image: "imgs/cat-06.jpg" },
        { title: "cat-03", image: "imgs/cat-03.jpg" },
        { title: "cat-04", image: "imgs/cat-04.jpg" },
        { title: "cat-05", image: "imgs/cat-05.jpg" },
    ]

    imageLastItimes.forEach((item , index) => {
        item.addEventListener("click" ,function(){
            imageLastItimes.forEach((li) => li.classList.remove("active"))
            this.classList.add("active")
            previewImage.src = imageData[index].image;
            previewInfo.textContent = imageData[index].title
        })
    })
})

// Increament Number 

window.addEventListener("load" , function() {
    const Numbers = document.querySelectorAll(".stats .box .number");

    Numbers.forEach((num) => {
        let number = num.dataset.number;

        for(let i =0 ; i<= number ; i++){
            this.setTimeout(() => {
                num.textContent= i
            }, i * 10)  
        }
    })
})