/* ====== بيانات الفروع - يرجى تعديل أرقام الواتساب والأسماء حسب الرغبة ====== */
const BRANCH_CONFIG = {
    'branch1': { 
        whatsapp: '966112022358', // ⭐️ رقم واتساب فرع الرياض (كمثال)
        name: 'لبن الاحمدية', // اسم الفرع في الرسائل وعنوان الصفحة
        deliveryFee: 5,
    },
    'branch2': {
        whatsapp: '966500057394', // ⚠️ يرجى تغيير رقم الواتساب لفرع جدة
        name: 'شمال الرياض مخرج ٦', 
        deliveryFee: 5, 
    },
    'branch3': {
        whatsapp: '966500535160', // ⚠️ يرجى تغيير رقم الواتساب لفرع مكة
        name: 'الروضه خالد بن الوليد ', 
        deliveryFee: 5,
    }
};

/* ====== متغير لتحديد الفرع الحالي من الرابط ====== */
let currentBranchId =
localStorage.getItem('selected_branch')
|| 'branch1';// القيمة الافتراضية
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('branch')) {
    currentBranchId = urlParams.get('branch');
}
const currentBranch = BRANCH_CONFIG[currentBranchId] || BRANCH_CONFIG['branch1'];
document.title = `قائمة سحايب ديرتي - فرع ${currentBranch.name}`; // تحديث عنوان الصفحة باسم الفرع

/* ====== بيانات المنيو - تم تحديث جميع مسارات الصور إلى صيغة WEBP وباسم قصير (مثال: /Dirty55/sh01.webp) ====== */

            
            // الوجبة 4
