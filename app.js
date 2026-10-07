/**
 * QuestMaster Worksheet - Core Application Logic
 * Senior Frontend Architecture with Fisher-Yates Randomization,
 * Dynamic State Tracking, Radio Buttons, Multi-Select Checkboxes,
 * Short Answers, ~20 Words Long Answers with Live Word Counter & Auto-Grading.
 */

// Master Question Database
const QUESTIONS_DATABASE = [
  // ==========================================
  // SECTION 1: RADIO BUTTON QUESTIONS (Single Choice)
  // ==========================================
  {
    id: "rad_math_1",
    part: "part1",
    partName: "Single Choice",
    subject: "math",
    subjectName: "Mathematics",
    type: "radio",
    question: "What is the lowest common multiple (LCM) of 4 and 6?",
    options: [
      { text: "12", isCorrect: true },
      { text: "24", isCorrect: false },
      { text: "10", isCorrect: false },
      { text: "2", isCorrect: false }
    ],
    explanation: "Multiples of 4: 4, 8, 12, 16... Multiples of 6: 6, 12, 18... The lowest common multiple is 12."
  },
  {
    id: "rad_math_2",
    part: "part1",
    partName: "Single Choice",
    subject: "math",
    subjectName: "Mathematics",
    type: "radio",
    question: "Which of the following fractions is equivalent to 0.75?",
    options: [
      { text: "1/4", isCorrect: false },
      { text: "1/2", isCorrect: false },
      { text: "3/4", isCorrect: true },
      { text: "4/5", isCorrect: false }
    ],
    explanation: "0.75 = 75/100 = 3/4."
  },
  {
    id: "rad_math_3",
    part: "part1",
    partName: "Single Choice",
    subject: "math",
    subjectName: "Mathematics",
    type: "radio",
    question: "If x = 5, what is the value of the expression 3x + 2?",
    options: [
      { text: "10", isCorrect: false },
      { text: "15", isCorrect: false },
      { text: "17", isCorrect: true },
      { text: "20", isCorrect: false }
    ],
    explanation: "Substitute x = 5: 3(5) + 2 = 15 + 2 = 17."
  },
  {
    id: "rad_math_4",
    part: "part1",
    partName: "Single Choice",
    subject: "math",
    subjectName: "Mathematics",
    type: "radio",
    question: "What is the area of a square with a side length of 8 cm?",
    options: [
      { text: "16 cm²", isCorrect: false },
      { text: "32 cm²", isCorrect: false },
      { text: "64 cm²", isCorrect: true },
      { text: "128 cm²", isCorrect: false }
    ],
    explanation: "Area of a square = side² = 8 cm × 8 cm = 64 cm²."
  },
  {
    id: "rad_sci_1",
    part: "part1",
    partName: "Single Choice",
    subject: "science",
    subjectName: "Science",
    type: "radio",
    question: "Which part of the plant is primarily responsible for photosynthesis?",
    options: [
      { text: "Roots", isCorrect: false },
      { text: "Stem", isCorrect: false },
      { text: "Leaf", isCorrect: true },
      { text: "Flower", isCorrect: false }
    ],
    explanation: "Leaves contain chlorophyll which captures solar energy for photosynthesis."
  },
  {
    id: "rad_sci_2",
    part: "part1",
    partName: "Single Choice",
    subject: "science",
    subjectName: "Science",
    type: "radio",
    question: "What is the standard boiling point of water at sea level?",
    options: [
      { text: "50°C", isCorrect: false },
      { text: "90°C", isCorrect: false },
      { text: "100°C", isCorrect: true },
      { text: "120°C", isCorrect: false }
    ],
    explanation: "At standard atmospheric pressure (1 atm), water boils at 100°C."
  },
  {
    id: "rad_sci_3",
    part: "part1",
    partName: "Single Choice",
    subject: "science",
    subjectName: "Science",
    type: "radio",
    question: "Which of the following is a renewable source of energy?",
    options: [
      { text: "Coal", isCorrect: false },
      { text: "Solar power", isCorrect: true },
      { text: "Natural gas", isCorrect: false },
      { text: "Petroleum", isCorrect: false }
    ],
    explanation: "Solar power is inexhaustible and naturally replenished daily."
  },
  {
    id: "rad_sci_4",
    part: "part1",
    partName: "Single Choice",
    subject: "science",
    subjectName: "Science",
    type: "radio",
    question: "Which planet is closest to the Sun?",
    options: [
      { text: "Venus", isCorrect: false },
      { text: "Mercury", isCorrect: true },
      { text: "Mars", isCorrect: false },
      { text: "Earth", isCorrect: false }
    ],
    explanation: "Mercury orbits closest to the Sun in our Solar System."
  },

  // ==========================================
  // SECTION 2: MULTI-SELECT CHECKBOX QUESTIONS (Multiple Choices)
  // ==========================================
  {
    id: "mul_math_1",
    part: "part2",
    partName: "Multiple Choices",
    subject: "math",
    subjectName: "Mathematics",
    type: "multi",
    question: "Select ALL numbers from the list below that are factors of 24:",
    options: [
      { text: "3", isCorrect: true },
      { text: "5", isCorrect: false },
      { text: "8", isCorrect: true },
      { text: "12", isCorrect: true }
    ],
    explanation: "Factors of 24 are 1, 2, 3, 4, 6, 8, 12, and 24. 5 is not a factor because 24 is not divisible by 5."
  },
  {
    id: "mul_math_2",
    part: "part2",
    partName: "Multiple Choices",
    subject: "math",
    subjectName: "Mathematics",
    type: "multi",
    question: "Which of the following geometric figures are quadrilaterals (have exactly four sides)?",
    options: [
      { text: "Rectangle", isCorrect: true },
      { text: "Trapezoid", isCorrect: true },
      { text: "Triangle", isCorrect: false },
      { text: "Rhombus", isCorrect: true }
    ],
    explanation: "Rectangles, trapezoids, and rhombuses each have 4 sides. Triangles have 3 sides."
  },
  {
    id: "mul_sci_1",
    part: "part2",
    partName: "Multiple Choices",
    subject: "science",
    subjectName: "Science",
    type: "multi",
    question: "Which of the following are warm-blooded (endothermic) animals?",
    options: [
      { text: "Birds", isCorrect: true },
      { text: "Mammals", isCorrect: true },
      { text: "Reptiles", isCorrect: false },
      { text: "Amphibians", isCorrect: false }
    ],
    explanation: "Mammals and birds regulate their own internal body temperature (warm-blooded), while reptiles and amphibians are ectothermic (cold-blooded)."
  },
  {
    id: "mul_sci_2",
    part: "part2",
    partName: "Multiple Choices",
    subject: "science",
    subjectName: "Science",
    type: "multi",
    question: "Select ALL of the following that act as greenhouse gases in Earth's atmosphere:",
    options: [
      { text: "Carbon dioxide (CO₂)", isCorrect: true },
      { text: "Methane (CH₄)", isCorrect: true },
      { text: "Water vapor (H₂O)", isCorrect: true },
      { text: "Argon gas (Ar)", isCorrect: false }
    ],
    explanation: "Carbon dioxide, methane, and water vapor absorb infrared thermal radiation. Argon is an inert gas and not a greenhouse gas."
  },

  // ==========================================
  // SECTION 3: SHORT ANSWER QUESTIONS (Text Input)
  // ==========================================
  {
    id: "sht_math_1",
    part: "part3",
    partName: "Short Answer",
    subject: "math",
    subjectName: "Mathematics",
    type: "short",
    question: "A shop sells pens for $2 each. If Sarah buys 5 pens and gives the cashier a $20 bill, how much change should she receive?",
    placeholder: "Type your answer (e.g., $10 or 10)...",
    expectedAnswerDisplay: "$10",
    checkAnswer: (val) => {
      const clean = val.replace(/[\$\s,]/g, "").toLowerCase();
      return clean === "10" || clean === "10dollars" || clean === "tendollars";
    },
    explanation: "5 pens × $2 = $10. Change received = $20 - $10 = $10."
  },
  {
    id: "sht_math_2",
    part: "part3",
    partName: "Short Answer",
    subject: "math",
    subjectName: "Mathematics",
    type: "short",
    question: "Simplify the following algebraic expression: 4y + 7y - 3y.",
    placeholder: "Type simplified expression (e.g., 8y)...",
    expectedAnswerDisplay: "8y",
    checkAnswer: (val) => {
      const clean = val.replace(/[\s\*]/g, "").toLowerCase();
      return clean === "8y" || clean === "8*y";
    },
    explanation: "(4 + 7 - 3)y = 8y."
  },
  {
    id: "sht_math_3",
    part: "part3",
    partName: "Short Answer",
    subject: "math",
    subjectName: "Mathematics",
    type: "short",
    question: "A triangle has a base of 10 cm and a height of 6 cm. Calculate its area.",
    placeholder: "Type area value (e.g., 30 or 30 cm²)...",
    expectedAnswerDisplay: "30 cm²",
    checkAnswer: (val) => {
      const clean = val.replace(/[\s]/g, "").toLowerCase();
      return clean.includes("30");
    },
    explanation: "Area of triangle = 0.5 × base × height = 0.5 × 10 × 6 = 30 cm²."
  },
  {
    id: "sht_sci_1",
    part: "part3",
    partName: "Short Answer",
    subject: "science",
    subjectName: "Science",
    type: "short",
    question: "Name the three fundamental states of matter.",
    placeholder: "Type states (e.g., solid, liquid, gas)...",
    expectedAnswerDisplay: "Solid, Liquid, Gas",
    checkAnswer: (val) => {
      const lower = val.toLowerCase();
      return lower.includes("solid") && lower.includes("liquid") && lower.includes("gas");
    },
    explanation: "The three primary classic states of matter are Solid, Liquid, and Gas."
  },
  {
    id: "sht_sci_2",
    part: "part3",
    partName: "Short Answer",
    subject: "science",
    subjectName: "Science",
    type: "short",
    question: "What is the name of the force that pulls objects towards the center of the Earth?",
    placeholder: "Type the name of the force...",
    expectedAnswerDisplay: "Gravity (or Gravitational force)",
    checkAnswer: (val) => {
      const lower = val.trim().toLowerCase();
      return lower.includes("gravit");
    },
    explanation: "Gravity is the attractive force exerted by Earth on all physical objects."
  },

  // ==========================================
  // SECTION 4: ~20 WORDS LONG ANSWER QUESTIONS (Textarea with live word count)
  // ==========================================
  {
    id: "esy_math_1",
    part: "part4",
    partName: "~20 Words Answer",
    subject: "math",
    subjectName: "Mathematics",
    type: "essay",
    targetWords: 20,
    question: "Explain in your own words the step-by-step method to calculate the perimeter of any rectangle. (Write approximately 20 words)",
    placeholder: "To find the perimeter of a rectangle, measure the length and width, add them together, and multiply the sum by two...",
    expectedAnswerDisplay: "To calculate the perimeter of a rectangle, measure its length and width, add them together, then multiply the total by two (approx 20 words).",
    checkAnswer: (val) => {
      const words = val.trim().split(/\s+/).filter(Boolean);
      if (words.length < 12) return false;
      const lower = val.toLowerCase();
      const hasLengthWidth = lower.includes("length") || lower.includes("width") || lower.includes("side");
      const hasOperation = lower.includes("add") || lower.includes("sum") || lower.includes("multiply") || lower.includes("two") || lower.includes("2");
      return hasLengthWidth && hasOperation;
    },
    explanation: "Formula: Perimeter = 2 × (Length + Width). Add the adjacent sides and multiply by 2 to find total boundary distance."
  },
  {
    id: "esy_sci_1",
    part: "part4",
    partName: "~20 Words Answer",
    subject: "science",
    subjectName: "Science",
    type: "essay",
    targetWords: 20,
    question: "Explain why water is vital for all living organisms and their cellular functions. (Write approximately 20 words)",
    placeholder: "Water is essential because it hydrates cells, regulates internal body temperature, facilitates chemical reactions, and transports vital nutrients throughout the organism...",
    expectedAnswerDisplay: "Water hydrates cells, regulates body temperature, facilitates biochemical reactions, and transports essential nutrients required for the survival of all living organisms.",
    checkAnswer: (val) => {
      const words = val.trim().split(/\s+/).filter(Boolean);
      if (words.length < 12) return false;
      const lower = val.toLowerCase();
      const keywords = ["cell", "hydrate", "temperature", "transport", "nutrient", "reaction", "surviv", "life", "organism", "body"];
      const matches = keywords.filter(k => lower.includes(k)).length;
      return matches >= 2;
    },
    explanation: "Water dissolves and moves nutrients, maintains homeostasis, stabilizes temperature, and acts as the medium for cellular metabolism."
  },
  {
    id: "esy_sci_2",
    part: "part4",
    partName: "~20 Words Answer",
    subject: "science",
    subjectName: "Science",
    type: "essay",
    targetWords: 20,
    question: "Briefly explain what an ecosystem is and how its components interact. (Write approximately 20 words)",
    placeholder: "An ecosystem is a biological community where living plants and animals interact continuously with non-living elements like water, air, and soil...",
    expectedAnswerDisplay: "An ecosystem is a dynamic community where living organisms such as plants and animals interact with each other and their nonliving physical environment.",
    checkAnswer: (val) => {
      const words = val.trim().split(/\s+/).filter(Boolean);
      if (words.length < 12) return false;
      const lower = val.toLowerCase();
      const keywords = ["living", "non-living", "environment", "organism", "community", "interact", "plant", "animal", "physical"];
      const matches = keywords.filter(k => lower.includes(k)).length;
      return matches >= 2;
    },
    explanation: "An ecosystem consists of biotic (living) and abiotic (physical) components continually exchanging matter and energy."
  }
];

