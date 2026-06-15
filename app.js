'use strict';

// ============================================================
//  DEFAULT CATALOG
// ============================================================
const DEFAULT_CATALOG = [
  {id:'c001',sku:'B55091',description:'שירות בדיקת שקילת המסנן בלבד - מערכת 30-50 איש',listPrice:200.00},
  {id:'c002',sku:'B55092',description:'שירות בדיקת שקילת המסנן בלבד - מערכת 62-150 איש',listPrice:355.00},
  {id:'c003',sku:'B55130',description:'ביקור שירות חוזר',listPrice:350.00},
  {id:'c004',sku:'B55087',description:'שירות ללא בדיקת שקילת המסנן - מכלול FA2700',listPrice:1815.00},
  {id:'c005',sku:'B55140',description:'בדיקת על לחץ חוזרת',listPrice:200.00},
  {id:'c006',sku:'B55089',description:'שירות ללא בדיקת שקילת המסנן - מכלול FA3600',listPrice:2338.00},
  {id:'c007',sku:'B55003',description:'עבודות שונות',listPrice:0},
  {id:'c008',sku:'B55113',description:'שירות ללא בדיקת שקילת המסנן - מכלול FA4500',listPrice:3882.00},
  {id:'c009',sku:'B55015',description:'הובלה',listPrice:1.00},
  {id:'c010',sku:'B55115',description:'שירות ללא בדיקת שקילת המסנן - מכלול FA4800',listPrice:1570.00},
  {id:'c011',sku:'B55114',description:'שירות ללא בדיקת שקילת המסנן - מכלול FA6000',listPrice:2595.00},
  {id:'c012',sku:'B55116',description:'שירות ללא בדיקת שקילת המסנן - מכלול FA7200',listPrice:3125.00},
  {id:'c013',sku:'B55112',description:'חלקים לתיקון במפעל היצרן',listPrice:1750.00},
  {id:'c014',sku:'B55118',description:'שירות ללא בדיקת שקילת המסנן - מכלול FA9600',listPrice:10640.00},
  {id:'c015',sku:'B55131',description:'תוספת נסיעה',listPrice:365.00},
  {id:'c016',sku:'B55084',description:'שירות ללא בדיקת שקילת המסנן - מכלול FA1200',listPrice:995.00},
  {id:'c017',sku:'B55133',description:'הגעה מיוחדת',listPrice:1500.00},
  {id:'c018',sku:'B55085',description:'שירות ללא בדיקת שקילת המסנן - מכלול FA1800',listPrice:995.00},
  {id:'c019',sku:'B55086',description:'שירות ללא בדיקת שקילת המסנן - מכלול FA2400',listPrice:1225.00},
  {id:'c020',sku:'B55088',description:'שירות ללא בדיקת שקילת המסנן - מכלול FA3000',listPrice:2065.00},
  {id:'c021',sku:'B55142',description:'שירות ללא בדיקת שקילת המסנן - מערכת 200 איש',listPrice:705.00},
  {id:'c022',sku:'B55082',description:'שירות ללא בדיקת שקילת המסנן - מערכת 30-50 איש',listPrice:340.00},
  {id:'c023',sku:'H05617',description:'התקן קיר RAL9003',listPrice:59.50},
  {id:'c024',sku:'H07642',description:'הוראות שימוש עבור Hidden 50 (FAH 600/300)',listPrice:25.00},
  {id:'c025',sku:'HN1550',description:'צינור חיבור D200 L80 עם שפה',listPrice:95.00},
  {id:'c026',sku:'B55083',description:'שירות ללא בדיקת שקילת המסנן - מערכת 62-150 איש',listPrice:459.00},
  {id:'c027',sku:'HX1001AA',description:'צינור חיבור D 200 שלם עם צינור גמיש L=1400',listPrice:549.00},
  {id:'c028',sku:'B55143',description:'שירות ללא בדיקת שקילת המסנן - מערכת 8-15 איש',listPrice:365.00},
  {id:'c029',sku:'B55134',description:"תיקון מפוח 30-50 איש רמה א'",listPrice:250.00},
  {id:'c030',sku:'B02646-02',description:'שסתום הדף עם קדם מסנן ESVF 803/483 L כניסת אוויר',listPrice:1418.00},
  {id:'c031',sku:'HU5006',description:'ארכובת יד להפעלה על ידי שני אנשים - 100 איש',listPrice:750.00},
  {id:'c032',sku:'B55057',description:'התקנת פריטים נוספים',listPrice:350.00},
  {id:'c033',sku:'HN1033',description:'שרוול גמיש D204 L422',listPrice:449.00},
  {id:'c034',sku:'B55073',description:'שירות למכלול FA1200',listPrice:1995.00},
  {id:'c035',sku:'HU0040-01',description:'מסנן אבק D310 d190',listPrice:413.00},
  {id:'c036',sku:'B55138',description:"תיקון מפוח 62-150 איש רמה ב'",listPrice:1700.00},
  {id:'c037',sku:'HU5004',description:'ארכובת יד להפעלה על ידי שני אנשים',listPrice:550.00},
  {id:'c038',sku:'B55132',description:'לינת צוות',listPrice:1950.00},
  {id:'c039',sku:'HU0019',description:'מסנן אבק 1600 m³/h',listPrice:505.00},
  {id:'c040',sku:'B55074',description:'שירות למכלול FA1800',listPrice:1995.00},
  {id:'c041',sku:'B55135',description:"תיקון מפוח 30-50 איש רמה ב'",listPrice:1300.00},
  {id:'c042',sku:'B55075',description:'שירות למכלול FA2400',listPrice:2350.00},
  {id:'c043',sku:'B55010',description:'הדרכה',listPrice:450.00},
  {id:'c044',sku:'B55076',description:'שירות למכלול FA2700',listPrice:2388.00},
  {id:'c045',sku:'B55139',description:"תיקון מפוח 62-150 איש רמה ג'",listPrice:2800.00},
  {id:'c046',sku:'UK0000',description:'פריטים מיוחדים למערכות גדולות',listPrice:0},
  {id:'c047',sku:'B55077',description:'שירות למכלול FA3000',listPrice:2995.00},
  {id:'c048',sku:'B55078',description:'שירות למכלול FA3600',listPrice:4345.00},
  {id:'c049',sku:'B55137',description:"תיקון מפוח 62-150 איש רמה א'",listPrice:550.00},
  {id:'c050',sku:'B10601',description:'שסתום לחץ יתר והדף A 810 (יציאת אוויר)',listPrice:900.00},
  {id:'c051',sku:'B55108',description:'שירות למכלול FA4800',listPrice:3950.00},
  {id:'c052',sku:'B55107',description:'שירות למכלול FA6000',listPrice:8013.00},
  {id:'c053',sku:'HN4026',description:'טבעת אטימה למכסה סגירה D219.4 EPDM',listPrice:375.00},
  {id:'c054',sku:'B55109',description:'שירות למכלול FA7200',listPrice:5351.00},
  {id:'c055',sku:'HU5003',description:'ארכובת יד להפעלה על ידי אדם אחד כחול',listPrice:450.00},
  {id:'c056',sku:'B21281-01',description:'מפוח דגם LH 180/90',listPrice:5450.00},
  {id:'c057',sku:'HL8290',description:'מסנן ל- ESVF 803, מכלול',listPrice:165.00},
  {id:'c058',sku:'B55111',description:'שירות למכלול FA9600',listPrice:6050.00},
  {id:'c059',sku:'HN1032',description:'צינור חיבור D200 L45 עם שפה',listPrice:79.00},
  {id:'c060',sku:'B21481-01',description:'מפוח דגם LH 480/180',listPrice:5195.00},
  {id:'c061',sku:'B55054',description:'התקנת מערכת 100 איש',listPrice:2934.00},
  {id:'c062',sku:'HU4031',description:'טבעת הידוק מסנן פחם D670, מכלול',listPrice:195.00},
  {id:'c063',sku:'HW1004',description:'צינור חיבור D200 שלם עם גביע',listPrice:350.00},
  {id:'c064',sku:'HX1001AB',description:'צינור חיבור D 200 שלם עם צינור גמיש L=2000',listPrice:565.00},
  {id:'c065',sku:'HS1554',description:'צינור גומי גמיש EPDM קוטר 168 אורך 110 מ"מ',listPrice:370.00},
  {id:'c066',sku:'B35250-01-SH',description:'מסנן אב"כ HF 180 E (SH)',listPrice:6509.00},
  {id:'c067',sku:'B55052',description:'התקנת מערכת 30 איש',listPrice:1765.00},
  {id:'c068',sku:'H01879',description:'מד זרימת אוויר 66 איש PVC, שלם',listPrice:440.00},
  {id:'c069',sku:'H01914',description:'הוראות הפעלה ל FAH 800/400',listPrice:25.00},
  {id:'c070',sku:'HM0371WA',description:'צינור מעבר DN200 Fl.cl280 2x8xd20 t4 L=100',listPrice:540.00},
  {id:'c071',sku:'B20513',description:'מפוח דגם L 1600/600 תלת פאזי מנשאת רצפה',listPrice:5690.00},
  {id:'c072',sku:'B35300-01',description:'מסנן אב"כ HF 300 E',listPrice:3780.00},
  {id:'c073',sku:'H09660',description:'הוראות שימוש עבור Hidden 100 (FAH 1200/600) א',listPrice:25.00},
  {id:'c074',sku:'HK1031AC',description:'קטע צינור עם שסתום מצערת D200 L450 A300',listPrice:736.00},
  {id:'c075',sku:'B35400',description:'מסנן אב"כ HF 600 E סטנדרטי',listPrice:11538.00},
  {id:'c076',sku:'H09608',description:'הוראות שימוש עבור Hidden 100 (FAH 1200/600) ב',listPrice:15.00},
  {id:'c077',sku:'HS2046',description:'הוראות הפעלה ל- FAH 800/300',listPrice:25.00},
  {id:'c078',sku:'B21481-01e1-SH',description:'מפוח דגם LH 480/180 (SH)',listPrice:3700.00},
  {id:'c079',sku:'H11785',description:'כיסוי RAL9003 - מכלול',listPrice:314.00},
  {id:'c080',sku:'B35250-01',description:'מסנן אב"כ HF 180 E',listPrice:6509.00},
  {id:'c081',sku:'HM0371AA',description:'צינור מעבר DN200 (AA)',listPrice:527.00},
  {id:'c082',sku:'HV4002',description:'מכסה מסנן פחם עליון D200 שלם',listPrice:150.00},
  {id:'c083',sku:'B55001',description:'העברת מערכת',listPrice:2500.00},
  {id:'c084',sku:'HN5003',description:'חצי ידית ארכובה, כחול',listPrice:35.00},
  {id:'c085',sku:'B55034',description:'העברת מערכת 30-50 איש',listPrice:1698.00},
  {id:'c086',sku:'H09654',description:'פלטת חיזוק',listPrice:1250.00},
  {id:'c087',sku:'HS2095AA',description:'הוראות הפעלה ל- FA 1800/900',listPrice:25.00},
  {id:'c088',sku:'B35300-SH',description:'מסנן אב"כ HF 300 E (SH)',listPrice:3780.00},
  {id:'c089',sku:'B02720-01',description:'שסתום הדף עם קדם מסנן ESVF 1603 (עם מעטפת)',listPrice:7483.00},
  {id:'c090',sku:'B20893',description:'מפוח דגם L 3600',listPrice:5300.00},
  {id:'c091',sku:'B21642',description:'מפוח דגם LH 1600/600, שמאל',listPrice:11781.00},
  {id:'c092',sku:'B55055',description:'התקנת מערכת 150 איש',listPrice:2934.00},
  {id:'c093',sku:'HU0020',description:'מסנן אבק 2400 cbm/h',listPrice:689.00},
  {id:'c094',sku:'HU0021',description:'טבעת הידוק מסנן אבק D525',listPrice:750.00},
  {id:'c095',sku:'HU0024-01AA',description:'מסנן אבק מעטפת D500 L498 עם צינור קצר RAL9003',listPrice:1134.00},
  {id:'c096',sku:'HU1552AB',description:'אוגן מתאם 8-קדחים 10Inch-8Inch Pcirc355',listPrice:702.00},
  {id:'c097',sku:'HL8291',description:'מסנן ל- ESVF 1603, מכלול',listPrice:452.00},
  {id:'c098',sku:'HX1001',description:'צינור חיבור D 200 שלם עם צינור גמיש L=1100',listPrice:535.00},
  {id:'c099',sku:'HX1002AA',description:'קטע צינור עם שסתום מצערת D200 שלם עם צינור גמיש L1500',listPrice:765.00},
  {id:'c100',sku:'B55071',description:'שירות למערכת 30-50 איש',listPrice:555.56},
  {id:'c101',sku:'B55072',description:'שירות למערכת 62-150 איש',listPrice:649.58},
  {id:'c102',sku:'HN4058',description:'טבעת אטימה למעטפת מסנן פחם D660',listPrice:26.70},
  {id:'c103',sku:'B55136',description:"תיקון מפוח 30-50 איש רמה ג'",listPrice:2200.00},
  {id:'c104',sku:'B55070',description:'שירות למערכת 8-15 איש',listPrice:355.00},
  {id:'c105',sku:'HS2044',description:'הוראות הפעלה ל- FAH 480/180',listPrice:25.00},
  {id:'c106',sku:'HS2049',description:'הוראות הפעלה למערכת סינון אב"כ FAH 1600/600',listPrice:25.00},
  {id:'c107',sku:'HS2049-01',description:'הוראות הפעלה ל FAH 1600/600 (גרסה ב)',listPrice:25.00},
  {id:'c108',sku:'BB0031',description:'מעבר/מתאם מסיט קוטר 8" או לקוטר קטן יותר',listPrice:527.00},
  {id:'c109',sku:'BB0080',description:'צינור אב"כ 200 מ"מ - סעפת T',listPrice:558.00},
  {id:'c110',sku:'H09669',description:'סט חבק צינור D200 ציפוי חשמלי שחור',listPrice:95.00},
  {id:'c111',sku:'B35150',description:'מסנן אב"כ HF 50 E',listPrice:3700.00},
  {id:'c112',sku:'HK1031AD',description:'קטע צינור עם שסתום מצערת D200 L600 A300',listPrice:761.00},
  {id:'c113',sku:'HK1031AF',description:'קטע צינור עם שסתום מצערת D200 L900 A300',listPrice:795.00},
  {id:'c114',sku:'HK1031AG',description:'קטע צינור עם שסתום מצערת D200 L1050 A300',listPrice:825.00},
  {id:'c115',sku:'HU0039-01',description:'מסנן אבק D160 H265',listPrice:375.00},
  {id:'c116',sku:'HU4071',description:'טבעת הידוק מסנן פחם D670x7.6',listPrice:95.00},
  {id:'c117',sku:'B02646-01-SH',description:'שסתום הדף עם קדם מסנן ESVF 803/483 (SH)',listPrice:1550.00},
  {id:'c118',sku:'B20511',description:'מפוח דגם L1600/600 חד-פאזי מנשאת ריצפה',listPrice:5488.00},
  {id:'c119',sku:'B21561-01',description:'מפוח דגם LH 800/300',listPrice:6833.00},
  {id:'c120',sku:'B35400AA',description:'מסנן אב"כ עם צינור אוויר חוזר HF600E',listPrice:21930.00},
  {id:'c121',sku:'B40009',description:'תריס אל חוזר על מפוח עם יציאה 200x274',listPrice:208.00},
  {id:'c122',sku:'B42170',description:'חצי אוגן - חיבור לצנרת D200 עם ערכת הרכבה',listPrice:375.00},
  {id:'c123',sku:'B55000',description:'פירוק מערכת קיימת, פינוי ושינוע למפעל, כולל סילוק להטמנה',listPrice:1500.00},
  {id:'c124',sku:'BB0082',description:'צינור אב"כ 200 מ"מ - ברך 90° או אחרת',listPrice:558.00},
  {id:'c125',sku:'HL3225',description:'ערכת חיזוק למסנן פחם HF180/300 E',listPrice:59.50},
  {id:'c126',sku:'HV6504',description:'מד זרימת אוויר PVC 30 איש, שלם',listPrice:440.00},
  {id:'c127',sku:'HV6507',description:'מד זרימת אוויר L2400/900 PVC שלם',listPrice:440.00},
  {id:'c128',sku:'HW4002',description:'מכסה מסנן פחם צידי D200 שלם',listPrice:324.00},
  {id:'c129',sku:'B55140',description:'בדיקת לחץ למערכת FA1200',listPrice:350.00},
  {id:'c130',sku:'B55140',description:'בדיקת לחץ למערכת FA1800',listPrice:350.00},
  {id:'c131',sku:'B55140',description:'בדיקת לחץ למערכת FA2400',listPrice:350.00},
  {id:'c132',sku:'B55140',description:'בדיקת לחץ למערכת FA2700',listPrice:650.00},
  {id:'c133',sku:'B55140',description:'בדיקת לחץ למערכת FA3000',listPrice:650.00},
  {id:'c134',sku:'B55140',description:'בדיקת לחץ למערכת FA3600',listPrice:650.00},
  {id:'c135',sku:'B55140',description:'בדיקת לחץ למערכת FA4500',listPrice:650.00},
  {id:'c136',sku:'B55140',description:'בדיקת לחץ למערכת FA6000',listPrice:1200.00},
  {id:'c137',sku:'B55140',description:'בדיקת לחץ למערכת FA4800',listPrice:1200.00},
  {id:'c138',sku:'B55140',description:'בדיקת לחץ למערכת FA7200',listPrice:1200.00},
  {id:'c139',sku:'B55140',description:'בדיקת לחץ למערכת FA8400',listPrice:1200.00},
  {id:'c140',sku:'B55140',description:'בדיקת לחץ למערכת FA9600',listPrice:1200.00}
];

