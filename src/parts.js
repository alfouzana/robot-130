// Bill of materials. Prices are approximate USD (2026), single unit price.
const q = (s) => "https://www.amazon.sa/s?k=" + encodeURIComponent(s);
const ali = (s) => "https://www.aliexpress.com/w/wholesale-" + encodeURIComponent(s.replace(/ /g, "-")) + ".html";

export const groups = [
  {
    title: "العقل الإلكتروني",
    icon: "🧠",
    items: [
      { name: "NVIDIA Jetson Orin Nano Super (8GB)", role: "المعالج الرئيسي: التوازن والمشي، الرؤية، الصوت، الذكاء", qty: 1, price: 249, link: q("Jetson Orin Nano Super Developer Kit") },
      { name: "SSD NVMe 256GB", role: "تخزين النظام ونموذج اللغة المحلي", qty: 1, price: 30, link: q("NVMe SSD 256GB 2280") },
      { name: "محوّل USB إلى CAN (CANable 2.0)", role: "التواصل مع محركات الرجلين (خط لكل رجل)", qty: 2, price: 30, link: ali("CANable 2.0 USB CAN") },
      { name: "متحكم ESP32-S3", role: "قراءة حساسات القدمين والتحكم بسيرفوهات الذراعين", qty: 1, price: 12, link: q("ESP32-S3 DevKitC") },
    ],
  },
  {
    title: "الرجلين (12 مفصل)",
    icon: "🦿",
    items: [
      { name: "محرك مفصلي BLDC عالي العزم (مثل RobStride 03 أو Steadywin GIM8115-9)", role: "الورك الأمامي والركبة: أكثر مفاصل تتحمل الوزن", qty: 4, price: 320, link: ali("RobStride 03 actuator") },
      { name: "محرك مفصلي BLDC متوسط (مثل RobStride 02 أو Steadywin GIM6010-8)", role: "دوران وميلان الورك + الكاحل", qty: 8, price: 170, link: ali("RobStride 02 actuator") },
      { name: "حساس ضغط FSR 402", role: "4 حساسات في كل قدم لمعرفة نقطة الارتكاز", qty: 8, price: 7, link: q("FSR 402 force sensor") },
      { name: "رمان بلي ومحاور وقارنات", role: "تثبيت المفاصل وتقليل الاحتكاك", qty: 1, price: 60, link: q("flange bearing kit robot") },
    ],
  },
  {
    title: "الذراعين والرأس",
    icon: "🦾",
    items: [
      { name: "سيرفو ذكي ST3215 (30kg، بتغذية راجعة)", role: "الكتف والكوع والرسغ (4 لكل ذراع)", qty: 8, price: 20, link: ali("Feetech ST3215 servo") },
      { name: "قابض (Gripper) خفيف", role: "الإمساك بالأشياء الخفيفة", qty: 2, price: 18, link: ali("robot gripper servo claw") },
      { name: "سيرفو ST3215 للرأس", role: "حركة الرأس يمين/يسار وأعلى/أسفل", qty: 2, price: 20, link: ali("Feetech ST3215 servo") },
      { name: "لوحة تحكم سيرفو Waveshare Bus Servo Adapter", role: "توصيل كل السيرفوهات على خط واحد", qty: 1, price: 12, link: q("Waveshare bus servo adapter") },
    ],
  },
  {
    title: "الحواس",
    icon: "👁️",
    items: [
      { name: "IMU دقيق BNO085", role: "أهم حساس للمشي: يعرف ميلان الجسم 400 مرة بالثانية", qty: 1, price: 25, link: q("BNO085 IMU") },
      { name: "كاميرا عمق OAK-D Lite", role: "يشوف المسافات والعوائق والوجوه", qty: 1, price: 150, link: q("OAK-D Lite depth camera") },
      { name: "مايك USB متعدد الاتجاهات (Array)", role: "سماع الأوامر الصوتية", qty: 1, price: 35, link: q("USB microphone array conference") },
      { name: "سماعة 5W + مضخم صوت", role: "الرد بالصوت", qty: 1, price: 15, link: q("PAM8403 amplifier speaker 5W") },
      { name: "شاشة 5 بوصة دائرية/مستطيلة", role: "وجه الروبوت وتعابيره", qty: 1, price: 45, link: q("5 inch HDMI display small") },
    ],
  },
  {
    title: "الطاقة",
    icon: "🔋",
    items: [
      { name: "بطارية Li-ion 48V 10Ah (تفريغ 30A)", role: "تشغيل 45 إلى 90 دقيقة مشي", qty: 1, price: 220, link: q("48V 10Ah lithium battery pack 30A BMS") },
      { name: "شاحن 54.6V 3A", role: "شحن البطارية", qty: 1, price: 40, link: q("54.6V 3A lithium charger") },
      { name: "محوّل DC-DC من 48V إلى 19V", role: "تغذية Jetson", qty: 1, price: 25, link: q("48V to 19V DC converter") },
      { name: "محوّل DC-DC من 48V إلى 12V 10A", role: "تغذية سيرفوهات الذراعين والرأس", qty: 1, price: 25, link: q("48V to 12V 10A buck converter") },
      { name: "زر طوارئ لاسلكي + مفتاح رئيسي + فيوزات", role: "الأمان: فصل المحركات فوراً لو سقط", qty: 1, price: 45, link: q("wireless emergency stop relay 48V") },
      { name: "أسلاك سيليكون 12AWG وموصلات XT60/XT30", role: "التوصيلات", qty: 1, price: 40, link: q("XT60 connector kit silicone wire 12AWG") },
    ],
  },
  {
    title: "الهيكل",
    icon: "🏗️",
    items: [
      { name: "أنابيب كربون فايبر 25 مم (عظام الساق والفخذ)", role: "خفيفة وقوية: كل جرام في الرجل يفرق", qty: 4, price: 18, link: q("carbon fiber tube 25mm 500mm") },
      { name: "ألواح ألمنيوم 4 مم مقصوصة CNC", role: "الحوض والصدر وحوامل المحركات", qty: 1, price: 150, link: q("aluminum plate 4mm 6061") },
      { name: "خيوط طباعة نايلون كربون PA-CF (2 كجم)", role: "القدمين والوصلات اللي تتحمل ضغط", qty: 2, price: 45, link: q("PA-CF nylon carbon filament") },
      { name: "خيوط PETG (2 كجم)", role: "غطاء الجسم والرأس", qty: 2, price: 22, link: q("PETG filament 1kg") },
      { name: "براغي وصواميل ستانلس (طقم)", role: "التجميع", qty: 1, price: 30, link: q("M3 M4 M5 stainless screw kit") },
      { name: "حامل أمان (جانتري) بحبل", role: "يمسك الروبوت من الأعلى أثناء تجارب المشي الأولى", qty: 1, price: 70, link: q("hoist pulley rope ceiling") },
    ],
  },
];

