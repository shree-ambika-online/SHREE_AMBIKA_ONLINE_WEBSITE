/* =====================================================
   EDIT THIS SECTION ONLY — shop details & services
   ===================================================== */
const CONFIG = {
    shopName: "SHREE AMBIKA ONLINE",
    logo: "images/logo.png",                         // e.g. "images/logo.png" (leave "" to use 🖥️)
    phone: " ",                        // e.g. "+919XXXXXXXXX"  (leave "" until you have it)
    whatsapp: "@SHREE_AMBIKA_ONLINE",                     // digits only with country code, e.g. "919XXXXXXXXX"
    address: "જુના બસ સ્ટેન્ડ સામે લીંબડી",
    hours: "9:30 AM To 8:00 PM",
    mapsLink: "https://maps.app.goo.gl/raj3biqccCAjs2KD9",                     // paste Google Maps link
    insta: "https://www.instagram.com/shree_ambika_online/?hl=en",
    defaultLang: "gu"
};

/* Category: "gov" | "print" | "card"
   price: "" = hidden. Docs are [English, Gujarati]. Please verify the document
   lists against current rules of your taluka / district office. */
const SERVICES = [
    {
        id: "passport", cat: "gov", icon: "✈️", en: "Passport", gu: "પાસપોર્ટ",
        descEn: "New passport applications and passport-related online services.", descGu: "નવા પાસપોર્ટ માટેની અરજી અને પાસપોર્ટ સંબંધિત ઓનલાઈન સેવાઓ.",
        price: "", processing: "", docs: [["Aadhaar Card", "આધાર કાર્ડ"], ["Pan card", "પાન કાર્ડ"], ["School Leaving Certificate / Birth Certificate", "શાળા છોડ્યાનું પ્રમાણપત્ર / જન્મનો દાખલો"], ["Last Marksheet", "છેલ્લી માર્કશીટ"], ["Mobile Number / Email id", "મોબાઈલ નંબર / ઈમેલ"]]
    },
    {
        id: "pan new", cat: "gov", icon: "💳", en: "PAN Card New", gu: "પાન કાર્ડ નવુ",
        descEn: "New PAN card application.", descGu: "નવા પાન કાર્ડની અરજી.",
        price: "", processing: "", docs: [["Aadhaar Card", "આધાર કાર્ડ"], ["Passport Size Photos 2", "પાસપોર્ટ સાઇઝ ફોટા ૨"], ["Date of Birth Proof", "જન્મ તારીખનો પુરાવો"]]
    },
    {
        id: "pan correction", cat: "gov", icon: "💳", en: "PAN Card Correction", gu: "પાન કાર્ડ સુધારો",
        descEn: "PAN card corrections.", descGu: "પાન કાર્ડના સુધારા.",
        price: "", processing: "", docs: [["Aadhaar Card", "આધાર કાર્ડ"], ["Old PAN Card", "જુનુ પાન કાર્ડ"], ["Passport Size Photos 2", "પાસપોર્ટ સાઇઝ ફોટા ૨"], ["Date of Birth Proof", "જન્મ તારીખનો પુરાવો"], ["Marriage Certificate for PAN card correction after marriage", "લગ્ન પછી પાન કાર્ડ સુધારા માટે મેરેજ સર્ટીફીકેટ"]]
    },
    {
        id: "udhyam aadhaar", cat: "gov", icon: "🏪", en: "Udhyam Aadhaar Registration", gu: "ઉદ્યમ આધાર રજીસ્ટ્રેશન",
        descEn: "nline registration for small businesses and enterprises to obtain Udyam Registration.", descGu: "નાના વ્યવસાયો અને ઉદ્યોગો માટે ઉદ્યમ રજીસ્ટ્રેશન મેળવવા માટેની ઓનલાઈન નોંધણી સેવા.",
        price: "", processing: "", docs: [["Bussiness Name", "ધંધાનું નામ"], ["Aadhaar Card", "આધાર કાર્ડ"], ["Pan Card", "પાન કાર્ડ"], ["Bank Passbook", "બેંક પાસબુક"], ["Email", "ઈમેલ"], ["Mobile Number", "મોબાઈલ નંબર"]]
    },
    {
        "id": "egazette_gujarat", "cat": "gov", "icon": "📜", "en": "e-Gazette Services (Name/Surname/Birthdate Change)", "gu": "ઇ-ગેઝેટ સેવાઓ (નામ/અટક/જન્મતારીખ બદલવા માટે)",
        "descEn": "For legal corrections or changes in name, surname, or date of birth.", "descGu": "નામ, અટક અથવા જન્મતારીખમાં કાયદેસર સુધારા કે ફેરફાર માટે.",
        "price": "", "processing": "", "docs": [["Notarized Affidavit", "નોટરાઇઝડ સોગંદનામું (એફિડેવિટ)"], ["Newspaper Advertisement Clippings (English & Gujarati)", "વર્તમાનપત્રોમાં આપેલી જાહેરાતની નકલ (અંગ્રેજી અને ગુજરાતી)"], ["Identity Proof (Aadhaar Card / PAN Card)", "ઓળખનો પુરાવો (આધાર કાર્ડ / પાન કાર્ડ)"], ["Address Proof (Light Bill / Ration Card)", "સરનામાનો પુરાવો (લાઇટ બિલ / રેશન કાર્ડ)"], ["Passport Size Photographs", "પાસપોર્ટ સાઇઝ ફોટો"], ["Old Document with Incorrect Details", "સુધારો કરવા માટેનો જૂનો કે ખોટી વિગતવાળો દસ્તાવેજ"], ["Marriage Certificate (if applicable)", "લગ્નનું પ્રમાણપત્ર (લગ્ન પછી મહિલાઓના નામ/અટક બદલવા માટે)"], ["School Leaving Certificate (L.C.)", "શાળા છોડ્યાનું પ્રમાણપત્ર (એલ.સી. - જન્મતારીખ સુધારા માટે)"]]
    },
    {
        "id": "kunverbai_mameru", "cat": "gov", "icon": "👰", "en": "Kunverbai Nu Mameru Scheme", "gu": "કુંવરબાઈનું મામેરું યોજના",
        "descEn": "Financial assistance scheme for daughter's marriage.", "descGu": "દીકરીઓના લગ્ન પ્રસંગે આર્થિક સહાય પૂરી પાડતી યોજના.",
        "price": "", "processing": "ફોર્મ લગ્ન તારીખ થી ફક્ત ૨ વર્ષ સુધી ભરી શકાશે", "docs": [["Marriage Certificate", "મેરેજ સર્ટીફીકેટ"], ["Income Certificate of Girl's Father", "આવક નો દાખલો છોકરી ના પિતા નો"], ["Aadhaar Card of Boy and Girl", "છોકરા અને છોકરી નું આધારકાર્ડ"], ["Girl's Bank Passbook", "બેન્ક પાસબુક છોકરીની"], ["Aadhaar Card of Girl's Father", "છોકરી ના પિતા નું આધારકાર્ડ"], ["Passport Size Photo", "પાસપોર્ટ સાઈઝ ફોટો"], ["Girl's Caste Certificate and School Leaving Certificate (L.C.)", "છોકરી નો જાતી નો દાખલો અને એલ સી"], ["Ration Card & Mobile Number", "રેશનકાર્ડ,મોબાઈલ નં"], ["All Original Documents", "બધા ડોક્યુમેન્ટ ઓરીજનલ"]]
    },
    {
        "id": "satyavadi_harishchandra_yojana", "cat": "gov", "icon": "👑", "en": "Satyavadi Raja Harishchandra Post-Death Assistance Scheme", "gu": "સત્યવાદી રાજા હરિશ્ચંદ્ર મરણોત્તર સહાય યોજના",
        "descEn": "Financial assistance of ₹5,000 provided to Scheduled Caste (SC) families for funeral rituals, with an annual income limit up to ₹6,00,000.", "descGu": "અનુસૂચિત જાતિના લોકોની મરણોત્તર ક્રિયા માટે ₹૫,૦૦૦ ની નાણાકીય સહાય પૂરી પાડતી યોજના. (વાર્ષિક આવક મર્યાદા ₹૬,૦૦,૦૦૦/- સુધી)",
        "price": "", "processing": "", "docs": [["Applicant's Aadhaar Card", "અરજદારનું આધાર કાર્ડ"], ["Proof of Residence", "રહેઠાણનો પુરાવો"], ["Income Certificate", "આવકનો દાખલો"], ["Deceased's Death Certificate and Aadhaar Card", "મરણનું પ્રમાણપત્ર અને મૃતકનું આધાર કાર્ડ"], ["Bank Passbook and Ration Card", "બેન્ક પાસબુક અને રેશનકાર્ડ"], ["Caste Certificate", "જાતિનો દાખલો"], ["Applicant's Photograph", "અરજદારનો ફોટો"]]
    },
    {
        id: "scholarship", cat: "gov", icon: "🏅", en: "Digital Gujarat Scholarship", gu: "ડિજિટલ ગુજરાત શિષ્યવૃત્તિ",
        descEn: "Online scholarship form filling for students.", descGu: "વિદ્યાર્થીઓ માટે ઓનલાઈન શિષ્યવૃત્તિ ફોર્મ ભરવું.",
        price: "", processing: "", docs: [["Student's Aadhaar Card", "વિદ્યાર્થીનું આધાર કાર્ડ"], ["Ration Card", "રેશન કાર્ડ"], ["Passport Size Photo", "પાસપોર્ટ સાઇઝ ફોટો"], ["Income Certificate", "આવકનું પ્રમાણપત્ર"], ["Caste Certificate (if applicable)", "જાતિ પ્રમાણપત્ર (લાગુ પડતું હોય તો)"], ["Mark sheet of class 10 and later marksheets", "ધોરણ 10 તથા ત્યારબાદ અભ્યાસની માર્કશીટ"], ["School Leaving certificate", "શાળા છોડ્યાનું પ્રમાણપત્ર"], ["Current Year Fee Recipt", "ચાલુ વર્ષની ફીની પહોંચ"], ["Bank Passbook", "બેંક પાસબુક"], ["Bonofied (if applicable)", "બોનોફાઈડ (લાગુ પડતુ હોય તેમના માટે)"], ["Hostel Certificate (if applicable)", "હોસ્ટેલમાં રહેતા હોય તો હોસ્ટેલ નું પ્રમાણપત્ર"], ["Disability Certificate (if applicable)", "દિવ્યાંગ હોય તો  દિવ્યાંગ નું પ્રમાણપત્ર"], ["Id Card (if applicable)", "આઈ કાર્ડ (લાગુ પડતુ હોય તેમના માટે)"]]
    },
    {
        "id": "shikshan_sahay_yojana_bocw", "cat": "gov", "icon": "🎓", "en": "Education Assistance Scheme (Std. 1 to Higher Education)", "gu": "શિક્ષણ સહાય યોજના (ધો. ૧ થી ઉચ્ચ શિક્ષણ) (લાલ ચોપડી)",
        "descEn": "Financial assistance ranging from ₹1,800 to ₹2,00,000 for the children of registered construction workers, provided by the Gujarat Building and Other Construction Workers Welfare Board.", "descGu": "ગુજરાત મકાન અને અન્ય બાંધકામ શ્રમયોગી કલ્યાણ બોર્ડ દ્વારા બાંધકામ શ્રમિકના બાળકો માટે ₹૧,૮૦૦/- થી ₹૨,૦૦,૦૦૦/- સુધીની શૈક્ષણિક સહાય પૂરી પાડતી યોજના.",
        "price": "", "processing": "શૈક્ષણિક સત્ર શરૂ થયાના ૬ માસમાં અરજી કરવાની રહેશે. નોંધાયેલ બાંધકામ શ્રમિકના કોઈપણ બે બાળકોને વર્ષમાં એકવાર સહાય મળવાપાત્ર છે. અરજી જૂના બસ સ્ટેન્ડ સામે, લીંબડી ખાતે શ્રી અંબિકા ઓનલાઇન દ્વારા કરી શકાશે.", "docs": [["Original Bonafide Certificate of current School / College / Institution", "ચાલુ શાળા / કોલેજ / સંસ્થાનું ઓરીજીનલ બોનાફાઇડ સર્ટીફીકેટ"], ["Passport size photographs of Beneficiary (Worker) and Child", "લાભાર્થી (શ્રમિક) તથા બાળકના પાસપોર્ટ સાઇઝના ફોટા"], ["Child's Aadhaar Card & Worker's Aadhaar Card", "બાળકનું આધારકાર્ડ & શ્રમિકનું આધારકાર્ડ"], ["Worker's E-Nirman / Shramyogi Card", "શ્રમિકનું ઈ-નિર્માણ / શ્રમયોગી કાર્ડ"], ["Copy of Child's previous year result (Marksheet)", "બાળકના ગત વર્ષના પરિણામની નકલ (માર્કશીટ)"], ["Fee Receipt of current year School / College", "ચાલુ વર્ષની શાળા/કોલેજ ફી ભર્યાની પહોંચ"], ["Copy of first page of Bank Passbook (with IFSC Code)", "બેંક પાસબુકના પ્રથમ પાનાની નકલ (IFSC કોડ સાથે)"], ["Income Certificate", "આવકનો દાખલો"], ["Affidavit or prescribed Consent Form (For assistance above ₹5,000)", "એફિડેવિટ અથવા નિયત સંમતિપત્ર (5 હજારથી વધારે સહાય માટે)"], ["Hostel Certificate & Fee Receipt (for Hostel Assistance)", "હોસ્ટેલ સર્ટિફિકેટ & ફી પહોંચ (હોસ્ટેલ સહાય માટે)"], ["Original Bill of Book Purchase (for Book Assistance)", "પુસ્તક ખરીદીનું અસલ બિલ (પુસ્તક સહાય માટે)"], ["All Original Documents (for verification)", "બધા જ અસલ ડોક્યુમેન્ટ સાથે રાખવા વિનંતી."]]
    },
    {
        "id": "divyang_bus_pass_yojana", "cat": "gov", "icon": "🚌", "en": "Bus Pass Scheme for Person with Disability (Divyangjan)", "gu": "દિવ્યાંગ વ્યક્તિ માટે બસ પાસ યોજના",
        "descEn": "Free or concessional bus pass scheme for disabled individuals with 40% or higher disability.", "descGu": "૪૦ ટકા કે તેથી વધુ દિવ્યાંગતા ધરાવતી વ્યક્તિઓ માટે એસ.ટી. બસમાં મફત અથવા રાહત દરે મુસાફરી કરવા માટેની બસ પાસ યોજના.",
        "price": "", "processing": "પાત્રતાના માપદંડ: ૪૦ ટકા કે તેથી વધુ દિવ્યાંગતા. અરજી જૂના બસ સ્ટેન્ડ સામે, લીંબડી ખાતે શ્રી અંબિકા ઓનલાઇન દ્વારા કરી શકાશે.", "docs": [["Proof of Residence (Ration Card / Voter ID Card and Aadhaar Card)", "વ્યક્તિ રહેઠાણનો પુરાવો (રેશન કાર્ડ / ચૂંટણી કાર્ડ અને આધાર કાર્ડ)"], ["Proof of Age (School Leaving Certificate / Medical Certificate / Birth Certificate from Talati or Nagar Panchayat records - Any One)", "ઉંમરનો પુરાવો (શાળા છોડ્યાનું પ્રમાણપત્ર / મેડિકલ પ્રમાણપત્ર / જન્મનો દાખલો - તલાટી કે નગર પંચાયત રેકોર્ડ ઉપરનો - પૈકી કોઈ પણ એક)"], ["Disability Percentage Certificate from District Civil Surgeon / Medical Superintendent Disability Medical Certificate", "જિલ્લા સિવિલ સર્જનશ્રી / તબીબ અધીક્ષકશ્રી નું દિવ્યાંગતાની ટકાવારી દર્શાવતું પ્રમાણપત્ર"], ["Applicant's Signature", "અરજદારની સહી"], ["Applicant's Photograph", "અરજદારનો ફોટો"]]
    },
    {
        "id": "sant_surdas_yojana", "cat": "gov", "icon": "👨‍🦯", "en": "Sant Surdas Yojana (Financial Assistance for Severe Disability)", "gu": "સંત સૂરદાસ યોજના (તીવ્ર દિવ્યાંગતા ધરાવતા વ્યક્તિઓને આર્થિક સહાય)",
        "descEn": "A state government pension scheme providing ₹1,000 monthly financial aid to severely disabled individuals with 60% or higher disability.", "descGu": "૬૦ ટકા કે તેથી વધુ દિવ્યાંગતા ધરાવતા વ્યક્તિઓને રાજ્ય સરકાર દ્વારા રૂ.૧,૦૦૦/- નું માસિક પેન્શન આપવાની યોજના.",
        "price": "", "processing": "પાત્રતાના માપદંડ: ૬૦ ટકા કે તેથી વધુ દિવ્યાંગતા ધરાવતા વ્યક્તિ.", "docs": [["Disability Certificate (60% or above)", "દિવ્યાંગતાનું પ્રમાણપત્ર (૬૦% કે તેથી વધુ)"], ["Aadhaar Card", "આધાર કાર્ડ"], ["Proof of Residence (Ration Card / Light Bill)", "રહેઠાણનો પુરાવો (રેશન કાર્ડ / લાઇટ બિલ)"], ["Age Proof (School Leaving Certificate / Birth Certificate)", "ઉંમરનો પુરાવો (શાળા છોડ્યાનું પ્રમાણપત્ર / જન્મનો દાખલો)"], ["Bank Passbook (for direct benefit transfer)", "બેંક પાસબુક (સીધા પેન્શન જમા કરવા માટે)"], ["Passport Size Photograph / Sign", "પાસપોર્ટ સાઇઝ ફોટો / સહિ"]]
    },
    {
        "id": "divyangjan_railway_concession", "cat": "gov", "icon": "🚂", "en": "Online Application for Divyangjan Railway Concession Card", "gu": "દિવ્યાંગજન માટેના રેલ્વે કન્સેસન કાર્ડની ઓનલાઇન અરજી",
        "descEn": "Online registration and application process on the Indian Railways portal to obtain a concession card for disabled passengers.", "descGu": "દિવ્યાંગ મુસાફરો માટે રેલ્વે ટિકિટમાં રાહત મેળવવા માટેનું કન્સેસન કાર્ડ મેળવવાની ઓનલાઇન અરજી પ્રક્રિયા.",
        "price": "", "processing": "", "docs": [["QR Coded Disability Certificate issued by a Government Doctor or Civil Hospital", "ક્યુઆર કોડ વાળું ડિસેબિલિટી સર્ટિફિકેટ (ગવર્મેન્ટ ડોક્ટર અથવા સિવિલ હોસ્પિટલ દ્વારા ઇસ્યુ થયેલ)"], ["Valid Railway Concession Certificate signed & stamped by Doctor with hospital seal (Self Attested)", "રેલ્વેનું વેલીડ કન્સેસન સર્ટિફિકેટ - ડોક્ટરની સહી, નામ, રજિસ્ટ્રેશન નંબરના સ્ટેમ્પ અને હોસ્પિટલના સીલ સાથે (અરજદારની સહી/અંગૂઠાનું નિશાન કરેલ)"], ["Railway Acceptable Date of Birth Proof (e.g., Birth Certificate, Leaving Certificate, PAN Card)", "રેલ્વે માન્ય જન્મ તારીખનું પ્રૂફ (દા. ત. જન્મ તારીખ નું સર્ટિફિકેટ, લીવીંગ સર્ટિફિકેટ, પાનકાર્ડ વગેરે)"], ["Railway Acceptable Photo ID Proof (e.g., Aadhaar Card, Election Card, Driving License)", "રેલ્વે માન્ય ફોટો આઈડીનું પ્રૂફ (દા. ત. આધારકાર્ડ, ઇલેક્શન કાર્ડ, ડ્રાઇવિંગ લાયસન્સ વગેરે)"], ["Railway Acceptable Address Proof not older than 3 months (e.g., Ration Card, Electricity Bill, Gas Bill)", "રેલ્વે માન્ય એડ્રેસનું પ્રૂફ - ત્રણ મહિનાથી જૂનું ન હોવું જોઈએ (દા. ત. રેશન કાર્ડ, ઇલેક્ટ્રિક બિલ, ગેસ બિલ વગેરે)"], ["Recent Passport Size Photograph", "તાજેતરનો પાસપોર્ટ સાઇઝ ફોટોગ્રાફ"], ["Self Attested Copies of All Documents", "નીચે મુજબના ડોક્યુમેન્ટ્સ ની સુવાચ્ય ઝેરોક્ષ કોપી અરજદારની સહી અથવા અંગૂઠાનું નિશાન કરી (Self Attested) અપલોડ કરવી"]]
    },
    {
        "id": "pandit_deendayal_upadhyay_awas_yojana", "cat": "gov", "icon": "🏠", "en": "Pandit Deendayal Upadhyay Awas Yojana", "gu": "પંડિત દીન દયાળ ઉપાધ્યાય આવાસ યોજના",
        "descEn": "Online application scheme by the Social Justice and Empowerment Department to provide financial assistance for constructing a house.", "descGu": "સામાજિક ન્યાય અને અધિકારિતા વિભાગ (ગુજરાત સરકાર) દ્વારા મકાન બાંધકામ સહાય મેળવવા માટે ઓનલાઇન અરજી કરવાની યોજના.",
        "price": "", "processing": "", "docs": [["Aadhaar Card", "આધારકાર્ડ"], ["Ration Card (Both pages with name and card number)", "રેશનકાર્ડ (નામ અને નંબરવાળા બંને પેજ)"], ["Caste Certificate / School Leaving Certificate (L.C.)", "જાતિનો દાખલો / શાળા છોડ્યાનું પ્રમાણપત્ર (L.C.)"], ["Income Certificate issued by a Competent Authority", "સક્ષમ અધિકારીનો આવકનો દાખલો"], ["Proof of Residence (Electricity Bill / License / Voter ID Card / Rent Agreement)", "રહેઠાણનો પુરાવો (વીજળી બિલ / લાયસન્સ / ચૂંટણી કાર્ડ / ભાડાકરાર)"], ["Proof of Land Ownership (Property Document / Assessment Register / Hakka Patrak / Sanad)", "જમીન માલિકીનો આધાર (દસ્તાવેજ / આકારણી પત્રક / હક્ક પત્રક / સનદ)"], ["Permission Letter for House Construction (Raja Chitthi)", "મકાન બાંધકામ કરવાની રજા ચિઠ્ઠી"], ["Certificate from Talati-cum-Mantri / City Talati & Certificate of Four Directions (Chaturdisa)", "તલાટી કમ મંત્રી / સીટી તલાટીનું પ્રમાણપત્ર & ચતુરદિશાનો દાખલો"], ["Copy of first page of Bank Passbook or Cancelled Cheque", "બેંક પાસબુકના પ્રથમ પાનાની નકલ અથવા કેન્સલ ચેક"], ["Recent Property Tax Receipt", "તાજેતરની મકાન વેરા પાવતી"], ["Photograph of open plot or dilapidated/damaged house", "ખુલ્લા પ્લોટનો અથવા કાચા/જર્જરિત મકાનનો ફોટો"], ["Self-Declaration Form", "સ્વ-ઘોષણા પત્ર (Self-Declaration)"], ["BPL Certificate / Widow Assistance Proof (if applicable)", "BPL દાખલો / વિધવા સહાય (જો લાગુ પડતું હોય તો)"]]
    },
    {
        "id": "new_driving_license", "cat": "gov", "icon": "🚗", "en": "New Driving License Application", "gu": "નવા ડ્રાઇવિંગ લાઇસન્સ માટેની અરજી",
        "descEn": "Online application service for obtaining a new Learner's or Permanent Driving License through the Sarathi Parivahan portal.", "descGu": "સારથી પરિવહન પોર્ટલ દ્વારા નવું લર્નિંગ અથવા પાકું ડ્રાઇવિંગ લાઇસન્સ મેળવવા માટેની ઓનલાઇન અરજી સેવા.",
        "price": "", "processing": "અરજી કર્યા બાદ લર્નિંગ લાઇસન્સ માટે ઓનલાઇન કોમ્પ્યુટર ટેસ્ટ આપવાની રહેશે અને પાકા લાઇસન્સ માટે આર.ટી.ઓ. ટ્રેક પર ડ્રાઇવિંગ ટેસ્ટ આપવાનો રહેશે.", "docs": [["Aadhaar Card (Address & Identity Proof)", "આધાર કાર્ડ (સરનામા અને ઓળખનો પુરાવો)"], ["School Leaving Certificate (Age Proof)", "સ્કૂલ લિવિંગ સર્ટિફિકેટ (ઉંમરનો પુરાવો)"], ["Passport Size Photograph", "પાસપોર્ટ સાઇઝ ફોટો"], ["Applicant's Signature", "અરજદારની સહી"], ["Mobile Number (For OTP & Status Updates)", "મોબાઈલ નંબર (ઓટીપી અને સ્ટેટસ અપડેટ માટે)"]]
    },
    {
        "id": "renew_driving_license", "cat": "gov", "icon": "🚗", "en": "Driving License Renewal Application", "gu": "ડ્રાઇવિંગ લાઇસન્સ રીન્યુ કરવા માટેની અરજી",
        "descEn": "Online service for the renewal of an expired or expiring Driving License through the Parivahan Sarathi portal.", "descGu": "સારથી પરિવહન પોર્ટલ દ્વારા મુદત પૂરી થયેલ અથવા પૂરી થવા આવેલ ડ્રાઇવિંગ લાઇસન્સને રીન્યુ (નવીનીકરણ) કરાવવા માટેની ઓનલાઇન સેવા.",
        "price": "", "processing": "અરજી સબમિટ થયા બાદ દસ્તાવેજોની ચકાસણી ઓનલાઇન કરવામાં આવશે. ૪૦ વર્ષથી વધુ ઉંમરના અરજદારો માટે સરકારી તબીબનું મેડિકલ સર્ટિફિકેટ (Form 1A) અપલોડ કરવું ફરજિયાત છે.", "docs": [["Original Old Driving License", "જૂનું ડ્રાઇવિંગ લાઇસન્સ (અસલ)"], ["Aadhaar Card (Address & Identity Proof)", "આધાર કાર્ડ (સરનામા અને ઓળખનો પુરાવો)"], ["Passport Size Photograph", "પાસપોર્ટ સાઇઝ ફોટો"], ["Applicant's Signature", "અરજદારની સહી"], ["Mobile Number (Linked with Aadhaar for OTP)", "મોબાઈલ નંબર (ઓટીપી વેલિડેશન માટે)"]]
    },
    {
        id: "ayushman", cat: "gov", icon: "🏥", en: "Ayushman Card", gu: "આયુષ્માન કાર્ડ",
        descEn: "Health insurance card for free treatment in listed hospitals.", descGu: "નિયત હોસ્પિટલોમાં મફત સારવાર માટેનું આરોગ્ય વીમા કાર્ડ.",
        price: "", processing: "", docs: [["Aadhaar Card", "આધાર કાર્ડ"], ["Ration Card", "રેશન કાર્ડ"], ["Mobile number linked with Aadhaar", "આધાર સાથે લિંક મોબાઇલ નંબર"], ["Income Certificate", "આવકનો દાખલો"]]
    },
    {
        id: "eshram", cat: "gov", icon: "👷", en: "e-Shram Card", gu: "ઈ-શ્રમ કાર્ડ",
        descEn: "Registration for unorganised sector workers with accident insurance benefit.", descGu: "અસંગઠિત ક્ષેત્રના કામદારો માટે અકસ્માત વીમા લાભ સાથે નોંધણી.",
        price: "", processing: "", docs: [["Aadhaar Card", "આધાર કાર્ડ"], ["Mobile number linked with Aadhaar", "આધાર સાથે લિંક મોબાઇલ નંબર"], ["Bank Passbook / IFSC", "બેંક પાસબુક / IFSC"]]
    },
    {
        id: "caste", cat: "gov", icon: "📜", en: "Caste Certificate", gu: "જાતિ પ્રમાણપત્ર",
        descEn: "Official proof of your caste for education, jobs and schemes.", descGu: "શિક્ષણ, નોકરી અને યોજનાઓ માટે જાતિનો સત્તાવાર પુરાવો.",
        price: "", processing: "", docs: [["Aadhaar Card", "આધાર કાર્ડ"], ["School Leaving Certificate", "શાળા છોડ્યાનું પ્રમાણપત્ર"], ["Father's / Family Caste Proof", "પિતા / પરિવારનો જાતિનો પુરાવો"], ["Ration Card", "રેશન કાર્ડ"]]
    },
    {
        "id": "bin_anamat_caste_certificate", "cat": "gov", "icon": "📜", "en": "Unreserved Category Caste Certificate (General Category Certificate Without Income)", "gu": "બિન અનામત વર્ગનું જાતિનું પ્રમાણપત્ર (બિન અનામત દાખલો આવક વગરનો)",
        "descEn": "Official caste certificate for individuals belonging to the unreserved (general) category in Gujarat, useful for education and employment benefits.", "descGu": "ગુજરાતમાં બિન અનામત વર્ગના (જનરલ કેટેગરી) નાગરિકો માટે શૈક્ષણિક અને રોજગારીના હેતુસર મેળવવામાં આવતો સત્તાવાર જાતિનો દાખલો.",
        "price": "", "processing": "", "docs": [["School Leaving Certificate (LC) of Applicant and Father", "અરજદાર અને પિતાનું શાળા છોડ્યાનું પ્રમાણપત્ર (LC)"], ["Ration Card, Election Card, or Aadhaar Card", "રેશનકાર્ડ, ચૂંટણી કાર્ડ અથવા આધાર કાર્ડ"], ["Proof of Residence (Electricity Bill or Property Tax Bill)", "સરનામાનો પુરાવો (લાઇટ બિલ અથવા વેરા બિલ)"], ["Family Tree / Caste Document of Grandfather, Father, or Uncle (if required)", "જરૂરિયાત મુજબ વંશવેલો દર્શાવતો જાતિ દસ્તાવેજ (દાદા/પિતા/કાકાનો)"]]
    },
    {
        id: "income", cat: "gov", icon: "💰", en: "Income Certificate", gu: "આવક પ્રમાણપત્ર",
        descEn: "Proof of family annual income for scholarships and government schemes.", descGu: "શિષ્યવૃત્તિ અને સરકારી યોજનાઓ માટે પરિવારની વાર્ષિક આવકનો પુરાવો.",
        price: "", processing: "", docs: [["Aadhaar Card", "આધાર કાર્ડ"], ["Ration Card", "રેશન કાર્ડ"], ["Light Bill", "લાઈટ બીલ"], ["Income Proof / Self Declaration", "આવકનો પુરાવો / સ્વ-ઘોષણા"]]
    },
    {
        id: "ncl", cat: "gov", icon: "📄", en: "Non-Creamy Layer Certificate", gu: "નોન-ક્રીમી લેયર પ્રમાણપત્ર",
        descEn: "Required for OBC / SEBC candidates for admissions and jobs.", descGu: "પ્રવેશ અને નોકરી માટે OBC / SEBC ઉમેદવારો માટે જરૂરી.",
        price: "", processing: "", docs: [["Aadhaar Card", "આધાર કાર્ડ"], ["Ration Card", "રેશન કાર્ડ"], ["Applicant's School Leaving Certificate", "અરજદારનું શાળા છોડ્યાનું પ્રમાણપત્ર"], ["Parent's School Leaving Certificate", "માતા / પિતાની શાળા છોડ્યાનું પ્રમાણપત્ર"], ["Caste Certificate", "જાતિ પ્રમાણપત્ર"], ["Panchnamu", "પંચનામુ"], ["Affidavit", "સોગંદ નામું"], ["Parents' Income Proof", "માતા / પિતાની આવકનો પુરાવો"]]
    },
    {
        id: "residence", cat: "gov", icon: "🏠", en: "Residence Certificate", gu: "રહેઠાણનો દાખલો",
        descEn: "Proof that you live at a given address.", descGu: "તમે નિશ્ચિત સરનામે રહો છો તેનો પુરાવો.",
        price: "", processing: "", docs: [["Aadhaar Card", "આધાર કાર્ડ"], ["Passport Size Photo", "પાસપોર્ટ સાઇઝ ફોટો"], ["Light Bill / Property Tax / Rent Agreement", "લાઇટ બિલ / મિલકત વેરો / ભાડા કરાર"], ["Ration Card", "રેશન કાર્ડ"]]
    },
    {
        id: "ews", cat: "gov", icon: "🎓", en: "EWS Certificate", gu: "EWS પ્રમાણપત્ર",
        descEn: "For Economically Weaker Sections to claim reservation benefits.", descGu: "આર્થિક રીતે નબળા વર્ગો માટે અનામતનો લાભ મેળવવા.",
        price: "", processing: "", docs: [["Aadhaar Card", "આધાર કાર્ડ"], ["Ration Card", "રેશન કાર્ડ"], ["School Leaving Certificate", "શાળા છોડ્યાનું પ્રમાણપત્ર"], ["Father's / Family Caste Proof", "પિતા / પરિવારનો જાતિનો પુરાવો"], ["Income Certificate", "આવકનું પ્રમાણપત્ર"], ["Affidavit", "સોગંદ નામું"]]
    },
    {
        id: "domicile", cat: "gov", icon: "🏡", en: "Domicile Certificate", gu: "ડોમિસાઈલ સર્ટિફિકેટ",
        descEn: "Proof of permanent residence in a state or area for education, jobs and government benefits.", descGu: "શિક્ષણ, નોકરી અને સરકારી લાભો માટે રાજ્ય અથવા વિસ્તારમાં કાયમી રહેઠાણનો સત્તાવાર પુરાવો.",
        price: "", processing: "", docs: [["Aadhaar Card", "આધાર કાર્ડ"], ["Ration Card", "રેશન કાર્ડ"], ["School Leaving certificate", "શાળા છોડ્યાનું પ્રમાણપત્ર"], ["Police Report", "પોલીસ રીપોર્ટ"], ["Light Bill or House Tax Receipt", "લાઈટ બીલ અથવા ઘર વેરા ની પહોચ"], ["Affidavit", "સોગંદ નામું"], ["Mark Sheets of the Last 10 Years", "છેલ્લા 10 વર્ષ ની માર્કશીટ"]]
    },
    {
        id: "rationcard", cat: "gov", icon: "📋", en: "Ration Card Services", gu: "રેશન કાર્ડની સેવાઓ",
        descEn: "Ration card services including adding, removing and correcting names.", descGu: "રેશનિંગ કાર્ડમાં નામ ઉમેરવા, નામ કમી કરવા અને સુધારા કરવાની સેવાઓ.",
        price: "", processing: "", docs: [["For Adding Name: Aadhaar Card, Ration Card, Marriage Certificate / Birth Certificate (as applicable)", "નામ ઉમેરવા માટે: આધાર કાર્ડ, રેશન કાર્ડ, લગ્ન પ્રમાણપત્ર / બાળકનો જન્મનો દાખલો (જે લાગુ પડે તે)"], ["For Removing Name: Aadhaar Card, Ration Card, Marriage Certificate / Death Certificate (as applicable)", "નામ કમી કરવા માટે: આધાર કાર્ડ, રેશન કાર્ડ, લગ્ન પ્રમાણપત્ર / મરણનો દાખલો (જે લાગુ પડે તે)"], ["For Duplicate Ration Card: Aadhaar Card, Raton Card", "ડુપ્લીકેટ રેશનકાર્ડ મેળવવા માટે: આધાર કાર્ડ, રેશન કાર્ડ"]]
    },
    {
        id: "seniorcitizen", cat: "gov", icon: "👴", en: "Senior Citizen Certificate", gu: "સિનિયર સિટીઝન પ્રમાણપત્ર",
        descEn: "Certificate for senior citizens as proof of age and residence.", descGu: "સિનિયર સિટીઝન માટે ઉંમર અને રહેઠાણના પુરાવા તરીકેનું પ્રમાણપત્ર.",
        price: "", processing: "", docs: [["Passport Size Photo", "પાસપોર્ટ સાઇઝ ફોટો"], ["Aadhaar Card", "આધાર કાર્ડ"], ["Ration Card", "રેશન કાર્ડ"], ["Age Proof (School Leaving Certificate / Birth Certificate / Voter ID)", "ઉંમરનો પુરાવો (એલ.સી. અથવા જન્મનો દાખલો અથવા વોટર આઈડી)"], ["Residence Proof (Light Bill / Tax Bill)", "રહેઠાણનો પુરાવો (લાઈટ બિલ / વેરા બિલ)"]]
    },
    {
        id: "widow_certificate", cat: "gov", icon: "📜", en: "Widow Certificate", gu: "વિધવા પ્રમાણપત્ર",
        descEn: "Application for widow certificate and related financial assistance schemes.", descGu: "વિધવા પ્રમાણપત્ર અને તેને સંબંધિત નાણાકીય સહાય યોજનાઓ માટેની અરજી.",
        price: "", processing: "", docs: [["Aadhaar Card of Applicant", "અરજદારનું આધાર કાર્ડ"], ["Residency Proof (Ration Card / Electricity Bill)", "રહેઠાણનો પુરાવો (રેશન કાર્ડ / લાઈટ બિલ)"], ["Income Certificate", "આવકનો દાખલો"], ["Death Certificate of Husband", "પતિના મરણનો દાખલો"], ["Affidavit (Notary Proof of not remarrying)", "એફિડેવિટ (પુનઃલગ્ન ન કર્યાનું સોગંદનામું)"]]
    },
    {
        "id": "pm_swanidhi", "cat": "gov", "icon": "🏪", "en": "PM Swanidhi Scheme", "gu": "પી એમ સ્વનિધિ યોજના",
        "descEn": "Micro-credit facility scheme for street vendors.", "descGu": "શેરી ફેરિયાઓ માટે સૂક્ષ્મ-ધિરાણ (લોન) પૂરી પાડતી યોજના.",
        "price": "", "processing": "", "docs": [["Aadhaar Card", "આધારકાર્ડ"], ["Bank Passbook", "બેન્કપાસબુક"], ["Mobile Number", "મોબાઈલ નંબર"], ["Municipality Certificate", "નગર પાલિકા નો દાખલો"], ["Photo of Business Place/Vending Location", "વ્યવસાય કરતાં હોય ત્યાં નો ફોટો"]]
    },
    {
        "id": "anganwadi_recruitment_gujarat", "cat": "gov", "icon": "🏫", "en": "Anganwadi Worker and Helper Recruitment", "gu": "આંગણવાડી કાર્યકર અને તેડાગર ભરતી",
        "descEn": "Recruitment for Anganwadi workers and helpers by the Department of Women and Child Development, Government of Gujarat.", "descGu": "મહિલા અને બાળ વિકાસ વિભાગ, ગુજરાત સરકાર દ્વારા આંગણવાડી કાર્યકર અને તેડાગરની જગ્યાઓ માટેની ભરતી.",
        "price": "", "processing": "", "docs": [["Aadhaar Card & Passport Size Photo", "આધાર કાર્ડ & પાસપોર્ટ સાઇઝ ફોટો"], ["School Leaving Certificate (L.C.) / Grade 10 to 12 Credit Certificate", "શાળા છોડ્યાનું પ્રમાણપત્ર (L.C.) / ધોરણ-૧૦ કે ૧૨ નું ક્રેડિટ સર્ટી."], ["Local Domicile/Residence Certificate issued by Mamlatdar", "મામલતદારશ્રી દ્વારા અપાયેલ સ્થાનિક રહેઠાણનું પ્રમાણપત્ર"], ["Self Declaration", "\"સેલ્ફ ડીકલેરેશન\" (સ્વઘોષણાપત્ર)"], ["Original Marksheet of Grade 10 Pass", "ધોરણ-૧૦ પાસની માર્કશીટ"], ["Original Marksheet of Grade 12 Pass", "ધોરણ-૧૨ પાસની માર્કશીટ"], ["All Semester Marksheets of Graduation / Post Graduation / PTC / B.Ed (Whichever is applicable)", "સ્નાતક / અનુસ્નાતક / PTC / B.Ed ના તમામ સેમેસ્ટરની માર્કશીટ (જે લાગુ પડે તે)"], ["Caste Certificate (if applicable)", "જાતિ અંગેનું પ્રમાણપત્ર (લાગુ પડતું હોય તો)"], ["Widow Certificate (if applicable)", "વિધવા અંગેનું પ્રમાણપત્ર (લાગુ પડતું હોય તો)"], ["Experience Certificate as a Helper (if applicable)", "તેડાગર તરીકેના અનુભવ અંગેનું પ્રમાણપત્ર (લાગુ પડતું હોય તો)"]]
    },
    {
        "id": "epf_withdrawal", "cat": "gov", "icon": "💰", "en": "EPF Withdrawal (PF Claim Application)", "gu": "પીએફ ઉપાડવા માટેની અરજી (PF ક્લેમ)",
        "descEn": "Online application service for partial advance or full withdrawal of accumulated Provident Fund balance through the EPFO Member Portal.", "descGu": "EPFO મેમ્બર પોર્ટલ દ્વારા પીએફ (Provident Fund) ના જમા થયેલા નાણાં આંશિક એડવાન્સ અથવા પૂરેપૂરા ઉપાડવા માટેની ઓનલાઇન ક્લેમ સેવા.",
        "price": "", "processing": "ઓનલાઇન ક્લેમ સબમિટ થયા બાદ સામાન્ય રીતે ૭ થી ૧૫ સરકારી કામકાજના દિવસોમાં પીએફની રકમ સીધી તમારા બેંક ખાતામાં જમા થાય છે.", "docs": [["Universal Account Number (UAN)", "યુએન (UAN) નંબર"], ["Aadhaar Card (Must be linked with UAN)", "આધાર કાર્ડ (UAN નંબર સાથે લિંક હોવું ફરજિયાત છે)"], ["PAN Card (Mandatory if service is less than 5 years)", "પાનકાર્ડ (જો નોકરીના વર્ષ ૫ થી ઓછા હોય તો ટેક્સ બચાવવા માટે જરૂરી)"], ["Bank Passbook or Cancelled Cheque (with IFSC code & printed name)", "બેંક પાસબુક અથવા કેન્સલ ચેક (IFSC કોડ અને નામ સ્પષ્ટ છાપેલું હોવું જોઈએ)"], ["Mobile Number linked with Aadhaar Card (For OTP verification)", "આધાર કાર્ડ સાથે લિંક મોબાઈલ નંબર (ઓટીપી વેરિફિકેશન માટે)"]]
    },
    {
        "id": "new_electricity_meter", "cat": "gov", "icon": "🔌", "en": "New Electricity Meter Connection Application", "gu": "નવા વીજળી મીટરના કનેક્શન માટેની અરજી",
        "descEn": "Application service for requesting a new residential, commercial, or agricultural electricity meter connection from the power distribution company.", "descGu": "રહેણાંક, વ્યાપારી અથવા ખેતીવાડી હેતુ માટે વીજ વિતરણ કંપની પાસેથી નવું સત્તાવાર વીજળી મીટર કનેક્શન મેળવવા માટેની સેવા.",
        "price": "", "processing": "", "docs": [["Proof of Ownership (Index-2 / Sale Deed / Property Card / Possession Letter)", "જગ્યાની માલિકીનો પુરાવો (ઇન્ડેક્સ-૨ / વેચાણ દસ્તાવેજ / પ્રોપર્ટી કાર્ડ / કબ્જા પત્ર)"], ["Identity Proof of Applicant (Aadhaar Card / PAN Card / Voter ID)", "અરજદારનો ઓળખનો પુરાવો (આધાર કાર્ડ / પાન કાર્ડ / ચૂંટણી કાર્ડ)"], ["Passport Size Photograph of the Applicant", "અરજદારનો તાજેતરનો પાસપોર્ટ સાઇઝ ફોટો"], ["Applicant's Signature", "અરજદારની સહી"], ["Mobile Number & Email ID", "મોબાઈલ નંબર અને ઈમેલ આઈડી"], ["Tax Bill or Municipal Assessment Copy (Latest)", "મકાન વેરા બિલ અથવા મ્યુનિસિપલ આકારણી પત્રકની નકલ (તાજેતરની)"], ["No Objection Certificate (NOC) from landlord / Gram Panchayat / Society (if applicable)", "જમીનમાલિક, ગ્રામ પંચાયત અથવા સોસાયટીનું ના-વાંધા પ્રમાણપત્ર (NOC - જો લાગુ પડતું હોય તો)"], ["Electrical Contractor's Test Report (Form A)", "ગવર્મેન્ટ અપ્રુવ્ડ ઇલેક્ટ્રિકલ કોન્ટ્રાક્ટરનો ટેસ્ટ રીપોર્ટ (ફોર્મ-એ)"], ["Photocopy of a neighbor's electricity bill near the location where the new meter is to be installed", "જે સ્થળે મીટર લેવાનું છે ત્યા આજુ-બાજુ ના લાઈટ બીલની ઝેરોક્ષ"]]
    },
    {
        "id": "electricity_name_transfer", "cat": "gov", "icon": "⚡", "en": "Electricity Bill Name Transfer", "gu": "લાઇટ બિલના મીટરમાં નામ ટ્રાન્સફર કરવા માટેની અરજી",
        "descEn": "Online or offline application service to change the consumer name on an electricity meter after property purchase or inheritance.", "descGu": "મકાન/પ્રોપર્ટીની ખરીદી અથવા વારસા હક્કના આધારે વીજળી મીટરમાં ગ્રાહકનું નામ બદલવા માટેની ઓનલાઇન અથવા ઓફલાઇન સેવા.",
        "price": "", "processing": "અરજી સબમિટ થયા બાદ અને દસ્તાવેજોની ચકાસણી પૂર્ણ થયા પછી આગામી ૧ થી ૨ બિલિંગ સાયકલમાં નવું નામ બિલમાં આવી જાય છે.", "docs": [["Old Electricity Bill (Latest Copy)", "જૂનું લાઈટ બિલ (તાજેતરની નકલ)"], ["Property Card or Index-2 / Sale Deed", "પ્રોપર્ટી કાર્ડ અથવા ઇન્ડેક્સ-૨ / વેચાણ દસ્તાવેજ (માલિકીનો પુરાવો)"], ["Applicant's Passport Size Photograph", "અરજદારનો પાસપોર્ટ સાઇઝ ફોટો"], ["Applicant's Signature", "અરજદારની સહી"], ["Mobile Number", "મોબાઈલ નંબર"], ["Identity Proof of New Applicant (Aadhaar Card / PAN Card)", "નવા અરજદારનો ઓળખનો પુરાવો (આધાર કાર્ડ / પાન કાર્ડ)"], ["No Objection Certificate (NOC) from old owner or Death Certificate (if applicable)", "જૂના માલિકનું સંમતિપત્રક (NOC) અથવા મરણનો દાખલો (જો લાગુ પડતું હોય તો)"]]
    },
    {
        "id": "police_verification_report", "cat": "gov", "icon": "👮", "en": "Police Verification Report", "gu": "પોલીસ રિપોર્ટ મેળવવા માટે",
        "descEn": "", "descGu": "",
        "price": "", "processing": "", "docs": [["Aadhaar Card (Identity & Address Proof)", "આધારકાર્ડ (ઓળખ અને સરનામાનો પુરાવો)"], ["Recent Passport Size Photograph", "તાજેતરનો પાસપોર્ટ સાઇઝનો ફોટો"], ["Active Mobile Number", "મોબાઈલ નંબર"]]
    },
    {
        id: "othergov", cat: "gov", icon: "🗂️", en: "Other Government Online Services", gu: "અન્ય સરકારી ઓનલાઈન સેવાઓ",
        descEn: "Ask us about any other government online work.", descGu: "અન્ય કોઈપણ સરકારી ઓનલાઈન કામ માટે અમને પૂછો.",
        price: "", processing: "", docs: [["Aadhaar Card", "આધાર કાર્ડ"], ["Passport Size Photo", "પાસપોર્ટ સાઇઝ ફોટો"], ["Mobile Number", "મોબાઇલ નંબર"], ["Other documents depend on the service", "અન્ય દસ્તાવેજો સેવા પ્રમાણે"]]
    },

    // printing services
    { id: "pdfprint", cat: "print", icon: "🖨️", en: "PDF / Document Printing", gu: "PDF / ડોક્યુમેન્ટ પ્રિન્ટિંગ", descEn: "Send your file on WhatsApp and collect the printout.", descGu: "તમારી ફાઇલ વોટ્સએપ પર મોકલો અને પ્રિન્ટ લઈ જાઓ.", price: "" },
    { id: "colour", cat: "print", icon: "🎨", en: "Colour Printing", gu: "કલર પ્રિન્ટિંગ", descEn: "Clear colour prints, A4 and other sizes.", descGu: "સ્પષ્ટ કલર પ્રિન્ટ, A4 અને અન્ય સાઇઝ.", price: "" },
    { id: "bw", cat: "print", icon: "📃", en: "Black & White Printing", gu: "બ્લેક એન્ડ વ્હાઇટ પ્રિન્ટિંગ", descEn: "Fast and affordable black & white prints.", descGu: "ઝડપી અને પરવડે તેવી બ્લેક એન્ડ વ્હાઇટ પ્રિન્ટ.", price: "" },
    { id: "photocopy", cat: "print", icon: "📑", en: "Photocopy", gu: "ઝેરોક્ષ", descEn: "Photocopy of any document.", descGu: "કોઈપણ દસ્તાવેજની ઝેરોક્ષ.", price: "" },
    { id: "passport", cat: "print", icon: "🧑", en: "Passport Size Photos", gu: "પાસપોર્ટ સાઇઝ ફોટા", descEn: "Passport size photos printed on the spot.", descGu: "પાસપોર્ટ સાઇઝ ફોટા તરત પ્રિન્ટ.", price: "" },
    { id: "othershop", cat: "print", icon: "✨", en: "Other Shop Services", gu: "અન્ય દુકાન સેવાઓ", descEn: "Ask us for any other printing or document need.", descGu: "અન્ય પ્રિન્ટિંગ કે ડોક્યુમેન્ટ કામ માટે પૂછો.", price: "" },

    // card services
    { id: "smartpvc", cat: "card", icon: "🪪", en: "Smart PVC Card", gu: "સ્માર્ટ PVC કાર્ડ", descEn: "Durable PVC print of Aadhaar, Pan card and more.", descGu: "આધાર, પાન કાર્ડ વગેરેની ટકાઉ PVC પ્રિન્ટ.", price: "" },
    { id: "pvcid", cat: "card", icon: "🏷️", en: "PVC ID Card", gu: "PVC આઈડી કાર્ડ", descEn: "Custom ID cards for schools, offices and businesses.", descGu: "શાળા, ઓફિસ અને વ્યવસાય માટે કસ્ટમ આઈડી કાર્ડ.", price: "" },
    { id: "doclam", cat: "card", icon: "🛡️", en: "Document Lamination", gu: "ડોક્યુમેન્ટ લેમિનેશન", descEn: "Protect important papers with lamination.", descGu: "લેમિનેશનથી મહત્વના કાગળો સુરક્ષિત કરો.", price: "" },
    { id: "cardlam", cat: "card", icon: "💠", en: "Card Lamination", gu: "કાર્ડ લેમિનેશન", descEn: "Lamination for ID and small cards.", descGu: "આઈડી અને નાના કાર્ડ માટે લેમિનેશન.", price: "" }
];