const CATALOG_HIERARCHY = [
  { id:'h1', name:'שירות', icon:'🔧', subgroups:[
    { id:'sg11', name:'כולל שקילה', skus:['B55073','B55074','B55075','B55076','B55077','B55078','B55108','B55107','B55109','B55111','B55071','B55072','B55070'] },
    { id:'sg12', name:'ללא שקילה',  skus:['B55087','B55089','B55113','B55115','B55114','B55116','B55118','B55084','B55085','B55086','B55088','B55142','B55082','B55083','B55143'] },
    { id:'sg13', name:'שקילה בלבד', skus:['B55091','B55092'] }
  ]},
  { id:'h2', name:'תוספות', icon:'➕', subgroups:[
    { id:'sg21', name:'שירות חוזר',    skus:['B55130'] },
    { id:'sg22', name:'תוספות כלליות', skus:['B55015','B55131','B55133','B55132'] }
  ]},
  { id:'h3', name:'עבודה', icon:'🏗️', subgroups:[
    { id:'sg31', name:'בדיקת לחץ',    skus:['B55140'] },
    { id:'sg32', name:'התקנת מערכת',  skus:['B55054','B55052','B55001','B55034','B55055'] },
    { id:'sg33', name:'התקנת פריטים', skus:['B55057'] },
    { id:'sg34', name:'הדרכה',        skus:['B55010'] },
    { id:'sg35', name:'פירוק ופינוי', skus:['B55000'] },
    { id:'sg36', name:'שונות',        skus:['B55003'] }
  ]},
  { id:'h4', name:'תיקון', icon:'🔨', subgroups:[
    { id:'sg41', name:'תיקון מסנן', skus:['B55112'] },
    { id:'sg42', name:'תיקון מפוח', skus:['B55134','B55138','B55135','B55139','B55137','B55136'] }
  ]},
  { id:'h5', name:'חלקים', icon:'⚙️', subgroups:[
    { id:'sg51', name:'מסנן',          skus:['B35250-01-SH','B35300-01','B35400','B35150','B35300-SH','B35250-01','B35400AA'] },
    { id:'sg52', name:'מסנן קדם',      skus:['HU0040-01','HU0019','HL8290','HU0020','HU0024-01AA','HL8291','HU0039-01'] },
    { id:'sg53', name:'מפוח',          skus:['B21281-01','B21481-01','B20513','B21481-01e1-SH','B20893','B21642','B20511','B21561-01'] },
    { id:'sg54', name:'מפוח - נילווים',skus:['B40009'] },
    { id:'sg55', name:'צינור',         skus:['HN1550','HX1001AA','HN1033','HN1032','HW1004','HX1001AB','HS1554','HX1001','HX1002AA','BB0080','H09669','HK1031AC','HK1031AD','HK1031AF','HK1031AG','B42170','BB0082'] },
    { id:'sg56', name:'מעבר / מתאם',  skus:['HM0371WA','HM0371AA','H09654','HU1552AB','BB0031'] },
    { id:'sg57', name:'שסתום כניסה',  skus:['B02646-02','B02720-01','B02646-01-SH'] },
    { id:'sg58', name:'שסתום יציאה',  skus:['B10601'] },
    { id:'sg59', name:'רצפתית',        skus:['HU5006','HU5004','HN4026','HU5003','HU4031','H01879','HV4002','HN5003','HU0021','HN4058','HU4071','HL3225','HV6504','HV6507','HW4002'] },
    { id:'sg5a', name:'הוראות הפעלה', skus:['H07642','H01914','H09660','H09608','HS2046','HS2095AA','HS2044','HS2049','HS2049-01'] },
    { id:'sg5b', name:'סמויה',         skus:['H05617','H11785'] },
    { id:'sg5c', name:'שונות',         skus:['UK0000'] }
  ]}
];

const PRE_FILTER_SKUS = new Set(CATALOG_HIERARCHY.find(h=>h.id==='h5').subgroups.find(sg=>sg.id==='sg52').skus);
const EXTRA_TYPES = ['אישורי כניסה','בייפאס ישן','אחר'];

// ============================================================
//  STATE
// ============================================================
const state      = { catalog:[], quote:null };
const imageCache = {};   // {itemId: dataUrl}

const undoStack=[], redoStack=[];
const MAX_UNDO=10;
let pickerCtx    = { targetGroupId:null, selGroupId:null, selSubgroupId:null, search:'' };
let dragState    = null;
let catalogView  = 'table';
let catalogFilter= '';
const selectedItems = new Set(); // סימון פריטים — נשמר בין חיפושים

// ============================================================
//  סיסמת מאגר
// ============================================================
const CATALOG_PASSWORD = '123';
let   _catalogUnlocked = false;

function requireCatalogAuth(callback) {
  if (_catalogUnlocked) { callback(); return; }
  openModal('🔒 גישה למאגר הפריטים', `
    <p style="color:var(--text-muted);font-size:.9rem;margin-bottom:14px">הזן סיסמה לביצוע עריכות במאגר</p>
    <div class="form-group">
      <input type="password" id="auth-pwd" placeholder="••••"
        style="font-size:1.2rem;letter-spacing:.3em;text-align:center;"
        onkeydown="if(event.key==='Enter') _submitAuth()">
    </div>
    <div id="auth-err" style="color:var(--danger);font-size:.85rem;min-height:18px;text-align:center;margin-top:-6px;"></div>
    <div class="modal-actions" style="justify-content:center;margin-top:14px">
      <button class="btn btn-primary" onclick="_submitAuth()">כניסה</button>
      <button class="btn btn-outline" onclick="closeModal()">ביטול</button>
    </div>`);
  window._pendingAuthCb = callback;
  setTimeout(()=>document.getElementById('auth-pwd')?.focus(), 60);
}
function _submitAuth() {
  const val=document.getElementById('auth-pwd')?.value||'';
  if (val===CATALOG_PASSWORD) {
    _catalogUnlocked=true; closeModal();
    showToast('✅ גישה אושרה','success');
    if (typeof window._pendingAuthCb==='function') { const cb=window._pendingAuthCb; window._pendingAuthCb=null; cb(); }
  } else {
    const e=document.getElementById('auth-err'); if(e) e.textContent='סיסמה שגויה';
    const i=document.getElementById('auth-pwd'); if(i){i.value='';i.focus();}
  }
}

// ============================================================
//  FIREBASE STORAGE
// ============================================================
let db = null;
let _catalogTimer = null;
let _quoteTimer   = null;

function _setSyncBar(status, msg) {
  const bar   = document.getElementById('sync-bar');
  const dot   = document.getElementById('sync-dot');
  const label = document.getElementById('sync-label');
  if (!bar) return;
  bar.className = 'sync-bar sync-' + status;
  dot.className = 'sync-dot dot-' + status;
  if (label) label.textContent = msg;
}

// ── Write to Firestore ───────────────────────────────────────
function saveCatalog() {
  try { localStorage.setItem('pq_catalog', JSON.stringify(state.catalog)); } catch(e){}
  if (!db) return;
  clearTimeout(_catalogTimer);
  _catalogTimer = setTimeout(async ()=>{
    _setSyncBar('saving','שומר...');
    try {
      await db.collection('data').doc('catalog').set({
        items: state.catalog, updatedAt: new Date().toISOString()
      });
      _setSyncBar('ok','מחובר לענן ✓');
    } catch(e){ _setSyncBar('error','שגיאת שמירה — נסה שוב'); console.error(e); }
  }, 300);
}

function saveQuote() {
  if (!state.quote) return;
  try { localStorage.setItem('pq_quote', JSON.stringify(state.quote)); } catch(e){}
  if (!db) return;
  clearTimeout(_quoteTimer);
  _quoteTimer = setTimeout(async ()=>{
    try {
      await db.collection('data').doc('quote').set({
        ...state.quote, updatedAt: new Date().toISOString()
      });
    } catch(e){ console.error(e); }
  }, 300);
}

// שמירה מיידית לענן (ללא debounce) — לשימוש בייבוא גיבוי
async function forceSaveAll() {
  if (!db) return;
  _setSyncBar('saving','שומר לענן...');
  try {
    await db.collection('data').doc('catalog').set({
      items: state.catalog, updatedAt: new Date().toISOString()
    });
    await db.collection('data').doc('quote').set({
      ...state.quote, updatedAt: new Date().toISOString()
    });
    _setSyncBar('ok','נשמר בענן ✓');
  } catch(e){
    _setSyncBar('error','שגיאת שמירה');
    console.error(e);
  }
}