/* ====== القائمة المحدثة باللغتين العربية والإنجليزية ====== */
const menuData = [
    { 
        section:"الكل", 
        sectionEn: "All",
        sectionImg: "logo-bg1.webp", 
        items:[] 
    },
    { 
        section:"الشوايه", 
        sectionEn: "Grilled Chicken",
        sectionImg: "sh01.webp", 
        items:[
            {id:"sh1", img:"sh01.webp", name:"حبة شواية", nameEn: "Whole Grilled Chicken", basePrice:46, availableIn: ['branch1','branch2', 'branch3'], options:[ 
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:4},
                {name:"رز مندي", nameEn: "Mandi Rice", price:4},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:4}
            ]},
            {id:"sh2", img:"sh01.webp", name:"نص شواية بالرز", nameEn: "Half Grilled Chicken with Rice", basePrice:23, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:2},
                {name:"رز مندي", nameEn: "Mandi Rice", price:2},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:2}
            ]},
            {id:"sh3", img:"sh10.webp", name:"ربع دجاج", nameEn: "Quarter Chicken", basePrice:15, availableIn: ['branch1', 'branch2', 'branch3'], options:[
               {name:"شوايه", nameEn: "Grilled", price:0},
               {name:"مندي", nameEn: "Mandi", price:0}  
            ]},
            {id:"sh4", img:"sh20.webp", name:"نصف دجاج (ساده)", nameEn: "Half Chicken (Plain)", basePrice:15, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                    {name:"شوايه", nameEn: "Grilled", price:0},
                    {name:"مظبي", nameEn: "Madbi", price:0},
                    {name:"مندي", nameEn: "Mandi", price:0}
            ]}
        ]
    },
    { 
        section:"المظبي", 
        sectionEn: "Madbi",
        sectionImg: "md00.webp",
        items:[
            {id:"md1", img:"md00.webp", name:"حبة مظبي", nameEn: "Whole Madbi Chicken", basePrice:46, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:4},
                {name:"رز مندي", nameEn: "Mandi Rice", price:4},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:4}
            ]},
            {id:"md2", img:"md00.webp", name:"نص مظبي", nameEn: "Half Madbi Chicken", basePrice:23, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:2},
                {name:"رز مندي", nameEn: "Mandi Rice", price:2},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:2}
            ]}
        ]
    },
    { 
        section:"مندي", 
        sectionEn: "Mandi",
        sectionImg: "mn00.webp",
        items:[
            {id:"mn1", img:"mn00.webp", name:"حبه مندي", nameEn: "Whole Mandi Chicken", basePrice:46, availableIn: ['branch1','branch2', 'branch3'], options:[ 
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:4},
                {name:"رز مندي", nameEn: "Mandi Rice", price:4},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:4}
            ]},
            {id:"mn2", img:"mn00.webp", name:"نص مندي", nameEn: "Half Mandi Chicken", basePrice:23, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:2},
                {name:"رز مندي", nameEn: "Mandi Rice", price:2},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:2}
            ]}
        ]
    },
    { 
        section:"مدفون", 
        sectionEn: "Madfoon",
        sectionImg: "mf00.webp",
        items:[
            {id:"mdf1", img:"mf01.webp", name:"حبه مدفون", nameEn: "Whole Madfoon Chicken", basePrice:46, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:4},
                {name:"رز مندي", nameEn: "Mandi Rice", price:4},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:4}
            ]},
            {id:"mdf2", img:"mf00.webp", name:"نص مدفون", nameEn: "Half Madfoon Chicken", basePrice:23, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:2},
                {name:"رز مندي", nameEn: "Mandi Rice", price:2},
                {name:"رز مثلوثه", nameEn: "Mathloutha Rice", price:2}
            ]}
        ]
    },
    { 
        section:"مقلوبه", 
        sectionEn: "Maqlooba",
        sectionImg: "mq00.webp",
        items:[
            {id:"mq1", img:"mq00.webp", name:"حبه مقلوبه", nameEn: "Whole Maqlooba Chicken", basePrice:50, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"رز شعبي", nameEn: "Saudi Rice", price:0}]},
            {id:"mq2", img:"mq00.webp", name:"نص دجاج مقلوبه", nameEn: "Half Maqlooba Chicken", basePrice:25, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"رز شعبي", nameEn: "Saudi Rice", price:0}]}
        ]
    },
    { 
        section:"مضغوط", 
        sectionEn: "Madghoot",
        sectionImg: "mg00.webp",
        items:[
            {id:"mg1", img:"mg00.webp", name:"حبه دجاج مضغوط", nameEn: "Whole Madghoot Chicken", basePrice:50, isBestSeller: true, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"رز مضغوط", nameEn: "Madghoot Rice", price:0}]}, 
            {id:"mg2", img:"mg00.webp", name:"نص حبه مضغوط", nameEn: "Half Madghoot Chicken", basePrice:25, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"رز مضغوط", nameEn: "Madghoot Rice", price:0}]}
        ]
    },
    { 
        section:"زربيان", 
        sectionEn: "Zurbian",
        sectionImg: "zb00.webp",
        items:[
            {id:"zb1", img:"zb00.webp", name:"دجاج زربيان حبه", nameEn: "Whole Zurbian Chicken", basePrice:50, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"رز زربيان", nameEn: "Zurbian Rice", price:0}]},
            {id:"zb2", img:"/zb00.webp", name:"نص حبه زربيان", nameEn: "Half Zurbian Chicken", basePrice:25, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"رز زربيان", nameEn: "Zurbian Rice", price:0}]}
        ]
    },
    { 
        section:"قسم اللحوم", 
        sectionEn: "Meat Selection",
        sectionImg: "me01.webp",
        items:[
            {id:"t1", img:"me01.webp", name:"تيس مندي كامل", nameEn: "Whole Mandi Goat", basePrice:1550, isAvailable: true, availableIn: ['branch1', 'branch2', 'branch3'], options:[ 
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:50},
                {name:"رز مندي", nameEn: "Mandi Rice", price:50}
            ]},
            {id:"t2", img:"me02.webp", name:"نص تيس مندي", nameEn: "Half Mandi Goat", basePrice:750, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:25},
                {name:"رز مندي", nameEn: "Mandi Rice", price:25}
            ]},
            {id:"t3", img:"me03.webp", name:"ربع تيس مندي", nameEn: "Quarter Mandi Goat", basePrice:375, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:13},
                {name:"رز مندي", nameEn: "Mandi Rice", price:13}
            ]},
            {id:"t4", img:"me04.webp", name:"نفر لحم مندي", nameEn: "Single Mandi Meat Portion", basePrice:100, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"رز شعبي", nameEn: "Saudi Rice", price:0},
                {name:"رز بشاور", nameEn: "Peshawar Rice", price:0},
                {name:"رز مندي", nameEn: "Mandi Rice", price:0}
            ]},
            {id:"t5", img:"me05.webp", name:"نفر حاشي مكموت", nameEn: "Single Hashi Portion", basePrice:59, isBestSeller: true, branchDiscounts: {'branch1': 50, 'branch2': 50, 'branch3': 50}, availableIn: ['branch1', 'branch2', 'branch3'], options: [
                    {name: "رز شعبي", nameEn: "Saudi Rice", price: 0},
                    {name: "رز بشاور", nameEn: "Peshawar Rice", price: 3}, 
                    {name: "رز مندي", nameEn: "Mandi Rice", price: 3}
            ]},
            {id:"t6", img:"me06.webp", name:"نفر برمه لحم", nameEn: "Single Barma Meat Portion", basePrice:80, isBestSeller: true, branchDiscounts: {'branch1': 68, 'branch2': 68, 'branch3': 68}, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                    {name: "رز شعبي", nameEn: "Saudi Rice", price: 0},
                    {name: "رز بشاور", nameEn: "Peshawar Rice", price: 0},
                    {name: "رز مندي", nameEn: "Mandi Rice", price: 0}
            ]}
        ]
    },
    { 
        section:"المشويات", 
        sectionEn: "Grilled Platters",
        sectionImg: "gr00.webp",
        sectionAvailableIn: ['branch1', 'branch2'], 
        items:[
            {id:"gr1", img:"gr01.webp", name:"كباب لحم", nameEn: "Meat Kebab", basePrice:0, availableIn:['branch1', 'branch2'], options:[
                    {name:"نفر", nameEn: "Portion", price:38},
                    {name:"نص كيلو", nameEn: "Half Kilo", price:76},
                    {name:"كيلو", nameEn: "Kilo", price:150}
            ]},
            {id:"gr2", img:"gr02.webp", name:"كباب دجاج", nameEn: "Chicken Kebab", basePrice:0, availableIn:['branch1', 'branch2'], options:[
                    {name:"نفر", nameEn: "Portion", price:30},
                    {name:"نص كيلو", nameEn: "Half Kilo", price:60},
                    {name:"كيلو", nameEn: "Kilo", price:120}
            ]},
            {id:"gr3", img:"gr03.webp", name:"اوصال لحم", nameEn: "Meat Awssal", basePrice:0, availableIn:['branch1', 'branch2'], options:[
                    {name:"نفر", nameEn: "Portion", price:45},
                    {name:"نص كيلو", nameEn: "Half Kilo", price:90},
                    {name:"كيلو", nameEn: "Kilo", price:180}
            ]},
            {id:"gr4", img:"gr04.webp", name:"شيش طاووق", nameEn: "Shish Tawook", basePrice:0, availableIn:['branch1', 'branch2'], options:[
                    {name:"نفر", nameEn: "Portion", price:30},
                    {name:"نص كيلو", nameEn: "Half Kilo", price:60},
                    {name:"كيلو", nameEn: "Kilo", price:120}
            ]},
            {id:"gr5", img:"gr07.jpg", name:"مشكل فاخر (32 سيخ)", nameEn: "Luxury Mixed Grill (32 Skewers)", basePrice:300, isBestSeller: true, availableIn:['branch1', 'branch2'], options:[{name:"تامين صحن", nameEn: "Tray Deposit", price:30}]},
            {id:"gr6", img:"gr05.webp", name:"مشكل مشاوي", nameEn: "Mixed Grill", basePrice:0, isBestSeller: true, availableIn:['branch1', 'branch2'], options:[
                    {name:"نفر", nameEn: "Portion", price:35},
                    {name:"نص كيلو", nameEn: "Half Kilo", price:70},
                    {name:"كيلو", nameEn: "Kilo", price:130}
            ]}
        ]
    },
    { 
        section:"الأطباق الجانبية", 
        sectionEn: "Side Dishes",
        sectionImg: "si00.webp",
        items:[
            {id:"side7", img:"si05.webp", name:"نفر رز شعبي", nameEn: "Single Saudi Rice", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"نفر", nameEn: "Portion", price:0}]},
            {id:"side8", img:"si06.webp", name:"نفر رز بشاور", nameEn: "Single Peshawar Rice", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"نفر", nameEn: "Portion", price:0}]},
            {id:"side9", img:"si07.webp", name:"نفر رز مندي", nameEn: "Single Mandi Rice", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"نفر", nameEn: "Portion", price:0}]}
        ]
    },
    { 
        section:"المشروبات", 
        sectionEn: "Beverages",
        sectionImg: "dr00.webp",
        items:[
            {id:"bev-p", img:"dr01.webp", name:"ببسي", nameEn: "Pepsi", basePrice:0, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"صغير", nameEn: "Small", price:3},
                {name:"وسط", nameEn: "Medium", price:6},
                {name:"كبير", nameEn: "Large", price:9}
            ]},
            {id:"bev-h", img:"dr02.webp", name:"حمضيات", nameEn: "Citrus", basePrice:0, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"صغير", nameEn: "Small", price:3},
                {name:"وسط", nameEn: "Medium", price:6},
                {name:"كبير", nameEn: "Large", price:9}
            ]},
            {id:"bev-m", img:"dr04.webp", name:"لبن المراعي", nameEn: "Almarai Laban", basePrice:0, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"صغير", nameEn: "Small", price:2},
                {name:"وسط", nameEn: "Medium", price:6},
                {name:"كبير", nameEn: "Large", price:11}
            ]}
        ]
    },
    { 
        section:"الايدامات", 
        sectionEn: "Stews & Veggies",
        sectionImg: "ed00.webp",
        items:[
            {id:"eid1", img:"ed01.webp", name:"ملوخيه", nameEn: "Molokhia", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"صحن", nameEn: "Plate", price:0}]},
            {id:"eid2", img:"ed02.webp", name:"باميه", nameEn: "Okra Stew", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"صحن", nameEn: "Plate", price:0}]},
            {id:"eid3", img:"ed03.webp", name:"مشكل خضار", nameEn: "Mixed Vegetables", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"صحن", nameEn: "Plate", price:0}]},
            {id:"side1", img:"si01.webp", name:"جريش", nameEn: "Jareesh", basePrice:0, isBestSeller: true, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"صغير", nameEn: "Small", price:5}, {name:"كبير", nameEn: "Large", price:10}]}
        ]
    },
    { 
        section:"المقبلات", 
        sectionEn: "Appetizers",
        sectionImg: "ap00.webp",
        items:[
            {id:"app-wrk", img:"ap09.webp", name:"ورق عنب", nameEn: "Grape Leaves", basePrice:0, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"صغير", nameEn: "Small", price:7},
                {name:"كبير", nameEn: "Large", price:12}
            ]},
            {id:"app-homos", img:"ap03.webp", name:"حمص", nameEn: "Hummus", basePrice:0, availableIn: ['branch1', 'branch2', 'branch3'], options:[
                {name:"صغير", nameEn: "Small", price:7},
                {name:"وسط", nameEn: "Medium", price:13}
            ]},
            {id:"app-mshkl", img:"ap08.webp", name:"مشكل مقبلات", nameEn: "Mixed Appetizers", basePrice:13, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"طبق", nameEn: "Plate", price:0}]}
        ]
    },
    { 
        section:"الكنافه", 
        sectionEn: "Kunafa",
        sectionImg: "kn00.webp",
        items:[
            {id:"kna1", img:"kn00.webp", name:"كنافه قشطه", nameEn: "Kunafa with Cream", basePrice:10, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"", nameEn: "", price:0}]},
            {id:"kna2", img:"kn02.webp", name:"كنافه جلاكسي", nameEn: "Galaxy Kunafa", basePrice:12, availableIn: ['branch1', 'branch2', 'branch3'], options:[{name:"", nameEn: "", price:0}]}
        ]
    }
];

