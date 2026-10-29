import { LegalService, Review } from '../types';

export const FIRM_DETAILS = {
  nameAr: 'مكتب المحامية أريج بنت عويض المجنوني',
  nameEn: 'Areej Aweid Al-Majnuni Law Firm',
  titleAr: 'محامية وموثقة معتمدة ومستشارة قانونية',
  titleEn: 'Licensed Attorney & Legal Counselor',
  licenseNumber: '42691',
  phone: '+966548989025',
  phoneDisplay: '+966 54 898 9025',
  email: 'lawyer.7areej@gmail.com',
  cityAr: 'مكة المكرمة',
  cityEn: 'Makkah Al-Mukarramah',
  districtAr: 'حي الشوقية',
  districtEn: 'Al-Shawqiyyah District',
  addressDetailedAr: 'المملكة العربية السعودية، مكة المكرمة، حي الشوقية، الدور الثاني، مكتب رقم (B9)',
  addressDetailedEn: 'Kingdom of Saudi Arabia, Makkah Al-Mukarramah, Al-Shawqiyyah District, 2nd Floor, Office (B9)',
  workingHours: {
    morningAr: 'من 9:00 صباحاً إلى 12:00 ظهراً',
    morningEn: '9:00 AM – 12:00 PM',
    eveningAr: 'من 5:00 مساءً إلى 11:00 مساءً',
    eveningEn: '5:00 PM – 11:00 PM',
    daysAr: 'من الأحد إلى الخميس (والسبت بموعد مسبق)',
    daysEn: 'Sunday to Thursday (Saturday by appointment)',
  },
  stats: {
    rating: '4.7',
    ratingMax: '5.0',
    reviewsCount: '+131',
    experienceYears: '+5',
    license: '42691'
  }
};