// ── Image compression ────────────────────────────────────────
function compressImage(dataUrl, maxPx=600, quality=0.8) {
  return new Promise(res => {
    const img = new Image();
    img.onload = () => {
      let w=img.width, h=img.height;
      if (w>maxPx||h>maxPx) {
        if (w>h) { h=Math.round(h*maxPx/w); w=maxPx; }
        else      { w=Math.round(w*maxPx/h); h=maxPx; }
      }
      const c=document.createElement('canvas');
      c.width=w; c.height=h;
      c.getContext('2d').drawImage(img,0,0,w,h);
      res(c.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => res(dataUrl); // fallback
    img.src = dataUrl;
  });
}

// ── Image storage ─────────────────────────────────────────────
async function saveItemImage(itemId, dataUrl) {
  // דחוס לפני שמירה
  const compressed = await compressImage(dataUrl);
  imageCache[itemId] = compressed;
  try { localStorage.setItem('pq_img_'+itemId, compressed); } catch(e){}
  // שמור ל-Firestore (אחרי דחיסה הגודל סביר)
  if (db) {
    db.collection('images').doc(itemId)
      .set({ data: compressed, updatedAt: new Date().toISOString() })
      .catch(e=>console.warn('img save:', e));
  }
  return true;
}

function deleteItemImage(itemId) {
  delete imageCache[itemId];
  localStorage.removeItem('pq_img_'+itemId);
  if (db) db.collection('images').doc(itemId).delete().catch(()=>{});
}

function loadItemImage(itemId) {
  if (imageCache[itemId]) return imageCache[itemId];
  try {
    const img = localStorage.getItem('pq_img_'+itemId);
    if (img) { imageCache[itemId] = img; return img; }
  } catch(e) {}
  return null;
}

// טעינת תמונות ברקע (lazy) — רק אחרי שהאפליקציה נטענה
async function _loadImagesLazy() {
  if (!db) return;
  // קודם נטען מ-localStorage (מיידי)
  state.catalog.forEach(i=>{
    if (!imageCache[i.id]) {
      const img=localStorage.getItem('pq_img_'+i.id);
      if (img) imageCache[i.id]=img;
    }
  });
  // אחר כך משלים מ-Firestore רק מה שחסר
  const missing = state.catalog.filter(i=>!imageCache[i.id]).map(i=>i.id);
  if (!missing.length) return;
  try {
    // טען עד 10 תמונות חסרות בכל פעם
    for (let i=0; i<missing.length; i+=10) {
      const batch = missing.slice(i, i+10);
      await Promise.all(batch.map(async id => {
        try {
          const doc = await db.collection('images').doc(id).get();
          if (doc.exists && doc.data().data) {
            imageCache[id] = doc.data().data;
            try { localStorage.setItem('pq_img_'+id, doc.data().data); } catch(e){}
          }
        } catch(e) {}
      }));
    }
    renderCatalogTable();
  } catch(e) { console.warn('lazy img load:', e); }
}

function imgThumb(itemId, size=56) {
  const d=loadItemImage(itemId);
  return d?`<img src="${d}" style="width:${size}px;height:${size}px;object-fit:contain;border-radius:6px;border:1px solid #e2e8f0;background:#f8fafc;flex-shrink:0;padding:2px;">`:'';}

// ── Backup export / import ────────────────────────────────────
function exportFullBackup() {
  const images={};
  state.catalog.forEach(i=>{if(imageCache[i.id])images[i.id]=imageCache[i.id];});
  const blob=new Blob([JSON.stringify({version:3,exportedAt:new Date().toISOString(),catalog:state.catalog,quote:state.quote,images},null,2)],{type:'application/json'});
  const url=URL.createObjectURL(blob);
  const a=Object.assign(document.createElement('a'),{href:url,download:`גיבוי_מלא_${todayStr().replace(/\//g,'-')}.json`});
  document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
  showToast(`✅ גיבוי: ${state.catalog.length} פריטים`,'success');
}
function triggerImportBackup() { document.getElementById('import-backup-input').click(); }
function importFullBackup(event) {
  const file=event.target.files[0]; if(!file) return;
  const reader=new FileReader();
  reader.onload=async e=>{
    try {
      const data=JSON.parse(e.target.result);
      if(!data.catalog) return showToast('קובץ לא תקין','error');
      const imgCount=Object.keys(data.images||{}).length;
      if(!confirm(`לטעון ${data.catalog.length} פריטים ו-${imgCount} תמונות?`)) return;

      _setSyncBar('saving','טוען נתונים...');

      state.catalog=data.catalog; state.catalog.forEach(i=>{if(!i.id)i.id=uid();});
      if(data.quote){state.quote=data.quote;normalizeQuote(state.quote);}
      else createNewQuote(true);

      // תמונות → דחוס ושמור (localStorage + Firestore)
      const entries=Object.entries(data.images||{});
      _setSyncBar('saving',`שומר ${entries.length} תמונות...`);
      for(const [id,url] of entries){
        await saveItemImage(id, url); // compresses + saves
      }

      // קטלוג + הצעה → Firebase
      await forceSaveAll();

      renderCatalogTable(); renderQuote();
      showToast(`✅ ${data.catalog.length} פריטים נטענו`,'success');
    } catch(ex){ showToast('שגיאה: '+ex.message,'error'); _setSyncBar('error','שגיאה'); }
  };
  reader.readAsText(file,'utf-8'); event.target.value='';
}

// ── Cloud versioned backups ───────────────────────────────────
const MAX_CLOUD_BACKUPS = 10;

async function createCloudBackup() {
  if (!db) return showToast('לא מחובר ל-Firebase','error');
  _setSyncBar('saving','שומר גרסה...');
  try {
    const now  = new Date();
    const key  = 'backup_' + now.toISOString().replace(/[:.]/g,'-');
    const label= now.toLocaleDateString('he-IL') + ' ' + now.toLocaleTimeString('he-IL',{hour:'2-digit',minute:'2-digit'});

    // שמור קטלוג + הצעה בלבד — תמונות כבדות לא נכנסות ל-Firestore
    await db.collection('backups').doc(key).set({
      savedAt:    now.toISOString(),
      label,
      itemCount:  state.catalog.length,
      catalog:    state.catalog,
      quote:      state.quote
    });

    await _pruneOldBackups();
    _setSyncBar('ok','מחובר לענן ✓');
    showToast(`✅ גרסה נשמרה: ${label} (${state.catalog.length} פריטים)`,'success');
  } catch(e) {
    _setSyncBar('error','שגיאת שמירה');
    showToast('שגיאה: ' + e.message,'error');
  }
}

async function _pruneOldBackups() {
  if (!db) return;
  try {
    const snap = await db.collection('backups').orderBy('savedAt','desc').get();
    const docs  = snap.docs;
    if (docs.length > MAX_CLOUD_BACKUPS) {
      const toDelete = docs.slice(MAX_CLOUD_BACKUPS);
      await Promise.all(toDelete.map(d => d.ref.delete()));
    }
  } catch(e) { console.warn('prune:', e); }
}

async function openCloudBackupsList() {
  if (!db) return showToast('לא מחובר ל-Firebase','error');
  openModal('📋 גרסאות שמורות בענן', '<div style="text-align:center;padding:20px;color:var(--text-muted)">טוען...</div>');
  try {
    const snap = await db.collection('backups').orderBy('savedAt','desc').limit(10).get();
    if (snap.empty) {
      document.getElementById('modal-body').innerHTML =
        '<div style="text-align:center;padding:20px;color:var(--text-muted)">אין גרסאות שמורות.<br>לחץ "☁️ שמור גרסה" כדי ליצור אחת.</div>';
      return;
    }
    const rows = snap.docs.map(doc => {
      const d = doc.data();
      return `<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:0.5px solid var(--border);gap:10px">
        <div>
          <div style="font-weight:600;font-size:.9rem">${esc(d.label||d.savedAt)}</div>
          <div style="font-size:.78rem;color:var(--text-muted)">${d.itemCount||0} פריטים, ${d.imageCount||0} תמונות</div>
        </div>
        <button class="btn btn-outline btn-sm" onclick="restoreCloudBackup('${doc.id}','${esc(d.label||'')}')">שחזר</button>
      </div>`;
    }).join('');
    document.getElementById('modal-body').innerHTML =
      `<div style="margin-bottom:12px;font-size:.85rem;color:var(--text-muted)">שחזור יחליף את הנתונים הנוכחיים.</div>
       ${rows}
       <div class="modal-actions" style="margin-top:14px">
         <button class="btn btn-outline" onclick="closeModal()">סגור</button>
       </div>`;
  } catch(e) {
    document.getElementById('modal-body').innerHTML = `<div style="color:var(--danger)">שגיאה: ${e.message}</div>`;
  }
}

async function restoreCloudBackup(docId, label) {
  if (!confirm(`לשחזר את הגרסה "${label}"?\nהנתונים הנוכחיים יוחלפו.\n(תמונות לא משוחזרות מהענן — נשמרות רק מקומית)`)) return;
  closeModal();
  _setSyncBar('saving','משחזר...');
  try {
    const doc = await db.collection('backups').doc(docId).get();
    if (!doc.exists) return showToast('הגרסה לא נמצאה','error');
    const data = doc.data();

    state.catalog = data.catalog || [];
    state.catalog.forEach(i => { if(!i.id) i.id = uid(); });
    if (data.quote) { state.quote = data.quote; normalizeQuote(state.quote); }
    else createNewQuote(true);

    await forceSaveAll();
    renderCatalogTable(); renderQuote();
    showToast(`✅ שוחזרה גרסה: ${label}`,'success');
  } catch(e) {
    _setSyncBar('error','שגיאת שחזור');
    showToast('שגיאה: '+e.message,'error');
  }
}


async function boot() {
  _setSyncBar('saving', 'מתחבר...');

  // טען מ-localStorage מיידית
  _loadFromLocalStorage();
  renderCatalogTable(); renderQuote(); updateUndoRedoBtn();

  // בדוק config
  const configFilled = typeof FIREBASE_CONFIG !== 'undefined'
    && FIREBASE_CONFIG.apiKey !== 'REPLACE_ME'
    && FIREBASE_CONFIG.projectId !== 'REPLACE_ME';

  if (!configFilled) {
    document.getElementById('setup-screen').classList.remove('hidden');
    document.getElementById('main-app').classList.add('hidden');
    document.getElementById('sync-bar').classList.add('hidden');
    return;
  }

  // חבר Firebase
  try {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
    db = firebase.firestore();
  } catch(e) { console.warn('Firebase init:', e); }

  // טען מ-Firestore עם timeout של 6 שניות
  try {
    const timeout = new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),6000));

    const [catDoc, qDoc] = await Promise.race([
      Promise.all([
        db.collection('data').doc('catalog').get(),
        db.collection('data').doc('quote').get()
      ]),
      timeout
    ]);

    if (catDoc.exists && catDoc.data().items?.length) {
      state.catalog = catDoc.data().items;
      state.catalog.forEach(i=>{if(!i.id)i.id=uid();});
      try { localStorage.setItem('pq_catalog', JSON.stringify(state.catalog)); } catch(e){}
    } else if (!state.catalog.length) {
      state.catalog = [...DEFAULT_CATALOG];
    }

    if (qDoc.exists && qDoc.data().groups) {
      const q={...qDoc.data()}; delete q.updatedAt;
      state.quote=q; normalizeQuote(state.quote);
      try { localStorage.setItem('pq_quote', JSON.stringify(state.quote)); } catch(e){}
    } else if (!state.quote) {
      createNewQuote(true);
    }

    state.catalog.forEach(i=>{
      const img=localStorage.getItem('pq_img_'+i.id);
      if(img) imageCache[i.id]=img;
    });

    _setSyncBar('ok','מחובר לענן ✓');
    renderCatalogTable(); renderQuote();
    setTimeout(()=>_loadImagesLazy(), 1000);

  } catch(e) {
    console.warn('Firestore:', e.message);
    _setSyncBar('error', e.message==='timeout' ? 'פג timeout — עובד מקומית' : 'שגיאת חיבור');
    // הצג מה שיש בזיכרון
    if (!state.catalog.length) state.catalog = [...DEFAULT_CATALOG];
    if (!state.quote) createNewQuote(true);
    renderCatalogTable(); renderQuote();
  }
}

function _loadFromLocalStorage() {
  try {
    const sc=localStorage.getItem('pq_catalog');
    if(sc){ state.catalog=JSON.parse(sc); state.catalog.forEach(i=>{if(!i.id)i.id=uid();}); }
    else   state.catalog=[...DEFAULT_CATALOG];
  } catch(e){ state.catalog=[...DEFAULT_CATALOG]; }
  state.catalog.forEach(i=>{
    try{ const img=localStorage.getItem('pq_img_'+i.id); if(img) imageCache[i.id]=img; }catch(e){}
  });
  try {
    const sq=localStorage.getItem('pq_quote');
    if(sq){ state.quote=JSON.parse(sq); normalizeQuote(state.quote); }
    else createNewQuote(true);
  } catch(e){ createNewQuote(true); }
}

// ============================================================
//  UNDO / REDO
// ============================================================
function pushUndo() {
  if(!state.quote) return;
  undoStack.push(JSON.stringify(state.quote));
  if(undoStack.length>MAX_UNDO) undoStack.shift();
  redoStack.length=0; updateUndoRedoBtn();
}
function undo() {
  if(!undoStack.length) return showToast('אין פעולות לביטול','warning');
  redoStack.push(JSON.stringify(state.quote));
  state.quote=JSON.parse(undoStack.pop());
  saveQuote(); renderQuote(); updateUndoRedoBtn(); showToast('הפעולה בוטלה ✓','success');
}
function redo() {
  if(!redoStack.length) return showToast('אין פעולות לביצוע מחדש','warning');
  undoStack.push(JSON.stringify(state.quote));
  state.quote=JSON.parse(redoStack.pop());
  saveQuote(); renderQuote(); updateUndoRedoBtn(); showToast('הפעולה בוצעה מחדש ✓','success');
}
function updateUndoRedoBtn() {
  const ub=document.getElementById('undo-btn'); if(ub){ub.textContent=`↩ ביטול (${undoStack.length})`;ub.disabled=!undoStack.length;}
  const rb=document.getElementById('redo-btn'); if(rb){rb.textContent=`↪ בצע (${redoStack.length})`;  rb.disabled=!redoStack.length;}
}

// ============================================================
//  UTILS
// ============================================================
function uid()     { return Date.now().toString(36)+Math.random().toString(36).substr(2,7); }
function fmtNum(n) { const v=Number(n); return isNaN(v)?0:v; }
function fmtPrice(n){ const v=Number(n); return isNaN(v)?'₪0.00':'₪'+v.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','); }
function numFmt(n)  { const v=Number(n); return isNaN(v)?'0.00':v.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,','); }
function esc(s){ if(!s)return''; return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;'); }
function todayStr(){ return new Date().toLocaleDateString('he-IL',{year:'numeric',month:'2-digit',day:'2-digit'}); }
function isPreFilter(sku, item) {
  // מסנן קדם: לפי מק"ט ברשימה, או לפי שיוך לקטגוריה sg52 (מסנן קדם)
  return PRE_FILTER_SKUS.has(sku) || (item && item.subgroupId === 'sg52');
}

// ============================================================
//  CALCULATIONS
// ============================================================
function calcItemBase(item)  { const bp=(item.manualPrice!==''&&item.manualPrice!=null)?fmtNum(item.manualPrice):fmtNum(item.listPrice); return bp*fmtNum(item.qty)*(1-fmtNum(item.discountPct)/100); }
function calcItemExtras(item){ return (item.extras||[]).reduce((s,e)=>s+fmtNum(e.amount),0); }
function calcItemTotal(item) { return calcItemBase(item); }  // extras removed from UI
function calcGroupTotal(g)   { return g.items.reduce((s,i)=>s+calcItemTotal(i),0); }
function calcGrandTotal()    { return state.quote?state.quote.groups.reduce((s,g)=>s+calcGroupTotal(g),0):0; }
function calcFinalTotal()    { return calcGrandTotal()*(1-fmtNum(state.quote?.globalDiscountPct)/100); }

// ============================================================
//  HIERARCHY HELPERS
// ============================================================
function sgItems(sg) {
  const seen=new Set();
  return [...sg.skus.flatMap(sku=>state.catalog.filter(i=>i.sku===sku)),
          ...state.catalog.filter(i=>i.subgroupId===sg.id)]
    .filter(i=>{ if(seen.has(i.id))return false; seen.add(i.id); return true; });
}
function sgItemCount(sg){ return Math.max(sg.skus.reduce((n,sku)=>n+(state.catalog.filter(i=>i.sku===sku).length||1),0), sgItems(sg).length); }

function getCategoryOptions() {
  const opts=[];
  CATALOG_HIERARCHY.forEach(h=>h.subgroups.forEach(sg=>opts.push({groupId:h.id,groupLabel:`${h.icon} ${h.name}`,subgroupId:sg.id,subgroupLabel:sg.name})));
  return opts;
}
function buildCategorySelect(selGid,selSgid) {
  const grouped={};
  getCategoryOptions().forEach(o=>{ if(!grouped[o.groupId])grouped[o.groupId]={label:o.groupLabel,subs:[]}; grouped[o.groupId].subs.push(o); });
  return `<select id="fi-category" style="width:100%;padding:9px 12px;border:1.5px solid var(--border-dark);border-radius:var(--radius-sm);font-family:inherit;font-size:.9rem;outline:none;">
    <option value="">-- בחר קטגוריה --</option>
    ${Object.values(grouped).map(g=>`<optgroup label="${esc(g.label)}">${g.subs.map(sg=>`<option value="${sg.groupId}:::${sg.subgroupId}"${sg.groupId===selGid&&sg.subgroupId===selSgid?' selected':''}>${esc(sg.subgroupLabel)}</option>`).join('')}</optgroup>`).join('')}
  </select>`;
}
function addSkuToHierarchy(gid,sgid,sku){ const h=CATALOG_HIERARCHY.find(h=>h.id===gid); const sg=h?.subgroups.find(s=>s.id===sgid); if(sg&&!sg.skus.includes(sku))sg.skus.push(sku); }

// ============================================================
//  QUOTE MANAGEMENT
// ============================================================
function createNewQuote(silent) {
  const defaultGroup={id:'default',name:'',collapsed:false,items:[]};
  state.quote={id:Date.now(),createdAt:new Date().toISOString(),projectName:'',employeeName:'',groups:[defaultGroup],globalDiscountPct:0,discountReason:'',notes:''};
  saveQuote(); if(!silent){renderQuote(); showToast('הצעה חדשה נוצרה','success');}
}
function normalizeQuote(q) {
  if(!q)return;
  ['projectName','employeeName','notes'].forEach(k=>{if(!(k in q))q[k]='';});
  if(!('globalDiscountPct' in q))q.globalDiscountPct=0;
  if(!('discountReason' in q))q.discountReason='';
  if(!q.groups||!q.groups.length) q.groups=[{id:'default',name:'',collapsed:false,items:[]}];
  q.groups.forEach(g=>{g.items=g.items.map(migrateItem);});
}
function migrateItem(item) {
  if(item.installations&&Array.isArray(item.installations)){const f=item.installations[0]||{}; return {id:item.id||uid(),sku:item.sku||'',description:item.description||'',note:item.note||'',internalNote:item.internalNote||'',installInfo:[f.installNum,f.roomName].filter(Boolean).join(' / '),qty:f.qty||1,listPrice:f.listPrice||0,manualPrice:f.manualPrice||'',discountPct:f.discountPct||0,extras:[]};}
  if(!item.extras)         item.extras=[];
  if(!('installInfo'    in item)) item.installInfo='';
  if(!('internalNote'   in item)) item.internalNote='';
  return item;
}
function clearQuote(){ if(!confirm('האם למחוק את כל הטיוטה?'))return; pushUndo(); createNewQuote(); renderQuote(); }

// ============================================================
//  QUOTE HEADER INPUTS
// ============================================================
function onProjectNameInput(v) { state.quote.projectName=v; saveQuote(); }
function onEmployeeNameInput(v){ state.quote.employeeName=v; saveQuote(); }
function onGlobalDiscountInput(v){ state.quote.globalDiscountPct=parseFloat(v)||0; saveQuote(); refreshPriceDisplays(); }
function onDiscountReasonInput(v){ state.quote.discountReason=v; saveQuote(); }
function onQuoteNotesInput(v){ state.quote.notes=v; saveQuote(); }

// ============================================================
//  FILE SAVE / LOAD (quote JSON)
// ============================================================
function saveQuoteToFile() {
  if(!state.quote)return showToast('אין הצעה','warning');
  const blob=new Blob([JSON.stringify({version:2,quote:state.quote,savedAt:new Date().toISOString()},null,2)],{type:'application/json;charset=utf-8'});
  const url=URL.createObjectURL(blob);
  const proj=state.quote.projectName||'הצעה';
  const a=Object.assign(document.createElement('a'),{href:url,download:`${proj}_${todayStr().replace(/\//g,'-')}.json`});
  document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(url);
  showToast('✅ הקובץ נשמר','success');
}
function triggerLoadFromFile(){ document.getElementById('quote-load-input').click(); }
function loadQuoteFromFile(event){
  const file=event.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    try{
      const data=JSON.parse(e.target.result);
      const q=data.quote||data;
      if(!q.groups)return showToast('קובץ לא תקין','error');
      if(!confirm('לטעון? הנתונים הנוכחיים יוחלפו.'))return;
      state.quote=q; normalizeQuote(state.quote); saveQuote(); renderQuote();
      showToast('✅ הקובץ נטען','success');
    }catch(e){showToast('שגיאה','error');}
  };
  reader.readAsText(file,'utf-8'); event.target.value='';
}