/* UI text (both languages) */
const UI = {
    nav_home: ["Home", "હોમ"], nav_online: ["Online Services", "ઓનલાઈન સેવાઓ"], nav_shop: ["Shop Services", "દુકાન સેવાઓ"], nav_about: ["About", "અમારા વિશે"], nav_contact: ["Contact", "સંપર્ક"],
    tagline: ["All Online & Digital Services Under One Roof", "તમામ ઓનલાઈન અને ડિજિટલ સેવાઓ એક જ જગ્યાએ"],
    view_services: ["View Services", "સેવાઓ જુઓ"], whatsapp_us: ["WhatsApp Us", "વોટ્સએપ કરો"],
    online_title: ["Government & Online Services", "સરકારી અને ઓનલાઈન સેવાઓ"], online_sub: ["Note: The documents listed below are for your information only. Documents are subject to change as per Government rules. Tap a service to see the required documents.", "નોંધ : નીચે આપેલ ડોક્યુમેંટ ફક્ત આપની જાણકારી માટે છે સરકાર શ્રી ના નીયમ મુજબ ડોક્યુમેંટમા ફેર-ફાર થઈ શકે છે. જરૂરી દસ્તાવેજો જોવા સેવા પર ક્લિક કરો."],
    shop_title: ["Printing & Other Services", "પ્રિન્ટિંગ અને અન્ય સેવાઓ"], shop_sub: ["Printing, cards and lamination available at our shop.", "પ્રિન્ટિંગ, કાર્ડ અને લેમિનેશન અમારી દુકાને ઉપલબ્ધ."],
    cat_print: ["Printing & Document Services", "પ્રિન્ટિંગ અને ડોક્યુમેન્ટ સેવાઓ"], cat_card: ["Card & Lamination Services", "કાર્ડ અને લેમિનેશન સેવાઓ"],
    about_title: ["About Us", "અમારા વિશે"], about_text: ["Your Trusted Online & Digital Service Center\nWe are a local Cyber Cafe and Online Service Center providing a wide range of digital, government, and document-related services under one roof.\n We help customers with various online applications and services such as Caste Certificate, Income Certificate, Non-Creamy Layer Certificate, Ayushman Card, e-Shram Card, PAN Card, Scholarship Services, and other online government services.\nWe also provide document printing, photocopy, Smart PVC Cards, ID Cards, document lamination, card lamination, and other digital services.\nOur goal is to make online and digital services simple, convenient, and accessible for everyone.\nVisit us or contact us on WhatsApp for assistance with your required service.", "તમારું વિશ્વસનીય ઓનલાઈન અને ડિજિટલ સેવા કેન્દ્ર\nઅમે એક સ્થાનિક સાયબર કેફે અને ઓનલાઈન સેવા કેન્દ્ર છીએ, જ્યાં વિવિધ સરકારી, ઓનલાઈન અને ડોક્યુમેન્ટ સંબંધિત સેવાઓ એક જ જગ્યાએ ઉપલબ્ધ છે.\nઅમે જાતિ પ્રમાણપત્ર, આવક પ્રમાણપત્ર, નોન-ક્રીમી લેયર પ્રમાણપત્ર, આયુષ્માન કાર્ડ, ઈ-શ્રમ કાર્ડ, PAN કાર્ડ, સ્કોલરશિપ સેવાઓ અને અન્ય ઓનલાઈન સરકારી સેવાઓ માટે સહાય પૂરી પાડીએ છીએ.\nઆ ઉપરાંત અમે ડોક્યુમેન્ટ પ્રિન્ટિંગ, ફોટોકોપી, સ્માર્ટ PVC કાર્ડ, ID કાર્ડ, ડોક્યુમેન્ટ લેમિનેશન, કાર્ડ લેમિનેશન અને અન્ય ડિજિટલ સેવાઓ પણ પૂરી પાડીએ છીએ.\nઅમારો હેતુ ઓનલાઈન અને ડિજિટલ સેવાઓને સરળ, સુવિધાજનક અને દરેક વ્યક્તિ માટે સરળતાથી ઉપલબ્ધ બનાવવાનો છે.\nતમારી જરૂરી સેવા માટે અમારી મુલાકાત લો અથવા WhatsApp દ્વારા સંપર્ક કરો."],
    contact_title: ["Contact Us", "અમારો સંપર્ક કરો"], call: ["Call", "કૉલ કરો"], map: ["Google Maps", "ગૂગલ મેપ્સ"], instagram: ["Instagram", "ઈન્સ્ટાગ્રામ"],
    read_more: ["Read More", "વધુ જાણો"], enquire: ["Enquire", "પૂછપરછ"], req_docs: ["Required Documents", "જરૂરી દસ્તાવેજો"],
    wa_btn: ["Apply / Enquire on WhatsApp", "વોટ્સએપ પર સંપર્ક કરો"], back: ["Back to Services", "સેવાઓ પર પાછા"],
    charge: ["Service Charge", "સેવા ચાર્જ"], proc: ["Processing", "પ્રક્રિયા સમય"],
    lbl_phone: ["Phone", "ફોન"], lbl_wa: ["WhatsApp", "વોટ્સએપ"], lbl_addr: ["Address", "સરનામું"], lbl_hours: ["Office Time", "ઓફીસ ટાઈમ"], lbl_shop: ["Shop Name", "દુકાનનું નામ"],
    wa_general: ["Hello, I want information about your services.", "નમસ્તે, મારે તમારી સેવાઓ વિશે માહિતી જોઈએ છે."]
};

