// ====================
// VARIABLES
// ====================

const loginScreen = document.getElementById("loginScreen");
const pseudoScreen = document.getElementById("pseudoScreen");
const coupleScreen = document.getElementById("coupleScreen");
const onboardingScreen = document.getElementById("onboardingScreen");
const skipOnboardingBtn = document.getElementById("skipOnboardingBtn");
const onboardingVisual = document.getElementById("onboardingVisual");
const onboardingEyebrow = document.getElementById("onboardingEyebrow");
const onboardingTitle = document.getElementById("onboardingTitle");
const onboardingText = document.getElementById("onboardingText");
const onboardingTip = document.getElementById("onboardingTip");
const onboardingProgress = document.getElementById("onboardingProgress");
const previousOnboardingBtn = document.getElementById("previousOnboardingBtn");
const nextOnboardingBtn = document.getElementById("nextOnboardingBtn");
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
const retryConnectionBtn = document.getElementById("retryConnectionBtn");
const appStateOverlay = document.getElementById("appStateOverlay");
const appStateVisual = document.getElementById("appStateVisual");
const appStateEyebrow = document.getElementById("appStateEyebrow");
const appStateTitle = document.getElementById("appStateTitle");
const appStateMessage = document.getElementById("appStateMessage");
const appStateRetryBtn = document.getElementById("appStateRetryBtn");
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
const creatorOpenReportsBtn = document.getElementById("creatorOpenReportsBtn");
const creatorReportsCount = document.getElementById("creatorReportsCount");
const questionReportModal = document.getElementById("questionReportModal");
const questionReportForm = document.getElementById("questionReportForm");
const closeQuestionReportBtn = document.getElementById("closeQuestionReportBtn");
const reportedQuestionPreview = document.getElementById("reportedQuestionPreview");
const questionReportReason = document.getElementById("questionReportReason");
const questionReportComment = document.getElementById("questionReportComment");
const submitQuestionReportBtn = document.getElementById("submitQuestionReportBtn");
const creatorReportsModal = document.getElementById("creatorReportsModal");
const closeCreatorReportsBtn = document.getElementById("closeCreatorReportsBtn");
const creatorReportsGameFilter = document.getElementById("creatorReportsGameFilter");
const creatorReportsReasonFilter = document.getElementById("creatorReportsReasonFilter");
const creatorReportsStatusFilter = document.getElementById("creatorReportsStatusFilter");
const creatorReportsList = document.getElementById("creatorReportsList");
const creatorReportsEmpty = document.getElementById("creatorReportsEmpty");
const creatorOpenContentBtn = document.getElementById("creatorOpenContentBtn");
const creatorContentModal = document.getElementById("creatorContentModal");
const closeCreatorContentBtn = document.getElementById("closeCreatorContentBtn");
const creatorContentGameFilter = document.getElementById("creatorContentGameFilter");
const creatorContentSearch = document.getElementById("creatorContentSearch");
const creatorNewContentBtn = document.getElementById("creatorNewContentBtn");
const creatorContentList = document.getElementById("creatorContentList");
const creatorContentForm = document.getElementById("creatorContentForm");
const closeCreatorContentFormBtn = document.getElementById("closeCreatorContentFormBtn");
const creatorContentFormMode = document.getElementById("creatorContentFormMode");
const creatorContentFormTitle = document.getElementById("creatorContentFormTitle");
const creatorContentId = document.getElementById("creatorContentId");
const creatorContentText = document.getElementById("creatorContentText");
const creatorRankingItemsBox = document.getElementById("creatorRankingItemsBox");
const creatorRankingItems = document.getElementById("creatorRankingItems");
const creatorContentEnabled = document.getElementById("creatorContentEnabled");
const saveCreatorContentBtn = document.getElementById("saveCreatorContentBtn");
const restoreCreatorContentBtn = document.getElementById("restoreCreatorContentBtn");
document.body.append(questionReportModal, creatorReportsModal, creatorContentModal);
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
const unifiedTimeline = document.getElementById("unifiedTimeline");
const unifiedTimelineCount = document.getElementById("unifiedTimelineCount");
const historyPersonalCount = document.getElementById("historyPersonalCount");
const historyFavoritesCount = document.getElementById("historyFavoritesCount");
const historyTotalCount = document.getElementById("historyTotalCount");
const unifiedTimelineEmpty = document.getElementById("unifiedTimelineEmpty");
const timelineSearchInput = document.getElementById("timelineSearchInput");
const timelineYearFilter = document.getElementById("timelineYearFilter");
const timelineTypeButtons = document.querySelectorAll("[data-timeline-type]");
const resetTimelineFiltersBtn = document.getElementById("resetTimelineFiltersBtn");

const gardenScreen = document.getElementById("gardenScreen");
const gardenBtn = document.getElementById("gardenBtn");
const backFromGardenBtn = document.getElementById("backFromGardenBtn");
const gardenDailyShortcutBtn = document.getElementById("gardenDailyShortcutBtn");
const dailyToolsScreen = document.getElementById("dailyToolsScreen");
const backFromDailyToolsBtn = document.getElementById("backFromDailyToolsBtn");
const openShoppingListBtn = document.getElementById("openShoppingListBtn");
const shoppingListScreen = document.getElementById("shoppingListScreen");
const backFromShoppingBtn = document.getElementById("backFromShoppingBtn");
const shoppingRemainingCount = document.getElementById("shoppingRemainingCount");
const shoppingSummaryTitle = document.getElementById("shoppingSummaryTitle");
const shoppingSummaryText = document.getElementById("shoppingSummaryText");
const shoppingItemForm = document.getElementById("shoppingItemForm");
const shoppingFormKicker = document.getElementById("shoppingFormKicker");
const shoppingFormTitle = document.getElementById("shoppingFormTitle");
const shoppingItemName = document.getElementById("shoppingItemName");
const shoppingItemQuantity = document.getElementById("shoppingItemQuantity");
const shoppingItemCategory = document.getElementById("shoppingItemCategory");
const saveShoppingItemBtn = document.getElementById("saveShoppingItemBtn");
const cancelShoppingEditBtn = document.getElementById("cancelShoppingEditBtn");
const shoppingFilterButtons = document.querySelectorAll("[data-shopping-filter]");
const shoppingPendingFilterCount = document.getElementById("shoppingPendingFilterCount");
const shoppingCompletedFilterCount = document.getElementById("shoppingCompletedFilterCount");
const shoppingItemsList = document.getElementById("shoppingItemsList");
const shoppingEmptyState = document.getElementById("shoppingEmptyState");
const clearCompletedShoppingBtn = document.getElementById("clearCompletedShoppingBtn");
const openTasksBtn = document.getElementById("openTasksBtn");
const openRemindersBtn = document.getElementById("openRemindersBtn");
const openImportantDatesBtn = document.getElementById("openImportantDatesBtn");
const tasksScreen = document.getElementById("tasksScreen");
const remindersScreen = document.getElementById("remindersScreen");
const importantDatesScreen = document.getElementById("importantDatesScreen");
const backFromTasksBtn = document.getElementById("backFromTasksBtn");
const backFromRemindersBtn = document.getElementById("backFromRemindersBtn");
const backFromImportantDatesBtn = document.getElementById("backFromImportantDatesBtn");
const taskForm = document.getElementById("taskForm");
const taskFormKicker = document.getElementById("taskFormKicker");
const taskFormTitle = document.getElementById("taskFormTitle");
const taskTitleInput = document.getElementById("taskTitleInput");
const taskDetailsInput = document.getElementById("taskDetailsInput");
const taskAssigneeInput = document.getElementById("taskAssigneeInput");
const taskPriorityInput = document.getElementById("taskPriorityInput");
const taskDueDateInput = document.getElementById("taskDueDateInput");
const saveTaskBtn = document.getElementById("saveTaskBtn");
const cancelTaskEditBtn = document.getElementById("cancelTaskEditBtn");
const tasksPendingCount = document.getElementById("tasksPendingCount");
const tasksList = document.getElementById("tasksList");
const tasksEmptyState = document.getElementById("tasksEmptyState");
const taskFilterButtons = document.querySelectorAll("[data-task-filter]");
const reminderForm = document.getElementById("reminderForm");
const reminderFormKicker = document.getElementById("reminderFormKicker");
const reminderFormTitle = document.getElementById("reminderFormTitle");
const reminderTitleInput = document.getElementById("reminderTitleInput");
const reminderDetailsInput = document.getElementById("reminderDetailsInput");
const reminderDateInput = document.getElementById("reminderDateInput");
const reminderTimeInput = document.getElementById("reminderTimeInput");
const reminderTargetInput = document.getElementById("reminderTargetInput");
const saveReminderBtn = document.getElementById("saveReminderBtn");
const cancelReminderEditBtn = document.getElementById("cancelReminderEditBtn");
const remindersUpcomingCount = document.getElementById("remindersUpcomingCount");
const remindersList = document.getElementById("remindersList");
const remindersEmptyState = document.getElementById("remindersEmptyState");
const reminderFilterButtons = document.querySelectorAll("[data-reminder-filter]");
const importantDateForm = document.getElementById("importantDateForm");
const importantDateFormKicker = document.getElementById("importantDateFormKicker");
const importantDateFormTitle = document.getElementById("importantDateFormTitle");
const importantDateTitleInput = document.getElementById("importantDateTitleInput");
const importantDateNotesInput = document.getElementById("importantDateNotesInput");
const importantDateValueInput = document.getElementById("importantDateValueInput");
const importantDateCategoryInput = document.getElementById("importantDateCategoryInput");
const importantDateAnnualInput = document.getElementById("importantDateAnnualInput");
const saveImportantDateBtn = document.getElementById("saveImportantDateBtn");
const cancelImportantDateEditBtn = document.getElementById("cancelImportantDateEditBtn");
const importantDatesCount = document.getElementById("importantDatesCount");
const importantDatesList = document.getElementById("importantDatesList");
const importantDatesEmptyState = document.getElementById("importantDatesEmptyState");
const importantDateFilterButtons = document.querySelectorAll("[data-important-date-filter]");

const showCreateNotebookBtn = document.getElementById("showCreateNotebookBtn");
const createNotebookBox = document.getElementById("createNotebookBox");
const notebookEmoji = document.getElementById("notebookEmoji");
const notebookTitle = document.getElementById("notebookTitle");
const notebookColor = document.getElementById("notebookColor");
const notebookColorButton = document.getElementById("notebookColorButton");
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
const notebookSaveStatus = document.getElementById("notebookSaveStatus");
const notebookWordCount = document.getElementById("notebookWordCount");
const backToGardenBtn = document.getElementById("backToGardenBtn");
const renameNotebookBtn = document.getElementById("renameNotebookBtn");
const deleteNotebookBtn = document.getElementById("deleteNotebookBtn");
const editNotebookModal = document.getElementById("editNotebookModal");
const editNotebookEmoji = document.getElementById("editNotebookEmoji");
const editNotebookTitle = document.getElementById("editNotebookTitle");
const editNotebookColor = document.getElementById("editNotebookColor");
const editNotebookColorButton = document.getElementById("editNotebookColorButton");
const closeEditNotebookBtn = document.getElementById("closeEditNotebookBtn");
const cancelEditNotebookBtn = document.getElementById("cancelEditNotebookBtn");
const saveEditNotebookBtn = document.getElementById("saveEditNotebookBtn");

const notebookEditor = document.getElementById("notebookEditor");
const insertCheckboxLineBtn = document.getElementById("insertCheckboxLineBtn");

const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const underlineBtn = document.getElementById("underlineBtn");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");
const bulletListBtn = document.getElementById("bulletListBtn");
const numberListBtn = document.getElementById("numberListBtn");
const alignLeftBtn = document.getElementById("alignLeftBtn");
const alignCenterBtn = document.getElementById("alignCenterBtn");
const alignRightBtn = document.getElementById("alignRightBtn");
const textColorPicker = document.getElementById("textColorPicker");
const highlightColorPicker = document.getElementById("highlightColorPicker");
const textColorButton = document.getElementById("textColorButton");
const highlightColorButton = document.getElementById("highlightColorButton");
const notebookColorModal = document.getElementById("notebookColorModal");
const notebookColorModalTitle = document.getElementById("notebookColorModalTitle");
const notebookColorPreview = document.getElementById("notebookColorPreview");
const notebookColorField = document.getElementById("notebookColorField");
const notebookColorCursor = document.getElementById("notebookColorCursor");
const notebookHueInput = document.getElementById("notebookHueInput");
const notebookHexInput = document.getElementById("notebookHexInput");
const notebookColorPresets = document.querySelectorAll("[data-notebook-color]");
const closeNotebookColorBtn = document.getElementById("closeNotebookColorBtn");
const cancelNotebookColorBtn = document.getElementById("cancelNotebookColorBtn");
const applyNotebookColorBtn = document.getElementById("applyNotebookColorBtn");

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
const storyPageBackTopBtn = document.getElementById("storyPageBackTopBtn");
const storyPageHeroTitle = document.getElementById("storyPageHeroTitle");
const storyPageHeroText = document.getElementById("storyPageHeroText");

const editStoryBtn = document.getElementById("editStoryBtn");
const backFromStoryPageBtn = document.getElementById("backFromStoryPageBtn");
const storyMemoriesBtn = document.getElementById("storyMemoriesBtn");

const allGamesScreen = document.getElementById("allGamesScreen");

const openAllGamesBtn = document.getElementById("openAllGamesBtn");
const backFromAllGamesBtn = document.getElementById("backFromAllGamesBtn");

const allRankingBtn = document.getElementById("allRankingBtn");
const allGuessBtn = document.getElementById("allGuessBtn");
const allQuestionsBtn = document.getElementById("allQuestionsBtn");
const gameInbox = document.getElementById("gameInbox");
const gameInboxCount = document.getElementById("gameInboxCount");
const gameInboxList = document.getElementById("gameInboxList");
const allGamesGrid = document.getElementById("allGamesGrid");
const gamesSearchInput = document.getElementById("gamesSearchInput");
const clearGamesSearchBtn = document.getElementById("clearGamesSearchBtn");
const gameCategoryButtons = document.querySelectorAll("[data-game-category]");
const visibleGamesCount = document.getElementById("visibleGamesCount");
const gamesSearchEmptyState = document.getElementById("gamesSearchEmptyState");
const resetGamesFiltersBtn = document.getElementById("resetGamesFiltersBtn");
const recommendedGameTitle = document.getElementById("recommendedGameTitle");
const recommendedGameCopy = document.getElementById("recommendedGameCopy");
const recommendedGameBtn = document.getElementById("recommendedGameBtn");
const gameDetailsModal = document.getElementById("gameDetailsModal");
const closeGameDetailsBtn = document.getElementById("closeGameDetailsBtn");
const gameDetailsImage = document.getElementById("gameDetailsImage");
const gameDetailsCategory = document.getElementById("gameDetailsCategory");
const gameDetailsTitle = document.getElementById("gameDetailsTitle");
const gameDetailsDescription = document.getElementById("gameDetailsDescription");
const startGameFromDetailsBtn = document.getElementById("startGameFromDetailsBtn");

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
const profileAvatarButtons = document.querySelectorAll("[data-profile-avatar]");
const profileSpaceNameInput = document.getElementById("profileSpaceNameInput");
const profileCactusNameInput = document.getElementById("profileCactusNameInput");
const profileMottoInput = document.getElementById("profileMottoInput");
const profileAccentInput = document.getElementById("profileAccentInput");
const profileAccentValue = document.getElementById("profileAccentValue");
const profileAccentPreview = document.getElementById("profileAccentPreview");
const profileAccentHexInput = document.getElementById("profileAccentHexInput");
const profileColorButtons = document.querySelectorAll("[data-profile-color]");
const profileColorField = document.getElementById("profileColorField");
const profileColorCursor = document.getElementById("profileColorCursor");
const profileHueInput = document.getElementById("profileHueInput");
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
const clearReadNotificationsBtn = document.getElementById("clearReadNotificationsBtn");
const notificationsUnreadCount = document.getElementById("notificationsUnreadCount");
const notificationsUnreadFilterCount = document.getElementById("notificationsUnreadFilterCount");
const notificationFilterButtons = document.querySelectorAll("[data-notification-filter]");
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

const levelHeroStat =
    document.getElementById("levelHeroStat");

const mainCactusImage =
    document.getElementById("mainCactusImage");

const dashboardCactusMessage =
    document.getElementById("dashboardCactusMessage");
const dashboardCactusCharacter = document.querySelector(".dashboard-cactus-character");
const cactusWaveArm = document.getElementById("cactusWaveArm");
const cactusHeadAccessory = document.getElementById("cactusHeadAccessory");
const cactusFaceAccessory = document.getElementById("cactusFaceAccessory");
const cactusNeckAccessory = document.getElementById("cactusNeckAccessory");
const openCactusWardrobeBtn = document.getElementById("openCactusWardrobeBtn");
const cactusWardrobeModal = document.getElementById("cactusWardrobeModal");
const closeCactusWardrobeBtn = document.getElementById("closeCactusWardrobeBtn");
const cactusWardrobeSeeds = document.getElementById("cactusWardrobeSeeds");
const cactusWardrobeGrid = document.getElementById("cactusWardrobeGrid");
const removeCactusAccessoriesBtn = document.getElementById("removeCactusAccessoriesBtn");

let cactusGreetingTimer = null;

