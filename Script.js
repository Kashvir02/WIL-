// COURSE DATA
const courses = {
  firstAid: "Learn essential lifesaving skills including CPR and wound treatment.",
  sewing: "Master the art of sewing — from basic stitching to creating garments.",
  lifeSkills: "Develop communication, budgeting, and emotional intelligence.",
  landscaping: "Design and maintain beautiful outdoor spaces.",
  childMinding: "Gain skills to care for children safely and effectively.",
  gardenMaintenance: "Learn tools and techniques for a thriving garden.",
  cooking: "Cook healthy, delicious meals with confidence."
};

// ADD CLICK FUNCTION TO COURSE CARDS
document.querySelectorAll(".course-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = card.dataset.course;
    showCourseDetails(id);
  });
});

// SHOW COURSE SUMMARY
function showCourseDetails(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
  const summarySection = document.getElementById("courseSummary");
  summarySection.classList.remove("hidden");
  document.getElementById("courseTitle").textContent = id.replace(/([A-Z])/g, " $1");
  document.getElementById("courseDescription").textContent = courses[id];
}

// BACK BUTTON FUNCTION
function goBack() {
  document.getElementById("courseSummary").classList.add("hidden");
  document.getElementById("sixMonth").classList.remove("hidden");
  document.getElementById("sixWeek").classList.remove("hidden");
  document.getElementById("fees").classList.remove("hidden");
  document.getElementById("contact").classList.remove("hidden");
  document.getElementById("home").classList.remove("hidden");
}

// FEE CALCULATION WITH ERROR HANDLING 
document.getElementById("feeForm").addEventListener("submit", e => ;
  e.preventDefault();
  const type = document.getElementById("courseType").value;
  const num = parseInt(document.getElementById("numCourses").value);
  const totalFee = document.getElementById("totalFee");

  try {
    if (!type || isNaN(num) || num < 1)
      throw new Error("Please select course type and valid number of courses.");
    // Original (Line 50)
let fee = type == "6month" ? 1200 : 500 * num; 

// Suggestion: Check 'type' against a valid list or use a switch for clarity
// Example:
/*
let fee;
if (type === "6month") {
    fee = 1200;
} else if (type === "12month") { // Hypothetical second valid type
    fee = 900 * num;
} else {
    // This case should probably also throw an error or set fee to 0
    // for safer logic.
    fee = 0; 
}
*/
};