/* ====== دالة معالجة البيانات لتقديم "الأكثر مبيعاً" في بداية القائمة ====== */
function processMenuData(data) {
    let bestSellers = []; 
    let processedMenuData = []; 

    // 1. المرور على جميع الأقسام والوجبات واستخراج الأكثر مبيعاً
    data.forEach(section => {
        // نتخطى قسم "الكل" لأننا سنقوم بتجميعه لاحقاً
        if (section.section === "الكل") {
            processedMenuData.push(section); 
            return;
        }

        let regularItems = []; 
        
        section.items.forEach(item => {
            // نضيف خاصية actualSection لتذكر القسم الأصلي
            const itemWithSection = {...item, actualSection: item.actualSection || section.section}; 

            if (item.isBestSeller === true) {
                bestSellers.push(itemWithSection);
            } else {
                regularItems.push(itemWithSection);
            }
        });

        // 2. إنشاء نسخة من القسم الأصلي تحتوي فقط على الوجبات المتبقية
        // شرط: إذا كان القسم يحتوي على أي وجبات متبقية، أو كانت لديه خاصية توافر محددة
        if (regularItems.length > 0 || section.sectionAvailableIn) {
            let newSection = {...section, items: regularItems}; 
            processedMenuData.push(newSection);
        }
    });

    // 3. إنشاء قسم جديد خاص بالأكثر مبيعاً وإضافته في البداية
    if (bestSellers.length > 0) {
        let bestSellerSection = {
            section: "الأكثر مبيعاً 🏆", 
            sectionImg: "/Dirty55/best_seller_icon.webp", 
            items: bestSellers,
            sectionAvailableIn: ['branch1', 'branch2', 'branch3'] 
        };
        // إضافة قسم الأكثر مبيعاً بعد قسم "الكل" مباشرة
        processedMenuData.splice(1, 0, bestSellerSection);
    }
    
    // 4. إرجاع مصفوفة البيانات الجديدة والمعالجة
    return processedMenuData;
}

// نستخدم الدالة الجديدة لمعالجة القائمة مرة واحدة
const processedMenuData = processMenuData(menuData); 


/* ====== متغيرات PWA و SearchBar ====== */
let selectedOptions = [];
let currentSection = processedMenuData[0].section; // استخدام البيانات المعالجة لتحديد القسم الحالي
const installAppBtn = document.getElementById('installAppBtn');
const searchBar = document.getElementById('searchBar');


/* ====== سلة الطلبات والعناصر ====== */
const dynamicSuggestionRules = {
    "شواية": ["المقبلات","الايدامات"],
    "مظبي": ["المقبلات","الايدامات"],
    "مندي": ["المقبلات","الايدامات"],
    "مدفون": ["المقبلات","الايدامات"],
    "مقلوبه": ["المقبلات","الايدامات"],
    "مضغوط": ["المقبلات","المقبلات"],
    "زربيان": ["المقبلات","الايدامات"],
    "رز": ["المقبلات","الايدامات"],
    "مشويات": ["المقبلات"],
    "كنافه": ["المشروبات"],
};