function makeDashboardCactusWave() {
    if (!mainCactusImage || !dashboardCactusMessage) {
        return;
    }

    const cactusName = currentSpaceData?.profile?.cactusName || "Cactou";
    const greetings = [
        "Coucou ! Je suis content de te voir 💚",
        "Oh, une petite visite ! 🌵",
        "Je vous envoie plein de bonnes ondes ✨",
        "Coucou de la part de " + cactusName + " !"
    ];
    if (mainCactusImage.dataset.rigged !== "true") {
        showToast("Le coucou animé arrive bientôt pour cette évolution");
        return;
    }

    const previousMessage = dashboardCactusMessage.textContent;
    window.clearTimeout(cactusGreetingTimer);
    mainCactusImage.classList.remove("is-evolving");
    dashboardCactusCharacter.classList.remove("is-waving");
    void dashboardCactusCharacter.offsetWidth;
    dashboardCactusCharacter.classList.add("is-waving");
    dashboardCactusMessage.textContent = greetings[Math.floor(Math.random() * greetings.length)];

    cactusGreetingTimer = window.setTimeout(() => {
        dashboardCactusCharacter.classList.remove("is-waving");
        dashboardCactusMessage.textContent = previousMessage;
    }, 1650);
}

mainCactusImage?.addEventListener("click", makeDashboardCactusWave);
mainCactusImage?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        makeDashboardCactusWave();
    }
});

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
let activeShoppingFilter = "pending";
let currentShoppingItems = {};
let editingShoppingItemId = null;
let isSavingShoppingItem = false;
let activeTaskFilter = "pending";
let activeReminderFilter = "upcoming";
let activeImportantDateFilter = "upcoming";
let currentTasks = {};
let currentReminders = {};
let currentImportantDates = {};
let editingTaskId = null;
let editingReminderId = null;
let editingImportantDateId = null;

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
let activeNotificationFilter = "all";
let appStateRetryAction = null;
let activeGameCategory = "all";
let selectedGameKey = null;
let recommendedGameKey = "questions";
let launchingGameFromDetails = false;
let pendingQuestionReport = null;
let creatorQuestionReports = [];
let creatorManagedContent = [];
let creatorEditingContent = null;
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
let unifiedTimelineItems = [];
let activeTimelineType = "all";
let currentOnboardingStep = 0;

const ONBOARDING_STEPS = [
    {
        visual: "🌵💚",
        eyebrow: "Bienvenue dans Cactus",
        title: "Votre petit monde à deux",
        text: "Jouez, discutez et gardez vos plus jolis souvenirs dans un espace rien qu’à vous.",
        tip: "Vos contenus sont partagés uniquement avec votre partenaire."
    },
    {
        visual: "🔐🤝",
        eyebrow: "Un espace privé",
        title: "Invitez votre partenaire",
        text: "Créez un espace puis partagez son code sécurisé de 8 caractères. Votre partenaire choisira « Rejoindre ».",
        tip: "Le code expire après 7 jours et ne peut accueillir qu’une seule autre personne."
    },
    {
        visual: "✨🌵🎨",
        eyebrow: "À votre image",
        title: "Personnalisez votre coin",
        text: "Choisissez vos avatars emoji, le nom du cactus, votre couleur et racontez les débuts de votre histoire.",
        tip: "Vous pourrez tout modifier plus tard depuis le profil et les réglages."
    },
    {
        visual: "🎮💬🎉",
        eyebrow: "Prêts à pousser",
        title: "Lancez votre premier jeu",
        text: "Une personne répond, l’autre reçoit « À toi de jouer », puis votre résultat commun apparaît.",
        tip: "Commencez par Questions ou Qui est le plus susceptible : ils sont très simples à découvrir."
    }
];

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
        renderCactusWardrobe(spaceData);

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

        if (lastShownScreen === "shopping") {
            renderShoppingList(spaceData.dailyTools?.shopping?.items || {});
        }
        if (lastShownScreen === "tasks") renderTasks(spaceData.dailyTools?.tasks || {});
        if (lastShownScreen === "reminders") renderReminders(spaceData.dailyTools?.reminders || {});
        if (lastShownScreen === "importantDates") renderImportantDates(spaceData.dailyTools?.importantDates || {});

        if (lastShownScreen === "history") {
            renderMemories(spaceData.memories || {});
            buildUnifiedTimeline(spaceData);
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



async function applyCreatorContent(mode, baseItems) {
    let snapshot;
    try {
        snapshot = await database.ref("questionContent/" + mode).once("value");
    } catch (error) {
        console.warn("Personnalisations indisponibles pour " + mode, error);
        return baseItems || [];
    }
    const overrides = snapshot.val() || {};
    const merged = (baseItems || []).map((item) => {
        const override = overrides[item.id];
        if (!override) return { ...item };
        const copy = { ...item };
        if (override.text) {
            if (mode === "ranking") copy.title = override.text;
            else copy.question = override.text;
        }
        if (mode === "ranking" && Array.isArray(override.items) && override.items.length >= 2) copy.items = override.items;
        copy.creatorDisabled = override.disabled === true;
        copy.creatorEdited = true;
        return copy;
    }).filter((item) => !item.creatorDisabled);

    Object.entries(overrides).forEach(([id, override]) => {
        if (!override.custom || override.disabled || merged.some((item) => item.id === id)) return;
        if (mode === "ranking") {
            if (Array.isArray(override.items) && override.items.length >= 2) merged.push({ id, title: override.text, items: override.items, category: override.category || "creator", creatorEdited: true });
        } else {
            merged.push({ id, question: override.text, category: override.category || "creator", creatorEdited: true });
        }
    });
    return merged;
}

async function loadRankingsData() {
    const response = await fetch("data/rankings.json");
    const data = await response.json();

    if (Array.isArray(data)) {
        rankings = data;
    } else {
        rankings = data.rankings || [];
    }
    rankings = await applyCreatorContent("ranking", rankings);

    console.log("Classements chargés :", rankings);
}

async function loadLikelyQuestionsData() {
    const response =
        await fetch("data/likely.json");

    likelyQuestions = await applyCreatorContent("likely", await response.json());

    console.log(
        "Questions Likely chargées :",
        likelyQuestions
    );
}

async function loadOkQuestionsData() {
    const response = await fetch("data/ok-ou-pas-ok.json");
    okQuestions = await applyCreatorContent("ok", await response.json());

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
        createdAt: Date.now(),
        onboardingCompleted: false
    })
    .then(() => {
        console.log("Pseudo sauvegardé !");
        openOnboarding(0);
    })
    .catch((error) => {
        console.error(error);
        alert(error.message);
    });
});

function renderOnboardingStep() {
    const step = ONBOARDING_STEPS[currentOnboardingStep];
    onboardingVisual.textContent = step.visual;
    onboardingEyebrow.textContent = step.eyebrow;
    onboardingTitle.textContent = step.title;
    onboardingText.textContent = step.text;
    onboardingTip.textContent = step.tip;
    previousOnboardingBtn.style.visibility = currentOnboardingStep === 0
        ? "hidden"
        : "visible";
    nextOnboardingBtn.textContent = currentOnboardingStep === ONBOARDING_STEPS.length - 1
        ? "Créer ou rejoindre notre espace"
        : "Continuer";
    onboardingProgress.replaceChildren(
        ...ONBOARDING_STEPS.map((_, index) => {
            const dot = document.createElement("span");
            dot.className = index === currentOnboardingStep ? "is-active" : "";
            dot.setAttribute("aria-label", "Étape " + (index + 1));
            return dot;
        })
    );
}

function openOnboarding(step = 0) {
    currentOnboardingStep = Math.max(
        0,
        Math.min(step, ONBOARDING_STEPS.length - 1)
    );
    renderOnboardingStep();
    showScreen("onboarding");
}

function completeOnboarding() {
    if (!currentUser) {
        showScreen("login");
        return;
    }

    skipOnboardingBtn.disabled = true;
    nextOnboardingBtn.disabled = true;

    database.ref("users/" + currentUser.uid + "/onboardingCompleted")
        .set(true)
        .then(() => {
            showScreen("couple");
        })
        .catch((error) => {
            console.error("Finalisation de l’onboarding impossible", error);
            showToast("Impossible d’enregistrer le tutoriel");
        })
        .finally(() => {
            skipOnboardingBtn.disabled = false;
            nextOnboardingBtn.disabled = false;
        });
}

previousOnboardingBtn.addEventListener("click", () => {
    if (currentOnboardingStep > 0) {
        currentOnboardingStep--;
        renderOnboardingStep();
    }
});

nextOnboardingBtn.addEventListener("click", () => {
    if (currentOnboardingStep < ONBOARDING_STEPS.length - 1) {
        currentOnboardingStep++;
        renderOnboardingStep();
        return;
    }

    completeOnboarding();
});

skipOnboardingBtn.addEventListener("click", () => {
    completeOnboarding();
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
    startGuessGame();
});

function startGuessGame() {
    if (guessQuestions.length === 0) {
        alert("Les questions chargent encore 🌵");
        return;
    }

    currentGuessQuestion =
        selectFreshGameItem(guessQuestions, "guess", currentGuessQuestion?.id, "guessAnswers");

    guessQuestionText.textContent =
        currentGuessQuestion.question;

    guessAnswerInput.value = "";

    guessAnswerTitle.textContent = "Écris ta réponse";

    setGameSkipAvailability("guess", true, guessQuestions);

    showScreen("guessAnswer");
}

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
        themeSettingIcon.replaceChildren(
            createCactusUiIcon("cactusIconTheme", "cactus-secondary-icon")
        );
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

timelineSearchInput.addEventListener("input", renderUnifiedTimeline);
timelineYearFilter.addEventListener("change", renderUnifiedTimeline);
timelineTypeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeTimelineType = button.dataset.timelineType;
        timelineTypeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        renderUnifiedTimeline();
    });
});
resetTimelineFiltersBtn.addEventListener("click", () => {
    timelineSearchInput.value = "";
    timelineYearFilter.value = "all";
    activeTimelineType = "all";
    timelineTypeButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.timelineType === "all"));
    renderUnifiedTimeline();
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

gardenDailyShortcutBtn.addEventListener("click", () => {
    showScreen("dailyTools");
});

backFromDailyToolsBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

const SHOPPING_CATEGORIES = {
    food: { label: "Alimentation", className: "is-food" },
    drinks: { label: "Boissons", className: "is-drinks" },
    home: { label: "Maison", className: "is-home" },
    party: { label: "Fête", className: "is-party" },
    gifts: { label: "Cadeaux", className: "is-gifts" },
    other: { label: "Autre", className: "is-other" }
};

function resetShoppingForm() {
    editingShoppingItemId = null;
    shoppingItemForm.reset();
    shoppingItemCategory.value = "food";
    shoppingFormKicker.textContent = "Nouvel article";
    shoppingFormTitle.textContent = "Que faut-il acheter ?";
    saveShoppingItemBtn.textContent = "Ajouter à la liste";
    cancelShoppingEditBtn.style.display = "none";
}

function startShoppingItemEdit(itemId) {
    const item = currentShoppingItems[itemId];
    if (!item) return;

    editingShoppingItemId = itemId;
    shoppingItemName.value = item.name || "";
    shoppingItemQuantity.value = item.quantity || "";
    shoppingItemCategory.value = SHOPPING_CATEGORIES[item.category] ? item.category : "other";
    shoppingFormKicker.textContent = "Modification";
    shoppingFormTitle.textContent = "Modifier cet article";
    saveShoppingItemBtn.textContent = "Enregistrer les changements";
    cancelShoppingEditBtn.style.display = "block";
    shoppingItemForm.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => shoppingItemName.focus(), 250);
}

function getShoppingItemMeta(item) {
    if (item.completed) {
        return "Coché par " + (item.completedByPseudo || "votre partenaire");
    }
    return "Ajouté par " + (item.createdByPseudo || "Cactus");
}

function renderShoppingList(items) {
    currentShoppingItems = items || {};
    const entries = Object.entries(currentShoppingItems);
    const pendingCount = entries.filter(([, item]) => !item.completed).length;
    const completedCount = entries.length - pendingCount;

    shoppingRemainingCount.textContent = pendingCount + " à acheter";
    shoppingPendingFilterCount.textContent = pendingCount;
    shoppingCompletedFilterCount.textContent = completedCount;
    shoppingSummaryTitle.textContent = pendingCount
        ? pendingCount + " article" + (pendingCount > 1 ? "s" : "") + " à acheter"
        : entries.length ? "Tout est dans le panier" : "Votre panier est prêt";
    shoppingSummaryText.textContent = pendingCount
        ? "Votre liste est synchronisée sur vos deux comptes."
        : entries.length ? "Vous avez terminé cette liste de courses." : "Ajoutez votre premier article.";
    clearCompletedShoppingBtn.style.display = completedCount ? "block" : "none";

    const visibleEntries = entries
        .filter(([, item]) => activeShoppingFilter === "all" ||
            (activeShoppingFilter === "completed" ? item.completed : !item.completed))
        .sort((a, b) => {
            if (Boolean(a[1].completed) !== Boolean(b[1].completed)) return a[1].completed ? 1 : -1;
            return (b[1].updatedAt || b[1].createdAt || 0) - (a[1].updatedAt || a[1].createdAt || 0);
        });

    const fragment = document.createDocumentFragment();
    visibleEntries.forEach(([itemId, item]) => {
        const category = SHOPPING_CATEGORIES[item.category] || SHOPPING_CATEGORIES.other;
        const article = document.createElement("article");
        article.className = "shopping-item" + (item.completed ? " is-completed" : "");

        const checkButton = document.createElement("button");
        checkButton.type = "button";
        checkButton.className = "shopping-check";
        checkButton.setAttribute("aria-label", item.completed ? "Remettre à acheter" : "Marquer comme acheté");
        checkButton.textContent = item.completed ? "✓" : "";
        checkButton.addEventListener("click", () => toggleShoppingItem(itemId, !item.completed));

        const copy = document.createElement("div");
        copy.className = "shopping-item-copy";
        const title = document.createElement("strong");
        title.textContent = item.name || "Article";
        const details = document.createElement("div");
        const categoryBadge = document.createElement("span");
        categoryBadge.className = "shopping-category " + category.className;
        categoryBadge.textContent = category.label;
        details.appendChild(categoryBadge);
        if (item.quantity) {
            const quantity = document.createElement("span");
            quantity.className = "shopping-quantity";
            quantity.textContent = item.quantity;
            details.appendChild(quantity);
        }
        const meta = document.createElement("small");
        meta.textContent = getShoppingItemMeta(item);
        copy.append(title, details, meta);

        const actions = document.createElement("div");
        actions.className = "shopping-item-actions";
        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.textContent = "Modifier";
        editButton.addEventListener("click", () => startShoppingItemEdit(itemId));
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "is-delete";
        deleteButton.setAttribute("aria-label", "Supprimer " + (item.name || "cet article"));
        deleteButton.textContent = "×";
        deleteButton.addEventListener("click", () => deleteShoppingItem(itemId, item.name));
        actions.append(editButton, deleteButton);

        article.append(checkButton, copy, actions);
        fragment.appendChild(article);
    });

    shoppingItemsList.replaceChildren(fragment);
    shoppingEmptyState.style.display = visibleEntries.length ? "none" : "flex";
    const emptyTitle = shoppingEmptyState.querySelector("strong");
    const emptyCopy = shoppingEmptyState.querySelector("p");
    if (!entries.length) {
        emptyTitle.textContent = "La liste est vide";
        emptyCopy.textContent = "Ajoutez quelque chose à acheter pour commencer.";
    } else if (activeShoppingFilter === "completed") {
        emptyTitle.textContent = "Rien de terminé";
        emptyCopy.textContent = "Les articles cochés apparaîtront ici.";
    } else {
        emptyTitle.textContent = "Tout est acheté";
        emptyCopy.textContent = "Votre liste en cours est terminée.";
    }
}

function toggleShoppingItem(itemId, completed) {
    if (!currentSpaceCode || !currentUser) return;
    database.ref("spaces/" + currentSpaceCode + "/dailyTools/shopping/items/" + itemId).update({
        completed,
        completedAt: completed ? Date.now() : null,
        completedBy: completed ? currentUser.uid : null,
        completedByPseudo: completed ? pseudo : null,
        updatedAt: Date.now(),
        updatedBy: currentUser.uid,
        updatedByPseudo: pseudo
    }).catch((error) => {
        console.error("Mise à jour de la course impossible", error);
        showToast("Impossible de mettre la liste à jour");
    });
}

function deleteShoppingItem(itemId, itemName) {
    if (!confirm("Supprimer « " + (itemName || "cet article") + " » de la liste ?")) return;
    database.ref("spaces/" + currentSpaceCode + "/dailyTools/shopping/items/" + itemId).remove()
        .then(() => {
            if (editingShoppingItemId === itemId) resetShoppingForm();
            showToast("Article supprimé");
        })
        .catch((error) => {
            console.error("Suppression de la course impossible", error);
            showToast("Impossible de supprimer cet article");
        });
}

backFromShoppingBtn.addEventListener("click", () => {
    resetShoppingForm();
    showScreen("dailyTools");
});
cancelShoppingEditBtn.addEventListener("click", resetShoppingForm);

shoppingFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeShoppingFilter = button.dataset.shoppingFilter;
        shoppingFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        renderShoppingList(currentShoppingItems);
    });
});

shoppingItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isSavingShoppingItem || !currentSpaceCode || !currentUser) return;
    const name = shoppingItemName.value.trim();
    if (!name) return;

    isSavingShoppingItem = true;
    saveShoppingItemBtn.disabled = true;
    saveShoppingItemBtn.textContent = "Enregistrement…";
    const now = Date.now();
    const basePath = "spaces/" + currentSpaceCode + "/dailyTools/shopping/items";
    const payload = {
        name,
        quantity: shoppingItemQuantity.value.trim(),
        category: SHOPPING_CATEGORIES[shoppingItemCategory.value] ? shoppingItemCategory.value : "other",
        updatedAt: now,
        updatedBy: currentUser.uid,
        updatedByPseudo: pseudo
    };
    let request;
    if (editingShoppingItemId) {
        request = database.ref(basePath + "/" + editingShoppingItemId).update(payload);
    } else {
        request = database.ref(basePath).push({
            ...payload,
            completed: false,
            createdAt: now,
            createdByUid: currentUser.uid,
            createdByPseudo: pseudo
        });
    }

    request.then(() => {
        showToast(editingShoppingItemId ? "Article modifié" : "Article ajouté à la liste");
        resetShoppingForm();
    }).catch((error) => {
        console.error("Enregistrement de la course impossible", error);
        showToast("Impossible d’enregistrer cet article");
    }).finally(() => {
        isSavingShoppingItem = false;
        saveShoppingItemBtn.disabled = false;
        if (!editingShoppingItemId) saveShoppingItemBtn.textContent = "Ajouter à la liste";
    });
});

clearCompletedShoppingBtn.addEventListener("click", () => {
    const completedIds = Object.entries(currentShoppingItems)
        .filter(([, item]) => item.completed)
        .map(([itemId]) => itemId);
    if (!completedIds.length || !confirm("Supprimer tous les articles terminés ?")) return;
    const updates = {};
    completedIds.forEach((itemId) => { updates[itemId] = null; });
    database.ref("spaces/" + currentSpaceCode + "/dailyTools/shopping/items").update(updates)
        .then(() => showToast("Articles terminés supprimés"))
        .catch((error) => {
            console.error("Nettoyage de la liste impossible", error);
            showToast("Impossible de nettoyer la liste");
        });
});

function prepareOrganizerAssignees(select) {
    if (!select || !currentUser) return;
    const players = [currentSpaceData?.player1, currentSpaceData?.player2].filter(Boolean);
    const partner = players.find((player) => player.uid !== currentUser.uid);
    const options = [
        ["both", "Nous deux"],
        [currentUser.uid, pseudo || "Moi"]
    ];
    if (partner?.uid) options.push([partner.uid, partner.pseudo || "Partenaire"]);
    const previous = select.value;
    select.replaceChildren(...options.map(([value, label]) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = label;
        return option;
    }));
    select.value = options.some(([value]) => value === previous) ? previous : "both";
}

function getOrganizerPersonLabel(value) {
    if (!value || value === "both") return "Nous deux";
    const players = [currentSpaceData?.player1, currentSpaceData?.player2].filter(Boolean);
    return players.find((player) => player.uid === value)?.pseudo || (value === currentUser?.uid ? pseudo : "Partenaire");
}

function formatOrganizerDate(value, includeTime = "") {
    if (!value) return "Sans échéance";
    const date = new Date(value + "T" + (includeTime || "12:00"));
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" }) + (includeTime ? " à " + includeTime.replace(":", "h") : "");
}

function isPastDate(value, time = "23:59") {
    if (!value) return false;
    return new Date(value + "T" + (time || "23:59")).getTime() < Date.now();
}

function createOrganizerItem({ title, details, badges = [], meta, completed = false, overdue = false, onToggle, onEdit, onDelete }) {
    const article = document.createElement("article");
    article.className = "organizer-item" + (completed ? " is-completed" : "") + (overdue ? " is-overdue" : "");
    if (onToggle) {
        const check = document.createElement("button");
        check.type = "button";
        check.className = "organizer-item-check";
        check.textContent = completed ? "✓" : "";
        check.setAttribute("aria-label", completed ? "Rouvrir" : "Terminer");
        check.addEventListener("click", onToggle);
        article.appendChild(check);
    }
    const copy = document.createElement("div");
    copy.className = "organizer-item-copy";
    const heading = document.createElement("strong");
    heading.textContent = title || "Sans titre";
    copy.appendChild(heading);
    if (details) {
        const paragraph = document.createElement("p");
        paragraph.textContent = details;
        copy.appendChild(paragraph);
    }
    const badgesRow = document.createElement("div");
    badges.forEach(({ label, className = "" }) => {
        const badge = document.createElement("span");
        badge.className = "organizer-badge " + className;
        badge.textContent = label;
        badgesRow.appendChild(badge);
    });
    copy.appendChild(badgesRow);
    const small = document.createElement("small");
    small.textContent = meta || "Partagé dans Cactus";
    copy.appendChild(small);
    const actions = document.createElement("div");
    actions.className = "organizer-item-actions";
    const edit = document.createElement("button");
    edit.type = "button"; edit.textContent = "Modifier"; edit.addEventListener("click", onEdit);
    const remove = document.createElement("button");
    remove.type = "button"; remove.className = "is-delete"; remove.textContent = "×"; remove.setAttribute("aria-label", "Supprimer"); remove.addEventListener("click", onDelete);
    actions.append(edit, remove);
    article.append(copy, actions);
    return article;
}

function resetTaskForm() {
    editingTaskId = null; taskForm.reset(); prepareOrganizerAssignees(taskAssigneeInput); taskPriorityInput.value = "medium";
    taskFormKicker.textContent = "Nouvelle tâche"; taskFormTitle.textContent = "Que faut-il faire ?"; saveTaskBtn.textContent = "Ajouter la tâche"; cancelTaskEditBtn.style.display = "none";
}

function renderTasks(tasks) {
    currentTasks = tasks || {};
    const entries = Object.entries(currentTasks);
    const pending = entries.filter(([, task]) => !task.completed).length;
    tasksPendingCount.textContent = pending + " à faire";
    const visible = entries.filter(([, task]) => activeTaskFilter === "all" || (activeTaskFilter === "completed" ? task.completed : !task.completed))
        .sort((a, b) => Number(a[1].completed) - Number(b[1].completed) || (a[1].dueDate || "9999").localeCompare(b[1].dueDate || "9999") || (b[1].createdAt || 0) - (a[1].createdAt || 0));
    tasksList.replaceChildren(...visible.map(([id, task]) => createOrganizerItem({
        title: task.title, details: task.details,
        badges: [
            { label: getOrganizerPersonLabel(task.assignee), className: "is-person" },
            { label: ({ low: "Tranquille", medium: "Importante", high: "Urgente" })[task.priority] || "Importante", className: "is-priority-" + (task.priority || "medium") },
            ...(task.dueDate ? [{ label: formatOrganizerDate(task.dueDate), className: "is-date" }] : [])
        ],
        meta: task.completed ? "Terminée par " + (task.completedByPseudo || "Cactus") : "Créée par " + (task.createdByPseudo || "Cactus"),
        completed: task.completed, overdue: !task.completed && isPastDate(task.dueDate),
        onToggle: () => database.ref("spaces/" + currentSpaceCode + "/dailyTools/tasks/" + id).update({ completed: !task.completed, completedAt: !task.completed ? Date.now() : null, completedBy: !task.completed ? currentUser.uid : null, completedByPseudo: !task.completed ? pseudo : null, updatedAt: Date.now(), updatedBy: currentUser.uid }),
        onEdit: () => { editingTaskId = id; taskTitleInput.value = task.title || ""; taskDetailsInput.value = task.details || ""; prepareOrganizerAssignees(taskAssigneeInput); taskAssigneeInput.value = task.assignee || "both"; taskPriorityInput.value = task.priority || "medium"; taskDueDateInput.value = task.dueDate || ""; taskFormKicker.textContent = "Modification"; taskFormTitle.textContent = "Modifier cette tâche"; saveTaskBtn.textContent = "Enregistrer"; cancelTaskEditBtn.style.display = "block"; taskForm.scrollIntoView({ behavior: "smooth" }); },
        onDelete: () => { if (confirm("Supprimer cette tâche ?")) database.ref("spaces/" + currentSpaceCode + "/dailyTools/tasks/" + id).remove(); }
    })));
    tasksEmptyState.style.display = visible.length ? "none" : "flex";
}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault(); const title = taskTitleInput.value.trim(); if (!title) return;
    const now = Date.now(); const payload = { title, details: taskDetailsInput.value.trim(), assignee: taskAssigneeInput.value || "both", priority: taskPriorityInput.value, dueDate: taskDueDateInput.value || "", updatedAt: now, updatedBy: currentUser.uid, updatedByPseudo: pseudo };
    const base = "spaces/" + currentSpaceCode + "/dailyTools/tasks";
    const request = editingTaskId ? database.ref(base + "/" + editingTaskId).update(payload) : database.ref(base).push({ ...payload, completed: false, createdAt: now, createdByUid: currentUser.uid, createdByPseudo: pseudo });
    saveTaskBtn.disabled = true; request.then(() => { showToast(editingTaskId ? "Tâche modifiée" : "Tâche ajoutée"); resetTaskForm(); }).catch(() => showToast("Impossible d’enregistrer la tâche")).finally(() => { saveTaskBtn.disabled = false; });
});
cancelTaskEditBtn.addEventListener("click", resetTaskForm);
taskFilterButtons.forEach((button) => button.addEventListener("click", () => { activeTaskFilter = button.dataset.taskFilter; taskFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button)); renderTasks(currentTasks); }));

function resetReminderForm() {
    editingReminderId = null; reminderForm.reset(); prepareOrganizerAssignees(reminderTargetInput);
    reminderFormKicker.textContent = "Nouveau rappel"; reminderFormTitle.textContent = "Que faut-il retenir ?"; saveReminderBtn.textContent = "Ajouter le rappel"; cancelReminderEditBtn.style.display = "none";
}

function getReminderTimestamp(reminder) { return new Date((reminder.date || "9999-12-31") + "T" + (reminder.time || "23:59")).getTime(); }
function renderReminders(reminders) {
    currentReminders = reminders || {}; const entries = Object.entries(currentReminders); const now = Date.now(); const upcoming = entries.filter(([, item]) => getReminderTimestamp(item) >= now).length; remindersUpcomingCount.textContent = upcoming + " à venir";
    const visible = entries.filter(([, item]) => activeReminderFilter === "all" || (activeReminderFilter === "past" ? getReminderTimestamp(item) < now : getReminderTimestamp(item) >= now)).sort((a, b) => getReminderTimestamp(a[1]) - getReminderTimestamp(b[1]));
    remindersList.replaceChildren(...visible.map(([id, item]) => createOrganizerItem({ title: item.title, details: item.details, badges: [{ label: formatOrganizerDate(item.date, item.time), className: "is-date" }, { label: getOrganizerPersonLabel(item.target), className: "is-person" }], meta: "Créé par " + (item.createdByPseudo || "Cactus"), overdue: getReminderTimestamp(item) < now,
        onEdit: () => { editingReminderId = id; reminderTitleInput.value = item.title || ""; reminderDetailsInput.value = item.details || ""; reminderDateInput.value = item.date || ""; reminderTimeInput.value = item.time || ""; prepareOrganizerAssignees(reminderTargetInput); reminderTargetInput.value = item.target || "both"; reminderFormKicker.textContent = "Modification"; reminderFormTitle.textContent = "Modifier ce rappel"; saveReminderBtn.textContent = "Enregistrer"; cancelReminderEditBtn.style.display = "block"; reminderForm.scrollIntoView({ behavior: "smooth" }); },
        onDelete: () => { if (confirm("Supprimer ce rappel ?")) database.ref("spaces/" + currentSpaceCode + "/dailyTools/reminders/" + id).remove(); }
    })));
    remindersEmptyState.style.display = visible.length ? "none" : "flex";
}
reminderForm.addEventListener("submit", (event) => { event.preventDefault(); const title = reminderTitleInput.value.trim(); if (!title || !reminderDateInput.value) return; const now = Date.now(); const payload = { title, details: reminderDetailsInput.value.trim(), date: reminderDateInput.value, time: reminderTimeInput.value || "", target: reminderTargetInput.value || "both", updatedAt: now, updatedBy: currentUser.uid, updatedByPseudo: pseudo }; const base = "spaces/" + currentSpaceCode + "/dailyTools/reminders"; const request = editingReminderId ? database.ref(base + "/" + editingReminderId).update(payload) : database.ref(base).push({ ...payload, createdAt: now, createdByUid: currentUser.uid, createdByPseudo: pseudo }); saveReminderBtn.disabled = true; request.then(() => { showToast(editingReminderId ? "Rappel modifié" : "Rappel ajouté"); resetReminderForm(); }).catch(() => showToast("Impossible d’enregistrer le rappel")).finally(() => { saveReminderBtn.disabled = false; }); });
cancelReminderEditBtn.addEventListener("click", resetReminderForm);
reminderFilterButtons.forEach((button) => button.addEventListener("click", () => { activeReminderFilter = button.dataset.reminderFilter; reminderFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button)); renderReminders(currentReminders); }));

const IMPORTANT_DATE_CATEGORIES = { anniversary: "Anniversaire", appointment: "Rendez-vous", trip: "Voyage", celebration: "Fête", other: "Autre" };
function getImportantDateNextTimestamp(item) { if (!item.date) return Infinity; if (!item.annual) return new Date(item.date + "T12:00").getTime(); const parts = item.date.split("-"); const now = new Date(); let date = new Date(now.getFullYear(), Number(parts[1]) - 1, Number(parts[2]), 12); if (date.getTime() < Date.now()) date = new Date(now.getFullYear() + 1, Number(parts[1]) - 1, Number(parts[2]), 12); return date.getTime(); }
function resetImportantDateForm() { editingImportantDateId = null; importantDateForm.reset(); importantDateCategoryInput.value = "anniversary"; importantDateFormKicker.textContent = "Nouvelle date"; importantDateFormTitle.textContent = "Quel événement garder ?"; saveImportantDateBtn.textContent = "Ajouter la date"; cancelImportantDateEditBtn.style.display = "none"; }
function renderImportantDates(items) {
    currentImportantDates = items || {}; const entries = Object.entries(currentImportantDates); importantDatesCount.textContent = entries.length + " date" + (entries.length > 1 ? "s" : "");
    const visible = entries.filter(([, item]) => activeImportantDateFilter === "all" || (activeImportantDateFilter === "annual" ? item.annual : getImportantDateNextTimestamp(item) >= Date.now())).sort((a, b) => getImportantDateNextTimestamp(a[1]) - getImportantDateNextTimestamp(b[1]));
    importantDatesList.replaceChildren(...visible.map(([id, item]) => createOrganizerItem({ title: item.title, details: item.notes, badges: [{ label: formatOrganizerDate(item.date), className: "is-date" }, { label: IMPORTANT_DATE_CATEGORIES[item.category] || "Autre", className: "is-category" }, ...(item.annual ? [{ label: "Chaque année", className: "is-annual" }] : [])], meta: "Ajoutée par " + (item.createdByPseudo || "Cactus"), overdue: !item.annual && getImportantDateNextTimestamp(item) < Date.now(),
        onEdit: () => { editingImportantDateId = id; importantDateTitleInput.value = item.title || ""; importantDateNotesInput.value = item.notes || ""; importantDateValueInput.value = item.date || ""; importantDateCategoryInput.value = item.category || "other"; importantDateAnnualInput.checked = Boolean(item.annual); importantDateFormKicker.textContent = "Modification"; importantDateFormTitle.textContent = "Modifier cette date"; saveImportantDateBtn.textContent = "Enregistrer"; cancelImportantDateEditBtn.style.display = "block"; importantDateForm.scrollIntoView({ behavior: "smooth" }); },
        onDelete: () => { if (confirm("Supprimer cette date importante ?")) database.ref("spaces/" + currentSpaceCode + "/dailyTools/importantDates/" + id).remove(); }
    })));
    importantDatesEmptyState.style.display = visible.length ? "none" : "flex";
}
importantDateForm.addEventListener("submit", (event) => { event.preventDefault(); const title = importantDateTitleInput.value.trim(); if (!title || !importantDateValueInput.value) return; const now = Date.now(); const payload = { title, notes: importantDateNotesInput.value.trim(), date: importantDateValueInput.value, category: importantDateCategoryInput.value, annual: importantDateAnnualInput.checked, updatedAt: now, updatedBy: currentUser.uid, updatedByPseudo: pseudo }; const base = "spaces/" + currentSpaceCode + "/dailyTools/importantDates"; const request = editingImportantDateId ? database.ref(base + "/" + editingImportantDateId).update(payload) : database.ref(base).push({ ...payload, createdAt: now, createdByUid: currentUser.uid, createdByPseudo: pseudo }); saveImportantDateBtn.disabled = true; request.then(() => { showToast(editingImportantDateId ? "Date modifiée" : "Date ajoutée"); resetImportantDateForm(); }).catch(() => showToast("Impossible d’enregistrer cette date")).finally(() => { saveImportantDateBtn.disabled = false; }); });
cancelImportantDateEditBtn.addEventListener("click", resetImportantDateForm);
importantDateFilterButtons.forEach((button) => button.addEventListener("click", () => { activeImportantDateFilter = button.dataset.importantDateFilter; importantDateFilterButtons.forEach((item) => item.classList.toggle("is-active", item === button)); renderImportantDates(currentImportantDates); }));

backFromTasksBtn.addEventListener("click", () => { resetTaskForm(); showScreen("dailyTools"); });
backFromRemindersBtn.addEventListener("click", () => { resetReminderForm(); showScreen("dailyTools"); });
backFromImportantDatesBtn.addEventListener("click", () => { resetImportantDateForm(); showScreen("dailyTools"); });

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

    showScreen("dailyTools");
});


function closeEditNotebookModal() {
    editNotebookModal.style.display = "none";
    document.body.classList.remove("edit-notebook-open");
}

function openEditNotebookModal() {
    if (!currentNotebookId || !currentNotebookData) {
        return;
    }

    const color = getSafeProfileColor(currentNotebookData.color || "#D8F3DC").toUpperCase();
    editNotebookEmoji.value = currentNotebookData.emoji || "📝";
    editNotebookTitle.value = currentNotebookData.title || "";
    editNotebookColor.value = color;
    editNotebookColorButton.style.setProperty("--control-color", color);
    editNotebookColorButton.querySelector("small").textContent = color;
    editNotebookModal.style.display = "flex";
    document.body.classList.add("edit-notebook-open");
    window.setTimeout(() => editNotebookTitle.focus(), 60);
}

