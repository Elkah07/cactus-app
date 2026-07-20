// ====================
// VARIABLES
// ====================

const loginScreen = document.getElementById("loginScreen");
const pseudoScreen = document.getElementById("pseudoScreen");
const coupleScreen = document.getElementById("coupleScreen");
const dashboardScreen = document.getElementById("dashboardScreen");
const rankingScreen = document.getElementById("rankingScreen");
const rankingResultScreen = document.getElementById("rankingResultScreen");

const savePseudoBtn = document.getElementById("savePseudoBtn");
const createSpaceBtn = document.getElementById("createSpaceBtn");
const joinSpaceBtn = document.getElementById("joinSpaceBtn");

const rankingBtn = document.getElementById("rankingBtn");
const validateRankingBtn = document.getElementById("validateRankingBtn");
const nextRankingBtn = document.getElementById("nextRankingBtn");
const backDashboardBtn = document.getElementById("backDashboardBtn");

const displayPseudo = document.getElementById("displayPseudo");
const spaceCode = document.getElementById("spaceCode");

const rankingTitle = document.getElementById("rankingTitle");
const rankingList = document.getElementById("rankingList");
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const forgotPasswordBtn = document.getElementById("forgotPasswordBtn");
const authEmail = document.getElementById("authEmail");
const authPassword = document.getElementById("authPassword");
const authMessage = document.getElementById("authMessage");
const connectionStatusBanner = document.getElementById("connectionStatusBanner");
const logoutBtn = document.getElementById("logoutBtn");

const partnerName = document.getElementById("partnerName");
const leaveSpaceBtn = document.getElementById("leaveSpaceBtn");

const backFromRankingBtn = document.getElementById("backFromRankingBtn");
const backToLoginBtn = document.getElementById("backToLoginBtn");

const logoutFromCoupleBtn = document.getElementById("logoutFromCoupleBtn");

const settingsScreen = document.getElementById("settingsScreen");
const settingsBtn = document.getElementById("settingsBtn");
const newPseudo = document.getElementById("newPseudo");
const saveNewPseudoBtn = document.getElementById("saveNewPseudoBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const notifyAnswersSetting = document.getElementById("notifyAnswersSetting");
const notifyGamesSetting = document.getElementById("notifyGamesSetting");
const notifyAchievementsSetting = document.getElementById("notifyAchievementsSetting");
const notifyGardenSetting = document.getElementById("notifyGardenSetting");
const creatorToolsPanel = document.getElementById("creatorToolsPanel");
const creatorSeedsAmount = document.getElementById("creatorSeedsAmount");
const creatorSetSeedsBtn = document.getElementById("creatorSetSeedsBtn");
const creatorXpAmount = document.getElementById("creatorXpAmount");
const creatorSetXpBtn = document.getElementById("creatorSetXpBtn");
const creatorLegendaryBtn = document.getElementById("creatorLegendaryBtn");
const creatorUnlockGardenBtn = document.getElementById("creatorUnlockGardenBtn");
const creatorUnlockAchievementsBtn = document.getElementById("creatorUnlockAchievementsBtn");
const creatorResetAchievementsBtn = document.getElementById("creatorResetAchievementsBtn");
const creatorResetDailyBtn = document.getElementById("creatorResetDailyBtn");
const themeSettingIcon = document.getElementById("themeSettingIcon");
const themeSettingLabel = document.getElementById("themeSettingLabel");
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const backFromSettingsBtn = document.getElementById("backFromSettingsBtn");
const currentAccountEmail = document.getElementById("currentAccountEmail");
const newAccountPassword = document.getElementById("newAccountPassword");
const changePasswordBtn = document.getElementById("changePasswordBtn");
const exportDataBtn = document.getElementById("exportDataBtn");
const showDeleteAccountBtn = document.getElementById("showDeleteAccountBtn");
const deleteAccountConfirmBox = document.getElementById("deleteAccountConfirmBox");
const deleteAccountConfirmation = document.getElementById("deleteAccountConfirmation");
const confirmDeleteAccountBtn = document.getElementById("confirmDeleteAccountBtn");
const cancelDeleteAccountBtn = document.getElementById("cancelDeleteAccountBtn");

const rankingCompatibilityScreen = document.getElementById("rankingCompatibilityScreen");
const rankingCompatibilityTitle = document.getElementById("rankingCompatibilityTitle");
const rankingCompatibilityScore = document.getElementById("rankingCompatibilityScore");
const rankingCompatibilityLabel = document.getElementById("rankingCompatibilityLabel");
const myRankingResult = document.getElementById("myRankingResult");
const partnerRankingResult = document.getElementById("partnerRankingResult");
const perfectMatchesList = document.getElementById("perfectMatchesList");
const biggestGapsList = document.getElementById("biggestGapsList");
const nextAfterCompatibilityBtn = document.getElementById("nextAfterCompatibilityBtn");
const backDashboardAfterCompatibilityBtn = document.getElementById("backDashboardAfterCompatibilityBtn");

const rankingCompatibilityDescription = document.getElementById("rankingCompatibilityDescription");
const myRankingName = document.getElementById("myRankingName");
const partnerRankingName = document.getElementById("partnerRankingName");
const rankingCompatibilityInsight = document.getElementById("rankingCompatibilityInsight");
const cactusCelebration = document.getElementById("cactusCelebration");

const historyScreen = document.getElementById("historyScreen");
const historyBtn = document.getElementById("historyBtn");
const backFromHistoryBtn = document.getElementById("backFromHistoryBtn");
const showMemoryFormBtn = document.getElementById("showMemoryFormBtn");
const memoryForm = document.getElementById("memoryForm");
const memoryFormIcon = document.getElementById("memoryFormIcon");
const memoryFormHeading = document.getElementById("memoryFormHeading");
const memoryEmoji = document.getElementById("memoryEmoji");
const memoryDate = document.getElementById("memoryDate");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");
const saveMemoryBtn = document.getElementById("saveMemoryBtn");
const cancelMemoryBtn = document.getElementById("cancelMemoryBtn");
const memoriesTimeline = document.getElementById("memoriesTimeline");
const memoriesEmptyState = document.getElementById("memoriesEmptyState");

const gardenScreen = document.getElementById("gardenScreen");
const gardenBtn = document.getElementById("gardenBtn");
const backFromGardenBtn = document.getElementById("backFromGardenBtn");

const showCreateNotebookBtn = document.getElementById("showCreateNotebookBtn");
const createNotebookBox = document.getElementById("createNotebookBox");
const notebookEmoji = document.getElementById("notebookEmoji");
const notebookTitle = document.getElementById("notebookTitle");
const notebookColor = document.getElementById("notebookColor");
const createNotebookBtn = document.getElementById("createNotebookBtn");
const notebooksGrid = document.getElementById("notebooksGrid");
const gardenSeedsBalance = document.getElementById("gardenSeedsBalance");
const gardenLevelBadge = document.getElementById("gardenLevelBadge");
const gardenPlantedCount = document.getElementById("gardenPlantedCount");
const gardenNextLevelText = document.getElementById("gardenNextLevelText");
const gardenLevelProgressBar = document.getElementById("gardenLevelProgressBar");
const gardenPlot = document.getElementById("gardenPlot");
const gardenEmptyPlot = document.getElementById("gardenEmptyPlot");
const gardenShopGrid = document.getElementById("gardenShopGrid");
const gardenEditBtn = document.getElementById("gardenEditBtn");
const gardenEditToolbar = document.getElementById("gardenEditToolbar");
const gardenSelectedItemLabel = document.getElementById("gardenSelectedItemLabel");
const gardenSmallerBtn = document.getElementById("gardenSmallerBtn");
const gardenLargerBtn = document.getElementById("gardenLargerBtn");
const gardenBackwardBtn = document.getElementById("gardenBackwardBtn");
const gardenForwardBtn = document.getElementById("gardenForwardBtn");
const gardenStoreSelectedBtn = document.getElementById("gardenStoreSelectedBtn");
const gardenResetLayoutBtn = document.getElementById("gardenResetLayoutBtn");

const notebookScreen = document.getElementById("notebookScreen");
const openedNotebookTitle = document.getElementById("openedNotebookTitle");
const backToGardenBtn = document.getElementById("backToGardenBtn");
const renameNotebookBtn = document.getElementById("renameNotebookBtn");
const deleteNotebookBtn = document.getElementById("deleteNotebookBtn");

const notebookEditor = document.getElementById("notebookEditor");
const insertCheckboxLineBtn = document.getElementById("insertCheckboxLineBtn");

const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const underlineBtn = document.getElementById("underlineBtn");
const textColorPicker = document.getElementById("textColorPicker");
const highlightColorPicker = document.getElementById("highlightColorPicker");

const guessBtn = document.getElementById("guessBtn");
const guessAnswerScreen = document.getElementById("guessAnswerScreen");
const guessWaitingScreen = document.getElementById("guessWaitingScreen");
const guessPredictScreen = document.getElementById("guessPredictScreen");
const guessValidationScreen = document.getElementById("guessValidationScreen");
const guessResultScreen =     document.getElementById("guessResultScreen");
const guessQuestionText =    document.getElementById("guessQuestionText");
const guessAnswerInput =    document.getElementById("guessAnswerInput");
const validateGuessAnswerBtn =    document.getElementById("validateGuessAnswerBtn");
const backFromGuessBtn =     document.getElementById("backFromGuessBtn");
const backDashboardFromGuessWaitBtn =    document.getElementById("backDashboardFromGuessWaitBtn");
const guessPredictQuestionText =    document.getElementById("guessPredictQuestionText");
const guessPredictionInput =    document.getElementById("guessPredictionInput");
const validateGuessPredictionBtn =    document.getElementById("validateGuessPredictionBtn");
const guessValidationQuestion =    document.getElementById("guessValidationQuestion");
const myRealGuessAnswer =    document.getElementById("myRealGuessAnswer");
const partnerPredictionAboutMe =    document.getElementById("partnerPredictionAboutMe");
const guessTrueBtn =    document.getElementById("guessTrueBtn");
const guessAlmostBtn =    document.getElementById("guessAlmostBtn");
const guessFalseBtn =    document.getElementById("guessFalseBtn");
const guessResultQuestion =    document.getElementById("guessResultQuestion");
const guessResultScore =    document.getElementById("guessResultScore");
const guessResultLabel =    document.getElementById("guessResultLabel");
const guessMyAnswerResult =    document.getElementById("guessMyAnswerResult");
const guessMyPredictionResult =    document.getElementById("guessMyPredictionResult");
const guessPartnerAnswerResult =    document.getElementById("guessPartnerAnswerResult");
const guessValidationResult =    document.getElementById("guessValidationResult");
const nextGuessBtn =    document.getElementById("nextGuessBtn");
const backDashboardFromGuessResultBtn =    document.getElementById("backDashboardFromGuessResultBtn");

const activityBox = document.getElementById("activityBox");
const activityList = document.getElementById("activityList");
const activityKicker = document.getElementById("activityKicker");
const activityIcon = document.getElementById("activityIcon");

const likelyBtn = document.getElementById("likelyBtn");

const likelyScreen =
    document.getElementById("likelyScreen");

const likelyResultScreen =
    document.getElementById("likelyResultScreen");

const likelyQuestionText =
    document.getElementById("likelyQuestionText");

const likelyMeBtn =
    document.getElementById("likelyMeBtn");

const likelyPartnerBtn =
    document.getElementById("likelyPartnerBtn");

const likelyBothBtn =
    document.getElementById("likelyBothBtn");

const backFromLikelyBtn =
    document.getElementById("backFromLikelyBtn");

const likelyResultQuestion =
    document.getElementById("likelyResultQuestion");

const likelyMyAnswer =
    document.getElementById("likelyMyAnswer");

const likelyPartnerAnswer =
    document.getElementById("likelyPartnerAnswer");

const nextLikelyBtn =
    document.getElementById("nextLikelyBtn");

const backDashboardFromLikelyBtn =
    document.getElementById("backDashboardFromLikelyBtn");

    const likelyVerdictEmoji =
    document.getElementById("likelyVerdictEmoji");

const likelyVerdictText =
    document.getElementById("likelyVerdictText");

    const okBtn = document.getElementById("okBtn");

const okScreen = document.getElementById("okScreen");
const okResultScreen = document.getElementById("okResultScreen");

const okQuestionText = document.getElementById("okQuestionText");

const okYesBtn = document.getElementById("okYesBtn");
const okDependsBtn = document.getElementById("okDependsBtn");
const okNoBtn = document.getElementById("okNoBtn");

const backFromOkBtn = document.getElementById("backFromOkBtn");

const okResultQuestion = document.getElementById("okResultQuestion");
const okVerdictEmoji = document.getElementById("okVerdictEmoji");
const okVerdictText = document.getElementById("okVerdictText");
const okMyAnswer = document.getElementById("okMyAnswer");
const okPartnerAnswer = document.getElementById("okPartnerAnswer");

const nextOkBtn = document.getElementById("nextOkBtn");
const backDashboardFromOkBtn = document.getElementById("backDashboardFromOkBtn");

const greenFlagBtn =
    document.getElementById("greenFlagBtn");

const greenFlagScreen =
    document.getElementById("greenFlagScreen");

const greenFlagResultScreen =
    document.getElementById("greenFlagResultScreen");

const greenFlagQuestionText =
    document.getElementById("greenFlagQuestionText");

const greenFlagYesBtn =
    document.getElementById("greenFlagYesBtn");

const greenFlagNeutralBtn =
    document.getElementById("greenFlagNeutralBtn");

const greenFlagNoBtn =
    document.getElementById("greenFlagNoBtn");

const backFromGreenFlagBtn =
    document.getElementById("backFromGreenFlagBtn");

const greenFlagResultQuestion =
    document.getElementById("greenFlagResultQuestion");

const greenFlagVerdictEmoji =
    document.getElementById("greenFlagVerdictEmoji");

const greenFlagVerdictText =
    document.getElementById("greenFlagVerdictText");

const greenFlagMyAnswer =
    document.getElementById("greenFlagMyAnswer");

const greenFlagPartnerAnswer =
    document.getElementById("greenFlagPartnerAnswer");

const nextGreenFlagBtn =
    document.getElementById("nextGreenFlagBtn");

const backDashboardFromGreenFlagBtn =
    document.getElementById("backDashboardFromGreenFlagBtn");

    const princessBtn = document.getElementById("princessBtn");

const princessScreen = document.getElementById("princessScreen");
const princessResultScreen = document.getElementById("princessResultScreen");

const princessQuestionText = document.getElementById("princessQuestionText");

const princessYesBtn = document.getElementById("princessYesBtn");
const princessDependsBtn = document.getElementById("princessDependsBtn");
const princessNoBtn = document.getElementById("princessNoBtn");

const backFromPrincessBtn = document.getElementById("backFromPrincessBtn");

const princessResultQuestion = document.getElementById("princessResultQuestion");
const princessVerdictEmoji = document.getElementById("princessVerdictEmoji");
const princessVerdictText = document.getElementById("princessVerdictText");
const princessMyAnswer = document.getElementById("princessMyAnswer");
const princessPartnerAnswer = document.getElementById("princessPartnerAnswer");

const nextPrincessBtn = document.getElementById("nextPrincessBtn");
const backDashboardFromPrincessBtn = document.getElementById("backDashboardFromPrincessBtn");

const questionsBtn = document.getElementById("questionsBtn");

const questionsScreen = document.getElementById("questionsScreen");
const questionsResultScreen = document.getElementById("questionsResultScreen");

const questionsQuestionText = document.getElementById("questionsQuestionText");
const questionsAnswerInput = document.getElementById("questionsAnswerInput");
const validateQuestionsAnswerBtn = document.getElementById("validateQuestionsAnswerBtn");
const backFromQuestionsBtn = document.getElementById("backFromQuestionsBtn");

const questionsResultQuestion = document.getElementById("questionsResultQuestion");
const questionsMyAnswer = document.getElementById("questionsMyAnswer");
const questionsPartnerAnswer = document.getElementById("questionsPartnerAnswer");

const nextQuestionsBtn = document.getElementById("nextQuestionsBtn");
const backDashboardFromQuestionsBtn = document.getElementById("backDashboardFromQuestionsBtn");

const toastMessage = document.getElementById("toastMessage");

const answerSentScreen = document.getElementById("answerSentScreen");
const answerSentNextBtn = document.getElementById("answerSentNextBtn");
const answerSentDashboardBtn = document.getElementById("answerSentDashboardBtn");

const historyDetailScreen = document.getElementById("historyDetailScreen");
const historyDetailTitle = document.getElementById("historyDetailTitle");
const historyDetailList = document.getElementById("historyDetailList");
const backToHistoryBtn = document.getElementById("backToHistoryBtn");

const historyItemScreen = document.getElementById("historyItemScreen");
const historyItemTitle = document.getElementById("historyItemTitle");
const historyItemContent = document.getElementById("historyItemContent");
const backToHistoryDetailBtn = document.getElementById("backToHistoryDetailBtn");

const statsScreen = document.getElementById("statsScreen");
const backFromStatsBtn = document.getElementById("backFromStatsBtn");
const statsPlayBtn = document.getElementById("statsPlayBtn");
const statsLoadingState = document.getElementById("statsLoadingState");
const statsContent = document.getElementById("statsContent");
const statsHeroMessage = document.getElementById("statsHeroMessage");
const statsHeroSubtitle = document.getElementById("statsHeroSubtitle");
const statsTotalGames = document.getElementById("statsTotalGames");
const statsTotalAnswers = document.getElementById("statsTotalAnswers");
const statsAverageCompatibility = document.getElementById("statsAverageCompatibility");
const statsDaysTogether = document.getElementById("statsDaysTogether");
const statsCompatibilityScore = document.getElementById("statsCompatibilityScore");
const statsCompatibilityBar = document.getElementById("statsCompatibilityBar");
const statsCompatibilityLabel = document.getElementById("statsCompatibilityLabel");
const statsFavoriteMode = document.getElementById("statsFavoriteMode");
const statsModesBreakdown = document.getElementById("statsModesBreakdown");
const statsBestScore = document.getElementById("statsBestScore");
const statsFirstMemory = document.getElementById("statsFirstMemory");
const statsLastMemory = document.getElementById("statsLastMemory");
const statsEmptyState = document.getElementById("statsEmptyState");
const achievementsScreen = document.getElementById("achievementsScreen");
const dashboardAchievementsBtn = document.getElementById("dashboardAchievementsBtn");
const backFromAchievementsBtn = document.getElementById("backFromAchievementsBtn");
const achievementsUnlockedCount = document.getElementById("achievementsUnlockedCount");
const achievementsProgressBar = document.getElementById("achievementsProgressBar");
const achievementsLoadingState = document.getElementById("achievementsLoadingState");
const achievementsGrid = document.getElementById("achievementsGrid");

const guessAnswerTitle =
    document.querySelector("#guessAnswerScreen h1");

const guessPredictTitle =
    document.querySelector("#guessPredictScreen h1");

const compatibilityStat = document.getElementById("compatibilityStat");
const completedGamesStat = document.getElementById("completedGamesStat");

const seedsStat = document.getElementById("seedsStat");
const levelStat = document.getElementById("levelStat");

const storyIntroScreen = document.getElementById("storyIntroScreen");
const storyDateScreen = document.getElementById("storyDateScreen");
const storyMeetingScreen = document.getElementById("storyMeetingScreen");
const storyFirstDateScreen = document.getElementById("storyFirstDateScreen");
const storyNicknamesScreen = document.getElementById("storyNicknamesScreen");
const storySongScreen = document.getElementById("storySongScreen");
const storyDistanceScreen = document.getElementById("storyDistanceScreen");
const storyFinalScreen = document.getElementById("storyFinalScreen");

const startStoryBtn = document.getElementById("startStoryBtn");
const storyDateInput = document.getElementById("storyDateInput");
const saveStoryDateBtn = document.getElementById("saveStoryDateBtn");

const storyMeetingInput = document.getElementById("storyMeetingInput");
const saveStoryMeetingBtn = document.getElementById("saveStoryMeetingBtn");

const storyFirstDateInput = document.getElementById("storyFirstDateInput");
const saveStoryFirstDateBtn = document.getElementById("saveStoryFirstDateBtn");

const storyNicknameMineInput = document.getElementById("storyNicknameMineInput");
const storyNicknamePartnerInput = document.getElementById("storyNicknamePartnerInput");
const saveStoryNicknamesBtn = document.getElementById("saveStoryNicknamesBtn");

const storySongInput = document.getElementById("storySongInput");
const saveStorySongBtn = document.getElementById("saveStorySongBtn");

const storyTogetherBtn = document.getElementById("storyTogetherBtn");
const storyDistanceBtn = document.getElementById("storyDistanceBtn");

const finishStoryBtn = document.getElementById("finishStoryBtn");

const relationshipDaysText =
    document.getElementById("relationshipDaysText");

    const storyPageScreen = document.getElementById("storyPageScreen");
const storyPageContent = document.getElementById("storyPageContent");

const editStoryBtn = document.getElementById("editStoryBtn");
const backFromStoryPageBtn = document.getElementById("backFromStoryPageBtn");

const allGamesScreen = document.getElementById("allGamesScreen");

const openAllGamesBtn = document.getElementById("openAllGamesBtn");
const backFromAllGamesBtn = document.getElementById("backFromAllGamesBtn");

const allRankingBtn = document.getElementById("allRankingBtn");
const allGuessBtn = document.getElementById("allGuessBtn");
const allQuestionsBtn = document.getElementById("allQuestionsBtn");
const gameInbox = document.getElementById("gameInbox");
const gameInboxCount = document.getElementById("gameInboxCount");
const gameInboxList = document.getElementById("gameInboxList");

const dashboardProfileBtn =
    document.getElementById("dashboardProfileBtn");
const dashboardSpaceName = document.getElementById("dashboardSpaceName");
const coupleProfileScreen = document.getElementById("coupleProfileScreen");
const backFromCoupleProfileBtn = document.getElementById("backFromCoupleProfileBtn");
const profileMyAvatar = document.getElementById("profileMyAvatar");
const profilePartnerAvatar = document.getElementById("profilePartnerAvatar");
const profileSpaceNamePreview = document.getElementById("profileSpaceNamePreview");
const profileCoupleNames = document.getElementById("profileCoupleNames");
const profileMottoPreview = document.getElementById("profileMottoPreview");
const profileLevelSummary = document.getElementById("profileLevelSummary");
const profileCompatibilitySummary = document.getElementById("profileCompatibilitySummary");
const profileMemoriesSummary = document.getElementById("profileMemoriesSummary");
const profileGamesSummary = document.getElementById("profileGamesSummary");
const coupleProfileForm = document.getElementById("coupleProfileForm");
const profileAvatarInput = document.getElementById("profileAvatarInput");
const profileSpaceNameInput = document.getElementById("profileSpaceNameInput");
const profileCactusNameInput = document.getElementById("profileCactusNameInput");
const profileMottoInput = document.getElementById("profileMottoInput");
const profileAccentInput = document.getElementById("profileAccentInput");
const profileAccentValue = document.getElementById("profileAccentValue");
const saveCoupleProfileBtn = document.getElementById("saveCoupleProfileBtn");
const openStoryFromProfileBtn = document.getElementById("openStoryFromProfileBtn");

const dashboardSettingsBtn =
    document.getElementById("dashboardSettingsBtn");

const dashboardNotificationsBtn =
    document.getElementById("dashboardNotificationsBtn");
const dashboardNotificationsBadge =
    document.getElementById("dashboardNotificationsBadge");
const notificationsScreen = document.getElementById("notificationsScreen");
const backFromNotificationsBtn = document.getElementById("backFromNotificationsBtn");
const markNotificationsReadBtn = document.getElementById("markNotificationsReadBtn");
const notificationsList = document.getElementById("notificationsList");
const notificationsEmptyState = document.getElementById("notificationsEmptyState");
const dailyRitualCard = document.getElementById("dailyRitualCard");
const dailyRitualDashboardTitle = document.getElementById("dailyRitualDashboardTitle");
const dailyRitualDashboardStatus = document.getElementById("dailyRitualDashboardStatus");
const dailyStreakDashboard = document.getElementById("dailyStreakDashboard");
const dailyRitualScreen = document.getElementById("dailyRitualScreen");
const backFromDailyRitualBtn = document.getElementById("backFromDailyRitualBtn");
const dailyStreakScreen = document.getElementById("dailyStreakScreen");
const dailyQuestionDate = document.getElementById("dailyQuestionDate");
const dailyQuestionText = document.getElementById("dailyQuestionText");
const dailyAnswerForm = document.getElementById("dailyAnswerForm");
const dailyAnswerInput = document.getElementById("dailyAnswerInput");
const submitDailyAnswerBtn = document.getElementById("submitDailyAnswerBtn");
const dailyWaitingState = document.getElementById("dailyWaitingState");
const dailyAnswersReveal = document.getElementById("dailyAnswersReveal");
const dailyMyAnswer = document.getElementById("dailyMyAnswer");
const dailyPartnerAnswer = document.getElementById("dailyPartnerAnswer");
const dailyCalendar = document.getElementById("dailyCalendar");

const dashboardSpaceCode =
    document.getElementById("dashboardSpaceCode");

const spaceCodeLabel =
    document.getElementById("spaceCodeLabel");

const rankingCountLabel =
    document.getElementById("rankingCountLabel");

const guessCountLabel =
    document.getElementById("guessCountLabel");

const questionsCountLabel =
    document.getElementById("questionsCountLabel");

const levelHeroStat =
    document.getElementById("levelHeroStat");

const mainCactusImage =
    document.getElementById("mainCactusImage");

const dashboardCactusMessage =
    document.getElementById("dashboardCactusMessage");

const currentXpHero =
    document.getElementById("currentXpHero");

const nextLevelXpHero =
    document.getElementById("nextLevelXpHero");

const cactusXpProgressBar =
    document.getElementById("cactusXpProgressBar");

const compatibilityMiniBar =
    document.getElementById("compatibilityMiniBar");

const seedsMiniBar =
    document.getElementById("seedsMiniBar");

const levelMiniBar =
    document.getElementById("levelMiniBar");

const completedGamesMiniBar =
    document.getElementById("completedGamesMiniBar");

let pendingGuessValidations = [];
let saveNotebookTimeout = null;

let currentNotebookId = null;
let currentNotebookData = null;
let notebooksLoadRequestId = 0;
let isCreatingNotebook = false;
let gardenEditMode = false;
let selectedGardenItemId = null;
let currentGardenItems = {};

const CREATOR_UID = "cJylm27fQTMXd0Esan7YqXkjV762";
let currentUser = null;

let pseudo = "";
let currentSpaceCode = "";
let currentInviteCode = "";

let rankings = [];
let currentRanking = null;
let guessQuestions = [];
let currentGuessQuestion = null;
let currentGuessId = null;
let lastRankingId = null;
let draggedItem = null;

let currentSpaceData = null;
let pendingRankingChallenges = [];
let previousScreen = "dashboard";

let isPlayingPendingChallenges = false;
let currentPendingChallengeIndex = 0;

let pendingGuessAnswers = []; 
let currentPendingGuessIndex = 0;

let pendingGuessPredictions = [];

let pendingGuessResults = [];

let likelyQuestions = [];

let currentLikelyQuestion = null;
let currentLikelyId = null;

let pendingLikelyChallenges = [];
let pendingLikelyResults = [];
let currentPendingLikelyIndex = 0;

let okQuestions = [];
let currentOkQuestion = null;
let currentOkId = null;

let pendingOkChallenges = [];
let pendingOkResults = [];
let currentPendingOkIndex = 0;

let greenFlagQuestions = [];
let currentGreenFlagQuestion = null;
let currentGreenFlagId = null;

let pendingGreenFlagChallenges = [];
let pendingGreenFlagResults = [];
let currentPendingGreenFlagIndex = 0;

let princessQuestions = [];
let currentPrincessQuestion = null;
let currentPrincessId = null;

let pendingPrincessChallenges = [];
let pendingPrincessResults = [];
let currentPendingPrincessIndex = 0;

let coupleQuestions = [];
let coupleQuestionsLoadPromise = null;
let currentCoupleQuestion = null;
let currentCoupleQuestionId = null;

let pendingQuestionsChallenges = [];
let pendingQuestionsResults = [];
let currentPendingQuestionsIndex = 0;

let pendingRankingResults = [];
let currentPendingRankingResultIndex = 0;

let nextAfterAnswerFunction = null;

let currentHistoryMode = null;
let currentHistoryItems = []; 
let currentEditingMemoryId = null;

const relationStatsModes = [
    {
        key: "ranking",
        label: "Classements",
        icon: "🌵",
        path: "rankingChallenges",
        color: "#66dc91"
    },
    {
        key: "guess",
        label: "Devine ma réponse",
        icon: "💭",
        path: "guessAnswers",
        color: "#ff8e82"
    },
    {
        key: "questions",
        label: "Questions",
        icon: "💬",
        path: "questionsChallenges",
        color: "#ffd45c"
    },
    {
        key: "likely",
        label: "Qui est le plus susceptible",
        icon: "😂",
        path: "likelyChallenges",
        color: "#9be37c"
    },
    {
        key: "ok",
        label: "OK ou Pas OK",
        icon: "✅",
        path: "okChallenges",
        color: "#73d5c6"
    },
    {
        key: "greenFlag",
        label: "Green Flag / Red Flag",
        icon: "🚩",
        path: "greenFlagChallenges",
        color: "#ff7385"
    },
    {
        key: "princess",
        label: "Princess Treatment",
        icon: "👑",
        path: "princessChallenges",
        color: "#d997ff"
    }
];

let lastKnownSeeds = null;
let activeRealtimeSpaceCode = "";
let activeRealtimeSubscriptions = [];


// ====================
// CHARGEMENT DES DONNÉES
// ====================

function stopCurrentSpaceListeners() {
    activeRealtimeSubscriptions.forEach(({ reference, callback }) => {
        reference.off("value", callback);
    });

    activeRealtimeSubscriptions = [];
    activeRealtimeSpaceCode = "";
}

function subscribeToSpaceValue(relativePath, callback) {
    if (!activeRealtimeSpaceCode) {
        return;
    }

    const completePath = [
        "spaces",
        activeRealtimeSpaceCode,
        relativePath
    ].filter(Boolean).join("/");
    const reference = database.ref(completePath);

    reference.on("value", callback);
    activeRealtimeSubscriptions.push({ reference, callback });
}

function listenToCurrentSpace(spaceCodeValue) {
    if (activeRealtimeSpaceCode === spaceCodeValue) {
        return;
    }

    stopCurrentSpaceListeners();
    activeRealtimeSpaceCode = spaceCodeValue;

    subscribeToSpaceValue("", (snapshot) => {
        const spaceData = snapshot.val();

        if (!spaceData) {
            return;
        }

        currentSpaceData = spaceData;
        updateNotificationsBadge(spaceData);
        updateDailyRitualDashboard(spaceData);

        if (lastShownScreen === "notifications") {
            renderNotifications(spaceData);
        }

        if (lastShownScreen === "dailyRitual") {
            renderDailyRitual(spaceData);
        }

        const liveRelationStats = buildRelationStatistics(spaceData);
        updateDashboardRelationStats(liveRelationStats);

        if (lastShownScreen === "stats") {
            renderRelationStats(liveRelationStats);
        }

        if (lastShownScreen === "garden") {
            renderGarden(spaceData);
        }

        if (lastShownScreen === "history") {
            renderMemories(spaceData.memories || {});
        }

        if (!spaceData.story && lastShownScreen === "dashboard") {
            showScreen("storyIntro");
            return;
        }

        updateRelationshipDays(spaceData.story);
        applyCoupleProfile(spaceData);

        let partner = null;

        if (
            spaceData.player1 &&
            spaceData.player1.uid !== currentUser.uid
        ) {
            partner = spaceData.player1;
        }

        if (
            spaceData.player2 &&
            spaceData.player2.uid !== currentUser.uid
        ) {
            partner = spaceData.player2;
        }

        if (partner) {
            partnerName.textContent = partner.pseudo || "Partenaire";
        } else {
            partnerName.textContent = "En attente...";
        }

        spaceCode.textContent = currentInviteCode || spaceCodeValue;

        if (spaceCodeLabel) {
            spaceCodeLabel.textContent = partner
                ? "Code espace :"
                : "Code à partager :";
        }

        if (dashboardSpaceCode) {
            dashboardSpaceCode.classList.toggle("is-waiting", !partner);
        }

        updateActivityBox();
    });

    listenToRankingChallenges();
    listenToGuessChallenges();
    listenToLikelyChallenges();
    listenToOkChallenges();
    listenToGreenFlagChallenges();
    listenToPrincessChallenges();
    listenToQuestionsChallenges();
}



async function loadRankingsData() {
    const response = await fetch("data/rankings.json");
    const data = await response.json();

    if (Array.isArray(data)) {
        rankings = data;
    } else {
        rankings = data.rankings || [];
    }

    updateDashboardContentCounts();
    console.log("Classements chargés :", rankings);
}

function updateDashboardContentCounts() {
    if (rankingCountLabel && rankings.length > 0) {
        rankingCountLabel.textContent =
            rankings.length +
            (rankings.length === 1 ? " catégorie" : " catégories");
    }

    if (guessCountLabel && guessQuestions.length > 0) {
        guessCountLabel.textContent =
            guessQuestions.length +
            (guessQuestions.length === 1 ? " question" : " questions");
    }

    if (questionsCountLabel && coupleQuestions.length > 0) {
        questionsCountLabel.textContent =
            coupleQuestions.length +
            (coupleQuestions.length === 1 ? " question" : " questions");
    }
}

async function loadLikelyQuestionsData() {
    const response =
        await fetch("data/likely.json");

    likelyQuestions =
        await response.json();

    console.log(
        "Questions Likely chargées :",
        likelyQuestions
    );
}

async function loadOkQuestionsData() {
    const response = await fetch("data/ok-ou-pas-ok.json");
    okQuestions = await response.json();

    console.log("Questions OK ou Pas OK chargées :", okQuestions);
}

loadOkQuestionsData();


// ====================
// ÉVÉNEMENTS
// ====================



savePseudoBtn.addEventListener("click", () => {
    pseudo = document.getElementById("pseudo").value.trim();

    if (pseudo === "") {
        alert("Choisis ton pseudo 🌵");
        return;
    }

    database.ref("users/" + currentUser.uid).set({
        pseudo: pseudo,
        email: currentUser.email,
        createdAt: Date.now()
    })
    .then(() => {
        console.log("Pseudo sauvegardé !");
        showScreen("couple");
    })
    .catch((error) => {
        console.error(error);
        alert(error.message);
    });
});

createSpaceBtn.addEventListener("click", () => {
    createSpaceBtn.disabled = true;
    createSpaceBtn.textContent = "Création…";

    createUniqueSpace()
        .then(({ spaceId, inviteCode }) => {
            currentSpaceCode = spaceId;
            currentInviteCode = inviteCode;
            localStorage.setItem("currentSpaceCode", currentSpaceCode);

            return database.ref("users/" + currentUser.uid).update({
                spaceCode: currentSpaceCode,
                inviteCode: currentInviteCode
            });
        })
        .then(() => {
            displayPseudo.textContent = pseudo;
            spaceCode.textContent = currentInviteCode;
            listenToCurrentSpace(currentSpaceCode);
            showScreen("dashboard");
        })
        .catch((error) => {
            console.error("Création de l’espace impossible", error);
            showToast("Impossible de créer l’espace pour le moment");
        })
        .finally(() => {
            createSpaceBtn.disabled = false;
            createSpaceBtn.textContent = "Créer un espace";
        });
});

function createUniqueSpace(attempt = 0) {
    if (attempt >= 12) {
        return Promise.reject(new Error("Aucun code espace disponible"));
    }

    const inviteCode = generateSpaceCode();
    const spaceReference = database.ref("spaces").push();
    const spaceId = spaceReference.key;
    const invitationReference = database.ref("invitations/" + inviteCode);
    const expiresAt = Date.now() + (7 * 24 * 60 * 60 * 1000);

    return invitationReference.transaction((existingInvitation) => {
        if (existingInvitation) {
            return;
        }

        return {
            spaceId,
            createdBy: currentUser.uid,
            createdAt: Date.now(),
            expiresAt
        };
    }).then((result) => {
        if (!result.committed) {
            return createUniqueSpace(attempt + 1);
        }

        return spaceReference.set({
            code: inviteCode,
            inviteCode,
            createdAt: Date.now(),
            player1: { uid: currentUser.uid, pseudo },
            player2: null
        }).then(() => ({ spaceId, inviteCode }))
            .catch((error) => {
                return invitationReference.remove().then(() => {
                    throw error;
                });
            });
    });
}

joinSpaceBtn.addEventListener("click", () => {
    const joinCode = document.getElementById("joinCode").value.trim().toUpperCase();

    if (joinCode === "") {
        alert("Entre un code d'espace 🌵");
        return;
    }

    joinSpaceBtn.disabled = true;
    joinSpaceBtn.textContent = "Connexion…";

    const invitationReference = database.ref("invitations/" + joinCode);
    let joinedSpaceId = "";

    invitationReference.transaction((invitation) => {
        if (!invitation || invitation.expiresAt <= Date.now()) {
            return;
        }

        if (invitation.claimedBy && invitation.claimedBy !== currentUser.uid) {
            return;
        }

        invitation.claimedBy = currentUser.uid;
        invitation.claimedAt = Date.now();
        return invitation;
    }).then((claimResult) => {
        const invitation = claimResult.snapshot.val();

        if (!invitation) {
            throw new Error("CODE_INVALIDE");
        }

        if (invitation.expiresAt <= Date.now()) {
            throw new Error("CODE_EXPIRE");
        }

        if (!claimResult.committed || invitation.claimedBy !== currentUser.uid) {
            throw new Error("ESPACE_COMPLET");
        }

        joinedSpaceId = invitation.spaceId;

        return database.ref(
            "joinRequests/" + joinedSpaceId + "/" + currentUser.uid
        ).set({
            inviteCode: joinCode,
            createdAt: Date.now()
        });
    }).then(() => {
        const spaceReference = database.ref("spaces/" + joinedSpaceId);
        return spaceReference.transaction((spaceData) => {
        if (!spaceData) {
            return;
        }

        const alreadyMember = [spaceData.player1, spaceData.player2].some((player) => {
            return player?.uid === currentUser.uid;
        });

        if (alreadyMember) {
            return spaceData;
        }

        if (spaceData.player1 && spaceData.player2) {
            return;
        }

        const playerSlot = spaceData.player1 ? "player2" : "player1";
        spaceData[playerSlot] = { uid: currentUser.uid, pseudo };
        return spaceData;
        });
    }).then((result) => {
        const spaceData = result.snapshot.val();
        if (!spaceData) {
            alert("Cet espace n'existe pas 🌵");
            return false;
        }

        const joined = [spaceData.player1, spaceData.player2].some((player) => {
            return player?.uid === currentUser.uid;
        });

        if (!joined) {
            alert("Cet espace est déjà complet 🌵");
            return false;
        }

        return database.ref("users/" + currentUser.uid).update({
            spaceCode: joinedSpaceId,
            inviteCode: joinCode
        }).then(() => {
            return database
                .ref("joinRequests/" + joinedSpaceId + "/" + currentUser.uid)
                .remove()
                .catch((cleanupError) => {
                    console.warn("Nettoyage de la demande différé", cleanupError);
                });
        }).then(() => true);
    }).then((joined) => {
        if (!joined) {
            return;
        }

        currentSpaceCode = joinedSpaceId;
        currentInviteCode = joinCode;
        localStorage.setItem("currentSpaceCode", currentSpaceCode);
        spaceCode.textContent = currentInviteCode;
        displayPseudo.textContent = pseudo;
        listenToCurrentSpace(currentSpaceCode);
        showScreen("dashboard");
    })
        .catch((error) => {
            console.error(error);

            const messages = {
                CODE_INVALIDE: "Ce code d’invitation est invalide 🌵",
                CODE_EXPIRE: "Cette invitation a expiré 🌵",
                ESPACE_COMPLET: "Cet espace est déjà complet 🌵"
            };

            const message = messages[error.message] || getFriendlyFirebaseError(error);
            const invitationCleanup = error.message === "CODE_EXPIRE"
                ? invitationReference.remove()
                : invitationReference.transaction((invitation) => {
                    if (!invitation || invitation.claimedBy !== currentUser.uid) {
                        return invitation;
                    }

                    delete invitation.claimedBy;
                    delete invitation.claimedAt;
                    return invitation;
                });
            const joinRequestCleanup = joinedSpaceId
                ? database.ref(
                    "joinRequests/" + joinedSpaceId + "/" + currentUser.uid
                ).remove()
                : Promise.resolve();

            return Promise.all([invitationCleanup, joinRequestCleanup])
                .catch((cleanupError) => {
                    console.warn("Nettoyage de la jonction impossible", cleanupError);
                }).then(() => {
                alert(message);
            });
        })
        .finally(() => {
            joinSpaceBtn.disabled = false;
            joinSpaceBtn.textContent = "Rejoindre un espace";
        });
});

rankingBtn.addEventListener("click", () => {
    startRandomRanking();
});

guessBtn.addEventListener("click", () => {
    if (guessQuestions.length === 0) {
        alert("Les questions chargent encore 🌵");
        return;
    }

    currentGuessQuestion =
        getRandomItem(guessQuestions);

    guessQuestionText.textContent =
        currentGuessQuestion.question;

    guessAnswerInput.value = "";

    guessAnswerTitle.textContent = "Écris ta réponse";

    showScreen("guessAnswer");
});

validateGuessAnswerBtn.addEventListener("click", () => {
    const answer = guessAnswerInput.value.trim();

    if (answer === "") {
        alert("Écris ta réponse 🌵");
        return;
    }

    currentGuessId = currentGuessQuestion.id;

    database
        .ref("spaces/" + currentSpaceCode + "/guessAnswers/" + currentGuessId)
        .update({
            questionId: currentGuessQuestion.id,
            question: currentGuessQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref("spaces/" + currentSpaceCode + "/guessAnswers/" + currentGuessId + "/answers/" + currentUser.uid)
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            return incrementAnswersCount();
        })
        .then(() => {
            showToast("🌵 Réponse enregistrée");
            showScreen("dashboard");
        });
});

backFromGuessBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

backDashboardFromGuessWaitBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

validateRankingBtn.addEventListener("click", () => {
    const items = rankingList.querySelectorAll("li");

    const answer = [];

    items.forEach((item) => {
        answer.push(
            item.querySelector(".ranking-item-text").textContent
        );
    });

    saveRankingAnswer(
        currentRanking.id,
        answer
    );

    saveRankingChallenge(
        currentRanking.id,
        answer
    )
    .then(() => {
        return incrementAnswersCount();
    })
    .then(() => {
        return showRankingCompatibilityIfReady(currentRanking.id);
    });
});

nextRankingBtn.addEventListener("click", () => {
    if (isPlayingPendingChallenges) {
        currentPendingChallengeIndex++;
        startPendingRankingChallenge();
        return;
    }

    startRandomRanking();
});

backDashboardBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

nextAfterCompatibilityBtn.addEventListener("click", () => {
    markCurrentRankingResultSeen().then(() => {

        currentPendingRankingResultIndex = 0;

        setTimeout(() => {

            if (pendingRankingResults.length > 0) {
                showPendingRankingResult();
                return;
            }

            if (isPlayingPendingChallenges) {
                currentPendingChallengeIndex++;
                startPendingRankingChallenge();
                return;
            }

            startRandomRanking();

        }, 300);

    });
});

backDashboardAfterCompatibilityBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

signupBtn.addEventListener("click", () => {
    const email = authEmail.value.trim();
    const password = authPassword.value.trim();

    if (email === "" || password === "") {
        authMessage.textContent = "Entre un e-mail et un mot de passe 🌵";
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            currentUser = userCredential.user;
            showScreen("pseudo");
        })
        .catch((error) => {
            authMessage.textContent = getFriendlyFirebaseError(error);
        });
});