let cart = JSON.parse(localStorage.getItem('deerty_cart') || '[]');
const sectionsEl = document.getElementById('sections');
const menuList = document.getElementById('menuList');
const cartBtn = document.getElementById('cartBtn');


const cartCount = document.getElementById('cartCount');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsEl = document.getElementById('cartItems');
const totalBreakdownEl = document.getElementById('totalBreakdown'); 
const sendWhatsapp = document.getElementById('sendWhatsapp');
const clearCart = document.getElementById('clearCart');

// 📍 عناصر تحديد الموقع (جديد)
const getLocationBtn = document.getElementById('getLocationBtn');
const locationStatus = document.getElementById('locationStatus');
let userLocation = null; // لتخزين إحداثيات الموقع (Lat, Lng)

/* Option modal */
const optionModal = document.getElementById('optionModal');
const modalTitle = document.getElementById('modalTitle');
const modalOptions = document.getElementById('modalOptions');
const modalConfirm = document.getElementById('modalConfirm');
const itemNoteInput = document.getElementById('itemNote'); 

let selectedItem = null;
let selectedOption = null;
let selectedItemImage = null; // 🚀 NEW: لتخزين مرجع صورة المنتج المختار (للتأثير)

/* ====== Render sections ====== */
function renderSections(){
    sectionsEl.innerHTML = '';
    processedMenuData.forEach((sec,idx)=>{
        // منطق إخفاء القسم بالكامل 
        if (sec.section !== "الكل" && sec.sectionAvailableIn && !sec.sectionAvailableIn.includes(currentBranchId)) {
            return; // يتم تخطي هذا القسم إذا لم يكن متوفراً في الفرع الحالي
        }

        // تحديد اسم العرض: "فرع الرياض" لقسم "الكل" فقط، واسم القسم للأقسام الأخرى
        const sectionDisplayName = sec.section === "الكل" ? `فرع ${currentBranch.name}` : sec.section;

        const card = document.createElement('div');
        card.className = 'sec-card';
        card.innerHTML = `
            <img src="${sec.sectionImg}" alt="${sec.section}" onerror="this.style.opacity=.35">
            <div class="sec-name">${sectionDisplayName}</div>
        `;

        if(sec.section === currentSection) card.classList.add('active'); 

        card.onclick=()=>{
            document.querySelectorAll('.sec-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            currentSection = sec.section;
            renderMenu(currentSection);
            searchBar.value = ''; 
        };
        sectionsEl.appendChild(card);
    });
    renderMenu(currentSection);
}


/* ====== Render menu - تطبيق الخصم الخاص بالفرع (واستخدام processedMenuData) ====== */
function renderMenu(sectionName, searchTerm = ''){
    menuList.innerHTML='';
    let itemsToRender = [];
    const normalizedSearch = searchTerm.trim().toLowerCase();

    if(sectionName === "الكل") {
        itemsToRender = processedMenuData.flatMap(sec => 
            sec.section !== "الكل" ? 
            sec.items.map(item => ({...item, actualSection: item.actualSection || sec.section})) : 
            []
        );
    } else {
        // استخدام processedMenuData للعثور على القسم
        const sec = processedMenuData.find(s=>s.section===sectionName); 
        if(!sec) return;
        itemsToRender = sec.items;
    }

    // تصفية الوجبات حسب توافرها في الفرع الحالي
    const branchFilteredItems = itemsToRender.filter(item => {
        // تحقق مما إذا كانت الوجبة متوفرة في الفرع المحدد حالياً
        return item.availableIn && Array.isArray(item.availableIn) && item.availableIn.includes(currentBranchId);
    });

    const filteredItems = branchFilteredItems.filter(item => {
        return item.name.toLowerCase().includes(normalizedSearch);
    });

    if(filteredItems.length === 0 && normalizedSearch.length > 0) {
        menuList.innerHTML = `<p style="text-align:center; padding: 20px; color: var(--light-text);">لا توجد نتائج بحث في قسم "${sectionName}" في فرع ${currentBranch.name}</p>`;
        return;
    }

    if (filteredItems.length === 0 && normalizedSearch.length === 0 && sectionName !== "الكل") {
        menuList.innerHTML = `<p style="text-align:center; padding: 20px; color: var(--light-text);">لا تتوفر وجبات في قسم "${sectionName}" حالياً في فرع ${currentBranch.name}.</p>`;
        return;
    }

    filteredItems.forEach(item=>{
        const isAvailable = item.isAvailable !== false; 
        // تحديد السعر المخفض الخاص بالفرع الحالي
        const discountedPriceForBranch = item.branchDiscounts ? item.branchDiscounts[currentBranchId] : null;
        // تحديد ما إذا كان هناك خصم يطبق على هذا الفرع
        const hasDiscount = discountedPriceForBranch && discountedPriceForBranch < item.basePrice;
        const isBestSeller = item.isBestSeller === true; 

        let buttonText = "أضف للسلة";
        let buttonAttributes = ""; 
        let cardClassAddition = ""; 
        let bestSellerBadge = ''; 

        if (!isAvailable) {
            buttonText = "غير متوفر مؤقتاً ⛔";
            buttonAttributes = "disabled"; 
            cardClassAddition = " unavailable-card"; 
        } else if (hasDiscount) {
            cardClassAddition = " discount-card"; 
        }

        if (isBestSeller) {
            bestSellerBadge = '<span class="best-seller-badge">الأكثر مبيعاً 🏆</span>';
        }

        let priceDisplay;
        if (hasDiscount) {
            priceDisplay = `
                <span class="old-price">${item.basePrice} ريال</span> 
                <span class="discount-price">${discountedPriceForBranch} ريال</span>
            `;
        } else {
            priceDisplay = item.basePrice > 0 ? `${item.basePrice} ريال` : 
                (item.options.length > 0 && item.options[0].price > 0 ? `ابتداءً من ${item.options[0].price} ريال` : `${item.options[0].price} ريال`);
        }

        // نستخدم actualSection إذا كانت الوجبة في قسم "الأكثر مبيعاً" أو "الكل"، وإلا نستخدم اسم القسم الحالي
        const displayedSection = item.actualSection || sectionName; 

        const card=document.createElement('div');
        card.className='card' + cardClassAddition; 
        card.innerHTML = `
    <img src="${item.img}" alt="${item.name}" onerror="this.style.opacity=.35">
    ${bestSellerBadge}
    
    <h3 style="margin-bottom: 2px;">${item.name}</h3>
    
    <h4 style="color: #888; font-weight: normal; font-size: 0.85rem; margin-top: 0; font-family: sans-serif;">
        ${item.nameEn || ''}
    </h4>

    <p>${displayedSection}</p>
    ${item.description ? `<div class="item-desc">${item.description}</div>` : ''}
    <div class="price">${priceDisplay}</div>
    <button class="add-btn" ${buttonAttributes}>${buttonText}</button>
`;


        if (isAvailable) {
            card.querySelector('button').onclick = function() {
                const itemForCart = {...item};
                
                // 🚀 NEW: الحصول على مرجع الصورة لبطاقة المنتج الحالية
                const itemImage = card.querySelector('img'); 
                
                // تعيين السعر الأساسي للخصم إذا كان موجوداً لهذا الفرع
                if(hasDiscount){
                    itemForCart.basePrice = discountedPriceForBranch;
                }

                delete itemForCart.actualSection;
                const needsOptions = item.options.length > 1 || (item.options.length === 1 && item.options[0].name !== "");

                if(needsOptions){
                    showOptions(itemForCart, false, itemImage); // 🚀 MODIFIED: تمرير itemImage
                } else {
                    itemNoteInput.value = ''; 
                    showOptions(itemForCart, true, itemImage); // 🚀 MODIFIED: تمرير itemImage
                }
            };
        }
        menuList.appendChild(card);
    });
}


/* ====== Show options modal - لدعم الملاحظات ====== */
// 🚀 MODIFIED: إضافة itemImage للمُعاملات
function showOptions(item, skipOptions = false, itemImage = null){ 
    selectedItem = item;
    selectedItemImage = itemImage;

    selectedOption = null;
    selectedOptions = [];

    // عرض اسم الوجبة بالعربي وتحته الإنجليزي في عنوان النافذة
modalTitle.innerHTML = `
    <div>${item.name}</div>
    <div style="font-size: 0.8rem; color: #888; font-weight: normal; font-family: sans-serif;">
        ${item.nameEn || ''}
    </div>
`;

    if(skipOptions || item.options.length === 0){
        modalOptions.style.display = 'none';
    } else {

        modalOptions.style.display = 'block';
        modalOptions.innerHTML='';

        item.options.forEach((opt,index)=>{

            const wrapper = document.createElement('label');
            wrapper.style.display = "flex";
            wrapper.style.alignItems = "center";
            wrapper.style.gap = "8px";
            wrapper.style.marginBottom = "8px";

            const input = document.createElement('input');

            // 🔥 إذا متعدد (رمضان) → checkbox
            if(item.isMultiOption){
                input.type = "checkbox";

                input.onchange = () => {
                    if(input.checked){
                        selectedOptions.push(opt);
                    } else {
                        selectedOptions = selectedOptions.filter(o => o.name !== opt.name);
                    }
                };

            } 
            // 🔥 باقي المنتجات → radio (اختيار واحد)
            else {
                input.type = "radio";
                input.name = "productOption";

                if(index === 0){
                    input.checked = true;
                    selectedOption = opt;
                }

                input.onchange = () => {
                    selectedOption = opt;
                };
            }

            const text = document.createElement('span');
            text.innerHTML = `
    <div style="display: flex; flex-direction: column; line-height: 1.2;">
        <span style="font-weight: bold;">${opt.name} ${opt.price > 0 ? ` (+${opt.price} ريال)` : ''}</span>
        <span style="font-size: 0.75rem; color: #888; font-family: sans-serif;">${opt.nameEn || ''}</span>
    </div>
`;

            wrapper.appendChild(input);
            wrapper.appendChild(text);
            modalOptions.appendChild(wrapper);
        });
    }

    optionModal.style.display='flex';
}
/* ====== Confirm modal ====== */
optionModal.addEventListener('click', (e) => {
    if (e.target.id === 'optionModal') {
        optionModal.style.display = 'none';
    }
});

modalConfirm.onclick = ()=>{
    if(selectedItem){

        const note = itemNoteInput.value.trim();

        if(selectedItem.isMultiOption){

            addToCart({
                ...selectedItem,
                qty:1,
                selectedOptions:selectedOptions,
                note: note || null
            });

        } else {

            const optionToSend = selectedOption || 
                (selectedItem.options.length > 0 ? selectedItem.options[0] : null);

            addToCart({
                ...selectedItem,
                qty:1,
                selectedOption:optionToSend,
                note: note || null
            });
        }

        if (selectedItemImage) {
            flyToCart(selectedItemImage);
        }

        optionModal.style.display='none';
    }
};

/* ====== Cart functions - تم تحديثها لحذف خصائص الفروع عند الإضافة للسلة ====== */
function saveCart(){ 
    localStorage.setItem('deerty_cart',JSON.stringify(cart)); 
    renderCart(); 
}


function flashCartButton() {
    cartBtn.classList.add('flash-cart-btn');
    setTimeout(() => {
        cartBtn.classList.remove('flash-cart-btn');
    }, 400); 
}


function addToCart(item){
    const obj={...item};
    // حذف كل الخصائص المتعلقة بالمنطق
    delete obj.branchDiscounts; 
    delete obj.isBestSeller; 
    delete obj.availableIn; 

    const key = obj.id + (obj.selectedOption?`-${obj.selectedOption.name}`:'') + (obj.note ? `-${obj.note}` : '');
    const found = cart.find(i=>i.key===key);
    if(found) found.qty+=1;
    else cart.push({...obj,key});

    saveCart();
flashCartButton();

}
// 🚀 ———————————————


/* ====== renderCart - عرض الإجمالي التفصيلي باستخدام رسوم الفرع الحالي ====== */
function renderCart(){
    cartItemsEl.innerHTML='';
    let subtotal = 0;
    let count = 0;
    const branchDeliveryFee = currentBranch.deliveryFee || 0; // رسوم التوصيل من بيانات الفرع

    cart.forEach((it,idx)=>{
        let optionsTotal = 0;

if(it.selectedOptions && it.selectedOptions.length > 0){
    optionsTotal += it.selectedOptions.reduce((sum, opt) => sum + opt.price, 0);
}

if(it.selectedOption){
    optionsTotal += it.selectedOption.price;
}

const price = (it.basePrice || 0) + optionsTotal;
        const row=document.createElement('div');
        row.className='cart-row';

        const noteHtml = it.note ? `<div class="item-note-display">📝 ملاحظة: ${it.note}</div>` : '';

        row.innerHTML=`
            <div style="flex-grow:1; min-width: 60%">
                <div style="font-weight:800">${it.name}${it.selectedOption && it.selectedOption.name !== 'نفر' && it.selectedOption.name !== 'طبق' && it.selectedOption.name !== 'عبوة'?' — '+it.selectedOption.name:''}</div>
                <div style="font-size:0.9rem;color:rgba(255,255,255,0.7)">${it.qty} × ${price} ريال</div>
                ${noteHtml}
            </div>
            <div class="controls">
                <button onclick="updateQty(${idx},-1)">-</button>
                <div style="min-width:26px;text-align:center">${it.qty}</div>
                <button onclick="updateQty(${idx},1)">+</button>
                <button onclick="removeItem(${idx})" style="margin-left:6px;background:var(--red);color:#fff;padding:6px;border-radius:6px;border:none;cursor:pointer">حذف</button>
            </div>
        `;
        cartItemsEl.appendChild(row);
        subtotal += price*it.qty;
        count += it.qty;
    });

    const deliveryType = document.querySelector('input[name="deliveryType"]:checked')?.value;
    const currentDeliveryFee = deliveryType === 'delivery' ? branchDeliveryFee : 0;
    let finalTotal = subtotal + currentDeliveryFee;

    // عرض الإجمالي التفصيلي
    totalBreakdownEl.innerHTML = `
        <div class="total-line">
            <span>إجمالي المنتجات:</span>
            <span>${subtotal} ريال</span>
        </div>
        <div class="total-line">
            <span>رسوم التوصيل:</span>
            <span>${currentDeliveryFee} ريال</span>
        </div>
        <div class="total-line final-total-line">
            <span>الإجمالي النهائي:</span>
            <span id="cartTotalBottom">${finalTotal} ريال</span>
        </div>
    `;

    cartCount.innerText=count;
    cartCount.style.display=count===0?'none':'inline-block';
    localStorage.setItem('deerty_cart',JSON.stringify(cart));
    renderCartSuggestions(); // 👈 هذا السطر يشغل الرف الجديد
}


function updateQty(idx,change){ 
    if(!cart[idx]) return; 
    cart[idx].qty+=change; 
    if(cart[idx].qty<1) cart.splice(idx,1); 
    saveCart(); 
}


function removeItem(idx){ 
    cart.splice(idx,1); 
    saveCart(); 
}


clearCart.onclick = ()=>{
    cart = [];
    saveCart();
}


document.querySelectorAll('input[name="deliveryType"]').forEach(radio => {
    radio.addEventListener('change', renderCart); 
});



/* ====== Cart UI and WhatsApp - يستخدم رقم الواتساب الخاص بالفرع ====== */
const closeCart = () => {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('show');
    cartDrawer.setAttribute('aria-hidden','true');
    cartBtn.style.display = 'block'; 
};


cartBtn.addEventListener('click',()=>{
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('show');
    cartDrawer.setAttribute('aria-hidden','false');
    renderCart();
    cartBtn.style.display = 'none'; 
});


cartOverlay.addEventListener('click', closeCart);
closeCartBtn.addEventListener('click', closeCart);


sendWhatsapp.addEventListener('click', () => {
    if(cart.length===0){ alert('السلة فارغة'); return; }
    
    // 💡 التعديل الأول: قراءة العنوان اليدوي من حقل "manualAddress"
    const manualAddressNote = document.getElementById('manualAddress').value.trim(); 
    
    const branchDeliveryFee = currentBranch.deliveryFee || 0;
    const whatsappNumber = currentBranch.whatsapp;

    const deliveryType = document.querySelector('input[name="deliveryType"]:checked')?.value;
    // 📍 متغيرات رسائل الواتساب
    const lines=['طلب جديد من مطاعم سحايب ديرتي:'];
    let subtotal = 0;

    cart.forEach(it=>{
        let optionsTotal = 0;

if(it.selectedOptions && it.selectedOptions.length > 0){
    optionsTotal += it.selectedOptions.reduce((sum, opt) => sum + opt.price, 0);
}

if(it.selectedOption){
    optionsTotal += it.selectedOption.price;
}

const price = (it.basePrice || 0) + optionsTotal;
        let optionText = "";

// خيار مفرد
if (it.selectedOption && 
    it.selectedOption.name !== 'نفر' && 
    it.selectedOption.name !== 'طبق' && 
    it.selectedOption.name !== 'عبوة') {

    optionText = ` — ${it.selectedOption.name}`;
}

// خيارات متعددة (وجبة رمضان)
if (it.selectedOptions && it.selectedOptions.length > 0) {
    optionText = ` — ${it.selectedOptions.map(o => o.name).join(' + ')}`;
}
        const noteText = it.note ? ` (ملاحظة: ${it.note})` : '';

        lines.push(`${it.qty} × ${it.name}${optionText} ${noteText} — ${price*it.qty} ريال`);
        subtotal+=price*it.qty;
    });

    lines.push('---');
    lines.push(`1. إجمالي المنتجات: ${subtotal} ريال`);

    if(deliveryType==='delivery'){ 
        lines.push(`2. نوع الطلب: توصيل (فرع ${currentBranch.name})`); 
        lines.push(`3. رسوم التوصيل: ${branchDeliveryFee} ريال`); 
        subtotal += branchDeliveryFee; // إضافة رسوم التوصيل للإجمالي
        
        // 📍 إضافة إحداثيات الموقع إذا كانت متوفرة (تم التعديل)
        if (userLocation) {
            lines.push(`4. إحداثيات موقع التوصيل:`);
            lines.push(`   * خط العرض (Lat): ${userLocation.lat}`);
            lines.push(`   * خط الطول (Lng): ${userLocation.lng}`);
            // (تم تصحيح رابط الخريطة إلى الصيغة الصحيحة)
            lines.push(`   * رابط الخريطة: https://maps.google.com/?q=${userLocation.lat},${userLocation.lng}`); 
            lines.push(`⚠️ الموقع المحدد هو إحداثيات GPS ويجب على العميل تأكيد العنوان التفصيلي مع الموظف.`);
        } else {
             lines.push(`4. الموقع: لم يتم تحديد الموقع عبر الزر. يرجى تزويد الموظف بالعنوان كاملاً.`);
        }
        
    } else {
        lines.push(`2. نوع الطلب: استلام من الفرع (فرع ${currentBranch.name})`); 
    }
    
    // 💡 التعديل الثاني: إضافة العنوان اليدوي / ملاحظات التوصيل (التي تم قراءتها في البداية)
    if (manualAddressNote) {
        lines.push(`---`); 
        lines.push(`5. ملاحظات التوصيل / العنوان اليدوي: ${manualAddressNote}`);
    }

    lines.push('---');
    lines.push(`الإجمالي النهائي: ${subtotal} ريال`);
    // استخدام رقم الواتساب الخاص بالفرع
    const url=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url,'_blank');

    cart = [];
    saveCart(); 
    closeCart();
});



