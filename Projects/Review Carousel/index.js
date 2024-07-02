document.addEventListener('DOMContentLoaded', () => {
    const reviews = [
        {
            name: "John Doe",
            rating: 5,
            comment: "Amazing product! Highly recommend it."
        },
        {
            name: "Jane Smith",
            rating: 4,
            comment: "Good product, but could be better."
        },
        {
            name: "Peter Jones",
            rating: 3,
            comment: "Okay product, nothing special."
        }
    ];

    const reviewContainer = document.getElementById('review-container');
    const generateReviewButton = document.getElementById('generate-review');

    function displayReview(review) {
        reviewContainer.innerHTML = '';
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <h3>${review.name}</h3>
            <p>Rating: ${review.rating}/5</p>
            <p>${review.comment}</p>
        `;
        reviewContainer.appendChild(reviewElement);
    }

    function generateRandomReview() {
        const randomIndex = Math.floor(Math.random() * reviews.length);
        const randomReview = reviews[randomIndex];
        displayReview(randomReview);
    }

    generateReviewButton.addEventListener('click', generateRandomReview);

    // Display an initial review on load
    generateRandomReview();
});