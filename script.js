const slides = [
    {
        type: "image",
        src: "images/photo1.jpg",
        alt: "الذكرى الأولى"
    },
    {
        type: "image",
        src: "images/photo2.jpg",
        alt: "الذكرى الثانية"
    },
    {
        type: "image",
        src: "images/photo3.jpg",
        alt: "الذكرى الثالثة"
    },
    {
        type: "image",
        src: "images/photo4.jpg",
        alt: "الذكرى الرابعة"
    },
    {
        type: "image",
        src: "images/photo5.jpg",
        alt: "الذكرى الخامسة"
    },
    {
        type: "video",
        src: "videos/memory.mp4",
        alt: "فيديو ذكرياتنا"
    }
];

const image = document.getElementById("memoryImage");
const video = document.getElementById("memoryVideo");
const counter = document.getElementById("photoCounter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;

function showSlide(index) {
    // التنقل بين أول وآخر شريحة
    currentSlide = (index + slides.length) % slides.length;

    const slide = slides[currentSlide];

    // إيقاف الفيديو فقط عند تغيير الشريحة
    // من غير إيقاف الأغنية
    video.pause();

    if (slide.type === "image") {
        video.hidden = true;
        image.hidden = false;

        image.src = slide.src;
        image.alt = slide.alt;
    } else {
        image.hidden = true;
        video.hidden = false;

        const source = video.querySelector("source");

        if (source.getAttribute("src") !== slide.src) {
            source.setAttribute("src", slide.src);
            video.load();
        }
    }

    // تحديث عداد الذكريات
    counter.textContent =
        `${currentSlide + 1} / ${slides.length}`;
}

// الذكرى السابقة
prevBtn.addEventListener("click", function () {
    showSlide(currentSlide - 1);
});

// الذكرى التالية
nextBtn.addEventListener("click", function () {
    showSlide(currentSlide + 1);
});

// عرض أول صورة عند فتح الصفحة
showSlide(0);