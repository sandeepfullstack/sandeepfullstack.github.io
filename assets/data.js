const monthNames = [
  "-",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const resumeData = {
  title: "SandeepResume",
  name: "Sandeep Kumar (Sr. Software Engineer)",
  designation: "Sr. Software Engineer",
  // name: "Sandeep Kumar",
  contact: {
    email: '<a href="mailto:ladwapanghal@gmail.com">ladwapanghal@gmail.com</a>',
    phone: '<a href="tel:+918685004675">+918685004675</a>',
    linkedin:
      '<a href="https://www.linkedin.com/in/sandeepchoudhari/" target="_blank">linkedin.com/in/sandeepchoudhari</a>',
  },
  summary1:
    "Seasoned Software Engineer with over 9 years of experience in web and software development, specializing in full-stack solutions and cutting-edge technologies. Proficient in Node.js, TypeScript, and modern frameworks like Angular and React for scalable, high-performance applications. Expertise in Web3 integration (Ethereum, Bitcoin, etc.), real-time communication, and microservices. Skilled in Docker, RabbitMQ, MySQL, and MongoDB, with a proven track record in delivering robust software solutions through innovative problem-solving and teamwork.",
  summary: "Software Engineer with over 9 years of experience in developing scalable applications using TypeScript, JavaScript, and Node.js. Proficient in NestJS, Express.js, and microservices architecture. Experienced with MySQL, MongoDB, Docker, Redis, and RabbitMQ. Skilled in integrating third-party services (PayPal, Stripe), cryptocurrencies (BTC, ETH), and real-time communication with Socket.IO. Familiar with GRPC, Web3, Jira, and Git. Adept at delivering high-quality, maintainable solutions in fast-paced environments.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Antier Solutions (Mohali, Punjab, India)",
      dates: "January 2021 - Present",
      details: [
        "Developed and maintained complex applications using Node.js, TypeScript, Express.js, and NestJS.",
        "Implemented real-time features with Socket.IO.",
        "Integrated Web3 technologies for Ethereum, Bitcoin, Ripple, Cardano, and other cryptocurrencies.",
        "Managed event-driven architecture with RabbitMQ.",
        "Containerized applications using Docker.",
        "Utilized Redis for caching and session management.",
        "Collaborated with cross-functional teams to ensure project success.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Dabster SoftTech (Mohali, Punjab, India)",
      dates: "May 2018 - January 2021",
      details: [
        "Designed and implemented scalable applications using Laravel, Node.js, and Angular.",
        "Integrated payment gateways such as Stripe and PayPal.",
        "Developed real-time features with Socket.IO and implemented push notifications.",
        "Managed databases with MySQL and MongoDB.",
        "Enhanced performance and reliability with Redis.",
      ],
    },
    {
      title: "Web Developer",
      company: "Webmob Information Systems Pvt Ltd (Chandigarh, India)",
      dates: "March 2016 - May 2018",
      details: [
        "Developed web applications using Laravel, Node.js, and Socket.IO.",
        "Maintained backend services and databases with MySQL.",
        "Improved user experience and system performance through collaborative projects.",
      ],
    },
    {
      title: "Web Developer",
      company: "CS Soft Solutions Pvt. Ltd. (Mohali, Punjab, India)",
      dates: "August 2015 - January 2016",
      details: [
        "Developed web applications using PHP, CodeIgniter, and Laravel.",
        "Managed database systems with MySQL.",
        "Contributed to the design and implementation of new features.",
      ],
    },
  ],
  education: [
    {
      degree: "MCA(five years integrated course) with first division",
      // degree: "Master of Computer Applications (MCA), 5-Year Integrated(first division)",
      institution: "Guru Jambheshwar University of Science and Technology, Hisar - Haryana (India)<br>",
      dates: "2009 - 2014",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "Node.js",
    "NestJS",
    "Express.js",
    "MySQL",
    "MongoDB",
    "Microservices",
    "Docker",
    "Redis",
    "RabbitMQ",
    "Socket.IO",
    "Web3",
    "Jira",
    "Git",
    "GRPC",
    "Integration (BTC, BCH, ETH, XRP, ADA, LTC, etc.)",
    "Third-party Integration (PayPal, Stripe, push notifications, etc.)",
  ],
  secondarySkills: ["PHP", "CodeIgniter", "Laravel", "React", "Angular"],

  projects: [
    {
      name: "simply-fire",
      link: "http://www.simply-fire.com",
      desc: "This is a app management  and tracking system for mobile app. The app and website tracks app of multiple mobile that register by user.It take information of all installed app in mobile  that how many app installed in your mobile and also ability to compare version of app  .User can lock and unlock  the app of mobile by parental look system .</br><b>Admin Pannel:</b> Admin panel able to check all detail of Institute and its license Detail of enable|desable student.Detail of expire date of student license.<br><b>Institute Pannel:</b> In this panel institute able to check all license detail like that how many license used and unused. Which license use by user and what is expire date of that license .Institute can many order at a time and also it can use discount code that provide by admin and that give discount on license order .Institute can request to admin for free license then admin give some license to the institute for trail use .",
      technology: [
        "CodeIgniter", "Jquery", "Ajax", "Mysql", "Web-services for mobile", "Stripe payment", "Android notification(FCM)", "Apple Notification(Using Pem File)."
      ],
    },
    {
      name: "GrowVocab",
      link: "https://www.growvocab.biz/ ,https://growvocab.com/sadminnew/ ,https://growvocab.com/grow-institutes/",
      desc: "This is educational application for improve the vocab . In this application institute can by license for student after the register . Institute have two option for by license from the admin . 1) Online : by EBS paymet gateway . 2) Check : if Institute don’t want payment by payment gateway that can send check to admin .",
      technology: ["Laravel ", "Jquery", " Ajax", " Mysql", " Web-services for mobile ", "Android notification(FCM)", "Apple Notification(Using Pem File)."],
    },
    {
      name: "Warriors Left Behind",
      link: "https://wlb.us.com",
      desc: "This is commercial application like upwork .It help to proved the work online and also track the provider .If provider accept the request it send the notification by mail and mobile message .</br><b>Provider :</b> In this panel provider can check his  Accepted,Pending,Done,Progress task list.</br><b>User :</b> In this panel user can find any category that he want then he can order to provider . Every time user get notification about task accepted ,start progress and done .",
      technology: ["Laravel", "Jquery", "Ajax", "Mysql", "Web-services for mobile", "Twilio(For mobile messaging)", "Push  notification using(Android : FCM, Ios:Pem)",],
    },
    {
      name: "PinPointAppointment",
      link: "https://pinpointappointment.com/ , https://pinpointappointment.com/admin/",
      desc: "Pin Point Appointment helps cross verify who you set your appointment with by sending a confirmation text to their mobile phone. The individual must respond to your appointment request, input, and download with their identifying information. When they do, Pin Point Appointment records the appointment and locks in on that phone. You can now track and watch their movements to your meeting in ‘real time’. All activity is stored in our secured cloud including who the client or ‘Suspect’ is, along with the route map they took to meet with you.If they don’t verify who they are, or you don’t see them coming; you might think twice before getting out of your car. Pin Point Appointment helps avoid any potential conflicts a predator might want to bring to you by adding another level of protection to your daily routine.</br><b>Admin :</b> Admin can check all information about the appointment  that between the users.</br><b>User :</b> User can add his appointment with any budy and confirmation of the appointment also meeting place.",
      technology: ["CodeIgniter", " Jquery", " Ajax", "Mysql", "Web-services for mobile ", "Twilio(For mobile  messaging)", "Push  notification using(Android : FCM, Ios:Pem)", "Googel map"],
    },
    {
      name: "obersd",
      link: "https://www.obersd.com/",
      desc: "it is similar to uber.</br><b>User</b> : User can ride booking.</br><b>Driver</b>: Driver get the notification of the booking and also driver can chat with user.</br><b>Admin:</b> Admin have all information about the driver and user activity .",
      technology: ["CorePhp ", " Jquery", " Ajax", " Mysql", " Web-services for mobile ", "Twilio(For mobile messaging)", " Push notification using(Android : FCM, Ios:Pem)", "Googel map", " Node js for socket chat"],
    },
    {
      name: "Xmember",
      link: "http://xmember.info/",
      desc: "create profitable adult membership websites.Create highly-profitable, scalable, and customizable adult membership sites like Brazzers, NaughtyAmerica, and RealityKings with xMember! xMember is a versatile and cutting-edge adult CMS that includes advanced membership management, video streaming, payment gateways, and more.</br><b>User :</b> User can watch the video of the model it is paid websites.</br><b>Model :</b> Model can upload her video and also price of the video.</br><b>Admin:</b> Admin have all information about the user and model and also can set the commission on each videos",
      technology: ["Node.js", "Mongo database", "Angular 1.6", "stripe payment gateway"],
    },
    {
      name: "Skillmapia:",
      link: "-",
      desc: "This is commercial application .It help to find the required skill person nearly like plumber,barber,carpenter .</br><b>Provider :</b> In provider panel provider can register and add his skill and also add location .Provider can also on or off his working .when provider will on his working mode that time it will fetch the location and send to the user that required to these provider. </br><b>User :</b> In user panel user can get the all skill that provide by provider .User can select any skill and also set the location in kilometer that time user can view the provider on map and also he can check the list of provider and rating that given by the user.",
      technology: ["CodeIgniter", "Mysql", "Web-services for mobile"],
    },
    {
      name: "Watch-out",
      link: "-",
      desc: "This is social application .It help to send the message on user app if any accident or any problem on the road that time any user can capture the photo of location and also write message about problem that it will send push notification on another user that user come under that aria in 100 meter it will open pop-up and alert to user that this is accident pron aria please be safe on this place .Any user can send the message of any accident. During the register server send the otp code with the help of Twilio for verify user .",
      technology: ["CodeIgniter", "Mysql", "Web-services for mobile", "Twilio(For mobile messaging)", "Push notification using(Android : FCM, Ios:Pem)"],
    },
    // { name: "", link: "", desc: "", technology: [], },
  ]
};