// 🚀 ------------------------------------------
// ✨ دالة تحديد الموقع (Geolocation) (جديد)
// ------------------------------------------
function onSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    userLocation = { lat: latitude, lng: longitude }; // تخزين الإحداثيات

    // إنشاء رابط لموقع جوجل ماب
    const mapLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

    // تحديث حالة الموقع
    locationStatus.innerHTML = `
        ✅ تم تحديد الموقع بنجاح! 
        <br>
        <a href="${mapLink}" target="_blank" style="color: var(--gold); text-decoration: underline; font-weight: bold;">عرض على الخريطة</a>
    `;
    locationStatus.style.color = '#4CAF50';
    getLocationBtn.disabled = false;
    getLocationBtn.innerText = '📍 تحديث الموقع';
}

function onError(error) {
    let message = 'حدث خطأ أثناء تحديد الموقع.';
    switch(error.code) {
        case error.PERMISSION_DENIED:
            message = '🚫 رفض المستخدم طلب تحديد الموقع.';
            break;
        case error.POSITION_UNAVAILABLE:
            message = '❌ معلومات الموقع غير متوفرة حالياً.';
            break;
        case error.TIMEOUT:
            message = '⏳ انتهت مهلة طلب تحديد الموقع.';
            break;
        case error.UNKNOWN_ERROR:
            message = '🚨 خطأ غير معروف.';
            break;
    }
    
    locationStatus.innerText = message;
    locationStatus.style.color = 'var(--red)';
    getLocationBtn.disabled = false;
    getLocationBtn.innerText = '📍 تحديد موقع التوصيل الحالي (حاول مجدداً)';
    userLocation = null; // مسح الموقع السابق في حالة الخطأ
}