renameNotebookBtn.addEventListener("click", openEditNotebookModal);
closeEditNotebookBtn.addEventListener("click", closeEditNotebookModal);
cancelEditNotebookBtn.addEventListener("click", closeEditNotebookModal);
editNotebookModal.querySelector("[data-close-edit-notebook]").addEventListener("click", closeEditNotebookModal);

saveEditNotebookBtn.addEventListener("click", () => {
    if (!currentNotebookId || !currentNotebookData) return;

    const title = editNotebookTitle.value.trim();
    const emoji = editNotebookEmoji.value.trim() || "📝";
    const color = getSafeProfileColor(editNotebookColor.value || "#D8F3DC").toUpperCase();

    if (!title) {
        showToast("Donne un titre à ton carnet");
        editNotebookTitle.focus();
        return;
    }

    saveEditNotebookBtn.disabled = true;
    saveEditNotebookBtn.textContent = "Enregistrement…";

    database
        .ref(
            "spaces/" +
            currentSpaceCode +
            "/garden/notebooks/" +
            currentNotebookId
        )
        .update({
            title: title,
            emoji: emoji,
            color: color,
            updatedAt: Date.now(),
            updatedBy: currentUser.uid,
            updatedByPseudo: pseudo
        })
        .then(() => {
            currentNotebookData.title = title;
            currentNotebookData.emoji = emoji;
            currentNotebookData.color = color;

            openedNotebookTitle.textContent =
                emoji + " " + title;
            closeEditNotebookModal();
            showToast("Carnet personnalisé ✨");
        })
        .catch((error) => {
            console.error("Modification du carnet impossible", error);
            showToast("Impossible de modifier le carnet");
        })
        .finally(() => {
            saveEditNotebookBtn.disabled = false;
            saveEditNotebookBtn.textContent = "Enregistrer";
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

            showScreen("dailyTools");
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

undoBtn.addEventListener("click", () => runEditorCommand("undo"));
redoBtn.addEventListener("click", () => runEditorCommand("redo"));
bulletListBtn.addEventListener("click", () => runEditorCommand("insertUnorderedList"));
numberListBtn.addEventListener("click", () => runEditorCommand("insertOrderedList"));
alignLeftBtn.addEventListener("click", () => runEditorCommand("justifyLeft"));
alignCenterBtn.addEventListener("click", () => runEditorCommand("justifyCenter"));
alignRightBtn.addEventListener("click", () => runEditorCommand("justifyRight"));

let activeNotebookColorTarget = null;
let notebookPickerState = { h: 145, s: 61, v: 83 };
let pendingNotebookColor = "#54D38B";
let notebookColorSelectionRange = null;

function openNotebookColorPicker(target) {
    const configurations = {
        notebook: { input: notebookColor, title: "Couleur du carnet" },
        editNotebook: { input: editNotebookColor, title: "Nouvelle couleur du carnet" },
        text: { input: textColorPicker, title: "Couleur du texte" },
        highlight: { input: highlightColorPicker, title: "Couleur du surlignage" }
    };
    const configuration = configurations[target];
    if (!configuration) return;

    activeNotebookColorTarget = target;
    if (target === "text" || target === "highlight") {
        const selection = window.getSelection();
        const range = selection.rangeCount ? selection.getRangeAt(0) : null;
        notebookColorSelectionRange = range && notebookEditor.contains(range.commonAncestorContainer)
            ? range.cloneRange()
            : null;
    }
    notebookColorModalTitle.textContent = configuration.title;
    setPendingNotebookColor(configuration.input.value);
    notebookColorModal.style.display = "flex";
    document.body.classList.add("notebook-color-open");
}

function closeNotebookColorPicker() {
    notebookColorModal.style.display = "none";
    document.body.classList.remove("notebook-color-open");
    activeNotebookColorTarget = null;
}

function restoreNotebookColorSelection() {
    if (!notebookColorSelectionRange) return;
    notebookEditor.focus();
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(notebookColorSelectionRange);
}

function setPendingNotebookColor(value, synchronizePicker = true) {
    pendingNotebookColor = getSafeProfileColor(value).toUpperCase();
    notebookColorPreview.style.setProperty("--selected-color", pendingNotebookColor);
    notebookColorPreview.querySelector("strong").textContent = pendingNotebookColor;
    notebookHexInput.value = pendingNotebookColor.slice(1);

    if (synchronizePicker) {
        notebookPickerState = hexToHsv(pendingNotebookColor);
        notebookHueInput.value = Math.round(notebookPickerState.h);
        notebookColorField.style.setProperty("--picker-hue", notebookPickerState.h);
        notebookHueInput.style.setProperty("--picker-hue", notebookPickerState.h);
        syncNotebookColorCursor();
    }

    notebookColorPresets.forEach((button) => {
        button.classList.toggle(
            "is-selected",
            button.dataset.notebookColor.toUpperCase() === pendingNotebookColor
        );
    });
}

function syncNotebookColorCursor() {
    notebookColorCursor.style.left = notebookPickerState.s + "%";
    notebookColorCursor.style.top = (100 - notebookPickerState.v) + "%";
}

function updateNotebookColorFromPointer(event) {
    const rect = notebookColorField.getBoundingClientRect();
    const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);
    notebookPickerState.s = Math.round((x / rect.width) * 100);
    notebookPickerState.v = Math.round((1 - y / rect.height) * 100);
    syncNotebookColorCursor();
    setPendingNotebookColor(hsvToHex(notebookPickerState), false);
}

notebookColorButton.addEventListener("click", () => openNotebookColorPicker("notebook"));
editNotebookColorButton.addEventListener("click", () => openNotebookColorPicker("editNotebook"));
textColorButton.addEventListener("click", () => openNotebookColorPicker("text"));
highlightColorButton.addEventListener("click", () => openNotebookColorPicker("highlight"));
closeNotebookColorBtn.addEventListener("click", closeNotebookColorPicker);
cancelNotebookColorBtn.addEventListener("click", closeNotebookColorPicker);
notebookColorModal.querySelector("[data-close-notebook-color]").addEventListener("click", closeNotebookColorPicker);

notebookColorPresets.forEach((button) => {
    button.addEventListener("click", () => setPendingNotebookColor(button.dataset.notebookColor));
});

notebookHueInput.addEventListener("input", () => {
    notebookPickerState.h = Number(notebookHueInput.value);
    notebookColorField.style.setProperty("--picker-hue", notebookPickerState.h);
    notebookHueInput.style.setProperty("--picker-hue", notebookPickerState.h);
    setPendingNotebookColor(hsvToHex(notebookPickerState), false);
});

notebookHexInput.addEventListener("input", () => {
    notebookHexInput.value = notebookHexInput.value.replace(/[^0-9a-f]/gi, "").slice(0, 6).toUpperCase();
    if (notebookHexInput.value.length === 6) {
        setPendingNotebookColor("#" + notebookHexInput.value);
    }
});

notebookColorField.addEventListener("pointerdown", (event) => {
    notebookColorField.setPointerCapture(event.pointerId);
    updateNotebookColorFromPointer(event);
});

notebookColorField.addEventListener("pointermove", (event) => {
    if (notebookColorField.hasPointerCapture(event.pointerId)) {
        updateNotebookColorFromPointer(event);
    }
});

applyNotebookColorBtn.addEventListener("click", () => {
    if (activeNotebookColorTarget === "notebook") {
        notebookColor.value = pendingNotebookColor;
        notebookColorButton.style.setProperty("--control-color", pendingNotebookColor);
        notebookColorButton.querySelector("small").textContent = pendingNotebookColor;
    } else if (activeNotebookColorTarget === "editNotebook") {
        editNotebookColor.value = pendingNotebookColor;
        editNotebookColorButton.style.setProperty("--control-color", pendingNotebookColor);
        editNotebookColorButton.querySelector("small").textContent = pendingNotebookColor;
    } else if (activeNotebookColorTarget === "text") {
        textColorPicker.value = pendingNotebookColor;
        textColorButton.style.setProperty("--control-color", pendingNotebookColor);
        restoreNotebookColorSelection();
        runEditorCommand("foreColor", pendingNotebookColor);
        keepEditorToolbarOpen();
    } else if (activeNotebookColorTarget === "highlight") {
        highlightColorPicker.value = pendingNotebookColor;
        highlightColorButton.style.setProperty("--control-color", pendingNotebookColor);
        restoreNotebookColorSelection();
        runEditorCommand("hiliteColor", pendingNotebookColor);
        keepEditorToolbarOpen();
    }
    closeNotebookColorPicker();
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

storyPageBackTopBtn.addEventListener("click", () => {
    showScreen("dashboard");
});

storyMemoriesBtn.addEventListener("click", () => {
    showScreen("history");
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

const GAMES_LIBRARY = {
    ranking: {
        title: "Classements",
        category: "Complicité",
        duration: "5 min",
        image: "assets/cactus-ranking.png",
        description: "Classez vos préférences chacun de votre côté, puis comparez vos réponses pour découvrir vos points communs."
    },
    guess: {
        title: "Devine ma réponse",
        category: "Découverte",
        duration: "4 min",
        image: "assets/cactus-guess.png",
        description: "Répondez à une question puis tentez de deviner ce que votre partenaire a écrit."
    },
    likely: {
        title: "Qui est le plus susceptible ?",
        category: "Fun",
        duration: "3 min",
        image: "assets/cactus-likely.png",
        description: "Choisissez lequel de vous deux correspond le mieux à chaque situation et découvrez si vous êtes d’accord."
    },
    ok: {
        title: "OK ou Pas OK ?",
        category: "Débats",
        duration: "3 min",
        image: "assets/cactus-ok.png",
        description: "Donnez votre avis sur des situations du quotidien et ouvrez une discussion sans pression."
    },
    greenFlag: {
        title: "Green Flag / Red Flag",
        category: "Débats",
        duration: "4 min",
        image: "assets/cactus-greenflag.png",
        description: "Décidez si chaque comportement est rassurant ou préoccupant, puis comparez vos limites."
    },
    princess: {
        title: "Princess Treatment",
        category: "Fun",
        duration: "4 min",
        image: "assets/cactus-princess.png",
        description: "Évaluez ensemble les petites et grandes attentions qui font vraiment plaisir dans votre couple."
    },
    questions: {
        title: "Questions",
        category: "Découverte",
        duration: "5 min",
        image: "assets/cactus-questions.png",
        description: "Prenez le temps de répondre à une question pour mieux connaître les envies et les souvenirs de l’autre."
    }
};

const RECENT_GAME_HISTORY_PREFIX = "cactus_recent_questions_v1";

function getGameHistoryKey(mode) {
    return RECENT_GAME_HISTORY_PREFIX + "_" + (currentUser?.uid || "guest") + "_" + mode;
}

function readGameHistory(mode) {
    try {
        const value = JSON.parse(localStorage.getItem(getGameHistoryKey(mode)) || "[]");
        return Array.isArray(value) ? value.filter(Boolean) : [];
    } catch (error) {
        return [];
    }
}

function writeGameHistory(mode, history) {
    localStorage.setItem(getGameHistoryKey(mode), JSON.stringify(history));
}

function getActiveChallengeIds(path) {
    if (!path || !currentSpaceData) return new Set();
    return new Set(
        Object.entries(currentSpaceData[path] || {})
            .filter(([, challenge]) => challenge?.status !== "completed")
            .map(([id]) => String(id))
    );
}

function selectFreshGameItem(items, mode, currentId = null, challengePath = null) {
    if (!Array.isArray(items) || items.length === 0) return null;

    const blockedIds = getActiveChallengeIds(challengePath);
    let history = readGameHistory(mode).filter((id) => items.some((item) => String(item.id) === String(id)));
    const eligible = items.filter((item) => {
        return String(item.id) !== String(currentId || "") && !blockedIds.has(String(item.id));
    });
    let fresh = eligible.filter((item) => !history.includes(String(item.id)));

    if (fresh.length === 0) {
        const recentToKeep = Math.min(12, Math.max(1, Math.floor(items.length * 0.12)));
        history = history.slice(-recentToKeep);
        fresh = eligible.filter((item) => !history.includes(String(item.id)));
    }

    const pool = fresh.length > 0 ? fresh : (eligible.length > 0 ? eligible : items);
    const selected = pool[Math.floor(Math.random() * pool.length)];
    history = history.filter((id) => String(id) !== String(selected.id));
    history.push(String(selected.id));
    writeGameHistory(mode, history.slice(-items.length));
    return selected;
}

function setGameSkipAvailability(mode, available, items = []) {
    const button = document.querySelector('[data-skip-game="' + mode + '"]');
    const progress = document.querySelector('[data-game-progress="' + mode + '"]');
    const toolbar = button?.closest(".game-question-tools");
    if (!toolbar) return;

    toolbar.classList.toggle("is-unavailable", !available);
    if (!available || !progress) return;

    const seen = new Set(readGameHistory(mode));
    const remaining = Math.max(0, items.filter((item) => !seen.has(String(item.id))).length);
    progress.textContent = remaining > 0
        ? remaining + " encore inédite" + (remaining > 1 ? "s" : "")
        : "Catalogue parcouru · nouvelle rotation";
}

document.querySelectorAll("[data-skip-game]").forEach((button) => {
    button.addEventListener("click", () => {
        const actions = {
            ranking: startRandomRanking,
            guess: startGuessGame,
            likely: startLikelyGame,
            ok: startOkGame,
            greenFlag: startGreenFlagGame,
            princess: startPrincessGame,
            questions: startQuestionsGame
        };
        const action = actions[button.dataset.skipGame];
        if (action) action();
    });
});

const REPORT_REASON_LABELS = {
    confusing: "Formulation confuse",
    duplicate: "Question en double",
    mistake: "Faute ou erreur",
    sensitive: "Contenu sensible",
    offtopic: "Hors sujet"
};

function getCurrentReportableContent(mode) {
    const content = {
        ranking: currentRanking ? { id: currentRanking.id, text: currentRanking.title } : null,
        guess: currentGuessQuestion ? { id: currentGuessQuestion.id, text: currentGuessQuestion.question } : null,
        likely: currentLikelyQuestion ? { id: currentLikelyQuestion.id, text: currentLikelyQuestion.question } : null,
        ok: currentOkQuestion ? { id: currentOkQuestion.id, text: currentOkQuestion.question } : null,
        greenFlag: currentGreenFlagQuestion ? { id: currentGreenFlagQuestion.id, text: currentGreenFlagQuestion.question } : null,
        princess: currentPrincessQuestion ? { id: currentPrincessQuestion.id, text: currentPrincessQuestion.question } : null,
        questions: currentCoupleQuestion ? { id: currentCoupleQuestion.id, text: currentCoupleQuestion.question } : null
    }[mode];
    return content ? { ...content, mode } : null;
}

function getQuestionReportId(mode, questionId) {
    return (mode + "_" + questionId).replace(/[.#$\[\]\/]/g, "_").slice(0, 180);
}

function openQuestionReport(mode) {
    const content = getCurrentReportableContent(mode);
    if (!content || !currentUser) {
        showToast("Ce contenu ne peut pas être signalé pour le moment");
        return;
    }

    pendingQuestionReport = content;
    reportedQuestionPreview.textContent = content.text;
    questionReportReason.value = "";
    questionReportComment.value = "";
    questionReportModal.style.display = "grid";
    document.body.classList.add("question-report-open");
    questionReportReason.focus();
}

function closeQuestionReport() {
    questionReportModal.style.display = "none";
    pendingQuestionReport = null;
    document.body.classList.remove("question-report-open");
}

document.querySelectorAll("[data-report-game]").forEach((button) => {
    button.addEventListener("click", () => openQuestionReport(button.dataset.reportGame));
});
closeQuestionReportBtn.addEventListener("click", closeQuestionReport);
questionReportModal.querySelector("[data-close-question-report]").addEventListener("click", closeQuestionReport);

questionReportForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!pendingQuestionReport || !questionReportReason.value || !currentUser) return;

    const report = pendingQuestionReport;
    const reportId = getQuestionReportId(report.mode, report.id);
    const reference = database.ref("questionReports/" + currentUser.uid + "/" + reportId);
    submitQuestionReportBtn.disabled = true;
    submitQuestionReportBtn.textContent = "Envoi…";

    reference.once("value")
        .then((snapshot) => {
            if (snapshot.exists()) throw new Error("already-reported");
            return reference.set({
                reporterUid: currentUser.uid,
                spaceCode: currentSpaceCode || "",
                game: report.mode,
                questionId: String(report.id),
                questionText: String(report.text).slice(0, 1200),
                reason: questionReportReason.value,
                comment: questionReportComment.value.trim().slice(0, 500),
                status: "open",
                createdAt: Date.now()
            });
        })
        .then(() => {
            closeQuestionReport();
            showToast("Merci, le signalement a été envoyé 🌵");
        })
        .catch((error) => {
            if (error.message === "already-reported") {
                showToast("Cette question a déjà été signalée depuis ce compte");
            } else {
                console.error("Signalement impossible", error);
                showToast(getFriendlyFirebaseError(error));
            }
        })
        .finally(() => {
            submitQuestionReportBtn.disabled = false;
            submitQuestionReportBtn.textContent = "Envoyer le signalement";
        });
});

function flattenQuestionReports(data) {
    return Object.entries(data || {}).flatMap(([ownerUid, reports]) => {
        return Object.entries(reports || {}).map(([reportId, report]) => ({
            ...report,
            ownerUid,
            reportId
        }));
    }).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
}

function loadCreatorReportsCount() {
    if (!isCreatorAccount()) return;
    database.ref("questionReports").once("value").then((snapshot) => {
        const count = flattenQuestionReports(snapshot.val()).filter((report) => report.status === "open").length;
        creatorReportsCount.textContent = count > 99 ? "99+" : count;
        creatorOpenReportsBtn.classList.toggle("has-reports", count > 0);
    }).catch((error) => console.warn("Compteur des signalements indisponible", error));
}

function openCreatorReports() {
    if (!isCreatorAccount()) return;
    creatorReportsModal.style.display = "grid";
    document.body.classList.add("question-report-open");
    creatorReportsEmpty.querySelector("strong").textContent = "Aucun signalement ici";
    creatorReportsEmpty.querySelector("p").textContent = "Tout est à jour pour ce filtre.";
    creatorReportsEmpty.style.display = "none";
    creatorReportsList.innerHTML = '<p class="creator-reports-loading">Chargement des signalements…</p>';
    database.ref("questionReports").once("value")
        .then((snapshot) => {
            creatorQuestionReports = flattenQuestionReports(snapshot.val());
            renderCreatorReports();
        })
        .catch((error) => {
            creatorReportsList.innerHTML = "";
            creatorReportsEmpty.style.display = "flex";
            creatorReportsEmpty.querySelector("strong").textContent = "Chargement impossible";
            creatorReportsEmpty.querySelector("p").textContent = getFriendlyFirebaseError(error);
        });
}

function closeCreatorReports() {
    creatorReportsModal.style.display = "none";
    document.body.classList.remove("question-report-open");
}

function renderCreatorReports() {
    const game = creatorReportsGameFilter.value;
    const reason = creatorReportsReasonFilter.value;
    const status = creatorReportsStatusFilter.value;
    const reports = creatorQuestionReports.filter((report) => {
        return (game === "all" || report.game === game) &&
            (reason === "all" || report.reason === reason) &&
            (status === "all" || report.status === status);
    });

    creatorReportsList.replaceChildren();
    creatorReportsEmpty.style.display = reports.length === 0 ? "flex" : "none";
    reports.forEach((report) => {
        const card = document.createElement("article");
        card.className = "creator-report-card status-" + (report.status || "open");
        const meta = document.createElement("small");
        meta.textContent = (GAMES_LIBRARY[report.game]?.title || report.game) + " · " + (REPORT_REASON_LABELS[report.reason] || report.reason);
        const question = document.createElement("strong");
        question.textContent = report.questionText || "Contenu indisponible";
        const comment = document.createElement("p");
        comment.textContent = report.comment || "Aucune précision ajoutée.";
        const date = document.createElement("time");
        date.textContent = formatNotificationDate(report.createdAt || Date.now());
        const actions = document.createElement("div");
        const edit = document.createElement("button");
        edit.type = "button"; edit.className = "secondary"; edit.textContent = "✏️ Modifier";
        edit.addEventListener("click", () => openCreatorContent(report.game, report.questionId));
        actions.append(edit);
        if (report.status === "open") {
            const resolved = document.createElement("button");
            resolved.type = "button"; resolved.textContent = "✓ Corrigé";
            resolved.addEventListener("click", () => updateQuestionReportStatus(report, "resolved"));
            const ignored = document.createElement("button");
            ignored.type = "button"; ignored.className = "secondary"; ignored.textContent = "Ignorer";
            ignored.addEventListener("click", () => updateQuestionReportStatus(report, "ignored"));
            actions.append(resolved, ignored);
        }
        card.append(meta, question, comment, date, actions);
        creatorReportsList.appendChild(card);
    });
}

const CREATOR_CONTENT_SOURCES = {
    ranking: "data/rankings.json",
    guess: "data/guess-my-answer.json",
    likely: "data/likely.json",
    ok: "data/ok-ou-pas-ok.json",
    greenFlag: "data/green-flag-red-flag.json",
    princess: "data/princess-treatment.json",
    questions: "data/questions.json"
};

async function loadCreatorManagedContent(mode) {
    const [response, snapshot] = await Promise.all([
        fetch(CREATOR_CONTENT_SOURCES[mode]),
        database.ref("questionContent/" + mode).once("value")
    ]);
    const raw = await response.json();
    const baseItems = mode === "ranking" ? (raw.rankings || raw) : raw;
    const overrides = snapshot.val() || {};
    const items = baseItems.map((item) => {
        const override = overrides[item.id] || {};
        return {
            id: item.id,
            text: override.text || (mode === "ranking" ? item.title : item.question),
            items: override.items || item.items || [],
            originalText: mode === "ranking" ? item.title : item.question,
            originalItems: item.items || [],
            disabled: override.disabled === true,
            custom: false,
            edited: Boolean(overrides[item.id])
        };
    });
    Object.entries(overrides).forEach(([id, override]) => {
        if (!override.custom) return;
        items.push({ id, text: override.text, items: override.items || [], originalText: "", originalItems: [], disabled: override.disabled === true, custom: true, edited: true });
    });
    creatorManagedContent = items;
    renderCreatorManagedContent();
}

function renderCreatorManagedContent() {
    const search = normalizeGameSearch(creatorContentSearch.value);
    const filtered = creatorManagedContent.filter((item) => normalizeGameSearch(item.text).includes(search));
    creatorContentList.replaceChildren();
    if (!filtered.length) {
        creatorContentList.innerHTML = '<p class="creator-reports-loading">Aucun contenu trouvé.</p>';
        return;
    }
    filtered.forEach((item) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "creator-content-card" + (item.disabled ? " is-disabled" : "") + (item.edited ? " is-edited" : "");
        const copy = document.createElement("span");
        const title = document.createElement("strong"); title.textContent = item.text;
        const meta = document.createElement("small");
        meta.textContent = [item.custom ? "Ajout personnel" : item.edited ? "Modifié" : "JSON", item.disabled ? "Désactivé" : "Actif"].join(" · ");
        copy.append(title, meta);
        const arrow = document.createElement("b"); arrow.textContent = "›";
        card.append(copy, arrow);
        card.addEventListener("click", () => openCreatorContentForm(item));
        creatorContentList.appendChild(card);
    });
}

function openCreatorContent(mode = "questions", contentId = null) {
    if (!isCreatorAccount()) return;
    closeCreatorReports();
    creatorContentGameFilter.value = CREATOR_CONTENT_SOURCES[mode] ? mode : "questions";
    creatorContentSearch.value = "";
    creatorContentModal.style.display = "grid";
    document.body.classList.add("question-report-open");
    creatorContentForm.style.display = "none";
    creatorContentList.innerHTML = '<p class="creator-reports-loading">Chargement du catalogue…</p>';
    loadCreatorManagedContent(creatorContentGameFilter.value).then(() => {
        if (contentId) {
            const item = creatorManagedContent.find((entry) => String(entry.id) === String(contentId));
            openCreatorContentForm(item || { id: contentId, text: "", items: [], originalText: "", originalItems: [], custom: false, edited: false, disabled: false });
        }
    }).catch((error) => {
        creatorContentList.innerHTML = '<p class="creator-reports-loading">' + getFriendlyFirebaseError(error) + '</p>';
    });
}

function closeCreatorContent() {
    creatorContentModal.style.display = "none";
    document.body.classList.remove("question-report-open");
    creatorEditingContent = null;
}

function openCreatorContentForm(item = null) {
    const mode = creatorContentGameFilter.value;
    creatorEditingContent = item;
    creatorContentForm.style.display = "block";
    creatorContentFormMode.textContent = GAMES_LIBRARY[mode]?.title || mode;
    creatorContentFormTitle.textContent = item ? "Modifier ce contenu" : "Nouveau contenu";
    creatorContentId.value = item?.id || "";
    creatorContentText.value = item?.text || "";
    creatorRankingItems.value = (item?.items || []).join("\n");
    creatorRankingItemsBox.style.display = mode === "ranking" ? "block" : "none";
    creatorContentEnabled.checked = item ? !item.disabled : true;
    restoreCreatorContentBtn.style.display = item?.edited ? "inline-flex" : "none";
    restoreCreatorContentBtn.textContent = item?.custom ? "Supprimer cet ajout" : "Restaurer le JSON";
    creatorContentForm.scrollIntoView({ behavior: "smooth", block: "start" });
}

function reloadGameContent(mode) {
    const loaders = { ranking: loadRankingsData, guess: loadGuessQuestionsData, likely: loadLikelyQuestionsData, ok: loadOkQuestionsData, greenFlag: loadGreenFlagQuestionsData, princess: loadPrincessQuestionsData, questions: loadCoupleQuestionsData };
    return loaders[mode] ? loaders[mode]() : Promise.resolve();
}

creatorContentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const mode = creatorContentGameFilter.value;
    const text = creatorContentText.value.trim();
    const items = creatorRankingItems.value.split("\n").map((item) => item.trim()).filter(Boolean);
    if (!text || (mode === "ranking" && items.length < 2)) {
        showToast(mode === "ranking" ? "Ajoute au moins deux choix" : "Écris le contenu à enregistrer");
        return;
    }
    const isCustom = !creatorEditingContent;
    const id = creatorEditingContent?.id || ("custom_" + Date.now().toString(36));
    const reference = database.ref("questionContent/" + mode + "/" + getQuestionReportId(mode, id).replace(mode + "_", ""));
    saveCreatorContentBtn.disabled = true;
    saveCreatorContentBtn.textContent = "Enregistrement…";
    reference.transaction((current) => {
        current = current || {};
        const history = current.history || {};
        if (current.text || creatorEditingContent?.originalText) {
            history["v_" + Date.now()] = {
                text: current.text || creatorEditingContent.originalText,
                items: current.items || creatorEditingContent.originalItems || [],
                disabled: current.disabled === true,
                savedAt: Date.now()
            };
        }
        return {
            ...current,
            text,
            items: mode === "ranking" ? items : null,
            disabled: !creatorContentEnabled.checked,
            custom: current.custom === true || isCustom,
            updatedAt: Date.now(),
            updatedBy: currentUser.uid,
            history
        };
    }).then(() => reloadGameContent(mode))
        .then(() => loadCreatorManagedContent(mode))
        .then(() => {
            creatorContentForm.style.display = "none";
            showToast("Contenu Cactus enregistré ✨");
        }).catch((error) => showToast(getFriendlyFirebaseError(error)))
        .finally(() => { saveCreatorContentBtn.disabled = false; saveCreatorContentBtn.textContent = "Enregistrer"; });
});

restoreCreatorContentBtn.addEventListener("click", () => {
    if (!creatorEditingContent || !confirm(creatorEditingContent.custom ? "Supprimer définitivement cet ajout ?" : "Restaurer la version du JSON ?")) return;
    const mode = creatorContentGameFilter.value;
    database.ref("questionContent/" + mode + "/" + creatorEditingContent.id).remove()
        .then(() => reloadGameContent(mode)).then(() => loadCreatorManagedContent(mode))
        .then(() => { creatorContentForm.style.display = "none"; showToast("Version d’origine restaurée"); })
        .catch((error) => showToast(getFriendlyFirebaseError(error)));
});

creatorOpenContentBtn.addEventListener("click", () => openCreatorContent());
closeCreatorContentBtn.addEventListener("click", closeCreatorContent);
creatorContentModal.querySelector("[data-close-creator-content]").addEventListener("click", closeCreatorContent);
closeCreatorContentFormBtn.addEventListener("click", () => { creatorContentForm.style.display = "none"; creatorEditingContent = null; });
creatorContentGameFilter.addEventListener("change", () => { creatorContentForm.style.display = "none"; loadCreatorManagedContent(creatorContentGameFilter.value); });
creatorContentSearch.addEventListener("input", renderCreatorManagedContent);
creatorNewContentBtn.addEventListener("click", () => openCreatorContentForm());

function updateQuestionReportStatus(report, status) {
    database.ref("questionReports/" + report.ownerUid + "/" + report.reportId).update({
        status,
        reviewedAt: Date.now(),
        reviewedBy: currentUser.uid
    }).then(() => {
        report.status = status;
        renderCreatorReports();
        loadCreatorReportsCount();
        showToast(status === "resolved" ? "Signalement marqué comme corrigé" : "Signalement ignoré");
    }).catch((error) => showToast(getFriendlyFirebaseError(error)));
}

creatorOpenReportsBtn.addEventListener("click", openCreatorReports);
closeCreatorReportsBtn.addEventListener("click", closeCreatorReports);
creatorReportsModal.querySelector("[data-close-creator-reports]").addEventListener("click", closeCreatorReports);
[creatorReportsGameFilter, creatorReportsReasonFilter, creatorReportsStatusFilter].forEach((filter) => filter.addEventListener("change", renderCreatorReports));

function normalizeGameSearch(value) {
    return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function filterGamesLibrary() {
    const search = normalizeGameSearch(gamesSearchInput.value);
    let visibleCount = 0;

    allGamesGrid.querySelectorAll("[data-game-card]").forEach((card) => {
        const game = GAMES_LIBRARY[card.dataset.gameKey];
        const categories = String(card.dataset.gameCategory || "").split(" ");
        const searchable = normalizeGameSearch([
            game?.title,
            game?.category,
            game?.description,
            card.textContent
        ].join(" "));
        const matchesCategory = activeGameCategory === "all" || categories.includes(activeGameCategory);
        const matchesSearch = !search || searchable.includes(search);
        const visible = matchesCategory && matchesSearch;
        card.hidden = !visible;
        if (visible) visibleCount++;
    });

    visibleGamesCount.textContent = visibleCount;
    gamesSearchEmptyState.style.display = visibleCount === 0 ? "flex" : "none";
    clearGamesSearchBtn.style.display = gamesSearchInput.value ? "grid" : "none";
}

function resetGamesLibraryFilters() {
    activeGameCategory = "all";
    gamesSearchInput.value = "";
    gameCategoryButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.gameCategory === "all");
    });
    filterGamesLibrary();
}

function openGameDetails(gameKey) {
    const game = GAMES_LIBRARY[gameKey];
    if (!game) return;
    selectedGameKey = gameKey;
    gameDetailsImage.src = game.image;
    gameDetailsCategory.textContent = game.category;
    gameDetailsTitle.textContent = game.title;
    gameDetailsDescription.textContent = game.description;
    gameDetailsModal.style.display = "grid";
    document.body.classList.add("game-details-open");
    startGameFromDetailsBtn.focus();
}

function closeGameDetails() {
    gameDetailsModal.style.display = "none";
    document.body.classList.remove("game-details-open");
}

function updateRecommendedGame() {
    const rotation = ["questions", "guess", "ranking", "likely", "ok", "greenFlag", "princess"];
    const totalGames = currentSpaceData
        ? buildRelationStatistics(currentSpaceData).totalGames
        : 0;
    recommendedGameKey = rotation[totalGames % rotation.length];
    const game = GAMES_LIBRARY[recommendedGameKey];
    recommendedGameTitle.textContent = game.title;
    recommendedGameCopy.textContent = totalGames === 0
        ? "Un moment simple pour commencer à discuter."
        : game.description;
}

gamesSearchInput.addEventListener("input", filterGamesLibrary);
clearGamesSearchBtn.addEventListener("click", () => {
    gamesSearchInput.value = "";
    gamesSearchInput.focus();
    filterGamesLibrary();
});
resetGamesFiltersBtn.addEventListener("click", resetGamesLibraryFilters);
gameCategoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeGameCategory = button.dataset.gameCategory;
        gameCategoryButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        filterGamesLibrary();
    });
});