// App State Management
class WorksheetApp {
  constructor() {
    this.currentQuestions = [];
    this.userAnswers = {}; // { questionId: value | array of values }
    this.isSubmitted = false;
    this.timerSeconds = 0;
    this.timerInterval = null;
    this.currentFilter = "all";

    // DOM Elements
    this.container = document.getElementById("worksheetContainer");
    this.progressBar = document.getElementById("progressBar");
    this.progressPercentage = document.getElementById("progressPercentage");
    this.answeredCountElem = document.getElementById("answeredCount");
    this.totalQuestionsCountElem = document.getElementById("totalQuestionsCount");
    this.timerTextElem = document.getElementById("timerText");
    this.shuffleBtn = document.getElementById("shuffleBtn");
    this.printBtn = document.getElementById("printBtn");
    this.clearAnswersBtn = document.getElementById("clearAnswersBtn");
    this.submitWorksheetBtn = document.getElementById("submitWorksheetBtn");
    this.resultsModal = document.getElementById("resultsModal");
    this.closeModalBtn = document.getElementById("closeModalBtn");
    this.reviewAnswersBtn = document.getElementById("reviewAnswersBtn");
    this.retryWorksheetBtn = document.getElementById("retryWorksheetBtn");

    this.init();
  }

  init() {
    this.bindEvents();
    this.startTimer();
    this.loadAndShuffleWorksheet();
  }

