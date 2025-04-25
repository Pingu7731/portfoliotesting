export const navItems = [
  { name: "關於我", link: "#about" },
  { name: "作品集", link: "#projects" },
  { name: "聯絡方式", link: "#contact" },
];

export const gridItems = [
  {
    id: 2,
    title: "我會中文，英文，馬來文和一些粵語。溝通上不太會有障礙",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "各種框架的技術",
    description: "我想要透過練習提升",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 1,
    title: "我注重于團隊溝通，樂於討論和分享想法",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/github.jpg",
    spareImg: "/grid.svg",
  },

  {
    id: 5,
    title: "想要在前端設計裏找到更多的樂趣",
    description: "在各種作品裏",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "想要Email聯絡我嗎?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Wordle Clone",
    des: "使用flutter開發的Wordle遊戲克隆版",
    img: "/WordleClone.png",
    iconLists: ["/flutter.svg", "/dart.svg"],
    link: "https://github.com/Pingu7731/WordleClone/releases/tag/v1.0",
  },
  {
    id: 2,
    title: "Expenses Tracker",
    des: "買東西后，記得記錄你的消費記錄！",
    img: "/expensestracker.png",
    iconLists: ["/flutter.svg", "/dart.svg"],
    link: "https://github.com/Pingu7731/ExpensesTracker/releases/tag/v1.0",
  },
  {
    id: 3,
    title: "Pomodoro Timer",
    des: "使用這個番茄鐘跟創建待辦事項來幫助你更有效率的工作",
    img: "/pomodoro.png",
    iconLists: ["/vue.svg", "/tail.svg", "/ts.svg", "vite.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Simple Weather App",
    des: "用Flutter 跟 AccuWeather API 開發的天氣應用程式,讓你知道你的地區的天氣跟溫度是多少",
    img: "/weather1.png",
    iconLists: ["/flutter.svg", "/dart.svg"],
    link: "https://github.com/Pingu7731/SimpleWeatherApp/releases",
  },
  {
    id: 5,
    title: "Weight Tracker",
    des: "一個簡單的Vue練習，使用Vue3+Vite+JavaScript開發",
    img: "/weighttracker.png",
    iconLists: ["/vue.svg", "/js.svg", "vite.svg"],
    link: "https://github.com/Pingu7731/VuePrac",
  },
];

export const testimonials = [];

export const companies = [];

export const workExperience = [
  {
    id: 1,
    // title: "曾跟著隊伍代表學校參加各項比賽",
    // desc: "參加過PUPC決賽，TOPC,NCPC",
    title: "曾跟著隊伍代表學校參加各項比賽 ",
    desc: "參加過PUPC決賽, TOPC, NCPC, 在隊伍中負責提供解題思路跟翻譯題目並判斷題目的難度",
    className: "md:col-span-2 text-left",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "學校工讀生",
    desc: "在學校幫忙教授們處理活動，協助教授們完成一些活動的事項。確保學校活動的順利進行",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
  {
    id: 3,
    title: "新光三越 添好運",
    desc: "擔任外場服務員。主要工作内容為確認客人的需求并且提供他們服務。與同事溝通，確保餐廳的各個事項都能順利進行",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Pingu7731",
  },
  {
    id: 2,
    img: "/gdrive.svg",
    link: "https://drive.google.com/drive/folders/1VgdRHOAgmjCwkw_YFM0oBCpnsdNtR-c9?usp=sharing",
  },
];