loginBtn.addEventListener("click", () => {
    const email = authEmail.value.trim();
    const password = authPassword.value.trim();

    if (email === "" || password === "") {
        authMessage.textContent = "Entre ton e-mail et ton mot de passe 🌵";
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
    currentUser = userCredential.user;
    console.log("Connecté :", currentUser.uid);
})
        .catch((error) => {
            authMessage.textContent = getFriendlyFirebaseError(error);
        });
});

forgotPasswordBtn.addEventListener("click", () => {
    sendPasswordReset();
});

function sendPasswordReset() {
    const email = authEmail.value.trim();

    if (!email) {
        authMessage.textContent = "Entre d’abord ton adresse e-mail 🌵";
        authEmail.focus();
        return;
    }

    forgotPasswordBtn.disabled = true;
    forgotPasswordBtn.textContent = "Envoi…";
    authMessage.textContent = "";

    auth.sendPasswordResetEmail(email)
        .then(() => {
            authMessage.textContent = "Si cette adresse correspond à un compte, un e-mail vient d’être envoyé 💌";
        })
        .catch((error) => {
            console.warn("Réinitialisation du mot de passe impossible", error);
            authMessage.textContent = error.code === "auth/invalid-email"
                ? "Cette adresse e-mail n’est pas valide."
                : "Impossible d’envoyer l’e-mail pour le moment.";
        })
        .finally(() => {
            forgotPasswordBtn.disabled = false;
            forgotPasswordBtn.textContent = "Mot de passe oublié ?";
        });
}

function prepareAccountSettings() {
    currentAccountEmail.textContent = currentUser?.email || "Adresse indisponible";
    newAccountPassword.value = "";
}

function changeAccountPassword() {
    const password = newAccountPassword.value;

    if (!currentUser) {
        showToast("Reconnecte-toi pour modifier ton mot de passe");
        return;
    }

    if (password.length < 8) {
        showToast("Choisis au moins 8 caractères");
        newAccountPassword.focus();
        return;
    }

    changePasswordBtn.disabled = true;
    changePasswordBtn.textContent = "Modification…";

    currentUser.updatePassword(password)
        .then(() => {
            newAccountPassword.value = "";
            showToast("Mot de passe modifié 🔐");
        })
        .catch((error) => {
            console.warn("Modification du mot de passe impossible", error);

            if (error.code === "auth/requires-recent-login") {
                showToast("Pour ta sécurité, déconnecte-toi puis reconnecte-toi avant de réessayer");
                return;
            }

            if (error.code === "auth/weak-password") {
                showToast("Ce mot de passe est trop faible");
                return;
            }

            showToast("Impossible de modifier le mot de passe");
        })
        .finally(() => {
            changePasswordBtn.disabled = false;
            changePasswordBtn.textContent = "Modifier mon mot de passe";
        });
}

function createExportFilename() {
    const date = new Date().toISOString().slice(0, 10);
    return "cactus-export-" + date + ".json";
}

function exportAccountData() {
    if (!currentUser) {
        showToast("Reconnecte-toi pour exporter tes données");
        return;
    }

    exportDataBtn.disabled = true;
    exportDataBtn.textContent = "Préparation…";

    const userRequest = database
        .ref("users/" + currentUser.uid)
        .once("value");
    const spaceRequest = currentSpaceCode
        ? database.ref("spaces/" + currentSpaceCode).once("value")
        : Promise.resolve(null);

    Promise.all([userRequest, spaceRequest])
        .then(([userSnapshot, spaceSnapshot]) => {
            const exportData = {
                format: "cactus-account-export",
                version: 1,
                exportedAt: new Date().toISOString(),
                account: {
                    uid: currentUser.uid,
                    email: currentUser.email,
                    profile: userSnapshot.val() || null
                },
                coupleSpace: spaceSnapshot ? (spaceSnapshot.val() || null) : null
            };
            const blob = new Blob(
                [JSON.stringify(exportData, null, 2)],
                { type: "application/json;charset=utf-8" }
            );
            const downloadUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.download = createExportFilename();
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
            showToast("Export téléchargé 📦");
        })
        .catch((error) => {
            console.error("Export des données impossible", error);
            showToast("Impossible de préparer l’export");
        })
        .finally(() => {
            exportDataBtn.disabled = false;
            exportDataBtn.textContent = "Télécharger l’export";
        });
}

async function hasRecentAuthentication(user) {
    const tokenResult = await user.getIdTokenResult();
    const authenticationTime = Date.parse(tokenResult.authTime);

    return Number.isFinite(authenticationTime) &&
        Date.now() - authenticationTime < 5 * 60 * 1000;
}

async function deleteCurrentAccount() {
    if (deleteAccountConfirmation.value.trim() !== "SUPPRIMER") {
        showToast("Écris exactement SUPPRIMER pour confirmer");
        deleteAccountConfirmation.focus();
        return;
    }

    const user = auth.currentUser;
    if (!user) {
        showToast("Reconnecte-toi avant de supprimer ton compte");
        return;
    }

    confirmDeleteAccountBtn.disabled = true;
    cancelDeleteAccountBtn.disabled = true;
    confirmDeleteAccountBtn.textContent = "Vérification…";
    let databaseDataRemoved = false;

    try {
        const isRecent = await hasRecentAuthentication(user);

        if (!isRecent) {
            showToast("Déconnecte-toi puis reconnecte-toi avant de confirmer la suppression");
            return;
        }

        const userUid = user.uid;
        const spaceReference = currentSpaceCode
            ? database.ref("spaces/" + currentSpaceCode).once("value")
            : Promise.resolve(null);
        const invitationReference = currentInviteCode
            ? database.ref("invitations/" + currentInviteCode).once("value")
            : Promise.resolve(null);
        const [spaceSnapshot, invitationSnapshot] = await Promise.all([
            spaceReference,
            invitationReference
        ]);
        const spaceData = spaceSnapshot ? spaceSnapshot.val() : null;
        const invitationData = invitationSnapshot ? invitationSnapshot.val() : null;
        const updates = {};
        updates["users/" + userUid] = null;

        if (spaceData && currentSpaceCode) {
            const mySlot = spaceData.player1?.uid === userUid
                ? "player1"
                : (spaceData.player2?.uid === userUid ? "player2" : null);
            const partnerExists = [spaceData.player1, spaceData.player2].some((player) => {
                return player && player.uid !== userUid;
            });

            if (mySlot && partnerExists) {
                updates["spaces/" + currentSpaceCode + "/" + mySlot] = null;
            } else if (mySlot) {
                if (invitationData && invitationData.spaceId === currentSpaceCode) {
                    updates["invitations/" + currentInviteCode] = null;
                }
                updates["joinRequests/" + currentSpaceCode + "/" + userUid] = null;
                updates["spaces/" + currentSpaceCode] = null;
            }
        }

        confirmDeleteAccountBtn.textContent = "Suppression…";
        await database.ref().update(updates);
        databaseDataRemoved = true;
        await user.delete();

        stopCurrentSpaceListeners();
        localStorage.clear();
        sessionStorage.clear();
        currentSpaceCode = "";
        currentInviteCode = "";
        currentSpaceData = null;
        showScreen("login");
        authMessage.textContent = "Ton compte Cactus a été supprimé.";
    } catch (error) {
        console.error("Suppression du compte impossible", error);

        if (error.code === "auth/requires-recent-login") {
            showToast("Déconnecte-toi puis reconnecte-toi avant de réessayer");
        } else if (databaseDataRemoved) {
            showToast("Les données ont été retirées, mais Firebase n’a pas supprimé la connexion. Reconnecte-toi et contacte la créatrice.");
        } else {
            showToast("Impossible de supprimer le compte pour le moment");
        }
    } finally {
        confirmDeleteAccountBtn.disabled = false;
        cancelDeleteAccountBtn.disabled = false;
        confirmDeleteAccountBtn.textContent = "Confirmer la suppression";
    }
}

logoutBtn.addEventListener("click", () => {
    auth.signOut();
});

logoutFromCoupleBtn.addEventListener("click", () => {
    auth.signOut();
});

leaveSpaceBtn.addEventListener("click", () => {
    console.log("Bouton quitter espace cliqué");

    if (currentSpaceCode === "") {
        showScreen("couple");
        return;
    }

    database.ref("spaces/" + currentSpaceCode).once("value")
        .then((snapshot) => {
            const spaceData = snapshot.val();

            if (!spaceData) {
                return;
            }

            if (spaceData.player1 && spaceData.player1.uid === currentUser.uid) {
                return database.ref("spaces/" + currentSpaceCode + "/player1").remove();
            }

            if (spaceData.player2 && spaceData.player2.uid === currentUser.uid) {
                return database.ref("spaces/" + currentSpaceCode + "/player2").remove();
            }
        })
        .then(() => {
            return database.ref("users/" + currentUser.uid).update({
                spaceCode: null,
                inviteCode: null
            });
        })
        .then(() => {
            stopCurrentSpaceListeners();
            currentSpaceCode = "";
            currentInviteCode = "";
            currentSpaceData = null;

            spaceCode.textContent = "CACTUS-0000";

            if (partnerName) {
                partnerName.textContent = "En attente...";
            }

            showScreen("couple");
        })
        .catch((error) => {
            console.error(error);
            alert(error.message);
        });
});

backFromRankingBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

backToLoginBtn.addEventListener("click", () => {
    showScreen("login");
});

settingsBtn.addEventListener("click", () => {
    previousScreen = "dashboard";
    prepareAccountSettings();
    showScreen("settings");
});

backFromSettingsBtn.addEventListener("click", () => {
    showScreen(previousScreen);
});