export const LEGAL_SERVICES: LegalService[] = [
  {
    id: 'diwan-al-mazalim',
    number: '01',
    category: 'administrative',
    titleAr: 'تقديم القضايا بديوان المظالم',
    titleEn: 'Board of Grievances & Administrative Cases',
    shortDescAr: 'الترافع والتمثيل المتخصص في الدعاوى الإدارية ومنازعات العقود الحكومية وقرارات اللجان أمام كافة محاكم ديوان المظالم.',
    shortDescEn: 'Specialized litigation in administrative lawsuits, government contract disputes, and challenging public committee decisions before Board of Grievances courts.',
    fullDescAr: 'تتميز المحامية أريج المجنوني بخبرة رصينة في الترافع أمام محاكم ديوان المظالم بمختلف دوائرها، بما يشمل دعاوى إلغاء القرارات الإدارية المعيبة، ودعاوى التعويض عن الأضرار الناشئة عن قرارات جهات الإدارة، ومنازعات عقود المشتريات والمقاولات الحكومية، والتظلمات الوظيفية لمنسوبي القطاعات الحكومية وشبه الحكومية.',
    fullDescEn: 'We provide specialized legal advocacy before the Board of Grievances administrative circuits, including nullification of unlawful administrative decisions, compensation claims against government entities, disputes arising from public procurement and government contracting, and administrative employee grievances.',
    featuresAr: [
      'دعاوى إلغاء القرارات الإدارية الصادرة من الجهات الحكومية',
      'منازعات عقود التوريد والمقاولات والمشتريات الحكومية',
      'دعاوى طلب التعويض المالي عن أخطاء الإدارة والقرارات غير المشروعة',
      'التظلمات النظامية الوظيفية وحقوق الموظفين النظامية'
    ],
    featuresEn: [
      'Lawsuits seeking revocation of unlawful administrative decisions',
      'Public procurement, supply, and government contract disputes',
      'Compensation claims for administrative harm and procedural errors',
      'Civil service grievances and employment entitlement claims'
    ]
  },
  {
    id: 'litigation-defense',
    number: '02',
    category: 'litigation',
    titleAr: 'القضايا والمرافعات القضائية',
    titleEn: 'Litigation & Court Representation',
    shortDescAr: 'التمثيل القضائي الشامل والدفاع عن حقوق الموكلين بحجة نظامية متينة أمام مختلف المحاكم واللجان شبه القضائية.',
    shortDescEn: 'Comprehensive judicial representation and robust defense before General, Commercial, Labor, and quasi-judicial committees.',
    fullDescAr: 'تمثيل الأفراد والشركات والمؤسسات في كافة مراحل التقاضي: بدءاً من قيد الدعوى وإعداد دفوعها، والمرافعة الشفهية والتحريرية، وتقديم البينات والدفوع الشكلية والموضوعية، ووصولاً إلى متابعة صدور الأحكام وتنفيذها عبر محاكم التنفيذ.',
    fullDescEn: 'Representing clients across all phases of litigation: filing the claim, formulating defensive pleadings, oral and written arguments, presenting evidentiary records, and following through to judgment execution via the Enforcement Courts.',
    featuresAr: [
      'الترافع أمام المحاكم العامة، التجارية، العمالية، والجزائية',
      'التمثيل أمام اللجان المصرفية، الجمركية، واللجان شبه القضائية',
      'متابعة إجراءات التنفيذ واسترداد الحقوق المالية وسندات لأمر',
      'حضور الجلسات القضائية المرئية والوجاهية بكل كفاءة'
    ],
    featuresEn: [
      'Litigation in General, Commercial, Labor, and Criminal courts',
      'Representation before banking, customs, and quasi-judicial committees',
      'Enforcement procedures and recovery of promissory notes and financial claims',
      'Effective presence in both virtual and in-person court hearings'
    ]
  },
  {
    id: 'drafting-pleadings',
    number: '03',
    category: 'drafting',
    titleAr: 'صياغة اللوائح والمذكرات',
    titleEn: 'Drafting Pleadings & Defense Memorandums',
    shortDescAr: 'إعداد لوائح الدعوى، المذكرات الجوابية، ولوائح الاعتراض والاستئناف بحجة قانونية واستدلال قضائي دقيق ومؤثر.',
    shortDescEn: 'Preparation of case petitions, responsive briefs, objection memos, and appeal memorandums with rigorous legal argumentation.',
    fullDescAr: 'تُبنى الأحكام القضائية على قوة المذكرات وحصافة الحجة النظامية. نقدم خدمة صياغة احترافية لصحف الدعاوى، ولوائح الرد، ومذكرات الدفاع الشاملة، ولوائح الاعتراض على الأحكام أمام محاكم الاستئناف والمحكمة العليا، مع تدعيمها بالسوابق القضائية والنصوص النظامية المعتمدة.',
    fullDescEn: 'Judicial outcomes depend on persuasive briefs and rigorous statutory grounding. We draft high-impact statement of claims, responsive defense briefs, appeals, and petitions for reconsideration before the Courts of Appeal and Supreme Court.',
    featuresAr: [
      'صياغة لوائح الاعتراض والاستئناف والالتماس بدقة بالغة',
      'تحرير المذكرات الجوابية والدفوع الشكلية والموضوعية',
      'تفنيد حجج الخصوم وتدعيم الموقف بالسوابق القضائية السعودية',
      'إعداد مذكرات حصر وقائع النزاع وتكييفها الشرعي والنظامي'
    ],
    featuresEn: [
      'Appellate objection briefs and Supreme Court petitions',
      'Defense answers and substantive legal defenses',
      'Refutation of opposing arguments backed by Saudi judicial precedents',
      'Fact summaries and precise statutory legal characterization'
    ]
  },
  {
    id: 'legal-consultations',
    number: '04',
    category: 'consultation',
    titleAr: 'الاستشارات القانونية المتخصصة',
    titleEn: 'Specialized Legal Consultations',
    shortDescAr: 'تقديم الرأي النظامي السديد للأفراد والمنشآت لدراسة الموقف القانوني وحماية المصالح وتجنب النزاعات قبل نشوئها.',
    shortDescEn: 'Providing sound statutory counsel for individuals and commercial entities to analyze legal standing and mitigate risks before disputes arise.',
    fullDescAr: 'استشارات قانونية وقائية وعلاجية تغطي الأنظمة السعودية المعاصرة (نظام الشركات، المعاملات المدنية، العمل، الإثبات، وغيرها). نساعدك في اتخاذ القرار الصائب المبني على دراسة تفصيلية للموقف وتوضيح الفرص والمخاطر.',
    fullDescEn: 'Preventative and diagnostic legal counsel covering contemporary Saudi legal frameworks (Civil Transactions, Companies Law, Evidence Law, Labor Law). Empowering informed decisions with detailed risk/opportunity appraisals.',
    featuresAr: [
      'استشارات وقائية للمنشآت التجارية ورواد الأعمال',
      'دراسة الموقف النظامي للملفات المعقدة وتقديم تقارير مكتوبة',
      'استشارات عقارية، أسرية، وتقسيم التركات وتصفيتها',
      'جلسات استشارية حضورية بمقر المكتب أو عبر الاتصال المرئي'
    ],
    featuresEn: [
      'Preventative counsel for commercial enterprises & entrepreneurs',
      'Legal standing evaluations and formal written advisory memos',
      'Real estate, family estate, and inheritance liquidation guidance',
      'In-person consultations at the Makkah office or video conferences'
    ]
  },
  {
    id: 'contract-drafting',
    number: '05',
    category: 'contracts',
    titleAr: 'صياغة وتدقيق العقود والاتفاقيات',
    titleEn: 'Contract Drafting & Due Diligence',
    shortDescAr: 'كتابة ومراجعة وتدقيق كافة أنواع العقود والاتفاقيات التجارية لضمان حفظ الحقوق ومنع الثغرات النظامية.',
    shortDescEn: 'Drafting, auditing, and reviewing commercial and private agreements to safeguard rights and eliminate legal loopholes.',
    fullDescAr: 'صياغة العقود هي صمام الأمان لأي علاقة تجارية أو مدنية. نقوم بصياغة ومراجعة عقود الشراكة، والتأسيس، وعقود المقاولات والتوريد، وعقود العمل والوساطة العقارية، وتدقيق البنود الجزائية وشروط التحكيم بما يتوافق مع الأنظمة السعودية الحديثة.',
    fullDescEn: 'Contract drafting is the bedrock of secure business and civil relationships. We draft and audit partnership agreements, articles of incorporation, construction contracts, supply accords, employment covenants, and dispute resolution clauses.',
    featuresAr: [
      'صياغة عقود الشركات والاتفاقيات التجارية ومذكرات التفاهم',
      'مراجعة وتدقيق العقود القائمة واستخراج الثغرات والمخاطر',
      'صياغة الشروط الجزائية، بنود التحكيم، والسرية وعدم المنافسة',
      'عقود المقاولات والتطوير العقاري واتفاقيات الوساطة'
    ],
    featuresEn: [
      'Partnership agreements, commercial contracts & MOUs',
      'Rigorous audit of existing agreements to identify legal liabilities',
      'Drafting liquidated damages, arbitration, and NDA clauses',
      'Construction, real estate development, and brokerage covenants'
    ]
  }
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    authorAr: 'داوود زاهد',
    authorEn: 'Dawood Zahed',
    rating: 5,
    dateAr: 'منذ شهر',
    dateEn: '1 month ago',
    textAr: 'تعاملهم جداً راقي وماشاء الله شغلهم دقيق وعلى أكمل وجه، أتمنى لهم التوفيق ومزيداً من النجاح الدائم.',
    textEn: 'Their service is very classy, mashallah their work is meticulous and completed to perfection. I wish them continued success.',
    source: 'Google Maps',
    verified: true
  },
  {
    id: 'rev-2',
    authorAr: 'عميل موثق',
    authorEn: 'Verified Client',
    rating: 5,
    dateAr: 'منذ أسبوعين',
    dateEn: '2 weeks ago',
    textAr: 'أقدر بشدة عملك الجاد وخدمتك للآخرين ومتابعتك الدقيقة لمجريات القضية بكل احترافية وأمانة، جزاك الله خيراً وبارك في علمك.',
    textEn: 'I deeply appreciate your hard work, service to others, and meticulous follow-up on case developments with absolute integrity and professionalism.',
    source: 'Google Maps',
    verified: true
  },
  {
    id: 'rev-3',
    authorAr: 'أبو فيصل الحربي',
    authorEn: 'Abu Faisal Al-Harbi',
    rating: 5,
    dateAr: 'منذ شهرين',
    dateEn: '2 months ago',
    textAr: 'المحامية أريج متمكنة جداً في صياغة اللائحة الاعتراضية، كسبنا القضية بفضل الله ثم حجتها القانونية الراسخة. أنصح بشدة بالتعامل معها.',
    textEn: 'Advocate Areej is exceptionally proficient in drafting objection briefs. We prevailed thanks to God and her rigorous legal reasoning. Highly recommended.',
    source: 'Google Maps',
    verified: true
  },
  {
    id: 'rev-4',
    authorAr: 'شركة أفق التجارة للمقاولات',
    authorEn: 'Ofuq Al-Tijara Contracting Co.',
    rating: 5,
    dateAr: 'منذ 3 أشهر',
    dateEn: '3 months ago',
    textAr: 'تعاملنا مع المكتب في تدقيق عقود شراكة وصياغة اتفاقيات توريد معقدة. دقة والتزام بالمواعيد واحترافية عالية توفر راحة البال للتاجر.',
    textEn: 'We engaged the firm to audit partnership agreements and draft complex supply contracts. Punctual, meticulous, and provided true legal peace of mind.',
    source: 'Google Maps',
    verified: true
  },
  {
    id: 'rev-5',
    authorAr: 'سارة الشريف',
    authorEn: 'Sarah Al-Sharif',
    rating: 5,
    dateAr: 'منذ 4 أشهر',
    dateEn: '4 months ago',
    textAr: 'استشارة قانونية واضحة ومباشرة أنقذتني من نزاع عقاري وتكاليف باهظة. أمانة وصدق في إعطاء الرأي النظامي، والمكتب بمكة منظم وراقي جداً.',
    textEn: 'Clear, direct legal consultation that saved me from a costly real estate dispute. Honest and transparent guidance, and the office in Makkah is very elegant.',
    source: 'Google Maps',
    verified: true
  },
  {
    id: 'rev-6',
    authorAr: 'عبدالله القحطاني',
    authorEn: 'Abdullah Al-Qahtani',
    rating: 5,
    dateAr: 'منذ 5 أشهر',
    dateEn: '5 months ago',
    textAr: 'مكتب متميز في مكة المكرمة بحي الشوقية، متابعة سريعة عبر الواتساب واهتمام حقيقي بأدق تفاصيل القضية. شكراً جزيلاً للأستاذة أريج.',
    textEn: 'Distinguished law firm in Makkah, Al-Shawqiyyah district. Prompt WhatsApp communication and genuine care for case nuances. Many thanks.',
    source: 'Google Maps',
    verified: true
  }
];