export const steps = [
  { t: "صمّم واطبع الهيكل", d: "الطول 130 سم موزع: رأس 20، جذع 45، فخذ 30، ساق 30، قدم 5. الوزن المستهدف 25 كجم أو أقل. اطبع القدمين والوصلات بالنايلون كربون بنسبة ملء 60%، والأغطية بـ PETG." },
  { t: "جمّع الرجلين", d: "كل رجل 6 محركات: الورك (دوران، ميلان، أمام/خلف)، الركبة، الكاحل (أمام/خلف، ميلان). خلّ المحركات الثقيلة قريبة من الحوض وانقل حركة الركبة والكاحل بأذرع توصيل، عشان تكون الرجل خفيفة من تحت وسريعة الحركة." },
  { t: "ركّب الجذع والذراعين والرأس", d: "البطارية في الحوض (أقرب نقطة لمركز الثقل)، Jetson في الصدر، الذراعين بـ 4 سيرفوهات لكل وحدة، والرأس فيه الشاشة وكاميرا العمق." },
  { t: "وصّل الطاقة والاتصال", d: "البطارية ← فيوز ← زر الطوارئ ← المحركات على 48V مباشرة. محولات منفصلة لـ Jetson والسيرفوهات. محركات كل رجل على خط CAN مستقل، وIMU في منتصف الحوض بالضبط." },
  { t: "اختبر كل مفصل", d: "والروبوت معلّق على الحامل: حرّك كل محرك لحاله بزوايا صغيرة، اضبط حدود الحركة في كل درايفر، وتأكد إن زر الطوارئ يفصل كل شي." },
  { t: "علّمه يمشي في المحاكاة", d: "ارسم نسخة رقمية مطابقة للروبوت (ملف URDF بالأوزان والأطوال الحقيقية)، ودرّبه على المشي بالتعلم المعزّز في MuJoCo أو Isaac Lab. يتعلم الروبوت الافتراضي المشي من نفسه بعد ملايين المحاولات خلال ساعات على جهاز فيه كرت شاشة قوي." },
  { t: "انقل المشي للروبوت الحقيقي", d: "شغّل الخوارزمية المدربة على Jetson. ابدأ والروبوت معلّق ورجليه بالكاد تلمس الأرض، ثم خفف الحبل تدريجياً. توقع عدة جولات تعديل بين المحاكاة والواقع قبل ما يمشي بثبات." },
  { t: "العقل والذكاء", d: "على Jetson: Whisper لفهم الكلام بدون إنترنت، Piper للرد بصوت، ونموذج لغة صغير محلي عبر llama.cpp عشان يفكر ويرد ويتذكر بدون أي خدمة خارجية، وOpenCV مع كاميرا العمق للتعرف على الوجوه وتفادي العوائق." },
];
