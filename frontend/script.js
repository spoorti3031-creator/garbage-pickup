let currentUser = null;
let activeLanguage = 'en';

const translations = {
  en: {
    loginRegister: 'Login / Register',
    registerButton: 'Register',
    loginButton: 'Login',
    schedulePickup: 'Schedule Pickup',
    useMyLocation: 'Use My Location',
    notifications: 'Notifications',
    municipalityAnnouncements: 'Municipality Announcements',
    fileAComplaint: 'File a Complaint',
    submitComplaint: 'Submit Complaint',
    pickupLocation: 'Pickup Location',
    date: 'Date',
    time: 'Time',
    subject: 'Subject',
    category: 'Category',
    description: 'Description',
    liveLocation: 'Live Location',
    users: 'Users',
    pickups: 'Pickups',
    complaints: 'Complaints',
    announcements: 'Announcements',
    heroTitle: 'Clean neighborhoods start with reliable pickup scheduling.',
    heroSubtitle: 'WastePro makes garbage pickup planning simple with a polished, elegant dashboard for residents and administrators.',
    heroCta: 'Get Started',
    heroLink: 'Explore features',
    feature1Title: '📅 Effortless scheduling',
    feature1Desc: 'Submit pickup requests quickly and keep your neighborhood calendar in sync with smart scheduling.',
    feature2Title: '📊 Intuitive dashboard',
    feature2Desc: 'Monitor requests and view scheduled pickups with an easy-to-read interface.',
    feature3Title: '📱 Responsive experience',
    feature3Desc: 'Works perfectly on desktop or mobile with seamless navigation.',
    authHeading: '🔐 Login / Register',
    authDesc: 'Manage your waste pickup requests securely.',
    dashboardHeading: '📊 Dashboard',
    announcementHeading: '📢 Municipality Announcements',
    complaintHeading: '📝 File a Complaint',
    notificationHeading: '🔔 Notifications',
    adminHeading: '⚙️ Admin Panel',
    adminTips: 'Logged in as admin? Use this panel to review requests, complaints, and announcements.',
    loginInfo: 'Use the form below to log in or create an account. Admin username is admin.',
    complaintSectionButton: '📝 Complaint Center',
    adminSectionButton: '⚙️ Admin Panel'
  },
  hi: {
    loginRegister: 'लॉगिन / रजिस्टर',
    registerButton: 'रजिस्टर',
    loginButton: 'लॉगिन',
    schedulePickup: 'पिकअप निर्धारित करें',
    useMyLocation: 'मेरा स्थान उपयोग करें',
    notifications: 'सूचनाएँ',
    municipalityAnnouncements: 'नगरपालिका घोषणाएँ',
    fileAComplaint: 'शिकायत दर्ज करें',
    submitComplaint: 'शिकायत भेजें',
    pickupLocation: 'पिकअप स्थान',
    date: 'तारीख',
    time: 'समय',
    subject: 'विषय',
    category: 'श्रेणी',
    description: 'विवरण',
    liveLocation: 'लाइव स्थान',
    users: 'उपयोगकर्ता',
    pickups: 'पिकअप',
    complaints: 'शिकायतें',
    announcements: 'घोषणाएँ',
    heroTitle: 'विश्वसनीय पिकअप समय-सारिणी के साथ साफ़ पड़ोस बनाएँ।',
    heroSubtitle: 'WastePro एक सुंदर डैशबोर्ड के साथ कचरा उठाने की योजना बनाना आसान बनाता है।',
    heroCta: 'शुरू करें',
    heroLink: 'विशेषताएँ देखें',
    feature1Title: 'सरल शेड्यूलिंग',
    feature1Desc: 'पिकअप अनुरोध जल्दी से सबमिट करें और अपने पड़ोस के कैलेंडर को सिंक रखें।',
    feature2Title: '🖥️ सहज डैशबोर्ड',
    feature2Desc: 'एक आसान इंटरफ़ेस के साथ अनुरोधों और शेड्यूल को मॉनिटर करें।',
    feature3Title: '📱 उत्तरदायी अनुभव',
    feature3Desc: 'मोबाइल और डेस्कटॉप पर समान रूप से काम करता है।',
    authHeading: '🔐 लॉगिन / रजिस्टर',
    authDesc: 'अपने कचरा पिकअप अनुरोध सुरक्षित रूप से प्रबंधित करें।',
    dashboardHeading: '📊 डैशबोर्ड',
    announcementHeading: '📢 नगरपालिका घोषणाएँ',
    complaintHeading: '📝 शिकायत दर्ज करें',
    notificationHeading: '🔔 सूचनाएँ',
    adminHeading: '⚙️ एडमिन पैनल',
    adminTips: 'क्या आप एडमिन के रूप में लॉगिन हैं? अनुरोधों, शिकायतों, और घोषणाओं की समीक्षा करने के लिए इस पैनल का उपयोग करें।',
    loginInfo: 'लॉगिन करने या एक खाता बनाने के लिए नीचे दिए गए फॉर्म का उपयोग करें। एडमिन उपयोगकर्ता नाम admin है।',
    complaintSectionButton: '📝 शिकायत केंद्र',
    adminSectionButton: '⚙️ एडमिन पैनल'
  },
  kn: {
    loginRegister: 'ಲಾಗಿನ್ / ನೋಂದಣಿ',
    registerButton: 'ನೋಂದಣಿ',
    loginButton: 'ಲಾಗಿನ್',
    schedulePickup: 'ಪಿಕಪ್ ನಿಗದಿಗೊಳಿಸಿ',
    useMyLocation: 'ನನ್ನ ಸ್ಥಳವನ್ನು ಬಳಸಿ',
    notifications: 'ಅಧಿಸೂಚನೆಗಳು',
    municipalityAnnouncements: 'ಮುನಿಸಿಪಾಲಿಟಿ ಶುರುಪಡಿಗಳು',
    fileAComplaint: 'ಶिकಾಯತ ಸಲ್ಲಿಸಿ',
    submitComplaint: 'ಶಿಕಾಯತ ಸಲ್ಲಿಸಿ',
    pickupLocation: 'ಪಿಕಪ್ ಸ್ಥಳ',
    date: 'ದಿನಾಂಕ',
    time: 'ಸಮಯ',
    subject: 'ವಿಷಯ',
    category: 'ವರ್ಗ',
    description: 'ವಿವರಣೆ',
    liveLocation: 'ಲೈವ್ ಸ್ಥಳ',
    users: 'ಬಳಕೆದಾರರು',
    pickups: 'ಪಿಕಪ್',
    complaints: 'ಶಿಕಾಯತಗಳು',
    announcements: 'ಘೋಷಣೆಗಳು',
    heroTitle: 'ಇಥರ ಪಿಕಪ್ ವೇಳಾಪಟ್ಟಿಯೊಂದಿಗೆ ಸ್ವಚ್ಛ ಪಡೋಸಗಳನ್ನು ಆರಂಭಿಸಿ.',
    heroSubtitle: 'WastePro ಸೌಂದರ್ಯಯುತ ಡ್ಯಾಶ್ಬೋರ್ಡ್‌ನೊಂದಿಗೆ ಕಸದ ಪಿಕಪ್ ಯೋಜನೆಯನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತದೆ.',
    heroCta: 'ಪ್ರಾರಂಭಿಸಿ',
    heroLink: 'ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ಅನ್ವೇಷಿಸಿ',
    feature1Title: 'ಸರಳ ಶೆಡ್ಯುಲಿಂಗ್',
    feature1Desc: 'ಶೀಘ್ರದಲ್ಲಿ ಪಿಕಪ್ ವಿನಂತಿಗಳನ್ನು ಸಲ್ಲಿಸಿ ಮತ್ತು ನಿಮ್ಮ ನೆರೆಹೊರೆಯ ಕ್ಯಾಲೆಂಡರ್‌ನ್ನು ಸಿಂಕ್‌ನಲ್ಲಿ ಇರಿಸಿ.',
    feature2Title: '🖥️ ಬೋಧನೀಯ ಡ್ಯಾಶ್ಬೋರ್ಡ್',
    feature2Desc: 'ಸರಳ ಇಂಟರ್ಫೇಸ್‌ನಲ್ಲಿ ವಿನಂತಿಗಳನ್ನು ಮತ್ತು ವೇಳಾಪಟ್ಟಿಗಳನ್ನು ಪర్యವೇಕ್ಷಣ ಮಾಡಿ.',
    feature3Title: '📱 ಪ್ರತಿಕ್ರಿಯಾಶೀಲ ಅನುಭವ',
    feature3Desc: 'ಮೊಬೈಲ್ ಮತ್ತು ಡೆಸ್ಕ್‌ಟಾಪ್‌ನಲ್ಲಿ ಸಮಾನವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.',
    authHeading: '🔐 ಲಾಗಿನ್ / ನೋಂದಣಿ',
    authDesc: 'ನಿಮ್ಮ ಕಸದ ಪಿಕಪ್ ಮನವಿಗಳನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ನಿರ್ವಹಿಸಿ.',
    dashboardHeading: '📊 ಡ್ಯಾಶ್ಬೋರ್ಡ್',
    announcementHeading: '📢 ಮುನಿಸಿಪಾಲಿಟಿ ಘೋಷಣೆಗಳು',
    complaintHeading: '📝 പരാതി ಸಲ್ಲಿಸಿ',
    notificationHeading: '🔔 ಅಧಿಸೂಚನೆಗಳು',
    adminHeading: '⚙️ ад್ಮಿನ್ ಪ್ಯಾನೆಲ್',
    adminTips: 'ನೀವು ադ್ಮಿನ್ ಆಗಿ ಲಾಗಿನ್ ಆಗಿದ್ದೀರಾ? ವಿನಂತಿಗಳನ್ನು, ದೂರುಗಳನ್ನು ಮತ್ತು ಘೋಷಣೆಗಳನ್ನು ವಿಮರ್ಶಿಸಲು ಈ ಪ್ಯಾನೆಲ್ ಬಳಸಿ.',
    loginInfo: 'ಲಾಗಿನ್ ಅಥವಾ ಖಾತೆ ರಚಿಸಲು ಕೆಳಗಿನ ಫಾರಂ ಬಳಸಿರಿ. ಅಧ್ಮಿನ್ ಬಳಕೆದಾರ ಹೆಸರು admin.',
    complaintSectionButton: '📝 ದೂರು ಕೇಂದ್ರ',
    adminSectionButton: '⚙️ ಅಧ್ಮಿನ್ ಪ್ಯಾನೆಲ್'
  },
  te: {
    loginRegister: 'లాగిన్ / రిజిస్టర్',
    registerButton: 'రిజిస్టర్',
    loginButton: 'లాగిన్',
    schedulePickup: 'పికప్ షెడ్యూల్ చేయండి',
    useMyLocation: 'నా స్థానాన్ని ఉపయోగించండి',
    notifications: 'నోటిఫికేషన్లు',
    municipalityAnnouncements: 'మునిసిపల్ ప్రకటనలు',
    fileAComplaint: 'ఫిర్యాదు చేయండి',
    submitComplaint: 'ఫిర్యాదు సమర్పించండి',
    pickupLocation: 'పికప్ స్థలం',
    date: 'తేదీ',
    time: 'సమయం',
    subject: 'విషయం',
    category: 'వర్గం',
    description: 'వివరణ',
    liveLocation: 'లైవ్ లొకేషన్',
    users: 'వినియోగదారులు',
    pickups: 'పికప్స్',
    complaints: 'ఫిర్యాదులు',
    announcements: 'ప్రకటనలు',
    heroTitle: 'విశ్వసనీయ పికప్ షెడ్యూల్‌తో శుభ్రమైన పొరుగు ప్రాంతాలు ప్రారంభించండి.',
    heroSubtitle: 'WastePro నివాసులకూ నిర్వాహకులకూ ఆకర్షణీయమైన ప్యానెల్‌తో ప్లానింగ్‌ను సులభతరం చేస్తుంది.',
    heroCta: 'ప్రారంభించండి',
    heroLink: 'ఫీచర్లను చూడండి',
    feature1Title: 'సులభమైన షెడ్యూలింగ్',
    feature1Desc: 'పికప్ అభ్యర్థనలను త్వరగా పంపండి మరియు మీ క్యాలెండర్‌ను సమకూర్చుకోండి.',
    feature2Title: '🖥️ సులభమైన డ్యాష్‌బోర్డు',
    feature2Desc: 'అభ్యర్థనలు మరియు షెడ్యూల్‌లను క్లియర్ ఇంటర్ఫేస్‌లో ట్రాక్ చేయండి.',
    feature3Title: '📱 రెస్పాన్సివ్ అనుభవం',
    feature3Desc: 'మొబైల్ మరియు డెస్క్‌టాప్‌లో సమానంగా పని చేస్తుంది.',
    authHeading: '🔐 లాగిన్ / రిజిస్టర్',
    authDesc: 'మీ వ్యాజ్య పికప్ అభ్యర్థనలను సురక్షితంగా నిర్వహించండి.',
    dashboardHeading: '📊 డ్యాష్‌బోర్డు',
    announcementHeading: '📢 మునిసిపల్ ప్రకటనలు',
    complaintHeading: '📝 ఫిర్యాదు చేయండి',
    notificationHeading: '🔔 నోటిఫికేషన్లు',
    adminHeading: '⚙️ అడ్మిన్ ప్యానెల్',
    adminTips: 'మీరు అడ్మిన్‌గా లాగిన్ అయ్యారా? అభ్యర్థనలు, ఫిర్యాదులు మరియు ప్రకటనలను సమీక్షించడానికి ఈ ప్యానెల్‌ను ఉపయోగించండి.',
    loginInfo: 'లాగిన్ కావడానికి లేదా ఖాతా సృష్టించడానికి క్రింది ఫారమ్‌ను ఉపయోగించండి. అడ్మిన్ వినియోగదారు పేరు admin.',
    complaintSectionButton: '📝 ఫిర్యాదు కేంద్రం',
    adminSectionButton: '⚙️ అడ్మిన్ ప్యానెల్'
  },
  es: {
    loginRegister: 'Iniciar sesión / Registrar',
    registerButton: 'Registrar',
    loginButton: 'Iniciar sesión',
    schedulePickup: 'Programar recogida',
    useMyLocation: 'Usar mi ubicación',
    notifications: 'Notificaciones',
    municipalityAnnouncements: 'Anuncios municipales',
    fileAComplaint: 'Presentar queja',
    submitComplaint: 'Enviar queja',
    pickupLocation: 'Ubicación de recogida',
    date: 'Fecha',
    time: 'Hora',
    subject: 'Asunto',
    category: 'Categoría',
    description: 'Descripción',
    liveLocation: 'Ubicación en vivo',
    users: 'Usuarios',
    pickups: 'Recogidas',
    complaints: 'Quejas',
    announcements: 'Anuncios',
    heroTitle: 'Los barrios limpios comienzan con horarios de recolección confiables.',
    heroSubtitle: 'WastePro hace que planificar la recolección de basura sea simple con un panel elegante.',
    heroCta: 'Comenzar',
    heroLink: 'Explorar funciones',
    feature1Title: 'Programación eficiente',
    feature1Desc: 'Envía solicitudes de recogida rápidamente y mantiene tu calendario actualizado.',
    feature2Title: '🖥️ Panel intuitivo',
    feature2Desc: 'Monitorea solicitudes y horarios con una interfaz clara.',
    feature3Title: '📱 Experiencia responsiva',
    feature3Desc: 'Funciona igual de bien en móvil y escritorio.',
    authHeading: '🔐 Iniciar sesión / Registrar',
    authDesc: 'Administra tus solicitudes de recogida de residuos de forma segura.',
    dashboardHeading: '📊 Panel de control',
    announcementHeading: '📢 Anuncios municipales',
    complaintHeading: '📝 Presentar queja',
    notificationHeading: '🔔 Notificaciones',
    adminHeading: '⚙️ Panel de administrador',
    adminTips: '¿Has iniciado sesión como administrador? Usa este panel para revisar solicitudes, quejas y anuncios.',
    loginInfo: 'Usa el siguiente formulario para iniciar sesión o crear una cuenta. El usuario administrador es admin.',
    complaintSectionButton: '📝 Centro de quejas',
    adminSectionButton: '⚙️ Panel de administrador'
  }
};

