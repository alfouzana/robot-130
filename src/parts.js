// Bill of materials. Prices are approximate USD (2026), single unit price.
const q = (s) => "https://www.amazon.sa/s?k=" + encodeURIComponent(s);
const ali = (s) => "https://www.aliexpress.com/w/wholesale-" + encodeURIComponent(s.replace(/ /g, "-")) + ".html";

export const groups = [
  {
    title: "العقل الإلكتروني",
    icon: "🧠",
    items: [
      { name: "Raspberry Pi 5 (8GB)", role: "المعالج الرئيسي: الرؤية، الصوت، الذكاء", qty: 1, price: 80, link: q("Raspberry Pi 5 8GB") },
      { name: "مبرّد Raspberry Pi 5 Active Cooler", role: "تبريد المعالج أثناء التشغيل المستمر", qty: 1, price: 6, link: q("Raspberry Pi 5 Active Cooler") },
      { name: "NVMe HAT + SSD 256GB", role: "تخزين سريع للنظام والنموذج المحلي", qty: 1, price: 45, link: q("Raspberry Pi 5 NVMe HAT SSD 256GB") },
      { name: "Arduino Mega 2560", role: "متحكم المحركات والحساسات (الوقت الحقيقي)", qty: 1, price: 25, link: q("Arduino Mega 2560") },
    ],
  },
  {
    title: "القاعدة والحركة",
    icon: "⚙️",
    items: [
      { name: "محرك DC 24V بجيربوكس + Encoder", role: "دفع العجلات مع قياس المسافة", qty: 2, price: 55, link: ali("24V DC gear motor encoder 100rpm") },
      { name: "عجلة 150 مم مع وصلة محور", role: "العجلات الرئيسية", qty: 2, price: 15, link: q("150mm robot wheel hub") },
      { name: "عجلة كاستر دوّارة", role: "توازن القاعدة من الأمام والخلف", qty: 2, price: 8, link: q("caster wheel 2 inch") },
      { name: "درايفر محركات BTS7960 43A", role: "تشغيل كل محرك والتحكم بسرعته", qty: 2, price: 10, link: q("BTS7960 motor driver") },
    ],
  },
  {
    title: "الذراعين والرأس",
    icon: "🦾",
    items: [
      { name: "سيرفو 60kg DS5160", role: "مفاصل الكتف (عزم عالٍ)", qty: 4, price: 32, link: ali("DS5160 servo 60kg") },
      { name: "سيرفو 20kg DS3218", role: "الكوع والرسغ", qty: 6, price: 14, link: q("DS3218 servo 20kg") },
      { name: "قابض (Gripper) معدني", role: "الإمساك بالأشياء الخفيفة", qty: 2, price: 18, link: ali("robot gripper metal claw servo") },
      { name: "سيرفو MG996R", role: "حركة الرأس يمين/يسار وأعلى/أسفل", qty: 2, price: 8, link: q("MG996R servo") },
      { name: "درايفر سيرفو PCA9685 (16 قناة)", role: "التحكم بكل السيرفوهات من سلكين", qty: 1, price: 10, link: q("PCA9685 servo driver") },
    ],
  },
  {
    title: "الحواس",
    icon: "👁️",
    items: [
      { name: "Raspberry Pi Camera Module 3", role: "الرؤية والتعرف على الوجوه", qty: 1, price: 27, link: q("Raspberry Pi Camera Module 3") },
      { name: "ليدار RPLIDAR A1M8", role: "رسم خريطة الغرفة وتفادي العوائق", qty: 1, price: 99, link: q("RPLIDAR A1M8") },
      { name: "مايك USB متعدد الاتجاهات (Array)", role: "سماع الأوامر الصوتية من بعيد", qty: 1, price: 35, link: q("USB microphone array conference") },
      { name: "سماعة 5W + مضخم صوت", role: "الرد بالصوت", qty: 1, price: 15, link: q("PAM8403 amplifier speaker 5W") },
      { name: "حساس مسافة HC-SR04", role: "حماية إضافية من الاصطدام", qty: 4, price: 2.5, link: q("HC-SR04 ultrasonic") },
      { name: "حساس توازن IMU MPU-6050", role: "معرفة الميلان ومنع الانقلاب", qty: 1, price: 5, link: q("MPU6050") },
      { name: "شاشة لمس 7 بوصة", role: "وجه الروبوت وواجهة التحكم", qty: 1, price: 65, link: q("Raspberry Pi 7 inch touch display") },
    ],
  },
  {
    title: "الطاقة",
    icon: "🔋",
    items: [
      { name: "بطارية LiFePO4 24V 20Ah", role: "تشغيل 3 إلى 5 ساعات", qty: 1, price: 170, link: q("LiFePO4 24V 20Ah battery") },
      { name: "شاحن LiFePO4 29.2V 5A", role: "شحن البطارية", qty: 1, price: 35, link: q("LiFePO4 charger 29.2V 5A") },
      { name: "محوّل DC-DC من 24V إلى 5V 5A", role: "تغذية Raspberry Pi والشاشة", qty: 1, price: 12, link: q("24V to 5V 5A buck converter USB-C") },
      { name: "محوّل DC-DC من 24V إلى 7.4V 20A", role: "تغذية السيرفوهات", qty: 1, price: 28, link: ali("24V to 7.4V 20A buck converter") },
      { name: "زر طوارئ + مفتاح رئيسي + فيوزات", role: "الأمان: فصل الكهرباء فوراً", qty: 1, price: 25, link: q("emergency stop button 22mm") },
      { name: "أسلاك وموصلات XT60 وأطراف", role: "التوصيلات", qty: 1, price: 35, link: q("XT60 connector kit silicone wire 14AWG") },
    ],
  },
  {
    title: "الهيكل",
    icon: "🏗️",
    items: [
      { name: "بروفايل ألمنيوم 2020 (حوالي 10 متر)", role: "العمود الفقري والإطار", qty: 1, price: 75, link: q("2020 aluminum extrusion") },
      { name: "زوايا وصواميل وبراغي T-slot", role: "تثبيت الإطار", qty: 1, price: 40, link: q("2020 corner bracket t-nut kit") },
      { name: "لوح ألمنيوم/أكريليك 5 مم للقاعدة", role: "منصة القاعدة والبطارية", qty: 1, price: 45, link: q("aluminum plate 5mm") },
      { name: "خيوط طباعة PETG (3 كجم)", role: "غطاء الجسم، الرأس، أذرع وحوامل", qty: 3, price: 22, link: q("PETG filament 1kg") },
    ],
  },
];