allGamesGrid.addEventListener("click", (event) => {
    const card = event.target.closest("[data-game-card]");
    if (!card || launchingGameFromDetails) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    openGameDetails(card.dataset.gameKey);
}, true);

recommendedGameBtn.addEventListener("click", () => openGameDetails(recommendedGameKey));
closeGameDetailsBtn.addEventListener("click", closeGameDetails);
gameDetailsModal.querySelector("[data-close-game-details]").addEventListener("click", closeGameDetails);
startGameFromDetailsBtn.addEventListener("click", () => {
    const target = allGamesGrid.querySelector('[data-game-key="' + selectedGameKey + '"]');
    if (!target) return;
    closeGameDetails();
    launchingGameFromDetails = true;
    target.click();
    launchingGameFromDetails = false;
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && gameDetailsModal.style.display !== "none") closeGameDetails();
});

filterGamesLibrary();
updateRecommendedGame();

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

clearReadNotificationsBtn.addEventListener("click", () => {
    clearReadNotifications();
});

notificationFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeNotificationFilter = button.dataset.notificationFilter;
        notificationFilterButtons.forEach((item) => {
            item.classList.toggle("is-active", item === button);
        });
        if (currentSpaceData) {
            renderNotifications(currentSpaceData);
        }
    });
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

profileColorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setProfileAccentColor(button.dataset.profileColor);
    });
});

profileAccentHexInput.addEventListener("input", () => {
    const value = "#" + profileAccentHexInput.value.replace(/[^0-9a-f]/gi, "").slice(0, 6);
    profileAccentHexInput.value = value.slice(1).toUpperCase();

    if (/^#[0-9a-f]{6}$/i.test(value)) {
        setProfileAccentColor(value, false);
    }
});

profileAccentHexInput.addEventListener("blur", () => {
    profileAccentHexInput.value = profileAccentInput.value.slice(1).toUpperCase();
});

let profilePickerState = { h: 145, s: 61, v: 83 };

profileHueInput.addEventListener("input", () => {
    profilePickerState.h = Number(profileHueInput.value);
    profileColorField.style.setProperty("--picker-hue", profilePickerState.h);
    profileHueInput.style.setProperty("--picker-hue", profilePickerState.h);
    setProfileAccentColor(hsvToHex(profilePickerState), true, false);
});