const STORAGE_USER_KEY = 'wasteproCurrentUser';

function setCurrentUser(username) {
  currentUser = username;
  if (username) {
    localStorage.setItem(STORAGE_USER_KEY, username);
  } else {
    localStorage.removeItem(STORAGE_USER_KEY);
  }
}

function getCurrentUser() {
  return localStorage.getItem(STORAGE_USER_KEY);
}

function translatePage() {
  const translated = translations[activeLanguage] || translations.en;

  const mapped = {
    loginNavButton: 'loginButton',
    registerNavButton: 'registerButton',
    registerButton: 'registerButton',
    loginButton: 'loginButton',
    scheduleButton: 'schedulePickup',
    heroTitle: 'heroTitle',
    heroSubtitle: 'heroSubtitle',
    heroCta: 'heroCta',
    heroLink: 'heroLink',
    feature1Title: 'feature1Title',
    feature1Desc: 'feature1Desc',
    feature2Title: 'feature2Title',
    feature2Desc: 'feature2Desc',
    feature3Title: 'feature3Title',
    feature3Desc: 'feature3Desc',
    dashboardHeading: 'dashboardHeading',
    announcementHeading: 'announcementHeading',
    complaintHeading: 'complaintHeading',
    notificationHeading: 'notificationHeading',
    adminHeading: 'adminHeading'
  };

  Object.entries(mapped).forEach(([elementId, key]) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.textContent = translated[key];
  });

  const notificationButton = document.getElementById('notificationButton');
  if (notificationButton) {
    const badge = document.getElementById('notificationBadge');
    notificationButton.innerHTML = translated.notifications + ' ';
    if (badge) {
      notificationButton.appendChild(badge);
    } else {
      const newBadge = document.createElement('span');
      newBadge.id = 'notificationBadge';
      newBadge.className = 'notification-badge';
      newBadge.textContent = '0';
      notificationButton.appendChild(newBadge);
    }
  }

  const announcementHeading = document.getElementById('announcementHeading');
  if (announcementHeading) announcementHeading.textContent = translated.announcementHeading;

  const complaintSectionButton = document.getElementById('complaintSectionButton');
  if (complaintSectionButton) complaintSectionButton.textContent = translated.complaintSectionButton;

  const adminSectionButton = document.getElementById('adminSectionButton');
  if (adminSectionButton) adminSectionButton.textContent = translated.adminSectionButton;

  const pickupLocationLabel = document.querySelector('label[for="location"]');
  if (pickupLocationLabel) pickupLocationLabel.textContent = translated.pickupLocation;
  const dateLabel = document.querySelector('label[for="date"]');
  if (dateLabel) dateLabel.textContent = translated.date;
  const timeLabel = document.querySelector('label[for="time"]');
  if (timeLabel) timeLabel.textContent = translated.time;
  const subjectLabel = document.querySelector('label[for="subject"]');
  if (subjectLabel) subjectLabel.textContent = translated.subject;
  const categoryLabel = document.querySelector('label[for="category"]');
  if (categoryLabel) categoryLabel.textContent = translated.category;
  const descriptionLabel = document.querySelector('label[for="description"]');
  if (descriptionLabel) descriptionLabel.textContent = translated.description;

  const useMyLocationButton = document.getElementById('useMyLocationButton');
  if (useMyLocationButton) useMyLocationButton.textContent = translated.useMyLocation;
}