export const steps = [
  { t: "جهّز الإطار", d: "قص بروفايل 2020 إلى: عمود فقري 95 سم، كتفين 40 سم، وقاعدة مربعة 45×45 سم. القاعدة العريضة والبطارية في الأسفل تخلي مركز الثقل منخفض وتمنع الانقلاب." },
  { t: "ركّب القاعدة المتحركة", d: "ثبّت المحركين على جانبي القاعدة (نظام دفع تفاضلي) وعجلتي الكاستر في الأمام والخلف. البطارية في المنتصف تماماً فوق المحور." },
  { t: "وصّل الطاقة", d: "البطارية ← فيوز ← زر الطوارئ ← المفتاح الرئيسي ← لوحة توزيع. منها: الدرايفرات مباشرة على 24V، ومحوّل 5V للمعالج، ومحوّل 7.4V للسيرفوهات. لا توصل السيرفوهات أبداً على كهرباء المعالج." },
  { t: "اطبع وركّب الذراعين", d: "اطبع وصلات الذراع بـ PETG بنسبة ملء 40% على الأقل. الكتف: سيرفوين 60kg (رفع ودوران)، الكوع والرسغ: 3 سيرفوهات 20kg، وفي النهاية القابض. طول الذراع حوالي 55 سم والحمل الآمن حتى 300 جرام." },
  { t: "الرأس والحواس", d: "الشاشة في الوجه، الكاميرا فوقها، والرأس على سيرفوين للحركة. الليدار في القاعدة بارتفاع 25 سم بدون أي عائق حوله، وحساسات المسافة الأربعة في زوايا القاعدة." },
  { t: "البرمجة منخفضة المستوى", d: "Arduino Mega يقرأ الـ Encoders والحساسات ويتحكم بالمحركات بـ PID، ويتواصل مع Raspberry Pi عبر USB. PCA9685 يتصل بالـ Pi عبر I2C." },
  { t: "العقل والذكاء", d: "على Raspberry Pi: نظام Ubuntu 24.04 + ROS 2 للملاحة ورسم الخرائط (SLAM)، OpenCV للتعرف على الوجوه، Vosk أو Whisper لفهم الكلام بدون إنترنت، Piper لتحويل النص إلى صوت، ونموذج لغة صغير محلي عبر llama.cpp عشان يرد ويتعلم بدون أي خدمة خارجية." },
  { t: "الاختبار والمعايرة", d: "اختبر كل جزء لحاله قبل التجميع النهائي: المحركات على حامل بدون أرض، السيرفوهات بزوايا صغيرة، ثم الحركة البطيئة في غرفة فاضية. فعّل زر الطوارئ قبل كل تجربة." },
];