function updateProfileColorFromPointer(event) {
    const rect = profileColorField.getBoundingClientRect();
    const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
    const y = Math.min(Math.max(event.clientY - rect.top, 0), rect.height);
    profilePickerState.s = Math.round((x / rect.width) * 100);
    profilePickerState.v = Math.round((1 - y / rect.height) * 100);
    syncProfileColorCursor();
    setProfileAccentColor(hsvToHex(profilePickerState), true, false);
}

profileColorField.addEventListener("pointerdown", (event) => {
    profileColorField.setPointerCapture(event.pointerId);
    updateProfileColorFromPointer(event);
});

profileColorField.addEventListener("pointermove", (event) => {
    if (profileColorField.hasPointerCapture(event.pointerId)) {
        updateProfileColorFromPointer(event);
    }
});

profileColorField.addEventListener("keydown", (event) => {
    const directions = {
        ArrowLeft: [-2, 0],
        ArrowRight: [2, 0],
        ArrowUp: [0, 2],
        ArrowDown: [0, -2]
    };
    const movement = directions[event.key];
    if (!movement) return;
    event.preventDefault();
    profilePickerState.s = Math.min(100, Math.max(0, profilePickerState.s + movement[0]));
    profilePickerState.v = Math.min(100, Math.max(0, profilePickerState.v + movement[1]));
    syncProfileColorCursor();
    setProfileAccentColor(hsvToHex(profilePickerState), true, false);
});

function setProfileAccentColor(value, synchronizeHex = true, synchronizePicker = true) {
    const color = getSafeProfileColor(value).toUpperCase();
    profileAccentInput.value = color;
    profileAccentValue.textContent = color;
    profileAccentPreview.style.setProperty("--selected-color", color);
    coupleProfileScreen.style.setProperty("--profile-accent", color);

    if (synchronizeHex) {
        profileAccentHexInput.value = color.slice(1);
    }

    if (synchronizePicker) {
        profilePickerState = hexToHsv(color);
        profileHueInput.value = Math.round(profilePickerState.h);
        profileColorField.style.setProperty("--picker-hue", profilePickerState.h);
        profileHueInput.style.setProperty("--picker-hue", profilePickerState.h);
        syncProfileColorCursor();
    }

    profileColorButtons.forEach((button) => {
        const selected = button.dataset.profileColor.toUpperCase() === color;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-checked", selected ? "true" : "false");
    });
}

function syncProfileColorCursor() {
    profileColorCursor.style.left = profilePickerState.s + "%";
    profileColorCursor.style.top = (100 - profilePickerState.v) + "%";
}

function hsvToHex({ h, s, v }) {
    const saturation = s / 100;
    const value = v / 100;
    const chroma = value * saturation;
    const section = h / 60;
    const second = chroma * (1 - Math.abs((section % 2) - 1));
    const offset = value - chroma;
    let rgb = [0, 0, 0];

    if (section < 1) rgb = [chroma, second, 0];
    else if (section < 2) rgb = [second, chroma, 0];
    else if (section < 3) rgb = [0, chroma, second];
    else if (section < 4) rgb = [0, second, chroma];
    else if (section < 5) rgb = [second, 0, chroma];
    else rgb = [chroma, 0, second];

    return "#" + rgb.map((channel) => {
        return Math.round((channel + offset) * 255)
            .toString(16)
            .padStart(2, "0");
    }).join("").toUpperCase();
}

function hexToHsv(hex) {
    const value = parseInt(hex.slice(1), 16);
    const red = ((value >> 16) & 255) / 255;
    const green = ((value >> 8) & 255) / 255;
    const blue = (value & 255) / 255;
    const maximum = Math.max(red, green, blue);
    const minimum = Math.min(red, green, blue);
    const delta = maximum - minimum;
    let hue = 0;

    if (delta) {
        if (maximum === red) hue = 60 * (((green - blue) / delta) % 6);
        else if (maximum === green) hue = 60 * (((blue - red) / delta) + 2);
        else hue = 60 * (((red - green) / delta) + 4);
    }

    if (hue < 0) hue += 360;
    return {
        h: hue,
        s: maximum === 0 ? 0 : (delta / maximum) * 100,
        v: maximum * 100
    };
}

const DEFAULT_PROFILE_AVATAR = "assets/avatars/avatar-1.webp";

function isCactusAvatarPath(value) {
    return /^assets\/avatars\/avatar-(?:[1-9]|1[0-2])\.webp$/.test(value || "");
}

function renderProfileAvatar(container, value, fallback = DEFAULT_PROFILE_AVATAR) {
    const avatar = value || fallback;
    container.replaceChildren();

    if (isCactusAvatarPath(avatar)) {
        const image = document.createElement("img");
        image.src = avatar;
        image.alt = "";
        image.loading = "lazy";
        container.appendChild(image);
        return;
    }

    // Les anciens profils qui utilisaient encore un emoji restent compatibles.
    container.textContent = avatar || fallback;
}

function setSelectedProfileAvatar(value, updatePreview = true) {
    const avatar = isCactusAvatarPath(value) ? value : DEFAULT_PROFILE_AVATAR;
    profileAvatarInput.value = avatar;

    profileAvatarButtons.forEach((button) => {
        const isSelected = button.dataset.profileAvatar === avatar;
        button.classList.toggle("is-selected", isSelected);
        button.setAttribute("role", "radio");
        button.setAttribute("aria-checked", String(isSelected));
    });

    if (updatePreview) {
        renderProfileAvatar(profileMyAvatar, avatar);
    }
}