// ============================================================
//  FULL BACKUP EXPORT
// ============================================================
// ============================================================
//  CATALOG VIEW STATE
// ============================================================
function setCatalogView(v){ catalogView=v; document.getElementById('cv-table')?.classList.toggle('active',v==='table'); document.getElementById('cv-gallery')?.classList.toggle('active',v==='gallery'); renderCatalogTable(); }
function setCatalogFilter(val){ catalogFilter=val; renderCatalogTable(); }

// ============================================================
//  CATALOG SCREEN
// ============================================================
function renderCatalogTable() {
  const q=(document.getElementById('catalog-search')?.value||'').toLowerCase();
  let filterIds=null;
  if(catalogFilter){const[fgid,fsgid]=catalogFilter.split(':::');const sg=CATALOG_HIERARCHY.find(h=>h.id===fgid)?.subgroups.find(s=>s.id===fsgid);filterIds=new Set(sg?sgItems(sg).map(i=>i.id):[]);}
  const filtered=state.catalog.filter(i=>{
    if(filterIds&&!filterIds.has(i.id))return false;
    return !q||i.sku.toLowerCase().includes(q)||i.description.toLowerCase().includes(q)||(i.catalogNote||'').toLowerCase().includes(q)||(i.esvfSkus||'').toLowerCase().includes(q);
  });
  document.getElementById('catalog-count').textContent=`${state.catalog.length} פריטים במאגר`+(filtered.length<state.catalog.length?` (${filtered.length} תוצאות)`:'');
  // rebuild filter dropdown
  const el=document.getElementById('catalog-cat-filter');
  if(el){const grouped={};getCategoryOptions().forEach(o=>{if(!grouped[o.groupId])grouped[o.groupId]={label:o.groupLabel,subs:[]};grouped[o.groupId].subs.push(o);});el.innerHTML='<option value="">כל הקטגוריות</option>'+Object.values(grouped).map(g=>`<optgroup label="${esc(g.label)}">${g.subs.map(sg=>`<option value="${sg.groupId}:::${sg.subgroupId}"${catalogFilter===sg.groupId+':::'+sg.subgroupId?' selected':''}>${esc(sg.subgroupLabel)}</option>`).join('')}</optgroup>`).join('');}
  const cvt=document.getElementById('cv-table'),cvg=document.getElementById('cv-gallery');
  if(cvt)cvt.classList.toggle('active',catalogView==='table');if(cvg)cvg.classList.toggle('active',catalogView==='gallery');
  const container=document.getElementById('catalog-table-container');
  if(!filtered.length){container.innerHTML='<div class="empty-state"><div class="es-icon">📦</div><div class="es-title">לא נמצאו פריטים</div></div>';return;}
  if(catalogView==='gallery'){
    const wi=filtered.filter(i=>loadItemImage(i.id));
    if(!wi.length){container.innerHTML='<div class="empty-state"><div class="es-icon">🖼️</div><div class="es-title">אין פריטים עם תמונות</div></div>';return;}
    let ghtml='<div class="catalog-gallery">';
    wi.forEach(item=>{
      const img=loadItemImage(item.id);
      ghtml+='<div class="gallery-card" onclick="openGalleryItemModal(\''+item.id+'\')">'
        +'<div class="gallery-img-wrap"><img src="'+img+'" style="width:100%;height:100%;object-fit:contain;display:block"></div>'
        +'<div class="gallery-info">'
          +'<span class="sku-badge" style="font-size:.68rem">'+item.sku+'</span>'
          +'<div class="gallery-desc" style="font-size:.74rem;line-height:1.25;margin-top:2px">'+item.description+'</div>'
        +'</div>'
      +'</div>';
    });
    ghtml+='</div>';
    container.innerHTML=ghtml;
    return;
  }

  // Table — rows clickable on mobile, inline buttons on desktop
  let thtml='<div class="data-table-wrap"><table class="data-table catalog-table"><thead><tr>'
    +'<th style="width:32px"><input type="checkbox" id="select-all-cb" onchange="toggleSelectAll(this.checked)" title="סמן הכל"></th>'
    +'<th style="width:62px">תמונה</th><th>מק"ט</th><th>תיאור</th><th>מחיר</th><th class="desktop-only" style="width:76px">פעולות</th>'
    +'</tr></thead><tbody>';
  filtered.forEach(item=>{
    const thumb=imgThumb(item.id,52)||'<span style="color:#cbd5e1;font-size:1.2rem">—</span>';
    const checked=selectedItems.has(item.id)?'checked':'';
    const selClass=selectedItems.has(item.id)?' row-selected':'';
    thtml+='<tr class="catalog-row'+selClass+'">'
      +'<td onclick="event.stopPropagation()" style="text-align:center;vertical-align:middle">'
        +'<input type="checkbox" class="item-cb" '+checked+' onchange="toggleItemSelect(\''+item.id+'\',this.checked)" style="width:16px;height:16px;cursor:pointer;accent-color:#1e3a8a">'
      +'</td>'
      +'<td style="text-align:center;vertical-align:middle;cursor:pointer" onclick="openItemDetailModal(\''+item.id+'\')">'+thumb+'</td>'
      +'<td style="cursor:pointer" onclick="openItemDetailModal(\''+item.id+'\')"><span class="sku-badge">'+item.sku+'</span></td>'
      +'<td style="cursor:pointer" onclick="openItemDetailModal(\''+item.id+'\')">'
        +'<div style="font-weight:600;font-size:.88rem">'+item.description+'</div>'
        +(item.catalogNote?'<div style="color:var(--text-muted);font-size:.78rem;margin-top:2px">'+item.catalogNote+'</div>':'')
        +'<div class="mobile-price" style="color:#1e3a8a;font-size:.8rem;margin-top:3px;direction:ltr;display:inline-block">'+fmtPrice(item.listPrice)+'</div>'
      +'</td>'
      +'<td style="cursor:pointer" onclick="openItemDetailModal(\''+item.id+'\')"><span class="price-ltr">'+fmtPrice(item.listPrice)+'</span></td>'
      +'<td class="desktop-only" style="vertical-align:middle" onclick="event.stopPropagation()">'
        +'<div style="display:flex;flex-direction:column;gap:4px;align-items:center">'
          +'<button class="btn btn-outline" onclick="openCatalogEditItemModal(\''+item.id+'\')" style="width:32px;height:32px;padding:0;display:flex;align-items:center;justify-content:center">✏️</button>'
          +'<button class="btn btn-danger"  onclick="deleteCatalogItem(\''+item.id+'\')"       style="width:32px;height:32px;padding:0;display:flex;align-items:center;justify-content:center">🗑</button>'
        +'</div>'
      +'</td>'
    +'</tr>';
  });
  thtml+='</tbody></table></div>';
  container.innerHTML=thtml;
  _updateSelectionBar();
  // update select-all checkbox state
  const allCb=document.getElementById('select-all-cb');
  if(allCb) allCb.checked=filtered.length>0&&filtered.every(i=>selectedItems.has(i.id));
}

function toggleSelectAll(checked){
  const q=(document.getElementById('catalog-search')?.value||'').toLowerCase();
  state.catalog.filter(i=>!q||i.sku.toLowerCase().includes(q)||i.description.toLowerCase().includes(q))
    .forEach(i=>{ if(checked) selectedItems.add(i.id); else selectedItems.delete(i.id); });
  renderCatalogTable();
}


// ── Shared item detail modal (table + gallery) ───────────────
function openItemDetailModal(id) {
  const item = state.catalog.find(i=>i.id===id); if(!item) return;
  const img  = loadItemImage(id);
  openModal(item.description, `
    ${img ? `<div style="width:100%;max-height:50vh;background:#f1f5f9;border-radius:var(--radius);overflow:hidden;margin-bottom:14px;display:flex;align-items:center;justify-content:center;">
      <img src="${img}" style="max-width:100%;max-height:50vh;object-fit:contain;display:block;padding:8px">
    </div>` : ''}
    <div style="margin-bottom:14px">
      <span class="sku-badge" style="font-size:.88rem">${esc(item.sku)}</span>
      ${item.catalogNote?`<div style="font-size:.87rem;color:var(--text-muted);margin-top:7px">${esc(item.catalogNote)}</div>`:''}
      ${item.esvfSkus?`<div style="font-size:.82rem;color:#2563eb;margin-top:5px">ESVF: ${esc(item.esvfSkus)}</div>`:''}
      <div style="font-size:1.1rem;font-weight:700;color:#1e3a8a;margin-top:8px;direction:ltr;text-align:right">${fmtPrice(item.listPrice)}</div>
    </div>
    <div class="modal-actions">
      <button class="btn btn-primary" onclick="closeModal();requireCatalogAuth(()=>_openCatalogEditItemModal('${esc(id)}'))">✏️ עריכה</button>
      <button class="btn btn-danger"  onclick="closeModal();deleteCatalogItem('${esc(id)}')">🗑 מחיקה</button>
      <button class="btn btn-outline" onclick="closeModal()">סגור</button>
    </div>`);
}

// ============================================================
//  CATALOG ITEM MODALS
// ============================================================
function openCatalogNewItemModal()  { requireCatalogAuth(_openCatalogNewItemModal); }
function openCatalogEditItemModal(id){ requireCatalogAuth(()=>_openCatalogEditItemModal(id)); }
function deleteCatalogItem(id)       { requireCatalogAuth(()=>_deleteCatalogItem(id)); }
function triggerCatalogImport()      { requireCatalogAuth(()=>document.getElementById('catalog-import-input').click()); }

function openGalleryItemModal(id) { openItemDetailModal(id); }

function _openCatalogNewItemModal() {
  openModal('הוספת פריט חדש',`
    <div class="form-group"><label>מק"ט</label><input type="text" id="fi-sku" placeholder="B55070" oninput="toggleEsvfField(this.value)"></div>
    <div class="form-group"><label>תיאור</label><input type="text" id="fi-desc" placeholder="תיאור הפריט"></div>
    <div class="form-group"><label>מחיר מחירון (₪)</label><input type="number" id="fi-price" placeholder="0.00" min="0" step="0.01"></div>
    <div class="form-group"><label>קטגוריה</label>${buildCategorySelect('','')}</div>
    <div class="form-group"><label>הערת מוצר</label><textarea id="fi-note" rows="2" style="width:100%;padding:8px;border:1.5px solid var(--border-dark);border-radius:var(--radius-sm);font-family:inherit;font-size:.88rem;resize:vertical;outline:none;"></textarea></div>
    <div class="form-group" id="fi-esvf-group" style="display:none"><label>שסתומי ESVF מתאימים</label><input type="text" id="fi-esvf" placeholder="B02646-02, B02720-01"></div>
    <div class="form-group"><label>תמונת מוצר</label>
      <div class="img-paste-zone" id="fi-img-preview" tabindex="0" onclick="document.getElementById('fi-img-file').click()" onpaste="handleImagePaste(event,'new')" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="handleImageDrop(event,'new')">
        <div class="paste-zone-hint" id="fi-paste-hint"><span class="paste-zone-icon">🖼️</span><span>לחץ לבחירת קובץ, גרור, או <kbd>Ctrl+V</kbd></span></div>
      </div>
      <input type="file" id="fi-img-file" accept="image/*" style="display:none" onchange="handleImageFile(this,'new')">
    </div>
    <div class="modal-actions"><button class="btn btn-primary" onclick="saveCatalogNewItem()">💾 שמור</button><button class="btn btn-outline" onclick="closeModal()">ביטול</button></div>`);
  setTimeout(()=>document.getElementById('fi-sku')?.focus(),50);
}