function changeLanguage(lang) {
  activeLanguage = lang;
  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) languageSelect.value = activeLanguage;
  translatePage();
}

function schedulePickup() {
  const pickupForm = document.getElementById('pickupForm');
  if (!pickupForm) return;
  pickupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!currentUser) {
      alert('Please log in first.');
      return;
    }

    const location = document.getElementById('location')?.value;
    const date = document.getElementById('date')?.value;
    const time = document.getElementById('time')?.value;
    if (!location || !date || !time) {
      alert('Location, date, and time are required.');
      return;
    }

    const response = await fetch('http://localhost:8080/api/pickups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: currentUser, location, date, time })
    });

    if (response.ok) {
      loadPickups();
      loadNotifications();
      schedulePickupFormReset();
    } else {
      alert('Unable to schedule pickup.');
    }
  });
}

function showOnboarding() {
  const modal = document.getElementById('onboardingModal');
  if (modal) modal.classList.remove('hidden');
}

function hideOnboarding() {
  const modal = document.getElementById('onboardingModal');
  if (modal) modal.classList.add('hidden');
  localStorage.setItem('wasteproSeenOnboarding', '1');
  // After onboarding, show the main home/dashboard as appropriate
  if (currentUser) showDashboard(); else showHome();
}

function schedulePickupFormReset() {
  const form = document.getElementById('pickupForm');
  if (form) form.reset();
}