profileAvatarButtons.forEach((button) => {
    button.addEventListener("click", () => {
        setSelectedProfileAvatar(button.dataset.profileAvatar);
    });
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

    currentRanking = selectFreshGameItem(
        rankings,
        "ranking",
        lastRankingId,
        "rankingChallenges"
    );
    lastRankingId = currentRanking.id;

    loadRanking(currentRanking);
    setGameSkipAvailability("ranking", true, rankings);

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
    setGameSkipAvailability("ranking", false);

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
    if (isCreatorAccount()) loadCreatorReportsCount();
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
    setInlineScreenState(dailyRitualScreen, "loading", {
        title: "Votre rituel se prépare…",
        message: "Cactus choisit votre question du jour."
    });

    ensureDailyChallenge()
        .then(() => database.ref("spaces/" + currentSpaceCode).once("value"))
        .then((snapshot) => {
            currentSpaceData = snapshot.val() || {};
            renderDailyRitual(currentSpaceData);
            setInlineScreenState(dailyRitualScreen, "hidden");
        })
        .catch((error) => {
            console.error("Impossible de charger le rituel", error);
            setInlineScreenState(dailyRitualScreen, "error", {
                title: "Le rituel fait une petite pause",
                message: getFriendlyFirebaseError(error),
                retry: loadDailyRitual
            });
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
        dailyRitualDashboardTitle.textContent = "Rituel complété aujourd’hui";
        dailyRitualDashboardStatus.textContent = "Revenez demain pour continuer votre série";
        dailyRitualCard.classList.add("is-completed");
    } else if (myAnswered) {
        dailyRitualDashboardTitle.textContent = "Ta réponse est envoyée";
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
        if (challenge.status !== "completed") return;
        items.push({
            id: "daily_" + dateKey,
            type: "game",
            icon: "🔥",
            title: "Rituel quotidien complété",
            text: challenge.question || "Une question partagée à deux.",
            timestamp: challenge.completedAt || challenge.createdAt || getTimelineTimestamp(dateKey),
            action: () => showScreen("dailyRitual")
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

        Object.entries(spaceData.dailyTools?.shopping?.items || {}).forEach(([itemId, item]) => {
            if (
                item.createdByUid &&
                item.createdByUid !== currentUser.uid &&
                typeof item.createdAt === "number"
            ) {
                notifications.push({
                    id: "shopping_" + itemId + "_" + item.createdAt,
                    type: "dailyTools",
                    icon: "shopping",
                    title: (item.createdByPseudo || "Votre partenaire") + " a ajouté une course",
                    message: item.name || "Nouvel article",
                    timestamp: item.createdAt,
                    target: { kind: "shopping", itemId }
                });
            }
        });

        [
            ["tasks", "task", "cactusIconTasks", "Nouvelle tâche partagée", "tasks"],
            ["reminders", "reminder", "cactusIconBell", "Nouveau rappel partagé", "reminders"],
            ["importantDates", "importantDate", "cactusIconCalendar", "Nouvelle date importante", "importantDates"]
        ].forEach(([path, kind, icon, title, screen]) => {
            Object.entries(spaceData.dailyTools?.[path] || {}).forEach(([itemId, item]) => {
                if (item.createdByUid && item.createdByUid !== currentUser.uid && typeof item.createdAt === "number") {
                    notifications.push({
                        id: kind + "_" + itemId + "_" + item.createdAt,
                        type: "dailyTools",
                        icon,
                        title,
                        message: item.title || "Nouvel élément",
                        timestamp: item.createdAt,
                        target: { kind, itemId, screen }
                    });
                }
            });
        });

        Object.entries(spaceData.dailyTools?.reminders || {}).forEach(([itemId, item]) => {
            const scheduledAt = getReminderTimestamp(item);
            const concernsMe = !item.target || item.target === "both" || item.target === currentUser.uid;
            if (concernsMe && scheduledAt <= Date.now() && scheduledAt > Date.now() - 7 * 86400000) {
                notifications.push({
                    id: "reminder_due_" + itemId + "_" + scheduledAt,
                    type: "dailyTools",
                    icon: "cactusIconBell",
                    title: "Rappel Cactus",
                    message: item.title || "Un rappel vous attend",
                    timestamp: scheduledAt,
                    target: { kind: "reminder", itemId, screen: "reminders" }
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

function getNotificationState(spaceData) {
    const state = spaceData.notificationReads?.[currentUser.uid] || {};
    return {
        lastReadAt: state.lastReadAt || 0,
        readIds: state.readIds || {},
        dismissedIds: state.dismissedIds || {}
    };
}

function isNotificationRead(notification, state) {
    return notification.timestamp <= state.lastReadAt || Boolean(state.readIds[notification.id]);
}

function getVisibleNotifications(spaceData) {
    const state = getNotificationState(spaceData);
    return buildNotifications(spaceData).filter((notification) => !state.dismissedIds[notification.id]);
}

function updateNotificationsBadge(spaceData) {
    if (!currentUser || !dashboardNotificationsBadge) {
        return;
    }

    const state = getNotificationState(spaceData);
    const unreadCount = getVisibleNotifications(spaceData)
        .filter((notification) => !isNotificationRead(notification, state)).length;

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
        setInlineScreenState(notificationsScreen, "hidden");
        renderNotifications(currentSpaceData);
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode)
        .once("value")
        .then((snapshot) => {
            currentSpaceData = snapshot.val() || {};
            setInlineScreenState(notificationsScreen, "hidden");
            renderNotifications(currentSpaceData);
        })
        .catch((error) => {
            console.error("Impossible de charger les notifications", error);
            setInlineScreenState(notificationsScreen, "error", {
                title: "Les notifications ne répondent pas",
                message: getFriendlyFirebaseError(error),
                retry: loadNotifications
            });
        });
}

function renderNotifications(spaceData) {
    const state = getNotificationState(spaceData);
    const allNotifications = getVisibleNotifications(spaceData);
    const unreadCount = allNotifications.filter((notification) => {
        return !isNotificationRead(notification, state);
    }).length;
    const notifications = allNotifications.filter((notification) => {
        const isRead = isNotificationRead(notification, state);
        if (activeNotificationFilter === "unread") return !isRead;
        if (activeNotificationFilter === "games") return ["answer", "game"].includes(notification.type);
        if (activeNotificationFilter === "moments") return !["answer", "game"].includes(notification.type);
        return true;
    });

    notificationsUnreadCount.textContent = unreadCount + " nouvelle" + (unreadCount > 1 ? "s" : "");
    notificationsUnreadFilterCount.textContent = unreadCount;
    markNotificationsReadBtn.disabled = unreadCount === 0;
    clearReadNotificationsBtn.disabled = allNotifications.length === unreadCount;
    notificationsList.innerHTML = "";
    notificationsEmptyState.style.display = notifications.length === 0 ? "flex" : "none";

    const emptyTitle = notificationsEmptyState.querySelector("strong");
    const emptyCopy = notificationsEmptyState.querySelector("p");
    if (activeNotificationFilter === "unread") {
        emptyTitle.textContent = "Tout est lu";
        emptyCopy.textContent = "Aucune nouvelle activité ne vous attend.";
    } else if (activeNotificationFilter !== "all") {
        emptyTitle.textContent = "Rien dans cette catégorie";
        emptyCopy.textContent = "Les prochaines activités apparaîtront ici.";
    } else {
        emptyTitle.textContent = "Tout est calme";
        emptyCopy.textContent = "Les nouvelles réponses et activités apparaîtront ici.";
    }

    notifications.forEach((notification) => {
        const isRead = isNotificationRead(notification, state);
        const card = document.createElement("article");
        card.className = "notification-card" +
            (!isRead ? " is-unread" : "");

        const icon = document.createElement("span");
        icon.className = "notification-icon";
        icon.appendChild(
            createCactusUiIcon(getNotificationSymbol(notification.type), "cactus-secondary-icon")
        );

        const copy = document.createElement("div");
        const title = document.createElement("strong");
        title.textContent = notification.title;
        const message = document.createElement("p");
        message.textContent = notification.message;
        const date = document.createElement("small");
        date.textContent = formatNotificationDate(notification.timestamp);
        const actions = document.createElement("div");
        actions.className = "notification-card-actions";
        const openButton = document.createElement("button");
        openButton.type = "button";
        openButton.className = "notification-open-btn";
        openButton.setAttribute("aria-label", "Ouvrir : " + notification.title);
        openButton.textContent = "›";
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "notification-delete-btn";
        deleteButton.setAttribute("aria-label", "Supprimer cette notification");
        deleteButton.textContent = "×";

        copy.append(title, message, date);
        actions.append(openButton, deleteButton);
        card.append(icon, copy, actions);
        openButton.addEventListener("click", () => openNotification(notification));
        deleteButton.addEventListener("click", () => dismissNotification(notification));
        notificationsList.appendChild(card);
    });
}

function getNotificationSymbol(type) {
    const symbols = {
        answer: "cactusIconChat",
        game: "cactusIconGame",
        garden: "cactusIconGarden",
        dailyTools: "cactusIconShopping",
        achievement: "cactusIconTrophy"
    };

    return symbols[type] || "cactusIconBell";
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
        .ref("spaces/" + currentSpaceCode + "/notificationReads/" + currentUser.uid + "/readIds/" + notification.id)
        .set(notification.timestamp || Date.now());

    if (target.kind === "game") {
        openGameNotification(target);
    } else if (target.kind === "daily") {
        showScreen("dailyRitual");
    } else if (target.kind === "garden") {
        loadGarden();
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
                    showScreen("dailyTools");
                    showToast("Ce carnet n’existe plus");
                }
            });
    } else if (target.kind === "shopping") {
        showScreen("shopping");
    } else if (["task", "reminder", "importantDate"].includes(target.kind)) {
        showScreen(target.screen || "dailyTools");
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
        .update({ lastReadAt: Date.now(), readIds: null })
        .then(() => showToast("Notifications marquées comme lues"));
}

function dismissNotification(notification) {
    if (!currentSpaceCode || !currentUser) return;

    database
        .ref("spaces/" + currentSpaceCode + "/notificationReads/" + currentUser.uid + "/dismissedIds/" + notification.id)
        .set(Date.now())
        .then(() => showToast("Notification supprimée"));
}

function clearReadNotifications() {
    if (!currentSpaceData || !currentSpaceCode || !currentUser) return;

    const state = getNotificationState(currentSpaceData);
    const updates = {};
    getVisibleNotifications(currentSpaceData).forEach((notification) => {
        if (isNotificationRead(notification, state)) {
            updates[notification.id] = Date.now();
        }
    });

    if (Object.keys(updates).length === 0) {
        showToast("Aucune notification lue à effacer");
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode + "/notificationReads/" + currentUser.uid + "/dismissedIds")
        .update(updates)
        .then(() => showToast("Notifications lues effacées"));
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

    setInlineScreenState(historyScreen, "loading", {
        title: "Votre histoire se rassemble…",
        message: "Cactus retrouve vos souvenirs, jeux et succès."
    });

    return database
        .ref("spaces/" + currentSpaceCode)
        .once("value")
        .then((snapshot) => {
            const spaceData = snapshot.val() || {};
            currentSpaceData = spaceData;
            renderMemories(spaceData.memories || {}, focusedMemoryId);
            buildUnifiedTimeline(spaceData);
            setInlineScreenState(historyScreen, "hidden");
        })
        .catch((error) => {
            console.error("Chargement de la chronologie impossible", error);
            setInlineScreenState(historyScreen, "error", {
                title: "Votre histoire ne peut pas être chargée",
                message: getFriendlyFirebaseError(error),
                retry: () => loadMemories(focusedMemoryId)
            });
        });
}

function getTimelineTimestamp(dateValue, fallback = 0) {
    if (typeof dateValue === "number") return dateValue;
    if (typeof dateValue === "string" && dateValue) {
        const parsed = new Date(dateValue + (dateValue.includes("T") ? "" : "T12:00:00")).getTime();
        if (Number.isFinite(parsed)) return parsed;
    }
    return fallback || 0;
}

function buildUnifiedTimeline(spaceData) {
    const items = [];
    Object.entries(spaceData.memories || {}).forEach(([memoryId, memory]) => {
        items.push({
            id: "memory_" + memoryId,
            type: "memory",
            icon: memory.emoji || "💚",
            title: memory.title || "Souvenir à deux",
            text: memory.text || "",
            timestamp: getTimelineTimestamp(memory.memoryDate, memory.createdAt),
            favorite: Boolean(memory.favorite),
            action: () => {
                const card = memoriesTimeline.querySelector('[data-memory-id="' + memoryId + '"]');
                card?.scrollIntoView({ behavior: "smooth", block: "center" });
                card?.classList.add("is-focused");
            }
        });
    });

    relationStatsModes.forEach((mode) => {
        Object.entries(spaceData[mode.path] || {}).forEach(([challengeId, challenge]) => {
            if (challenge.status !== "completed") return;
            items.push({
                id: "game_" + mode.key + "_" + challengeId,
                type: "game",
                icon: mode.icon,
                title: mode.label + " terminé",
                text: challenge.question || challenge.title || "Une partie ajoutée à votre histoire.",
                timestamp: challenge.completedAt || challenge.createdAt || 0,
                mode: mode.key,
                challengeId,
                action: () => openHistoryMode(mode.key, challengeId)
            });
        });
    });

    Object.entries(spaceData.stats?.achievements || {}).forEach(([achievementId, value]) => {
        const achievement = ACHIEVEMENTS.find((entry) => entry.id === achievementId);
        const timestamp = typeof value === "object" ? value.unlockedAt : 0;
        if (!achievement || !timestamp) return;
        items.push({
            id: "achievement_" + achievementId,
            type: "achievement",
            icon: achievement.icon || "🏆",
            title: achievement.title,
            text: achievement.description,
            timestamp,
            action: openAchievements
        });
    });

    if (spaceData.story?.startDate) {
        items.push({
            id: "milestone_start",
            type: "milestone",
            icon: "💞",
            title: "Le début de votre histoire",
            text: "Le premier chapitre de votre aventure à deux.",
            timestamp: getTimelineTimestamp(spaceData.story.startDate),
            action: openStoryPage
        });
    }

    unifiedTimelineItems = items.filter((item) => item.timestamp > 0).sort((a, b) => b.timestamp - a.timestamp);
    historyTotalCount.textContent = unifiedTimelineItems.length;
    const selectedYear = timelineYearFilter.value;
    const years = [...new Set(unifiedTimelineItems.map((item) => new Date(item.timestamp).getFullYear()))].sort((a, b) => b - a);
    timelineYearFilter.innerHTML = '<option value="all">Toutes les années</option>' + years.map((year) => '<option value="' + year + '">' + year + '</option>').join("");
    timelineYearFilter.value = years.includes(Number(selectedYear)) ? selectedYear : "all";
    renderUnifiedTimeline();
}

function renderUnifiedTimeline() {
    const search = normalizeGameSearch(timelineSearchInput.value);
    const year = timelineYearFilter.value;
    const filtered = unifiedTimelineItems.filter((item) => {
        return (activeTimelineType === "all" || item.type === activeTimelineType) &&
            (year === "all" || String(new Date(item.timestamp).getFullYear()) === year) &&
            (!search || normalizeGameSearch(item.title + " " + item.text).includes(search));
    });

    unifiedTimeline.replaceChildren();
    unifiedTimelineEmpty.style.display = filtered.length === 0 ? "flex" : "none";
    unifiedTimelineCount.textContent = filtered.length + " moment" + (filtered.length > 1 ? "s" : "");
    let displayedYear = null;
    filtered.slice(0, 200).forEach((item) => {
        const itemYear = new Date(item.timestamp).getFullYear();
        if (itemYear !== displayedYear) {
            displayedYear = itemYear;
            const yearHeading = document.createElement("h3");
            yearHeading.className = "unified-timeline-year";
            yearHeading.textContent = itemYear;
            unifiedTimeline.appendChild(yearHeading);
        }
        const card = document.createElement("button");
        card.type = "button";
        card.className = "unified-timeline-card type-" + item.type + (item.favorite ? " is-favorite" : "");
        const marker = document.createElement("span");
        marker.className = "unified-timeline-marker";
        const timelineIconMap = { game: "cactusIconGame", achievement: "cactusIconTrophy", milestone: "cactusIconStory" };
        if (timelineIconMap[item.type]) marker.appendChild(createCactusUiIcon(timelineIconMap[item.type], "timeline-cactus-icon"));
        else marker.textContent = item.icon;
        const copy = document.createElement("span");
        const date = document.createElement("small"); date.textContent = new Date(item.timestamp).toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
        const title = document.createElement("strong"); title.textContent = item.title;
        const text = document.createElement("p"); text.textContent = item.text;
        copy.append(date, title, text);
        const arrow = document.createElement("b"); arrow.textContent = "›"; arrow.setAttribute("aria-hidden", "true");
        card.append(marker, copy, arrow);
        if (item.action) card.addEventListener("click", item.action);
        unifiedTimeline.appendChild(card);
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
    historyPersonalCount.textContent = entries.length;
    historyFavoritesCount.textContent = entries.filter(([, memory]) => memory.favorite).length;
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
        editBtn.textContent = "Modifier";
        editBtn.addEventListener("click", () => openMemoryForm(memoryId, memory));
        const deleteBtn = document.createElement("button");
        deleteBtn.type = "button";
        deleteBtn.title = "Supprimer";
        deleteBtn.setAttribute("aria-label", "Supprimer ce souvenir");
        deleteBtn.textContent = "×";
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

    setInlineScreenState(gardenScreen, "loading", {
        title: "Le jardin prend forme…",
        message: "Nous remettons chaque élément à sa place."
    });

    database
        .ref("spaces/" + currentSpaceCode)
        .once("value")
        .then((snapshot) => {
            renderGarden(snapshot.val() || {});
            setInlineScreenState(gardenScreen, "hidden");
        })
        .catch((error) => {
            console.error("Impossible de charger le jardin", error);
            setInlineScreenState(gardenScreen, "error", {
                title: "Le jardin ne répond pas",
                message: getFriendlyFirebaseError(error),
                retry: loadGarden
            });
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
    updateNotebookEditorMeta();
    notebookSaveStatus.textContent = "Modification…";

    saveNotebookTimeout = setTimeout(() => {
        saveNotebookContent();
    }, 700);
});

function saveNotebookContent() {
    if (!currentNotebookId) {
        return Promise.resolve();
    }

    notebookSaveStatus.textContent = "Enregistrement…";
    return database
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
        })
        .then(() => {
            notebookSaveStatus.textContent = "Enregistré";
        })
        .catch((error) => {
            console.error("Enregistrement du carnet impossible", error);
            notebookSaveStatus.textContent = "Non enregistré";
        });
}

function updateNotebookEditorMeta() {
    const text = notebookEditor.textContent.replace(/[☐☑]/g, " ").trim();
    const words = text ? text.split(/\s+/u).filter(Boolean).length : 0;
    notebookWordCount.textContent = words + " mot" + (words > 1 ? "s" : "");
    notebookEditor.classList.toggle("is-empty", text.length === 0);
}

function sanitizeNotebookHtml(sourceHtml) {
    const template = document.createElement("template");
    template.innerHTML = sourceHtml || "";
    const allowedTags = new Set([
        "P", "DIV", "BR", "STRONG", "B", "EM", "I", "U", "SPAN",
        "UL", "OL", "LI"
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
        const textAlign = element.style.textAlign;
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
        if (["left", "center", "right", "justify"].includes(textAlign)) {
            element.style.textAlign = textAlign;
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

            const sanitizedContent = sanitizeNotebookHtml(content || "");
            const plainContent = sanitizedContent
                .replace(/<[^>]+>/g, " ")
                .replace(/&nbsp;/g, " ")
                .replace(/\s+/g, " ")
                .trim();
            notebookEditor.innerHTML = /^Écris ici\.{3}$/i.test(plainContent)
                ? ""
                : sanitizedContent;

            restoreCheckboxes();
            updateNotebookEditorMeta();
            notebookSaveStatus.textContent = "Enregistré";
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
    updateNotebookEditorMeta();
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

    guessQuestions = await applyCreatorContent("guess", data);

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
    setGameSkipAvailability("guess", false);
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

    if (
        currentSpaceData &&
        buildRelationStatistics(currentSpaceData).totalGames === 0
    ) {
        renderDashboardActivity({
            kicker: "Premier pas",
            icon: "🎮",
            title: "Lancez votre première partie",
            subtitle: "Questions est idéal pour commencer",
            action: () => {
                renderGameInbox();
                showScreen("allGames");
            }
        });
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
    updateRecommendedGame();
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
        icon.appendChild(createCactusUiIcon(getDashboardActivitySymbol(activity.icon)));

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
        activityIcon.replaceChildren(
            createCactusUiIcon(getDashboardActivitySymbol(activity.icon))
        );
    }

    activityBox.onclick = activity.action || null;
    activityBox.classList.toggle("is-actionable", Boolean(activity.action));
    activityBox.style.display = "grid";
}

function createCactusUiIcon(symbolId, className = "") {
    const svgNamespace = "http://www.w3.org/2000/svg";
    const xlinkNamespace = "http://www.w3.org/1999/xlink";
    const svg = document.createElementNS(svgNamespace, "svg");
    const use = document.createElementNS(svgNamespace, "use");

    svg.setAttribute("class", "cactus-ui-icon" + (className ? " " + className : ""));
    svg.setAttribute("width", "30");
    svg.setAttribute("height", "30");
    svg.setAttribute("aria-hidden", "true");
    use.setAttribute("href", "#" + symbolId);
    use.setAttributeNS(xlinkNamespace, "xlink:href", "#" + symbolId);
    svg.appendChild(use);

    return svg;
}

function getDashboardActivitySymbol(icon) {
    if (icon === "✨" || icon === "⭐") {
        return "cactusIconStar";
    }

    if (icon === "🌱" || icon === "🌿") {
        return "cactusIconSeed";
    }

    if (icon === "🪴") {
        return "cactusIconGarden";
    }

    return "cactusIconGame";
}

function installSecondaryCactusIcons() {
    const replaceTargets = [
        ["#historyBtn", "cactusIconMemories"],
        ["#settingsBtn", "cactusIconSettings"],
        ["#gardenBtn", "cactusIconGarden"],
        ["#unifiedTimelineEmpty > span", "cactusIconMemories"],
        ["#memoriesEmptyState > span", "cactusIconStory"],
        [".stats-summary-games > span", "cactusIconGame"],
        [".stats-summary-answers > span", "cactusIconChat"],
        [".stats-summary-compatibility > span", "cactusIconCompatibility"],
        [".stats-summary-days > span", "cactusIconCalendar"],
        [".stats-records-grid article:nth-child(1) > span", "cactusIconTrophy"],
        [".stats-records-grid article:nth-child(2) > span", "cactusIconSeed"],
        [".stats-records-grid article:nth-child(3) > span", "cactusIconStar"],
        ["#statsEmptyState > span", "cactusIconStats"],
        [".notifications-overview > div > span", "cactusIconBell"],
        ["#notificationsEmptyState > span", "cactusIconBell"],
        ["#dailyWaitingState > span", "cactusIconHeart"],
        ["#gamesSearchEmptyState > span", "cactusIconGame"],
        [".couple-profile-header > span", "cactusIconCouple"],
        [".couple-profile-summary article:nth-child(1) > span", "cactusIconStar"],
        [".couple-profile-summary article:nth-child(2) > span", "cactusIconCompatibility"],
        [".couple-profile-summary article:nth-child(3) > span", "cactusIconMemories"],
        [".couple-profile-summary article:nth-child(4) > span", "cactusIconGame"],
        [".profile-form-heading > span", "cactusIconTools"],
        [".settings-panel:nth-of-type(1) .settings-panel-heading > span", "cactusIconUser"],
        ["#themeSettingIcon", "cactusIconTheme"],
        [".notifications-preferences .settings-panel-heading > span", "cactusIconBell"],
        [".account-security-panel .settings-panel-heading > span", "cactusIconShield"],
        [".creator-tools-panel .settings-panel-heading > span", "cactusIconTools"]
    ];

    replaceTargets.forEach(([selector, symbolId]) => {
        document.querySelectorAll(selector).forEach((element) => {
            element.replaceChildren(createCactusUiIcon(symbolId, "cactus-secondary-icon"));
        });
    });

    const decorateTargets = [
        ['[data-timeline-type="memory"]', "cactusIconHeart"],
        ['[data-timeline-type="game"]', "cactusIconGame"],
        ['[data-timeline-type="achievement"]', "cactusIconTrophy"],
        ['[data-timeline-type="milestone"]', "cactusIconStory"],
        ['[data-history-mode="stats"]', "cactusIconStats"],
        ['[data-history-mode="ranking"]', "cactusIconTrophy"],
        ['[data-history-mode="guess"]', "cactusIconChat"],
        ['[data-history-mode="questions"]', "cactusIconChat"],
        ['[data-history-mode="likely"]', "cactusIconGame"],
        ['[data-history-mode="ok"]', "cactusIconShield"],
        ['[data-history-mode="greenFlag"]', "cactusIconGarden"],
        ['[data-history-mode="princess"]', "cactusIconStar"]
    ];

    decorateTargets.forEach(([selector, symbolId]) => {
        document.querySelectorAll(selector).forEach((element) => {
            const label = element.textContent
                .replace(/^[^\p{L}\p{N}]+/u, "")
                .trim();
            element.replaceChildren(
                createCactusUiIcon(symbolId, "cactus-secondary-icon"),
                document.createTextNode(label)
            );
        });
    });

    const dailyStreak = document.querySelector(".daily-ritual-header > span");
    if (dailyStreak) {
        Array.from(dailyStreak.childNodes).forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.remove();
            }
        });
        dailyStreak.prepend(createCactusUiIcon("cactusIconFlame", "cactus-secondary-icon"));
    }
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

    const randomQuestion = selectFreshGameItem(
        likelyQuestions,
        "likely",
        currentLikelyQuestion?.id,
        "likelyChallenges"
    );

    currentLikelyQuestion = randomQuestion;
    currentLikelyId = randomQuestion.id;

    likelyQuestionText.textContent =
        randomQuestion.question;

    setGameSkipAvailability("likely", true, likelyQuestions);

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
    setGameSkipAvailability("likely", false);
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

    currentOkQuestion = selectFreshGameItem(
        okQuestions,
        "ok",
        currentOkQuestion?.id,
        "okChallenges"
    );

    currentOkId = currentOkQuestion.id;

    okQuestionText.textContent =
        currentOkQuestion.question;

    setGameSkipAvailability("ok", true, okQuestions);

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
    setGameSkipAvailability("ok", false);
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
    greenFlagQuestions = await applyCreatorContent("greenFlag", await response.json());

    console.log("Questions Green Flag chargées :", greenFlagQuestions);
}

loadGreenFlagQuestionsData();

function startGreenFlagGame() {
    if (!greenFlagQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    currentGreenFlagQuestion = selectFreshGameItem(
        greenFlagQuestions,
        "greenFlag",
        currentGreenFlagQuestion?.id,
        "greenFlagChallenges"
    );

    currentGreenFlagId = currentGreenFlagQuestion.id;

    greenFlagQuestionText.textContent =
        currentGreenFlagQuestion.question;

    setGameSkipAvailability("greenFlag", true, greenFlagQuestions);

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
    setGameSkipAvailability("greenFlag", false);
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
    princessQuestions = await applyCreatorContent("princess", await response.json());

    console.log("Questions Princess Treatment chargées :", princessQuestions);
}

loadPrincessQuestionsData();

async function startPrincessGame() {
    if (!princessQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    currentPrincessQuestion = selectFreshGameItem(
        princessQuestions,
        "princess",
        currentPrincessQuestion?.id,
        "princessChallenges"
    );

    currentPrincessId =
        currentPrincessQuestion.id;

    princessQuestionText.textContent =
        currentPrincessQuestion.question;

    setGameSkipAvailability("princess", true, princessQuestions);

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
    setGameSkipAvailability("princess", false);

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
    const response = await fetch("data/questions.json?v=42");
    coupleQuestions = await applyCreatorContent("questions", await response.json());

    console.log("Questions chargées :", coupleQuestions);
}

coupleQuestionsLoadPromise = loadCoupleQuestionsData();

function startQuestionsGame() {
    if (!coupleQuestions.length) {
        alert("Questions en cours de chargement...");
        return;
    }

    currentCoupleQuestion = selectFreshGameItem(
        coupleQuestions,
        "questions",
        currentCoupleQuestion?.id,
        "questionsChallenges"
    );

    currentCoupleQuestionId =
        currentCoupleQuestion.id;

    questionsQuestionText.textContent =
        currentCoupleQuestion.question;

    questionsAnswerInput.value = "";

    setGameSkipAvailability("questions", true, coupleQuestions);

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
    setGameSkipAvailability("questions", false);
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

function showAppLoading(title = "Préparation de votre coin…", message = "Vos souvenirs et vos jeux arrivent.") {
    appStateRetryAction = null;
    appStateOverlay.hidden = false;
    appStateOverlay.classList.remove("is-error");
    appStateVisual.className = "app-state-visual is-loading";
    appStateVisual.textContent = "🌵";
    appStateEyebrow.textContent = "Cactus se réveille";
    appStateTitle.textContent = title;
    appStateMessage.textContent = message;
    appStateRetryBtn.style.display = "none";
}

function showAppError(error, retryAction) {
    appStateRetryAction = typeof retryAction === "function" ? retryAction : null;
    appStateOverlay.hidden = false;
    appStateOverlay.classList.add("is-error");
    appStateVisual.className = "app-state-visual";
    appStateVisual.textContent = "🌵";
    appStateEyebrow.textContent = "Petit contretemps";
    appStateTitle.textContent = "Cactus n’a pas réussi à charger";
    appStateMessage.textContent = getFriendlyFirebaseError(error);
    appStateRetryBtn.style.display = appStateRetryAction ? "inline-flex" : "none";
}

function hideAppState() {
    appStateOverlay.hidden = true;
    appStateRetryAction = null;
}

function setInlineScreenState(screen, type, options = {}) {
    if (!screen) return;
    let state = screen.querySelector(":scope > .inline-screen-state");

    if (type === "hidden") {
        state?.remove();
        screen.removeAttribute("aria-busy");
        return;
    }

    if (!state) {
        state = document.createElement("section");
        state.className = "inline-screen-state";
        state.setAttribute("aria-live", "polite");
        screen.prepend(state);
    }

    const isLoading = type === "loading";
    screen.setAttribute("aria-busy", String(isLoading));
    state.className = "inline-screen-state is-" + type;
    state.replaceChildren();

    const visual = document.createElement("span");
    visual.textContent = isLoading ? "🌵" : "🪴";
    const title = document.createElement("strong");
    title.textContent = options.title || (isLoading ? "Chargement en cours…" : "Impossible de charger cet espace");
    const message = document.createElement("p");
    message.textContent = options.message || (isLoading ? "Cactus rassemble vos contenus." : "Vérifiez votre connexion puis réessayez.");
    state.append(visual, title, message);

    if (!isLoading && typeof options.retry === "function") {
        const retry = document.createElement("button");
        retry.type = "button";
        retry.textContent = "Réessayer";
        retry.addEventListener("click", options.retry, { once: true });
        state.appendChild(retry);
    }
}

appStateRetryBtn.addEventListener("click", () => {
    if (!appStateRetryAction) return;
    const retry = appStateRetryAction;
    showAppLoading("Nouvelle tentative…", "Cactus se reconnecte à votre espace.");
    retry();
});

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
    showScreen("historyDetail");
    setInlineScreenState(historyDetailScreen, "loading", {
        title: "Ouverture de vos souvenirs…",
        message: "Cactus rassemble les parties de ce mode."
    });

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
                setInlineScreenState(historyDetailScreen, "hidden");
                historyDetailList.innerHTML =
                    '<div class="empty-text"><span>📖</span><strong>Aucun souvenir pour ce jeu</strong><p>Terminez une première partie pour la retrouver ici.</p></div>';

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

            setInlineScreenState(historyDetailScreen, "hidden");

            if (focusedChallengeId) {
                const focusedIndex = currentHistoryItems.findIndex((item) => {
                    return item._challengeId === focusedChallengeId;
                });

                if (focusedIndex >= 0) {
                    openHistoryItem(focusedIndex);
                }
            }
        })
        .catch((error) => {
            console.error("Impossible de charger cet historique", error);
            setInlineScreenState(historyDetailScreen, "error", {
                title: "Les souvenirs ne répondent pas",
                message: getFriendlyFirebaseError(error),
                retry: () => openHistoryMode(mode, focusedChallengeId)
            });
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
    setInlineScreenState(achievementsScreen, "loading", {
        title: "Recherche de vos trophées…",
        message: "Cactus vérifie vos dernières réussites."
    });
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
                setInlineScreenState(achievementsScreen, "hidden");

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
            achievementsLoadingState.style.display = "none";
            setInlineScreenState(achievementsScreen, "error", {
                title: "Les succès restent cachés",
                message: getFriendlyFirebaseError(error),
                retry: openAchievements
            });
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
    setInlineScreenState(statsScreen, "loading", {
        title: "Calcul de votre complicité…",
        message: "Cactus rassemble vos réponses et vos parties."
    });

    statsLoadingState.style.display = "block";
    statsLoadingState.textContent = "Calcul de vos souvenirs…";
    statsContent.style.display = "none";

    if (currentSpaceData) {
        renderRelationStats(buildRelationStatistics(currentSpaceData));
        setInlineScreenState(statsScreen, "hidden");
        return;
    }

    database
        .ref("spaces/" + currentSpaceCode)
        .once("value")
        .then((snapshot) => {
            const spaceData = snapshot.val() || {};
            currentSpaceData = spaceData;
            renderRelationStats(buildRelationStatistics(spaceData));
            setInlineScreenState(statsScreen, "hidden");
        })
        .catch((error) => {
            console.error("Impossible de charger les statistiques", error);
            statsLoadingState.style.display = "none";
            setInlineScreenState(statsScreen, "error", {
                title: "Les statistiques restent en pause",
                message: getFriendlyFirebaseError(error),
                retry: openRelationStats
            });
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

const CACTUS_ACCESSORY_CATALOG = [
    { id: "flowerHat", name: "Chapeau fleuri", slot: "head", cost: 120, image: "assets/cactus-accessories/flower-hat.webp" },
    { id: "partyHat", name: "Chapeau de fête", slot: "head", cost: 90, image: "assets/cactus-accessories/party-hat.webp" },
    { id: "goldCrown", name: "Couronne cœur", slot: "head", cost: 300, image: "assets/cactus-accessories/gold-crown.webp" },
    { id: "roundGlasses", name: "Lunettes dorées", slot: "face", cost: 150, image: "assets/cactus-accessories/round-glasses.webp" },
    { id: "heartNecklace", name: "Collier cœur", slot: "neck", cost: 180, image: "assets/cactus-accessories/heart-necklace.webp" },
    { id: "pinkBow", name: "Nœud corail", slot: "neck", cost: 110, image: "assets/cactus-accessories/pink-bow.webp" }
];

const CACTUS_ACCESSORY_SLOTS = {
    head: cactusHeadAccessory,
    face: cactusFaceAccessory,
    neck: cactusNeckAccessory
};

function renderEquippedCactusAccessories(wardrobe = {}) {
    const equipped = wardrobe.equipped || {};

    Object.entries(CACTUS_ACCESSORY_SLOTS).forEach(([slot, container]) => {
        if (!container) return;

        const item = CACTUS_ACCESSORY_CATALOG.find((entry) => {
            return entry.id === equipped[slot] && entry.slot === slot;
        });
        container.replaceChildren();
        container.classList.toggle("is-equipped", Boolean(item));
        delete container.dataset.accessoryId;

        if (item) {
            const image = document.createElement("img");
            image.src = item.image;
            image.alt = "";
            container.dataset.accessoryId = item.id;
            container.appendChild(image);
        }
    });
}

function renderCactusWardrobe(spaceData = {}) {
    const seeds = Number(spaceData.stats?.seeds) || 0;
    const wardrobe = spaceData.cactusWardrobe || {};
    const owned = wardrobe.owned || {};
    const equipped = wardrobe.equipped || {};

    renderEquippedCactusAccessories(wardrobe);
    cactusWardrobeSeeds.textContent = seeds;
    cactusWardrobeGrid.replaceChildren();

    CACTUS_ACCESSORY_CATALOG.forEach((item) => {
        const isOwned = Boolean(owned[item.id]);
        const isEquipped = equipped[item.slot] === item.id;
        const card = document.createElement("article");
        card.className = "cactus-wardrobe-card" +
            (isOwned ? " is-owned" : "") +
            (isEquipped ? " is-equipped" : "");

        const preview = document.createElement("div");
        preview.className = "cactus-wardrobe-preview";
        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;
        image.loading = "lazy";
        preview.appendChild(image);

        const name = document.createElement("strong");
        name.textContent = item.name;
        const slot = document.createElement("small");
        slot.textContent = item.slot === "head" ? "Tête" :
            item.slot === "face" ? "Visage" : "Cou";

        const action = document.createElement("button");
        action.type = "button";
        if (!isOwned) {
            action.textContent = "Acheter · " + item.cost + " graines";
            action.disabled = seeds < item.cost;
            action.addEventListener("click", () => buyCactusAccessory(item));
        } else {
            action.textContent = isEquipped ? "Équipé ✓" : "Équiper";
            action.className = isEquipped ? "is-equipped" : "";
            action.addEventListener("click", () => equipCactusAccessory(item, !isEquipped));
        }

        card.append(preview, name, slot, action);
        cactusWardrobeGrid.appendChild(card);
    });
}

function buyCactusAccessory(item) {
    if (!currentSpaceCode || !currentUser) return;

    database.ref("spaces/" + currentSpaceCode).transaction((spaceData) => {
        if (!spaceData) return;

        spaceData.stats = spaceData.stats || {};
        spaceData.cactusWardrobe = spaceData.cactusWardrobe || {};
        spaceData.cactusWardrobe.owned = spaceData.cactusWardrobe.owned || {};
        spaceData.cactusWardrobe.equipped = spaceData.cactusWardrobe.equipped || {};

        if (spaceData.cactusWardrobe.owned[item.id]) return;
        const seeds = Number(spaceData.stats.seeds) || 0;
        if (seeds < item.cost) return;

        spaceData.stats.seeds = seeds - item.cost;
        spaceData.cactusWardrobe.owned[item.id] = {
            purchasedAt: Date.now(),
            purchasedBy: currentUser.uid
        };
        spaceData.cactusWardrobe.equipped[item.slot] = item.id;
        return spaceData;
    }).then((result) => {
        if (!result.committed) {
            showToast("Pas assez de graines ou accessoire déjà acheté");
            return;
        }
        showToast(item.name + " acheté et équipé ✨");
        renderCactusWardrobe(result.snapshot.val() || {});
    }).catch((error) => {
        console.error("Achat de l’accessoire impossible", error);
        showToast("Achat impossible pour le moment");
    });
}

function equipCactusAccessory(item, shouldEquip) {
    const value = shouldEquip ? item.id : null;
    database.ref(
        "spaces/" + currentSpaceCode + "/cactusWardrobe/equipped/" + item.slot
    ).set(value).then(() => {
        showToast(shouldEquip ? item.name + " équipé" : item.name + " retiré");
    }).catch((error) => {
        console.error("Équipement impossible", error);
        showToast("Impossible de modifier la tenue");
    });
}

function openCactusWardrobe() {
    renderCactusWardrobe(currentSpaceData || {});
    cactusWardrobeModal.style.display = "flex";
    closeCactusWardrobeBtn.focus();
}

function closeCactusWardrobe() {
    cactusWardrobeModal.style.display = "none";
}

openCactusWardrobeBtn.addEventListener("click", openCactusWardrobe);
closeCactusWardrobeBtn.addEventListener("click", closeCactusWardrobe);
cactusWardrobeModal.querySelector("[data-close-cactus-wardrobe]")
    .addEventListener("click", closeCactusWardrobe);
removeCactusAccessoriesBtn.addEventListener("click", () => {
    database.ref("spaces/" + currentSpaceCode + "/cactusWardrobe/equipped")
        .remove()
        .then(() => showToast("Accessoires retirés"))
        .catch(() => showToast("Impossible de retirer les accessoires"));
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && cactusWardrobeModal.style.display !== "none") {
        closeCactusWardrobe();
    }
});

const CACTUS_EVOLUTIONS = [
    {
        minimumLevel: 21,
        name: "Cactus légendaire",
        image: "assets/cactus-stage-6.png",
        message: "Votre cactus est devenu légendaire !"
    },
    {
        minimumLevel: 15,
        name: "Cactus épanoui",
        image: "assets/cactus-stage-5.png",
        message: "Votre cactus est pleinement épanoui !"
    },
    {
        minimumLevel: 10,
        name: "Cactus complice",
        image: "assets/cactus-stage-4.png",
        message: "Votre cactus respire la complicité !"
    },
    {
        minimumLevel: 6,
        name: "Cactus curieux",
        image: "assets/cactus-stage-3.png",
        message: "Votre cactus devient très curieux !"
    },
    {
        minimumLevel: 3,
        name: "Jeune cactus",
        image: "assets/cactus-stage-2.png",
        message: "Votre jeune cactus grandit bien !"
    },
    {
        minimumLevel: 1,
        name: "Bébé cactus",
        image: "assets/cactus-rig/stage-1-body.webp",
        rigged: true,
        message: "Votre bébé cactus découvre votre histoire !"
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
        mainCactusImage.dataset.rigged = String(Boolean(evolution.rigged));
        cactusWaveArm.style.display = evolution.rigged ? "block" : "none";
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
        renderRelationshipDaysText("Votre petit monde à deux");
        return;
    }

    const startDate = new Date(dateValue);
    const today = new Date();

    if (Number.isNaN(startDate.getTime())) {
        renderRelationshipDaysText("Votre petit monde à deux");
        return;
    }

    startDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
        renderRelationshipDaysText("Votre histoire commence aujourd’hui");
        return;
    }

    renderRelationshipDaysText(diffDays + " jours ensemble");
}

function renderRelationshipDaysText(label) {
    if (!relationshipDaysText) {
        return;
    }

    const text = document.createElement("span");
    text.textContent = label;
    relationshipDaysText.replaceChildren(
        createCactusUiIcon("cactusIconCalendar"),
        text
    );
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
    const myAvatar = profile.avatars?.[currentUser.uid] || DEFAULT_PROFILE_AVATAR;
    const partnerAvatar = players.partner
        ? (profile.avatars?.[players.partner.uid] || "💚")
        : "💚";
    const spaceName = profile.spaceName || "Notre coin Cactus";

    dashboardScreen.style.setProperty("--dashboard-accent", accent);
    coupleProfileScreen.style.setProperty("--profile-accent", accent);
    dashboardSpaceName.textContent = spaceName;
    dashboardProfileBtn.setAttribute(
        "aria-label",
        "Ouvrir le profil du couple" + (players.me.pseudo ? " de " + players.me.pseudo : "")
    );
    renderProfileAvatar(dashboardProfileBtn, myAvatar);
    renderProfileAvatar(profileMyAvatar, myAvatar);
    renderProfileAvatar(profilePartnerAvatar, partnerAvatar, "💚");
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
    setSelectedProfileAvatar(profile.avatars?.[currentUser.uid] || DEFAULT_PROFILE_AVATAR);
    profileSpaceNameInput.value = profile.spaceName || "Notre coin Cactus";
    profileCactusNameInput.value = profile.cactusName || "Cactou";
    profileMottoInput.value = profile.motto || "Notre petit monde à deux.";
    setProfileAccentColor(getSafeProfileColor(profile.accentColor));
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
    updates["avatars/" + currentUser.uid] = profileAvatarInput.value || DEFAULT_PROFILE_AVATAR;

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

            const players = [currentSpaceData?.player1, currentSpaceData?.player2].filter(Boolean);
            const firstName = players[0]?.pseudo || pseudo || "Vous";
            const secondName = players[1]?.pseudo || "Votre partenaire";
            const daysText = getRelationshipDaysText(story.startDate || story.relationshipDate);
            storyPageHeroTitle.textContent = firstName + " & " + secondName;
            storyPageHeroText.textContent = daysText + " de souvenirs, de jeux et de petits moments à deux.";

            const cards = [
                ["cactusIconCalendar", "Ensemble depuis", daysText],
                ["cactusIconGarden", "Votre rencontre", story.meetingPlace || "Non renseigné"],
                ["cactusIconStory", "Premier rendez-vous", story.firstDate || "Non renseigné"],
                ["cactusIconChat", "Vos surnoms", (story.nicknameMine || "—") + " / " + (story.nicknamePartner || "—")],
                ["cactusIconLinkedHearts", "Votre chanson", story.song || "Non renseigné"],
                ["cactusIconCouple", "Votre situation", (story.situation || story.relationshipType) === "distance" ? "À distance" : "Ensemble"]
            ];

            storyPageContent.replaceChildren(
                ...cards.map(([iconId, label, value]) => {
                    const card = document.createElement("article");
                    card.className = "story-info-card";
                    const iconElement = document.createElement("span");
                    iconElement.appendChild(createCactusUiIcon(iconId, "story-info-icon"));
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
            document.body.classList.remove("is-offline");

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
            document.body.classList.add("is-offline");
            bannerWasShown = true;
            disconnectTimer = null;
        }, 1200);
    });
}

retryConnectionBtn.addEventListener("click", () => {
    retryConnectionBtn.disabled = true;
    retryConnectionBtn.textContent = "Connexion…";
    database.goOnline();

    window.setTimeout(() => {
        retryConnectionBtn.disabled = false;
        retryConnectionBtn.textContent = "Réessayer";
        if (!connectionStatusBanner.hidden) {
            showToast("Toujours hors ligne — vos données restent protégées sur cet appareil");
        }
    }, 1800);
});

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
        Promise.all([
            loadRankingsData(),
            loadGuessQuestionsData(),
            loadLikelyQuestionsData(),
            loadOkQuestionsData(),
            loadGreenFlagQuestionsData(),
            loadPrincessQuestionsData(),
            loadCoupleQuestionsData()
        ]).catch((error) => console.warn("Actualisation du catalogue différée", error));

        database.ref("users/" + currentUser.uid).once("value")
            .then((snapshot) => {
                const userData = snapshot.val();

                if (!userData) {
                    hideAppState();
                    stopCurrentSpaceListeners();
                    showScreen("pseudo");
                    return;
                }

                pseudo = userData.pseudo || "";
                displayPseudo.textContent = pseudo;

                if (userData.onboardingCompleted === false) {
                    hideAppState();
                    stopCurrentSpaceListeners();
                    openOnboarding(0);
                    return;
                }

                if (userData.spaceCode) {
                    return restoreUserSpace(userData).then(hideAppState);
                } else {
                    hideAppState();
                    stopCurrentSpaceListeners();
                    showScreen("couple");
                }
            })
            .catch((error) => {
                console.error("Chargement du compte impossible", error);
                showAppError(error, () => window.location.reload());
            });
    } else {
        stopCurrentSpaceListeners();
        currentUser = null;
        updateCreatorToolsVisibility();
        showScreen("login");
        hideAppState();
    }
});

loadRankingsData();
loadGuessQuestionsData();
loadLikelyQuestionsData();

loadNotificationPreferences();
applyTheme(localStorage.getItem("theme") === "dark" ? "dark" : "light");
installSecondaryCactusIcons();
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