/* =====================  LOGIC (no need to edit)  ===================== */
let lang = localStorage.getItem("lang") || CONFIG.defaultLang;
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const L = () => (lang === "gu" ? 1 : 0);
const t = k => UI[k][L()];
// const waNumber = () => (CONFIG.whatsapp || "").replace(/\D/g, "");//---
const waNumber = 9624468448;//---
// const waLink = msg => waNumber() ? `https://wa.me/${waNumber()}?text=${encodeURIComponent(msg)}` : "#contact";//---
const waLink = msg => waNumber ? `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}` : "#contact";//---
const svcName = s => `${s.en} / ${s.gu}`;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function cardHTML(s) {
    const isGov = s.cat === "gov";
    const pri = s.price ? `<div class="price">${esc(s.price)}</div>` : "";
    return `<article class="card" tabindex="0" role="button" data-id="${s.id}">
    <div class="ic">${s.icon}</div>     
    <h4>${esc(L() ? s.gu : s.en)}</h4>
    <div class="gu">${esc(L() ? s.en : s.gu)}</div>
    <p>${esc(L() ? s.descGu : s.descEn)}</p>${pri}
    <span class="btn primary">${t(isGov ? "read_more" : "enquire")}</span></article>`;
}

function render() {
    document.documentElement.lang = lang;
    $("#gov-grid").innerHTML = SERVICES.filter(s => s.cat === "gov").map(cardHTML).join("");
    $("#print-grid").innerHTML = SERVICES.filter(s => s.cat === "print").map(cardHTML).join("");
    $("#card-grid").innerHTML = SERVICES.filter(s => s.cat === "card").map(cardHTML).join("");
    $$("[data-i18n]").forEach(e => e.textContent = t(e.dataset.i18n));
    // $$("[data-i18n]").forEach(e => e.innerHTML = t(e.dataset.i18n));
    $$("[data-shop-name]").forEach(e => e.textContent = CONFIG.shopName);
    $$(".lang button").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
    document.title = CONFIG.shopName;
    $$("[data-wa]").forEach(a => { a.href = waLink(t("wa_general")); a.target = waNumber ? "_blank" : ""; a.rel = "noopener"; });
    // const rows = [["lbl_shop", CONFIG.shopName], ["lbl_phone", CONFIG.phone || "[PHONE NUMBER]"], ["lbl_wa", CONFIG.whatsapp || "[WHATSAPP NUMBER]"], ["lbl_addr", CONFIG.address], ["lbl_hours", CONFIG.hours]];//---
    const rows = [["lbl_shop", CONFIG.shopName], ["lbl_wa", CONFIG.whatsapp || "[WHATSAPP NUMBER]"], ["lbl_addr", CONFIG.address], ["lbl_hours", CONFIG.hours]];//---
    $("#contact-list").innerHTML = rows.map(([k, v]) => `<li><b>${t(k)}</b>${esc(v)}</li>`).join("");
    $("#call-btn").href = CONFIG.phone ? `tel:${CONFIG.phone}` : "#contact";
    $("#map-btn").href = CONFIG.mapsLink || "#contact";
    $("#insta-btn").href = CONFIG.insta || "#contact";
    if (CONFIG.logo) $("#logo").innerHTML = `<img src="${CONFIG.logo}" alt="">`;
    if (!$("#overlay").hidden) openModal(current);
}

