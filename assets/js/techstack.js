AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/bootstrap.png",
    //langName: "Flutter",
    langDesc: "<li>Flutter is an open-source UI software development kit (SDK) created by Google. It allows developers to build beautiful and fast native applications for mobile, web, and desktop platforms using a single codebase</li>",
  },
  {
    langImage: "assets/images/techstack-page/Kotlin_Icon.png",
    //langName: "Kotlin",
    langDesc: "<li>Kotlin is a versatile programming language known for its concise syntax, strong type checking, and seamless integration with existing Java code.</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    //langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    //langName: "C++",
    langDesc: "<li>C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or C with Classes</li>",
  },
  {
    langImage: "assets/images/techstack-page/RN_logo.png",
    //langName: "React Native",
    langDesc: "<li>React Native is an open-source framework for building mobile applications using JavaScript and React. It allows developers to create cross-platform apps that run natively on both iOS and Android devices, providing a native-like user experience.</li>",
  },
  {
    langImage: "assets/images/techstack-page/Dart_logo.png",
    //langName: "Dart",
    langDesc: "<li>Dart is Google's modern language for building mobile, web, and desktop apps with simplicity, performance, and cross-platform capabilities.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    //angName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${''}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