async function submitComplaint() {
  const messageBox = document.getElementById('complaintMessage');
  if (!currentUser) {
    if (messageBox) {
      messageBox.textContent = 'Please log in first.';
      messageBox.style.color = 'red';
    }
    return;
  }

  const subject = document.getElementById('subject')?.value;
  const category = document.getElementById('category')?.value;
  const description = document.getElementById('description')?.value;

  const response = await fetch('http://localhost:8080/api/complaints', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: currentUser, subject, category, description })
  });

  const data = await response.json();
  if (!messageBox) return;
  if (response.ok) {
    messageBox.textContent = data.message || 'Complaint filed successfully.';
    messageBox.style.color = 'green';
    loadComplaintHistory();
    showNotificationPanel();
  } else {
    messageBox.textContent = data.error || 'Unable to submit complaint.';
    messageBox.style.color = 'red';
  }
}

function toggleNotifications() {
  const panel = document.getElementById('notificationPanel');
  if (!panel) return;
  const isHidden = panel.classList.toggle('hidden');
  if (!isHidden) {
    loadComplaintNotifications();
  }
}

function showNotificationPanel() {
  const panel = document.getElementById('notificationPanel');
  if (!panel) return;
  panel.classList.remove('hidden');
  loadComplaintNotifications();
}