function getMyLocation() {
    locationStatus.innerText = 'جاري البحث عن موقعك... 📡';
    locationStatus.style.color = '#aaa';
    getLocationBtn.disabled = true;

    if (!navigator.geolocation) {
        locationStatus.innerText = '❌ المتصفح لا يدعم تحديد الموقع الجغرافي.';
        locationStatus.style.color = 'var(--red)';
        getLocationBtn.disabled = false;
        return;
    }

    navigator.geolocation.getCurrentPosition(
        onSuccess, 
        onError,
        { 
            enableHighAccuracy: true, // طلب دقة أعلى
            timeout: 10000,          // مهلة 10 ثواني 
            maximumAge: 0            // لا تستخدم بيانات مخزنة مؤقتاً
        } 
    );
}

// 📍 ربط زر تحديد الموقع بالدالة (جديد)
getLocationBtn.addEventListener('click', getMyLocation);
// ------------------------------------------


/* ====== PWA Install Logic / Search Logic / Init ====== */
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installAppBtn.style.display = 'block';
});


installAppBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        installAppBtn.style.display = 'none';
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        deferredPrompt = null;
    }
});


searchBar.addEventListener('input', (e) => {
    renderMenu(currentSection, e.target.value);
});


// ====== إضافة منطق الـ Sticky Header (التثبيت مع الظل) باستخدام منطقك المفضل ======
const stickyHeaderHeight = 80; 
window.addEventListener('scroll', () => {
    const sectionsTop = sectionsEl.getBoundingClientRect().top; // نستخدم sectionsEl
    
    // إذا كان العنصر في موضع التثبيت (أو تجاوزه)
    if (sectionsTop <= stickyHeaderHeight) {
        sectionsEl.classList.add('sections-sticky');
    } else {
        sectionsEl.classList.remove('sections-sticky');
    }
});

