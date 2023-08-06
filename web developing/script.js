const jobPostingsData = [
    { title: "Software Engineer", location: "Bangalore, India", type: "Full-time" },
    { title: "Product Manager", location: "Remote", type: "Contract" },
    // Add more job postings here
];

const jobApplicationsData = [
    { name: "John Doe", email: "john@example.com", position: "Data Scientist" },
    { name: "Jane Smith", email: "jane@example.com", position: "Front-end Developer" },
    // Add more job applications here
];

function createJobCard(job) {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");
    jobCard.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Type:</strong> ${job.type}</p>
        <button>Apply</button>
    `;
    return jobCard;
}

function createApplicationCard(application) {
    const applicationCard = document.createElement("div");
    applicationCard.classList.add("application-card");
    applicationCard.innerHTML = `
        <h3>${application.name}</h3>
        <p><strong>Email:</strong> ${application.email}</p>
        <p><strong>Position:</strong> ${application.position}</p>
    `;
    return applicationCard;
}

const jobList = document.querySelector(".job-list");
const applicationsList = document.querySelector(".applications-list");

// Populate job postings and applications dynamically
jobPostingsData.forEach((job) => {
    jobList.appendChild(createJobCard(job));
});

jobApplicationsData.forEach((application) => {
    applicationsList.appendChild(createApplicationCard(application));
});