saveNewPseudoBtn.addEventListener("click", () => {
    const updatedPseudo = newPseudo.value.trim();

    if (updatedPseudo === "") {
        alert("Entre un pseudo 🌵");
        return;
    }

    pseudo = updatedPseudo;
    displayPseudo.textContent = pseudo;

    database.ref("users/" + currentUser.uid).update({
        pseudo: pseudo
    });

    if (currentSpaceCode !== "") {
        database.ref("spaces/" + currentSpaceCode).once("value")
            .then((snapshot) => {
                const spaceData = snapshot.val();

                if (!spaceData) {
                    return;
                }

                if (spaceData.player1 && spaceData.player1.uid === currentUser.uid) {
                    return database.ref("spaces/" + currentSpaceCode + "/player1/pseudo").set(pseudo);
                }

                if (spaceData.player2 && spaceData.player2.uid === currentUser.uid) {
                    return database.ref("spaces/" + currentSpaceCode + "/player2/pseudo").set(pseudo);
                }
            });
    }

    newPseudo.value = "";
    alert("Pseudo modifié 🌵");
});

function applyTheme(theme) {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-theme", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";

    if (themeSettingIcon) {
        themeSettingIcon.textContent = isDark ? "🌙" : "☀️";
    }

    if (themeSettingLabel) {
        themeSettingLabel.textContent = isDark ? "Thème sombre" : "Thème clair";
    }

    if (toggleThemeBtn) {
        toggleThemeBtn.textContent = isDark
            ? "Passer au thème clair"
            : "Passer au thème sombre";
    }

    if (themeColorMeta) {
        themeColorMeta.setAttribute("content", isDark ? "#003e2d" : "#effaf3");
    }
}

toggleThemeBtn.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("dark-theme")
        ? "light"
        : "dark";

    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
});

historyBtn.addEventListener("click", () => {
    loadMemories();
    showScreen("history");
});

showMemoryFormBtn.addEventListener("click", () => {
    openMemoryForm();
});

cancelMemoryBtn.addEventListener("click", () => {
    closeMemoryForm();
});

memoryEmoji.addEventListener("input", () => {
    memoryFormIcon.textContent = memoryEmoji.value.trim() || "💚";
});

memoryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveMemory();
});

backFromHistoryBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

gardenBtn.addEventListener("click", () => {
    showScreen("garden");
});

backFromGardenBtn.addEventListener("click", () => {
    setGardenEditMode(false);
    showScreen("dashboard");
});

gardenEditBtn.addEventListener("click", () => {
    setGardenEditMode(!gardenEditMode);
});

gardenSmallerBtn.addEventListener("click", () => resizeSelectedGardenItem(-0.1));
gardenLargerBtn.addEventListener("click", () => resizeSelectedGardenItem(0.1));
gardenBackwardBtn.addEventListener("click", () => changeSelectedGardenDepth(-1));
gardenForwardBtn.addEventListener("click", () => changeSelectedGardenDepth(1));
gardenStoreSelectedBtn.addEventListener("click", () => {
    if (selectedGardenItemId) {
        toggleGardenItem(selectedGardenItemId, false);
        selectGardenItem(null);
    }
});
gardenResetLayoutBtn.addEventListener("click", () => resetGardenLayout());


showCreateNotebookBtn.addEventListener("click", () => {
    if (createNotebookBox.style.display === "none") {
        createNotebookBox.style.display = "block";
    } else {
        createNotebookBox.style.display = "none";
    }
});

createNotebookBtn.addEventListener("click", () => {
    if (isCreatingNotebook) {
        return;
    }

    const emoji = notebookEmoji.value.trim() || "📝";
    const title = notebookTitle.value.trim();

    if (title === "") {
        alert("Donne un titre à ton carnet 🌵");
        return;
    }

    isCreatingNotebook = true;
    createNotebookBtn.disabled = true;
    createNotebookBtn.textContent = "Création…";

    database
        .ref("spaces/" + currentSpaceCode + "/garden/notebooks")
        .push({
            emoji: emoji,
            title: title,
            color: notebookColor.value,
            createdBy: pseudo,
            createdByUid: currentUser.uid,
            createdAt: Date.now()
        })
        .then(() => {
            notebookEmoji.value = "";
            notebookTitle.value = "";
            createNotebookBox.style.display = "none";
            return loadNotebooks();
        })
        .catch((error) => {
            console.error("Création du carnet impossible", error);
            showToast("Impossible de créer le carnet");
        })
        .finally(() => {
            isCreatingNotebook = false;
            createNotebookBtn.disabled = false;
            createNotebookBtn.textContent = "Créer le carnet";
        });
});

backToGardenBtn.addEventListener("click", () => {
    currentNotebookId = null;
    currentNotebookData = null;

    showScreen("garden");
});


renameNotebookBtn.addEventListener("click", () => {
    if (!currentNotebookId || !currentNotebookData) {
        return;
    }

    const newTitle = prompt(
        "Nouveau nom du carnet",
        currentNotebookData.title
    );

    if (!newTitle || newTitle.trim() === "") {
        return;
    }

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/garden/notebooks/" +
            currentNotebookId
        )
        .update({
            title: newTitle.trim(),
            updatedAt: Date.now(),
            updatedBy: currentUser.uid,
            updatedByPseudo: pseudo
        })
        .then(() => {
            currentNotebookData.title = newTitle.trim();

            openedNotebookTitle.textContent =
                (currentNotebookData.emoji || "📝") +
                " " +
                currentNotebookData.title;
        });
});

deleteNotebookBtn.addEventListener("click", () => {
    if (!currentNotebookId) {
        return;
    }

    const confirmDelete = confirm(
        "Supprimer ce carnet ? Cette action est définitive 🌵"
    );

    if (!confirmDelete) {
        return;
    }

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/garden/notebooks/" +
            currentNotebookId
        )
        .remove()
        .then(() => {
            currentNotebookId = null;
            currentNotebookData = null;

            showScreen("garden");
        });
});

boldBtn.addEventListener("click", () => {
    runEditorCommand("bold");
    keepEditorToolbarOpen();
});

italicBtn.addEventListener("click", () => {
    runEditorCommand("italic");
    keepEditorToolbarOpen();
});

underlineBtn.addEventListener("click", () => {
    runEditorCommand("underline");
    keepEditorToolbarOpen();
});

textColorPicker.addEventListener("input", () => {
    runEditorCommand("foreColor", textColorPicker.value);
    keepEditorToolbarOpen();
});

textColorPicker.addEventListener("click", () => {
    runEditorCommand("foreColor", textColorPicker.value);
    keepEditorToolbarOpen();
});

highlightColorPicker.addEventListener("input", () => {
    runEditorCommand("hiliteColor", highlightColorPicker.value);
    keepEditorToolbarOpen();
});

highlightColorPicker.addEventListener("click", () => {
    runEditorCommand("hiliteColor", highlightColorPicker.value);
    keepEditorToolbarOpen();
});

insertCheckboxLineBtn.addEventListener("click", () => {
    notebookEditor.focus();

    document.execCommand(
        "insertHTML",
        false,
        '<p class="checkbox-line"><span class="fake-checkbox" contenteditable="false">☐</span>&nbsp;</p>'
    );

    saveNotebookContent();
    keepEditorToolbarOpen();
});



notebookEditor.addEventListener("click", (event) => {
    const checkbox = event.target.closest(".fake-checkbox");

    if (!checkbox) return;

    event.preventDefault();
    event.stopPropagation();

    const line = checkbox.closest(".checkbox-line");

    if (checkbox.textContent.trim() === "☐") {
        checkbox.textContent = "☑";
        line.classList.add("checked-line");
    } else {
        checkbox.textContent = "☐";
        line.classList.remove("checked-line");
    }

    saveNotebookContent();
});

validateGuessPredictionBtn.addEventListener("click", () => {
    const prediction = guessPredictionInput.value.trim();

    if (prediction === "") {
        alert("Écris ta prédiction 🌵");
        return;
    }

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/guessAnswers/" +
            currentGuessId +
            "/predictions/" +
            currentUser.uid
        )
        .set({
            uid: currentUser.uid,
            pseudo: pseudo,
            prediction: prediction,
            createdAt: Date.now()
        })
        .then(() => {
            alert("Prédiction enregistrée 🌵");
            showScreen("dashboard");
        });
});

guessTrueBtn.addEventListener("click", () => {
    saveGuessValidation("VRAI");
});

guessAlmostBtn.addEventListener("click", () => {
    saveGuessValidation("BOF");
});

guessFalseBtn.addEventListener("click", () => {
    saveGuessValidation("FAUX");
});

nextGuessBtn.addEventListener("click", () => {
    markCurrentGuessResultSeen().then(() => {
        currentPendingGuessIndex = 0;

        setTimeout(() => {
            showPendingGuessResult();
        }, 300);
    });
});

backDashboardFromGuessResultBtn.addEventListener("click", () => {
    markCurrentGuessResultSeen().then(() => {
        showScreen("dashboard");
    });
});

likelyBtn.addEventListener("click", () => {
    startLikelyGame();
});

likelyMeBtn.addEventListener("click", () => {
    saveLikelyAnswer("Moi");
});

likelyPartnerBtn.addEventListener("click", () => {
    saveLikelyAnswer("Toi");
});

likelyBothBtn.addEventListener("click", () => {
    saveLikelyAnswer("Nous deux");
});

backFromLikelyBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

nextLikelyBtn.addEventListener("click", () => {
    const currentChallenge =
        pendingLikelyResults[currentPendingLikelyIndex];

    markCurrentLikelyResultSeen().then(() => {
        pendingLikelyResults =
            pendingLikelyResults.filter((challenge) => {
                return challenge.questionId !== currentChallenge.questionId;
            });

        currentPendingLikelyIndex = 0;
        showPendingLikelyResult();
    });
});

backDashboardFromLikelyBtn.addEventListener("click", () => {
    markCurrentLikelyResultSeen().then(() => {
        showScreen("dashboard");
    });
});

okBtn.addEventListener("click", () => {
    startOkGame();
});

okYesBtn.addEventListener("click", () => {
    saveOkAnswer("OK");
});

okDependsBtn.addEventListener("click", () => {
    saveOkAnswer("Ça dépend");
});

okNoBtn.addEventListener("click", () => {
    saveOkAnswer("Pas OK");
});

backFromOkBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

nextOkBtn.addEventListener("click", () => {
    markCurrentOkResultSeen().then(() => {
        currentPendingOkIndex = 0;

        setTimeout(() => {
            showPendingOkResult();
        }, 300);
    });
});

backDashboardFromOkBtn.addEventListener("click", () => {
    markCurrentOkResultSeen().then(() => {
        showScreen("dashboard");
    });
});

greenFlagBtn.addEventListener("click", () => {
    startGreenFlagGame();
});

greenFlagYesBtn.addEventListener("click", () => {
    saveGreenFlagAnswer("Green Flag");
});

greenFlagNeutralBtn.addEventListener("click", () => {
    saveGreenFlagAnswer("Neutre");
});

greenFlagNoBtn.addEventListener("click", () => {
    saveGreenFlagAnswer("Red Flag");
});

backFromGreenFlagBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

nextGreenFlagBtn.addEventListener("click", () => {
    markCurrentGreenFlagResultSeen().then(() => {
        currentPendingGreenFlagIndex = 0;

        setTimeout(() => {
            showPendingGreenFlagResult();
        }, 300);
    });
});

backDashboardFromGreenFlagBtn.addEventListener("click", () => {
    markCurrentGreenFlagResultSeen().then(() => {
        showScreen("dashboard");
    });
});

princessBtn.addEventListener("click", () => {
    startPrincessGame();
});

princessYesBtn.addEventListener("click", () => {
    savePrincessAnswer("Princess Treatment");
});

princessDependsBtn.addEventListener("click", () => {
    savePrincessAnswer("Mitigé");
});

princessNoBtn.addEventListener("click", () => {
    savePrincessAnswer("C’est normal");
});

backFromPrincessBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

nextPrincessBtn.addEventListener("click", () => {
    markCurrentPrincessResultSeen().then(() => {
        currentPendingPrincessIndex = 0;

        setTimeout(() => {
            showPendingPrincessResult();
        }, 300);
    });
});

backDashboardFromPrincessBtn
    .addEventListener(
        "click",
        () => {

            markCurrentPrincessResultSeen()
                .then(() => {

                showScreen(
                    "dashboard"
                );
            });
        }
    );

    questionsBtn.addEventListener("click", () => {
    startQuestionsGame();
});

validateQuestionsAnswerBtn.addEventListener("click", () => {
    saveQuestionsAnswer();
});

backFromQuestionsBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

nextQuestionsBtn.addEventListener("click", () => {
    markCurrentQuestionsResultSeen().then(() => {
        currentPendingQuestionsIndex = 0;

        setTimeout(() => {
            showPendingQuestionsResult();
        }, 300);
    });
});

backDashboardFromQuestionsBtn.addEventListener("click", () => {
    markCurrentQuestionsResultSeen().then(() => {
        showScreen("dashboard");
    });
});

answerSentNextBtn.addEventListener("click", () => {
    if (nextAfterAnswerFunction) {
        nextAfterAnswerFunction();
        return;
    }

    showScreen("dashboard");
});

answerSentDashboardBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

document.querySelectorAll(".history-mode-card").forEach((card) => {
    card.addEventListener("click", () => {
        const mode = card.dataset.historyMode;
        openHistoryMode(mode);
    });
});

backToHistoryBtn.addEventListener("click", () => {
    showScreen("history");
});

backToHistoryDetailBtn.addEventListener("click", () => {
    showScreen("historyDetail");
});

backFromStatsBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

dashboardAchievementsBtn.addEventListener("click", () => {
    openAchievements();
});

backFromAchievementsBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

statsPlayBtn.addEventListener("click", () => {
    showScreen("allGames");
});

startStoryBtn.addEventListener("click", () => {
    showScreen("storyDate");
});

saveStoryDateBtn.addEventListener("click", () => {
    const startDate = storyDateInput.value;

    if (!startDate) {
        alert("Choisis une date ❤️");
        return;
    }

    saveStoryData({
        startDate: startDate
    }).then(() => {
        showScreen("storyMeeting");
    });
});

saveStoryMeetingBtn.addEventListener("click", () => {
    saveStoryData({
        meetingPlace: storyMeetingInput.value.trim()
    }).then(() => {
        showScreen("storyFirstDate");
    });
});

saveStoryFirstDateBtn.addEventListener("click", () => {
    saveStoryData({
        firstDate: storyFirstDateInput.value.trim()
    }).then(() => {
        showScreen("storyNicknames");
    });
});

saveStoryNicknamesBtn.addEventListener("click", () => {
    saveStoryData({
        nicknameMine: storyNicknameMineInput.value.trim(),
        nicknamePartner: storyNicknamePartnerInput.value.trim()
    }).then(() => {
        showScreen("storySong");
    });
});

saveStorySongBtn.addEventListener("click", () => {
    saveStoryData({
        song: storySongInput.value.trim()
    }).then(() => {
        showScreen("storyDistance");
    });
});

storyTogetherBtn.addEventListener("click", () => {
    saveStoryData({
        situation: "together"
    }).then(() => {
        showScreen("storyFinal");
    });
});

storyDistanceBtn.addEventListener("click", () => {
    saveStoryData({
        situation: "distance"
    }).then(() => {
        showScreen("storyFinal");
    });
});

finishStoryBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

editStoryBtn.addEventListener("click", () => {
    showScreen("storyIntro");
});

backFromStoryPageBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

openAllGamesBtn.addEventListener("click", () => {
    renderGameInbox();
    showScreen("allGames");
});

backFromAllGamesBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

allRankingBtn.addEventListener("click", () => {
    startRandomRanking();
});

allGuessBtn.addEventListener("click", () => {
    guessBtn.click();
});


allQuestionsBtn.addEventListener("click", () => {
    startQuestionsGame();
});

dashboardSettingsBtn.addEventListener("click", () => {
    previousScreen = "dashboard";
    prepareAccountSettings();
    showScreen("settings");
});

changePasswordBtn.addEventListener("click", () => {
    changeAccountPassword();
});

exportDataBtn.addEventListener("click", () => {
    exportAccountData();
});

showDeleteAccountBtn.addEventListener("click", () => {
    deleteAccountConfirmBox.style.display = "block";
    deleteAccountConfirmation.value = "";
    deleteAccountConfirmation.focus();
});

cancelDeleteAccountBtn.addEventListener("click", () => {
    deleteAccountConfirmBox.style.display = "none";
    deleteAccountConfirmation.value = "";
});

confirmDeleteAccountBtn.addEventListener("click", () => {
    deleteCurrentAccount();
});

dashboardNotificationsBtn.addEventListener("click", () => {
    showScreen("notifications");
});

dailyRitualCard.addEventListener("click", () => {
    showScreen("dailyRitual");
});

backFromDailyRitualBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

submitDailyAnswerBtn.addEventListener("click", () => {
    submitDailyRitualAnswer();
});

backFromNotificationsBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

markNotificationsReadBtn.addEventListener("click", () => {
    markAllNotificationsRead();
});

[notifyAnswersSetting, notifyGamesSetting, notifyAchievementsSetting, notifyGardenSetting].forEach((input) => {
    input.addEventListener("change", () => {
        saveNotificationPreferences();
        if (currentSpaceData) {
            updateNotificationsBadge(currentSpaceData);
        }
    });
});

creatorSetSeedsBtn.addEventListener("click", () => {
    setCreatorStatValue("seeds", Number(creatorSeedsAmount.value));
});

creatorSetXpBtn.addEventListener("click", () => {
    setCreatorXp(Number(creatorXpAmount.value));
});

creatorLegendaryBtn.addEventListener("click", () => {
    if (confirm("Passer l’espace au niveau 21 avec 2 000 XP ?")) {
        setCreatorXp(2000);
    }
});

creatorUnlockGardenBtn.addEventListener("click", () => {
    if (confirm("Débloquer gratuitement tous les objets du Jardin ?")) {
        creatorUnlockEntireGarden();
    }
});

creatorUnlockAchievementsBtn.addEventListener("click", () => {
    if (confirm("Débloquer les 12 succès pour cet espace ?")) {
        creatorSetAllAchievements(true);
    }
});

creatorResetAchievementsBtn.addEventListener("click", () => {
    if (confirm("Reverrouiller tous les succès de cet espace ?")) {
        creatorSetAllAchievements(false);
    }
});

creatorResetDailyBtn.addEventListener("click", () => {
    if (confirm("Supprimer les deux réponses et le bonus du rituel d’aujourd’hui ?")) {
        creatorResetTodayDailyRitual();
    }
});

dashboardProfileBtn.addEventListener("click", () => {
    openCoupleProfile();
});

backFromCoupleProfileBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

openStoryFromProfileBtn.addEventListener("click", () => {
    openStoryPage();
});

profileAccentInput.addEventListener("input", () => {
    profileAccentValue.textContent = profileAccentInput.value.toUpperCase();
    coupleProfileScreen.style.setProperty("--profile-accent", profileAccentInput.value);
});

profileAvatarInput.addEventListener("input", () => {
    profileMyAvatar.textContent = profileAvatarInput.value.trim() || "🌵";
});

profileSpaceNameInput.addEventListener("input", () => {
    profileSpaceNamePreview.textContent = profileSpaceNameInput.value.trim() || "Notre coin Cactus";
});

profileMottoInput.addEventListener("input", () => {
    profileMottoPreview.textContent = profileMottoInput.value.trim() || "Notre petit monde à deux.";
});

coupleProfileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    saveCoupleProfile();
});

dashboardSpaceCode.addEventListener("click", async () => {
    const codeToCopy = currentInviteCode || currentSpaceCode;

    if (!codeToCopy) {
        return;
    }

    try {
        await navigator.clipboard.writeText(codeToCopy);
        showToast("Code de l’espace copié 🌵");
    } catch (error) {
        console.warn("Copie du code indisponible", error);
        showToast("Code : " + codeToCopy);
    }
});

// ====================
// BARRE FLOTTANTE
// ====================

notebookEditor.addEventListener("focus", () => {
    showEditorToolbar();
});

document.addEventListener("click", (event) => {
    const toolbar = document.querySelector(".editor-toolbar");

    if (!toolbar) return;

    const clickedInEditor =
        notebookEditor.contains(event.target);

    const clickedInToolbar =
        toolbar.contains(event.target);

    if (clickedInEditor || clickedInToolbar) {
        showEditorToolbar();
    } else {
        hideEditorToolbar();
    }
});

function showEditorToolbar() {
    const toolbar = document.querySelector(".editor-toolbar");
    toolbar.classList.add("visible");
    updateEditorToolbarPosition();
}

function hideEditorToolbar() {
    const toolbar = document.querySelector(".editor-toolbar");
    toolbar.classList.remove("visible");
}

function updateEditorToolbarPosition() {
    const toolbar = document.querySelector(".editor-toolbar");

    if (!toolbar.classList.contains("visible")) {
        return;
    }

    if (window.visualViewport) {
        const keyboardHeight =
            window.innerHeight -
            window.visualViewport.height -
            window.visualViewport.offsetTop;

        toolbar.style.bottom =
            Math.max(keyboardHeight + 8, 12) + "px";
    }
}

if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", updateEditorToolbarPosition);
    window.visualViewport.addEventListener("scroll", updateEditorToolbarPosition);
}

document.querySelectorAll(".editor-toolbar button").forEach((button) => {
    button.addEventListener("mousedown", (e) => {
        e.preventDefault();
    });
});

// ====================
// FONCTIONS
// ====================

function incrementAnswersCount() {
    if (!currentSpaceCode) {
        return Promise.resolve();
    }

    const statsRef =
        database.ref("spaces/" + currentSpaceCode + "/stats");

    return statsRef.transaction((stats) => {
        if (!stats) {
            stats = {};
        }

        stats.answersCount =
            (stats.answersCount || 0) + 1;

        stats.seeds =
            (stats.seeds || 0) + 5;

        stats.xp =
            (stats.xp || 0) + 5;

        stats.level =
            Math.floor((stats.xp || 0) / 100) + 1;

        return stats;
    });
}

function awardCompletedGameBonus(mode, challengeId) {
    if (!currentSpaceCode || !challengeId) {
        return Promise.resolve(false);
    }

    const rewardKey = (mode + "_" + challengeId).replace(/[.#$\[\]\/]/g, "_");
    const statsRef = database.ref("spaces/" + currentSpaceCode + "/stats");

    return statsRef.transaction((stats) => {
        stats = stats || {};
        stats.completionRewards = stats.completionRewards || {};

        if (stats.completionRewards[rewardKey]) {
            return;
        }

        stats.completionRewards[rewardKey] = true;
        stats.seeds = (stats.seeds || 0) + 10;
        stats.xp = (stats.xp || 0) + 10;
        stats.level = Math.floor(stats.xp / 100) + 1;

        return stats;
    }).then((result) => {
        if (result.committed) {
            showToast("🎉 Partie terminée : +10 XP et +10 graines");
        }

        return result.committed;
    });
}

function startRandomRanking() {
    if (rankings.length === 0) {
        alert("Les classements chargent encore 🌵");
        return;
    }

    if (currentSpaceCode === "") {
        alert("Tu dois être dans un espace pour jouer 🌵");
        return;
    }

    currentRanking = getRandomItem(rankings, lastRankingId);
    lastRankingId = currentRanking.id;

    loadRanking(currentRanking);

    showScreen("ranking");
}

function startPendingRankingChallenge() {
    const challenge = pendingRankingChallenges[currentPendingChallengeIndex];

    if (!challenge) {
        isPlayingPendingChallenges = false;
        showScreen("dashboard");
        return;
    }

    const ranking = rankings.find((item) => {
        return item.id === challenge.rankingId;
    });

    if (!ranking) {
        alert("Classement introuvable 🌵");
        currentPendingChallengeIndex++;
        startPendingRankingChallenge();
        return;
    }

    currentRanking = ranking;

    loadRanking(currentRanking);

    showScreen("ranking");
}

function showRankingCompatibilityIfReady(rankingId) {
    return database
        .ref("spaces/" + currentSpaceCode + "/rankingChallenges/" + rankingId)
        .once("value")
        .then((snapshot) => {
            const challenge = snapshot.val();

            if (!challenge || !challenge.answers) {
                showRankingResult();
                return;
            }

            const answersArray = Object.values(challenge.answers);

            if (answersArray.length < 2) {
                showRankingResult();
                return;
            }

            const myAnswerData = answersArray.find((answer) => {
                return answer.uid === currentUser.uid;
            });

            const partnerAnswerData = answersArray.find((answer) => {
                return answer.uid !== currentUser.uid;
            });

            if (!myAnswerData || !partnerAnswerData) {
                showRankingResult();
                return;
            }

            database.ref(
    "spaces/" +
    currentSpaceCode +
    "/rankingChallenges/" +
    challenge.rankingId
).update({
    status: "completed",
    completedAt: Date.now(),
    compatibility: calculateRankingCompatibility(
        myAnswerData.answer,
        partnerAnswerData.answer
    )
}).then(() => {
    return awardCompletedGameBonus("ranking", challenge.rankingId);
});

            showRankingCompatibility(
                challenge,
                myAnswerData,
                partnerAnswerData
            );
        });
}

function showRankingCompatibility(challenge, myAnswerData, partnerAnswerData) {
    const myAnswer = myAnswerData.answer;
    const partnerAnswer = partnerAnswerData.answer;

    const score = calculateRankingCompatibility(myAnswer, partnerAnswer);
    const label = getCompatibilityLabel(score);
    const analysis = analyzeRankingDifferences(myAnswer, partnerAnswer);
    rankingCompatibilityInsight.textContent =
    generateRankingInsight(analysis);

    rankingCompatibilityTitle.textContent = challenge.title;
    rankingCompatibilityScore.textContent = score + "%";
    if (score >= 90) {
    cactusCelebration.style.display = "block";
} else {
    cactusCelebration.style.display = "none";
}
    rankingCompatibilityLabel.textContent = label;
    myRankingName.textContent = pseudo || "Toi";
partnerRankingName.textContent = partnerAnswerData.pseudo || "Partenaire";

    rankingCompatibilityScore.className = "";
    rankingCompatibilityDescription.textContent =
    generateCompatibilityDescription(score);

if (score >= 80) {
    rankingCompatibilityScore.classList.add("score-perfect");
} else if (score >= 60) {
    rankingCompatibilityScore.classList.add("score-good");
} else if (score >= 40) {
    rankingCompatibilityScore.classList.add("score-medium");
} else {
    rankingCompatibilityScore.classList.add("score-low");
}

    myRankingResult.innerHTML = "";
    partnerRankingResult.innerHTML = "";
    perfectMatchesList.innerHTML = "";
    biggestGapsList.innerHTML = "";

    myAnswer.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        myRankingResult.appendChild(li);
    });

    partnerAnswer.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        partnerRankingResult.appendChild(li);
    });

    if (analysis.perfectMatches.length === 0) {
        perfectMatchesList.innerHTML = "<li>Aucun accord parfait</li>";
    } else {
        analysis.perfectMatches.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item;
            perfectMatchesList.appendChild(li);
        });
    }

    if (analysis.biggestGaps.length === 0) {
        biggestGapsList.innerHTML = "<li>Aucun grand écart</li>";
    } else {
        analysis.biggestGaps.forEach((gap) => {
            const li = document.createElement("li");
            li.textContent = `${gap.item} : ${gap.gap} places d'écart`;
            biggestGapsList.appendChild(li);
        });
    }

    showScreen("rankingCompatibility");
}