export const FAQS = [
  {
    questionAr: 'كيف يمكنني حجز موعد استشارة مع المحامية أريج المجنوني؟',
    questionEn: 'How can I schedule a consultation with Advocate Areej Al-Majnuni?',
    answerAr: 'يمكنك حجز موعد بكل سهولة من خلال ملء نموذج الحجز المباشر في هذا الموقع أو عبر التواصل الفوري عبر الواتساب على الرقم +966548989025. يتم التنسيق وتحديد الموعد سواء حضورياً بمقر المكتب بحي الشوقية أو عن بعد.',
    answerEn: 'You can easily schedule by completing the direct booking form on this site or contacting us directly via WhatsApp at +966548989025. Appointments can be scheduled in-person at our Al-Shawqiyyah office or remotely.'
  },
  {
    questionAr: 'ما هي مواعيد العمل الرسمية للمكتب؟',
    questionEn: 'What are the official working hours of the office?',
    answerAr: 'يعمل المكتب بفترتين يومياً من الأحد إلى الخميس: الفترة الصباحية من 9:00 صباحاً إلى 12:00 ظهراً، والفترة المسائية من 5:00 مساءً إلى 11:00 مساءً. كما نستقبل الاستفسارات العاجلة عبر الواتساب على مدار الساعة.',
    answerEn: 'The office operates in two daily shifts Sunday through Thursday: Morning Shift from 9:00 AM to 12:00 PM, and Evening Shift from 5:00 PM to 11:00 PM. WhatsApp inquiries are also received throughout.'
  },
  {
    questionAr: 'ما هي اختصاصات المكتب في قضايا ديوان المظالم؟',
    questionEn: 'What is the firm’s scope in Board of Grievances cases?',
    answerAr: 'يتولى المكتب دراسة وإعداد والترافع في الدعاوى الإدارية ومنازعات العقود الحكومية، ودعاوى إلغاء القرارات الإدارية، ومطالبات التعويض، والتظلمات الوظيفية لموظفي الدولة أمام مختلف دوائر محاكم ديوان المظالم.',
    answerEn: 'We prepare, file, and litigate administrative suits, public contract disputes, annulment of administrative decisions, financial restitution claims, and civil service grievances before the Board of Grievances.'
  },
  {
    questionAr: 'هل يتطلب الأمر الحضور الشخصي لمقر المكتب بمكة المكرمة؟',
    questionEn: 'Is personal attendance at the Makkah office mandatory?',
    answerAr: 'المكتب مهيأ بالكامل لاستقبالكم في حي الشوقية (الدور الثاني - مكتب B9)، كما نقدم خدمات التمثيل والاستشارات وصياغة اللوائح إلكترونياً لعملائنا في كافة مدن المملكة وخارجها مع توثيق الوكالات عبر منصة ناجز.',
    answerEn: 'Our office is fully prepared to welcome you in Al-Shawqiyyah (2nd Floor, Office B9). We also provide end-to-end representation, digital consultations, and legal drafting across Saudi Arabia via the Najiz judicial portal.'
  },
  {
    questionAr: 'كيف تضمنون سرية وخصوصية بيانات الموكلين؟',
    questionEn: 'How is client confidentiality and data privacy guaranteed?',
    answerAr: 'نلتزم بأعلى معايير الأمانة والسرية المهنية وفقاً لنظام المحاماة السعودي وميثاق شرف المهنة، ولا يتم الاطلاع على أي مستندات أو أسرار إلا من قبل المحامية وفريق العمل القانوني المباشر.',
    answerEn: 'We adhere to the highest standards of professional privilege and confidentiality under the Saudi Code of Law. All documents and case information remain strictly confidential.'
  }
];