  /**
   * Fisher-Yates Shuffling Algorithm
   */
  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  /**
   * Initializes question order and options order
   */
  loadAndShuffleWorksheet() {
    // Deep clone questions
    const cloned = QUESTIONS_DATABASE.map(q => {
      const item = { ...q };
      if ((item.type === "radio" || item.type === "multi") && item.options) {
        item.options = this.shuffleArray(item.options);
      }
      return item;
    });

    // Shuffle questions
    this.currentQuestions = this.shuffleArray(cloned);

    // Reset answers
    this.userAnswers = {};
    this.isSubmitted = false;

    // Update counts & render
    this.totalQuestionsCountElem.textContent = this.currentQuestions.length;
    this.renderWorksheet();
    this.updateProgress();

    this.showToast("🔀 Questions & Options successfully shuffled!");
  }

  /**
   * Count words in a string
   */
  countWords(text) {
    if (!text) return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  /**
   * Render Questions based on active filter
   */
  renderWorksheet() {
    this.container.innerHTML = "";

    const filtered = this.currentQuestions.filter(q => {
      if (this.currentFilter === "all") return true;
      if (this.currentFilter === "radio") return q.type === "radio";
      if (this.currentFilter === "multi") return q.type === "multi";
      if (this.currentFilter === "short") return q.type === "short";
      if (this.currentFilter === "essay") return q.type === "essay";
      if (this.currentFilter === "math") return q.subject === "math";
      if (this.currentFilter === "science") return q.subject === "science";
      return true;
    });

    if (filtered.length === 0) {
      this.container.innerHTML = `
        <div class="loading-state">
          <p>No questions found for this filter.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((q, index) => {
      const isAnswered = this.isQuestionAnswered(q.id);
      const card = document.createElement("article");
      card.className = `question-card ${isAnswered ? "answered" : ""}`;
      card.id = `card_${q.id}`;
      card.dataset.questionId = q.id;

      // Badges
      const subjectTagClass = q.subject === "math" ? "tag-subject-math" : "tag-subject-science";
      const subjectIcon = q.subject === "math" ? "📐 Math" : "🔬 Science";

      let typeTagClass = "tag-type-radio";
      let typeLabel = "🔘 Radio (Single Choice)";
      if (q.type === "multi") {
        typeTagClass = "tag-type-multi";
        typeLabel = "☑️ Multi-Select";
      } else if (q.type === "short") {
        typeTagClass = "tag-type-short";
        typeLabel = "✍️ Short Answer";
      } else if (q.type === "essay") {
        typeTagClass = "tag-type-essay";
        typeLabel = "📝 ~20 Words Answer";
      }

      // Card Header
      const headerHTML = `
        <div class="card-header">
          <div class="card-tags">
            <span class="tag ${typeTagClass}">${typeLabel}</span>
            <span class="tag ${subjectTagClass}">${subjectIcon}</span>
          </div>
          <span class="question-number-badge">Q#${index + 1}</span>
        </div>
        <h3 class="question-text">${q.question}</h3>
      `;

      let contentHTML = "";

      // 1. Radio Button Format (Single Choice)
      if (q.type === "radio") {
        const optionLetters = ["A", "B", "C", "D", "E"];
        const selectedVal = this.userAnswers[q.id];

        contentHTML = `
          <div class="options-grid" role="radiogroup" aria-label="Question options">
            ${q.options.map((opt, optIdx) => {
              const isChecked = selectedVal === opt.text;
              const inputId = `rad_${q.id}_${optIdx}`;
              return `
                <label class="option-label ${isChecked ? "is-selected" : ""}" for="${inputId}">
                  <input 
                    type="radio" 
                    id="${inputId}" 
                    name="q_rad_${q.id}" 
                    value="${this.escapeHtml(opt.text)}"
                    class="option-input-control radio-option-input"
                    data-question-id="${q.id}"
                    ${isChecked ? "checked" : ""}
                    ${this.isSubmitted ? "disabled" : ""}
                  />
                  <div class="custom-radio"></div>
                  <div class="option-text-wrapper">
                    <span class="option-letter">${optionLetters[optIdx]})</span>
                    <span class="option-text">${this.escapeHtml(opt.text)}</span>
                  </div>
                </label>
              `;
            }).join("")}
          </div>
        `;
      } 
      // 2. Multi-Select Checkboxes (Multiple Choices)
      else if (q.type === "multi") {
        const optionLetters = ["A", "B", "C", "D", "E"];
        const selectedVals = this.userAnswers[q.id] || [];

        contentHTML = `
          <div class="multi-hint-note">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Select ALL that apply (More than one answer may be correct)</span>
          </div>
          <div class="options-grid" role="group" aria-label="Multiple choice options">
            ${q.options.map((opt, optIdx) => {
              const isChecked = selectedVals.includes(opt.text);
              const inputId = `chk_${q.id}_${optIdx}`;
              return `
                <label class="option-label ${isChecked ? "is-selected" : ""}" for="${inputId}">
                  <input 
                    type="checkbox" 
                    id="${inputId}" 
                    name="q_chk_${q.id}" 
                    value="${this.escapeHtml(opt.text)}"
                    class="option-input-control multi-option-input"
                    data-question-id="${q.id}"
                    ${isChecked ? "checked" : ""}
                    ${this.isSubmitted ? "disabled" : ""}
                  />
                  <div class="custom-checkbox">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div class="option-text-wrapper">
                    <span class="option-letter">${optionLetters[optIdx]})</span>
                    <span class="option-text">${this.escapeHtml(opt.text)}</span>
                  </div>
                </label>
              `;
            }).join("")}
          </div>
        `;
      } 
      // 3. Short Answer (Single Line)
      else if (q.type === "short") {
        const userText = this.userAnswers[q.id] || "";
        contentHTML = `
          <div class="short-answer-group">
            <div class="input-container">
              <input 
                type="text" 
                class="text-input-field" 
                id="input_${q.id}"
                data-question-id="${q.id}"
                placeholder="${q.placeholder || "Type your answer here..."}"
                value="${this.escapeHtml(userText)}"
                ${this.isSubmitted ? "readonly" : ""}
                autocomplete="off"
              />
              <svg class="input-feedback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
        `;
      }
      // 4. ~20 Words Descriptive Essay (Textarea with live word count)
      else if (q.type === "essay") {
        const userText = this.userAnswers[q.id] || "";
        const wordCount = this.countWords(userText);
        let badgeStatusClass = "";
        if (wordCount >= 15 && wordCount <= 26) {
          badgeStatusClass = "status-ideal";
        } else if (wordCount > 0) {
          badgeStatusClass = "status-warning";
        }

        contentHTML = `
          <div class="essay-answer-group">
            <div class="textarea-container">
              <textarea 
                class="textarea-field" 
                id="textarea_${q.id}"
                data-question-id="${q.id}"
                placeholder="${q.placeholder || "Write approximately 20 words here..."}"
                ${this.isSubmitted ? "readonly" : ""}
              >${this.escapeHtml(userText)}</textarea>
              <div class="word-count-bar">
                <span>Target: ~20 words</span>
                <span class="word-counter-badge ${badgeStatusClass}" id="word_counter_${q.id}">Words: ${wordCount} / ~20</span>
              </div>
            </div>
          </div>
        `;
      }

      // Feedback Explanation Box
      const feedbackHTML = `
        <div class="feedback-box" id="feedback_${q.id}">
          <div class="feedback-header">
            <span class="feedback-status-title">Explanation & Analysis</span>
          </div>
          <p class="feedback-explanation">${q.explanation}</p>
          ${q.expectedAnswerDisplay ? `<div class="feedback-correct-answer">Model Answer: <strong>${q.expectedAnswerDisplay}</strong></div>` : ""}
        </div>
      `;

      card.innerHTML = headerHTML + contentHTML + feedbackHTML;
      this.container.appendChild(card);
    });

    if (this.isSubmitted) {
      this.highlightAnswers();
    }
  }

  /**
   * Helper to check if a question has been answered
   */
  isQuestionAnswered(qId) {
    const val = this.userAnswers[qId];
    if (Array.isArray(val)) {
      return val.length > 0;
    }
    return val !== undefined && val !== null && val.toString().trim().length > 0;
  }

  /**
   * Event Listeners Binding
   */
  bindEvents() {
    // 1. Radio Button Change Handler
    this.container.addEventListener("change", (e) => {
      if (e.target && e.target.classList.contains("radio-option-input")) {
        const radio = e.target;
        const qId = radio.dataset.questionId;
        const card = document.getElementById(`card_${qId}`);

        // Update card selected labels
        const allLabels = card.querySelectorAll(".option-label");
        allLabels.forEach(lbl => lbl.classList.remove("is-selected"));
        radio.closest(".option-label").classList.add("is-selected");

        this.userAnswers[qId] = radio.value;
        card.classList.add("answered");
        this.updateProgress();
      }
    });

    // 2. Multi-Select Checkbox Handler (Multiple Choices)
    this.container.addEventListener("change", (e) => {
      if (e.target && e.target.classList.contains("multi-option-input")) {
        const checkbox = e.target;
        const qId = checkbox.dataset.questionId;
        const card = document.getElementById(`card_${qId}`);

        if (!Array.isArray(this.userAnswers[qId])) {
          this.userAnswers[qId] = [];
        }

        if (checkbox.checked) {
          checkbox.closest(".option-label").classList.add("is-selected");
          if (!this.userAnswers[qId].includes(checkbox.value)) {
            this.userAnswers[qId].push(checkbox.value);
          }
        } else {
          checkbox.closest(".option-label").classList.remove("is-selected");
          this.userAnswers[qId] = this.userAnswers[qId].filter(v => v !== checkbox.value);
        }

        if (this.userAnswers[qId].length > 0) {
          card.classList.add("answered");
        } else {
          delete this.userAnswers[qId];
          card.classList.remove("answered");
        }

        this.updateProgress();
      }
    });

    // 3. Short Answer Text Input Handler
    this.container.addEventListener("input", (e) => {
      if (e.target && e.target.classList.contains("text-input-field")) {
        const input = e.target;
        const qId = input.dataset.questionId;
        const card = document.getElementById(`card_${qId}`);
        const val = input.value.trim();

        if (val.length > 0) {
          this.userAnswers[qId] = input.value;
          card.classList.add("answered");
        } else {
          delete this.userAnswers[qId];
          card.classList.remove("answered");
        }

        this.updateProgress();
      }
    });

    // 4. ~20 Words Textarea Input & Live Word Counter Handler
    this.container.addEventListener("input", (e) => {
      if (e.target && e.target.classList.contains("textarea-field")) {
        const textarea = e.target;
        const qId = textarea.dataset.questionId;
        const card = document.getElementById(`card_${qId}`);
        const textVal = textarea.value;
        const words = this.countWords(textVal);

        // Update word counter badge
        const badge = document.getElementById(`word_counter_${qId}`);
        if (badge) {
          badge.textContent = `Words: ${words} / ~20`;
          badge.classList.remove("status-ideal", "status-warning");
          if (words >= 15 && words <= 26) {
            badge.classList.add("status-ideal");
          } else if (words > 0) {
            badge.classList.add("status-warning");
          }
        }

        if (words > 0) {
          this.userAnswers[qId] = textVal;
          card.classList.add("answered");
        } else {
          delete this.userAnswers[qId];
          card.classList.remove("answered");
        }

        this.updateProgress();
      }
    });

    // 5. Category filter tabs
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentFilter = btn.dataset.filter;
        this.renderWorksheet();
      });
    });

    // 6. Shuffle Button
    this.shuffleBtn.addEventListener("click", () => {
      const answeredCount = Object.keys(this.userAnswers).length;
      if (answeredCount > 0 && !this.isSubmitted) {
        if (!confirm("Shuffling will reorder all questions and reset answers. Continue?")) {
          return;
        }
      }
      this.loadAndShuffleWorksheet();
    });

    // 7. Print Button
    this.printBtn.addEventListener("click", () => {
      window.print();
    });

    // 8. Clear Answers
    this.clearAnswersBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to reset all your answers?")) {
        this.userAnswers = {};
        this.isSubmitted = false;
        this.renderWorksheet();
        this.updateProgress();
        this.showToast("All answers have been reset.");
      }
    });

    // 9. Submit Worksheet
    this.submitWorksheetBtn.addEventListener("click", () => {
      this.evaluateAndSubmit();
    });

    // 10. Modal Actions
    this.closeModalBtn.addEventListener("click", () => this.closeModal());
    this.reviewAnswersBtn.addEventListener("click", () => this.closeModal());
    this.retryWorksheetBtn.addEventListener("click", () => {
      this.closeModal();
      this.loadAndShuffleWorksheet();
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.resultsModal.classList.contains("active")) {
        this.closeModal();
      }
    });
  }

  /**
   * Update completion progress bar and counters
   */
  updateProgress() {
    const total = this.currentQuestions.length;
    let answered = 0;

    this.currentQuestions.forEach(q => {
      if (this.isQuestionAnswered(q.id)) answered++;
    });

    const percent = total > 0 ? Math.round((answered / total) * 100) : 0;

    this.progressBar.style.width = `${percent}%`;
    this.progressPercentage.textContent = `${percent}%`;
    this.answeredCountElem.textContent = `${answered} / ${total}`;

    const footerText = document.getElementById("footerStatusText");
    if (answered === total) {
      footerText.textContent = "All questions completed! Ready to submit.";
      footerText.style.color = "#34d399";
    } else {
      footerText.textContent = `${total - answered} question(s) remaining.`;
      footerText.style.color = "var(--text-secondary)";
    }
  }

  /**
   * Grade all question types and show results
   */
  evaluateAndSubmit() {
    const total = this.currentQuestions.length;
    let answered = 0;
    this.currentQuestions.forEach(q => {
      if (this.isQuestionAnswered(q.id)) answered++;
    });

    if (answered < total) {
      const proceed = confirm(`You have answered ${answered} out of ${total} questions. Do you still want to submit?`);
      if (!proceed) return;
    }

    this.isSubmitted = true;
    clearInterval(this.timerInterval);

    let totalScore = 0;
    let mathScore = 0;
    let scienceScore = 0;
    let mathTotal = 0;
    let scienceTotal = 0;

    this.currentQuestions.forEach(q => {
      if (q.subject === "math") mathTotal++;
      if (q.subject === "science") scienceTotal++;

      const userVal = this.userAnswers[q.id];
      let isCorrect = false;

      if (userVal !== undefined && userVal !== null) {
        // 1. Radio single choice check
        if (q.type === "radio") {
          const correctOpt = q.options.find(o => o.isCorrect);
          if (correctOpt && userVal === correctOpt.text) {
            isCorrect = true;
          }
        } 
        // 2. Multi-select check (User must select ALL correct and NO incorrect)
        else if (q.type === "multi") {
          const selected = Array.isArray(userVal) ? userVal : [];
          const correctTexts = q.options.filter(o => o.isCorrect).map(o => o.text);
          const hasAllCorrect = correctTexts.every(t => selected.includes(t));
          const hasNoWrong = selected.every(t => correctTexts.includes(t));
          if (hasAllCorrect && hasNoWrong && selected.length > 0) {
            isCorrect = true;
          }
        }
        // 3. Short & Essay check
        else if ((q.type === "short" || q.type === "essay") && typeof q.checkAnswer === "function") {
          isCorrect = q.checkAnswer(userVal);
        }
      }

      if (isCorrect) {
        totalScore++;
        if (q.subject === "math") mathScore++;
        if (q.subject === "science") scienceScore++;
      }
    });

    // Populate Modal
    const percentage = Math.round((totalScore / total) * 100);
    document.getElementById("finalScoreText").textContent = totalScore;
    document.getElementById("maxScoreText").textContent = `/ ${total}`;
    document.getElementById("finalPercentText").textContent = `${percentage}%`;
    document.getElementById("mathScoreText").textContent = `${mathScore} / ${mathTotal}`;
    document.getElementById("scienceScoreText").textContent = `${scienceScore} / ${scienceTotal}`;

    // Grade classification
    const badge = document.getElementById("gradeBadge");
    const title = document.getElementById("resultsTitle");
    const feedback = document.getElementById("resultsFeedback");

    if (percentage >= 90) {
      badge.textContent = "A+";
      title.textContent = "Outstanding Mastery! 🌟";
      feedback.textContent = "Superb performance across Radio, Multi-choice, Short, and ~20 Words answers!";
    } else if (percentage >= 75) {
      badge.textContent = "A";
      title.textContent = "Great Job! 🎉";
      feedback.textContent = "You demonstrated strong understanding across both Math and Science.";
    } else if (percentage >= 50) {
      badge.textContent = "B";
      title.textContent = "Good Effort! 👍";
      feedback.textContent = "Solid start! Take a look at the explanations below to refine your answers.";
    } else {
      badge.textContent = "C";
      title.textContent = "Keep Learning! 💪";
      feedback.textContent = "Review the model explanations and try another shuffle for practice.";
    }

    this.renderWorksheet();
    this.openModal();
  }

  /**
   * Highlight options and inputs on review
   */
  highlightAnswers() {
    this.currentQuestions.forEach(q => {
      const card = document.getElementById(`card_${q.id}`);
      if (!card) return;

      const userVal = this.userAnswers[q.id];
      let isCorrect = false;

      if (q.type === "radio") {
        const correctOpt = q.options.find(o => o.isCorrect);
        if (correctOpt && userVal === correctOpt.text) {
          isCorrect = true;
        }

        const optionLabels = card.querySelectorAll(".option-label");
        optionLabels.forEach(label => {
          const input = label.querySelector(".option-input-control");
          const isThisCorrect = q.options.find(o => o.text === input.value)?.isCorrect;
          if (isThisCorrect) {
            label.classList.add("is-correct-answer");
          } else if (input.checked && !isThisCorrect) {
            label.classList.add("is-wrong-answer");
          }
        });
      } else if (q.type === "multi") {
        const selected = Array.isArray(userVal) ? userVal : [];
        const correctTexts = q.options.filter(o => o.isCorrect).map(o => o.text);
        const hasAllCorrect = correctTexts.every(t => selected.includes(t));
        const hasNoWrong = selected.every(t => correctTexts.includes(t));
        if (hasAllCorrect && hasNoWrong && selected.length > 0) {
          isCorrect = true;
        }

        const optionLabels = card.querySelectorAll(".option-label");
        optionLabels.forEach(label => {
          const input = label.querySelector(".option-input-control");
          const isThisCorrect = q.options.find(o => o.text === input.value)?.isCorrect;
          if (isThisCorrect) {
            label.classList.add("is-correct-answer");
          } else if (input.checked && !isThisCorrect) {
            label.classList.add("is-wrong-answer");
          }
        });
      } else if ((q.type === "short" || q.type === "essay") && typeof q.checkAnswer === "function") {
        isCorrect = userVal ? q.checkAnswer(userVal) : false;
      }

      card.classList.remove("status-correct", "status-incorrect");
      if (isCorrect) {
        card.classList.add("status-correct");
      } else {
        card.classList.add("status-incorrect");
      }
    });
  }

  openModal() {
    this.resultsModal.classList.add("active");
    this.resultsModal.setAttribute("aria-hidden", "false");
  }

  closeModal() {
    this.resultsModal.classList.remove("active");
    this.resultsModal.setAttribute("aria-hidden", "true");
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerSeconds = 0;
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      const mins = Math.floor(this.timerSeconds / 60).toString().padStart(2, "0");
      const secs = (this.timerSeconds % 60).toString().padStart(2, "0");
      this.timerTextElem.textContent = `${mins}:${secs}`;
    }, 1000);
  }

  showToast(msg) {
    let toast = document.querySelector(".toast-notice");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast-notice";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("visible");
    setTimeout(() => {
      toast.classList.remove("visible");
    }, 3000);
  }

  escapeHtml(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Start application on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  window.worksheetApp = new WorksheetApp();
});