/* ========================= */
/* 🔥 تبديل الفروع الاحترافي */
/* ========================= */

const branchDropdown =
document.getElementById('branchDropdown');

const changeBranchBtn =
document.getElementById('changeBranchBtn');

const currentBranchName =
document.getElementById('currentBranchName');

changeBranchBtn.addEventListener('click', () => {

    branchDropdown.classList.toggle('show');

});

function updateCurrentBranchUI(){

    currentBranchName.innerText =
    currentBranch.name;

}

document.querySelectorAll('.branch-option')
.forEach(option => {

    option.addEventListener('click', () => {

        currentBranchId =
        option.dataset.branch;

        localStorage.setItem(
            'selected_branch',
            currentBranchId
        );

        const newBranch =
        BRANCH_CONFIG[currentBranchId];

        currentBranch.whatsapp =
        newBranch.whatsapp;

        currentBranch.name =
        newBranch.name;

        currentBranch.deliveryFee =
        newBranch.deliveryFee;

        updateCurrentBranchUI();

        renderSections();

        renderCart();

        branchDropdown.classList.remove('show');

    });

});

updateCurrentBranchUI();
renderSections(); 
renderCart();


// تسجيل العامل الخدمي (Service Worker) الخفيف لضمان التحديث الفوري
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // تم التأكد من المسار إلى /Dirty55/
        navigator.serviceWorker.register('service-worker.js') .then(reg => {
            console.log('Service Worker Registered!', reg.scope);
        })
        .catch(err => {
            console.error('Service Worker Registration failed:', err);
        });
    });
}


