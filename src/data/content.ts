import { ServiceItem, SolarPlan, TestimonialItem, FaqItem, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: "SHUBH ENTERPRISES & INTERNET CAFE",
  nameHi: "शुभ एंटरप्राइजेज एंड इंटरनेट कैफे",
  owner: "Shubh Rajpoot",
  ownerHi: "शुभ राजपूत",
  phone: "7007235826",
  phoneAlt: "7081971550",
  whatsappNumber: "917007235826",
  whatsappUrl: "https://wa.me/917007235826",
  addressEn: "Lok Nagar, Jurakhan Kheda, Unnao, Uttar Pradesh 209801 (Near Sukh Dev Ata Chakki)",
  addressHi: "लोक नगर, जुराखन खेड़ा, उन्नाव, उत्तर प्रदेश 209801 (सुख देव आटा चक्की के पास)",
  landmark: "Near Sukh Dev Ata Chakki",
  landmarkHi: "सुख देव आटा चक्की के पास",
  hoursEn: "Monday to Sunday: 8:00 AM – 9:00 PM",
  hoursHi: "सोमवार से रविवार: प्रातः 8:00 बजे से रात्रि 9:00 बजे तक",
  email: "shubhenterprisesunnao@gmail.com",
  mapCoordinates: {
    lat: 26.5459,
    lng: 80.4908,
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14304.591244302685!2d80.47895126442651!3d26.545934571966567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4767114b7e8d%3A0xea581451f0449d01!2sUnnao%2C%20Uttar%20Pradesh%20209801!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  // Printing & Xerox
  {
    id: "printing-color-bw",
    category: "printing",
    titleEn: "High-Quality Printing (Colour & B/W)",
    titleHi: "हाई-क्वालिटी प्रिंटिंग (कलर / ब्लैक & व्हाइट)",
    subtitleEn: "Laser & inkjet sharp prints on premium paper",
    subtitleHi: "प्रीमियम पेपर पर स्पष्ट और चमकदार लेज़र प्रिंट",
    descriptionEn: "Fast, crisp black & white and vibrant multi-colour printing for school projects, legal documents, resumes, official reports, and bills.",
    descriptionHi: "स्कूल प्रोजेक्ट, कोर्ट एफिडेविट, बायोडाटा, रिपोर्ट और बिलों के लिए साफ़ और तेज़ी से ब्लैक & व्हाइट एवं रंगीन प्रिंटिंग सुविधा।",
    iconName: "Printer",
    highlightsEn: [
      "High speed laser & inkjet printing",
      "A4, Legal, Letter & Photo glossy sheets",
      "Bulk print discount for students & institutes",
      "Direct print from WhatsApp, Email, & Pen Drive"
    ],
    highlightsHi: [
      "हाई स्पीड लेज़र व कलर प्रिंटिंग",
      "A4, लीगल, लेटर व ग्लॉसी फोटो पेपर",
      "छात्रों और थोक प्रिंट के लिए विशेष छूट",
      "व्हाट्सएप, ईमेल व पेनड्राइव से सीधा प्रिंट"
    ],
    docsRequiredEn: ["PDF / Word / JPG file on phone, WhatsApp or pendrive"],
    docsRequiredHi: ["फोन, व्हाट्सएप या पेनड्राइव में पीडीएफ या इमेज फाइल"],
    featured: true
  },
  {
    id: "photocopy-scanning",
    category: "printing",
    titleEn: "Photocopy (Xerox) & Document Scanning",
    titleHi: "फोटो कॉपी (जेरॉक्स) एवं डॉक्यूमेंट स्कैनिंग",
    subtitleEn: "Clear duplicate copies & high-DPI digitization",
    subtitleHi: "साफ़ फोटो कॉपी और उच्च रेजोल्यूशन पीडीएफ स्कैन",
    descriptionEn: "Fast single & double-sided photocopies with high contrast, plus optical scanning of certificates, land records, marksheets, and ID proofs into PDF/JPG.",
    descriptionHi: "सिंगल व दोनों साइड की साफ़ फोटोकॉपी, मार्कशीट, जमीन के कागज और पहचान पत्रों की सुरक्षित स्कैनिंग व पीडीएफ तैयार करना।",
    iconName: "Copy",
    highlightsEn: [
      "Clear, smudge-free high contrast Xerox",
      "High-resolution 300 to 600 DPI scanning",
      "Multi-page merge into single PDF",
      "Direct email and WhatsApp delivery"
    ],
    highlightsHi: [
      "साफ़ और बिना दाग वाली जेरॉक्स कॉपी",
      "300 से 600 DPI हाई-रेजोल्यूशन स्कैन",
      "कई पन्नों को एक ही पीडीएफ में जोड़ना",
      "ईमेल व व्हाट्सएप पर तुरंत ट्रांसफर"
    ],
    docsRequiredEn: ["Original document or photocopy"],
    docsRequiredHi: ["मूल दस्तावेज या कॉपी"]
  },
  {
    id: "photo-passport",
    category: "printing",
    titleEn: "Photo Printing & Passport Photos",
    titleHi: "पासपोर्ट साइज फोटो एवं फोटो प्रिंटिंग",
    subtitleEn: "Instant 5-minute passport photos with white/blue bg",
    subtitleHi: "मात्र 5 मिनट में सरकारी मानकों अनुसार पासपोर्ट फोटो",
    descriptionEn: "Professional studio-lit passport-size photos with correct background specifications for competitive exams, police verification, visa, and college admissions.",
    descriptionHi: "सरकारी नौकरी, पुलिस भर्ती, कॉलेज एडमिशन और पहचान पत्र हेतु तुरंत व्हाइट/ब्लू बैकग्राउंड पासपोर्ट साइज फोटो तैयार।",
    iconName: "Camera",
    highlightsEn: [
      "Ready in just 5 minutes",
      "Clean background removal & touchup",
      "4, 8, 16, 32 photo sheets available",
      "Soft copy sent on WhatsApp instantly"
    ],
    highlightsHi: [
      "मात्र 5 मिनट में तैयार",
      "बैकग्राउंड सफाई व सही ड्रेसिंग टचअप",
      "4, 8, 16 व 32 फोटो शीट की सुविधा",
      "सॉफ्ट कॉपी तुरंत व्हाट्सएप पर उपलब्ध"
    ],
    featured: true
  },
  {
    id: "lamination-services",
    category: "printing",
    titleEn: "Document & ID Card Lamination",
    titleHi: "डॉक्यूमेंट एवं आईडी कार्ड लेमिनेशन",
    subtitleEn: "Waterproof thermal protective lamination",
    subtitleHi: "वाटरप्रूफ एवं टिकाऊ थर्मल लेमिनेशन",
    descriptionEn: "Long-lasting hot lamination for marksheets, Aadhaar cards, PAN cards, property documents, and certificates to protect against moisture, dust and tearing.",
    descriptionHi: "मार्कशीट, आधार, पैन कार्ड, खतौनी और प्रमाण पत्रों को नमी, पानी और फटने से बचाने के लिए मजबूत थर्मल लेमिनेशन।",
    iconName: "ShieldCheck",
    highlightsEn: [
      "Heavy micron durable pouch film",
      "Aadhaar / PAN card pocket size lamination",
      "A4 and Legal certificate lamination",
      "Bubble-free smooth glossy finish"
    ],
    highlightsHi: [
      "मजबूत एवं टिकाऊ लैमिनेटिंग पाउच",
      "आधार/पैन कार्ड पॉकेट साइज लेमिनेशन",
      "A4 व लीगल साइज मार्कशीट लेमिनेशन",
      "बिना बबल वाली स्मूद फिनिश"
    ]
  },
  {
    id: "pendrive-printout",
    category: "printing",
    titleEn: "Pen Drive & Printout Services",
    titleHi: "पेन ड्राइव एवं प्रिंट आउट सेवाएँ",
    subtitleEn: "Fast digital file access, formatting & typing",
    subtitleHi: "डिजिटल फाइल प्रिंट, हिंदी/इंग्लिश टाइपिंग व डेटा ट्रांसफर",
    descriptionEn: "Bring documents via Pen Drive, OTG, Memory Card or WhatsApp. We assist with Hindi/English typing, resume formatting, affidavit layout, and instant printouts.",
    descriptionHi: "पेन ड्राइव, मेमोरी कार्ड या व्हाट्सएप से फाइल लाएं। हम हिंदी/इंग्लिश टाइपिंग, रिज्यूमे मेकिंग, एफिडेविट टाइपिंग व तुरंत प्रिंटिंग में पूरी सहायता करते हैं।",
    iconName: "HardDrive",
    highlightsEn: [
      "Virus-free safe data handling",
      "Hindi & English official typing",
      "Professional resume & CV design",
      "Instant formatting and alignment"
    ],
    highlightsHi: [
      "सुरक्षित व वायरस-मुक्त डेटा ट्रांसफर",
      "हिंदी व अंग्रेजी आधिकारिक टाइपिंग",
      "आकर्षक रिज्यूमे (बायोडाटा) निर्माण",
      "तुरंत फॉर्मेटिंग व पेज सेटिंग"
    ]
  },

  // Online Application Services
  {
    id: "govt-exam-forms",
    category: "online_forms",
    titleEn: "Govt & Non-Govt Online Form Filling",
    titleHi: "ऑनलाइन फॉर्म (सरकारी / गैर सरकारी)",
    subtitleEn: "Accurate form filling for SSC, UP Police, UPSSSC, Railway, Army",
    subtitleHi: "यूपी पुलिस, एसएससी, रेलवे, शिक्षक भर्ती फॉर्म बिना गलती के भरें",
    descriptionEn: "Experienced assistance with online competitive recruitment applications, admit cards, result downloads, answer key verification, and fee submissions.",
    descriptionHi: "प्रतियोगी परीक्षाओं के फॉर्म, एडमिट कार्ड, रिजल्ट, आंसर की और ऑनलाइन फीस जमा करने में अनुभवी ऑपरेटर द्वारा त्रुटिहीन सहायता।",
    iconName: "FileCheck2",
    highlightsEn: [
      "Zero-error application submission check",
      "Photo and signature resizing as per official guidelines",
      "Instant printable receipt & SMS/Email confirmation",
      "Notification assistance for upcoming deadlines"
    ],
    highlightsHi: [
      "बिना किसी त्रुटि के फॉर्म की प्रीव्यू जांच",
      "आधिकारिक साइज अनुसार फोटो-साइन रीसाइज़िंग",
      "तुरंत फाइनल प्रिंट रसीद उपलब्ध",
      "आगामी फॉर्म व अंतिम तिथि की जानकारी"
    ],
    docsRequiredEn: ["10th/12th/Graduation Marksheet", "Aadhaar Card", "Passport Photo & Signature", "Caste / Domicile / EWS (if applicable)"],
    docsRequiredHi: ["10वीं/12वीं की मार्कशीट", "आधार कार्ड", "पासपोर्ट फोटो व हस्ताक्षर", "जाति / निवास / ईडब्ल्यूएस प्रमाणपत्र (यदि लागू हो)"],
    featured: true
  },
  {
    id: "certificate-assistance",
    category: "online_forms",
    titleEn: "Online Document & Certificate Assistance",
    titleHi: "ऑनलाइन दस्तावेज एवं प्रमाण पत्र सहायता",
    subtitleEn: "Income, Caste, Domicile, E-District & Scholarship forms",
    subtitleHi: "आय, जाति, निवास प्रमाण पत्र एवं छात्रवृत्ति (UP Scholarship) सहायता",
    descriptionEn: "Assistance in filling applications for Income, Caste, Domicile, UP Scholarship, Ration Card, Khatauni land records, and online government verification.",
    descriptionHi: "ई-डिस्ट्रिक्ट पोर्टल पर आय, जाति, निवास, राशन कार्ड, छात्रवृत्ति एवं खतौनी नकल आवेदन में संपूर्ण मार्गदर्शन व सहायता।",
    iconName: "Award",
    highlightsEn: [
      "UP Scholarship pre & post matric application assistance",
      "Income (Aay), Caste (Jati), Domicile (Niwas) guidance",
      "Status tracking of submitted applications",
      "Clean digital certificate download & lamination"
    ],
    highlightsHi: [
      "यूपी स्कॉलरशिप प्री व पोस्ट मैट्रिक फॉर्म सहायता",
      "आय, जाति व निवास प्रमाण पत्र आवेदन मार्गदर्शन",
      "आवेदन की ऑनलाइन स्थिति (स्टेटस) की जांच",
      "प्रमाण पत्र डाउनलोड व लैमिनेटेड कॉपी"
    ],
    docsRequiredEn: ["Aadhaar linked with mobile", "Ration Card / Parivar Register", "Previous Certificate (if renewal)", "Bank Passbook"],
    docsRequiredHi: ["आधार कार्ड (मोबाइल लिंक्ड)", "राशन कार्ड या परिवार रजिस्टर", "पुराना प्रमाणपत्र (यदि नवीनीकरण हो)", "बैंक पासबुक"]
  },
  {
    id: "aadhaar-assistance",
    category: "online_forms",
    titleEn: "Aadhaar Related Assistance",
    titleHi: "आधार संबंधित सहायता (नियम व शर्तों के अधीन)",
    subtitleEn: "Appointment booking, PVC card order, download & verification",
    subtitleHi: "आधार डाउनलोड, पीवीसी कार्ड ऑर्डर, अपॉइंटमेंट व सुधार मार्गदर्शन",
    descriptionEn: "Assistance with e-Aadhaar downloads, official UIDAI PVC card orders, online demographic update guidance, and enrollment center appointment booking under applicable rules.",
    descriptionHi: "यूआईडीएआई नियमों के तहत ई-आधार डाउनलोड, प्लास्टिक पीवीसी कार्ड ऑर्डर, पता सुधार मार्गदर्शन व नजदीकी आधार सेवा केंद्र अपॉइंटमेंट बुकिंग।",
    iconName: "FileText",
    highlightsEn: [
      "Fast e-Aadhaar download via OTP",
      "Official UIDAI smart PVC card order guidance",
      "Aadhaar center appointment slot booking",
      "Strict data privacy & authorized facilitation only"
    ],
    highlightsHi: [
      "ओटीपी द्वारा तुरंत ई-आधार कार्ड डाउनलोड",
      "यूआईडीएआई ओरिजिनल पीवीसी कार्ड ऑनलाइन ऑर्डर",
      "आधार केंद्र के लिए ऑनलाइन अपॉइंटमेंट बुकिंग",
      "पूर्ण गोपनीयता एवं अधिकृत नियमों का पालन"
    ],
    docsRequiredEn: ["Aadhaar number and OTP on registered mobile"],
    docsRequiredHi: ["आधार नंबर एवं रजिस्टर्ड मोबाइल पर आने वाला ओटीपी"]
  },

  // Travel & Booking
  {
    id: "railway-tickets",
    category: "travel",
    titleEn: "Railway Ticket Booking Assistance",
    titleHi: "रेलवे टिकट बुकिंग सहायता",
    subtitleEn: "IRCTC train ticket booking guidance, PNR & tatkal enquiry",
    subtitleHi: "ट्रेन टिकट बुकिंग, पीएनआर स्थिति, सीट उपलब्धता व तत्काल पूछताछ",
    descriptionEn: "Hassle-free railway reservation assistance. We help you check seat availability, route options, confirm PNR status, and process authorized online ticket bookings.",
    descriptionHi: "ट्रेन यात्रा हेतु कन्फर्म सीट खोज, तत्काल पूछताछ, पीएनआर स्टेटस चेक और अधिकृत पोर्टल द्वारा टिकट बुकिंग में त्वरित सहायता।",
    iconName: "Train",
    highlightsEn: [
      "Sleeper, 3AC, 2AC, Chair Car assistance",
      "PNR status & berth confirmation tracking",
      "Cancellation & refund facilitation",
      "Clean printed ticket with route & coach details"
    ],
    highlightsHi: [
      "स्लीपर, 3AC, 2AC व चेयर कार बुकिंग सहायता",
      "पीएनआर स्टेटस व सीट नंबर की जानकारी",
      "कैंसिलेशन एवं रिफंड प्रक्रिया में सहायता",
      "साफ़ प्रिंटेड टिकट एवं यात्रा दिशा-निर्देश"
    ],
    docsRequiredEn: ["Passenger names, age, gender, Aadhaar/ID proof, travel date & station"],
    docsRequiredHi: ["यात्रियों के नाम, उम्र, पहचान पत्र, यात्रा की तिथि व स्टेशन"]
  },
  {
    id: "air-tickets",
    category: "travel",
    titleEn: "Air Ticket Booking Assistance",
    titleHi: "एयर टिकट बुकिंग सहायता",
    subtitleEn: "Domestic & international flight search, web check-in & boarding pass",
    subtitleHi: "घरेलू व अंतरराष्ट्रीय हवाई टिकट, वेब चेक-इन व बोर्डिंग पास प्रिंट",
    descriptionEn: "Find the best flight deals across IndiGo, Air India, SpiceJet, and Akasa Air. We also assist with web check-in, seat selection, and boarding pass printing.",
    descriptionHi: "किफायती हवाई सफर के लिए फ्लाइट टिकट बुकिंग, वेब चेक-इन, पसंदीदा सीट चयन और बोर्डिंग पास प्रिंटिंग की संपूर्ण सुविधा।",
    iconName: "Plane",
    highlightsEn: [
      "Domestic & international flight comparisons",
      "Baggage allowance check & meal add-ons",
      "Free web check-in & boarding pass printout",
      "Flight status & schedule updates"
    ],
    highlightsHi: [
      "घरेलू व अंतरराष्ट्रीय उड़ानों के किरायों की तुलना",
      "बैगेज लिमिट व अतिरिक्त सामान की जानकारी",
      "वेब चेक-इन एवं बोर्डिंग पास का तुरंत प्रिंट",
      "उड़ान समय व टर्मिनल की सही जानकारी"
    ],
    docsRequiredEn: ["Government photo ID (Aadhaar / Voter ID / Passport)"],
    docsRequiredHi: ["सरकारी फोटो पहचान पत्र (आधार / वोटर आईडी / पासपोर्ट)"]
  },

  // Computer & CSC
  {
    id: "internet-workstation",
    category: "computer",
    titleEn: "High-Speed Internet & Computer Facility",
    titleHi: "इंटरनेट सुविधा एवं कंप्यूटर वर्कस्टेशन",
    subtitleEn: "Fast fiber browsing, study & online test practice",
    subtitleHi: "हाई-स्पीड फाइबर इंटरनेट, पढ़ाई व मॉक टेस्ट हेतु सुरक्षित सिस्टम",
    descriptionEn: "Clean, air-cooled computer workstations with high-speed broadband for students, job applicants, and professionals. Ideal for research, typing, and online exams.",
    descriptionHi: "छात्रों एवं युवाओं के लिए हाई-स्पीड ब्रॉडबैंड इंटरनेट, सुरक्षित कंप्यूटर सिस्टम, टाइपिंग अभ्यास एवं ऑनलाइन मॉक टेस्ट देने की बेहतरीन व्यवस्था।",
    iconName: "Globe",
    highlightsEn: [
      "High speed optical fiber connectivity",
      "Clean workstations with USB & audio support",
      "Safe, private and secure browsing",
      "Technical support by our on-site operator"
    ],
    highlightsHi: [
      "हाई स्पीड ऑप्टिकल फाइबर कनेक्शन",
      "शांत व आरामदायक बैठने की व्यवस्था",
      "सुरक्षित एवं व्यक्तिगत ब्राउज़िंग वातावरण",
      "कंप्यूटर पर किसी भी समस्या में संचालक द्वारा मदद"
    ]
  },
  {
    id: "csc-citizen-services",
    category: "computer",
    titleEn: "CSC Digital Facilitation Services",
    titleHi: "CSC डिजिटल सेवाएँ (अधिकृत व्यवस्था अनुसार)",
    subtitleEn: "Electricity bill, PAN card, Ayushman card & utility services",
    subtitleHi: "बिजली बिल भुगतान, नया पैन कार्ड, आयुष्मान कार्ड व अन्य नागरिक सेवाएँ",
    descriptionEn: "Citizen service centre support for instant electricity bill payment, new PAN card applications, correction in PAN, Ayushman Golden Card download, and digital utility facilitation where officially enabled.",
    descriptionHi: "बिजली का बिल जमा करना, नया पैन कार्ड बनवाना या सुधार, आयुष्मान भारत गोल्डन कार्ड डाउनलोड और अन्य डिजिटल नागरिक सेवाओं की सुविधा।",
    iconName: "Cpu",
    highlightsEn: [
      "Electricity bill payment with instant official receipt",
      "New UTI / NSDL PAN card application assistance",
      "Ayushman card search & printout assistance",
      "Safe, verified digital portal operations"
    ],
    highlightsHi: [
      "बिजली बिल भुगतान व तुरंत आधिकारिक रसीद",
      "नया पैन कार्ड (PAN Card) व सुधार आवेदन",
      "आयुष्मान कार्ड सर्च व प्रिंट सहायता",
      "पारदर्शी एवं अधिकृत पोर्टल संचालन"
    ],
    docsRequiredEn: ["Consumer number / Aadhaar / Existing document"],
    docsRequiredHi: ["उपभोक्ता संख्या (कंज्यूमर नंबर) / आधार / संबंधित कागज"]
  },

  // Solar Energy Solutions
  {
    id: "pm-surya-ghar",
    category: "solar",
    titleEn: "PM Surya Ghar Yojana Information & Guidance",
    titleHi: "प्रधानमंत्री सूर्य घर मुफ्त बिजली योजना जानकारी",
    subtitleEn: "Up to 300 units free solar electricity every month",
    subtitleHi: "हर महीने 300 यूनिट तक मुफ्त बिजली का लाभ उठाएं",
    descriptionEn: "Complete guidance on the central government PM Surya Ghar Muft Bijli Yojana. We assist Unnao homeowners with eligibility checks, national portal registration, and subsidy criteria.",
    descriptionHi: "प्रधानमंत्री सूर्य घर मुफ्त बिजली योजना के अंतर्गत उन्नाव के निवासियों हेतु पात्रता जांच, राष्ट्रीय पोर्टल पर पंजीकरण एवं सब्सिडी नियमों की संपूर्ण जानकारी।",
    iconName: "SunMedium",
    highlightsEn: [
      "Up to ₹78,000 central government direct subsidy",
      "Zero to minimal monthly electricity bills",
      "Step-by-step assistance with National Solar Portal registration",
      "Net metering and DISCOM documentation guidance"
    ],
    highlightsHi: [
      "केंद्र सरकार से ₹78,000 तक की सीधी सब्सिडी का लाभ",
      "बिजली के भारी बिलों से स्थायी आजादी",
      "नेशनल सोलर पोर्टल पर रजिस्ट्रेशन में पूर्ण सहायता",
      "नेट मीटरिंग व बिजली विभाग (DISCOM) कागजी कार्यवाही"
    ],
    docsRequiredEn: ["Latest electricity bill", "Aadhaar Card", "Bank Passbook copy (for DBT subsidy)", "Rooftop ownership proof"],
    docsRequiredHi: ["नवीनतम बिजली का बिल", "आधार कार्ड", "बैंक पासबुक की कॉपी (सब्सिडी हेतु)", "मकान/छत स्वामित्व का साक्ष्य"],
    featured: true
  },
  {
    id: "rooftop-solar-installation",
    category: "solar",
    titleEn: "Rooftop Solar Installation Assistance",
    titleHi: "रूफटॉप सोलर पैनल स्थापना सहायता",
    subtitleEn: "Turnkey residential & commercial solar setups",
    subtitleHi: "घरेलू व व्यावसायिक सोलर सिस्टम लगाने में तकनीकी मदद",
    descriptionEn: "Assistance in choosing certified solar vendors, high-efficiency monocrystalline solar panels, on-grid inverters, and seamless rooftop installation in Unnao.",
    descriptionHi: "उच्च क्षमता वाले मोनोक्रिस्टलाइन सोलर पैनल, ऑन-ग्रिड इन्वर्टर, मजबूत स्ट्रक्चर एवं उन्नाव में प्रमाणित वेंडरों द्वारा सोलर प्लांट लगवाने में मदद।",
    iconName: "Zap",
    highlightsEn: [
      "Site feasibility and shadow-free rooftop assessment",
      "High-efficiency Tier-1 Solar PV modules",
      "Heavy duty GI mounting structure",
      "Seamless net meter coordination"
    ],
    highlightsHi: [
      "छत का निरीक्षण एवं उपयुक्त क्षमता का निर्धारण",
      "उच्च गुणवत्ता वाले टियर-1 सोलर मॉड्यूल",
      "मजबूत जीआई स्ट्रक्चर जो आंधी-तूफान सहन कर सके",
      "नेट मीटर लगवाने में विभाग से समन्वय"
    ],
    featured: true
  },
  {
    id: "solar-consultation",
    category: "solar",
    titleEn: "Solar Consultation & Project Enquiries",
    titleHi: "सोलर सिस्टम परामर्श एवं प्रोजेक्ट पूछताछ",
    subtitleEn: "Customized capacity recommendation (1 kW to 10 kW+)",
    subtitleHi: "आपके बिजली उपयोग अनुसार सही सोलर क्षमता का चयन",
    descriptionEn: "Calculate your load, evaluate savings, understand return on investment (ROI), and receive dedicated consultation for residential homes, shops, clinics, and small industries.",
    descriptionHi: "अपने घर या दूकान के लोड अनुसार सही सोलर सिस्टम का चुनाव करें। जानिए कितने समय में आपकी लागत वापस आएगी और भविष्य में कितनी बचत होगी।",
    iconName: "Sparkles",
    highlightsEn: [
      "Personalized unit consumption analysis",
      "Transparent cost & subsidy breakdown",
      "25-year panel performance guidance",
      "Free initial consultation at Shubh Enterprises"
    ],
    highlightsHi: [
      "आपके पिछले बिलों के आधार पर सही विश्लेषण",
      "पारदर्शी खर्च व मिलने वाली सब्सिडी का ब्योरा",
      "सोलर पैनलों पर 25 साल की वारंटी की जानकारी",
      "शुभ एंटरप्राइजेज पर नि:शुल्क प्रारंभिक परामर्श"
    ]
  },
  {
    id: "solar-after-sales",
    category: "solar",
    titleEn: "Installation & After-Sales Support Coordination",
    titleHi: "इंस्टॉलेशन एवं आफ्टर-सेल्स सपोर्ट समन्वय",
    subtitleEn: "Long-term reliability, maintenance & warranty guidance",
    subtitleHi: "दीर्घकालिक भरोसा, पैनल सफाई एवं मेंटेनेंस मार्गदर्शन",
    descriptionEn: "Assistance and coordination for warranty service, inverter troubleshooting, generation tracking on mobile app, and routine panel maintenance support where offered.",
    descriptionHi: "सोलर सिस्टम लगाने के बाद मोबाइल ऐप पर बिजली उत्पादन देखने, इनवर्टर सर्विस एवं नियमित रखरखाव में पूर्ण समन्वय एवं सहयोग।",
    iconName: "ShieldAlert",
    highlightsEn: [
      "Mobile app monitoring setup guidance",
      "Inverter & component warranty support",
      "Periodic maintenance check advice",
      "Local reliable support right in Unnao"
    ],
    highlightsHi: [
      "मोबाइल ऐप पर सोलर उत्पादन देखने की ट्रेनिंग",
      "इन्वर्टर व पार्ट्स की वारंटी में सहयोग",
      "पैनलों की सही सफाई व मेंटेनेंस टिप्स",
      "उन्नाव में स्थानीय भरोसेमंद सहयोग"
    ]
  }
];

export const SOLAR_PLANS_DATA: SolarPlan[] = [
  {
    capacityKw: 1,
    labelEn: "1 kW Rooftop Solar System",
    labelHi: "1 किलोवाट रूफटॉप सोलर सिस्टम",
    suitableForEn: "Small household consuming 0 - 150 units/month (1-2 fans, lights, TV, fridge)",
    suitableForHi: "छोटा परिवार (0 - 150 यूनिट/माह बिजली खपत, पंखे, लाइट, टीवी, फ्रिज)",
    monthlySavingsUnits: "120 - 130 Units",
    monthlyBillSavingsInr: "₹800 - ₹1,000",
    centralSubsidyInr: "₹30,000",
    approxRoofAreaSqFt: "100 - 120 sq ft",
    paybackPeriodYears: "3 - 4 Years",
    warrantyYears: "25 Years Panel Warranty"
  },
  {
    capacityKw: 2,
    labelEn: "2 kW Rooftop Solar System",
    labelHi: "2 किलोवाट रूफटॉप सोलर सिस्टम",
    suitableForEn: "Medium household consuming 150 - 300 units/month (Cooler, fridge, multiple fans, lights)",
    suitableForHi: "मध्यम परिवार (150 - 300 यूनिट/माह, कूलर, फ्रिज, वाशिंग मशीन, पंखे)",
    monthlySavingsUnits: "240 - 260 Units",
    monthlyBillSavingsInr: "₹1,800 - ₹2,200",
    centralSubsidyInr: "₹60,000",
    approxRoofAreaSqFt: "200 - 220 sq ft",
    paybackPeriodYears: "3 - 3.5 Years",
    warrantyYears: "25 Years Panel Warranty"
  },
  {
    capacityKw: 3,
    labelEn: "3 kW Rooftop Solar System (Most Popular)",
    labelHi: "3 किलोवाट रूफटॉप सोलर सिस्टम (सर्वाधिक लोकप्रिय)",
    suitableForEn: "Large household / with 1 AC, refrigerator, washing machine, pump (300+ units/mo)",
    suitableForHi: "बड़ा परिवार (1 एसी, फ्रिज, मोटर, वाशिंग मशीन, 300+ यूनिट खपत)",
    monthlySavingsUnits: "360 - 400 Units",
    monthlyBillSavingsInr: "₹3,000 - ₹3,600",
    centralSubsidyInr: "₹78,000 (Maximum Central Subsidy)",
    approxRoofAreaSqFt: "300 - 330 sq ft",
    paybackPeriodYears: "2.5 - 3 Years",
    warrantyYears: "25 Years Panel Warranty"
  }
];

export const WHY_CHOOSE_US_DATA = [
  {
    id: "one-stop",
    titleEn: "All Digital Services Under One Roof",
    titleHi: "सब कुछ एक ही जगह (One-Stop Hub)",
    descEn: "From Xerox and passport photos to critical govt exam forms and rooftop solar advice, eliminate multiple trips across town.",
    descHi: "फोटोकॉपी और पासपोर्ट फोटो से लेकर प्रतियोगी परीक्षाओं के फॉर्म और सोलर समाधान तक, सभी सेवाएँ एक ही छत के नीचे उपलब्ध।",
    icon: "LayoutGrid"
  },
  {
    id: "accuracy",
    titleEn: "Error-Free & Patient Assistance",
    titleHi: "त्रुटिहीन एवं धैर्यपूर्वक मार्गदर्शन",
    descEn: "We double-check personal details, photos, category certificates, and signatures so your applications are never rejected.",
    descHi: "हम हर फॉर्म के नाम, रोल नंबर, फोटो व प्रमाण पत्रों की 2 बार जांच करते हैं ताकि आवेदन कभी निरस्त न हो।",
    icon: "CheckCircle2"
  },
  {
    id: "convenience",
    titleEn: "Convenient Local Centre in Unnao",
    titleHi: "उन्नाव में आसान एवं सुविधाजनक स्थान",
    descEn: "Centrally located at Lok Nagar, Jurakhan Kheda (near Sukh Dev Ata Chakki) with easy parking and comfortable seating.",
    descHi: "लोक नगर, जुराखन खेड़ा (सुख देव आटा चक्की के पास) में आसानी से पहुँचने योग्य शांत एवं सुविधाजनक स्थान।",
    icon: "MapPin"
  },
  {
    id: "quality",
    titleEn: "Crisp Printing & Fast Turnaround",
    titleHi: "स्पष्ट प्रिंटिंग एवं तत्काल डिलीवरी",
    descEn: "Equipped with high-resolution laser printers, photographic paper, and heavy-duty laminators for immaculate documentation.",
    descHi: "आधुनिक लेज़र प्रिंटर और फोटो पेपर द्वारा मात्र 5 मिनट में पासपोर्ट फोटो और बेहतरीन क्वालिटी का प्रिंटआउट।",
    icon: "Zap"
  },
  {
    id: "solar-expert",
    titleEn: "Verified Solar Energy Guidance",
    titleHi: "पीएम सूर्य घर योजना की सही जानकारी",
    descEn: "Clear, factual advice on PM Surya Ghar Yojana subsidies and roof area requirements without deceptive promises.",
    descHi: "बिना किसी झूठे वादे के सरकारी गाइडलाइंस के अनुसार सब्सिडी, आवश्यक छत क्षेत्र और बचत की पारदर्शी गणना।",
    icon: "Sun"
  },
  {
    id: "friendly",
    titleEn: "Helpful & Courteous Support",
    titleHi: "विनम्र एवं मददगार ग्राहक सेवा",
    descEn: "Run by Shubh Rajpoot with a warm, respectful approach for students, parents, elders, and local business owners alike.",
    descHi: "शुभ राजपूत द्वारा संचालित, जहाँ छात्रों, अभिभावकों और बुजुर्गों का पूरा सम्मान व हर कदम पर व्यक्तिगत सहयोग मिलता है।",
    icon: "HeartHandshake"
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "solar",
    questionEn: "How much subsidy is available under PM Surya Ghar Muft Bijli Yojana?",
    questionHi: "पीएम सूर्य घर मुफ्त बिजली योजना के अंतर्गत कितनी सब्सिडी मिलती है?",
    answerEn: "Under the verified central government guidelines for residential rooftop solar: 1 kW gets ₹30,000, 2 kW gets ₹60,000, and 3 kW or higher gets the maximum central subsidy of ₹78,000. Subsidies are credited directly to your bank account via DBT after DISCOM approval and net meter installation.",
    answerHi: "केंद्र सरकार की आधिकारिक गाइडलाइंस के अनुसार: 1 किलोवाट पर ₹30,000, 2 किलोवाट पर ₹60,000 और 3 किलोवाट या उससे अधिक पर अधिकतम ₹78,000 की केंद्रीय सब्सिडी मिलती है। नेट मीटर लगने के बाद यह राशि सीधे आपके बैंक खाते (DBT) में भेजी जाती है।"
  },
  {
    id: "faq-2",
    category: "solar",
    questionEn: "What documents are required to apply for a rooftop solar system?",
    questionHi: "रूफटॉप सोलर पैनल लगवाने के लिए किन दस्तावेजों की आवश्यकता होती है?",
    answerEn: "You need: 1) Latest electricity bill in the homeowner's name, 2) Aadhaar card, 3) Bank passbook or cancelled cheque (linked with Aadhaar for DBT subsidy), and 4) Clear rooftop photograph. We assist with the complete online upload at Shubh Enterprises.",
    answerHi: "आपको चाहिए: 1) मकान मालिक के नाम का नवीनतम बिजली बिल, 2) आधार कार्ड, 3) बैंक पासबुक की कॉपी या कैंसिल्ड चेक, और 4) छत की फोटो। शुभ एंटरप्राइजेज पर इन सभी को पोर्टल पर अपलोड कराने में पूरी मदद की जाती है।"
  },
  {
    id: "faq-3",
    category: "forms",
    questionEn: "Can I get my competitive exam form filled at Shubh Enterprises?",
    questionHi: "क्या यूपी पुलिस, एसएससी, रेलवे या शिक्षक भर्ती के फॉर्म यहाँ भरे जा सकते हैं?",
    answerEn: "Yes! We specialize in all government and non-government recruitment forms (UP Police, SSC CGL/CHSL/GD, UPSSSC PET, Railway, Indian Army, TET/CTET, etc.). We verify your eligibility criteria, resize photos/signatures strictly as per specifications, and provide printable acknowledgment receipts.",
    answerHi: "हाँ, बिल्कुल! हम यूपी पुलिस, एसएससी, यूपीएसएसएससी, रेलवे, सेना भर्ती, शिक्षक पात्रता आदि सभी प्रतियोगी परीक्षाओं के फॉर्म भरते हैं। फोटो-हस्ताक्षर सही साइज में सेट कर बिना किसी गलती के फाइनल प्रिंट दिया जाता है।"
  },
  {
    id: "faq-4",
    category: "printing",
    questionEn: "Can I send files on WhatsApp to print before arriving?",
    questionHi: "क्या मैं दुकान आने से पहले व्हाट्सएप पर डॉक्यूमेंट भेजकर प्रिंट करवा सकता हूँ?",
    answerEn: "Yes! You can directly send your PDFs, documents, or photos to our official WhatsApp number 7007235826. We will keep your printouts or laminated documents ready to save your valuable time.",
    answerHi: "हाँ! आप हमारे आधिकारिक व्हाट्सएप नंबर 7007235826 पर अपने डॉक्यूमेंट या फोटो भेज सकते हैं। आपके आने तक हम प्रिंट या लेमिनेशन तैयार रखेंगे ताकि आपका समय बच सके।"
  },
  {
    id: "faq-5",
    category: "printing",
    questionEn: "How quickly can I get passport-size photographs?",
    questionHi: "पासपोर्ट साइज फोटो कितनी देर में मिल जाती है?",
    answerEn: "Passport photographs are clicked, edited with a clean white/blue background, and printed on glossy photo paper in just 5 to 7 minutes. Soft copies can also be shared directly to your phone.",
    answerHi: "मात्र 5 से 7 मिनट में आपकी पासपोर्ट साइज फोटो साफ बैकग्राउंड के साथ ग्लॉसी पेपर पर प्रिंट होकर तैयार हो जाती है। आवश्यकता पड़ने पर सॉफ्ट कॉपी आपके फोन पर भी भेज दी जाती है।"
  },
  {
    id: "faq-6",
    category: "general",
    questionEn: "Where is Shubh Enterprises located and what are the working hours?",
    questionHi: "शुभ एंटरप्राइजेज कहाँ स्थित है और खुलने का समय क्या है?",
    answerEn: "We are located at Lok Nagar, Jurakhan Kheda, Unnao, Uttar Pradesh (Near Sukh Dev Ata Chakki). We are open Monday to Sunday from 8:00 AM to 9:00 PM.",
    answerHi: "हमारा केंद्र लोक नगर, जुराखन खेड़ा, उन्नाव (सुख देव आटा चक्की के पास) स्थित है। केंद्र सातों दिन प्रातः 8:00 बजे से रात्रि 9:00 बजे तक खुला रहता है।"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t-1",
    name: "Rameshwar Singh",
    location: "Lok Nagar, Unnao",
    serviceUsedEn: "PM Surya Ghar Solar Consultation",
    serviceUsedHi: "पीएम सूर्य घर सोलर परामर्श",
    commentEn: "Shubh Rajpoot explained the rooftop solar scheme very honestly. No false promises. He assisted with our electricity bill calculation and portal submission. Very polite and knowledgeable.",
    commentHi: "शुभ राजपूत जी ने सोलर योजना के बारे में बहुत ईमानदारी से समझाया। कोई झूठा दावा नहीं किया। बिजली बिल की गणना और पोर्टल पर फॉर्म भरवाने में पूरी मदद की।",
    rating: 5,
    date: "October 2026",
    verified: true
  },
  {
    id: "t-2",
    name: "Anjali Verma",
    location: "Jurakhan Kheda, Unnao",
    serviceUsedEn: "UP Police Exam Form & Passport Photos",
    serviceUsedHi: "यूपी पुलिस भर्ती फॉर्म व फोटो",
    commentEn: "Got my police recruitment form filled here. The photo was taken and formatted instantly, and every detail was verified carefully before final submit. Got my printout immediately.",
    commentHi: "यहाँ से यूपी पुलिस का फॉर्म भरवाया था। फोटो भी तुरंत खींची गई और फॉर्म सबमिट करने से पहले हर स्पेलिंग अच्छे से चेक कराई गई। बहुत अच्छी सर्विस है।",
    rating: 5,
    date: "September 2026",
    verified: true
  },
  {
    id: "t-3",
    name: "Mohit Dixit",
    location: "Unnao City",
    serviceUsedEn: "Color Printing & Lamination",
    serviceUsedHi: "कलर प्रिंटिंग एवं लेमिनेशन",
    commentEn: "High quality color printout on thick glossy paper. Sent files over WhatsApp and everything was ready when I reached. Great local business for Unnao residents.",
    commentHi: "व्हाट्सएप पर फाइल भेजी थी, पहुँचते ही प्रिंट और लेमिनेशन तैयार मिला। प्रिंट क्वालिटी बहुत साफ और चमकदार है। रेट भी बिल्कुल सही हैं।",
    rating: 5,
    date: "October 2026",
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-poster",
    titleEn: "Grand Opening Ceremony Invitation",
    titleHi: "शुभ उद्घाटन समारोह आमंत्रण",
    category: "Milestone",
    imageUrl: "/images/poster.png",
    captionEn: "Official grand opening invitation poster of Shubh Enterprises & Internet Cafe.",
    captionHi: "शुभ एंटरप्राइजेज एवं इंटरनेट कैफे का आधिकारिक शुभ उद्घाटन समारोह पोस्टर।"
  },
  {
    id: "g-workstation",
    titleEn: "Modern Digital Workstation",
    titleHi: "आधुनिक कंप्यूटर वर्कस्टेशन",
    category: "Services",
    imageUrl: "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=80",
    captionEn: "High-speed browsing, online form filling and computer services setup.",
    captionHi: "हाई-स्पीड इंटरनेट, ऑनलाइन फॉर्म और डिजिटल नागरिक सेवा व्यवस्था।"
  },
  {
    id: "g-printing",
    titleEn: "High-Res Laser Printing & Copy",
    titleHi: "हाई-रेजोल्यूशन लेज़र प्रिंटिंग व जेरॉक्स",
    category: "Services",
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=800&q=80",
    captionEn: "Crisp black & white and vibrant colour prints, marksheets and lamination.",
    captionHi: "स्पष्ट रंगीन व ब्लैक एंड व्हाइट प्रिंटिंग, फोटो एवं लेमिनेशन।"
  },
  {
    id: "g-solar-roof",
    titleEn: "Rooftop Solar Installation",
    titleHi: "छत पर सोलर पैनल स्थापना",
    category: "Solar",
    imageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    captionEn: "PM Surya Ghar Muft Bijli Yojana rooftop solar consultation and setup.",
    captionHi: "पीएम सूर्य घर मुफ्त बिजली योजना अंतर्गत रूफटॉप सोलर परामर्श एवं मदद।"
  },
  {
    id: "g-solar-home",
    titleEn: "Modern Indian Clean Energy Home",
    titleHi: "स्वच्छ ऊर्जा से जगमगाता घर",
    category: "Solar",
    imageUrl: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80",
    captionEn: "Save thousands on monthly power bills with clean rooftop solar power.",
    captionHi: "सोलर ऊर्जा अपनाएं, बिजली बिल बचाएं और पर्यावरण को स्वच्छ बनाएं।"
  },
  {
    id: "g-documents",
    titleEn: "Official Documentation & Passport Studio",
    titleHi: "दस्तावेज एवं पासपोर्ट फोटो स्टूडियो",
    category: "Services",
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    captionEn: "Passport size photograph capture, certificate verification & scanning.",
    captionHi: "पासपोर्ट साइज फोटोग्राफी, मार्कशीट स्कैनिंग व लेमिनेशन सेवा।"
  }
];

export const SERVICE_DOCUMENT_CHECKLISTS = [
  {
    serviceId: "exam_forms",
    nameEn: "Govt Job Exam Form (Police / SSC / UPSSSC / Railway)",
    nameHi: "सरकारी नौकरी फॉर्म (पुलिस / एसएससी / रेलवे)",
    docsEn: [
      "High School (10th) & Intermediate (12th) Marksheet",
      "Graduation / Technical Degree marksheets (if required)",
      "Aadhaar Card (Mobile linked recommended)",
      "Recent passport-size photo (white/light bg)",
      "Signature sample on white paper with black/blue pen",
      "Caste Certificate (OBC/SC/ST) & Domicile Certificate (Niwas)",
      "EWS Certificate (if applying under general economic quota)"
    ],
    docsHi: [
      "10वीं और 12वीं की मूल मार्कशीट या फोटोकॉपी",
      "स्नातक / तकनीकी डिप्लोमा मार्कशीट (यदि लागू हो)",
      "आधार कार्ड (मोबाइल नंबर लिंक्ड)",
      "ताजा पासपोर्ट साइज फोटो (साफ बैकग्राउंड)",
      "सादे सफेद कागज पर काले/नीले पेन से हस्ताक्षर",
      "जाति प्रमाण पत्र (ओबीसी/एससी/एसटी) व मूल निवास प्रमाण पत्र",
      "ईडब्ल्यूएस प्रमाण पत्र (यदि सामान्य वर्ग आर्थिक छूट चाहिए)"
    ]
  },
  {
    serviceId: "caste_income_domicile",
    nameEn: "Income / Caste / Domicile Certificate (Aay / Jati / Niwas)",
    nameHi: "आय / जाति / निवास प्रमाण पत्र",
    docsEn: [
      "Applicant Aadhaar Card",
      "Passport size photograph",
      "Ration Card or Parivar Register Nakal",
      "Self-declaration form (Sw-Pramanit Ghoshna Patra)",
      "Electricity bill or voter ID (for address proof)",
      "Active mobile phone for OTP verification"
    ],
    docsHi: [
      "आवेदक का आधार कार्ड",
      "पासपोर्ट साइज फोटो",
      "राशन कार्ड या परिवार रजिस्टर की नकल",
      "स्व-प्रमाणित घोषणा पत्र",
      "बिजली का बिल या वोटर आईडी (पते के प्रमाण हेतु)",
      "ओटीपी प्राप्त करने हेतु चालू मोबाइल नंबर"
    ]
  },
  {
    serviceId: "solar_yojana",
    nameEn: "PM Surya Ghar Muft Bijli Yojana (Solar Subsidy)",
    nameHi: "पीएम सूर्य घर योजना (सोलर सब्सिडी)",
    docsEn: [
      "Latest consumer electricity bill (Unnao / MVVNL area)",
      "Aadhaar Card of the electricity meter owner",
      "Bank Account Passbook / Cancelled Cheque (Aadhaar linked for DBT)",
      "Clear roof photo with unshaded area",
      "Mobile number registered with Aadhaar and Electricity connection"
    ],
    docsHi: [
      "मकान मालिक के नाम का नवीनतम बिजली बिल (उन्नाव क्षेत्र)",
      "बिजली कनेक्शन धारक का आधार कार्ड",
      "बैंक पासबुक की कॉपी (सब्सिडी का पैसा सीधे खाते में आने हेतु)",
      "छत की फोटो (जहां छाया न आती हो)",
      "आधार और बिजली कनेक्शन से जुड़ा मोबाइल नंबर"
    ]
  },
  {
    serviceId: "passport_photo",
    nameEn: "Passport Size Photographs",
    nameHi: "पासपोर्ट साइज फोटोग्राफी",
    docsEn: [
      "Just visit in neat attire, or bring existing softcopy on phone",
      "Mention specific size or background if required by your exam/department"
    ],
    docsHi: [
      "साफ कपड़ों में दुकान आएं या फोन में फोटो लाएं",
      "यदि किसी विशेष भर्ती/विभाग के नियम हों तो अवश्य बताएं"
    ]
  }
];