function toggleEsvfField(sku){ const g=document.getElementById('fi-esvf-group'); if(g)g.style.display=isPreFilter(sku.trim())?'':'none'; }

function saveCatalogNewItem() {
  const sku=(document.getElementById('fi-sku').value||'').trim();
  const desc=(document.getElementById('fi-desc').value||'').trim();
  const price=parseFloat(document.getElementById('fi-price').value);
  const note=(document.getElementById('fi-note')?.value||'').trim();
  const esvf=(document.getElementById('fi-esvf')?.value||'').trim();
  const catVal=(document.getElementById('fi-category')?.value||'');
  if(!sku)return showToast('נדרש מק"ט','error');
  if(!desc)return showToast('נדרש תיאור','error');
  if(isNaN(price))return showToast('נדרש מחיר','error');
  if(!catVal)return showToast('נדרש לבחור קטגוריה','error');
  const[gid,sgid]=catVal.split(':::');
  const newId=uid();
  state.catalog.push({id:newId,sku,description:desc,listPrice:price,catalogNote:note,esvfSkus:esvf,hasImage:false,groupId:gid,subgroupId:sgid});
  addSkuToHierarchy(gid,sgid,sku);
  if(window._pendingItemImage){saveItemImage(newId,window._pendingItemImage);state.catalog[state.catalog.length-1].hasImage=true;window._pendingItemImage=null;}
  saveCatalog();renderCatalogTable();closeModal();showToast('✅ הפריט נוסף','success');
}

function _openCatalogEditItemModal(id) {
  const item=state.catalog.find(i=>i.id===id);if(!item)return;
  const imgData=loadItemImage(id);
  window._pendingItemImage=null;window._editItemId=id;
  openModal('עריכת פריט',`
    <div class="form-group"><label>מק"ט</label><input type="text" value="${esc(item.sku)}" readonly></div>
    <div class="form-group"><label>תיאור</label><input type="text" id="fi-desc" value="${esc(item.description)}"></div>
    <div class="form-group"><label>מחיר מחירון (₪)</label><input type="number" id="fi-price" value="${item.listPrice}" min="0" step="0.01"></div>
    <div class="form-group"><label>קטגוריה</label>${buildCategorySelect(item.groupId||'',item.subgroupId||'')}</div>
    <div class="form-group"><label>הערת מוצר</label><textarea id="fi-note" rows="2" style="width:100%;padding:8px;border:1.5px solid var(--border-dark);border-radius:var(--radius-sm);font-family:inherit;font-size:.88rem;resize:vertical;outline:none;">${esc(item.catalogNote||'')}</textarea></div>
    ${isPreFilter(item.sku, item)?`<div class="form-group"><label>שסתומי ESVF מתאימים</label><input type="text" id="fi-esvf" value="${esc(item.esvfSkus||'')}" placeholder="B02646-02, B02720-01"></div>`:'<input type="hidden" id="fi-esvf" value="">'}
    <div class="form-group"><label>תמונת מוצר</label>
      <div class="img-paste-zone" id="fi-img-preview" tabindex="0" onclick="document.getElementById('fi-img-file').click()" onpaste="handleImagePasteEdit(event,'${id}')" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="handleImageDropEdit(event,'${id}')">
        ${imgData?`<img class="paste-preview" src="${imgData}" id="fi-img-cur"><div class="paste-zone-hint" id="fi-paste-hint" style="display:none">`:'<div class="paste-zone-hint" id="fi-paste-hint">'}
        <span class="paste-zone-icon">🖼️</span><span>לחץ, גרור, או <kbd>Ctrl+V</kbd></span></div>
      </div>
      ${imgData?`<button id="fi-remove-btn" class="btn btn-danger btn-sm" style="margin-top:6px" onclick="removeEditItemImage('${id}')">🗑 הסר תמונה</button>`:''}
      <input type="file" id="fi-img-file" accept="image/*" style="display:none" onchange="handleImageFileEdit(this,'${id}')">
    </div>
    <div class="modal-actions"><button class="btn btn-primary" onclick="saveCatalogEditItem('${esc(id)}')">💾 שמור</button><button class="btn btn-outline" onclick="closeModal()">ביטול</button></div>`);
  setTimeout(()=>document.getElementById('fi-desc')?.focus(),50);
}

function saveCatalogEditItem(id) {
  const item=state.catalog.find(i=>i.id===id);if(!item)return;
  const desc=(document.getElementById('fi-desc').value||'').trim();
  const price=parseFloat(document.getElementById('fi-price').value);
  const note=(document.getElementById('fi-note')?.value||'').trim();
  const esvf=(document.getElementById('fi-esvf')?.value||'').trim();
  const catVal=(document.getElementById('fi-category')?.value||'');
  if(!desc)return showToast('נדרש תיאור','error');
  if(isNaN(price))return showToast('נדרש מחיר','error');
  item.description=desc;item.listPrice=price;item.catalogNote=note;item.esvfSkus=esvf;
  if(catVal){const[gid,sgid]=catVal.split(':::');item.groupId=gid;item.subgroupId=sgid;addSkuToHierarchy(gid,sgid,item.sku);}
  if(window._pendingItemImage&&window._pendingItemImage!=='__remove__'){saveItemImage(id,window._pendingItemImage);item.hasImage=true;}
  else if(window._pendingItemImage==='__remove__'){deleteItemImage(id);item.hasImage=false;}
  window._pendingItemImage=null;
  saveCatalog();renderCatalogTable();closeModal();showToast('✅ הפריט עודכן','success');
}

function _deleteCatalogItem(id) {
  const item=state.catalog.find(i=>i.id===id);if(!item)return;
  if(!confirm(`האם למחוק פריט "${item.sku}"?`))return;
  deleteItemImage(id);
  state.catalog=state.catalog.filter(i=>i.id!==id);
  saveCatalog();renderCatalogTable();showToast('הפריט נמחק','success');
}

// Excel catalog export/import
// ── Item selection ────────────────────────────────────────────
function toggleItemSelect(id, checked) {
  if (checked) selectedItems.add(id);
  else         selectedItems.delete(id);
  _updateSelectionBar();
}

function clearSelection() {
  selectedItems.clear();
  _updateSelectionBar();
  renderCatalogTable();
}

function _updateSelectionBar() {
  const bar   = document.getElementById('selection-bar');
  const count = document.getElementById('selection-count');
  if (!bar) return;
  if (selectedItems.size === 0) {
    bar.classList.add('hidden');
  } else {
    bar.classList.remove('hidden');
    count.textContent = `${selectedItems.size} פריטים מסומנים`;
  }
}

function copySelectedToClipboard() {
  if (!selectedItems.size) return showToast('לא נבחרו פריטים','warning');
  const lines = [...selectedItems].map(id => {
    const item = state.catalog.find(i => i.id === id);
    if (!item) return null;
    return `${item.sku} - ${item.description} - ${fmtPrice(item.listPrice)}`;
  }).filter(Boolean);
  const text = lines.join('\n');
  navigator.clipboard.writeText(text)
    .then(()=>showToast(`✅ ${lines.length} פריטים הועתקו`,'success'))
    .catch(()=>{
      // fallback for older browsers
      const ta=document.createElement('textarea');
      ta.value=text; document.body.appendChild(ta);
      ta.select(); document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(`✅ ${lines.length} פריטים הועתקו`,'success');
    });
}


function _loadScript(url) {
  return new Promise((res, rej) => {
    if (document.querySelector(`script[src="${url}"]`)) return res();
    const s = document.createElement('script');
    s.src = url; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}
async function _requireXLSX() {
  if (typeof XLSX === 'undefined')
    await _loadScript('https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js');
}
async function _requirePDF() {
  if (typeof html2pdf === 'undefined')
    await _loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js');
}

function exportCatalogToExcel(){ _requireXLSX().then(_doExportCatalogToExcel); }
function _doExportCatalogToExcel(){
  // כותרות — כל השדות
  const headers=['מק"ט','תיאור','מחיר מחירון','הערת מוצר','שסתומי ESVF מתאימים','קטגוריה (groupId)','תת-קטגוריה (subgroupId)'];
  const rows=[
    headers,
    // שורת הסבר (אפורה) — לא תיובא
    ['# לא לערוך עמודות F-G ידנית — ערכים אוטומטיים','','','','','',''],
    ...state.catalog.map(i=>[
      i.sku,
      i.description,
      i.listPrice,
      i.catalogNote||'',
      i.esvfSkus||'',
      i.groupId||'',
      i.subgroupId||''
    ])
  ];

  const ws=XLSX.utils.aoa_to_sheet(rows);
  ws['!cols']=[{wch:14},{wch:54},{wch:13},{wch:34},{wch:26},{wch:10},{wch:12}];

  // צבע כותרות (דורש xlsxStyle — אם לא זמין, פשוט מדלגים)
  try {
    const hdrStyle={font:{bold:true,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'1E3A8A'}}};
    for(let c=0;c<headers.length;c++){
      const addr=XLSX.utils.encode_cell({r:0,c});
      if(ws[addr]) ws[addr].s=hdrStyle;
    }
  } catch(e){}

  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'מאגר פריטים');
  XLSX.writeFile(wb,'מאגר_פריטים.xlsx');
  showToast('✅ יוצא — '+state.catalog.length+' פריטים','success');
}

function importCatalogFromExcel(event){ _requireXLSX().then(()=>_doImportCatalog(event)); }
function _doImportCatalog(event){
  const file=event.target.files[0]; if(!file) return;
  const reader=new FileReader();
  reader.onload=e=>{
    try {
      const wb  =XLSX.read(new Uint8Array(e.target.result),{type:'array'});
      const ws  =wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(ws,{header:1,defval:''});

      // דלג על שורת כותרות + שורת הסבר (אם יש)
      const dataRows=rows.slice(1).filter(r=>{
        const sku=String(r[0]||'').trim();
        return sku && !sku.startsWith('#');
      });

      if(!dataRows.length) return showToast('לא נמצאו פריטים','error');

      // שמור תמונות קיימות לפי מק"ט (כדי לא לאבד אותן בייבוא)
      const imgBySku={};
      state.catalog.forEach(i=>{ if(imageCache[i.id]) imgBySku[i.sku]=imageCache[i.id]; });

      const data=dataRows.map(r=>{
        const sku=String(r[0]).trim();
        const newId=uid();
        const item={
          id:        newId,
          sku:       sku,
          description: String(r[1]||'').trim(),
          listPrice:   parseFloat(r[2])||0,
          catalogNote: String(r[3]||'').trim(),
          esvfSkus:    String(r[4]||'').trim(),
          groupId:     String(r[5]||'').trim(),
          subgroupId:  String(r[6]||'').trim(),
          hasImage:    false
        };
        // שחזר תמונה לפי מק"ט אם קיימת
        if(imgBySku[sku]){
          imageCache[newId]=imgBySku[sku];
          item.hasImage=true;
        }
        return item;
      });

      if(!confirm(`ייבוא ${data.length} פריטים?\nהמאגר הנוכחי יוחלף.\n(תמונות קיימות ישמרו לפי מק"ט)`)) return;

      // עדכן CATALOG_HIERARCHY עם מק"טים חדשים לפי subgroupId
      data.forEach(item=>{
        if(item.groupId && item.subgroupId)
          addSkuToHierarchy(item.groupId, item.subgroupId, item.sku);
      });

      state.catalog=data;
      saveCatalog();
      renderCatalogTable();
      showToast(`✅ ${data.length} פריטים יובאו`,'success');
    } catch(ex){ showToast('שגיאה בקריאת הקובץ: '+ex.message,'error'); }
  };
  reader.readAsArrayBuffer(file);
  event.target.value='';
}

// ============================================================
//  IMAGE PASTE/DROP HELPERS
// ============================================================
function _setPreviewDataUrl(dataUrl,mode){
  window._pendingItemImage=dataUrl;
  const zone=document.getElementById('fi-img-preview');if(!zone)return;
  zone.querySelectorAll('img.paste-preview').forEach(el=>el.remove());
  const hint=document.getElementById('fi-paste-hint');if(hint)hint.style.display='none';
  const img=document.createElement('img');img.className='paste-preview';img.src=dataUrl;zone.appendChild(img);
  zone.classList.remove('drag-over');
  if(!document.getElementById('fi-remove-btn')){const btn=document.createElement('button');btn.id='fi-remove-btn';btn.className='btn btn-danger btn-sm';btn.style.cssText='margin-top:6px;';btn.textContent='🗑 הסר תמונה';btn.onclick=e=>{e.stopPropagation();clearPasteZone();};zone.parentElement.appendChild(btn);}
}
function clearPasteZone(){window._pendingItemImage=null;const zone=document.getElementById('fi-img-preview');if(!zone)return;zone.querySelectorAll('img.paste-preview').forEach(el=>el.remove());const hint=document.getElementById('fi-paste-hint');if(hint)hint.style.display='';document.getElementById('fi-remove-btn')?.remove();}
function handleImageFile(input,mode){const file=input.files[0];if(!file)return;const r=new FileReader();r.onload=e=>_setPreviewDataUrl(e.target.result,mode);r.readAsDataURL(file);}
function handleImagePaste(event,mode){const i=[...(event.clipboardData?.items||[])].find(it=>it.type.startsWith('image/'));if(!i)return;event.preventDefault();const r=new FileReader();r.onload=e=>_setPreviewDataUrl(e.target.result,mode);r.readAsDataURL(i.getAsFile());showToast('התמונה הודבקה ✓','success');}
function handleImageDrop(event,mode){event.preventDefault();const f=[...event.dataTransfer.files].find(f=>f.type.startsWith('image/'));if(!f)return;const r=new FileReader();r.onload=e=>_setPreviewDataUrl(e.target.result,mode);r.readAsDataURL(f);}

function _setEditPreviewDataUrl(dataUrl){window._pendingItemImage=dataUrl;const zone=document.getElementById('fi-img-preview');if(!zone)return;let img=zone.querySelector('img.paste-preview');if(!img){img=document.createElement('img');img.className='paste-preview';img.id='fi-img-cur';zone.insertBefore(img,zone.firstChild);}img.src=dataUrl;const hint=document.getElementById('fi-paste-hint');if(hint)hint.style.display='none';zone.classList.remove('drag-over');if(!document.getElementById('fi-remove-btn')){const btn=document.createElement('button');btn.id='fi-remove-btn';btn.className='btn btn-danger btn-sm';btn.style.cssText='margin-top:6px;';btn.textContent='🗑 הסר תמונה';btn.setAttribute('onclick',`removeEditItemImage('${window._editItemId||''}')`);zone.parentElement.appendChild(btn);}}
function handleImageFileEdit(input,itemId){window._editItemId=itemId;const f=input.files[0];if(!f)return;const r=new FileReader();r.onload=e=>_setEditPreviewDataUrl(e.target.result);r.readAsDataURL(f);}
function handleImagePasteEdit(event,itemId){window._editItemId=itemId;const i=[...(event.clipboardData?.items||[])].find(it=>it.type.startsWith('image/'));if(!i)return;event.preventDefault();const r=new FileReader();r.onload=e=>_setEditPreviewDataUrl(e.target.result);r.readAsDataURL(i.getAsFile());showToast('התמונה הודבקה ✓','success');}
function handleImageDropEdit(event,itemId){event.preventDefault();window._editItemId=itemId;const f=[...event.dataTransfer.files].find(f=>f.type.startsWith('image/'));if(!f)return;const r=new FileReader();r.onload=e=>_setEditPreviewDataUrl(e.target.result);r.readAsDataURL(f);}
function removeEditItemImage(itemId){deleteItemImage(itemId);const item=state.catalog.find(i=>i.id===itemId);if(item){item.hasImage=false;saveCatalog();}window._pendingItemImage='__remove__';document.getElementById('fi-img-cur')?.remove();showToast('התמונה הוסרה','success');}