async function loadPickups() {
  const response = await fetch('http://localhost:8080/api/pickups');
  if (!response.ok) return;
  const pickups = await response.json();
  const list = document.getElementById('pickupList');
  if (!list) return;
  list.innerHTML = '';
  pickups.filter(item => item.username === currentUser).forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.location} on ${item.date} at ${item.time}`;
    list.appendChild(li);
  });
}

async function loadAnnouncements() {
  const response = await fetch('http://localhost:8080/api/announcements');
  if (!response.ok) return;
  const announcements = await response.json();
  const list = document.getElementById('announcementList');
  if (!list) return;
  list.innerHTML = '';
  announcements.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.date}: ${item.title} - ${item.message}`;
    list.appendChild(li);
  });
}

async function loadNotifications() {
  const username = currentUser || '';
  const response = await fetch(`http://localhost:8080/api/notifications?user=${encodeURIComponent(username)}`);
  if (!response.ok) return;
  const notifications = await response.json();
  const list = document.getElementById('notificationList');
  if (list) {
    list.innerHTML = '';
    notifications.forEach((note) => {
      const li = document.createElement('li');
      li.textContent = `${note.date}: ${note.message}`;
      list.appendChild(li);
    });
  }

  const badge = document.getElementById('notificationBadge');
  if (badge) {
    badge.textContent = notifications.length;
  }
}

