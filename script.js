
// Customer reviews data

const reviews = [
    {
        name: "John Smith",
        role: "Web Developer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
        comment: "Amazing service! The team was professional, helpful, and delivered excellent results."
    },
    {
        name: "Sarah Johnson",
        role: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 5,
        comment: "I had a wonderful experience. Everything was smooth and the quality exceeded my expectations."
    },
    {
        name: "Michael Brown",
        role: "Business Owner",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
        rating: 5,
        comment: "Highly recommended! Great communication and outstanding results. I would work with them again."
    },
    {
        name: "Emily Davis",
        role: "Marketing Manager",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 4,
        comment: "Very professional service and a friendly team. I am happy with the results."
    },
    {
        name: "David Wilson",
        role: "Software Engineer",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        rating: 5,
        comment: "Excellent experience from beginning to end. Everything was delivered on time."
    },
    {
        name: "Jessica Taylor",
        role: "Entrepreneur",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 4,
        comment: "Great quality and excellent customer support. Definitely recommended!"
    }
];

// Select HTML elements

const reviewCards = document.getElementById("reviewCards");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Current starting position

let currentIndex = 0;

// Display three reviews

function displayReviews() {

    reviewCards.innerHTML = "";

    for (let i = 0; i < 3; i++) {

        const review = reviews[(currentIndex + i) % reviews.length];

        const card = document.createElement("div");

        card.className = "review-card";

        const image = document.createElement("img");
        image.src = review.image;
        image.alt = review.name;

        const name = document.createElement("h3");
        name.textContent = review.name;

        const role = document.createElement("p");
        role.className = "role";
        role.textContent = review.role;

        const stars = document.createElement("div");
        stars.className = "stars";
        stars.textContent =
            "★".repeat(review.rating) +
            "☆".repeat(5 - review.rating);

        const comment = document.createElement("p");
        comment.className = "comment";
        comment.textContent = review.comment;

        card.append(image, name, role, stars, comment);

        reviewCards.appendChild(card);
    }
}

// Next button

nextBtn.addEventListener("click", function() {

    currentIndex = (currentIndex + 1) % reviews.length;

    displayReviews();

});

// Previous button

prevBtn.addEventListener("click", function() {

    currentIndex =
        (currentIndex - 1 + reviews.length) % reviews.length;

    displayReviews();

});

// Initial display

displayReviews();
