let conversationHistory = [];

let productCatalog = [
     {
    id: 1,
    name: "HP 14",
    description: "HP Laptop, Windows 11, Intel Celeron Dual-Core Processor Up to 2.60GHz, 4GB RAM, 64GB SSD",
    category: "Electronics",
    keywords: ["Laptop", "HP", "Windows", "Budget", "Affordable", "Entry-level]"],
    imgSrc: "https://m.media-amazon.com/images/I/61G9Yr3n6rL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    link: "https://amzn.to/3pZuSGS",
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B09VRX9YVW&asins=B09VRX9YVW&linkId=4252901e4acbfe3f08b6fe9298d49567&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
  },

  {
    id: 2,
    name: "A Promised Land",
    description: "A riveting, deeply personal account of history in the making—from the president who inspired us to believe in the power of democracy",
    category: "Book",
    keywords: ["Autobiography", "Memoir", "Obama", "Politics", "History", "Book", "Books"],
    link: "https://amzn.to/44DDzFX",
    imgSrc: "https://m.media-amazon.com/images/I/41N0ibSKKyL.jpg",
    iframeSrc: 'iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B08HGH9JMF&asins=B08HGH9JMF&linkId=31bc9acd5458bd273e0493dae75d0e2f&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
  },

  {
    id: 3,
    name: "SAMSUNG Galaxy S23 Ultra",
    description: "SAMSUNG Galaxy S23 Ultra Cell Phone, Factory Unlocked Android Smartphone, 512GB, 200MP Camera, Night Mode, Long Battery Life, S Pen, US Version, 2023, Green",
    category: "Electronics",
    keywords: ["Smartphone", "Android", "Samsung", "Flagship", "High-end", "Camera", "Photography" ],
    link: 'https://amzn.to/43FiSs7',
    imgSrc: 'https://m.media-amazon.com/images/I/71HtN4qqLZL._AC_SX679_.jpg',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0BLP2Y34S&asins=B0BLP2Y34S&linkId=75c6743950b4b0b23d743e90b446cad6&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
  },

 {
    id: 4,
    name: "Apple iPhone 14 Pro",
    description: "Apple iPhone 14 Pro, 256GB, Space Black - Unlocked",
    category: "Electronics",
    keywords: ["Smartphone", "iOS", "iPhone", "Apple", "Flagship", "Premium", "Camera" ],
    link:'https://amzn.to/3K6cbrN',
    imgSrc:'https://m.media-amazon.com/images/I/41al5-lNvML._AC_SX679_.jpg',
    iframeSrc: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0BN96CCM6&asins=B0BN96CCM6&linkId=3e40d472a07883e2d1e61aaa34110cd1&show_border=true&link_opens_in_new_window=true"></iframe>`,  // Add the iframe source link here.
  },

  {
    id: 5,
    name: "Apple 2020 MacBook Air Laptop M1",
    description: "Apple Laptop ",
    category: "Electronics",
    keywords: ["Laptop", "MacBook", "Apple", "Ultrabook", "Portable", "M1", "Fast" ],
    link:'https://amzn.to/43xf4ZT',
    imgSrc:'https://m.media-amazon.com/images/G/01/appcore/laptop/nov2020npi/AMZ_FamilyStripe_MacBook_Air_Retina_M1._CB416900047_.png',
    iframeSrc: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B08N5LNQCX&asins=B08N5LNQCX&linkId=30b7af2e3cdf82c46d14161e9f44250d&show_border=true&link_opens_in_new_window=true"></iframe>`,  // Add the iframe source link here.
  },

  {
    id: 6,
    name: "Google Pixel 7 Pro",
    description: "Google Pixel 7 Pro - 5G Android Phone - Unlocked Smartphone with Telephoto/Wide Angle Lens, and 24-Hour Battery - 128GB - Hazel ",
    category: "Electronics",
    keywords: ["Smartphone", "Android", "Google", "Pixel", "Flagship", "Camera", "Assistant" ],
    link:'https://amzn.to/3Qr9t4v',
    imgSrc:'https://m.media-amazon.com/images/I/71jmjOxxE3L._AC_SX679_.jpg',
    iframeSrc: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0BCQXCFNT&asins=B0BCQXCFNT&linkId=d0ec331cdd6bc80ab439ef31643e0041&show_border=true&link_opens_in_new_window=true"></iframe>`,  // Add the iframe source link here.
  },

  {
    id: 7,
    name: "Dell 2023 XPS 17",
    description: "Dell 2023 XPS 17 9720 Laptop 17 Touchscreen UHD+ Display 14-Core 12th Intel Core i7-12700H NVIDIA RTX 3060 6GB GDDR6 32GB DDR5 2TB NVMe SSD Thunderbolt 4 WiFi 6E Backlit KB FP Reader Windows 10 Pro",
    category: "Electronics",
    keywords: ["Laptop", "Windows", "Dell", "Performance", "Powerful", "XPS"],
    imgSrc: 'https://m.media-amazon.com/images/I/61JnE2TPyuL._AC_SX679_.jpg',
    link:'https://amzn.to/3KbqICV',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0BXKPY8BR&asins=B0BXKPY8BR&linkId=b0995049712f6ad858f925f05185ffe2&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
},

 {
    id: 8,
    name: "Bose QuietComfort 35 (Series II)",
    description: "Bose QuietComfort 35 (Series II) Wireless Headphones, Noise Cancelling - Black",
    category: "Electronics",
    keywords: ["Headphones", "Noise Cancelling", "Wireless", "Bluetooth", "Bose", "Audio"],
    imgSrc: 'https://m.media-amazon.com/images/I/81+jNVOUsJL._AC_SX679_.jpg',
    link:'https://amzn.to/44DnuQz',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B079NM341X&asins=B079NM341X&linkId=650a72f07d61317be7cf35b3d4625ba9&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

{
    id: 9,
    name: "Sony WH-1000XM4",
    description: "Sony WH-1000XM4 Wireless Premium Noise Canceling Overhead Headphones with Mic for Phone-Call and Alexa Voice Control, Black WH1000XM4",
    category: "Electronics",
    keywords: ["Headphones", "Noise Cancelling", "Wireless", "Bluetooth", "Sony", "Audio"],
    imgSrc: 'https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_SX679_.jpg',
    link:'https://amzn.to/3rHGEq9',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0863TXGM3&asins=B0863TXGM3&linkId=7488936e2a6f65f33ac80a240aab4d19&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

{
    id: 10,
    name: "Fitbit Charge 5 Advanced Health & Fitness Tracker",
    description: "Fitbit Charge 5 Advanced Health & Fitness Tracker with Built-in GPS, Stress Management Tools, Sleep Tracking, 24/7 Heart Rate and More, Black/Graphite, One Size (S &L Bands Included)",
    category: "Electronics",
    keywords: ["Fitness Tracker", "Fitbit", "Health", "Workout", "Heart Rate"],
    imgSrc: 'https://m.media-amazon.com/images/I/61YXnbbNrgL._AC_SX679_.jpg',
    link:'https://amzn.to/3rywZSq',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B09BXQ4HMB&asins=B09BXQ4HMB&linkId=638e899ca4faf61debb3317c4dc33f40&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
},

  {
    id: 11,
    name: "Garmin 010-02063-00 Forerunner 945",
    description: "Garmin 010-02063-00 Forerunner 945, Premium GPS Running/Triathlon Smartwatch with Music, Black",
    category: "Watch,",
    keywords: ["GPS", "Watch", "Fitness", "Tracker", "Outdoors", "Garmin"],
    imgSrc: "https://m.media-amazon.com/images/I/51sFI9cmBjL._AC_SX679_.jpg",
    link: "https://amzn.to/44BbzD2",
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B07QTVMWVL&asins=B07QTVMWVL&linkId=c4ae0d91fcb5f908493490fe3df6a780&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
  },

  {
    id: 12,
    name: "Sony A8H 65-inch TV",
    description: "Sony A8H 65-inch TV: BRAVIA OLED 4K Ultra HD Smart TV with HDR and Alexa Compatibility - 2020 Model",
    category: "Electronics,",
    keywords: ["TV", "Television", "Sony", "OLED", "Smart", "TV", "4K", "Ultra HD", "Home", "Theater"],
    link: "https://amzn.to/3rMdyWj",
    imgSrc: "https://m.media-amazon.com/images/I/61F0MXKMLwL._AC_SX679_.jpg",
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B084KQLVKH&asins=B084KQLVKH&linkId=4f126b175f3529de8055060a6d30ff01&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
  },

  {
    id: 13,
    name: "LG C2 Series 65-Inch Class OLED evo Smart TV",
    description: "LG C2 Series 65-Inch Class OLED evo Smart TV OLED65C2PUA, 2022 - AI-Powered 4K TV, Alexa Built-in, Dark Silver",
    category: "Electronics,",
    keywords: ["TV", "Television", "LG", "OLED", "Smart TV", "4K", "HDR", "Home Theater"],
    link: 'https://amzn.to/3rBXiat',
    imgSrc: 'https://m.media-amazon.com/images/I/91vAUToHkcL._AC_SX679_.jpg',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B09RMRNSBF&asins=B09RMRNSBF&linkId=d0a8608f99b537cd0bbb180316abd83b&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
  },

 {
    id: 14,
    name: "SAMSUNG 65-Inch Class QLED Q80A Series",
    description: "SAMSUNG 65-Inch Class QLED Q80A Series - 4K UHD Direct Full Array Quantum HDR 12x Smart TV with Alexa Built-in and 6 Speaker Object Tracking Sound - 60W, 2.2.2CH (QN65Q80AAFXZA, 2021 Model)",
    category: "Electronics,",
    keywords: ["TV", "Television", "Samsung", "QLED", "Smart TV", "4K", "UHD", "Home Theater"],
    link:'https://amzn.to/44By2Qp',
    imgSrc:'https://m.media-amazon.com/images/I/71ihMv1q-kL._AC_SX679_.jpg',
    iframeSrc: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B08WF4XDMF&asins=B08WF4XDMF&linkId=b3d1c2ac87aab855494f442e8125241d&show_border=true&link_opens_in_new_window=true"></iframe>`,  // Add the iframe source link here.
  },

  {
    id: 15,
    name: "JBL Flip 5",
    description: "JBL Flip 5 Portable Waterproof Wireless Bluetooth Speaker - Black Camo",
    category: "Bluetooth,",
    keywords: ["Bluetooth", "Speaker", "Portable", "Waterproof", "JBL", "Wireless", "Audio"],
    link:'https://amzn.to/3QaExVR',
    imgSrc:'https://m.media-amazon.com/images/I/71pj2FuruML._AC_SX679_.jpg',
    iframeSrc: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B085L33PPB&asins=B085L33PPB&linkId=9e27d19c29dd1ef11eee2d58da5fe43b&show_border=true&link_opens_in_new_window=true"></iframe>`,  // Add the iframe source link here.
  },

  {
    id: 16,
    name: "Sonos One (Gen 2)",
    description: "Sonos One (Gen 2) - Voice Controlled Smart Speaker with Amazon Alexa Built-in (Black)",
    category: "Electronics, ",
    keywords: ["Smart Speaker", "Sonos", "Wireless", "Voice Assistant", "Home Audio"],
    link:'https://amzn.to/3Y24hFS',
    imgSrc:'https://m.media-amazon.com/images/I/71dJ0HXTD0L._AC_SX679_.jpg',
    iframeSrc: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B07NJPXRBC&asins=B07NJPXRBC&linkId=3fc541cc8143b4d7c87c9f9dadc27e4e&show_border=true&link_opens_in_new_window=true"></iframe>`,  // Add the iframe source link here.
  },

  {
    id: 17,
    name: "Echo Dot (5th Gen, 2022 release)",
    description: "Echo Dot (5th Gen, 2022 release) with clock | Smart speaker with clock and Alexa | Glacier White",
    category: "Music,",
    keywords: ["Smart Speaker", "Amazon", "Alexa", "Assistant", "Home Audio"],
    imgSrc: 'https://m.media-amazon.com/images/I/41gquF8+uwL._AC_SX679_.jpg',
    link:'https://amzn.to/3rBYmLv',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B09B8VN8YQ&asins=B09B8VN8YQ&linkId=722dcfaebf49e26ef5e99ea22e53ae0e&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
},

 {
    id: 18,
    name: "Apple AirPods Pro",
    description: "Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling, Adaptive Transparency, Personalized Spatial Audio, MagSafe Charging Case, Bluetooth Headphones for iPhone",
    category: "Headphones,",
    keywords: ["Earbuds", "Headphones", "Wireless", "Bluetooth", "Apple", "Noise Cancelling"],
    imgSrc: 'https://m.media-amazon.com/images/I/617I3mDGmTL._AC_SX679_.jpg',
    link:'https://amzn.to/3Q5JM9l',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0BDHWDR12&asins=B0BDHWDR12&linkId=e8f77798894324c2f1205ced1a68dea4&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

{
    id: 19,
    name: "SAMSUNG Galaxy Buds 2 Pro",
    description: "SAMSUNG Galaxy Buds 2 Pro True Wireless Bluetooth Earbuds w/ Noise Cancelling, Hi-Fi Sound, 360 Audio, Comfort Ear Fit, HD Voice, Conversation Mode, IPX7 Water Resistant, US Version, Graphite",
    category: "Headphones,",
    keywords: ["Earbuds", "Headphones", "Wireless", "Bluetooth", "Samsung", "Noise Cancelling"],
    imgSrc: 'https://m.media-amazon.com/images/I/61Qqg+T8nsL._AC_SX679_.jpg',
    link:'https://amzn.to/3O3HbtR',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0B2SH4CN6&asins=B0B2SH4CN6&linkId=564abbbb210d0e00090cd48db8905be8&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 



{
    id: 21,
    name: "Nespresso Vertuo Coffee and Espresso Machine",
    description: "Nespresso Vertuo Coffee and Espresso Machine by De'Longhi with Milk Frother, Silver",
    category: "Coffee,",
    keywords: ["Coffee Machine", "Espresso", "Nespresso", "Single Serve"],
    imgSrc: "https://m.media-amazon.com/images/I/71r0o7Wu4iL._AC_SX679_.jpg",
    link: "https://amzn.to/3Y0ZHYx",
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B072X1MCK9&asins=B072X1MCK9&linkId=ce0e2a5f71650700887f62e2d2233139&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
  },

  {
    id: 22,
    name: "Dyson V11",
    description: "Dyson V11 Torque Drive Cordless Vacuum Cleaner, Blue",
    category: "Cleaning,",
    keywords: ["Vacuum", "Cordless", "Dyson", "Cleaning", "Home Appliance"],
    link: "https://amzn.to/3DnL6ge",
    imgSrc: "https://m.media-amazon.com/images/I/61xW5y39hjL._AC_SY879_.jpg",
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B07NX8XBMP&asins=B07NX8XBMP&linkId=c927e14bd335080c3564d9f8abe9381c&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
  },

  {
    id: 23,
    name: "iRobot Roomba i7+",
    description: "iRobot Roomba i7+ (7550) Robot Vacuum with Automatic Dirt Disposal - Empties Itself for up to 60 Days, Wi-Fi Connected, Smart Mapping, Works with Alexa, Ideal for Pet Hair, Carpets, Hard Floors",
    category: "Cleaning,",
    keywords: ["Robot Vacuum", "Smart Home", "Cleaning", "Automation"],
    link: 'https://amzn.to/3ryMN7I',
    imgSrc: 'https://m.media-amazon.com/images/I/61i8b1-5kcL._AC_SX679_.jpg',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B07GNPDMRP&asins=B07GNPDMRP&linkId=bdbc1472505923a5d2c5398aba2ea55c&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
  },

 {
    id: 24,
    name: "Philips Sonicare ProtectiveClean",
    description: "Philips Sonicare ProtectiveClean 6100 Rechargeable Electric Power Toothbrush, White, HX6877/21",
    category: "Toothbrush",
    keywords: ["Electric Toothbrush", "Oral Care", "Philips", "Dental Hygiene"],
    link:'https://amzn.to/3Y6rlmN',
    imgSrc:'https://m.media-amazon.com/images/I/81t25XAr0LL._SX679_.jpg',
    iframeSrc: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B078GVDB18&asins=B078GVDB18&linkId=86520694e429a86f81c99be2a6fbb34e&show_border=true&link_opens_in_new_window=true"></iframe>`,  // Add the iframe source link here.
  },

  {
    id: 25,
    name: "KitchenAid Artisan Series 5",
    description: "KitchenAid Artisan Series 5 Quart Tilt Head Stand Mixer with Pouring Shield KSM150PS, Aqua Sky ",
    category: "Kitchen",
    keywords: ["Stand Mixer", "Baking", "KitchenAid", "Kitchen Appliance"],
    link:'https://amzn.to/3OsCV8O',
    imgSrc:'https://m.media-amazon.com/images/I/71KiX7LRTML._AC_SX679_.jpg',
    iframeSrc: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B005PMEHBG&asins=B005PMEHBG&linkId=367a1e3f3f546b6bd512f6c195b4d992&show_border=true&link_opens_in_new_window=true"></iframe>`,  // Add the iframe source link here.
  },

  {
    id: 26,
    name: "Ninja BL660 Professional Compact Smoothie & Food Processing Blender",
    description: "Ninja BL660 Professional Compact Smoothie & Food Processing Blender, 1100-Watts, 3 Functions -for Frozen Drinks, Smoothies, Sauces, & More, 72-oz.* Pitcher, (2) 16-oz. To-Go Cups & Spout Lids, Gray ",
    category: "Kitchen",
    keywords: ["Blender", "Smoothies", "Food Processor", "Kitchen Appliance"],
    link:'https://amzn.to/44S8cb3',
    imgSrc:'https://m.media-amazon.com/images/I/81wMNCy6zhL._AC_SX679_.jpg',
    iframeSrc: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B00939FV8K&asins=B00939FV8K&linkId=b3c448637654fa74cd0c21f5fcefd437&show_border=true&link_opens_in_new_window=true"></iframe>`,  // Add the iframe source link here.
  },

  {
    id: 27,
    name: "Canon EOS Rebel T7 DSLR Camera",
    description: "Canon EOS Rebel T7 DSLR Camera with 18-55mm Lens | Built-in Wi-Fi | 24.1 MP CMOS Sensor | DIGIC 4+ Image Processor and Full HD Videos",
    category: "Camera",
    keywords: ["Mirrorless", "Camera", "Canon", "Photography", "Video", "Vlogging"],
    imgSrc: 'https://m.media-amazon.com/images/I/61BKYlNqH6L._AC_SX679_.jpg',
    link:'https://amzn.to/46YMSSy',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B07C2Z21X5&asins=B07C2Z21X5&linkId=0a5674367702fd9b9210b748eaeb5831&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
},

 {
    id: 28,
    name: "Sony PlayStation Dualsense",
    description: "Sony PlayStation Dualsense Wireless Controller - PlayStation 5",
    category: "Controller",
    keywords: ["Controller", "PlayStation", "Sony", "Dualsense", "PS5"],
    imgSrc: 'https://m.media-amazon.com/images/I/41UK+fp9jcS._SX342_SY445_.jpg',
    link:'https://amzn.to/473wOyP',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B08GSL374K&asins=B08GSL374K&linkId=285f538a6efde5c9eef4e2eda971e70f&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

{
    id: 29,
    name: "DarkWalker ShotPad FPS Touchpad",
    description: "DarkWalker ShotPad FPS Touchpad Game Controller for PS5 / PS4 / PC/Steam/Xbox One/Xbox Series S|X",
    category: "Electronics",
    keywords: ["DarkWalker ShotPad", "FPS Touchpad Controller", "Multi-platform Controller", "Versatile Game Controller", "Gaming Touchpad", "ShotPad Controller", "PS5 Touchpad Controller", "Xbox Touchpad Controller", "PC Touchpad Controller", "Steam Compatible Controller"],
    imgSrc: 'https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_SX679_.jpg',
    link:'https://amzn.to/3Orfxbr',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0BRZZFPKW&asins=B0BRZZFPKW&linkId=efc06589575d8e734fe6744fa287a56f&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

{
    id: 30,
    name: "Bug Zapper for Indoor Outdoor",
    description: "Bug Zapper for Indoor Outdoor, Rechargeable Mosquito Zapper with 3600V High Powered, Electric Pest Control Insect Fly Zapper Can Attract Gnats, Mosquitoes, Flies, Moths for Home, Patio (Purple)",
    category: "Outdoors",
    keywords: ["Bug Zapper", "Insect Zapper", "Mosquito Control", "Pest Control", "Outdoor", "Indoor"],
    imgSrc: 'https://m.media-amazon.com/images/I/71IsDyWgyXL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    link:'https://amzn.to/3QjdIi6',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B09PHP2452&asins=B09PHP2452&linkId=638d4976a3e9906381fe5f26dcbb5c78&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
},

  {
    id: 31,
    name: "Nikon D5600 24.2MP DSLR",
    description: "Nikon D5600 24.2MP DSLR Camera with 18-55mm VR and 70-300mm Dual Lens (Black) – (Renewed) (18-55mm VR & 70-300mm 2 Lens Kit)",
    category: "Camera",
    keywords: ["DSLR", "Camera", "Nikon", "Photography", "Beginner"],
    imgSrc: "https://m.media-amazon.com/images/I/61tr-ZJHtXL._AC_SX679_.jpg",
    link: "https://amzn.to/3O9XVjj",
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B074PZ52CG&asins=B074PZ52CG&linkId=4fd5676c7d3192e9b0bc94f21e939fef&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
  },

  {
    id: 32,
    name: "GoPro HERO10 Black",
    description: "GoPro HERO10 Black - Waterproof Action Camera with Front LCD and Touch Rear Screens, 5.3K60 Ultra HD Video, 23MP Photos, 1080p Live Streaming, Webcam, Stabilization",
    category: "Electronics",
    keywords: ["Action", "Camera", "GoPro", "Video", "Waterproof", "Travel"],
    link: "https://amzn.to/450TfTq",
    imgSrc: "https://m.media-amazon.com/images/I/71WXYgkEktL._AC_SX679_.jpg",
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B09QD75B95&asins=B09QD75B95&linkId=30ea8947edb6accb05c3eec02e20a6a1&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
  },

  {
    id: 33,
    name: "DJI Mavic Air 2 Fly More Combo",
    description: "DJI Mavic Air 2 Fly More Combo - Drone Quadcopter UAV with 48MP Camera 4K Video 8K Hyperlapse 1/2 CMOS Sensor 3-Axis Gimbal 34min Flight Time ActiveTrack 3.0 Ocusync 2.0, Gray",
    category: "Electronics",
    keywords: ["Drone", "Quadcopter", "Aerial", "Photography", "Video", "DJI"],
    link: 'https://amzn.to/471fESt',
    imgSrc: 'https://m.media-amazon.com/images/I/51jI9cFewvL._AC_SX679_.jpg',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B086XCGMN7&asins=B086XCGMN7&linkId=cd7dce5a20b68803282d53c7b8c870db&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
  },

 {
    id: 34,
    name: "PlayStation 5",
    description: "PlayStation 5 Console (PS5)",
    category: "Electronics",
    keywords: ["Gaming", "Console", "PlayStation", "Sony", "PS5"],
    link:'https://amzn.to/44zB0ES',
    imgSrc:'https://m.media-amazon.com/images/I/51eOztNdCkL._SX522_.jpg',
    iframeSrc: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0BCNKKZ91&asins=B0BCNKKZ91&linkId=ed4a0bc664bc82e328262380db652615&show_border=true&link_opens_in_new_window=true"></iframe>`,  // Add the iframe source link here.
  },

  {
    id: 35,
    name: "Xbox Series X",
    description: "Xbox Series X & Game Pass Ultimate: 3 Months Membership Digital Code",
    category: "Electronics",
    keywords: ["Gaming", "Console", "Xbox", "Microsoft"],
    link:'https://amzn.to/3pUL2l7',
    imgSrc:'https://m.media-amazon.com/images/I/51wea7ifCaL._SX522_.jpg',
    iframeSrc: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0C7DMQWLH&asins=B0C7DMQWLH&linkId=66d45a10d709b5c16437c525f43d7c05&show_border=true&link_opens_in_new_window=true"></iframe>`,  // Add the iframe source link here.
  },

  {
    id: 36,
    name: "Nintendo Switch – OLED",
    description: "Nintendo Switch – OLED Model w/ Neon Red & Neon Blue Joy-Con",
    category: "Electronics",
    keywords: ["Gaming", "Console", "Nintendo", "Switch", "Portable"],
    link:'https://amzn.to/3KbPdj8',
    imgSrc:'https://m.media-amazon.com/images/I/61ej-k9IszL._SX522_.jpg',
    iframeSrc: `<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B098RL6SBJ&asins=B098RL6SBJ&linkId=85af61b52bf9713ced0e28b9a26f9759&show_border=true&link_opens_in_new_window=true"></iframe>`,  // Add the iframe source link here.
  },

  {
    id: 37,
    name: "Oculus Quest 2",
    description: "Oculus Quest 2 — 256GB Video — White Advanced All-in-One Virtual Reality Headset — 3D Cinematic Sound — for Family Holiday VR Gaming Entertainment — 16 Feet USB Type-C Link Cable",
    category: "Electronics",
    keywords: ["Virtual", "Reality", "VR", "Oculus", "Gaming", "Immersive"],
    imgSrc: 'https://m.media-amazon.com/images/I/61ePn1DzRzL._AC_SX679_.jpg',
    link:'https://amzn.to/3Y9ZXEG',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B09FPKDJCP&asins=B09FPKDJCP&linkId=07ecb1067b201bb975733b51f25f7e4f&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
},

 {
    id: 38,
    name: "ASUS ROG Strix G15 (2022) Gaming Laptop",
    description: "ASUS ROG Strix G15 (2022) Gaming Laptop, 15.6 300Hz IPS FHD Display, NVIDIA GeForce RTX 3050, AMD Ryzen 7 6800H, 16GB DDR5, 1TB SSD, RGB Keyboard, Windows 11 Home, G513RC-IS74,Gray",
    category: "Laptop",
    keywords: ["Gaming", "Laptop", "ASUS", "PC", "Gaming", "Portable"],
    imgSrc: 'https://m.media-amazon.com/images/I/71pWcOnLL+L._AC_SX679_.jpg',
    link:'https://amzn.to/3O5vEKw',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0B9RZCFSR&asins=B0B9RZCFSR&linkId=db909ce981a8aafd7ee552e15361c383&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

{
    id: 39,
    name: "SAMSUNG Galaxy Tab S8 11",
    description: "SAMSUNG Galaxy Tab S8 11” 128GB WiFi 6E Android Tablet, Large LCD Screen, S Pen Included, Ultra Wide Camera, Long Lasting Battery, US Version, 2022, Silver",
    category: "Tablet",
    keywords: ["Android", "Tablet", "Samsung", "Entertainment", "Portable"],
    imgSrc: 'https://m.media-amazon.com/images/I/81wWoHhfbjL._AC_SX679_.jpg',
    link:'https://amzn.to/3KcrWxu',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B09NQN1SW9&asins=B09NQN1SW9&linkId=1a1dd2b070302c4d5fa610cafe83d97b&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

{
    id: 40,
    name: "Apple iPad Pro 12.9-inch",
    description: "Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display, 256GB, Wi-Fi 6E, 12MP front/12MP and 10MP Back Cameras, Face ID, All-Day Battery Life – Space Gray",
    category: "Electronics",
    keywords: ["Tablet", "Apple", "iOS", "Productivity", "Creative"],
    imgSrc: 'https://m.media-amazon.com/images/I/71brAk7Sc2L._AC_SX679_.jpg',
    link:'https://amzn.to/44G0Zuv',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0BJLFC67L&asins=B0BJLFC67L&linkId=f000c07fcfe19525ddc50e01759b5bf2&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
},

 {
    id: 41,
    name: "Kindle Paperwhite",
    description: "Kindle Paperwhite (8 GB) – Now with a 6.8 inch display and adjustable warm light – Black",
    category: "Book",
    keywords: ["eReader", "Kindle", "Amazon", "Books", "Reading"],
    imgSrc: 'https://m.media-amazon.com/images/I/51QCk82iGcL._AC_SX679_.jpg',
    link:'https://amzn.to/3O6UoSz',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B08KTZ8249&asins=B08KTZ8249&linkId=cb65529c72f2bfdaf10ee6a7e7cbd301&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

 {
    id: 42,
    name: "Logitech MX Master 3S",
    description: "Logitech MX Master 3S - Wireless Performance Mouse with Ultra-fast Scrolling, Ergo, 8K DPI, Track on Glass, Quiet Clicks, USB-C, Bluetooth, Windows, Linux, Chrome - Graphite",
    category: "Mouse",
    keywords: ["Computer Mouse", "Logitech", "Wireless", "Ergonomic", "Mouse"],
    imgSrc: 'https://m.media-amazon.com/images/I/61ni3t1ryQL._AC_SX679_.jpg',
    link:'https://amzn.to/478Dxrd',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B09HM94VDS&asins=B09HM94VDS&linkId=65d51d58d0021b2c487e93c1ba91acd5&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

 {
    id: 43,
    name: "Microsoft Surface Pro 9",
    description: "Microsoft Surface Pro 9 (2022), 13 2-in-1 Tablet & Laptop, 5G Connectivity, Thin & Lightweight, Faster SQ3 Processor for Multi-Tasking, 8GB RAM, 128GB Storage with Windows 11, Platinum",
    category: "Tablet",
    keywords: ["2-in-1", "Tablet", "Laptop", "Windows", "Portable"],
    imgSrc: 'https://m.media-amazon.com/images/I/510WsB778+L._AC_SX679_.jpg',
    link:'https://amzn.to/4725hhh',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B0B9Q5HF3S&asins=B0B9Q5HF3S&linkId=e778a7e374b71a39ab8cfcea4282eefe&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

 {
    id: 44,
    name: "Bose SoundLink Flex",
    description: "Bose SoundLink Flex Bluetooth Portable Speaker, Wireless Waterproof Speaker for Outdoor Travel - Black",
    category: "Music",
    keywords: ["Bluetooth Speaker", "Portable", "360 Sound", "Outdoor"],
    imgSrc: 'https://m.media-amazon.com/images/I/81EqEzFjSHL._AC_SX679_.jpg',
    link:'https://amzn.to/473dou0',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B099TJGJ91&asins=B099TJGJ91&linkId=448f2847e1d466c1ab1bbf5b74cd19a2&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

 {
    id: 45,
    name: "Ring Video Doorbell Pro",
    description: "Ring Video Doorbell Pro – Upgraded, with added security features and a sleek design (existing doorbell wiring required)",
    category: "Home Security",
    keywords: ["Smart Doorbell", "Home Security", "Camera", "Ring"],
    imgSrc: 'https://m.media-amazon.com/images/I/710CmPyum8L._SX522_.jpg',
    link:'https://amzn.to/3Y7C1l3',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B08M125RNW&asins=B08M125RNW&linkId=349a3ba108e8e30c907dfe112ac90a95&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

 {
    id: 46,
    name: "Nest Learning Thermostat",
    description: "Google Nest Learning Thermostat - Programmable Smart Thermostat for Home - 3rd Generation- Works with Alexa - White",
    category: "Smart Home",
    keywords: ["Smart Thermostat", "Home Automation", "Energy Savings"],
    imgSrc: 'https://m.media-amazon.com/images/I/71DjbVCD+dL._AC_SX679_.jpg',
    link:'https://amzn.to/43IUHZM',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B01MXC366M&asins=B01MXC366M&linkId=40da1d6e59951b8d27209585c23fa215&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

 {
    id: 47,
    name: "Fitbit Sense Advanced Smartwatch",
    description: "Fitbit Sense Advanced Smartwatch with Tools for Heart Health, Stress Management & Skin Temperature Trends, White/Gold, One Size (S & L Bands Included)",
    category: "Smartwatch",
    keywords: ["Fitness Tracker", "Smartwatch", "Health", "Fitbit"],
    imgSrc: 'https://m.media-amazon.com/images/I/71G5Dz-lUDL._AC_SX679_.jpg',
    link:'https://amzn.to/3O6sWEx',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B08DFLG5SP&asins=B08DFLG5SP&linkId=7f0521fd4134439ab3bbfab7f5da3f9e&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

 {
    id: 48,
    name: "Anker Portable Charger, 313 Power Bank",
    description: "Anker Portable Charger, 313 Power Bank (PowerCore Slim 10K) 10000mAh Battery Pack with USB-C (Input Only) and PowerIQ Charging Technology for iPhone, Samsung Galaxy, and More.",
    category: "Battery",
    keywords: ["Portable Charger", "Battery Pack", "USB Charging"],
    imgSrc: 'https://m.media-amazon.com/images/I/71rC6tBu0NL._AC_SX679_.jpg',
    link:'https://amzn.to/3q4RBBu',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B07QXV6N1B&asins=B07QXV6N1B&linkId=aca3110707738e07cf871da2671c0ae5&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

 {
    id: 49,
    name: "TP-Link Mesh WiFi",
    description: "TP-Link Deco AX3000 WiFi 6 Mesh System(Deco X55) - Covers up to 6500 Sq.Ft. , Replaces Wireless Router and Extender, 3 Gigabit ports per unit, supports Ethernet Backhaul (3-pack)",
    category: "Networking",
    keywords: ["Mesh WiFi System", "Networking", "Home WiFi", "TP-Link"],
    imgSrc: 'https://m.media-amazon.com/images/I/517H+UHnQ6L._AC_SX679_.jpg',
    link:'https://amzn.to/3KdWvmA',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B09PRB1MZM&asins=B09PRB1MZM&linkId=370bc8d03e6f4ba6ae4c1d9c669a5384&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

 {
    id: 50,
    name: "WD External Hard Drive",
    description: "WD 2TB Elements Portable HDD, External Hard Drive, USB 3.0 for PC & Mac, Plug and Play Ready - WDBU6Y0020BBK-WESN",
    category: "Computers",
    keywords: ["External Hard Drive", "Storage", "Backup", "Portable"],
    imgSrc: 'https://m.media-amazon.com/images/I/41fJs1xw6bL._AC_SX679_.jpg',
    link:'https://amzn.to/472uzfd',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B06W55K9N6&asins=B06W55K9N6&linkId=07d52699a7ec6f32a5755906c614203f&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

{
    id: 51,
    name: "4 Pack Privacy Door Knobs",
    description: "KONIGEEHRE 4 Pack Privacy Door Knobs Stain Nickel Interior Passage Door Lock Keyless Round Dummy Lockset for Bedroom Bathroom, Hardwares & Instruction Included (4, Satin Nickel)",
    category: "Home Decor",
    keywords: ["Interior door knobs", "Bedroom door knobs", "Bathroom door knobs", "Lockable door knobs", "Indoor privacy knobs", "Door hardware", "Door accessories", "Home security", "Home improvement", "Door knobs with locks", "Residential door knobs", "Privacy lockset", "Keyless door knobs", "Bed and bath door knobs", "Doorknobs for privacy", "Secure door knobs", "Interior door hardware", "Home decor", "Home safety", "Privacy door handles"]
    imgSrc: 'https://m.media-amazon.com/images/I/71n39rcwjNL._AC_SX679_PIbundle-4,TopRight,0,0_SH20_.jpg',
    link:'https://amzn.to/3OClykP',
    iframeSrc: '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=chattychat-20&language=en_US&marketplace=amazon&region=US&placement=B08QJ6WZ64&asins=B08QJ6WZ64&linkId=95b57644632b1ace0eac3e865430dd41&show_border=true&link_opens_in_new_window=true"></iframe>',  // Add the iframe source link here.
}, 

// Add more products here...

let previouslyRecommended = [];

window.onload = function() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: 'chatty-d2053.apps.googleusercontent.com',
        });
    });
};

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId());
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);
}

function recommendProduct(userMessage) {
    let lowerCaseMessage = userMessage.toLowerCase();

    let maxKeywordMatches = 0;
    let bestMatchProduct = null;

    for (let product of productCatalog) {
        if (previouslyRecommended.includes(product)) {
            continue;
        }

        let keywordMatches = 0;

        let categories = product.category.split(" ");
        let categoryMatch = categories.some(category => lowerCaseMessage.includes(category.trim().toLowerCase()));
        if (categoryMatch) keywordMatches++;

        for (let keyword of product.keywords) {
            if (lowerCaseMessage.includes(keyword.toLowerCase())) keywordMatches++;
        }

        if (keywordMatches > maxKeywordMatches) {
            maxKeywordMatches = keywordMatches;
            bestMatchProduct = product;
        }
    }

    if (bestMatchProduct) {
        previouslyRecommended.push(bestMatchProduct);
        if (previouslyRecommended.length > 5) previouslyRecommended.shift();
        return bestMatchProduct;
    } 

    let randomIndex = Math.floor(Math.random() * productCatalog.length);
    return productCatalog[randomIndex];
}

async function chatGptQuery(query) {
    conversationHistory.push({role: "user", content: query});
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo', // Specify the model
            messages: conversationHistory
        })
    });
    const data = await response.json();
    return data.choices && data.choices.length > 0 ? data.choices[0].message.content : '';
}

async function sendMessage() {
    const userText = document.getElementById('messageInput').value;
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML += `<div class="chat-bubble user"><p>${userText}</p></div>`;
    chatWindow.innerHTML += '<div class="jumping-dots-loader"><span></span> <span></span> <span></span></div>';
    
    const aiResponse = await chatGptQuery(userText);
    chatWindow.removeChild(document.querySelector('.jumping-dots-loader'));
    chatWindow.innerHTML += `<div class="chat-bubble ai"><p>${aiResponse}</p></div>`;

    let recommendedProduct = recommendProduct(userText);
    if(recommendedProduct) {
        chatWindow.innerHTML += `<div class="chat-bubble ai"><p>I recommend checking out this product: 
        <a href="${recommendedProduct.link}" target="_blank"><img src="${recommendedProduct.imgSrc}">${recommendedProduct.name}</a></p></div>`;
    }

    chatWindow.scrollTop = chatWindow.scrollHeight;
    document.getElementById('messageInput').value = '';
}

// Adding event listener for Send Button
document.getElementById('sendButton').addEventListener('click', sendMessage);

// Adding event listener for Enter key
document.getElementById('messageInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevents the default action of the enter key (creating a new line)
        sendMessage();
    }
});