// ============================================================
//  ITEM PICKER
// ============================================================
function openItemPickerModal(groupId){pickerCtx={targetGroupId:groupId,selGroupId:null,selSubgroupId:null,search:''};openModal('הוסף סעיף',buildPickerHTML());setTimeout(()=>document.getElementById('picker-search')?.focus(),50);}

function buildPickerHTML(){
  const{search,selGroupId,selSubgroupId}=pickerCtx;const q=search.toLowerCase();let itemsHTML='';
  if(q){const m=state.catalog.filter(i=>i.sku.toLowerCase().includes(q)||i.description.toLowerCase().includes(q)||(i.esvfSkus||'').toLowerCase().includes(q)||(i.catalogNote||'').toLowerCase().includes(q));itemsHTML=m.length?m.map(catItemRow).join(''):'<div class="catalog-no-results">לא נמצאו תוצאות</div>';}
  else if(selGroupId&&selSubgroupId){const sg=CATALOG_HIERARCHY.find(h=>h.id===selGroupId)?.subgroups.find(s=>s.id===selSubgroupId);const items=sg?sgItems(sg):[];itemsHTML=items.length?items.map(catItemRow).join(''):'<div class="catalog-no-results">אין פריטים</div>';}
  else if(selGroupId){const hier=CATALOG_HIERARCHY.find(h=>h.id===selGroupId);itemsHTML='<div style="padding:6px 0 10px;color:var(--text-muted);font-size:.87rem">בחר תת-קטגוריה:</div><div class="subgroup-grid">'+hier.subgroups.map(sg=>`<div class="subgroup-card" onclick="pickerSelectSubgroup('${sg.id}')"><span>${esc(sg.name)}</span><small>${sgItemCount(sg)} פריטים</small></div>`).join('')+'</div>';}
  else{itemsHTML='<div style="padding:6px 0 10px;color:var(--text-muted);font-size:.87rem">בחר קטגוריה:</div><div class="group-picker-grid">'+CATALOG_HIERARCHY.map(h=>`<div class="group-picker-card" onclick="pickerSelectGroup('${h.id}')"><div class="gpc-icon">${h.icon}</div><div class="gpc-name">${esc(h.name)}</div><div class="gpc-count">${h.subgroups.reduce((s,sg)=>s+sgItemCount(sg),0)} פריטים</div></div>`).join('')+'</div>';}
  let bc=`<span class="bc-clickable" onclick="pickerReset()">📁 כל הקטגוריות</span>`;
  if(selGroupId){const h=CATALOG_HIERARCHY.find(h=>h.id===selGroupId);bc+=` <span class="bc-sep">›</span> <span class="bc-clickable" onclick="pickerSelectGroup('${selGroupId}')">${h.icon} ${esc(h.name)}</span>`;}
  if(selSubgroupId){const h=CATALOG_HIERARCHY.find(h=>h.id===selGroupId);const sg=h?.subgroups.find(s=>s.id===selSubgroupId);bc+=` <span class="bc-sep">›</span> <span>${esc(sg?.name)}</span>`;}
  return `<input type="text" class="modal-catalog-search" id="picker-search" placeholder="🔍 חפש מק&quot;ט, תיאור, ESVF..." value="${esc(search)}" oninput="pickerSearchInput(this.value)">${!q?`<div class="picker-breadcrumb">${bc}</div>`:''}<div class="catalog-list" id="picker-items">${itemsHTML}</div><div class="modal-actions" style="margin-top:10px"><button class="btn btn-outline" onclick="closeModal()">ביטול</button></div>`;
}
function catItemRow(item){const thumb=imgThumb(item.id,44);const esvfB=item.esvfSkus?`<span style="font-size:.72rem;color:#2563eb;background:#dbeafe;padding:1px 5px;border-radius:3px;margin-right:4px">ESVF: ${esc(item.esvfSkus)}</span>`:'';return `<div class="catalog-item-row" onclick="pickerSelectItem('${esc(item.id)}')">${thumb}<div style="flex:1;min-width:0"><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap"><span class="sku-badge">${esc(item.sku)}</span><span class="catalog-item-desc">${esc(item.description)}</span></div>${item.catalogNote||item.esvfSkus?`<div style="margin-top:2px">${esvfB}${item.catalogNote?`<span style="font-size:.76rem;color:var(--text-muted)">${esc(item.catalogNote)}</span>`:''}</div>`:''}</div><span class="catalog-item-price">${fmtPrice(item.listPrice)}</span></div>`;}
function pickerSearchInput(val){pickerCtx.search=val;document.getElementById('modal-body').innerHTML=buildPickerHTML();const el=document.getElementById('picker-search');if(el){el.focus();el.value=val;el.setSelectionRange(val.length,val.length);}}
function pickerReset(){pickerCtx.selGroupId=null;pickerCtx.selSubgroupId=null;document.getElementById('modal-body').innerHTML=buildPickerHTML();}
function pickerSelectGroup(id){pickerCtx.selGroupId=id;pickerCtx.selSubgroupId=null;document.getElementById('modal-body').innerHTML=buildPickerHTML();}
function pickerSelectSubgroup(id){pickerCtx.selSubgroupId=id;document.getElementById('modal-body').innerHTML=buildPickerHTML();}
function pickerSelectItem(catalogId){const cat=state.catalog.find(i=>i.id===catalogId);const grp=state.quote.groups.find(g=>g.id===pickerCtx.targetGroupId);if(!cat||!grp)return;grp.items.push({id:uid(),sku:cat.sku,description:cat.description,note:'',internalNote:'',installInfo:'',qty:1,listPrice:cat.listPrice,manualPrice:'',discountPct:0,extras:[]});saveQuote();closeModal();renderQuote();showToast('הסעיף נוסף','success');}

// ============================================================
//  GROUPS
// ============================================================
function addGroup(){openModal('הוספת קבוצה',`<div class="form-group"><label>שם הקבוצה</label><input type="text" id="gname-input" placeholder="קומה א, מגדל מזרחי..."></div><div class="modal-actions"><button class="btn btn-primary" onclick="confirmAddGroup()">הוסף</button><button class="btn btn-outline" onclick="closeModal()">ביטול</button></div>`);setTimeout(()=>document.getElementById('gname-input')?.focus(),50);}
function confirmAddGroup(){const name=document.getElementById('gname-input').value.trim();if(!name)return showToast('נדרש שם','error');state.quote.groups.push({id:uid(),name,collapsed:false,items:[]});saveQuote();closeModal();renderQuote();}
function renameGroup(gid){const g=state.quote.groups.find(g=>g.id===gid);if(!g)return;openModal('שינוי שם',`<div class="form-group"><label>שם חדש</label><input type="text" id="gname-input" value="${esc(g.name)}"></div><div class="modal-actions"><button class="btn btn-primary" onclick="confirmRenameGroup('${gid}')">שמור</button><button class="btn btn-outline" onclick="closeModal()">ביטול</button></div>`);setTimeout(()=>{const el=document.getElementById('gname-input');if(el){el.focus();el.select();}},50);}
function confirmRenameGroup(gid){const g=state.quote.groups.find(g=>g.id===gid);const name=document.getElementById('gname-input').value.trim();if(!name)return showToast('נדרש שם','error');if(g)g.name=name;saveQuote();closeModal();renderQuote();}
function deleteGroup(gid){const g=state.quote.groups.find(g=>g.id===gid);if(!g)return;if(!confirm(`למחוק קבוצה "${g.name}"?`))return;pushUndo();state.quote.groups=state.quote.groups.filter(g=>g.id!==gid);saveQuote();renderQuote();showToast('נמחק','success');}
function toggleGroup(gid){const g=state.quote.groups.find(g=>g.id===gid);if(!g)return;g.collapsed=!g.collapsed;document.getElementById('gbody-'+gid)?.classList.toggle('collapsed',g.collapsed);const btn=document.getElementById('gtoggle-'+gid);if(btn)btn.textContent=g.collapsed?'▶':'▼';saveQuote();}

// ============================================================
//  ITEMS
// ============================================================
function deleteQuoteItem(gid,iid){if(!confirm('למחוק סעיף זה?'))return;pushUndo();const grp=state.quote.groups.find(g=>g.id===gid);if(!grp)return;grp.items=grp.items.filter(i=>i.id!==iid);saveQuote();renderQuote();}
function duplicateItem(gid,iid){const grp=state.quote.groups.find(g=>g.id===gid);const item=grp?.items.find(i=>i.id===iid);if(!item)return;const dup=JSON.parse(JSON.stringify(item));dup.id=uid();dup.extras=dup.extras.map(e=>({...e,id:uid()}));grp.items.splice(grp.items.indexOf(item)+1,0,dup);saveQuote();renderQuote();showToast('שוכפל','success');}
function transferItem(gid,iid){const others=state.quote.groups.filter(g=>g.id!==gid);if(!others.length)return showToast('אין קבוצות אחרות','warning');openModal('העברת סעיף',`<div class="form-group"><label>קבוצת יעד</label><select id="transfer-target">${others.map(g=>`<option value="${g.id}">${esc(g.name)}</option>`).join('')}</select></div><div class="modal-actions"><button class="btn btn-primary" onclick="doTransferItem('${gid}','${iid}')">העבר</button><button class="btn btn-outline" onclick="closeModal()">ביטול</button></div>`);}
function doTransferItem(fid,iid){const tid=document.getElementById('transfer-target').value;const from=state.quote.groups.find(g=>g.id===fid);const to=state.quote.groups.find(g=>g.id===tid);if(!from||!to)return;const item=from.items.find(i=>i.id===iid);if(!item)return;from.items=from.items.filter(i=>i.id!==iid);to.items.push(item);saveQuote();closeModal();renderQuote();showToast('הועבר','success');}
function addExtra(gid,iid){const grp=state.quote.groups.find(g=>g.id===gid);const item=grp?.items.find(i=>i.id===iid);if(!item)return;item.extras.push({id:uid(),type:'אישורי כניסה',reason:'',amount:0});saveQuote();renderQuote();}
function deleteExtra(gid,iid,eid){if(!confirm('למחוק תוספת?'))return;pushUndo();const grp=state.quote.groups.find(g=>g.id===gid);const item=grp?.items.find(i=>i.id===iid);if(!item)return;item.extras=item.extras.filter(e=>e.id!==eid);saveQuote();renderQuote();}
function onExtraInput(gid,iid,eid,field,val){const grp=state.quote.groups.find(g=>g.id===gid);const item=grp?.items.find(i=>i.id===iid);const extra=item?.extras.find(e=>e.id===eid);if(!extra)return;extra[field]=field==='amount'?(parseFloat(val)||0):val;saveQuote();if(field==='amount')refreshPriceDisplays();}
function onItemInput(gid,iid,field,val){const grp=state.quote.groups.find(g=>g.id===gid);const item=grp?.items.find(i=>i.id===iid);if(!item)return;item[field]=val;saveQuote();if(['qty','listPrice','manualPrice','discountPct'].includes(field))refreshPriceDisplays();}
function onManualPriceInput(gid,iid,val){const grp=state.quote.groups.find(g=>g.id===gid);const item=grp?.items.find(i=>i.id===iid);if(!item)return;item.manualPrice=val===''?'':(parseFloat(val)||0);saveQuote();const lpEl=document.getElementById('lp-'+iid);if(lpEl)lpEl.classList.toggle('price-overridden',val!=='');refreshPriceDisplays();}

function refreshPriceDisplays(){
  if(!state.quote)return;
  state.quote.groups.forEach(g=>{
    g.items.forEach(item=>{
      const tot=calcItemTotal(item);
      const ib=document.getElementById('ib-'+item.id); if(ib) ib.textContent=fmtPrice(tot);
    });
    const gt=document.getElementById('gt-'+g.id); if(gt) gt.textContent=fmtPrice(calcGroupTotal(g));
  });
  const tbd=document.getElementById('t-before-disc'); if(tbd) tbd.textContent=fmtPrice(calcGrandTotal());
  const tfi=document.getElementById('t-final');       if(tfi) tfi.textContent=fmtPrice(calcFinalTotal());
}

