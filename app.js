/**
 * QuestMaster Worksheet - Core Application Logic
 * Senior Frontend Architecture with Configurable Security & Proctoring Engine,
 * Page Visibility API, Window Blur Tracking, Context Menu Blocker, Clipboard Shield,
 * Fullscreen Enforcement, DevTools Shield, 3-Strike Rule, Live Audit Console & Fisher-Yates Shuffling.
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
  },

  // ==========================================
  // SECTION 5: INLINE DROPDOWN (FILL IN MULTIPLE BLANKS) QUESTIONS
  // ==========================================
  {
    id: "drp_gen_1",
    part: "part5",
    partName: "Inline Dropdown",
    subject: "science",
    subjectName: "Science & Tech",
    type: "dropdown",
    points: 1,
    question: "Complete the statement by selecting the most appropriate term from each dropdown:",
    template: "Just like how students still learn [b1] with the invention of [b2] , it is still vital for students to still [b3] in the age of [b4] .",
    dropdowns: [
      {
        id: "b1",
        placeholder: "[ Select ]",
        options: ["arithmetic", "painting", "gymnastics", "calligraphy"],
        correct: "arithmetic"
      },
      {
        id: "b2",
        placeholder: "[ Select ]",
        options: ["calculators", "microscopes", "telephones", "compasses"],
        correct: "calculators"
      },
      {
        id: "b3",
        placeholder: "[ Select ]",
        options: ["think critically", "sleep in class", "memorize answers", "avoid homework"],
        correct: "think critically"
      },
      {
        id: "b4",
        placeholder: "[ Select ]",
        options: ["Artificial Intelligence", "Industrial Revolution", "Bronze Age", "Space Age"],
        correct: "Artificial Intelligence"
      }
    ],
    expectedAnswerDisplay: "1: arithmetic | 2: calculators | 3: think critically | 4: Artificial Intelligence",
    explanation: "Just as calculators didn't remove the need for foundational arithmetic, the emergence of Artificial Intelligence makes human critical thinking, reasoning, and conceptual clarity even more crucial."
  },
  {
    id: "drp_sci_1",
    part: "part5",
    partName: "Inline Dropdown",
    subject: "science",
    subjectName: "Science",
    type: "dropdown",
    points: 1,
    question: "Choose the correct scientific terms to complete the description of plant photosynthesis:",
    template: "During photosynthesis, plants take in [b1] from the air and [b2] from the soil. Utilizing light energy trapped by [b3] , they synthesize glucose and release [b4] as a byproduct.",
    dropdowns: [
      {
        id: "b1",
        placeholder: "[ Select ]",
        options: ["carbon dioxide", "nitrogen gas", "helium", "methane"],
        correct: "carbon dioxide"
      },
      {
        id: "b2",
        placeholder: "[ Select ]",
        options: ["water", "crude oil", "mercury", "alcohol"],
        correct: "water"
      },
      {
        id: "b3",
        placeholder: "[ Select ]",
        options: ["chlorophyll", "hemoglobin", "melanin", "keratin"],
        correct: "chlorophyll"
      },
      {
        id: "b4",
        placeholder: "[ Select ]",
        options: ["oxygen", "carbon monoxide", "argon", "hydrogen sulfide"],
        correct: "oxygen"
      }
    ],
    expectedAnswerDisplay: "1: carbon dioxide | 2: water | 3: chlorophyll | 4: oxygen",
    explanation: "Photosynthesis: 6CO₂ + 6H₂O + solar energy (absorbed by chlorophyll) → C₆H₁₂O₆ (glucose) + 6O₂ (oxygen)."
  },
  {
    id: "drp_math_1",
    part: "part5",
    partName: "Inline Dropdown",
    subject: "math",
    subjectName: "Mathematics",
    type: "dropdown",
    points: 1,
    question: "Complete the geometric theorem and calculate the missing side using the dropdowns:",
    template: "In a right triangle, the side opposite the 90° angle is called the [b1] . By the Pythagorean theorem, the square of this side equals the [b2] of the squares of the other two sides. If the perpendicular legs measure 6 cm and 8 cm, this side is [b3] cm.",
    dropdowns: [
      {
        id: "b1",
        placeholder: "[ Select ]",
        options: ["hypotenuse", "adjacent leg", "altitude", "perimeter"],
        correct: "hypotenuse"
      },
      {
        id: "b2",
        placeholder: "[ Select ]",
        options: ["sum", "difference", "product", "quotient"],
        correct: "sum"
      },
      {
        id: "b3",
        placeholder: "[ Select ]",
        options: ["10", "14", "48", "100"],
        correct: "10"
      }
    ],
    expectedAnswerDisplay: "1: hypotenuse | 2: sum | 3: 10",
    explanation: "In a right triangle, c² = a² + b². For legs 6 and 8: 6² + 8² = 36 + 64 = 100. Hypotenuse c = √100 = 10 cm."
  },
  {
    id: "drp_sci_2",
    part: "part5",
    partName: "Inline Dropdown",
    subject: "science",
    subjectName: "Science",
    type: "dropdown",
    points: 1,
    question: "Select the appropriate phase change terms for the stages of Earth's hydrologic cycle:",
    template: "Liquid surface water transforms into water vapor through the process of [b1] . As warm vapor ascends into the atmosphere, it cools and undergoes [b2] to create clouds. Finally, water returns to the Earth's surface via [b3] .",
    dropdowns: [
      {
        id: "b1",
        placeholder: "[ Select ]",
        options: ["evaporation", "freezing", "combustion", "filtration"],
        correct: "evaporation"
      },
      {
        id: "b2",
        placeholder: "[ Select ]",
        options: ["condensation", "sublimation", "oxidation", "photosynthesis"],
        correct: "condensation"
      },
      {
        id: "b3",
        placeholder: "[ Select ]",
        options: ["precipitation", "transpiration", "evaporation", "conduction"],
        correct: "precipitation"
      }
    ],
    expectedAnswerDisplay: "1: evaporation | 2: condensation | 3: precipitation",
    explanation: "Evaporation transforms liquid water into vapor, condensation produces droplets inside clouds, and precipitation brings water back to Earth as rain or snow."
  }
];

// App State & Security Proctoring Management
class WorksheetApp {
  constructor() {
    this.currentQuestions = [];
    this.userAnswers = {}; // { questionId: value | array of values }
    this.isSubmitted = false;
    this.timerSeconds = 0;
    this.timerInterval = null;
    this.currentFilter = "all";

    // Security & Proctoring State
    this.securityConfig = {
      tabSwitch: true,
      windowBlur: true,
      rightClick: true,
      copyPaste: true,
      fullscreen: true,
      devTools: true,
      threeStrikes: true,
      liveConsole: true
    };

    this.incidentLog = [];
    this.strikes = 0;
    this.totalViolations = 0;
    this.tabSwitchOutTime = null;
    this.isWorksheetActive = false;

    // DOM Elements - Screens
    this.settingsScreen = document.getElementById("settingsScreen");
    this.worksheetView = document.getElementById("worksheetView");

    // DOM Elements - Settings Toggles
    this.toggleTabSwitch = document.getElementById("toggleTabSwitch");
    this.toggleWindowBlur = document.getElementById("toggleWindowBlur");
    this.toggleRightClick = document.getElementById("toggleRightClick");
    this.toggleCopyPaste = document.getElementById("toggleCopyPaste");
    this.toggleFullscreen = document.getElementById("toggleFullscreen");
    this.toggleDevTools = document.getElementById("toggleDevTools");
    this.toggleThreeStrikes = document.getElementById("toggleThreeStrikes");
    this.toggleLiveConsole = document.getElementById("toggleLiveConsole");

    this.presetTestingBtn = document.getElementById("presetTestingBtn");
    this.presetStandardBtn = document.getElementById("presetStandardBtn");
    this.presetStrictBtn = document.getElementById("presetStrictBtn");
    this.startAssessmentBtn = document.getElementById("startAssessmentBtn");
    this.activeRulesSummaryText = document.getElementById("activeRulesSummaryText");

    // DOM Elements - Worksheet
    this.container = document.getElementById("worksheetContainer");
    this.progressBar = document.getElementById("progressBar");
    this.progressPercentage = document.getElementById("progressPercentage");
    this.answeredCountElem = document.getElementById("answeredCount");
    this.totalQuestionsCountElem = document.getElementById("totalQuestionsCount");
    this.timerTextElem = document.getElementById("timerText");
    this.securityBadgeText = document.getElementById("securityBadgeText");
    this.headerStrikeCount = document.getElementById("headerStrikeCount");
    this.strikeMetaItem = document.getElementById("strikeMetaItem");

    this.reconfigureBtn = document.getElementById("reconfigureBtn");
    this.shuffleBtn = document.getElementById("shuffleBtn");
    this.printBtn = document.getElementById("printBtn");
    this.clearAnswersBtn = document.getElementById("clearAnswersBtn");
    this.submitWorksheetBtn = document.getElementById("submitWorksheetBtn");

    // DOM Elements - Live Security Drawer
    this.securityDrawer = document.getElementById("securityDrawer");
    this.drawerHeaderToggle = document.getElementById("drawerHeaderToggle");
    this.drawerMinimizeBtn = document.getElementById("drawerMinimizeBtn");
    this.drawerStrikeBadge = document.getElementById("drawerStrikeBadge");
    this.drawerEventCount = document.getElementById("drawerEventCount");
    this.logStreamContainer = document.getElementById("logStreamContainer");
    this.clearLogsBtn = document.getElementById("clearLogsBtn");

    // DOM Elements - Results Modal & Integrity Audit
    this.resultsModal = document.getElementById("resultsModal");
    this.closeModalBtn = document.getElementById("closeModalBtn");
    this.reviewAnswersBtn = document.getElementById("reviewAnswersBtn");
    this.returnToSettingsBtn = document.getElementById("returnToSettingsBtn");
    this.retryWorksheetBtn = document.getElementById("retryWorksheetBtn");
    this.integrityStatusIcon = document.getElementById("integrityStatusIcon");
    this.integrityStatusTitle = document.getElementById("integrityStatusTitle");
    this.integrityStatusSubtitle = document.getElementById("integrityStatusSubtitle");
    this.totalViolationsCount = document.getElementById("totalViolationsCount");
    this.finalStrikesCount = document.getElementById("finalStrikesCount");
    this.modalIncidentLog = document.getElementById("modalIncidentLog");

    this.init();
  }

  init() {
    this.initSettingsScreen();
    this.bindWorksheetEvents();
    this.bindSecurityListeners();
  }

  // ========================================================
  // SETTINGS & CONFIGURATION ENGINE
  // ========================================================
  initSettingsScreen() {
    const allToggles = [
      { el: this.toggleTabSwitch, key: "tabSwitch" },
      { el: this.toggleWindowBlur, key: "windowBlur" },
      { el: this.toggleRightClick, key: "rightClick" },
      { el: this.toggleCopyPaste, key: "copyPaste" },
      { el: this.toggleFullscreen, key: "fullscreen" },
      { el: this.toggleDevTools, key: "devTools" },
      { el: this.toggleThreeStrikes, key: "threeStrikes" },
      { el: this.toggleLiveConsole, key: "liveConsole" }
    ];

    // Toggle event listener
    allToggles.forEach(item => {
      item.el.addEventListener("change", () => {
        this.securityConfig[item.key] = item.el.checked;
        this.updatePresetButtonsState();
        this.updateRulesSummary();
      });
    });

    // Presets Handlers
    this.presetTestingBtn.addEventListener("click", () => {
      this.applyPreset({
        tabSwitch: false,
        windowBlur: false,
        rightClick: false,
        copyPaste: false,
        fullscreen: false,
        devTools: false,
        threeStrikes: false,
        liveConsole: true // keep console on so they can verify nothing is blocked
      });
      this.setActivePresetBtn(this.presetTestingBtn);
    });

    this.presetStandardBtn.addEventListener("click", () => {
      this.applyPreset({
        tabSwitch: true,
        windowBlur: false,
        rightClick: true,
        copyPaste: true,
        fullscreen: false,
        devTools: true,
        threeStrikes: false,
        liveConsole: true
      });
      this.setActivePresetBtn(this.presetStandardBtn);
    });

    this.presetStrictBtn.addEventListener("click", () => {
      this.applyPreset({
        tabSwitch: true,
        windowBlur: true,
        rightClick: true,
        copyPaste: true,
        fullscreen: true,
        devTools: true,
        threeStrikes: true,
        liveConsole: true
      });
      this.setActivePresetBtn(this.presetStrictBtn);
    });

    // Launch Assessment Action
    this.startAssessmentBtn.addEventListener("click", () => {
      this.launchAssessment();
    });

    // Reconfigure Action (Back to settings from worksheet)
    this.reconfigureBtn.addEventListener("click", () => {
      if (!this.isSubmitted && Object.keys(this.userAnswers).length > 0) {
        if (!confirm("Returning to settings will pause and reset current assessment progress. Continue?")) {
          return;
        }
      }
      this.returnToSettings();
    });

    this.returnToSettingsBtn.addEventListener("click", () => {
      this.closeModal();
      this.returnToSettings();
    });

    this.updateRulesSummary();
  }

  applyPreset(config) {
    this.securityConfig = { ...config };
    this.toggleTabSwitch.checked = config.tabSwitch;
    this.toggleWindowBlur.checked = config.windowBlur;
    this.toggleRightClick.checked = config.rightClick;
    this.toggleCopyPaste.checked = config.copyPaste;
    this.toggleFullscreen.checked = config.fullscreen;
    this.toggleDevTools.checked = config.devTools;
    this.toggleThreeStrikes.checked = config.threeStrikes;
    this.toggleLiveConsole.checked = config.liveConsole;
    this.updateRulesSummary();
  }

  setActivePresetBtn(btn) {
    [this.presetTestingBtn, this.presetStandardBtn, this.presetStrictBtn].forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  updatePresetButtonsState() {
    const vals = Object.values(this.securityConfig);
    const trueCount = vals.filter(Boolean).length;
    [this.presetTestingBtn, this.presetStandardBtn, this.presetStrictBtn].forEach(b => b.classList.remove("active"));

    if (trueCount === vals.length) {
      this.presetStrictBtn.classList.add("active");
    } else if (trueCount <= 1 && !this.securityConfig.tabSwitch && !this.securityConfig.rightClick) {
      this.presetTestingBtn.classList.add("active");
    }
  }

  updateRulesSummary() {
    const activeCount = Object.values(this.securityConfig).filter(Boolean).length;
    this.activeRulesSummaryText.textContent = `${activeCount} of 8 security protections armed`;
  }

  launchAssessment() {
    // 1. Request fullscreen if enabled
    if (this.securityConfig.fullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => {
          console.warn("Fullscreen permission notice:", err);
        });
      }
    }

    // 2. Switch Views
    this.settingsScreen.style.display = "none";
    this.worksheetView.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });

    // 3. Configure Floating Drawer visibility
    if (this.securityConfig.liveConsole) {
      this.securityDrawer.style.display = "flex";
    } else {
      this.securityDrawer.style.display = "none";
    }

    // 4. Configure Strike UI
    if (!this.securityConfig.threeStrikes) {
      this.strikeMetaItem.style.display = "none";
      this.drawerStrikeBadge.style.display = "none";
    } else {
      this.strikeMetaItem.style.display = "flex";
      this.drawerStrikeBadge.style.display = "inline-block";
    }

    // 5. Update header security badge
    const activeCount = Object.values(this.securityConfig).filter(Boolean).length;
    if (activeCount === 0) {
      this.securityBadgeText.textContent = "Unrestricted Mode";
      this.securityBadgeText.style.borderColor = "#94a3b8";
      this.securityBadgeText.style.color = "#94a3b8";
    } else if (activeCount >= 7) {
      this.securityBadgeText.textContent = "Strict Proctored";
      this.securityBadgeText.style.borderColor = "rgba(244, 63, 94, 0.4)";
      this.securityBadgeText.style.color = "#fda4af";
    } else {
      this.securityBadgeText.textContent = `${activeCount} Protections Active`;
    }

    // 6. Reset assessment & security states
    this.isWorksheetActive = true;
    this.incidentLog = [];
    this.strikes = 0;
    this.totalViolations = 0;
    this.headerStrikeCount.textContent = "0 / 3";
    this.drawerStrikeBadge.textContent = "Strikes: 0/3";
    this.drawerEventCount.textContent = "0 Events";
    this.logStreamContainer.innerHTML = `
      <div class="log-entry log-entry-info">
        <span class="log-time">[System]</span>
        <span class="log-msg">Assessment launched. ${activeCount} security rules active.</span>
      </div>
    `;

    // 7. Load & Shuffle Questions
    this.startTimer();
    this.loadAndShuffleWorksheet();
  }

  returnToSettings() {
    this.isWorksheetActive = false;
    clearInterval(this.timerInterval);
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    this.worksheetView.style.display = "none";
    this.securityDrawer.style.display = "none";
    this.settingsScreen.style.display = "flex";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ========================================================
  // ACTIVE PROCTORING & INTEGRITY ENGINE
  // ========================================================
  bindSecurityListeners() {
    // 1. Tab Switch Tracking (Page Visibility API)
    document.addEventListener("visibilitychange", () => {
      if (!this.isWorksheetActive || this.isSubmitted || !this.securityConfig.tabSwitch) return;

      if (document.hidden) {
        this.tabSwitchOutTime = Date.now();
        this.logSecurityEvent("TAB_SWITCH_OUT", "User switched away from assessment tab", "warn");
      } else {
        const durationAway = this.tabSwitchOutTime ? Math.round((Date.now() - this.tabSwitchOutTime) / 1000) : 0;
        this.logSecurityEvent(
          "TAB_SWITCH_IN",
          `User returned to worksheet tab (Away for ${durationAway}s)`,
          "danger",
          durationAway
        );
        this.showToast(`⚠️ Warning: Tab switch detected! (Away for ${durationAway}s)`);
        this.recordStrike("Tab Switch Violation");
      }
    });

    // 2. Window Blur Tracking (App Loss Detection)
    window.addEventListener("blur", () => {
      if (!this.isWorksheetActive || this.isSubmitted || !this.securityConfig.windowBlur) return;
      // If document is already hidden, visibilitychange handles it
      if (!document.hidden) {
        this.logSecurityEvent("WINDOW_BLUR", "Browser window lost focus to external app / screen", "warn");
        this.showToast("⚠️ Notice: Browser window lost focus!");
        this.recordStrike("Window Focus Loss");
      }
    });

    window.addEventListener("focus", () => {
      if (!this.isWorksheetActive || this.isSubmitted || !this.securityConfig.windowBlur) return;
      if (!document.hidden) {
        this.logSecurityEvent("WINDOW_FOCUS", "Browser window regained focus", "info");
      }
    });

    // 3. Right-Click Prevention (Context Menu)
    document.addEventListener("contextmenu", (e) => {
      if (!this.isWorksheetActive || this.isSubmitted || !this.securityConfig.rightClick) return;
      e.preventDefault();
      this.logSecurityEvent("RIGHT_CLICK", "Attempted to open right-click context menu", "warn");
      this.showToast("🚫 Right-click is disabled during assessment!");
      this.recordStrike("Right-Click Blocked");
    });

    // 4. Clipboard Protection (Copy / Cut / Paste)
    ["copy", "cut", "paste"].forEach(evtName => {
      document.addEventListener(evtName, (e) => {
        if (!this.isWorksheetActive || this.isSubmitted || !this.securityConfig.copyPaste) return;
        // Allow paste only inside input fields if user chooses, but block copy entirely
        if (evtName === "copy" || evtName === "cut") {
          e.preventDefault();
          this.logSecurityEvent("CLIPBOARD", `Prohibited ${evtName.toUpperCase()} action on assessment content`, "warn");
          this.showToast(`🚫 ${evtName.toUpperCase()} is disabled on worksheet!`);
          this.recordStrike("Clipboard Action Blocked");
        } else if (evtName === "paste") {
          // Check if pasted in normal input
          const target = e.target;
          if (!target || (!target.classList.contains("text-input-field") && !target.classList.contains("textarea-field"))) {
            e.preventDefault();
            this.logSecurityEvent("CLIPBOARD", "Prohibited PASTE action blocked", "warn");
            this.showToast("🚫 Pasting is restricted!");
            this.recordStrike("Paste Action Blocked");
          }
        }
      });
    });

    // 5. Developer Tools & Shortcuts Interception
    document.addEventListener("keydown", (e) => {
      if (!this.isWorksheetActive || this.isSubmitted || !this.securityConfig.devTools) return;

      const isF12 = e.key === "F12" || e.keyCode === 123;
      const isInspect = (e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c");
      const isViewSource = (e.ctrlKey || e.metaKey) && (e.key === "U" || e.key === "u");
      const isCopyShortcut = (e.ctrlKey || e.metaKey) && (e.key === "C" || e.key === "c") && !window.getSelection().isCollapsed && this.securityConfig.copyPaste;

      if (isF12 || isInspect || isViewSource || isCopyShortcut) {
        e.preventDefault();
        const actionDesc = isF12 ? "F12 DevTools" : isInspect ? "Inspect Element shortcut" : isViewSource ? "View Page Source" : "Copy shortcut";
        this.logSecurityEvent("DEVTOOLS_SHORTCUT", `Blocked keyboard shortcut: ${actionDesc}`, "danger");
        this.showToast(`🚫 Shortcut blocked: ${actionDesc}`);
        this.recordStrike(`Shortcut Blocked (${actionDesc})`);
      }
    });

    // 6. Fullscreen Mode Change Enforcement
    document.addEventListener("fullscreenchange", () => {
      if (!this.isWorksheetActive || this.isSubmitted || !this.securityConfig.fullscreen) return;
      if (!document.fullscreenElement) {
        this.logSecurityEvent("FULLSCREEN_EXIT", "User exited enforced full-screen mode", "danger");
        this.showToast("⚠️ Alert: You exited fullscreen mode!");
        this.recordStrike("Fullscreen Exit Violation");

        // Offer re-entry
        setTimeout(() => {
          if (!document.fullscreenElement && this.isWorksheetActive && !this.isSubmitted) {
            if (confirm("Enforced fullscreen mode required. Click OK to re-enter fullscreen.")) {
              document.documentElement.requestFullscreen().catch(() => {});
            }
          }
        }, 300);
      }
    });

    // Drawer minimize / expand
    this.drawerHeaderToggle.addEventListener("click", () => {
      this.securityDrawer.classList.toggle("minimized");
      this.drawerMinimizeBtn.textContent = this.securityDrawer.classList.contains("minimized") ? "+" : "−";
    });

    this.clearLogsBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.logStreamContainer.innerHTML = `
        <div class="log-entry log-entry-info">
          <span class="log-time">[Display]</span>
          <span class="log-msg">Log display cleared. Total recorded: ${this.totalViolations}</span>
        </div>
      `;
    });
  }

  logSecurityEvent(type, message, severity = "warn", duration = null) {
    this.totalViolations++;
    const now = new Date();
    const timeString = now.toTimeString().split(" ")[0];

    const incident = {
      timestamp: now.toISOString(),
      timeString,
      type,
      message,
      severity,
      duration
    };

    this.incidentLog.push(incident);

    // Update Live Drawer UI
    this.drawerEventCount.textContent = `${this.totalViolations} Events`;

    const entryDiv = document.createElement("div");
    const severityClass = severity === "danger" ? "log-entry-danger" : severity === "info" ? "log-entry-info" : "log-entry-warn";
    entryDiv.className = `log-entry ${severityClass}`;
    entryDiv.innerHTML = `
      <span class="log-time">[${timeString}]</span>
      <span class="log-msg"><strong>${type}:</strong> ${message}</span>
    `;

    this.logStreamContainer.appendChild(entryDiv);
    this.logStreamContainer.scrollTop = this.logStreamContainer.scrollHeight;
  }

  recordStrike(reason) {
    if (!this.securityConfig.threeStrikes) return;

    this.strikes++;
    this.headerStrikeCount.textContent = `${this.strikes} / 3`;
    this.drawerStrikeBadge.textContent = `Strikes: ${this.strikes}/3`;

    if (this.strikes === 1) {
      this.showToast(`⚠️ Strike 1/3: ${reason}`);
    } else if (this.strikes === 2) {
      this.showToast(`🚨 Strike 2/3: Final warning! One more violation triggers auto-submission.`);
    } else if (this.strikes >= 3) {
      alert(`⛔ Assessment Terminated!\n\nYou have accumulated 3 security strikes (${reason}).\nThe worksheet will now be automatically submitted for grading.`);
      this.evaluateAndSubmit(true);
    }
  }

  // ========================================================
  // CORE WORKSHEET & QUESTIONS MANAGEMENT
  // ========================================================
  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  loadAndShuffleWorksheet() {
    const cloned = QUESTIONS_DATABASE.map(q => {
      const item = { ...q };
      if ((item.type === "radio" || item.type === "multi") && item.options) {
        item.options = this.shuffleArray(item.options);
      } else if (item.type === "dropdown" && item.dropdowns) {
        item.dropdowns = item.dropdowns.map(d => ({
          ...d,
          options: this.shuffleArray(d.options)
        }));
      }
      return item;
    });

    this.currentQuestions = this.shuffleArray(cloned);
    this.userAnswers = {};
    this.isSubmitted = false;

    this.totalQuestionsCountElem.textContent = this.currentQuestions.length;
    this.renderWorksheet();
    this.updateProgress();

    this.showToast("🔀 Questions & Options successfully shuffled!");
  }

  countWords(text) {
    if (!text) return 0;
    return text.trim().split(/\s+/).filter(Boolean).length;
  }

  renderWorksheet() {
    this.container.innerHTML = "";

    const filtered = this.currentQuestions.filter(q => {
      if (this.currentFilter === "all") return true;
      if (this.currentFilter === "radio") return q.type === "radio";
      if (this.currentFilter === "multi") return q.type === "multi";
      if (this.currentFilter === "dropdown") return q.type === "dropdown";
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
      } else if (q.type === "dropdown") {
        typeTagClass = "tag-type-dropdown";
        typeLabel = "🔽 Inline Dropdowns";
      } else if (q.type === "short") {
        typeTagClass = "tag-type-short";
        typeLabel = "✍️ Short Answer";
      } else if (q.type === "essay") {
        typeTagClass = "tag-type-essay";
        typeLabel = "📝 ~20 Words Answer";
      }

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
      } else if (q.type === "multi") {
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
      } else if (q.type === "short") {
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
      } else if (q.type === "essay") {
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
      } else if (q.type === "dropdown") {
        const userObj = (typeof this.userAnswers[q.id] === "object" && this.userAnswers[q.id] !== null) ? this.userAnswers[q.id] : {};
        let renderedTemplate = this.escapeHtml(q.template);

        q.dropdowns.forEach((d, dIdx) => {
          const token = `[${d.id}]`;
          const selectedVal = userObj[d.id] || "";
          const selectId = `drp_${q.id}_${d.id}`;

          const selectHTML = `
            <span class="inline-select-wrapper">
              <select 
                class="inline-dropdown-select ${selectedVal ? "has-value" : ""}" 
                id="${selectId}"
                data-question-id="${q.id}" 
                data-blank-id="${d.id}"
                ${this.isSubmitted ? "disabled" : ""}
                aria-label="Dropdown ${dIdx + 1}"
              >
                <option value="" ${!selectedVal ? "selected" : ""} disabled hidden>${d.placeholder || "[ Select ]"}</option>
                ${d.options.map(opt => `
                  <option value="${this.escapeHtml(opt)}" ${selectedVal === opt ? "selected" : ""}>
                    ${this.escapeHtml(opt)}
                  </option>
                `).join("")}
              </select>
              <span class="select-chevron">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </span>
          `;
          renderedTemplate = renderedTemplate.replace(token, selectHTML);
        });

        contentHTML = `
          <div class="cloze-question-card-body">
            <span class="cloze-points-badge">${q.points || 1} pts</span>
            <div class="cloze-content-flow">
              ${renderedTemplate}
            </div>
          </div>
        `;
      }

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

  isQuestionAnswered(qId) {
    const val = this.userAnswers[qId];
    if (val === undefined || val === null) return false;
    if (Array.isArray(val)) {
      return val.length > 0;
    }
    if (typeof val === "object") {
      const q = this.currentQuestions.find(item => item.id === qId);
      if (q && q.dropdowns) {
        return q.dropdowns.every(d => val[d.id] && val[d.id].toString().trim().length > 0);
      }
      return Object.keys(val).length > 0;
    }
    return val.toString().trim().length > 0;
  }

  bindWorksheetEvents() {
    // Radio button changes
    this.container.addEventListener("change", (e) => {
      if (e.target && e.target.classList.contains("radio-option-input")) {
        const radio = e.target;
        const qId = radio.dataset.questionId;
        const card = document.getElementById(`card_${qId}`);

        card.querySelectorAll(".option-label").forEach(lbl => lbl.classList.remove("is-selected"));
        radio.closest(".option-label").classList.add("is-selected");

        this.userAnswers[qId] = radio.value;
        card.classList.add("answered");
        this.updateProgress();
      }
    });

    // Multi-select checkbox changes
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

    // Short answer text inputs
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

    // ~20 words textarea input
    this.container.addEventListener("input", (e) => {
      if (e.target && e.target.classList.contains("textarea-field")) {
        const textarea = e.target;
        const qId = textarea.dataset.questionId;
        const card = document.getElementById(`card_${qId}`);
        const textVal = textarea.value;
        const words = this.countWords(textVal);

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

    // Inline dropdown select changes
    this.container.addEventListener("change", (e) => {
      if (e.target && e.target.classList.contains("inline-dropdown-select")) {
        const select = e.target;
        const qId = select.dataset.questionId;
        const blankId = select.dataset.blankId;
        const card = document.getElementById(`card_${qId}`);

        if (!this.userAnswers[qId] || typeof this.userAnswers[qId] !== "object") {
          this.userAnswers[qId] = {};
        }

        if (select.value) {
          this.userAnswers[qId][blankId] = select.value;
          select.classList.add("has-value");
        } else {
          delete this.userAnswers[qId][blankId];
          select.classList.remove("has-value");
        }

        if (this.isQuestionAnswered(qId)) {
          card.classList.add("answered");
        } else {
          card.classList.remove("answered");
        }

        this.updateProgress();
      }
    });

    // Filter tabs
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentFilter = btn.dataset.filter;
        this.renderWorksheet();
      });
    });

    // Shuffle Button
    this.shuffleBtn.addEventListener("click", () => {
      const answeredCount = Object.keys(this.userAnswers).length;
      if (answeredCount > 0 && !this.isSubmitted) {
        if (!confirm("Shuffling will reorder questions and reset current progress. Continue?")) {
          return;
        }
      }
      this.loadAndShuffleWorksheet();
    });

    // Print
    this.printBtn.addEventListener("click", () => {
      window.print();
    });

    // Clear answers
    this.clearAnswersBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to reset all your answers?")) {
        this.userAnswers = {};
        this.isSubmitted = false;
        this.renderWorksheet();
        this.updateProgress();
        this.showToast("All answers have been reset.");
      }
    });

    // Submit worksheet
    this.submitWorksheetBtn.addEventListener("click", () => {
      this.evaluateAndSubmit(false);
    });

    // Modal buttons
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

  evaluateAndSubmit(isDisqualified = false) {
    const total = this.currentQuestions.length;
    let answered = 0;
    this.currentQuestions.forEach(q => {
      if (this.isQuestionAnswered(q.id)) answered++;
    });

    if (!isDisqualified && answered < total) {
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
        if (q.type === "radio") {
          const correctOpt = q.options.find(o => o.isCorrect);
          if (correctOpt && userVal === correctOpt.text) {
            isCorrect = true;
          }
        } else if (q.type === "multi") {
          const selected = Array.isArray(userVal) ? userVal : [];
          const correctTexts = q.options.filter(o => o.isCorrect).map(o => o.text);
          const hasAllCorrect = correctTexts.every(t => selected.includes(t));
          const hasNoWrong = selected.every(t => correctTexts.includes(t));
          if (hasAllCorrect && hasNoWrong && selected.length > 0) {
            isCorrect = true;
          }
        } else if (q.type === "dropdown") {
          const userObj = (typeof userVal === "object" && userVal !== null) ? userVal : {};
          const allCorrect = q.dropdowns.every(d => userObj[d.id] === d.correct);
          if (allCorrect) {
            isCorrect = true;
          }
        } else if ((q.type === "short" || q.type === "essay") && typeof q.checkAnswer === "function") {
          isCorrect = q.checkAnswer(userVal);
        }
      }

      if (isCorrect) {
        totalScore++;
        if (q.subject === "math") mathScore++;
        if (q.subject === "science") scienceScore++;
      }
    });

    // Populate Academic Scores
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

    if (isDisqualified) {
      badge.textContent = "F";
      badge.style.background = "linear-gradient(135deg, #ef4444 0%, #991b1b 100%)";
      title.textContent = "Assessment Terminated (Strikes Exceeded)";
      feedback.textContent = "Auto-submitted due to 3 accumulated security violations.";
    } else {
      badge.style.background = "var(--accent-gradient)";
      if (percentage >= 90) {
        badge.textContent = "A+";
        title.textContent = "Outstanding Performance! 🌟";
        feedback.textContent = "Superb mastery of both Mathematics and Science topics!";
      } else if (percentage >= 75) {
        badge.textContent = "A";
        title.textContent = "Great Job! 🎉";
        feedback.textContent = "You demonstrated strong understanding across all sections.";
      } else if (percentage >= 50) {
        badge.textContent = "B";
        title.textContent = "Good Effort! 👍";
        feedback.textContent = "Solid start! Take a look at the explanations to improve.";
      } else {
        badge.textContent = "C";
        title.textContent = "Keep Practicing! 💪";
        feedback.textContent = "Review model explanations and try another shuffle for practice.";
      }
    }

    // Populate Academic Integrity Audit Card
    this.totalViolationsCount.textContent = this.totalViolations;
    this.finalStrikesCount.textContent = `${this.strikes} / 3`;

    if (isDisqualified || this.strikes >= 3) {
      this.integrityStatusIcon.textContent = "🔴";
      this.integrityStatusTitle.textContent = "Academic Integrity: High Risk (Disqualified)";
      this.integrityStatusSubtitle.textContent = "Candidate accumulated multiple critical infractions exceeding the threshold.";
    } else if (this.totalViolations > 0) {
      this.integrityStatusIcon.textContent = "🟡";
      this.integrityStatusTitle.textContent = "Academic Integrity: Warning Flags Logged";
      this.integrityStatusSubtitle.textContent = `${this.totalViolations} minor event(s) recorded during session. Review incident log below.`;
    } else {
      this.integrityStatusIcon.textContent = "🟢";
      this.integrityStatusTitle.textContent = "Academic Integrity: Clean & Verified";
      this.integrityStatusSubtitle.textContent = "No unauthorized window or clipboard actions detected throughout session.";
    }

    // Populate Incident Log in Modal
    if (this.incidentLog.length === 0) {
      this.modalIncidentLog.innerHTML = `<div class="empty-log-msg">No security violations recorded for this assessment attempt.</div>`;
    } else {
      this.modalIncidentLog.innerHTML = this.incidentLog.map(inc => `
        <div class="incident-row">
          <span class="incident-timestamp">[${inc.timeString}]</span>
          <span><strong>${inc.type}:</strong> ${inc.message}</span>
        </div>
      `).join("");
    }

    this.renderWorksheet();
    this.openModal();
  }

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
      } else if (q.type === "dropdown") {
        const userObj = (typeof userVal === "object" && userVal !== null) ? userVal : {};
        let allCorrect = true;

        q.dropdowns.forEach(d => {
          const sel = card.querySelector(`select[data-blank-id="${d.id}"]`);
          if (!sel) return;
          const chosen = userObj[d.id];
          const wrapper = sel.closest(".inline-select-wrapper");

          if (chosen === d.correct) {
            sel.classList.add("is-correct-dropdown");
          } else {
            allCorrect = false;
            sel.classList.add("is-wrong-dropdown");
            if (wrapper && !wrapper.querySelector(".dropdown-correct-callout")) {
              const callout = document.createElement("span");
              callout.className = "dropdown-correct-callout";
              callout.textContent = `✓ ${d.correct}`;
              wrapper.appendChild(callout);
            }
          }
        });

        isCorrect = allCorrect;
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
    }, 3200);
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

// Bootstrapping
document.addEventListener("DOMContentLoaded", () => {
  window.worksheetApp = new WorksheetApp();
});