function isCreatorAccount() {
    return Boolean(currentUser && currentUser.uid === CREATOR_UID);
}

function updateCreatorToolsVisibility() {
    creatorToolsPanel.style.display = isCreatorAccount() ? "block" : "none";
}

function canUseCreatorTools() {
    if (!isCreatorAccount() || !currentSpaceCode) {
        showToast("Outils créatrice indisponibles");
        return false;
    }

    return true;
}

function setCreatorStatValue(statName, value) {
    if (!canUseCreatorTools() || !Number.isFinite(value) || value < 0) {
        showToast("Entre une valeur valide");
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode + "/stats/" + statName)
        .set(Math.floor(value))
        .then(() => showToast("🛠️ Valeur de test appliquée"));
}

function setCreatorXp(value) {
    if (!canUseCreatorTools() || !Number.isFinite(value) || value < 0) {
        showToast("Entre une valeur d’XP valide");
        return;
    }

    const xp = Math.floor(value);
    database
        .ref("spaces/" + currentSpaceCode + "/stats")
        .update({ xp, level: Math.floor(xp / 100) + 1 })
        .then(() => showToast("⭐ XP et niveau mis à jour"));
}

function creatorUnlockEntireGarden() {
    if (!canUseCreatorTools()) {
        return;
    }

    const reference = database.ref("spaces/" + currentSpaceCode + "/garden/items");
    reference.transaction((items) => {
        items = items || {};

        GARDEN_CATALOG.forEach((item) => {
            items[item.id] = items[item.id] || {
                planted: true,
                unlockedBy: currentUser.uid,
                unlockedAt: Date.now()
            };
        });

        return items;
    }).then(() => showToast("🌿 Tous les objets du Jardin sont débloqués"));
}

function creatorSetAllAchievements(unlock) {
    if (!canUseCreatorTools()) {
        return;
    }

    const reference = database.ref("spaces/" + currentSpaceCode + "/stats");

    if (!unlock) {
        reference.update({
            achievements: null,
            creatorForceLockedAchievements: true
        }).then(() => showToast("🔒 Succès verrouillés pour les tests"));
        return;
    }

    const achievements = {};
    ACHIEVEMENTS.forEach((achievement) => {
        achievements[achievement.id] = {
            unlockedAt: Date.now(),
            unlockedBy: currentUser.uid
        };
    });

    reference.update({
        achievements,
        creatorForceLockedAchievements: null
    }).then(() => showToast("🏆 Tous les succès sont débloqués"));
}

function creatorResetTodayDailyRitual() {
    if (!canUseCreatorTools()) {
        return;
    }

    const dateKey = getParisDateKey();
    const updates = {};
    updates["dailyChallenges/" + dateKey] = null;
    updates["stats/completionRewards/daily_" + dateKey] = null;

    database
        .ref("spaces/" + currentSpaceCode)
        .update(updates)
        .then(() => showToast("🔥 Rituel d’aujourd’hui réinitialisé"));
}

function getParisDateKey(offsetDays = 0) {
    const date = new Date(Date.now() + offsetDays * 86400000);
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "Europe/Paris",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(date);
}

function getDailyQuestionForDate(dateKey) {
    if (!coupleQuestions.length) {
        return null;
    }

    const source = currentSpaceCode + "_" + dateKey;
    let hash = 0;
    for (let index = 0; index < source.length; index++) {
        hash = ((hash << 5) - hash + source.charCodeAt(index)) | 0;
    }

    return coupleQuestions[Math.abs(hash) % coupleQuestions.length];
}

function ensureDailyChallenge() {
    const questionsReady = coupleQuestionsLoadPromise || loadCoupleQuestionsData();

    return questionsReady.then(() => {
        const dateKey = getParisDateKey();
        const question = getDailyQuestionForDate(dateKey);

        if (!question) {
            throw new Error("Aucune question quotidienne disponible");
        }

        const reference = database.ref(
            "spaces/" + currentSpaceCode + "/dailyChallenges/" + dateKey
        );

        return reference.transaction((challenge) => {
            if (challenge) {
                return;
            }

            return {
                dateKey,
                questionId: question.id || dateKey,
                question: question.question,
                status: "answering",
                createdAt: Date.now()
            };
        }).then(() => dateKey);
    });
}

function loadDailyRitual() {
    dailyQuestionText.textContent = "Chargement de votre question…";

    ensureDailyChallenge()
        .then(() => database.ref("spaces/" + currentSpaceCode).once("value"))
        .then((snapshot) => {
            currentSpaceData = snapshot.val() || {};
            renderDailyRitual(currentSpaceData);
        })
        .catch((error) => {
            console.error("Impossible de charger le rituel", error);
            dailyQuestionText.textContent =
                "Impossible de charger la question du jour pour le moment.";
        });
}

function submitDailyRitualAnswer() {
    const answer = dailyAnswerInput.value.trim();
    if (!answer) {
        showToast("Écris une réponse avant de l’envoyer");
        return;
    }

    submitDailyAnswerBtn.disabled = true;
    submitDailyAnswerBtn.textContent = "Envoi…";

    ensureDailyChallenge()
        .then((dateKey) => {
            return database
                .ref(
                    "spaces/" + currentSpaceCode + "/dailyChallenges/" +
                    dateKey + "/answers/" + currentUser.uid
                )
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer,
                    createdAt: Date.now()
                })
                .then(() => incrementAnswersCount())
                .then(() => finalizeDailyChallenge(dateKey));
        })
        .then(() => {
            dailyAnswerInput.value = "";
            showToast("💌 Réponse quotidienne enregistrée");
            loadDailyRitual();
        })
        .catch((error) => {
            console.error("Réponse quotidienne impossible", error);
            showToast("Impossible d’enregistrer la réponse");
        })
        .finally(() => {
            submitDailyAnswerBtn.disabled = false;
            submitDailyAnswerBtn.textContent = "Envoyer ma réponse";
        });
}

function finalizeDailyChallenge(dateKey) {
    const reference = database.ref(
        "spaces/" + currentSpaceCode + "/dailyChallenges/" + dateKey
    );

    return reference.transaction((challenge) => {
        if (
            !challenge ||
            Object.keys(challenge.answers || {}).length < 2 ||
            challenge.status === "completed"
        ) {
            return;
        }

        challenge.status = "completed";
        challenge.completedAt = Date.now();
        return challenge;
    }).then((result) => {
        const challenge = result.snapshot.val();
        if (challenge?.status === "completed") {
            return awardCompletedGameBonus("daily", dateKey);
        }
    });
}

function calculateDailyStreak(dailyChallenges) {
    const completedDates = new Set(
        Object.entries(dailyChallenges || {})
            .filter(([, challenge]) => challenge.status === "completed")
            .map(([dateKey]) => dateKey)
    );
    let offset = completedDates.has(getParisDateKey()) ? 0 : -1;
    let streak = 0;

    while (streak < 365 && completedDates.has(getParisDateKey(offset))) {
        streak++;
        offset--;
    }

    return streak;
}

function updateDailyRitualDashboard(spaceData) {
    if (!currentUser || !dailyRitualCard) {
        return;
    }

    const dateKey = getParisDateKey();
    const challenge = spaceData.dailyChallenges?.[dateKey];
    const answers = challenge?.answers || {};
    const myAnswered = Boolean(answers[currentUser.uid]);
    const streak = calculateDailyStreak(spaceData.dailyChallenges);
    dailyStreakDashboard.textContent = streak;

    if (challenge?.status === "completed") {
        dailyRitualDashboardTitle.textContent = "Rituel complété aujourd’hui ✨";
        dailyRitualDashboardStatus.textContent = "Revenez demain pour continuer votre série";
        dailyRitualCard.classList.add("is-completed");
    } else if (myAnswered) {
        dailyRitualDashboardTitle.textContent = "Ta réponse est envoyée 💌";
        dailyRitualDashboardStatus.textContent = "En attente de ta partenaire";
        dailyRitualCard.classList.remove("is-completed");
    } else {
        dailyRitualDashboardTitle.textContent = "Votre rituel vous attend";
        dailyRitualDashboardStatus.textContent = "Une question pour vous rapprocher aujourd’hui";
        dailyRitualCard.classList.remove("is-completed");
    }
}

function renderDailyRitual(spaceData) {
    const dateKey = getParisDateKey();
    const challenge = spaceData.dailyChallenges?.[dateKey];
    const answers = challenge?.answers || {};
    const myAnswer = answers[currentUser.uid];
    const partnerAnswer = Object.values(answers).find((answer) => {
        return answer.uid !== currentUser.uid;
    });
    const completed = challenge?.status === "completed" && myAnswer && partnerAnswer;

    dailyQuestionDate.textContent = new Date(dateKey + "T12:00:00").toLocaleDateString(
        "fr-FR",
        { weekday: "long", day: "numeric", month: "long" }
    );
    dailyQuestionText.textContent = challenge?.question || "Chargement…";
    dailyStreakScreen.textContent = calculateDailyStreak(spaceData.dailyChallenges);
    dailyAnswerForm.style.display = !myAnswer ? "block" : "none";
    dailyWaitingState.style.display = myAnswer && !completed ? "flex" : "none";
    dailyAnswersReveal.style.display = completed ? "block" : "none";

    if (completed) {
        dailyMyAnswer.textContent = myAnswer.answer;
        dailyPartnerAnswer.textContent = partnerAnswer.answer;
    }

    renderDailyCalendar(spaceData.dailyChallenges || {});
    updateDailyRitualDashboard(spaceData);
}

function renderDailyCalendar(dailyChallenges) {
    dailyCalendar.innerHTML = "";

    for (let offset = -13; offset <= 0; offset++) {
        const dateKey = getParisDateKey(offset);
        const challenge = dailyChallenges[dateKey];
        const day = document.createElement("div");
        day.className = "daily-calendar-day" +
            (challenge?.status === "completed" ? " is-completed" : "") +
            (offset === 0 ? " is-today" : "");

        const date = new Date(dateKey + "T12:00:00");
        const label = document.createElement("small");
        label.textContent = date.toLocaleDateString("fr-FR", { weekday: "short" }).slice(0, 2);
        const number = document.createElement("strong");
        number.textContent = date.getDate();
        const status = document.createElement("span");
        status.textContent = challenge?.status === "completed" ? "✓" : "·";
        day.append(label, number, status);
        dailyCalendar.appendChild(day);
    }
}

const NOTIFICATION_PREFERENCES_KEY = "cactusNotificationPreferences";

function getNotificationPreferences() {
    try {
        return {
            answers: true,
            games: true,
            achievements: true,
            garden: true,
            ...JSON.parse(localStorage.getItem(NOTIFICATION_PREFERENCES_KEY) || "{}")
        };
    } catch (error) {
        return { answers: true, games: true, achievements: true, garden: true };
    }
}

function loadNotificationPreferences() {
    const preferences = getNotificationPreferences();
    notifyAnswersSetting.checked = preferences.answers;
    notifyGamesSetting.checked = preferences.games;
    notifyAchievementsSetting.checked = preferences.achievements;
    notifyGardenSetting.checked = preferences.garden;
}

function saveNotificationPreferences() {
    localStorage.setItem(
        NOTIFICATION_PREFERENCES_KEY,
        JSON.stringify({
            answers: notifyAnswersSetting.checked,
            games: notifyGamesSetting.checked,
            achievements: notifyAchievementsSetting.checked,
            garden: notifyGardenSetting.checked
        })
    );
}

function buildNotifications(spaceData) {
    const preferences = getNotificationPreferences();
    const notifications = [];

    relationStatsModes.forEach((mode) => {
        Object.entries(spaceData[mode.path] || {}).forEach(([challengeId, challenge]) => {
            if (preferences.answers) {
                Object.values(challenge.answers || {}).forEach((answer) => {
                    if (
                        answer.uid !== currentUser.uid &&
                        typeof answer.createdAt === "number"
                    ) {
                        notifications.push({
                            id: "answer_" + mode.key + "_" + challengeId + "_" + answer.uid,
                            type: "answer",
                            icon: "💬",
                            title: (answer.pseudo || "Votre partenaire") + " a répondu",
                            message: mode.icon + " " + mode.label,
                            timestamp: answer.createdAt,
                            target: {
                                kind: "game",
                                mode: mode.key,
                                challengeId,
                                completed: challenge.status === "completed"
                            }
                        });
                    }
                });
            }

            if (
                preferences.games &&
                challenge.status === "completed" &&
                typeof challenge.completedAt === "number"
            ) {
                notifications.push({
                    id: "game_" + mode.key + "_" + challengeId,
                    type: "game",
                    icon: "🎉",
                    title: "Partie terminée à deux",
                    message: mode.icon + " " + mode.label,
                    timestamp: challenge.completedAt,
                    target: {
                        kind: "game",
                        mode: mode.key,
                        challengeId,
                        completed: true
                    }
                });
            }
        });
    });

    Object.entries(spaceData.dailyChallenges || {}).forEach(([dateKey, challenge]) => {
        if (preferences.answers) {
            Object.values(challenge.answers || {}).forEach((answer) => {
                if (
                    answer.uid !== currentUser.uid &&
                    typeof answer.createdAt === "number"
                ) {
                    notifications.push({
                        id: "daily_answer_" + dateKey + "_" + answer.uid,
                        type: "answer",
                        icon: "🔥",
                        title: (answer.pseudo || "Votre partenaire") + " a répondu au rituel",
                        message: "La question du jour attend ta réponse",
                        timestamp: answer.createdAt,
                        target: { kind: "daily" }
                    });
                }
            });
        }

        if (
            preferences.games &&
            challenge.status === "completed" &&
            typeof challenge.completedAt === "number"
        ) {
            notifications.push({
                id: "daily_completed_" + dateKey,
                type: "game",
                icon: "🔥",
                title: "Rituel quotidien complété",
                message: "Votre série continue",
                timestamp: challenge.completedAt,
                target: { kind: "daily" }
            });
        }
    });

    if (preferences.garden) {
        Object.entries(spaceData.garden?.items || {}).forEach(([itemId, itemData]) => {
            const item = GARDEN_CATALOG.find((catalogItem) => catalogItem.id === itemId);

            if (
                item &&
                itemData.unlockedBy &&
                itemData.unlockedBy !== currentUser.uid &&
                typeof itemData.unlockedAt === "number"
            ) {
                notifications.push({
                    id: "garden_" + itemId,
                    type: "garden",
                    icon: item.emoji,
                    title: "Le jardin s’agrandit",
                    message: item.name + " a été débloqué",
                    timestamp: itemData.unlockedAt,
                    target: { kind: "garden" }
                });
            }
        });

        Object.entries(spaceData.garden?.notebooks || {}).forEach(([notebookId, notebook]) => {
            const timestamp = notebook.updatedAt || notebook.createdAt;
            const authorUid = notebook.updatedBy || notebook.createdByUid;

            if (
                authorUid &&
                authorUid !== currentUser.uid &&
                typeof timestamp === "number"
            ) {
                notifications.push({
                    id: "notebook_" + notebookId + "_" + timestamp,
                    type: "garden",
                    icon: notebook.emoji || "📝",
                    title: notebook.updatedAt
                        ? (notebook.updatedByPseudo || "Votre partenaire") + " a modifié un carnet"
                        : (notebook.createdBy || "Votre partenaire") + " a créé un carnet",
                    message: notebook.title || "Carnet partagé",
                    timestamp,
                    target: { kind: "notebook", notebookId }
                });
            }
        });

        const story = spaceData.story;
        if (
            story &&
            story.updatedBy &&
            story.updatedBy !== currentUser.uid &&
            typeof story.updatedAt === "number"
        ) {
            notifications.push({
                id: "story_" + story.updatedAt,
                type: "garden",
                icon: "📖",
                title: "Votre histoire a été mise à jour",
                message: (story.updatedByPseudo || "Votre partenaire") + " a ajouté un souvenir",
                timestamp: story.updatedAt,
                target: { kind: "story" }
            });
        }

        Object.entries(spaceData.memories || {}).forEach(([memoryId, memory]) => {
            const timestamp = memory.updatedAt || memory.createdAt;
            const authorUid = memory.updatedBy || memory.createdByUid;

            if (
                authorUid &&
                authorUid !== currentUser.uid &&
                typeof timestamp === "number"
            ) {
                notifications.push({
                    id: "memory_" + memoryId + "_" + timestamp,
                    type: "garden",
                    icon: memory.emoji || "💚",
                    title: memory.updatedAt && memory.updatedAt !== memory.createdAt
                        ? "Un souvenir a été modifié"
                        : "Nouveau souvenir à deux",
                    message: memory.title || "Un joli moment",
                    timestamp,
                    target: { kind: "memory", memoryId }
                });
            }
        });

        const profile = spaceData.profile;
        if (
            profile &&
            profile.updatedBy &&
            profile.updatedBy !== currentUser.uid &&
            typeof profile.updatedAt === "number"
        ) {
            notifications.push({
                id: "profile_" + profile.updatedAt,
                type: "garden",
                icon: "✨",
                title: "Votre profil a été personnalisé",
                message: (profile.updatedByPseudo || "Votre partenaire") + " a modifié votre coin Cactus",
                timestamp: profile.updatedAt,
                target: { kind: "profile" }
            });
        }
    }

    if (preferences.achievements) {
        Object.entries(spaceData.stats?.achievements || {}).forEach(([achievementId, data]) => {
            const achievement = ACHIEVEMENTS.find((item) => item.id === achievementId);

            if (
                achievement &&
                typeof data === "object" &&
                data.unlockedBy !== currentUser.uid &&
                typeof data.unlockedAt === "number"
            ) {
                notifications.push({
                    id: "achievement_" + achievementId,
                    type: "achievement",
                    icon: "🏆",
                    title: "Nouveau succès commun",
                    message: achievement.title,
                    timestamp: data.unlockedAt,
                    target: { kind: "achievement" }
                });
            }
        });
    }

    return notifications
        .sort((a, b) => b.timestamp - a.timestamp)
        .slice(0, 50);
}

function getNotificationsLastReadAt(spaceData) {
    return spaceData.notificationReads?.[currentUser.uid]?.lastReadAt || 0;
}

function updateNotificationsBadge(spaceData) {
    if (!currentUser || !dashboardNotificationsBadge) {
        return;
    }

    const lastReadAt = getNotificationsLastReadAt(spaceData);
    const unreadCount = buildNotifications(spaceData).filter((notification) => {
        return notification.timestamp > lastReadAt;
    }).length;

    dashboardNotificationsBadge.textContent = unreadCount > 99 ? "99+" : unreadCount;
    dashboardNotificationsBadge.style.display = unreadCount > 0 ? "grid" : "none";
    dashboardNotificationsBtn.setAttribute(
        "aria-label",
        unreadCount > 0
            ? "Notifications, " + unreadCount + " non lue" + (unreadCount > 1 ? "s" : "")
            : "Notifications"
    );
}

function loadNotifications() {
    if (currentSpaceData) {
        renderNotifications(currentSpaceData);
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode)
        .once("value")
        .then((snapshot) => {
            currentSpaceData = snapshot.val() || {};
            renderNotifications(currentSpaceData);
        });
}

function renderNotifications(spaceData) {
    const notifications = buildNotifications(spaceData);
    const lastReadAt = getNotificationsLastReadAt(spaceData);
    notificationsList.innerHTML = "";
    notificationsEmptyState.style.display = notifications.length === 0 ? "flex" : "none";

    notifications.forEach((notification) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "notification-card" +
            (notification.timestamp > lastReadAt ? " is-unread" : "");

        const icon = document.createElement("span");
        icon.className = "notification-icon";
        icon.textContent = notification.icon;

        const copy = document.createElement("div");
        const title = document.createElement("strong");
        title.textContent = notification.title;
        const message = document.createElement("p");
        message.textContent = notification.message;
        const date = document.createElement("small");
        date.textContent = formatNotificationDate(notification.timestamp);
        const arrow = document.createElement("span");
        arrow.className = "notification-card-arrow";
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "›";

        copy.append(title, message, date);
        card.append(icon, copy, arrow);
        card.addEventListener("click", () => {
            openNotification(notification);
        });
        notificationsList.appendChild(card);
    });
}

function prioritizeNotificationChallenge(list, challengeId) {
    const index = list.findIndex((challenge) => {
        return String(challenge.rankingId) === String(challengeId) ||
            String(challenge.questionId) === String(challengeId);
    });

    if (index <= 0) {
        return index === 0;
    }

    const [challenge] = list.splice(index, 1);
    list.unshift(challenge);
    return true;
}

function openGameNotification(target) {
    if (target.completed) {
        openHistoryMode(target.mode, target.challengeId);
        return;
    }

    if (target.mode === "ranking") {
        currentPendingChallengeIndex = 0;
        if (prioritizeNotificationChallenge(pendingRankingChallenges, target.challengeId)) {
            isPlayingPendingChallenges = true;
            startPendingRankingChallenge();
            return;
        }
    }

    if (target.mode === "guess") {
        currentPendingGuessIndex = 0;
        const guessActions = [
            [pendingGuessAnswers, startPendingGuessAnswer],
            [pendingGuessPredictions, startPendingGuessPrediction],
            [pendingGuessValidations, startPendingGuessValidation],
            [pendingGuessResults, showPendingGuessResult]
        ];

        const selectedAction = guessActions.find(([list]) => {
            return prioritizeNotificationChallenge(list, target.challengeId);
        });

        if (selectedAction) {
            selectedAction[1]();
            return;
        }
    }

    const modeActions = {
        likely: [pendingLikelyChallenges, () => { currentPendingLikelyIndex = 0; startPendingLikelyChallenge(); }],
        ok: [pendingOkChallenges, () => { currentPendingOkIndex = 0; startPendingOkChallenge(); }],
        greenFlag: [pendingGreenFlagChallenges, () => { currentPendingGreenFlagIndex = 0; startPendingGreenFlagChallenge(); }],
        princess: [pendingPrincessChallenges, () => { currentPendingPrincessIndex = 0; startPendingPrincessChallenge(); }],
        questions: [pendingQuestionsChallenges, () => { currentPendingQuestionsIndex = 0; startPendingQuestionsChallenge(); }]
    };
    const selectedMode = modeActions[target.mode];

    if (selectedMode && prioritizeNotificationChallenge(selectedMode[0], target.challengeId)) {
        selectedMode[1]();
        return;
    }

    showScreen("allGames");
    showToast("Cette activité n’attend plus de réponse");
}

function openNotification(notification) {
    const target = notification.target || {};

    database
        .ref("spaces/" + currentSpaceCode + "/notificationReads/" + currentUser.uid)
        .transaction((readData) => {
            readData = readData || {};
            readData.lastReadAt = Math.max(
                readData.lastReadAt || 0,
                notification.timestamp || 0
            );
            return readData;
        });

    if (target.kind === "game") {
        openGameNotification(target);
    } else if (target.kind === "daily") {
        showScreen("dailyRitual");
    } else if (target.kind === "garden") {
        loadGarden();
        loadNotebooks();
        showScreen("garden");
    } else if (target.kind === "notebook") {
        database
            .ref(
                "spaces/" + currentSpaceCode +
                "/garden/notebooks/" + target.notebookId
            )
            .once("value")
            .then((snapshot) => {
                const notebook = snapshot.val();
                if (notebook) {
                    openNotebook(target.notebookId, notebook);
                } else {
                    loadNotebooks();
                    showScreen("garden");
                    showToast("Ce carnet n’existe plus");
                }
            });
    } else if (target.kind === "story") {
        openStoryPage();
    } else if (target.kind === "memory") {
        showScreen("history");
        loadMemories(target.memoryId);
    } else if (target.kind === "profile") {
        openCoupleProfile();
    } else if (target.kind === "achievement") {
        openAchievements();
    }
}

function formatNotificationDate(timestamp) {
    const elapsed = Date.now() - timestamp;
    const minutes = Math.max(1, Math.floor(elapsed / 60000));

    if (minutes < 60) {
        return "Il y a " + minutes + " min";
    }

    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return "Il y a " + hours + " h";
    }

    return new Date(timestamp).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "short"
    });
}

function markAllNotificationsRead() {
    if (!currentSpaceCode || !currentUser) {
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode + "/notificationReads/" + currentUser.uid)
        .set({ lastReadAt: Date.now() })
        .then(() => showToast("Notifications marquées comme lues"));
}

function getLocalDateInputValue() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
}

function openMemoryForm(memoryId = null, memory = null) {
    currentEditingMemoryId = memoryId;
    memoryFormHeading.textContent = memory ? "Modifier ce souvenir" : "Ajouter un souvenir";
    saveMemoryBtn.textContent = memory ? "Enregistrer les modifications" : "Enregistrer";
    memoryEmoji.value = memory?.emoji || "💚";
    memoryFormIcon.textContent = memoryEmoji.value;
    memoryDate.value = memory?.memoryDate || getLocalDateInputValue();
    memoryTitle.value = memory?.title || "";
    memoryText.value = memory?.text || "";
    memoryForm.style.display = "block";
    memoryTitle.focus();
    memoryForm.scrollIntoView({ behavior: "smooth", block: "center" });
}

function closeMemoryForm() {
    currentEditingMemoryId = null;
    memoryForm.reset();
    memoryEmoji.value = "💚";
    memoryFormIcon.textContent = "💚";
    memoryForm.style.display = "none";
    saveMemoryBtn.disabled = false;
}

function saveMemory() {
    const title = memoryTitle.value.trim();
    const text = memoryText.value.trim();
    const date = memoryDate.value;

    if (!title || !text || !date) {
        showToast("Complète le titre, la date et le souvenir");
        return;
    }

    saveMemoryBtn.disabled = true;
    saveMemoryBtn.textContent = "Enregistrement…";
    const timestamp = Date.now();
    const memoryData = {
        emoji: memoryEmoji.value.trim() || "💚",
        title,
        text,
        memoryDate: date,
        updatedAt: timestamp,
        updatedBy: currentUser.uid,
        updatedByPseudo: pseudo
    };
    let request;
    const isEditing = Boolean(currentEditingMemoryId);

    if (currentEditingMemoryId) {
        request = database
            .ref("spaces/" + currentSpaceCode + "/memories/" + currentEditingMemoryId)
            .update(memoryData);
    } else {
        request = database
            .ref("spaces/" + currentSpaceCode + "/memories")
            .push({
                ...memoryData,
                createdAt: timestamp,
                createdByUid: currentUser.uid,
                createdByPseudo: pseudo
            });
    }

    request
        .then(() => {
            closeMemoryForm();
            showToast(isEditing ? "Souvenir modifié ✨" : "Souvenir ajouté ✨");
            return loadMemories();
        })
        .catch((error) => {
            console.error("Enregistrement du souvenir impossible", error);
            showToast("Impossible d’enregistrer ce souvenir");
            saveMemoryBtn.disabled = false;
            saveMemoryBtn.textContent = currentEditingMemoryId
                ? "Enregistrer les modifications"
                : "Enregistrer";
        });
}