async function loadComplaintHistory() {
  const response = await fetch('http://localhost:8080/api/complaints');
  if (!response.ok) return;
  const complaints = await response.json();
  const list = document.getElementById('complaintHistory');
  if (!list) return;
  list.innerHTML = '';
  complaints.filter(item => item.username === currentUser).forEach((item) => {
    const li = document.createElement('li');
    li.textContent = `${item.subject} (${item.category}) — ${item.status}`;
    list.appendChild(li);
  });
}

async function loadAdminSummary() {
  if (currentUser !== 'admin') return;
  const response = await fetch('http://localhost:8080/api/admin/summary');
  if (!response.ok) return;
  const summary = await response.json();
  const users = document.getElementById('adminUsersCount');
  const pickups = document.getElementById('adminPickupsCount');
  const complaints = document.getElementById('adminComplaintsCount');
  const announcements = document.getElementById('adminAnnouncementsCount');
  if (users) users.textContent = summary.users;
  if (pickups) pickups.textContent = summary.pickups;
  if (complaints) complaints.textContent = summary.complaints;
  if (announcements) announcements.textContent = summary.announcements;
}

async function loadAdminPickups() {
  const response = await fetch('http://localhost:8080/api/pickups');
  if (!response.ok) return;
  const pickups = await response.json();
  const list = document.getElementById('adminPickupList');
  if (!list) return;
  list.innerHTML = '';
  pickups.forEach((pickup) => {
    const li = document.createElement('li');
    li.textContent = `${pickup.username}: ${pickup.location} on ${pickup.date} at ${pickup.time}`;
    list.appendChild(li);
  });
}