// ============================================================
//  DRAG & DROP
// ============================================================
function itemDragStart(e,gid,iid){if(['INPUT','TEXTAREA','SELECT','BUTTON'].includes(e.target.tagName)){e.preventDefault();return;}dragState={groupId:gid,itemId:iid};e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',iid);setTimeout(()=>document.getElementById('ic-'+iid)?.classList.add('dragging'),0);}
function itemDragOver(e,gid,iid){if(!dragState||dragState.itemId===iid)return;e.preventDefault();e.stopPropagation();const el=document.getElementById('ic-'+iid);if(!el)return;const rect=el.getBoundingClientRect();el.classList.remove('drag-over-top','drag-over-bottom');el.classList.add(e.clientY<rect.top+rect.height/2?'drag-over-top':'drag-over-bottom');}
function itemDragLeave(e){e.currentTarget.classList.remove('drag-over-top','drag-over-bottom');}
function itemDrop(e,tgid,tiid){e.preventDefault();e.stopPropagation();if(!dragState)return;const el=document.getElementById('ic-'+tiid);const above=el?.classList.contains('drag-over-top');el?.classList.remove('drag-over-top','drag-over-bottom');const{groupId:sgid,itemId:siid}=dragState;dragState=null;document.getElementById('ic-'+siid)?.classList.remove('dragging');if(siid===tiid)return;const srcGrp=state.quote.groups.find(g=>g.id===sgid);const tgtGrp=state.quote.groups.find(g=>g.id===tgid);if(!srcGrp||!tgtGrp)return;const item=srcGrp.items.find(i=>i.id===siid);if(!item)return;srcGrp.items=srcGrp.items.filter(i=>i.id!==siid);const ti=tgtGrp.items.findIndex(i=>i.id===tiid);tgtGrp.items.splice(above?ti:ti+1,0,item);saveQuote();renderQuote();}
function itemDragEnd(e){document.querySelectorAll('.dragging,.drag-over-top,.drag-over-bottom,.group-drag-over').forEach(el=>el.classList.remove('dragging','drag-over-top','drag-over-bottom','group-drag-over'));dragState=null;}
function groupBodyDragOver(e,gid){if(!dragState)return;e.preventDefault();document.getElementById('gbody-'+gid)?.classList.add('group-drag-over');}
function groupBodyDragLeave(e){if(!e.currentTarget.contains(e.relatedTarget))e.currentTarget.classList.remove('group-drag-over');}
function groupBodyDrop(e,gid){e.preventDefault();document.getElementById('gbody-'+gid)?.classList.remove('group-drag-over');if(!dragState)return;const{groupId:sgid,itemId:siid}=dragState;dragState=null;document.getElementById('ic-'+siid)?.classList.remove('dragging');if(sgid===gid)return;const srcGrp=state.quote.groups.find(g=>g.id===sgid);const tgtGrp=state.quote.groups.find(g=>g.id===gid);if(!srcGrp||!tgtGrp)return;const item=srcGrp.items.find(i=>i.id===siid);if(!item)return;srcGrp.items=srcGrp.items.filter(i=>i.id!==siid);tgtGrp.items.push(item);saveQuote();renderQuote();showToast(`הסעיף הועבר לקבוצה "${tgtGrp.name}"`,'success');}

// ============================================================
//  RENDER QUOTE
// ============================================================
function showScreen(s){['catalog','quote'].forEach(n=>{document.getElementById('screen-'+n)?.classList.toggle('hidden',n!==s);document.getElementById('tab-'+n)?.classList.toggle('active',n===s);});}

function renderQuote(){
  const container=document.getElementById('quote-container');
  if(!state.quote){container.innerHTML='<div class="empty-state"><div class="es-icon">📄</div><div class="es-title">אין הצעה פעילה</div><button class="btn btn-primary" onclick="createNewQuote()">צור הצעה חדשה</button></div>';return;}

  const hasNamedGroups = state.quote.groups.some(g=>g.name!=='');
  const defaultGrp     = state.quote.groups.find(g=>g.id==='default') || state.quote.groups[0];

  container.innerHTML=`
    <div class="quote-info-card">
      <div class="qi-field"><label>📋 שם הפרויקט</label><input type="text" value="${esc(state.quote.projectName||'')}" placeholder="הכנס שם פרויקט..." oninput="onProjectNameInput(this.value)"></div>
      <div class="qi-field"><label>👤 שם העובד המכין</label><input type="text" value="${esc(state.quote.employeeName||'')}" placeholder="שם מלא..." oninput="onEmployeeNameInput(this.value)"></div>
      <div class="qi-date">📅 ${todayStr()}</div>
    </div>

    ${hasNamedGroups
      ? state.quote.groups.map(renderGroupHTML).join('')
      : renderUngroupedHTML(defaultGrp)
    }

    ${hasNamedGroups
      ? `<button class="add-group-btn" onclick="addGroup()">+ הוסף קבוצה חדשה</button>`
      : `<button class="add-group-btn" onclick="openItemPickerModal('${defaultGrp.id}')">+ הוסף סעיף</button>
         <button class="split-groups-btn" onclick="openSplitModal()">⚡ פצל סעיפים לקבוצות...</button>`
    }

    <div class="totals-row">
      <div class="totals-card">
        <h3>📊 סיכום הצעה</h3>
        <div class="t-row"><span class="t-label">סה"כ לפני הנחה</span><span class="t-value" id="t-before-disc">${fmtPrice(calcGrandTotal())}</span></div>
        <div class="t-discount-row"><span class="t-label">הנחה כללית</span><input type="number" class="discount-pct-input" value="${fmtNum(state.quote.globalDiscountPct)}" min="0" max="100" step="0.1" oninput="onGlobalDiscountInput(this.value)"><span style="color:var(--text-muted);font-size:.9rem">%</span></div>
        <div class="t-reason-row"><span class="t-reason-label">סיבת אישור ההנחה</span><textarea class="reason-textarea" placeholder="הזן סיבה..." oninput="onDiscountReasonInput(this.value)">${esc(state.quote.discountReason||'')}</textarea></div>
        <div class="t-row"><span class="t-label" style="font-weight:700;font-size:1rem">סה"כ סופי לאחר הנחה</span><span class="t-value final" id="t-final">${fmtPrice(calcFinalTotal())}</span></div>
      </div>
      <div class="notes-card">
        <h3>📝 הערות והנחיות חשובות</h3>
        <textarea class="notes-textarea" placeholder="הזן הערות, הנחיות, תנאים מיוחדים..." oninput="onQuoteNotesInput(this.value)">${esc(state.quote.notes||'')}</textarea>
      </div>
    </div>`;
  updateUndoRedoBtn();
}

function renderUngroupedHTML(group) {
  if (!group) return '';
  const items = group.items;
  if (!items.length) return `
    <div class="empty-state" style="padding:40px">
      <div class="es-icon">📋</div>
      <div class="es-title">ההצעה ריקה</div>
      <div class="es-sub">לחץ "הוסף סעיף" כדי להתחיל</div>
    </div>`;
  return `
    <div class="ungrouped-list" id="gbody-${group.id}"
      ondragover="groupBodyDragOver(event,'${group.id}')"
      ondragleave="groupBodyDragLeave(event)"
      ondrop="groupBodyDrop(event,'${group.id}')">
      ${items.map(item=>renderItemHTML(group.id,item)).join('')}
      <div class="ungrouped-footer">
        <span style="color:var(--text-muted)">סה"כ:</span>
        <span class="group-footer-total" id="gt-${group.id}">${fmtPrice(calcGroupTotal(group))}</span>
      </div>
    </div>`;
}

function renderGroupHTML(group){
  const isDefault = group.id==='default' || group.name==='';
  if (isDefault) {
    // Unnamed default group rendered inline (no header) alongside named groups
    return group.items.length===0 ? '' : `
      <div class="group-card" id="gc-${group.id}">
        <div class="group-header" style="background:#64748b">
          <span class="group-title">ללא קבוצה</span>
          <div class="group-actions">
            <button class="btn btn-ghost btn-sm" onclick="openItemPickerModal('${group.id}')">+ סעיף</button>
          </div>
        </div>
        <div class="group-body" id="gbody-${group.id}" ondragover="groupBodyDragOver(event,'${group.id}')" ondragleave="groupBodyDragLeave(event)" ondrop="groupBodyDrop(event,'${group.id}')">
          ${group.items.map(item=>renderItemHTML(group.id,item)).join('')}
        </div>
        <div class="group-footer"><span style="color:var(--text-muted)">סה"כ קבוצה:</span><span class="group-footer-total" id="gt-${group.id}">${fmtPrice(calcGroupTotal(group))}</span></div>
      </div>`;
  }
  return `<div class="group-card" id="gc-${group.id}">
    <div class="group-header">
      <button class="group-toggle-btn" id="gtoggle-${group.id}" onclick="toggleGroup('${group.id}')">${group.collapsed?'▶':'▼'}</button>
      <span class="group-title">קבוצה: ${esc(group.name)}</span>
      <div class="group-actions">
        <button class="btn btn-ghost btn-sm" onclick="renameGroup('${group.id}')">✏️ שם</button>
        <button class="btn btn-ghost btn-sm" onclick="openItemPickerModal('${group.id}')">+ סעיף</button>
        <button class="btn btn-sm" style="background:rgba(220,38,38,.75);color:white" onclick="deleteGroup('${group.id}')">🗑</button>
      </div>
    </div>
    <div class="group-body ${group.collapsed?'collapsed':''}" id="gbody-${group.id}" ondragover="groupBodyDragOver(event,'${group.id}')" ondragleave="groupBodyDragLeave(event)" ondrop="groupBodyDrop(event,'${group.id}')">
      ${group.items.length===0?'<div class="group-empty">אין סעיפים.</div>':group.items.map(item=>renderItemHTML(group.id,item)).join('')}
    </div>
    <div class="group-footer"><span style="color:var(--text-muted)">סה"כ קבוצה:</span><span class="group-footer-total" id="gt-${group.id}">${fmtPrice(calcGroupTotal(group))}</span></div>
  </div>`;
}

// ── Split into groups ────────────────────────────────────────
function openSplitModal() {
  const defaultGrp = state.quote.groups.find(g=>g.id==='default')||state.quote.groups[0];
  if (!defaultGrp||!defaultGrp.items.length) return showToast('אין סעיפים לפיצול','warning');
  const rows = defaultGrp.items.map(item=>`
    <label style="display:flex;align-items:flex-start;gap:10px;padding:8px 0;border-bottom:0.5px solid var(--border);cursor:pointer">
      <input type="checkbox" value="${esc(item.id)}" checked style="margin-top:2px;flex-shrink:0;accent-color:#1e3a8a">
      <div>
        <div style="font-weight:600;font-size:.88rem">${esc(item.description)}</div>
        <div style="font-size:.78rem;color:var(--text-muted)">${esc(item.sku)}${item.installInfo?' — '+esc(item.installInfo):''}</div>
      </div>
    </label>`).join('');
  openModal('⚡ פיצול לקבוצות',`
    <p style="font-size:.88rem;color:var(--text-muted);margin-bottom:12px">סמן את הסעיפים שיועברו לקבוצה חדשה. הנותרים ישארו ללא קבוצה.</p>
    <div style="max-height:320px;overflow-y:auto">${rows}</div>
    <div class="form-group" style="margin-top:14px">
      <label>שם הקבוצה החדשה</label>
      <input type="text" id="split-group-name" placeholder="קומה א, מגדל מזרחי...">
    </div>
    <div class="modal-actions">
      <button class="btn btn-primary" onclick="confirmSplit()">צור קבוצה</button>
      <button class="btn btn-outline" onclick="closeModal()">ביטול</button>
    </div>`);
  setTimeout(()=>document.getElementById('split-group-name')?.focus(),60);
}

function confirmSplit() {
  const name = (document.getElementById('split-group-name')?.value||'').trim();
  if (!name) return showToast('נדרש שם קבוצה','error');
  const checked = [...document.querySelectorAll('#modal-body input[type=checkbox]:checked')].map(el=>el.value);
  if (!checked.length) return showToast('לא נבחרו סעיפים','warning');

  const defaultGrp = state.quote.groups.find(g=>g.id==='default')||state.quote.groups[0];
  const toMove = defaultGrp.items.filter(i=>checked.includes(i.id));
  defaultGrp.items = defaultGrp.items.filter(i=>!checked.includes(i.id));

  const newGroup = {id:uid(), name, collapsed:false, items:toMove};
  state.quote.groups.push(newGroup);

  saveQuote(); closeModal(); renderQuote();
  showToast(`✅ קבוצה "${name}" נוצרה עם ${toMove.length} סעיפים`,'success');
}

function renderItemHTML(gid,item){
  const iid=item.id;
  const hasM=item.manualPrice!==''&&item.manualPrice!=null;
  const tot=calcItemTotal(item);
  return `<div class="item-card" id="ic-${iid}" draggable="true"
    ondragstart="itemDragStart(event,'${gid}','${iid}')"
    ondragover="itemDragOver(event,'${gid}','${iid}')"
    ondragleave="itemDragLeave(event)"
    ondrop="itemDrop(event,'${gid}','${iid}')"
    ondragend="itemDragEnd(event)">
    <div class="item-top-row">
      <div class="item-drag-handle">⠿</div>
      <div class="item-info"><span class="sku-badge">${esc(item.sku)}</span><span class="item-desc">${esc(item.description)}</span></div>
      <div class="item-actions">
        <button class="btn btn-outline btn-xs" onclick="duplicateItem('${gid}','${iid}')">📋 שכפל</button>
        <button class="btn btn-outline btn-xs" onclick="transferItem('${gid}','${iid}')">↔ העבר</button>
        <button class="btn btn-danger  btn-xs" onclick="deleteQuoteItem('${gid}','${iid}')">✕ מחק</button>
      </div>
    </div>
    <div class="item-pricing-row">
      <div class="ipr-field wide"><span class="ipr-label">מיקום / התקנה</span>
        <input type="text" class="ipr-input" value="${esc(item.installInfo||'')}" placeholder="1001, 1002, לובי..."
          oninput="onItemInput('${gid}','${iid}','installInfo',this.value)"></div>
      <div class="ipr-field narrow"><span class="ipr-label">כמות</span>
        <input type="number" class="ipr-input" value="${fmtNum(item.qty)}" min="1"
          oninput="onItemInput('${gid}','${iid}','qty',this.value)"></div>
      <div class="ipr-field"><span class="ipr-label">מחיר מחירון</span>
        <input type="number" class="ipr-input${hasM?' price-overridden':''}" id="lp-${iid}"
          value="${item.listPrice!==undefined?fmtNum(item.listPrice):''}" step="0.01"
          oninput="onItemInput('${gid}','${iid}','listPrice',this.value)"></div>
      <div class="ipr-field"><span class="ipr-label">מחיר ידני</span>
        <input type="number" class="ipr-input${hasM?' price-manual-active':''}" id="mp-${iid}"
          value="${hasM?fmtNum(item.manualPrice):''}" placeholder="—" step="0.01"
          oninput="onManualPriceInput('${gid}','${iid}',this.value)"></div>
      <div class="ipr-field narrow"><span class="ipr-label">הנחה %</span>
        <input type="number" class="ipr-input" value="${fmtNum(item.discountPct)}" min="0" max="100" step="0.1"
          oninput="onItemInput('${gid}','${iid}','discountPct',this.value)"></div>
      <div class="ipr-field narrow"><span class="ipr-label">סה"כ</span>
        <div class="ipr-total" id="ib-${iid}">${fmtPrice(tot)}</div></div>
    </div>
    <div class="item-notes-row">
      <div class="ipr-field">
        <span class="ipr-label">הערה (תופיע בטיוטה)</span>
        <textarea class="item-note-textarea"
          placeholder="הערה שתופיע ב-PDF..."
          oninput="onItemInput('${gid}','${iid}','note',this.value)">${esc(item.note||'')}</textarea>
      </div>
      <div class="ipr-field">
        <span class="ipr-label">הערה פנימית (תופיע ב-PDF בנפרד)</span>
        <textarea class="item-note-textarea item-note-internal"
          placeholder="הסבר פנימי על שינוי מחיר..."
          oninput="onItemInput('${gid}','${iid}','internalNote',this.value)">${esc(item.internalNote||'')}</textarea>
      </div>
    </div>
  </div>`;
}

function renderExtraHTML(gid,iid,extra){ return ''; } // extras removed

// ============================================================
//  PDF EXPORT — עיצוב טבלאי פשוט
// ============================================================
function exportPDF(){ _requirePDF().then(_doExportPDF); }
async function _doExportPDF(){
  if(!state.quote||!state.quote.groups.length)return showToast('ההצעה ריקה','warning');
  const date=todayStr(),proj=state.quote.projectName||'—',emp=state.quote.employeeName||'—';

  const pdfDiv=document.createElement('div');
  pdfDiv.style.cssText=[
    'font-family:Calibri,Arial,sans-serif','direction:rtl','unicode-bidi:embed',
    'padding:14px','font-size:11px','color:#0f172a','line-height:1.45'
  ].join(';');

  // running row counter across all groups
  let rowNum=0;

  const COL_W=['30px','76px','auto','38px','92px','46px','74px'];

  const groupsHTML=state.quote.groups.map(group=>{
    const gt=calcGroupTotal(group);
    const rows=group.items.map(item=>{
      rowNum++;
      const hasM=item.manualPrice!==''&&item.manualPrice!=null;
      const tot =calcItemTotal(item);
      const priceCell=hasM
        ?`<div dir="ltr" style="text-decoration:line-through;color:#94a3b8;font-size:9.5px;">₪${numFmt(fmtNum(item.listPrice))}</div>
           <div dir="ltr" style="font-weight:700;font-size:11px;">₪${numFmt(fmtNum(item.manualPrice))}</div>`
        :`<div dir="ltr">₪${numFmt(fmtNum(item.listPrice))}</div>`;
      const descCell=`
        <div style="font-size:11px;">${esc(item.description)}</div>
        ${item.note?`<div style="font-size:10.5px;font-weight:700;margin-top:2px;">${esc(item.note)}</div>`:''}
        ${item.installInfo?`<div style="font-size:10px;color:#64748b;margin-top:1px;">מיקום/התקנה: ${esc(item.installInfo)}</div>`:''}`;
      const internalRow=item.internalNote?`
        <tr style="background:#fffbeb;">
          <td colspan="2" style="border:none;padding:2px 8px 5px;"></td>
          <td colspan="5" style="border:none;padding:2px 8px 5px;border-top:0.5px solid #fde68a;">
            <span style="font-size:9.5px;font-weight:700;color:#b45309;">הערה פנימית: </span>
            <span style="font-size:9.5px;color:#92400e;font-style:italic;">${esc(item.internalNote)}</span>
          </td>
        </tr>`:'';
      const disc=fmtNum(item.discountPct);
      const mainRow=`<tr style="background:${rowNum%2===0?'#f8fafc':'#ffffff'}">
        <td style="border:0.5px solid #e2e8f0;padding:6px 7px;text-align:center;font-size:10px;color:#94a3b8;">${rowNum}</td>
        <td style="border:0.5px solid #e2e8f0;padding:6px 7px;"><span style="font-family:Courier New,monospace;font-size:10px;background:#dbeafe;color:#1e3a8a;padding:2px 5px;border-radius:3px;">${esc(item.sku)}</span></td>
        <td style="border:0.5px solid #e2e8f0;padding:6px 7px;direction:rtl;">${descCell}</td>
        <td style="border:0.5px solid #e2e8f0;padding:6px 7px;text-align:center;">${fmtNum(item.qty)}</td>
        <td style="border:0.5px solid #e2e8f0;padding:6px 7px;direction:ltr;text-align:right;">${priceCell}</td>
        <td style="border:0.5px solid #e2e8f0;padding:6px 7px;text-align:center;font-size:10px;color:#c2410c;">${disc>0?disc+'%':'—'}</td>
        <td style="border:0.5px solid #e2e8f0;padding:6px 7px;direction:ltr;text-align:right;font-weight:700;">₪${numFmt(tot)}</td>
      </tr>`;
      return mainRow+internalRow;
    }).join('');

    return `<div style="margin-bottom:16px;page-break-inside:avoid;">
      <table style="width:100%;border-collapse:collapse;font-size:11px;">
        <thead>
          <tr>
            <td colspan="7" style="background:#1e3a8a;color:#ffffff;padding:7px 10px;font-size:12px;font-weight:700;direction:rtl;">
              קבוצה: ${esc(group.name)}
            </td>
          </tr>
          <tr style="background:#e8edf5;">
            <th style="border:0.5px solid #c5cfe0;padding:5px 7px;font-size:10px;color:#1e3a8a;text-align:center;width:30px;">#</th>
            <th style="border:0.5px solid #c5cfe0;padding:5px 7px;font-size:10px;color:#1e3a8a;text-align:right;width:76px;">מק"ט</th>
            <th style="border:0.5px solid #c5cfe0;padding:5px 7px;font-size:10px;color:#1e3a8a;text-align:right;">תיאור / הערות / מיקום-התקנה</th>
            <th style="border:0.5px solid #c5cfe0;padding:5px 7px;font-size:10px;color:#1e3a8a;text-align:center;width:38px;">כמות</th>
            <th style="border:0.5px solid #c5cfe0;padding:5px 7px;font-size:10px;color:#1e3a8a;text-align:right;width:90px;">מחיר יח'</th>
            <th style="border:0.5px solid #c5cfe0;padding:5px 7px;font-size:10px;color:#1e3a8a;text-align:center;width:44px;">הנחה</th>
            <th style="border:0.5px solid #c5cfe0;padding:5px 7px;font-size:10px;color:#1e3a8a;text-align:right;width:74px;">סה"כ</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
        <tfoot>
          <tr style="background:#e8edf5;">
            <td colspan="6" style="border:0.5px solid #c5cfe0;padding:6px 9px;font-weight:700;color:#1e3a8a;text-align:right;direction:rtl;">סה"כ קבוצה</td>
            <td style="border:0.5px solid #c5cfe0;padding:6px 9px;font-weight:700;color:#1e3a8a;direction:ltr;text-align:right;">₪${numFmt(gt)}</td>
          </tr>
        </tfoot>
      </table>
    </div>`;
  }).join('');

  const grand=calcGrandTotal(),final=calcFinalTotal();
  const notes=(state.quote.notes||'').trim();
  const discPct=fmtNum(state.quote.globalDiscountPct);

  const summaryHTML=`<div style="display:flex;gap:14px;margin-top:6px;align-items:flex-start;direction:rtl;">
    ${notes?`<div style="flex:1;border:0.5px solid #fde68a;border-radius:6px;padding:10px 12px;background:#fffbeb;">
      <div style="font-size:11px;font-weight:700;color:#92400e;margin-bottom:5px;">הערות והנחיות חשובות</div>
      <div style="font-size:10.5px;color:#92400e;line-height:1.65;white-space:pre-wrap;">${esc(notes)}</div>
    </div>`:''}
    <table style="font-size:11px;border-collapse:collapse;min-width:220px;flex-shrink:0;">
      <tr><td style="padding:4px 8px;color:#64748b;direction:rtl;">סה"כ לפני הנחה</td><td style="padding:4px 8px;direction:ltr;text-align:right;font-weight:700;">₪${numFmt(grand)}</td></tr>
      ${discPct>0?`<tr><td style="padding:4px 8px;color:#64748b;direction:rtl;">הנחה כללית (${discPct}%)</td><td style="padding:4px 8px;direction:ltr;text-align:right;">−₪${numFmt(grand*discPct/100)}</td></tr>`:''}
      ${state.quote.discountReason?`<tr><td colspan="2" style="padding:2px 8px;font-size:9.5px;color:#94a3b8;direction:rtl;">${esc(state.quote.discountReason)}</td></tr>`:''}
      <tr style="border-top:2px solid #1e3a8a;"><td style="padding:7px 8px;font-weight:700;color:#1e3a8a;font-size:12px;direction:rtl;">סה"כ סופי</td><td style="padding:7px 8px;direction:ltr;text-align:right;font-weight:700;color:#1e3a8a;font-size:12px;">₪${numFmt(final)}</td></tr>
    </table>
  </div>`;

  pdfDiv.innerHTML=`
    <div style="border-bottom:2.5px solid #1e3a8a;padding-bottom:12px;margin-bottom:18px;">
      <div style="font-size:20px;font-weight:700;color:#1e3a8a;margin-bottom:4px;direction:rtl;">טיוטת הצעת מחיר — ${esc(proj)}</div>
      <div style="font-size:11px;color:#64748b;">תאריך: ${date} &nbsp;|&nbsp; הוכן על ידי: ${esc(emp)}</div>
    </div>
    ${groupsHTML}${summaryHTML}`;

  const proj2=state.quote.projectName?`_${state.quote.projectName}`:'';
  showToast('מייצר PDF...','');
  html2pdf().set({
    margin:[10,8,10,8],
    filename:`טיוטה_להצעת_מחיר_עבור${proj2}_${date.replace(/\//g,'-')}.pdf`,
    image:{type:'jpeg',quality:.98},
    html2canvas:{scale:2,useCORS:true,logging:false},
    jsPDF:{unit:'mm',format:'a4',orientation:'landscape'}
  }).from(pdfDiv).save()
    .then(()=>showToast('✅ ה-PDF הופק','success'))
    .catch(e=>showToast('שגיאה: '+e.message,'error'));
}

// ============================================================
//  EXCEL EXPORT — כל השדות
// ============================================================
function exportExcel(){ _requireXLSX().then(_doExportExcel); }
function _doExportExcel(){
  if(!state.quote||!state.quote.groups.length)return showToast('ההצעה ריקה','warning');
  const grand=calcGrandTotal(),final=calcFinalTotal();
  const disc=fmtNum(state.quote.globalDiscountPct);
  const dreason=state.quote.discountReason||'';
  const notes=state.quote.notes||'';
  const proj=state.quote.projectName||'';
  const emp =state.quote.employeeName||'';
  const date=todayStr();

  const headers=[
    'שם קבוצה','#','מק"ט','תיאור',
    'הערה (תופיע בטיוטה)','הערה פנימית',
    'מיקום / התקנה','כמות',
    'מחיר מחירון','מחיר ידני','הנחה לשורה (%)',
    'מחיר לשורה','סה"כ קבוצה',
    'הנחה כללית (%)','סיבת הנחה',
    'סה"כ לפני הנחה','סה"כ סופי',
    'הערות כלליות','שם פרויקט','הוכן על ידי','תאריך'
  ];
  const rows=[headers];
  let rowNum=0;
  state.quote.groups.forEach(group=>{
    const gt=calcGroupTotal(group);
    const gLabel='קבוצה: '+group.name;
    group.items.forEach(item=>{
      rowNum++;
      const hasM=item.manualPrice!==''&&item.manualPrice!=null;
      const tot=calcItemTotal(item);
      rows.push([
        gLabel, rowNum, item.sku, item.description,
        item.note||'', item.internalNote||'',
        item.installInfo||'', fmtNum(item.qty),
        fmtNum(item.listPrice), hasM?fmtNum(item.manualPrice):'',
        fmtNum(item.discountPct),
        tot, gt,
        disc, dreason,
        grand, final,
        notes, proj, emp, date
      ]);
    });
  });

  const ws=XLSX.utils.aoa_to_sheet(rows);
  ws['!cols']=[
    {wch:22},{wch:5},{wch:12},{wch:44},
    {wch:28},{wch:28},
    {wch:22},{wch:7},
    {wch:13},{wch:13},{wch:11},
    {wch:14},{wch:13},
    {wch:11},{wch:26},
    {wch:16},{wch:14},
    {wch:28},{wch:20},{wch:16},{wch:12}
  ];

  // Style header row (bold)
  const headerRange=XLSX.utils.decode_range(ws['!ref']);
  for(let c=headerRange.s.c;c<=headerRange.e.c;c++){
    const addr=XLSX.utils.encode_cell({r:0,c});
    if(!ws[addr]) continue;
    ws[addr].s={font:{bold:true}};
  }

  const wb=XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'הצעת מחיר');
  const proj2=state.quote.projectName?`_${state.quote.projectName}`:'';
  XLSX.writeFile(wb,`טיוטה_להצעת_מחיר_עבור${proj2}_${date.replace(/\//g,'-')}.xlsx`);
  showToast('✅ הקובץ יוצא','success');
}