let current = null;
function openModal(id) {
    const s = SERVICES.find(x => x.id === id); if (!s) return;
    current = id;
    $("#m-icon").textContent = s.icon;
    $("#m-title").textContent = L() ? s.gu : s.en;
    $("#m-sub").textContent = L() ? s.en : s.gu;
    $("#m-desc").textContent = L() ? s.descGu : s.descEn;
    const hasDocs = s.docs && s.docs.length;
    $("#m-docs-wrap").hidden = !hasDocs;
    $("#m-docs").innerHTML = hasDocs ? s.docs.map(d => `<li>${esc(d[L()])}<small>${esc(d[1 - L()])}</small></li>`).join("") : "";
    $("#m-price").textContent = s.price ? `${t("charge")}: ${s.price}` : "";
    $("#m-proc").textContent = s.processing ? `${t("proc")}: ${s.processing}` : "";
    const msg = s.waMessage || `Hello, I want information about ${svcName(s)}.`;
    const a = $("#m-wa"); a.textContent = "💬 " + t("wa_btn"); a.href = waLink(msg);
    $("#m-back").textContent = t("back");
    $("#overlay").hidden = false; document.body.style.overflow = "hidden";
    $("#m-close").focus();
}
function closeModal() { $("#overlay").hidden = true; document.body.style.overflow = ""; current = null; }

document.addEventListener("click", e => {
    const card = e.target.closest(".card"); if (card) return openModal(card.dataset.id);
    const lb = e.target.closest(".lang button"); if (lb) { lang = lb.dataset.lang; localStorage.setItem("lang", lang); render(); }
    if (e.target === $("#overlay") || e.target.closest("#m-close, #m-back")) closeModal();
    if (e.target.closest(".nav a")) $("#nav").classList.remove("open");
});
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card")) { e.preventDefault(); openModal(e.target.dataset.id); }
});
$("#burger").addEventListener("click", () => { const o = $("#nav").classList.toggle("open"); $("#burger").setAttribute("aria-expanded", o); });
$("#year").textContent = new Date().getFullYear();
render();