async function loadAdminComplaints() {
  const response = await fetch('http://localhost:8080/api/complaints');
  if (!response.ok) return;
  const complaints = await response.json();
  const list = document.getElementById('adminComplaintList');
  if (!list) return;
  list.innerHTML = '';
  complaints.forEach((complaint) => {
    const li = document.createElement('li');
    li.textContent = `${complaint.username}: ${complaint.subject} (${complaint.category}) — ${complaint.status}`;
    list.appendChild(li);
  });
}

function hideAllSections() {
  document.getElementById('homeSection')?.classList.add('hidden');
  document.getElementById('features')?.classList.add('hidden');
  document.getElementById('authSection')?.classList.add('hidden');
  document.getElementById('dashboard')?.classList.add('hidden');
  document.getElementById('complaintSection')?.classList.add('hidden');
  document.getElementById('adminSection')?.classList.add('hidden');
  document.getElementById('notificationPanel')?.classList.add('hidden');
}

function showRegister() {
  hideAllSections();
  document.getElementById('authSection')?.classList.remove('hidden');
}

function showHome() {
  hideAllSections();
  document.getElementById('homeSection')?.classList.remove('hidden');
}

function showAuth() {
  hideAllSections();
  document.getElementById('authSection')?.classList.remove('hidden');
}

function showDashboard() {
  hideAllSections();
  document.getElementById('dashboard')?.classList.remove('hidden');
  const welcomeMessage = document.getElementById('welcomeMessage');
  if (welcomeMessage) {
    welcomeMessage.textContent = currentUser ? `Signed in as ${currentUser}` : '';
  }
  document.getElementById('adminSectionButton')?.classList.toggle('hidden', currentUser !== 'admin');
  loadPickups();
  loadAnnouncements();
  loadNotifications();
  loadAdminSummary();
}

function showComplaintSection() {
  hideAllSections();
  document.getElementById('complaintSection')?.classList.remove('hidden');
  const userStatus = document.getElementById('userStatus');
  const form = document.getElementById('complaintForm');
  if (!currentUser) {
    if (userStatus) {
      userStatus.textContent = 'Please login first on the home page.';
      userStatus.classList.add('status-message');
    }
    if (form) form.style.display = 'none';
  } else {
    if (userStatus) {
      userStatus.textContent = `Logged in as ${currentUser}.`;
      userStatus.classList.remove('status-message');
    }
    if (form) form.style.display = 'block';
  }
  loadComplaintHistory();
  loadNotifications();
}

function showAdminSection() {
  hideAllSections();
  document.getElementById('adminSection')?.classList.remove('hidden');
  if (currentUser !== 'admin') {
    const adminTips = document.getElementById('adminTips');
    if (adminTips) {
      adminTips.textContent = 'Admin access required. Please sign in as admin on the home page.';
    }
    return;
  }
  loadAdminSummary();
  loadAdminPickups();
  loadAdminComplaints();
  loadNotifications();
}

async function useMyLocation() {
  const status = document.getElementById('locationStatus');
  if (!navigator.geolocation) {
    if (status) status.textContent = '❌ Geolocation unavailable';
    return;
  }
  if (status) status.textContent = '📍 Getting location...';
  navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const locationInput = document.getElementById('location');
    if (locationInput) locationInput.value = `${lat.toFixed(6)}, ${lon.toFixed(6)}`;
    const addressDisplay = document.getElementById('addressDisplay');
    if (addressDisplay) addressDisplay.textContent = 'Loading address...';
    await getAddressFromCoordinates(lat, lon);
    displayMap(lat, lon);
    if (status) status.textContent = '✓ Location captured successfully';
  }, () => {
    if (status) status.textContent = '❌ Location access denied';
  });
}

async function getAddressFromCoordinates(lat, lon) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
    if (!response.ok) return;
    const data = await response.json();
    const addressDisplay = document.getElementById('addressDisplay');
    if (addressDisplay) {
      addressDisplay.textContent = data.display_name || `${lat.toFixed(6)}, ${lon.toFixed(6)}`;
    }
  } catch (error) {
    const addressDisplay = document.getElementById('addressDisplay');
    if (addressDisplay) addressDisplay.textContent = `${lat.toFixed(6)}, ${lon.toFixed(6)}`;
  }
}