function loadMemories(focusedMemoryId = null) {
    if (!currentSpaceCode) {
        return Promise.resolve();
    }

    return database
        .ref("spaces/" + currentSpaceCode + "/memories")
        .once("value")
        .then((snapshot) => {
            renderMemories(snapshot.val() || {}, focusedMemoryId);
        });
}

function formatMemoryDate(dateValue) {
    if (!dateValue) {
        return "Date inconnue";
    }

    return new Date(dateValue + "T12:00:00").toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

function renderMemories(memories, focusedMemoryId = null) {
    const entries = Object.entries(memories || {}).sort((a, b) => {
        if (Boolean(a[1].favorite) !== Boolean(b[1].favorite)) {
            return a[1].favorite ? -1 : 1;
        }

        return String(b[1].memoryDate || "").localeCompare(
            String(a[1].memoryDate || "")
        ) || (b[1].createdAt || 0) - (a[1].createdAt || 0);
    });

    memoriesTimeline.replaceChildren();
    memoriesEmptyState.style.display = entries.length === 0 ? "flex" : "none";

    entries.forEach(([memoryId, memory]) => {
        const article = document.createElement("article");
        article.className = "memory-timeline-card" + (memory.favorite ? " is-favorite" : "");
        article.dataset.memoryId = memoryId;

        const marker = document.createElement("span");
        marker.className = "memory-timeline-marker";
        marker.textContent = memory.emoji || "💚";

        const body = document.createElement("div");
        body.className = "memory-timeline-body";
        const date = document.createElement("small");
        date.textContent = formatMemoryDate(memory.memoryDate);
        const title = document.createElement("h3");
        title.textContent = memory.title || "Souvenir";
        const text = document.createElement("p");
        text.textContent = memory.text || "";
        const author = document.createElement("span");
        author.className = "memory-author";
        author.textContent = "Ajouté par " + (memory.createdByPseudo || "Cactus");
        body.append(date, title, text, author);

        const actions = document.createElement("div");
        actions.className = "memory-card-actions";
        const favoriteBtn = document.createElement("button");
        favoriteBtn.type = "button";
        favoriteBtn.title = memory.favorite ? "Retirer des favoris" : "Ajouter aux favoris";
        favoriteBtn.setAttribute("aria-label", favoriteBtn.title);
        favoriteBtn.textContent = memory.favorite ? "★" : "☆";
        favoriteBtn.addEventListener("click", () => toggleMemoryFavorite(memoryId, memory));
        const editBtn = document.createElement("button");
        editBtn.type = "button";
        editBtn.title = "Modifier";
        editBtn.setAttribute("aria-label", "Modifier ce souvenir");
        editBtn.textContent = "✏️";
        editBtn.addEventListener("click", () => openMemoryForm(memoryId, memory));
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.title = "Supprimer";
        deleteBtn.setAttribute("aria-label", "Supprimer ce souvenir");
        deleteBtn.textContent = "🗑️";
        deleteBtn.addEventListener("click", () => deleteMemory(memoryId));
        actions.append(favoriteBtn, editBtn, deleteBtn);

        article.append(marker, body, actions);
        memoriesTimeline.appendChild(article);
    });

    if (focusedMemoryId) {
        window.setTimeout(() => {
            const focusedCard = Array.from(memoriesTimeline.children).find((card) => {
                return card.dataset.memoryId === focusedMemoryId;
            });
            if (focusedCard) {
                focusedCard.classList.add("is-focused");
                focusedCard.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        }, 50);
    }
}

function toggleMemoryFavorite(memoryId, memory) {
    database
        .ref("spaces/" + currentSpaceCode + "/memories/" + memoryId)
        .update({
            favorite: !memory.favorite,
            updatedAt: Date.now(),
            updatedBy: currentUser.uid,
            updatedByPseudo: pseudo
        })
        .then(() => loadMemories())
        .catch((error) => {
            console.error("Favori impossible", error);
            showToast("Impossible de modifier ce favori");
        });
}

function deleteMemory(memoryId) {
    if (!confirm("Supprimer définitivement ce souvenir ?")) {
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode + "/memories/" + memoryId)
        .remove()
        .then(() => {
            showToast("Souvenir supprimé");
            return loadMemories();
        })
        .catch((error) => {
            console.error("Suppression du souvenir impossible", error);
            showToast("Impossible de supprimer ce souvenir");
        });
}

const GARDEN_CATALOG = [
    { id: "tulip", emoji: "🌷", name: "Tulipe corail", cost: 25 },
    { id: "miniCactus", emoji: "🌵", name: "Mini cactus", cost: 50 },
    { id: "bush", emoji: "🌿", name: "Buisson tendre", cost: 75 },
    { id: "mushroom", emoji: "🍄", name: "Champignon", cost: 90 },
    { id: "bee", emoji: "🐝", name: "Petite abeille", cost: 110 },
    { id: "fountain", emoji: "⛲", name: "Petite fontaine", cost: 140 },
    { id: "bench", emoji: "🪑", name: "Banc à deux", cost: 180 },
    { id: "tree", emoji: "🌳", name: "Arbre complice", cost: 220 },
    { id: "pond", emoji: "💧", name: "Bassin paisible", cost: 260 },
    { id: "lantern", emoji: "🏮", name: "Lanterne magique", cost: 300 },
    { id: "flowerArch", emoji: "💐", name: "Arche fleurie", cost: 380 },
    { id: "cottage", emoji: "🏡", name: "Maison du jardin", cost: 500 }
];

const DEFAULT_GARDEN_LAYOUTS = [
    { x: 14, y: 72 }, { x: 31, y: 78 }, { x: 50, y: 67 },
    { x: 72, y: 76 }, { x: 83, y: 36 }, { x: 25, y: 48 },
    { x: 55, y: 82 }, { x: 78, y: 56 }, { x: 43, y: 45 },
    { x: 66, y: 34 }, { x: 18, y: 30 }, { x: 50, y: 27 }
];

function loadGarden() {
    if (!currentSpaceCode) {
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode)
        .once("value")
        .then((snapshot) => {
            renderGarden(snapshot.val() || {});
        })
        .catch((error) => {
            console.error("Impossible de charger le jardin", error);
            showToast("Le jardin ne peut pas être chargé pour le moment");
        });
}

function renderGarden(spaceData) {
    const seeds = spaceData.stats?.seeds || 0;
    const items = spaceData.garden?.items || {};
    currentGardenItems = items;
    const unlockedCount = Object.keys(items).length;
    const plantedItems = GARDEN_CATALOG.filter((item) => {
        return items[item.id]?.planted !== false && items[item.id];
    });
    const gardenLevel = Math.min(6, Math.floor(unlockedCount / 2) + 1);
    const nextLevelTarget = Math.min(gardenLevel * 2, GARDEN_CATALOG.length);
    const levelStart = (gardenLevel - 1) * 2;
    const levelProgress = gardenLevel === 6
        ? 100
        : ((unlockedCount - levelStart) / 2) * 100;

    gardenSeedsBalance.textContent = seeds;
    gardenLevelBadge.textContent = "Jardin niveau " + gardenLevel;
    gardenPlantedCount.textContent =
        plantedItems.length + " élément" + (plantedItems.length > 1 ? "s" : "");
    gardenNextLevelText.textContent = gardenLevel === 6
        ? "Jardin au niveau maximal ✨"
        : "Encore " + (nextLevelTarget - unlockedCount) + " objet" +
            (nextLevelTarget - unlockedCount > 1 ? "s" : "") +
            " pour le niveau " + (gardenLevel + 1);
    gardenLevelProgressBar.style.width = Math.max(0, levelProgress) + "%";
    gardenEmptyPlot.style.display = plantedItems.length === 0 ? "block" : "none";
    gardenPlot.className =
        "garden-plot garden-level-" + gardenLevel +
        (gardenEditMode ? " is-editing" : "");

    gardenPlot.querySelectorAll(".garden-planted-item").forEach((element) => {
        element.remove();
    });

    plantedItems.forEach((item) => {
        const catalogIndex = GARDEN_CATALOG.findIndex((entry) => entry.id === item.id);
        const itemData = items[item.id] || {};
        const defaultLayout = DEFAULT_GARDEN_LAYOUTS[catalogIndex] || { x: 50, y: 65 };
        const layout = { ...defaultLayout, ...(itemData.layout || {}) };
        const planted = document.createElement("button");
        planted.type = "button";
        planted.className = "garden-planted-item" +
            (selectedGardenItemId === item.id ? " is-selected" : "");
        planted.textContent = item.emoji;
        planted.title = gardenEditMode
            ? item.name + " · faites glisser pour déplacer"
            : item.name;
        planted.setAttribute("aria-label", item.name);
        planted.dataset.itemId = item.id;
        planted.style.left = layout.x + "%";
        planted.style.top = layout.y + "%";
        planted.style.zIndex = layout.z || catalogIndex + 2;
        planted.style.setProperty("--garden-item-scale", layout.size || 1);
        planted.addEventListener("pointerdown", startGardenItemDrag);
        planted.addEventListener("click", () => {
            if (gardenEditMode) {
                selectGardenItem(item.id);
            }
        });
        gardenPlot.appendChild(planted);
    });

    gardenShopGrid.innerHTML = "";
    GARDEN_CATALOG.forEach((item) => {
        const owned = Boolean(items[item.id]);
        const planted = owned && items[item.id].planted !== false;
        const card = document.createElement("article");
        card.className = "garden-shop-card" + (owned ? " is-owned" : "");

        const icon = document.createElement("span");
        icon.className = "garden-shop-icon";
        icon.textContent = item.emoji;

        const name = document.createElement("strong");
        name.textContent = item.name;

        const action = document.createElement("button");
        action.type = "button";

        if (owned) {
            action.textContent = planted ? "Ranger" : "Placer";
            action.className = "garden-toggle-item";
            action.addEventListener("click", () => {
                toggleGardenItem(item.id, !planted);
            });
        } else {
            action.textContent = "🌱 " + item.cost;
            action.disabled = seeds < item.cost;
            action.className = "garden-buy-item";
            action.addEventListener("click", () => buyGardenItem(item));
        }

        card.append(icon, name, action);
        gardenShopGrid.appendChild(card);
    });
}

function setGardenEditMode(enabled) {
    gardenEditMode = enabled;
    gardenEditBtn.textContent = enabled ? "✓ Terminer" : "✋ Aménager";
    gardenEditBtn.classList.toggle("is-active", enabled);
    gardenEditToolbar.style.display = enabled ? "block" : "none";
    gardenPlot.classList.toggle("is-editing", enabled);

    if (!enabled || !selectedGardenItemId) {
        selectGardenItem(null);
    }
}

function selectGardenItem(itemId) {
    selectedGardenItemId = itemId;
    gardenPlot.querySelectorAll(".garden-planted-item").forEach((element) => {
        element.classList.toggle("is-selected", element.dataset.itemId === itemId);
    });

    const item = GARDEN_CATALOG.find((catalogItem) => catalogItem.id === itemId);
    gardenSelectedItemLabel.textContent = item
        ? item.emoji + " " + item.name
        : "Choisissez un élément";

    [gardenSmallerBtn, gardenLargerBtn, gardenBackwardBtn,
        gardenForwardBtn, gardenStoreSelectedBtn].forEach((button) => {
        button.disabled = !item;
    });
}

function getGardenItemLayout(itemId) {
    const catalogIndex = GARDEN_CATALOG.findIndex((item) => item.id === itemId);
    return {
        ...(DEFAULT_GARDEN_LAYOUTS[catalogIndex] || { x: 50, y: 65 }),
        ...(currentGardenItems[itemId]?.layout || {})
    };
}

function startGardenItemDrag(event) {
    if (!gardenEditMode) {
        return;
    }

    event.preventDefault();
    const element = event.currentTarget;
    const itemId = element.dataset.itemId;
    const rect = gardenPlot.getBoundingClientRect();
    selectGardenItem(itemId);
    element.setPointerCapture(event.pointerId);
    element.classList.add("is-dragging");

    const move = (moveEvent) => {
        const x = Math.min(95, Math.max(5,
            ((moveEvent.clientX - rect.left) / rect.width) * 100));
        const y = Math.min(90, Math.max(12,
            ((moveEvent.clientY - rect.top) / rect.height) * 100));
        element.style.left = x + "%";
        element.style.top = y + "%";
    };

    const end = (endEvent) => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerup", end);
        element.removeEventListener("pointercancel", end);
        element.classList.remove("is-dragging");

        const x = Number.parseFloat(element.style.left);
        const y = Number.parseFloat(element.style.top);
        saveGardenItemLayout(itemId, { x, y });

        if (element.hasPointerCapture(endEvent.pointerId)) {
            element.releasePointerCapture(endEvent.pointerId);
        }
    };

    element.addEventListener("pointermove", move);
    element.addEventListener("pointerup", end);
    element.addEventListener("pointercancel", end);
}

function saveGardenItemLayout(itemId, changes) {
    const previousLayout = currentGardenItems[itemId]?.layout || {};
    currentGardenItems[itemId] = currentGardenItems[itemId] || {};
    currentGardenItems[itemId].layout = { ...previousLayout, ...changes };

    return database
        .ref("spaces/" + currentSpaceCode + "/garden/items/" + itemId + "/layout")
        .update(changes)
        .catch((error) => {
            console.error("Sauvegarde de la disposition impossible", error);
            showToast("Impossible de sauvegarder la disposition");
        });
}

function resizeSelectedGardenItem(delta) {
    if (!selectedGardenItemId) {
        return;
    }

    const layout = getGardenItemLayout(selectedGardenItemId);
    const size = Math.min(1.6, Math.max(0.6, (layout.size || 1) + delta));
    const element = gardenPlot.querySelector(
        '[data-item-id="' + selectedGardenItemId + '"]'
    );
    element?.style.setProperty("--garden-item-scale", size);
    saveGardenItemLayout(selectedGardenItemId, { size });
}

function changeSelectedGardenDepth(delta) {
    if (!selectedGardenItemId) {
        return;
    }

    const layout = getGardenItemLayout(selectedGardenItemId);
    const z = Math.min(30, Math.max(2, (layout.z || 5) + delta));
    const element = gardenPlot.querySelector(
        '[data-item-id="' + selectedGardenItemId + '"]'
    );
    if (element) {
        element.style.zIndex = z;
    }
    saveGardenItemLayout(selectedGardenItemId, { z });
}

function resetGardenLayout() {
    if (!confirm("Réinitialiser la disposition de tous les éléments du jardin ?")) {
        return;
    }

    const updates = {};

    Object.keys(currentGardenItems).forEach((itemId) => {
        updates[itemId + "/layout"] = null;
    });

    database
        .ref("spaces/" + currentSpaceCode + "/garden/items")
        .update(updates)
        .then(() => {
            selectGardenItem(null);
            showToast("Disposition du jardin réinitialisée");
        });
}

function buyGardenItem(item) {
    const spaceRef = database.ref("spaces/" + currentSpaceCode);

    spaceRef.transaction((spaceData) => {
        if (!spaceData) {
            return;
        }

        spaceData.stats = spaceData.stats || {};
        spaceData.garden = spaceData.garden || {};
        spaceData.garden.items = spaceData.garden.items || {};

        if (spaceData.garden.items[item.id]) {
            return;
        }

        const seeds = spaceData.stats.seeds || 0;
        if (seeds < item.cost) {
            return;
        }

        spaceData.stats.seeds = seeds - item.cost;
        spaceData.garden.items[item.id] = {
            planted: true,
            unlockedBy: currentUser.uid,
            unlockedAt: Date.now()
        };

        return spaceData;
    }).then((result) => {
        if (!result.committed) {
            showToast("Pas assez de graines ou élément déjà débloqué");
            return;
        }

        showToast(item.emoji + " " + item.name + " rejoint votre jardin");
        renderGarden(result.snapshot.val() || {});
    }).catch((error) => {
        console.error("Achat impossible", error);
        showToast("Achat impossible pour le moment");
    });
}

function toggleGardenItem(itemId, planted) {
    database
        .ref(
            "spaces/" + currentSpaceCode +
            "/garden/items/" + itemId + "/planted"
        )
        .set(planted)
        .then(() => loadGarden())
        .catch((error) => {
            console.error("Modification du jardin impossible", error);
            showToast("Impossible de modifier le jardin");
        });
}

function loadNotebooks() {
    const requestId = ++notebooksLoadRequestId;

    return database
        .ref("spaces/" + currentSpaceCode + "/garden/notebooks")
        .once("value")
        .then((snapshot) => {
            if (requestId !== notebooksLoadRequestId) {
                return;
            }

            const notebooks = snapshot.val() || {};
            const notebooksArray = Object.entries(notebooks);
            const fragment = document.createDocumentFragment();

            if (notebooksArray.length === 0) {
                const empty = document.createElement("p");
                empty.className = "empty-text";
                empty.textContent = "Aucun carnet pour le moment 🪴";
                notebooksGrid.replaceChildren(empty);
                return;
            }

            notebooksArray
                .sort((a, b) => b[1].createdAt - a[1].createdAt)
                .forEach(([notebookId, notebook]) => {
                    const card = document.createElement("div");
                    card.classList.add("notebook-card");
                    card.style.background = notebook.color || "#D8F3DC";

                    const emoji = document.createElement("div");
                    emoji.classList.add("notebook-emoji");
                    emoji.textContent = notebook.emoji || "📝";

                    const title = document.createElement("h3");
                    title.textContent = notebook.title;

                    const meta = document.createElement("small");
                    meta.textContent = "Par " + (notebook.createdBy || "Cactus");

                    card.appendChild(emoji);
                    card.appendChild(title);
                    card.appendChild(meta);

                    card.addEventListener("click", () => {
                        openNotebook(notebookId, notebook);
                    });

                    fragment.appendChild(card);
                });

            notebooksGrid.replaceChildren(fragment);
        });
}

function openNotebook(notebookId, notebook) {
    currentNotebookId = notebookId;
    currentNotebookData = notebook;

    openedNotebookTitle.textContent =
        (notebook.emoji || "📝") + " " + notebook.title;

    loadNotebookContent();
    showScreen("notebook");
}

notebookEditor.addEventListener("input", () => {
    clearTimeout(saveNotebookTimeout);

    saveNotebookTimeout = setTimeout(() => {
        saveNotebookContent();
    }, 700);
});

function saveNotebookContent() {
    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/garden/notebooks/" +
            currentNotebookId
        )
        .update({
            contentHtml: sanitizeNotebookHtml(notebookEditor.innerHTML),
            updatedAt: Date.now(),
            updatedBy: currentUser.uid,
            updatedByPseudo: pseudo
        });
}

function sanitizeNotebookHtml(sourceHtml) {
    const template = document.createElement("template");
    template.innerHTML = sourceHtml || "";
    const allowedTags = new Set([
        "P", "DIV", "BR", "STRONG", "B", "EM", "I", "U", "SPAN"
    ]);
    const removedTags = new Set([
        "SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "SVG", "MATH",
        "LINK", "META", "FORM", "INPUT", "BUTTON", "TEXTAREA", "SELECT"
    ]);

    Array.from(template.content.querySelectorAll("*")).forEach((element) => {
        if (removedTags.has(element.tagName)) {
            element.remove();
            return;
        }

        if (!allowedTags.has(element.tagName)) {
            element.replaceWith(...element.childNodes);
            return;
        }

        const color = element.style.color;
        const backgroundColor = element.style.backgroundColor;
        const safeClasses = Array.from(element.classList).filter((className) => {
            return ["checkbox-line", "fake-checkbox", "checked-item"].includes(className);
        });

        Array.from(element.attributes).forEach((attribute) => {
            element.removeAttribute(attribute.name);
        });

        if (safeClasses.length > 0) {
            element.className = safeClasses.join(" ");
        }
        if (color) {
            element.style.color = color;
        }
        if (backgroundColor) {
            element.style.backgroundColor = backgroundColor;
        }
        if (safeClasses.includes("fake-checkbox")) {
            element.setAttribute("contenteditable", "false");
        }
    });

    return template.innerHTML;
}

function loadNotebookContent() {
    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/garden/notebooks/" +
            currentNotebookId +
            "/contentHtml"
        )
        .once("value")
        .then((snapshot) => {
            const content = snapshot.val();

            notebookEditor.innerHTML = sanitizeNotebookHtml(
                content || "<p>Écris ici...</p>"
            );

            restoreCheckboxes();
        });
}

function restoreCheckboxes() {
    notebookEditor.querySelectorAll(".checkbox-line").forEach((line) => {
        const checkbox = line.querySelector(".fake-checkbox");

        if (!checkbox) return;

        checkbox.setAttribute("contenteditable", "false");

        if (checkbox.textContent.trim() === "☑") {
            line.classList.add("checked-line");
        } else {
            line.classList.remove("checked-line");
        }
    });
}

function runEditorCommand(command, value = null) {
    notebookEditor.focus();
    document.execCommand(command, false, value);
    saveNotebookContent();
    keepEditorToolbarOpen();
}

function keepEditorToolbarOpen() {
    setTimeout(() => {
        notebookEditor.focus();
        showEditorToolbar();
    }, 50);
}

function getCurrentBlock() {
    const selection = window.getSelection();

    if (!selection.rangeCount) {
        return null;
    }

    let node = selection.anchorNode;

    if (node.nodeType === Node.TEXT_NODE) {
        node = node.parentElement;
    }

    return node.closest("p, div");
}

function normalizeCheckboxLines() {
    const lines = notebookEditor.querySelectorAll("p, div");

    lines.forEach((line) => {
        const text = line.textContent.trim();

        if (text.startsWith("☑")) {
            line.classList.add("checked-line");
        } else {
            line.classList.remove("checked-line");
        }
    });
}

async function loadGuessQuestionsData() {
    const response = await fetch("data/guess-my-answer.json");
    const data = await response.json();

    guessQuestions = data;

    updateDashboardContentCounts();
    console.log("Questions Devine ma réponse chargées :", guessQuestions);
}

function getRandomGuessQuestion() {
    return getRandomItem(guessQuestions);
}

function displayGuessChallenges(challenges) {
    const challengeArray = Object.values(challenges || {});

    pendingGuessAnswers = challengeArray.filter((challenge) => {
        return (
            challenge.status === "answering" &&
            challenge.answers &&
            !challenge.answers[currentUser.uid] &&
            Object.keys(challenge.answers).some((uid) => uid !== currentUser.uid)
        );
    });

    pendingGuessPredictions = challengeArray.filter((challenge) => {
        return (
            challenge.status === "predicting" &&
            challenge.answers &&
            challenge.answers[currentUser.uid] &&
            (!challenge.predictions || !challenge.predictions[currentUser.uid])
        );
    });

    pendingGuessValidations = challengeArray.filter((challenge) => {
        if (challenge.status !== "predicting") return false;
        if (!challenge.answers || !challenge.predictions) return false;

        const partnerPrediction = Object.values(challenge.predictions).find(
            (prediction) => prediction.uid !== currentUser.uid
        );

        return (
            challenge.answers[currentUser.uid] &&
            partnerPrediction &&
            (!challenge.validations || !challenge.validations[currentUser.uid])
        );
    });

    pendingGuessResults = challengeArray.filter((challenge) => {
        if (challenge.status !== "completed") return false;
        if (!challenge.answers || !challenge.predictions || !challenge.validations) return false;

        const seenByMe =
            challenge.seenBy &&
            challenge.seenBy[currentUser.uid];

        return (
            challenge.answers[currentUser.uid] &&
            challenge.predictions[currentUser.uid] &&
            challenge.validations[currentUser.uid] &&
            !seenByMe
        );
    });

    
    updateActivityBox();
}