// ============================================================
//  MODAL / TOAST
// ============================================================
function openModal(title,body){document.getElementById('modal-title').textContent=title;document.getElementById('modal-body').innerHTML=body;document.getElementById('modal-overlay').classList.remove('hidden');document.getElementById('modal-overlay').onclick=e=>{if(e.target===document.getElementById('modal-overlay'))closeModal();};}
function closeModal(){document.getElementById('modal-overlay').classList.add('hidden');document.getElementById('modal-body').innerHTML='';}
function showToast(msg,type=''){const c=document.getElementById('toast-container');const t=document.createElement('div');t.className='toast '+type;t.textContent=msg;c.appendChild(t);setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(()=>t.remove(),350);},2800);}

// ============================================================
//  KEY BINDINGS + GLOBAL CLIPBOARD PASTE
// ============================================================
document.addEventListener('keydown',e=>{
  if(e.key==='Escape')closeModal();
  if((e.ctrlKey||e.metaKey)&&e.key==='z'&&!e.shiftKey){e.preventDefault();undo();}
  if((e.ctrlKey||e.metaKey)&&(e.key==='y'||(e.key==='z'&&e.shiftKey))){e.preventDefault();redo();}
});

// גלובלי: Ctrl+V בכל מקום בדף — אם יש תמונה בclipboard ומסך הוספת/עריכת פריט פתוח
document.addEventListener('paste', e => {
  // פעיל רק כשהמודל של הפריט פתוח
  const modal = document.getElementById('modal-overlay');
  if (!modal || modal.classList.contains('hidden')) return;
  const imgArea = document.getElementById('fi-img-preview');
  if (!imgArea) return;

  const items = [...(e.clipboardData?.items||[])];
  const imgItem = items.find(it=>it.type.startsWith('image/'));
  if (!imgItem) return;

  e.preventDefault();
  const reader = new FileReader();
  reader.onload = ev => {
    // בדוק אם זה מודל עריכה (יש fi-img-cur) או הוספה חדשה
    if (document.getElementById('fi-img-cur') !== null || window._editItemId) {
      _setEditPreviewDataUrl(ev.target.result);
    } else {
      _setPreviewDataUrl(ev.target.result, 'new');
    }
    showToast('התמונה הודבקה מה-Clipboard ✓', 'success');
  };
  reader.readAsDataURL(imgItem.getAsFile());
});

// ============================================================
//  BOOT
// ============================================================
window.addEventListener('DOMContentLoaded', boot);

// שמור מיידית כשהמשתמש עוזב את הדף (מסתיר, מחליף טאב, סוגר)
// visibilitychange הוא אמין יותר מ-beforeunload ומאפשר async
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && db) {
    // ביטול timer ושמירה מיידית
    clearTimeout(_catalogTimer);
    clearTimeout(_quoteTimer);
    _writeNow();
  }
});

async function _writeNow() {
  if (!db) return;
  try {
    const images = {};
    state.catalog.forEach(i => { if (imageCache[i.id]) images[i.id] = imageCache[i.id]; });
    await Promise.all([
      db.collection('data').doc('catalog').set({ items: state.catalog, updatedAt: new Date().toISOString() }),
      db.collection('data').doc('quote').set({ ...state.quote, updatedAt: new Date().toISOString() })
    ]);
  } catch(e) { console.warn('_writeNow:', e); }
}