function displayMap(lat, lon) {
  const mapFrame = document.getElementById('locationMap');
  if (mapFrame) {
    mapFrame.src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.01}%2C${lat - 0.01}%2C${lon + 0.01}%2C${lat + 0.01}&layer=mapnik&marker=${lat}%2C${lon}`;
  }
  const container = document.getElementById('locationMapContainer');
  if (container) container.classList.remove('hidden');
}

function refreshLocation() {
  useMyLocation();
}

async function register() {
  const username = document.getElementById('username')?.value;
  const password = document.getElementById('password')?.value;
  const authMessage = document.getElementById('authMessage');
  if (!username || !password) {
    if (authMessage) authMessage.textContent = 'Email and password are required.';
    return;
  }
  const response = await fetch('http://localhost:8080/api/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  if (response.ok) {
    setCurrentUser(username);
    if (document.body.dataset.page === 'login' || document.body.dataset.page === 'register') {
      window.location.href = 'index.html';
    } else {
      showDashboard();
    }
  } else if (authMessage) {
    authMessage.textContent = data.error || 'Registration failed.';
  }
}

async function login() {
  const username = document.getElementById('username')?.value;
  const password = document.getElementById('password')?.value;
  const phone = document.getElementById('phone')?.value;
  const authMessage = document.getElementById('authMessage');
  if (!username || !password || !phone) {
    if (authMessage) authMessage.textContent = 'Email, password, and phone number are required.';
    return;
  }
  const response = await fetch('http://localhost:8080/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, phone })
  });
  const data = await response.json();
  if (response.ok) {
    setCurrentUser(username);
    if (document.body.dataset.page === 'login' || document.body.dataset.page === 'register') {
      window.location.href = 'index.html';
    } else {
      showDashboard();
    }
  } else if (authMessage) {
    authMessage.textContent = data.error || 'Invalid credentials.';
  }
}

async function loadComplaintNotifications() {
  const heading = document.getElementById('notificationHeading');
  if (heading) heading.textContent = 'Complaints';
  const list = document.getElementById('notificationList');
  if (!list) return;
  if (!currentUser) {
    list.innerHTML = '<li>Please log in to view your complaints.</li>';
    return;
  }
  const response = await fetch('http://localhost:8080/api/complaints');
  if (!response.ok) return;
  const complaints = await response.json();
  list.innerHTML = '';
  complaints.filter(item => item.username === currentUser).forEach((complaint) => {
    const li = document.createElement('li');
    li.textContent = `${complaint.subject} (${complaint.category}) — ${complaint.status}`;
    list.appendChild(li);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const storedUser = getCurrentUser();
  setCurrentUser(storedUser);
  const languageSelect = document.getElementById('languageSelect');
  if (languageSelect) languageSelect.value = activeLanguage;
  translatePage();
  schedulePickup();

  const navLoginButton = document.getElementById('loginNavButton');
  if (navLoginButton) {
    navLoginButton.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }

  const page = document.body.dataset.page;
  const params = new URLSearchParams(window.location.search);
  const forceOnboarding = params.get('onboarding') === '1' || params.get('showOnboarding') === '1';
  if (page === 'complaint') {
    loadComplaintHistory();
    loadNotifications();
  } else if (page === 'admin') {
    loadAdminSummary();
    loadAdminPickups();
    loadAdminComplaints();
    loadNotifications();
  } else if (page === 'login') {
    if (currentUser) {
      showDashboard();
    } else {
      showAuth();
    }
  } else {
    // Index page: show onboarding first time, otherwise normal flow.
    // You can force it with ?onboarding=1 or ?showOnboarding=1 in the URL.
    const seen = localStorage.getItem('wasteproSeenOnboarding');
    if (forceOnboarding) {
      // If forced, don't mark as seen automatically; allow user to Skip/Next to mark seen.
      showOnboarding();
    } else if (!seen) {
      showOnboarding();
    } else {
      if (currentUser) {
        showDashboard();
      } else {
        showRegister();
      }
    }
  }
  // Wire onboarding Next button
  const onboardingNext = document.getElementById('onboardingNext');
  if (onboardingNext) onboardingNext.addEventListener('click', hideOnboarding);
  const onboardingSkip = document.getElementById('onboardingSkip');
  if (onboardingSkip) onboardingSkip.addEventListener('click', hideOnboarding);
});