// 🚀 ------------------------------------------
// ✨ دالة تأثير سقوط الصورة إلى السلة (Fly-to-Cart)
// ------------------------------------------
function flyToCart(imgElement) {
    // 1. استنساخ الصورة
    const flyingImg = imgElement.cloneNode(true);
    flyingImg.className = "flying-img"; // تطبيق الأنماط
    document.body.appendChild(flyingImg);

    // 2. تحديد موقع الصورة الأصلية
    const rect = imgElement.getBoundingClientRect();
    flyingImg.style.top = rect.top + "px";
    flyingImg.style.left = rect.left + "px";

    // 3. تحديد موقع زر السلة
    const cartRect = document.getElementById("cartBtn").getBoundingClientRect();

    // 4. بدء الحركة
    setTimeout(() => {
        // تحريك الصورة إلى زر السلة وتصغيرها
        flyingImg.style.transform = `translate(${cartRect.left - rect.left}px, ${cartRect.top - rect.top}px) scale(0.2)`;
        flyingImg.style.opacity = "0";
    }, 10);

    // 5. إزالة الصورة بعد انتهاء الحركة
    setTimeout(() => {
        flyingImg.remove();
    }, 800);
}
// ✅ ألصق هذا الكود في نهاية ملف Script.js بدلاً من الكود القديم

document.addEventListener("DOMContentLoaded", () => {
    // التحقق هل المتصفح هو سفاري على آيفون/آيباد
    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

    // إذا كان آيفون ولم يتم تثبيته بعد
    if (isIOS && !isStandalone) {
        const iosBtn = document.getElementById('iosHelpBtn');
        if (iosBtn) {
            iosBtn.style.display = 'inline-flex'; // إظهار الزر العلوي
            
            // عند الضغط، تظهر القائمة السفلية
            iosBtn.addEventListener('click', () => {
                const banner = document.getElementById('iosInstallBanner');
                if (banner) banner.style.display = 'block';
            });
        }
    }
});

function closeIosBanner() {
    const banner = document.getElementById('iosInstallBanner');
    if (banner) banner.style.display = 'none';
}

/* ================================================= */
/* 🛒 منطق "رف الاقتراحات" الذكي (استراتيجية الكاشير) */
/* ================================================= */
function renderCartSuggestions() {
    const suggestionsContainer = document.getElementById('cartSuggestions');
    suggestionsContainer.innerHTML = ''; 
    suggestionsContainer.style.display = 'none'; 

    if (cart.length === 0) return; 

    let suggestedCategories = new Set();
    
    // 1. تحديد الأقسام المقترحة
    cart.forEach(cartItem => {
        Object.keys(dynamicSuggestionRules).forEach(ruleKey => {
            if (cartItem.name.includes(ruleKey)) {
                dynamicSuggestionRules[ruleKey].forEach(cat => suggestedCategories.add(cat));
            }
        });
    });

    if (suggestedCategories.size === 0) return;

    // 2. تجميع كل المرشحين (بدلاً من الاختيار الفوري)
    let allCandidates = [];
    processedMenuData.forEach(section => {
        if (suggestedCategories.has(section.section)) {
            section.items.forEach(item => {
                const alreadyInCart = cart.some(cItem => cItem.id === item.id);
                if (!alreadyInCart) {
                    allCandidates.push(item);
                }
            });
        }
    });

    if (allCandidates.length === 0) return;

    // 3. خلط المرشحين عشوائياً لضمان التنوع
    allCandidates.sort(() => Math.random() - 0.5);

    // 4. أخذ أول 5 عناصر فقط
    const suggestionsToShow = allCandidates.slice(0, 5);

    // 5. رسم المنتجات
    suggestionsContainer.style.display = 'block'; 
    suggestionsContainer.innerHTML = '<div style="font-size:0.9rem; margin-bottom:5px; color:#ccc;">أكمل وجبتك بـ... 👇</div>'; 

    suggestionsToShow.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-suggestion-item';
        itemDiv.innerHTML = `
            <img src="${item.img}" onerror="this.src='logo-bg.png'">
            <h4>${item.name}</h4>
            <span class="price">${item.basePrice} ريال</span>
            <button>أضف +</button>
        `;
        
        itemDiv.querySelector('button').onclick = () => {
            const defaultOption = item.options.length > 0 ? item.options[0] : null;
            addToCart({...item, qty: 1, selectedOption: defaultOption});
            const img = itemDiv.querySelector('img');
            if(typeof flyToCart === 'function') flyToCart(img);
        };

        suggestionsContainer.appendChild(itemDiv);
    });
    }

/* 🔔 نظام الإشعارات الذكي (نسخة موحدة ونظيفة) 🔔 */
/* ================================================= */

async function initSmartPushSystem() {
    const enableBtn = document.getElementById("enableIosPush");
    const helpBtn = document.getElementById("iosHelpBtn");
    
    // فحص المتصفح والنظام
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isStandalone = window.navigator.standalone === true;

    // تهيئة OneSignal والتحقق من حالة الاشتراك
    window.OneSignalDeferred = window.OneSignalDeferred || [];
    window.OneSignalDeferred.push(async function(OneSignal) {
        
        // 1. التحقق: هل المستخدم مشترك حالياً؟
        const isSubscribed = await OneSignal.User.PushSubscription.optedIn;
        
        if (isSubscribed) {
            // إذا كان مشتركاً، نخفي الأزرار تماماً
            if (enableBtn) enableBtn.style.display = "none";
        } else {
            // إذا لم يكن مشتركاً، نظهر الزر المناسب حسب الحالة
            if (isIOS) {
                if (isStandalone && enableBtn) {
                    enableBtn.style.display = "block"; // إظهار زر التفعيل المباشر
                } else if (!isStandalone && helpBtn) {
                    helpBtn.style.display = "inline-flex"; // إظهار زر المساعدة للتثبيت
                }
            }
        }

        // 2. برمجة زر "تفعيل الإشعارات"
        enableBtn?.addEventListener("click", async () => {
            try {
                if (OneSignal.Notifications) {
                    await OneSignal.Notifications.requestPermission();
                    // إخفاء الزر بعد النقر بنجاح
                    enableBtn.style.display = "none"; 
                    alert("شكراً لك! تم طلب إذن الإشعارات بنجاح 🔔");
                }
            } catch (e) {
                console.error("خطأ في نظام الإشعارات:", e);
            }
        });
    });
}

// تشغيل النظام فور جاهزية الصفحة
document.addEventListener("DOMContentLoaded", initSmartPushSystem);