function startPendingGuessAnswer() {
    const challenge =
        pendingGuessAnswers[currentPendingGuessIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentGuessId = challenge.questionId;

    currentGuessQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    guessQuestionText.textContent = challenge.question;
    guessAnswerInput.value = "";

    guessAnswerTitle.textContent = "Écris ta réponse";

    showScreen("guessAnswer");
}

function startPendingGuessPrediction() {
    const challenge =
        pendingGuessPredictions[currentPendingGuessIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentGuessId = challenge.questionId;

    currentGuessQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    guessPredictQuestionText.textContent =
        challenge.question;

    guessPredictionInput.value = "";

guessPredictTitle.textContent =
    "Écris la réponse de " + getPartnerPseudo();

    showScreen("guessPredict");
}

function startPendingGuessValidation() {
    const challenge =
        pendingGuessValidations[currentPendingGuessIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentGuessId = challenge.questionId;

    currentGuessQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    const myAnswer =
        challenge.answers[currentUser.uid];

    const partnerPrediction =
        Object.values(challenge.predictions)
            .find((prediction) => {
                return prediction.uid !== currentUser.uid;
            });

    guessValidationQuestion.textContent =
        challenge.question;

    myRealGuessAnswer.textContent =
        myAnswer.answer;

    partnerPredictionAboutMe.textContent =
        partnerPrediction.prediction;

    showScreen("guessValidation");
}

function saveGuessValidation(result) {
    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/guessAnswers/" +
            currentGuessId +
            "/validations/" +
            currentUser.uid
        )
        .set({
            uid: currentUser.uid,
            result: result,
            createdAt: Date.now()
        })
        .then(() => {
            alert("Validation enregistrée 🌵");
            showScreen("dashboard");
        });
}

function showPendingGuessResult() {
    const challenge =
        pendingGuessResults[currentPendingGuessIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    const answersArray = Object.values(challenge.answers);
    const predictionsArray = Object.values(challenge.predictions);
    const validationsArray = Object.values(challenge.validations);

    const myAnswer =
        challenge.answers[currentUser.uid];

    const myPrediction =
        challenge.predictions[currentUser.uid];

    const partnerAnswer =
        answersArray.find((answer) => {
            return answer.uid !== currentUser.uid;
        });

    const myValidation =
        challenge.validations[currentUser.uid];

    const partnerValidation =
        validationsArray.find((validation) => {
            return validation.uid !== currentUser.uid;
        });

    const myScore = getGuessValidationScore(myValidation.result);
    const partnerScore = getGuessValidationScore(partnerValidation.result);

    const finalScore =
        Math.round(((myScore + partnerScore) / 2) * 100);

    guessResultQuestion.textContent = challenge.question;
    guessResultScore.textContent = finalScore + "%";

    if (finalScore >= 80) {
        guessResultLabel.textContent = "Vous vous connaissez très bien 🌵";
    } else if (finalScore >= 50) {
        guessResultLabel.textContent = "Il y a de l’idée 💚";
    } else {
        guessResultLabel.textContent = "Bon... il faut encore enquêter 🕵️‍♀️";
    }

    guessMyAnswerResult.textContent =
        myAnswer.answer;

    guessMyPredictionResult.textContent =
        myPrediction.prediction;

    guessPartnerAnswerResult.textContent =
        partnerAnswer.answer;

    guessValidationResult.textContent =
        "Toi : " +
        myValidation.result +
        " / Partenaire : " +
        partnerValidation.result;

    showScreen("guessResult");
}

function getGuessValidationScore(result) {
    if (result === "VRAI") return 1;
    if (result === "BOF") return 0.5;
    return 0;
}

function updateActivityBox() {
    renderGameInbox();

    if (!activityBox || !activityList || !currentUser) {
        return;
    }

    const activities = [];

    const addActivity = (items, priority, icon, text, action) => {
        if (!Array.isArray(items) || items.length === 0) {
            return;
        }

        activities.push({
            count: items.length,
            priority,
            icon,
            title: text(items.length),
            action
        });
    };

    addActivity(
        pendingRankingChallenges,
        10,
        "🌵",
        (count) => count === 1
            ? "1 classement t’attend"
            : count + " classements t’attendent",
        () => {
            isPlayingPendingChallenges = true;
            currentPendingChallengeIndex = 0;
            startPendingRankingChallenge();
        }
    );

    addActivity(
        pendingGuessAnswers,
        20,
        "💭",
        (count) => count === 1
            ? "1 réponse à écrire"
            : count + " réponses à écrire",
        () => {
            currentPendingGuessIndex = 0;
            startPendingGuessAnswer();
        }
    );

    addActivity(
        pendingGuessPredictions,
        21,
        "💭",
        (count) => count === 1
            ? "1 prédiction à faire"
            : count + " prédictions à faire",
        () => {
            currentPendingGuessIndex = 0;
            startPendingGuessPrediction();
        }
    );

    addActivity(
        pendingGuessValidations,
        22,
        "💭",
        (count) => count === 1
            ? "1 réponse à valider"
            : count + " réponses à valider",
        () => {
            currentPendingGuessIndex = 0;
            startPendingGuessValidation();
        }
    );

    addActivity(
        pendingLikelyChallenges,
        30,
        "👉",
        (count) => count === 1
            ? "1 question Qui est le plus susceptible t’attend"
            : count + " questions Qui est le plus susceptible t’attendent",
        () => {
            currentPendingLikelyIndex = 0;
            startPendingLikelyChallenge();
        }
    );

    addActivity(
        pendingOkChallenges,
        31,
        "✅",
        (count) => count === 1
            ? "1 question OK ou Pas OK t’attend"
            : count + " questions OK ou Pas OK t’attendent",
        () => {
            currentPendingOkIndex = 0;
            startPendingOkChallenge();
        }
    );

    addActivity(
        pendingGreenFlagChallenges,
        32,
        "🚩",
        (count) => count === 1
            ? "1 Green Flag ou Red Flag t’attend"
            : count + " Green Flags ou Red Flags t’attendent",
        () => {
            currentPendingGreenFlagIndex = 0;
            startPendingGreenFlagChallenge();
        }
    );

    addActivity(
        pendingPrincessChallenges,
        33,
        "👑",
        (count) => count === 1
            ? "1 Princess Treatment t’attend"
            : count + " Princess Treatments t’attendent",
        () => {
            currentPendingPrincessIndex = 0;
            startPendingPrincessChallenge();
        }
    );

    addActivity(
        pendingQuestionsChallenges,
        34,
        "💬",
        (count) => count === 1
            ? "1 question t’attend"
            : count + " questions t’attendent",
        () => {
            currentPendingQuestionsIndex = 0;
            startPendingQuestionsChallenge();
        }
    );

    addActivity(
        pendingRankingResults,
        50,
        "✨",
        (count) => count === 1
            ? "1 résultat de classement est disponible"
            : count + " résultats de classement sont disponibles",
        () => {
            currentPendingRankingResultIndex = 0;
            showPendingRankingResult();
        }
    );

    addActivity(
        pendingGuessResults,
        51,
        "✨",
        (count) => count === 1
            ? "1 résultat Devine ma réponse est disponible"
            : count + " résultats Devine ma réponse sont disponibles",
        () => {
            currentPendingGuessIndex = 0;
            showPendingGuessResult();
        }
    );

    addActivity(
        pendingLikelyResults,
        52,
        "✨",
        (count) => count === 1
            ? "1 résultat Qui est le plus susceptible est disponible"
            : count + " résultats Qui est le plus susceptible sont disponibles",
        () => {
            currentPendingLikelyIndex = 0;
            showPendingLikelyResult();
        }
    );

    addActivity(
        pendingOkResults,
        53,
        "✨",
        (count) => count === 1
            ? "1 résultat OK ou Pas OK est disponible"
            : count + " résultats OK ou Pas OK sont disponibles",
        () => {
            currentPendingOkIndex = 0;
            showPendingOkResult();
        }
    );

    addActivity(
        pendingGreenFlagResults,
        54,
        "✨",
        (count) => count === 1
            ? "1 résultat Green Flag ou Red Flag est disponible"
            : count + " résultats Green Flag ou Red Flag sont disponibles",
        () => {
            currentPendingGreenFlagIndex = 0;
            showPendingGreenFlagResult();
        }
    );

    addActivity(
        pendingPrincessResults,
        55,
        "✨",
        (count) => count === 1
            ? "1 résultat Princess Treatment est disponible"
            : count + " résultats Princess Treatment sont disponibles",
        () => {
            currentPendingPrincessIndex = 0;
            showPendingPrincessResult();
        }
    );

    addActivity(
        pendingQuestionsResults,
        56,
        "✨",
        (count) => count === 1
            ? "1 réponse est à découvrir"
            : count + " réponses sont à découvrir",
        () => {
            currentPendingQuestionsIndex = 0;
            showPendingQuestionsResult();
        }
    );

    if (activities.length > 0) {
        activities.sort((a, b) => a.priority - b.priority);

        const primaryActivity = activities[0];
        const remainingCount = activities
            .slice(1)
            .reduce((total, activity) => total + activity.count, 0);

        renderDashboardActivity({
            kicker: "À faire",
            icon: primaryActivity.icon,
            title: primaryActivity.title,
            subtitle: remainingCount > 0
                ? "+" + remainingCount + " autre" + (remainingCount > 1 ? "s" : "") + " action" + (remainingCount > 1 ? "s" : "")
                : "Ouvre pour continuer",
            action: primaryActivity.action
        });
        return;
    }

    const latestActivity = getLatestCompletedActivity();

    if (latestActivity) {
        renderDashboardActivity(latestActivity);
        return;
    }

    activityBox.style.display = "none";
    activityBox.onclick = null;
}

function getGameInboxActivities() {
    const activities = [];
    const add = (items, icon, label, state, action) => {
        if (!Array.isArray(items) || items.length === 0) {
            return;
        }

        activities.push({
            count: items.length,
            icon,
            label,
            state,
            action
        });
    };

    add(pendingRankingChallenges, "🌵", "Classements", "À toi de classer", () => {
        isPlayingPendingChallenges = true;
        currentPendingChallengeIndex = 0;
        startPendingRankingChallenge();
    });
    add(pendingGuessAnswers, "💭", "Devine ma réponse", "Ta réponse est attendue", () => {
        currentPendingGuessIndex = 0;
        startPendingGuessAnswer();
    });
    add(pendingGuessPredictions, "🔮", "Devine ma réponse", "Fais ta prédiction", () => {
        currentPendingGuessIndex = 0;
        startPendingGuessPrediction();
    });
    add(pendingGuessValidations, "🔎", "Devine ma réponse", "Valide la prédiction", () => {
        currentPendingGuessIndex = 0;
        startPendingGuessValidation();
    });
    add(pendingLikelyChallenges, "👉", "Qui est le plus susceptible ?", "À toi de choisir", () => {
        currentPendingLikelyIndex = 0;
        startPendingLikelyChallenge();
    });
    add(pendingOkChallenges, "✅", "OK ou Pas OK ?", "À toi de répondre", () => {
        currentPendingOkIndex = 0;
        startPendingOkChallenge();
    });
    add(pendingGreenFlagChallenges, "🚩", "Green Flag / Red Flag", "À toi de répondre", () => {
        currentPendingGreenFlagIndex = 0;
        startPendingGreenFlagChallenge();
    });
    add(pendingPrincessChallenges, "👑", "Princess Treatment", "À toi de répondre", () => {
        currentPendingPrincessIndex = 0;
        startPendingPrincessChallenge();
    });
    add(pendingQuestionsChallenges, "💬", "Questions", "Ta réponse est attendue", () => {
        currentPendingQuestionsIndex = 0;
        startPendingQuestionsChallenge();
    });

    add(pendingRankingResults, "✨", "Classements", "Résultat disponible", () => {
        currentPendingRankingResultIndex = 0;
        showPendingRankingResult();
    });
    add(pendingGuessResults, "✨", "Devine ma réponse", "Résultat disponible", () => {
        currentPendingGuessIndex = 0;
        showPendingGuessResult();
    });
    add(pendingLikelyResults, "✨", "Qui est le plus susceptible ?", "Résultat disponible", () => {
        currentPendingLikelyIndex = 0;
        showPendingLikelyResult();
    });
    add(pendingOkResults, "✨", "OK ou Pas OK ?", "Résultat disponible", () => {
        currentPendingOkIndex = 0;
        showPendingOkResult();
    });
    add(pendingGreenFlagResults, "✨", "Green Flag / Red Flag", "Résultat disponible", () => {
        currentPendingGreenFlagIndex = 0;
        showPendingGreenFlagResult();
    });
    add(pendingPrincessResults, "✨", "Princess Treatment", "Résultat disponible", () => {
        currentPendingPrincessIndex = 0;
        showPendingPrincessResult();
    });
    add(pendingQuestionsResults, "✨", "Questions", "Réponse à découvrir", () => {
        currentPendingQuestionsIndex = 0;
        showPendingQuestionsResult();
    });

    return activities;
}

function renderGameInbox() {
    if (!gameInbox || !gameInboxList || !gameInboxCount) {
        return;
    }

    const activities = getGameInboxActivities();
    const total = activities.reduce((sum, activity) => sum + activity.count, 0);

    gameInbox.style.display = total > 0 ? "block" : "none";
    gameInboxCount.textContent = total;
    gameInboxCount.setAttribute(
        "aria-label",
        total + " activité" + (total > 1 ? "s" : "") + " à reprendre"
    );
    gameInboxList.replaceChildren();

    activities.forEach((activity) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "game-inbox-card";

        const icon = document.createElement("span");
        icon.className = "game-inbox-icon";
        icon.textContent = activity.icon;

        const copy = document.createElement("span");
        const state = document.createElement("small");
        state.textContent = activity.state;
        const label = document.createElement("strong");
        label.textContent = activity.label;
        copy.append(state, label);

        const badge = document.createElement("span");
        badge.className = "game-inbox-badge";
        badge.textContent = activity.count;

        const arrow = document.createElement("span");
        arrow.className = "game-inbox-arrow";
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "›";

        button.append(icon, copy, badge, arrow);
        button.addEventListener("click", activity.action);
        gameInboxList.appendChild(button);
    });
}

function renderDashboardActivity(activity) {
    activityList.innerHTML = "";

    const title = document.createElement("strong");
    title.className = "dashboard-activity-title";
    title.textContent = activity.title;

    const subtitle = document.createElement("span");
    subtitle.className = "dashboard-activity-subtitle";
    subtitle.textContent = activity.subtitle || "";

    activityList.appendChild(title);
    activityList.appendChild(subtitle);

    if (activityKicker) {
        activityKicker.textContent = activity.kicker;
    }

    if (activityIcon) {
        activityIcon.textContent = activity.icon;
    }

    activityBox.onclick = activity.action || null;
    activityBox.classList.toggle("is-actionable", Boolean(activity.action));
    activityBox.style.display = "grid";
}

function getLatestCompletedActivity() {
    if (!currentSpaceData) {
        return null;
    }

    const modes = [
        { key: "rankingChallenges", mode: "ranking", icon: "🌵", label: "un classement" },
        { key: "guessAnswers", mode: "guess", icon: "💭", label: "Devine ma réponse" },
        { key: "likelyChallenges", mode: "likely", icon: "👉", label: "Qui est le plus susceptible" },
        { key: "okChallenges", mode: "ok", icon: "✅", label: "OK ou Pas OK" },
        { key: "greenFlagChallenges", mode: "greenFlag", icon: "🚩", label: "Green Flag ou Red Flag" },
        { key: "princessChallenges", mode: "princess", icon: "👑", label: "Princess Treatment" },
        { key: "questionsChallenges", mode: "questions", icon: "💬", label: "une question" }
    ];

    let latest = null;

    modes.forEach((mode) => {
        Object.values(currentSpaceData[mode.key] || {}).forEach((challenge) => {
            if (challenge.status !== "completed") {
                return;
            }

            const answers = Object.values(challenge.answers || {});
            const lastAnswer = answers.reduce((newest, answer) => {
                if (!newest || (answer.createdAt || 0) > (newest.createdAt || 0)) {
                    return answer;
                }
                return newest;
            }, null);

            const timestamp = challenge.completedAt || lastAnswer?.createdAt || challenge.createdAt || 0;

            if (!timestamp || (latest && latest.timestamp >= timestamp)) {
                return;
            }

            const isMe = lastAnswer && lastAnswer.uid === currentUser.uid;
            const actor = isMe
                ? "Tu as"
                : (lastAnswer?.pseudo || getPartnerPseudo()) + " a";

            latest = {
                kicker: "Dernière activité",
                icon: mode.icon,
                title: actor + " terminé " + mode.label,
                subtitle: formatRelativeActivityTime(timestamp),
                timestamp,
                action: () => openHistoryMode(mode.mode)
            };
        });
    });

    return latest;
}

function formatRelativeActivityTime(timestamp) {
    const elapsed = Math.max(0, Date.now() - timestamp);
    const minutes = Math.floor(elapsed / 60000);

    if (minutes < 1) {
        return "À l’instant";
    }

    if (minutes < 60) {
        return "Il y a " + minutes + " minute" + (minutes > 1 ? "s" : "");
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
        return "Il y a " + hours + " heure" + (hours > 1 ? "s" : "");
    }

    const days = Math.floor(hours / 24);
    return "Il y a " + days + " jour" + (days > 1 ? "s" : "");
}

function markCurrentGuessResultSeen() {
    const challenge = pendingGuessResults[currentPendingGuessIndex];

    if (!challenge) {
        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/guessAnswers/" +
            challenge.questionId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

function startLikelyGame() {
    if (!likelyQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    const randomQuestion =
        likelyQuestions[
            Math.floor(
                Math.random() * likelyQuestions.length
            )
        ];

    currentLikelyQuestion = randomQuestion;
    currentLikelyId = randomQuestion.id;

    likelyQuestionText.textContent =
        randomQuestion.question;

    showScreen("likely");
}

function saveLikelyAnswer(answer) {
    if (!currentLikelyQuestion) {
        alert("Question introuvable 🌵");
        return;
    }

    currentLikelyId = currentLikelyQuestion.id;

    database
        .ref("spaces/" + currentSpaceCode + "/likelyChallenges/" + currentLikelyId)
        .update({
            questionId: currentLikelyQuestion.id,
            question: currentLikelyQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref("spaces/" + currentSpaceCode + "/likelyChallenges/" + currentLikelyId + "/answers/" + currentUser.uid)
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            return incrementAnswersCount();
        })
        .then(() => {
            showToast("🌵 Réponse enregistrée");

            showAnswerSentScreen(() => {
                startLikelyGame();
            });
        });
}

function listenToLikelyChallenges() {
    subscribeToSpaceValue("likelyChallenges", (snapshot) => {
            const challenges = snapshot.val() || {};

            Object.entries(challenges).forEach(([id, challenge]) => {
                const answers = challenge.answers || {};
                const answersCount = Object.keys(answers).length;

                if (
                    answersCount >= 2 &&
                    challenge.status === "answering"
                ) {
                    database
                        .ref(
                            "spaces/" +
                            currentSpaceCode +
                            "/likelyChallenges/" +
                            id
                        )
                        .update({
    status: "completed",
    completedAt: Date.now(),
    compatibility: calculateChoiceCompatibility(
        Object.values(answers)[0].answer,
        Object.values(answers)[1].answer
    )
}).then(() => {
    return awardCompletedGameBonus("likely", id);
});
                }
            });

            displayLikelyChallenges(challenges);
    });
}

function displayLikelyChallenges(challenges) {
    const challengeArray = Object.values(challenges || {});

    pendingLikelyChallenges = challengeArray.filter((challenge) => {
        return (
            challenge.status === "answering" &&
            challenge.answers &&
            !challenge.answers[currentUser.uid] &&
            Object.keys(challenge.answers).some((uid) => uid !== currentUser.uid)
        );
    });

    pendingLikelyResults = challengeArray.filter((challenge) => {
        const seenByMe =
            challenge.seenBy &&
            challenge.seenBy[currentUser.uid];

        return (
            challenge.status === "completed" &&
            challenge.answers &&
            challenge.answers[currentUser.uid] &&
            !seenByMe
        );
    });

    updateActivityBox();
}

function startPendingLikelyChallenge() {
    const challenge =
        pendingLikelyChallenges[currentPendingLikelyIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentLikelyId = challenge.questionId;

    currentLikelyQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    likelyQuestionText.textContent =
        challenge.question;

    showScreen("likely");
}





function startPendingLikelyChallenge() {
    const challenge =
        pendingLikelyChallenges[currentPendingLikelyIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentLikelyId = challenge.questionId;

    currentLikelyQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    likelyQuestionText.textContent = challenge.question;

    showScreen("likely");
}

function showPendingLikelyResult() {
    const challenge =
        pendingLikelyResults[currentPendingLikelyIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    const answersArray =
        Object.values(challenge.answers || {});

    const myAnswer =
        challenge.answers[currentUser.uid];

    const partnerAnswer =
        answersArray.find((answer) => {
            return answer.uid !== currentUser.uid;
        });

    likelyResultQuestion.textContent =
        challenge.question;

    likelyMyAnswer.textContent =
        myAnswer ? myAnswer.answer : "Pas de réponse";

    likelyPartnerAnswer.textContent =
        partnerAnswer ? partnerAnswer.answer : "Pas encore répondu";

    const myTarget =
        getLikelyChosenTarget(myAnswer);

    const partnerTarget =
        getLikelyChosenTarget(partnerAnswer);

    if (
        myTarget &&
        partnerTarget &&
        myTarget === partnerTarget
    ) {
        likelyVerdictEmoji.textContent = "💚";
        likelyVerdictText.textContent =
            "Vous avez désigné la même personne.";
    } else {
        likelyVerdictEmoji.textContent = "👀";
        likelyVerdictText.textContent =
            "Vous n’avez pas désigné la même personne.";
    }

    showScreen("likelyResult");
}

function markCurrentLikelyResultSeen() {
    const challenge =
        pendingLikelyResults[currentPendingLikelyIndex];

    if (!challenge) {
        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/likelyChallenges/" +
            challenge.questionId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

function startOkGame() {
    if (!okQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    currentOkQuestion =
        okQuestions[Math.floor(Math.random() * okQuestions.length)];

    currentOkId = currentOkQuestion.id;

    okQuestionText.textContent =
        currentOkQuestion.question;

    showScreen("ok");
}

function saveOkAnswer(answer) {
    if (!currentOkQuestion) {
        alert("Question introuvable 🌵");
        return;
    }

    currentOkId = currentOkQuestion.id;

    database
        .ref("spaces/" + currentSpaceCode + "/okChallenges/" + currentOkId)
        .update({
            questionId: currentOkQuestion.id,
            question: currentOkQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref("spaces/" + currentSpaceCode + "/okChallenges/" + currentOkId + "/answers/" + currentUser.uid)
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            return incrementAnswersCount();
        })
        .then(() => {
            showToast("🌵 Réponse enregistrée");

            showAnswerSentScreen(() => {
                startOkGame();
            });
        });
}

function listenToOkChallenges() {
    subscribeToSpaceValue("okChallenges", (snapshot) => {
            const challenges = snapshot.val() || {};

            Object.entries(challenges).forEach(([id, challenge]) => {
                const answers = challenge.answers || {};
                const answersCount = Object.keys(answers).length;

                if (
                    answersCount >= 2 &&
                    challenge.status === "answering"
                ) {
                    database
                        .ref(
                            "spaces/" +
                            currentSpaceCode +
                            "/okChallenges/" +
                            id
                        )
                        .update({
    status: "completed",
    completedAt: Date.now(),
    compatibility: calculateChoiceCompatibility(
        Object.values(answers)[0].answer,
        Object.values(answers)[1].answer
    )
}).then(() => {
    return awardCompletedGameBonus("ok", id);
});
                }
            });

            displayOkChallenges(challenges);
    });
}

function displayOkChallenges(challenges) {
    const challengeArray = Object.values(challenges || {});

    pendingOkChallenges = challengeArray.filter((challenge) => {
        return (
            challenge.status === "answering" &&
            challenge.answers &&
            !challenge.answers[currentUser.uid] &&
            Object.keys(challenge.answers).some((uid) => uid !== currentUser.uid)
        );
    });

    pendingOkResults = challengeArray.filter((challenge) => {
        const seenByMe =
            challenge.seenBy &&
            challenge.seenBy[currentUser.uid];

        return (
            challenge.status === "completed" &&
            challenge.answers &&
            challenge.answers[currentUser.uid] &&
            !seenByMe
        );
    });

    updateActivityBox();
}

function startPendingOkChallenge() {
    const challenge =
        pendingOkChallenges[currentPendingOkIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentOkId = challenge.questionId;

    currentOkQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    okQuestionText.textContent = challenge.question;

    showScreen("ok");
}

function showPendingOkResult() {
    const challenge =
        pendingOkResults[currentPendingOkIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    const answersArray = Object.values(challenge.answers);

    const myAnswer =
        challenge.answers[currentUser.uid];

    const partnerAnswer =
        answersArray.find((answer) => {
            return answer.uid !== currentUser.uid;
        });

    okResultQuestion.textContent = challenge.question;

    okMyAnswer.textContent =
        myAnswer ? myAnswer.answer : "Pas de réponse";

    okPartnerAnswer.textContent =
        partnerAnswer ? partnerAnswer.answer : "Pas encore répondu";

    if (
    myAnswer &&
    partnerAnswer &&
    myAnswer.answer === partnerAnswer.answer
) {
    okVerdictEmoji.textContent = "💚";
    okVerdictText.textContent =
        "Vous avez la même limite.";
} else {
    okVerdictEmoji.textContent = "👀";
    okVerdictText.textContent =
        "Vous ne placez pas la limite au même endroit.";
}

    showScreen("okResult");
}

function markCurrentOkResultSeen() {
    const challenge =
        pendingOkResults[currentPendingOkIndex];

    if (!challenge) {
        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/okChallenges/" +
            challenge.questionId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

async function loadGreenFlagQuestionsData() {
    const response = await fetch("data/green-flag-red-flag.json");
    greenFlagQuestions = await response.json();

    console.log("Questions Green Flag chargées :", greenFlagQuestions);
}

loadGreenFlagQuestionsData();

function startGreenFlagGame() {
    if (!greenFlagQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    currentGreenFlagQuestion =
        greenFlagQuestions[
            Math.floor(Math.random() * greenFlagQuestions.length)
        ];

    currentGreenFlagId = currentGreenFlagQuestion.id;

    greenFlagQuestionText.textContent =
        currentGreenFlagQuestion.question;

    showScreen("greenFlag");
}

function saveGreenFlagAnswer(answer) {
    if (!currentGreenFlagQuestion) {
        alert("Question introuvable 🌵");
        return;
    }

    currentGreenFlagId = currentGreenFlagQuestion.id;

    database
        .ref("spaces/" + currentSpaceCode + "/greenFlagChallenges/" + currentGreenFlagId)
        .update({
            questionId: currentGreenFlagQuestion.id,
            question: currentGreenFlagQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref("spaces/" + currentSpaceCode + "/greenFlagChallenges/" + currentGreenFlagId + "/answers/" + currentUser.uid)
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            return incrementAnswersCount();
        })
        .then(() => {
            showToast("🌵 Réponse enregistrée");

            showAnswerSentScreen(() => {
                startGreenFlagGame();
            });
        });
}

function listenToGreenFlagChallenges() {
    subscribeToSpaceValue("greenFlagChallenges", (snapshot) => {
            const challenges = snapshot.val() || {};

            Object.entries(challenges).forEach(([id, challenge]) => {
                const answers = challenge.answers || {};
                const answersCount = Object.keys(answers).length;

                if (
                    answersCount >= 2 &&
                    challenge.status === "answering"
                ) {
                    database
                        .ref(
                            "spaces/" +
                            currentSpaceCode +
                            "/greenFlagChallenges/" +
                            id
                        )
                        .update({
    status: "completed",
    completedAt: Date.now(),
    compatibility: calculateChoiceCompatibility(
        Object.values(answers)[0].answer,
        Object.values(answers)[1].answer
    )
}).then(() => {
    return awardCompletedGameBonus("greenFlag", id);
});
                }
            });

            displayGreenFlagChallenges(challenges);
    });
}

function displayGreenFlagChallenges(challenges) {
    const challengeArray = Object.values(challenges || {});

    pendingGreenFlagChallenges = challengeArray.filter((challenge) => {
        return (
            challenge.status === "answering" &&
            challenge.answers &&
            !challenge.answers[currentUser.uid] &&
            Object.keys(challenge.answers).some((uid) => uid !== currentUser.uid)
        );
    });

    pendingGreenFlagResults = challengeArray.filter((challenge) => {
        const seenByMe =
            challenge.seenBy &&
            challenge.seenBy[currentUser.uid];

        return (
            challenge.status === "completed" &&
            challenge.answers &&
            challenge.answers[currentUser.uid] &&
            !seenByMe
        );
    });

    updateActivityBox();
}

function startPendingGreenFlagChallenge() {
    const challenge =
        pendingGreenFlagChallenges[currentPendingGreenFlagIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentGreenFlagId = challenge.questionId;

    currentGreenFlagQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    greenFlagQuestionText.textContent =
        challenge.question;

    showScreen("greenFlag");
}

function showPendingGreenFlagResult() {
    const challenge =
        pendingGreenFlagResults[currentPendingGreenFlagIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    const answersArray =
        Object.values(challenge.answers);

    const myAnswer =
        challenge.answers[currentUser.uid];

    const partnerAnswer =
        answersArray.find((answer) => {
            return answer.uid !== currentUser.uid;
        });

    greenFlagResultQuestion.textContent =
        challenge.question;

    greenFlagMyAnswer.textContent =
        myAnswer ? myAnswer.answer : "Pas de réponse";

    greenFlagPartnerAnswer.textContent =
        partnerAnswer ? partnerAnswer.answer : "Pas encore répondu";

   if (
    myAnswer &&
    partnerAnswer &&
    myAnswer.answer === partnerAnswer.answer
) {
    greenFlagVerdictEmoji.textContent = "💚";
    greenFlagVerdictText.textContent =
        "Vous lisez ce comportement de la même façon.";
} else {
    greenFlagVerdictEmoji.textContent = "👀";
    greenFlagVerdictText.textContent =
        "Vous n’avez pas la même lecture de ce comportement.";
}

    showScreen("greenFlagResult");
}

function markCurrentGreenFlagResultSeen() {
    const challenge =
        pendingGreenFlagResults[currentPendingGreenFlagIndex];

    if (!challenge) {
        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/greenFlagChallenges/" +
            challenge.questionId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

async function loadPrincessQuestionsData() {
    const response = await fetch("data/princess-treatment.json");
    princessQuestions = await response.json();

    console.log("Questions Princess Treatment chargées :", princessQuestions);
}

loadPrincessQuestionsData();

async function startPrincessGame() {
    if (!princessQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    currentPrincessQuestion =
        princessQuestions[
            Math.floor(
                Math.random() * princessQuestions.length
            )
        ];

    currentPrincessId =
        currentPrincessQuestion.id;

    princessQuestionText.textContent =
        currentPrincessQuestion.question;

    showScreen("princess");
}

function savePrincessAnswer(answer) {
    if (!currentPrincessQuestion) {
        alert("Question introuvable 👑");
        return;
    }

    currentPrincessId = currentPrincessQuestion.id;

    database
        .ref("spaces/" + currentSpaceCode + "/princessChallenges/" + currentPrincessId)
        .update({
            questionId: currentPrincessQuestion.id,
            question: currentPrincessQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref("spaces/" + currentSpaceCode + "/princessChallenges/" + currentPrincessId + "/answers/" + currentUser.uid)
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            return incrementAnswersCount();
        })
        .then(() => {
            showToast("👑 Réponse enregistrée");

            showAnswerSentScreen(() => {
                startPrincessGame();
            });
        });
}

function listenToPrincessChallenges() {
    subscribeToSpaceValue("princessChallenges", (snapshot) => {

            const challenges =
                snapshot.val() || {};

            Object.entries(challenges)
                .forEach(([id, challenge]) => {

                const answers =
                    challenge.answers || {};

                if (
                    Object.keys(answers).length >= 2 &&
                    challenge.status === "answering"
                ) {
                    database
                        .ref(
                            "spaces/" +
                            currentSpaceCode +
                            "/princessChallenges/" +
                            id
                        )
                        .update({
    status: "completed",
    completedAt: Date.now(),
    compatibility: calculateChoiceCompatibility(
        Object.values(answers)[0].answer,
        Object.values(answers)[1].answer
    )
}).then(() => {
    return awardCompletedGameBonus("princess", id);
});
                }
            });

            displayPrincessChallenges(
                challenges
            );
    });
}

function displayPrincessChallenges(
    challenges
) {
    const challengeArray =
        Object.values(challenges || {});

    pendingPrincessChallenges =
        challengeArray.filter(
            (challenge) => {

            return (
                challenge.status ===
                    "answering" &&
                challenge.answers &&
                !challenge.answers[
                    currentUser.uid
                ] &&
                Object.keys(
                    challenge.answers
                ).some(
                    uid =>
                    uid !== currentUser.uid
                )
            );
        });

    pendingPrincessResults =
        challengeArray.filter(
            (challenge) => {

            const seen =
                challenge.seenBy &&
                challenge.seenBy[
                    currentUser.uid
                ];

            return (
                challenge.status ===
                    "completed" &&
                challenge.answers &&
                challenge.answers[
                    currentUser.uid
                ] &&
                !seen
            );
        });

    updateActivityBox();
}

function startPendingPrincessChallenge() {

    const challenge =
        pendingPrincessChallenges[
            currentPendingPrincessIndex
        ];

    if (!challenge) {

        showScreen(
            "dashboard"
        );

        return;
    }

    currentPrincessId =
        challenge.questionId;

    currentPrincessQuestion = {

        id:
            challenge.questionId,

        question:
            challenge.question
    };

    princessQuestionText.textContent =
        challenge.question;

    showScreen(
        "princess"
    );
}

function showPendingPrincessResult() {

    const challenge =
        pendingPrincessResults[
            currentPendingPrincessIndex
        ];

    if (!challenge) {

        showScreen(
            "dashboard"
        );

        return;
    }

    const answersArray =
        Object.values(
            challenge.answers
        );

    const myAnswer =
        challenge.answers[
            currentUser.uid
        ];

    const partnerAnswer =
        answersArray.find(
            answer =>
                answer.uid !==
                currentUser.uid
        );

    princessResultQuestion.textContent =
        challenge.question;

    princessMyAnswer.textContent =
        myAnswer
            ? myAnswer.answer
            : "Pas de réponse";

    princessPartnerAnswer.textContent =
        partnerAnswer
            ? partnerAnswer.answer
            : "Pas encore répondu";

    if (
    myAnswer &&
    partnerAnswer &&
    myAnswer.answer === partnerAnswer.answer
) {
    princessVerdictEmoji.textContent = "👑";
    princessVerdictText.textContent =
        "Vous avez la même vision du Princess Treatment.";
} else {
    princessVerdictEmoji.textContent = "👀";
    princessVerdictText.textContent =
        "Vous n’avez pas tout à fait la même vision.";
}

    showScreen(
        "princessResult"
    );
}

function markCurrentPrincessResultSeen() {

    const challenge =
        pendingPrincessResults[
            currentPendingPrincessIndex
        ];

    if (!challenge) {

        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/princessChallenges/" +
            challenge.questionId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

async function loadCoupleQuestionsData() {
    const response = await fetch("data/questions.json");
    coupleQuestions = await response.json();

    updateDashboardContentCounts();
    console.log("Questions chargées :", coupleQuestions);
}

coupleQuestionsLoadPromise = loadCoupleQuestionsData();

function startQuestionsGame() {
    if (!coupleQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    currentCoupleQuestion =
        coupleQuestions[
            Math.floor(Math.random() * coupleQuestions.length)
        ];

    currentCoupleQuestionId =
        currentCoupleQuestion.id;

    questionsQuestionText.textContent =
        currentCoupleQuestion.question;

    questionsAnswerInput.value = "";

    showScreen("questions");
}

function saveQuestionsAnswer() {
    const answer = questionsAnswerInput.value.trim();

    if (answer === "") {
        alert("Écris ta réponse 🌵");
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode + "/questionsChallenges/" + currentCoupleQuestionId)
        .update({
            questionId: currentCoupleQuestion.id,
            question: currentCoupleQuestion.question,
            status: "answering",
            createdAt: Date.now()
        })
        .then(() => {
            return database
                .ref("spaces/" + currentSpaceCode + "/questionsChallenges/" + currentCoupleQuestionId + "/answers/" + currentUser.uid)
                .set({
                    uid: currentUser.uid,
                    pseudo: pseudo,
                    answer: answer,
                    createdAt: Date.now()
                });
        })
        .then(() => {
            return incrementAnswersCount();
        })
        .then(() => {
            showScreen("dashboard");
        });
}

function listenToQuestionsChallenges() {
    subscribeToSpaceValue("questionsChallenges", (snapshot) => {
            const challenges = snapshot.val() || {};

            Object.entries(challenges).forEach(([id, challenge]) => {
                const answers = challenge.answers || {};

                if (
                    Object.keys(answers).length >= 2 &&
                    challenge.status === "answering"
                ) {
                    database
                        .ref(
                            "spaces/" +
                            currentSpaceCode +
                            "/questionsChallenges/" +
                            id
                        )
                        .update({
    status: "completed",
    completedAt: Date.now(),
    compatibility: calculateChoiceCompatibility(
        Object.values(answers)[0].answer,
        Object.values(answers)[1].answer
    )
}).then(() => {
    return awardCompletedGameBonus("questions", id);
});
                }
            });

            displayQuestionsChallenges(challenges);
    });
}

function displayQuestionsChallenges(challenges) {
    const challengeArray =
        Object.values(challenges || {});

    pendingQuestionsChallenges =
        challengeArray.filter((challenge) => {
            return (
                challenge.status === "answering" &&
                challenge.answers &&
                !challenge.answers[currentUser.uid] &&
                Object.keys(challenge.answers).some((uid) => {
                    return uid !== currentUser.uid;
                })
            );
        });

    pendingQuestionsResults =
        challengeArray.filter((challenge) => {
            const seenByMe =
                challenge.seenBy &&
                challenge.seenBy[currentUser.uid];

            return (
                challenge.status === "completed" &&
                challenge.answers &&
                challenge.answers[currentUser.uid] &&
                !seenByMe
            );
        });

    updateActivityBox();
}

function startPendingQuestionsChallenge() {
    const challenge =
        pendingQuestionsChallenges[currentPendingQuestionsIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    currentCoupleQuestionId = challenge.questionId;

    currentCoupleQuestion = {
        id: challenge.questionId,
        question: challenge.question
    };

    questionsQuestionText.textContent = challenge.question;
    questionsAnswerInput.value = "";

    showScreen("questions");
}

function showPendingQuestionsResult() {
    const challenge =
        pendingQuestionsResults[currentPendingQuestionsIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    const answersArray = Object.values(challenge.answers);

    const myAnswer =
        challenge.answers[currentUser.uid];

    const partnerAnswer =
        answersArray.find((answer) => {
            return answer.uid !== currentUser.uid;
        });

    questionsResultQuestion.textContent =
        challenge.question;

    questionsMyAnswer.textContent =
        myAnswer ? myAnswer.answer : "Pas de réponse";

    questionsPartnerAnswer.textContent =
        partnerAnswer ? partnerAnswer.answer : "Pas encore répondu";

    showScreen("questionsResult");
}

function markCurrentQuestionsResultSeen() {
    const challenge =
        pendingQuestionsResults[currentPendingQuestionsIndex];

    if (!challenge) {
        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/questionsChallenges/" +
            challenge.questionId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

function showToast(message) {
    toastMessage.textContent = message;
    toastMessage.classList.add("visible");

    setTimeout(() => {
        toastMessage.classList.remove("visible");
    }, 1800);
}

function showPendingRankingResult() {
    const challenge =
        pendingRankingResults[currentPendingRankingResultIndex];

    if (!challenge) {
        showScreen("dashboard");
        return;
    }

    const answersArray =
        Object.values(challenge.answers);

    const myAnswerData =
        challenge.answers[currentUser.uid];

    const partnerAnswerData =
        answersArray.find((answer) => {
            return answer.uid !== currentUser.uid;
        });

    if (!myAnswerData || !partnerAnswerData) {
        showScreen("dashboard");
        return;
    }

    showRankingCompatibility(
        challenge,
        myAnswerData,
        partnerAnswerData
    );
}

function markCurrentRankingResultSeen() {
    const challenge =
        pendingRankingResults[currentPendingRankingResultIndex];

    if (!challenge) {
        return Promise.resolve();
    }

    return database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/rankingChallenges/" +
            challenge.rankingId +
            "/seenBy/" +
            currentUser.uid
        )
        .set(true);
}

function showAnswerSentScreen(nextFunction) {
    nextAfterAnswerFunction = nextFunction;
    showScreen("answerSent");
}

function openHistoryMode(mode, focusedChallengeId = null) {
        if (mode === "stats") {
        openRelationStats();
        return;
    }
    historyDetailList.innerHTML = "";

    currentHistoryMode = mode;
    currentHistoryItems = [];

    const config = {
        ranking: {
            title: "🌵 Classements",
            path: "rankingChallenges"
        },
        guess: {
            title: "💭 Devine ma réponse",
            path: "guessAnswers"
        },
        questions: {
            title: "💬 Questions",
            path: "questionsChallenges"
        },
        likely: {
            title: "😂 Qui est le plus susceptible",
            path: "likelyChallenges"
        },
        ok: {
            title: "✅ OK ou Pas OK",
            path: "okChallenges"
        },
        greenFlag: {
            title: "🚩 Green Flag / Red Flag",
            path: "greenFlagChallenges"
        },
        princess: {
            title: "👑 Princess Treatment",
            path: "princessChallenges"
        }
    };

    const selectedMode = config[mode];

    if (!selectedMode) {
        return;
    }

    historyDetailTitle.textContent = selectedMode.title;

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/" +
            selectedMode.path
        )
        .once("value")
        .then((snapshot) => {
            const data = snapshot.val() || {};

            currentHistoryItems = Object.entries(data)
                .filter(([, item]) => {
                    return item.status === "completed";
                })
                .map(([challengeId, item]) => ({ ...item, _challengeId: challengeId }))
                .sort((a, b) => {
                    return (b.completedAt || b.createdAt || 0) -
                        (a.completedAt || a.createdAt || 0);
                });

            if (currentHistoryItems.length === 0) {
                historyDetailList.innerHTML =
                    '<p class="empty-text">Aucun souvenir pour ce mode 🌵</p>';

                showScreen("historyDetail");
                return;
            }

            currentHistoryItems.forEach((item, index) => {
                const card = createHistoryCard(mode, item);

                card.style.cursor = "pointer";

                card.addEventListener("click", () => {
                    openHistoryItem(index);
                });

                historyDetailList.appendChild(card);
            });

            showScreen("historyDetail");

            if (focusedChallengeId) {
                const focusedIndex = currentHistoryItems.findIndex((item) => {
                    return item._challengeId === focusedChallengeId;
                });

                if (focusedIndex >= 0) {
                    openHistoryItem(focusedIndex);
                }
            }
        });
}

function createHistoryCard(mode, item) {
    const card = document.createElement("div");
    card.classList.add("history-card");

    const title = document.createElement("h3");
    title.textContent =
        item.title ||
        item.question ||
        "Souvenir";

    const date = document.createElement("small");
    date.classList.add("history-date");
    date.textContent =
        formatHistoryDate(item.completedAt || item.createdAt);

    card.appendChild(title);
    card.appendChild(date);

    if (mode === "ranking") {
        const score = document.createElement("span");
        score.classList.add("history-score");

        score.textContent =
            getCompatibilityHearts(item.compatibility || 0) +
            " " +
            (item.compatibility || 0) +
            "%";

        card.appendChild(score);
        return card;
    }

    if (item.answers) {
        const answersArray = Object.values(item.answers);

        answersArray.forEach((answer) => {
            const p = document.createElement("p");

            const label =
                answer.uid === currentUser.uid
                    ? "Toi"
                    : "Partenaire";

            const strong = document.createElement("strong");
            strong.textContent = label + " :";
            p.append(strong, " " + (answer.answer || "Pas de réponse"));

            card.appendChild(p);
        });
    }

    return card;
}

function openHistoryItem(index) {
    const item = currentHistoryItems[index];

    if (!item) {
        return;
    }

    historyItemContent.innerHTML = "";

    historyItemTitle.textContent =
        item.title ||
        item.question ||
        "📚 Souvenir";

    if (currentHistoryMode === "ranking") {
        renderRankingHistoryItem(item);
    } else {
        renderSimpleHistoryItem(item);
    }

    showScreen("historyItem");
}

function renderRankingHistoryItem(item) {
    const date = document.createElement("p");
    date.classList.add("history-date");
    date.textContent =
        formatHistoryDate(item.completedAt || item.createdAt);

    historyItemContent.appendChild(date);

    const scoreBox = document.createElement("div");
    scoreBox.classList.add("compatibility-score-box");

    scoreBox.innerHTML =
        "<strong>" +
        (item.compatibility || 0) +
        "%</strong>" +
        "<p>" +
        getCompatibilityHearts(item.compatibility || 0) +
        "</p>";

    historyItemContent.appendChild(scoreBox);

    const answersArray = Object.values(item.answers || {});

    answersArray.forEach((answerData) => {
        const box = document.createElement("div");
        box.classList.add("comparison-box");

        const title = document.createElement("h3");
        title.textContent =
            answerData.uid === currentUser.uid
                ? "Toi"
                : "Partenaire";

        const list = document.createElement("ol");

        (answerData.answer || []).forEach((rankedItem) => {
            const li = document.createElement("li");
            li.textContent = rankedItem;
            list.appendChild(li);
        });

        box.appendChild(title);
        box.appendChild(list);

        historyItemContent.appendChild(box);
    });
}

function renderSimpleHistoryItem(item) {
    const date = document.createElement("p");
    date.classList.add("history-date");
    date.textContent =
        formatHistoryDate(item.completedAt || item.createdAt);

    historyItemContent.appendChild(date);

    const answersArray =
        Object.values(item.answers || {});

    answersArray.forEach((answerData) => {
        const box = document.createElement("div");
        box.classList.add("comparison-box");

        const title = document.createElement("h3");
        title.textContent =
            answerData.uid === currentUser.uid
                ? "Toi"
                : "Partenaire";

        const answer = document.createElement("p");
        answer.textContent =
            answerData.answer || "Pas de réponse";

        box.appendChild(title);
        box.appendChild(answer);

        historyItemContent.appendChild(box);
    });

    if (currentHistoryMode === "guess" && item.predictions) {
        const predictionTitle = document.createElement("h3");
        predictionTitle.textContent = "Prédictions";
        historyItemContent.appendChild(predictionTitle);

        Object.values(item.predictions).forEach((predictionData) => {
            const box = document.createElement("div");
            box.classList.add("comparison-box");

            const title = document.createElement("h3");
            title.textContent =
                predictionData.uid === currentUser.uid
                    ? "Ta prédiction"
                    : "Prédiction partenaire";

            const prediction = document.createElement("p");
            prediction.textContent =
                predictionData.prediction || "Pas de prédiction";

            box.appendChild(title);
            box.appendChild(prediction);

            historyItemContent.appendChild(box);
        });
    }
}

function formatHistoryDate(timestamp) {
    if (!timestamp) {
        return "Date inconnue";
    }

    return new Date(timestamp).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}

const ACHIEVEMENTS = [
    { id: "firstAnswer", icon: "💬", title: "Premiers mots", description: "Donner une première réponse", metric: "answers", target: 1, unit: "réponse" },
    { id: "answers10", icon: "🌱", title: "Ça pousse", description: "Donner 10 réponses", metric: "answers", target: 10, unit: "réponses" },
    { id: "answers50", icon: "🌿", title: "Grande conversation", description: "Donner 50 réponses", metric: "answers", target: 50, unit: "réponses" },
    { id: "firstGame", icon: "🎮", title: "À deux, c’est mieux", description: "Terminer une première partie", metric: "games", target: 1, unit: "partie" },
    { id: "games10", icon: "🏅", title: "Duo régulier", description: "Terminer 10 parties", metric: "games", target: 10, unit: "parties" },
    { id: "games50", icon: "🏆", title: "Duo inséparable", description: "Terminer 50 parties", metric: "games", target: 50, unit: "parties" },
    { id: "level3", icon: "🌵", title: "Jeune pousse", description: "Atteindre le niveau 3", metric: "level", target: 3, unit: "niveau" },
    { id: "level10", icon: "💚", title: "Belle complicité", description: "Atteindre le niveau 10", metric: "level", target: 10, unit: "niveau" },
    { id: "level21", icon: "👑", title: "Cactus légendaire", description: "Atteindre le niveau 21", metric: "level", target: 21, unit: "niveau" },
    { id: "harmony80", icon: "💕", title: "Sur la même longueur d’onde", description: "Atteindre 80 % de compatibilité moyenne", metric: "compatibility", target: 80, unit: "%" },
    { id: "explorer", icon: "🧭", title: "Explorateurs", description: "Terminer une partie dans chaque mode", metric: "modes", target: 7, unit: "modes" },
    { id: "days30", icon: "📅", title: "Un mois de souvenirs", description: "Atteindre 30 jours ensemble", metric: "days", target: 30, unit: "jours" }
];

function getAchievementMetric(metric, stats, relationStats) {
    const values = {
        answers: Math.max(stats.answersCount || 0, relationStats.totalAnswers || 0),
        games: relationStats.totalGames || 0,
        level: stats.level || Math.floor((stats.xp || 0) / 100) + 1,
        compatibility: relationStats.averageCompatibility || 0,
        modes: relationStats.modes.filter((mode) => mode.completedCount > 0).length,
        days: relationStats.daysTogether || 0
    };

    return values[metric] || 0;
}

function openAchievements() {
    showScreen("achievements");
    achievementsLoadingState.style.display = "block";
    achievementsGrid.style.display = "none";

    database
        .ref("spaces/" + currentSpaceCode)
        .once("value")
        .then((snapshot) => {
            const spaceData = snapshot.val() || {};
            const stats = spaceData.stats || {};
            const relationStats = buildRelationStatistics(spaceData);
            const unlocked = { ...(stats.achievements || {}) };
            const newlyUnlocked = {};

            ACHIEVEMENTS.forEach((achievement) => {
                const current = getAchievementMetric(
                    achievement.metric,
                    stats,
                    relationStats
                );

                if (
                    !stats.creatorForceLockedAchievements &&
                    current >= achievement.target &&
                    !unlocked[achievement.id]
                ) {
                    const unlockData = {
                        unlockedAt: Date.now(),
                        unlockedBy: currentUser.uid
                    };
                    unlocked[achievement.id] = unlockData;
                    newlyUnlocked[achievement.id] = unlockData;
                }
            });

            const persistPromise = Object.keys(newlyUnlocked).length > 0
                ? database
                    .ref("spaces/" + currentSpaceCode + "/stats/achievements")
                    .update(newlyUnlocked)
                : Promise.resolve();

            return persistPromise.then(() => {
                currentSpaceData = spaceData;
                renderAchievements(stats, relationStats, unlocked);

                const newCount = Object.keys(newlyUnlocked).length;
                if (newCount > 0) {
                    showToast(
                        "🏆 " + newCount + " nouveau" +
                        (newCount > 1 ? "x succès débloqués" : " succès débloqué")
                    );
                }
            });
        })
        .catch((error) => {
            console.error("Impossible de charger les succès", error);
            achievementsLoadingState.textContent =
                "Impossible de charger vos succès pour le moment.";
        });
}

function renderAchievements(stats, relationStats, unlocked) {
    achievementsGrid.innerHTML = "";
    const unlockedCount = ACHIEVEMENTS.filter((achievement) => {
        return Boolean(unlocked[achievement.id]);
    }).length;

    achievementsUnlockedCount.textContent = unlockedCount;
    achievementsProgressBar.style.width =
        ((unlockedCount / ACHIEVEMENTS.length) * 100) + "%";

    ACHIEVEMENTS.forEach((achievement) => {
        const isUnlocked = Boolean(unlocked[achievement.id]);
        const current = getAchievementMetric(
            achievement.metric,
            stats,
            relationStats
        );
        const card = document.createElement("article");
        card.className = "achievement-card " +
            (isUnlocked ? "is-unlocked" : "is-locked");

        const icon = document.createElement("span");
        icon.className = "achievement-icon";
        icon.textContent = isUnlocked ? achievement.icon : "🔒";

        const title = document.createElement("strong");
        title.textContent = achievement.title;

        const description = document.createElement("p");
        description.textContent = achievement.description;

        const progress = document.createElement("small");
        progress.textContent = isUnlocked
            ? "Débloqué ✓"
            : Math.min(current, achievement.target) + " / " +
                achievement.target + " " + achievement.unit;

        card.append(icon, title, description, progress);
        achievementsGrid.appendChild(card);
    });

    achievementsLoadingState.style.display = "none";
    achievementsGrid.style.display = "grid";
}

function openRelationStats() {
    showScreen("stats");

    statsLoadingState.style.display = "block";
    statsLoadingState.textContent = "Calcul de vos souvenirs…";
    statsContent.style.display = "none";

    if (currentSpaceData) {
        renderRelationStats(buildRelationStatistics(currentSpaceData));
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode)
        .once("value")
        .then((snapshot) => {
            const spaceData = snapshot.val() || {};
            currentSpaceData = spaceData;
            renderRelationStats(buildRelationStatistics(spaceData));
        })
        .catch((error) => {
            console.error("Impossible de charger les statistiques", error);
            statsLoadingState.textContent =
                "Impossible de charger vos statistiques pour le moment.";
        });
}

function buildRelationStatistics(spaceData) {
    const modeResults = relationStatsModes.map((mode) => {
        const items = Object.values(spaceData[mode.path] || {});
        const completedItems = items.filter((item) => {
            return item.status === "completed";
        });

        const answersCount = items.reduce((total, item) => {
            return total + Object.keys(item.answers || {}).length;
        }, 0);

        const scores = completedItems
            .map((item) => getCompletedItemCompatibility(mode.key, item))
            .filter((score) => typeof score === "number");

        return {
            ...mode,
            completedCount: completedItems.length,
            answersCount,
            completedItems,
            scores
        };
    });

    const totalGames = modeResults.reduce((total, mode) => {
        return total + mode.completedCount;
    }, 0);

    const totalAnswers = modeResults.reduce((total, mode) => {
        return total + mode.answersCount;
    }, 0);

    const allScores = modeResults.flatMap((mode) => mode.scores);
    const averageCompatibility = allScores.length > 0
        ? Math.round(
            allScores.reduce((total, score) => total + score, 0) /
            allScores.length
        )
        : null;

    const bestScore = allScores.length > 0
        ? Math.max(...allScores)
        : null;

    const favoriteMode = modeResults.reduce((favorite, mode) => {
        if (!favorite || mode.completedCount > favorite.completedCount) {
            return mode;
        }

        return favorite;
    }, null);

    const completedDates = modeResults
        .flatMap((mode) => mode.completedItems)
        .map((item) => item.completedAt || item.createdAt)
        .filter((date) => typeof date === "number")
        .sort((dateA, dateB) => dateA - dateB);

    return {
        totalGames,
        totalAnswers,
        averageCompatibility,
        bestScore,
        scoredGamesCount: allScores.length,
        favoriteMode:
            favoriteMode && favoriteMode.completedCount > 0
                ? favoriteMode
                : null,
        firstMemoryDate: completedDates[0] || null,
        lastMemoryDate: completedDates[completedDates.length - 1] || null,
        daysTogether: getRelationshipDayCount(spaceData.story),
        modes: modeResults
    };
}

function getCompletedItemCompatibility(modeKey, item) {
    if (modeKey === "questions") {
        return null;
    }

    if (modeKey === "guess") {
        const validations = Object.values(item.validations || {});

        if (validations.length < 2) {
            return null;
        }

        const score = validations.reduce((total, validation) => {
            return total + getGuessValidationScore(validation.result);
        }, 0);

        return Math.round((score / validations.length) * 100);
    }

    if (modeKey === "likely") {
        return calculateLikelyCompatibility(item.answers);
    }

    return typeof item.compatibility === "number"
        ? Math.max(0, Math.min(item.compatibility, 100))
        : null;
}

function calculateLikelyCompatibility(answers) {
    const answerEntries = Object.entries(answers || {});

    if (answerEntries.length < 2) {
        return null;
    }

    const selectedTargets = answerEntries.map(([uid, answerData]) => {
        if (answerData.answer === "Nous deux") {
            return "both";
        }

        if (answerData.answer === "Moi") {
            return uid;
        }

        if (answerData.answer === "Toi") {
            const partnerEntry = answerEntries.find(([partnerUid]) => {
                return partnerUid !== uid;
            });

            return partnerEntry ? partnerEntry[0] : null;
        }

        return null;
    });

    if (selectedTargets.some((target) => !target)) {
        return null;
    }

    return selectedTargets[0] === selectedTargets[1] ? 100 : 0;
}

function getRelationshipDayCount(story) {
    const dateValue = story && (story.startDate || story.relationshipDate);

    if (!dateValue) {
        return null;
    }

    const startDate = new Date(dateValue);
    const today = new Date();

    if (Number.isNaN(startDate.getTime())) {
        return null;
    }

    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    return Math.max(
        0,
        Math.floor((today - startDate) / (1000 * 60 * 60 * 24))
    );
}

function renderRelationStats(relationStats) {
    statsLoadingState.style.display = "none";
    statsContent.style.display = "block";

    statsTotalGames.textContent = relationStats.totalGames;
    statsTotalAnswers.textContent = relationStats.totalAnswers;
    statsDaysTogether.textContent = relationStats.daysTogether === null
        ? "—"
        : relationStats.daysTogether;

    const compatibilityText = relationStats.averageCompatibility === null
        ? "—"
        : relationStats.averageCompatibility + "%";

    statsAverageCompatibility.textContent = compatibilityText;
    statsCompatibilityScore.textContent = compatibilityText;
    statsCompatibilityBar.style.width =
        (relationStats.averageCompatibility || 0) + "%";

    if (relationStats.averageCompatibility === null) {
        statsCompatibilityLabel.textContent =
            "Terminez un jeu comparable pour découvrir votre score.";
    } else {
        statsCompatibilityLabel.textContent =
            getCompatibilityLabel(relationStats.averageCompatibility) +
            " · " +
            relationStats.scoredGamesCount +
            " partie" +
            (relationStats.scoredGamesCount > 1 ? "s analysées" : " analysée");
    }

    statsFavoriteMode.textContent = relationStats.favoriteMode
        ? relationStats.favoriteMode.icon + " " + relationStats.favoriteMode.label
        : "À découvrir";

    statsBestScore.textContent = relationStats.bestScore === null
        ? "—"
        : relationStats.bestScore + "%";
    statsFirstMemory.textContent = formatStatsDate(relationStats.firstMemoryDate);
    statsLastMemory.textContent = formatStatsDate(relationStats.lastMemoryDate);

    if (relationStats.totalGames === 0) {
        statsHeroMessage.textContent = "Vos souvenirs commencent ici";
        statsHeroSubtitle.textContent =
            "Jouez ensemble pour faire pousser vos statistiques.";
    } else if (relationStats.averageCompatibility !== null) {
        statsHeroMessage.textContent =
            getCompatibilityLabel(relationStats.averageCompatibility);
        statsHeroSubtitle.textContent =
            relationStats.totalGames +
            " moment" +
            (relationStats.totalGames > 1 ? "s partagés" : " partagé") +
            " dans votre jardin.";
    } else {
        statsHeroMessage.textContent = "Votre histoire prend racine";
        statsHeroSubtitle.textContent =
            relationStats.totalGames +
            " souvenir" +
            (relationStats.totalGames > 1 ? "s créés" : " créé") +
            " ensemble.";
    }

    renderStatsModes(relationStats.modes);
    statsEmptyState.style.display =
        relationStats.totalGames === 0 ? "flex" : "none";

    updateDashboardRelationStats(relationStats);
}

function renderStatsModes(modes) {
    statsModesBreakdown.innerHTML = "";

    const maximumCount = Math.max(
        1,
        ...modes.map((mode) => mode.completedCount)
    );

    modes.forEach((mode) => {
        const row = document.createElement("article");
        row.classList.add("stats-mode-row");

        const icon = document.createElement("span");
        icon.classList.add("stats-mode-icon");
        icon.textContent = mode.icon;

        const content = document.createElement("div");
        content.classList.add("stats-mode-content");

        const heading = document.createElement("div");
        heading.classList.add("stats-mode-heading");

        const label = document.createElement("strong");
        label.textContent = mode.label;

        const count = document.createElement("small");
        count.textContent =
            mode.completedCount +
            " partie" +
            (mode.completedCount > 1 ? "s" : "");

        const track = document.createElement("div");
        track.classList.add("stats-mode-track");

        const progress = document.createElement("div");
        progress.style.width =
            ((mode.completedCount / maximumCount) * 100) + "%";
        progress.style.background = mode.color;

        heading.appendChild(label);
        heading.appendChild(count);
        track.appendChild(progress);
        content.appendChild(heading);
        content.appendChild(track);
        row.appendChild(icon);
        row.appendChild(content);
        statsModesBreakdown.appendChild(row);
    });
}

function formatStatsDate(timestamp) {
    if (!timestamp) {
        return "Aucun";
    }

    return new Date(timestamp).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}

function updateDashboardRelationStats(relationStats) {
    const compatibility = relationStats.averageCompatibility;

    if (compatibilityStat) {
        compatibilityStat.textContent = compatibility === null
            ? "—"
            : compatibility + "%";
    }

    if (compatibilityMiniBar) {
        compatibilityMiniBar.style.width = (compatibility || 0) + "%";
    }

    if (completedGamesStat) {
        completedGamesStat.textContent = relationStats.totalGames;
    }

    if (completedGamesMiniBar) {
        completedGamesMiniBar.style.width =
            Math.min((relationStats.totalGames / 25) * 100, 100) + "%";
    }
}

function getPartnerPseudo() {
    if (!currentSpaceData || !currentUser) {
        return "ton/ta partenaire";
    }

    if (
        currentSpaceData.player1 &&
        currentSpaceData.player1.uid !== currentUser.uid
    ) {
        return currentSpaceData.player1.pseudo || "ton/ta partenaire";
    }

    if (
        currentSpaceData.player2 &&
        currentSpaceData.player2.uid !== currentUser.uid
    ) {
        return currentSpaceData.player2.pseudo || "ton/ta partenaire";
    }

    return "ton/ta partenaire";
}

function calculateChoiceCompatibility(answerA, answerB) {
    if (!answerA || !answerB) {
        return 0;
    }

    if (answerA === answerB) {
        return 100;
    }

    return 0;
}

function getLikelyChosenTarget(answerData) {
    if (!answerData) {
        return null;
    }

    if (answerData.answer === "Nous deux") {
        return "both";
    }

    if (answerData.answer === "Moi") {
        return answerData.uid;
    }

    if (answerData.answer === "Toi") {
        const answersArray =
            Object.values(
                pendingLikelyResults[currentPendingLikelyIndex]?.answers || {}
            );

        const partnerAnswer =
            answersArray.find((answer) => {
                return answer.uid !== answerData.uid;
            });

        return partnerAnswer ? partnerAnswer.uid : "partner";
    }

    return null;
}

const CACTUS_EVOLUTIONS = [
    {
        minimumLevel: 21,
        name: "Cactus légendaire",
        image: "assets/cactus-stage-6.png",
        message: "Votre cactus est devenu légendaire ! 👑✨"
    },
    {
        minimumLevel: 15,
        name: "Cactus épanoui",
        image: "assets/cactus-stage-5.png",
        message: "Votre cactus est pleinement épanoui ! 🌸✨"
    },
    {
        minimumLevel: 10,
        name: "Cactus complice",
        image: "assets/cactus-stage-4.png",
        message: "Votre cactus respire la complicité ! 💚"
    },
    {
        minimumLevel: 6,
        name: "Cactus curieux",
        image: "assets/cactus-stage-3.png",
        message: "Votre cactus devient très curieux ! 🔎"
    },
    {
        minimumLevel: 3,
        name: "Jeune cactus",
        image: "assets/cactus-stage-2.png",
        message: "Votre jeune cactus grandit bien ! 🌿"
    },
    {
        minimumLevel: 1,
        name: "Bébé cactus",
        image: "assets/cactus-stage-1.png",
        message: "Votre bébé cactus découvre votre histoire ! 🌱"
    }
];

let lastRenderedCactusStage = null;

function updateCactusEvolution(level) {
    const safeLevel = Math.max(Number(level) || 1, 1);
    const evolution = CACTUS_EVOLUTIONS.find((stage) => {
        return safeLevel >= stage.minimumLevel;
    });

    if (mainCactusImage) {
        const shouldAnimate =
            lastRenderedCactusStage !== null &&
            lastRenderedCactusStage !== evolution.minimumLevel;

        mainCactusImage.src = evolution.image;
        mainCactusImage.alt = "Votre cactus, " + evolution.name;

        if (shouldAnimate) {
            mainCactusImage.classList.remove("is-evolving");
            void mainCactusImage.offsetWidth;
            mainCactusImage.classList.add("is-evolving");
        }

        lastRenderedCactusStage = evolution.minimumLevel;
    }

    if (dashboardCactusMessage) {
        const cactusName = currentSpaceData?.profile?.cactusName;
        dashboardCactusMessage.textContent = cactusName
            ? cactusName + " — " + evolution.message
            : evolution.message;
    }
}

function loadCoupleStats() {
    if (currentSpaceData) {
        updateDashboardRelationStats(
            buildRelationStatistics(currentSpaceData)
        );
    }

    database
        .ref("spaces/" + currentSpaceCode + "/stats")
        .once("value")
        .then((snapshot) => {
            const stats = snapshot.val() || {};

            const seeds = stats.seeds || 0;
            const level = stats.level || 1;
            const xp = stats.xp || 0;

            if (seedsStat) {
                seedsStat.textContent = seeds;
            }

            if (levelStat) {
                levelStat.textContent = level;
            }

            if (levelHeroStat) {
                levelHeroStat.textContent = level;
            }

            updateCactusEvolution(level);

            const xpPerLevel = 100;
            const xpInsideCurrentLevel = xp % xpPerLevel;
            const progressPercent =
                Math.min((xpInsideCurrentLevel / xpPerLevel) * 100, 100);

            if (currentXpHero) {
                currentXpHero.textContent = xpInsideCurrentLevel;
            }

            if (nextLevelXpHero) {
                nextLevelXpHero.textContent = xpPerLevel;
            }

            if (cactusXpProgressBar) {
                cactusXpProgressBar.style.width =
                    progressPercent + "%";
            }

            if (seedsMiniBar) {
                seedsMiniBar.style.width =
                    Math.min((seeds / 500) * 100, 100) + "%";
            }

            if (levelMiniBar) {
                levelMiniBar.style.width =
                    Math.min((level / 10) * 100, 100) + "%";
            }

            if (
                lastKnownSeeds !== null &&
                seeds > lastKnownSeeds
            ) {
                showToast(
                    "🌱 +" +
                    (seeds - lastKnownSeeds) +
                    " graines"
                );
            }

            lastKnownSeeds = seeds;
        });
}

function saveStoryData(data) {
    if (!currentSpaceCode) {
        return Promise.resolve();
    }

    return database
        .ref("spaces/" + currentSpaceCode + "/story")
        .update({
            ...data,
            updatedAt: Date.now(),
            updatedBy: currentUser.uid,
            updatedByPseudo: pseudo
        });
}

function updateRelationshipDays(story) {
    if (!relationshipDaysText) {
        return;
    }

    const dateValue = story && (story.startDate || story.relationshipDate);

    if (!dateValue) {
        relationshipDaysText.textContent = "❤️ Votre petit monde à deux";
        return;
    }

    const startDate = new Date(dateValue);
    const today = new Date();

    if (Number.isNaN(startDate.getTime())) {
        relationshipDaysText.textContent = "❤️ Votre petit monde à deux";
        return;
    }

    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
        relationshipDaysText.textContent =
            "❤️ Votre histoire commence aujourd’hui";
        return;
    }

    relationshipDaysText.textContent =
        "❤️ " + diffDays + " jours ensemble";
}

function getRelationshipDaysText(dateValue) {
    if (!dateValue) {
        return "Date à renseigner";
    }

    const startDate = new Date(dateValue);
    const today = new Date();

    if (Number.isNaN(startDate.getTime())) {
        return "Date à renseigner";
    }

    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffDays = Math.max(
        0,
        Math.floor((today - startDate) / (1000 * 60 * 60 * 24))
    );

    return diffDays + " jour" + (diffDays > 1 ? "s" : "");
}

function getCouplePlayers(spaceData) {
    const players = [spaceData.player1, spaceData.player2].filter(Boolean);
    return {
        me: players.find((player) => player.uid === currentUser.uid) || {
            uid: currentUser.uid,
            pseudo
        },
        partner: players.find((player) => player.uid !== currentUser.uid) || null
    };
}

function getSafeProfileColor(value) {
    return /^#[0-9a-f]{6}$/i.test(value || "") ? value : "#54d38b";
}

function applyCoupleProfile(spaceData) {
    if (!spaceData || !currentUser) {
        return;
    }

    const profile = spaceData.profile || {};
    const players = getCouplePlayers(spaceData);
    const accent = getSafeProfileColor(profile.accentColor);
    const myAvatar = profile.avatars?.[currentUser.uid] || "🌵";
    const partnerAvatar = players.partner
        ? (profile.avatars?.[players.partner.uid] || "💚")
        : "💚";
    const spaceName = profile.spaceName || "Notre coin Cactus";

    dashboardScreen.style.setProperty("--dashboard-accent", accent);
    coupleProfileScreen.style.setProperty("--profile-accent", accent);
    dashboardSpaceName.textContent = spaceName;
    dashboardProfileBtn.querySelector("span").textContent = myAvatar;
    profileMyAvatar.textContent = myAvatar;
    profilePartnerAvatar.textContent = partnerAvatar;
    profileSpaceNamePreview.textContent = spaceName;
    profileCoupleNames.textContent = (players.me.pseudo || pseudo || "Toi") +
        " & " + (players.partner?.pseudo || "Partenaire");
    profileMottoPreview.textContent = profile.motto || "Notre petit monde à deux.";

    const relationStats = buildRelationStatistics(spaceData);
    profileLevelSummary.textContent = spaceData.stats?.level || 1;
    profileCompatibilitySummary.textContent = relationStats.totalGames > 0
        ? relationStats.averageCompatibility + "%"
        : "—";
    profileMemoriesSummary.textContent = Object.keys(spaceData.memories || {}).length;
    profileGamesSummary.textContent = relationStats.totalGames || 0;
    updateCactusEvolution(spaceData.stats?.level || 1);
}

function openCoupleProfile() {
    const spaceData = currentSpaceData || {};
    const profile = spaceData.profile || {};

    applyCoupleProfile(spaceData);
    profileAvatarInput.value = profile.avatars?.[currentUser.uid] || "🌵";
    profileSpaceNameInput.value = profile.spaceName || "Notre coin Cactus";
    profileCactusNameInput.value = profile.cactusName || "Cactou";
    profileMottoInput.value = profile.motto || "Notre petit monde à deux.";
    profileAccentInput.value = getSafeProfileColor(profile.accentColor);
    profileAccentValue.textContent = profileAccentInput.value.toUpperCase();
    showScreen("coupleProfile");
}

function saveCoupleProfile() {
    const spaceName = profileSpaceNameInput.value.trim();
    const cactusName = profileCactusNameInput.value.trim();
    const motto = profileMottoInput.value.trim();

    if (!spaceName || !cactusName || !motto) {
        showToast("Complète les informations du profil");
        return;
    }

    saveCoupleProfileBtn.disabled = true;
    saveCoupleProfileBtn.textContent = "Enregistrement…";
    const updates = {
        spaceName,
        cactusName,
        motto,
        accentColor: getSafeProfileColor(profileAccentInput.value),
        updatedAt: Date.now(),
        updatedBy: currentUser.uid,
        updatedByPseudo: pseudo
    };
    updates["avatars/" + currentUser.uid] = profileAvatarInput.value.trim() || "🌵";

    database
        .ref("spaces/" + currentSpaceCode + "/profile")
        .update(updates)
        .then(() => {
            showToast("Profil du couple enregistré ✨");
        })
        .catch((error) => {
            console.error("Enregistrement du profil impossible", error);
            showToast("Impossible d’enregistrer le profil");
        })
        .finally(() => {
            saveCoupleProfileBtn.disabled = false;
            saveCoupleProfileBtn.textContent = "Enregistrer notre profil";
        });
}

function openStoryPage() {
    database
        .ref("spaces/" + currentSpaceCode + "/story")
        .once("value")
        .then((snapshot) => {
            const story = snapshot.val();

            if (!story) {
                showScreen("storyIntro");
                return;
            }

            const cards = [
                ["📅", "Ensemble depuis", getRelationshipDaysText(story.startDate || story.relationshipDate)],
                ["📍", "Rencontre", story.meetingPlace || "Non renseigné"],
                ["☕", "Premier rendez-vous", story.firstDate || "Non renseigné"],
                ["💬", "Vos surnoms", (story.nicknameMine || "—") + " / " + (story.nicknamePartner || "—")],
                ["🎵", "Votre chanson", story.song || "Non renseigné"],
                ["🏠", "Situation", (story.situation || story.relationshipType) === "distance" ? "À distance" : "Ensemble"]
            ];

            storyPageContent.replaceChildren(
                ...cards.map(([icon, label, value]) => {
                    const card = document.createElement("div");
                    card.className = "story-info-card";
                    const iconElement = document.createElement("span");
                    iconElement.textContent = icon;
                    const content = document.createElement("div");
                    const small = document.createElement("small");
                    small.textContent = label;
                    const strong = document.createElement("strong");
                    strong.textContent = value;
                    content.append(small, strong);
                    card.append(iconElement, content);
                    return card;
                })
            );

            showScreen("storyPage");
        });
}

function showDashboardLastActivity(text) {
    if (!text) {
        updateActivityBox();
        return;
    }

    renderDashboardActivity({
        kicker: "Dernière activité",
        icon: "🪴",
        title: text,
        subtitle: ""
    });
}

// ====================
// LANCEMENT
// ====================

function getFriendlyFirebaseError(error) {
    const code = String(error?.code || "").toLowerCase();

    if (code.includes("network") || code.includes("disconnected")) {
        return "La connexion est interrompue. Réessaie dans un instant 🌵";
    }
    if (code.includes("permission")) {
        return "Cet accès n’est plus autorisé. Reconnecte-toi puis réessaie.";
    }
    if (code.includes("too-many-requests")) {
        return "Trop de tentatives. Attends quelques minutes avant de réessayer.";
    }
    if (code.includes("invalid-email")) {
        return "Cette adresse e-mail n’est pas valide.";
    }
    if (code.includes("email-already-in-use")) {
        return "Un compte utilise déjà cette adresse e-mail.";
    }
    if (code.includes("weak-password")) {
        return "Choisis un mot de passe plus sécurisé.";
    }
    if (code.includes("wrong-password") || code.includes("invalid-credential")) {
        return "L’adresse e-mail ou le mot de passe est incorrect.";
    }

    return "Une erreur Firebase est survenue. Réessaie dans un instant.";
}

function startFirebaseConnectionMonitoring() {
    let disconnectTimer = null;
    let hasConnectedOnce = false;
    let bannerWasShown = false;

    database.ref(".info/connected").on("value", (snapshot) => {
        const connected = snapshot.val() === true;

        if (connected) {
            if (disconnectTimer) {
                window.clearTimeout(disconnectTimer);
                disconnectTimer = null;
            }
            connectionStatusBanner.hidden = true;

            if (hasConnectedOnce && bannerWasShown) {
                showToast("Connexion rétablie, synchronisation en cours ☁️");
            }

            hasConnectedOnce = true;
            bannerWasShown = false;
            return;
        }

        if (disconnectTimer) {
            return;
        }

        disconnectTimer = window.setTimeout(() => {
            connectionStatusBanner.hidden = false;
            bannerWasShown = true;
            disconnectTimer = null;
        }, 1200);
    });
}

function clearUnavailableSpace() {
    stopCurrentSpaceListeners();

    return database.ref("users/" + currentUser.uid).update({
        spaceCode: null,
        inviteCode: null
    }).then(() => {
        currentSpaceCode = "";
        currentInviteCode = "";
        currentSpaceData = null;
        localStorage.removeItem("currentSpaceCode");
        showScreen("couple");
        showToast("Cet espace n’est plus disponible");
    });
}

function restoreUserSpace(userData) {
    currentSpaceCode = userData.spaceCode;
    currentInviteCode = userData.inviteCode || userData.spaceCode;
    spaceCode.textContent = currentInviteCode;

    return database.ref("spaces/" + currentSpaceCode).once("value")
        .then((snapshot) => {
            const spaceData = snapshot.val();
            const isMember = spaceData && [spaceData.player1, spaceData.player2].some((player) => {
                return player?.uid === currentUser.uid;
            });

            if (!isMember) {
                return clearUnavailableSpace();
            }

            currentSpaceData = spaceData;
            listenToCurrentSpace(currentSpaceCode);
            showScreen("dashboard");
        })
        .catch((error) => {
            const code = String(error?.code || "").toLowerCase();

            if (code.includes("permission")) {
                return clearUnavailableSpace();
            }

            console.warn("Vérification de l’espace différée", error);
            listenToCurrentSpace(currentSpaceCode);
            showScreen("dashboard");
        });
}

auth.onAuthStateChanged((user) => {
    if (user) {
        currentUser = user;
        updateCreatorToolsVisibility();

        database.ref("users/" + currentUser.uid).once("value")
            .then((snapshot) => {
                const userData = snapshot.val();

                if (!userData) {
                    stopCurrentSpaceListeners();
                    showScreen("pseudo");
                    return;
                }

                pseudo = userData.pseudo || "";
                displayPseudo.textContent = pseudo;

                if (userData.spaceCode) {
                    return restoreUserSpace(userData);
                } else {
                    stopCurrentSpaceListeners();
                    showScreen("couple");
                }
            });
    } else {
        stopCurrentSpaceListeners();
        currentUser = null;
        updateCreatorToolsVisibility();
        showScreen("login");
    }
});

loadRankingsData();
loadGuessQuestionsData();
loadLikelyQuestionsData();

loadNotificationPreferences();
applyTheme(localStorage.getItem("theme") === "dark" ? "dark" : "light");
startFirebaseConnectionMonitoring();

if ("serviceWorker" in navigator) {
    const updateBanner = document.getElementById("appUpdateBanner");
    const installUpdateBtn = document.getElementById("installUpdateBtn");
    let waitingServiceWorker = null;
    let updateActivationRequested = false;

    const showUpdateBanner = (worker) => {
        waitingServiceWorker = worker;

        if (updateBanner) {
            updateBanner.hidden = false;
        }
    };

    navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (!updateActivationRequested) {
            return;
        }

        updateActivationRequested = false;
        sessionStorage.setItem("cactusUpdateInstalled", "true");
        window.location.reload();
    });

    navigator.serviceWorker.register("service-worker.js", {
        updateViaCache: "none"
    }).then((registration) => {
        if (registration.waiting && navigator.serviceWorker.controller) {
            showUpdateBanner(registration.waiting);
        }

        registration.addEventListener("updatefound", () => {
            const installingWorker = registration.installing;

            if (!installingWorker) {
                return;
            }

            installingWorker.addEventListener("statechange", () => {
                if (
                    installingWorker.state === "installed" &&
                    navigator.serviceWorker.controller
                ) {
                    showUpdateBanner(installingWorker);
                }
            });
        });

        const checkForUpdate = () => {
            registration.update().catch((error) => {
                console.warn("Vérification de mise à jour impossible", error);
            });
        };

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible") {
                checkForUpdate();
            }
        });

        window.setInterval(checkForUpdate, 60 * 60 * 1000);
    }).catch((error) => {
        console.warn("Service worker indisponible", error);
    });

    if (installUpdateBtn) {
        installUpdateBtn.addEventListener("click", () => {
            if (!waitingServiceWorker) {
                return;
            }

            updateActivationRequested = true;
            installUpdateBtn.disabled = true;
            installUpdateBtn.textContent = "Installation…";
            waitingServiceWorker.postMessage({ type: "SKIP_WAITING" });
        });
    }

    if (sessionStorage.getItem("cactusUpdateInstalled") === "true") {
        sessionStorage.removeItem("cactusUpdateInstalled");
        window.setTimeout(() => {
            showToast("Application mise à jour ✨");
        }, 500);
    }
}

function displayRankingChallenges(challenges) {
    const challengeArray = Object.values(challenges || {});

    pendingRankingChallenges = challengeArray.filter((challenge) => {
        if (!challenge.answers) return false;
        if (!challenge.rankingId) return false;

        const myAnswer =
            challenge.answers[currentUser.uid];

        const someoneElseAnswered =
            Object.keys(challenge.answers).some((uid) => {
                return uid !== currentUser.uid;
            });

        return (
            !myAnswer &&
            someoneElseAnswered &&
            challenge.status !== "completed"
        );
    });

    pendingRankingResults = challengeArray.filter((challenge) => {
        if (!challenge.answers) return false;
        if (!challenge.rankingId) return false;

        const myAnswer =
            challenge.answers[currentUser.uid];

        const someoneElseAnswered =
            Object.keys(challenge.answers).some((uid) => {
                return uid !== currentUser.uid;
            });

        const seenByMe =
            challenge.seenBy &&
            challenge.seenBy[currentUser.uid];

        return (
            challenge.status === "completed" &&
            myAnswer &&
            someoneElseAnswered &&
            !seenByMe
        );
    });

    updateActivityBox();
}

function listenToGuessChallenges() {
    subscribeToSpaceValue("guessAnswers", (snapshot) => {
            const challenges = snapshot.val() || {};

            Object.entries(challenges).forEach(([id, challenge]) => {
                const answers = challenge.answers || {};
                const answersCount = Object.keys(answers).length;

                if (
                    answersCount >= 2 &&
                    challenge.status === "answering"
                ) {
                    database
                        .ref(
                            "spaces/" +
                            currentSpaceCode +
                            "/guessAnswers/" +
                            id +
                            "/status"
                        )
                        .set("predicting");
                }

                const predictions = challenge.predictions || {};
const validations = challenge.validations || {};

if (
    Object.keys(predictions).length >= 2 &&
    Object.keys(validations).length >= 2 &&
    challenge.status !== "completed"
) {
    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/guessAnswers/" +
            id
        )
        .update({
            status: "completed",
            completedAt: Date.now()
        })
        .then(() => {
            return awardCompletedGameBonus("guess", id);
        });
}

            });

            displayGuessChallenges(challenges);
    });
}
