export const quizzes = [
  {
    _id: "1",
    quizName: "Javascript",
    quizImage: "/images/javascript.png",

    questions: [
      {
        questionNumber: 1,
        question: "Javascript is an _______ language?",
        options: [
          "Object-Oriented",
          "Object-Based",
          "Procedural",
          "None of the above",
        ],
      },
      {
        questionNumber: 2,
        question:
          "Which of the following keywords is used to define a variable in Javascript ?",
        options: ["var", "let", "Both A and B", "None of the above"],
      },
      {
        questionNumber: 3,
        question:
          "Which of the following methods is used to access HTML elements using Javascript ?",
        options: [
          "getElementById()",
          "getElementByClassName()",
          "Both A and B",
          "None of the above",
        ],
      },
      {
        questionNumber: 4,
        question:
          "Upon encountering empty statements, what does the Javascript Interpreter do ?",
        options: [
          "Throws an error",
          "Ignores the statement",
          "Gives a warning",
          "None of the above",
        ],
      },
      {
        questionNumber: 5,
        question:
          "Which of the following methods can be used to display data in some form using Javascript ?",
        options: [
          "document.write()",
          "console.log()",
          "window.alert()",
          "All of the above",
        ],
      },
    ],
    answers: ["a", "c", "c", "b", "d"],
  },
  {
    _id: "2",
    quizName: "CSS",
    quizImage: "/images/css.png",
    questions: [
      {
        questionNumber: 1,
        question: "How can we change the background color of an element ?",
        options: [
          "background-color",
          "color",
          "Both A and B",
          "None of the above",
        ],
      },
      {
        questionNumber: 2,
        question: "How can we change the text color of an element ?",
        options: [
          "background-color",
          "color",
          "Both A and B",
          "None of the above",
        ],
      },
      {
        questionNumber: 3,
        question: "In how many ways can CSS be written in ?",
        options: ["1", "2", "3", "4"],
      },
      {
        questionNumber: 4,
        question:
          "What type of CSS is generally recommended for designing large web pages ?",
        options: ["Inline", "Internal", "External", "None of the above"],
      },
      {
        questionNumber: 5,
        question: "How can we select an element with a specific ID in CSS ?",
        options: ["#", ".", "^", "None of the above"],
      },
    ],
    answers: ["a", "b", "c", "c", "a"],
  },
  {
    _id: "3",
    quizName: "React",
    quizImage: "/images/react.png",
    questions: [
      {
        questionNumber: 1,
        question:
          "In React what is used to pass data to a component from outside ?",
        options: ["setState", "render with arguments", "props", "PropTypes"],
      },
      {
        questionNumber: 2,
        question:
          "Which of the following API is a MUST for every ReactJS component ?",
        options: [
          "getIntialState",
          "render",
          "renderComponent",
          "None of the above",
        ],
      },
      {
        questionNumber: 3,
        question:
          "What is a good use case for using a function while rendering a dynamic list of items ?",
        options: [
          "If we need to compute a value based on properties of items in the loop.",
          "None. Functions should not be used while rendering a dynamic list.",
          "To make the code shorter",
          "None of the above",
        ],
      },
      {
        questionNumber: 4,
        question: "Which method is not part of ReactDOM ?",
        options: [
          "ReactDOM.destroy()",
          "ReactDOM.hydrate()",
          "ReactDOM.createPortal()",
          "ReactDOM.findDOMNode()",
        ],
      },
      {
        questionNumber: 5,
        question: "What is a controlled input element ?",
        options: [
          "An input element with the controlled flag",
          "An input element whose value is being controlled by a component’s state",
          "An input element that can only accept a list of characters",
          "An input element that is controlled by the value of another input element",
        ],
      },
    ],
    answers: ["c", "b", "a", "b", "b"],
  },
  {
    _id: "4",
    quizName: "Java",
    quizImage: "/images/java.jpeg",
    questions: [
      {
        questionNumber: 1,
        question: "Select the valid statement. ?",
        options: [
          "char[] ch = new char(5)",
          "char[] ch = new char[5]",
          "char[] ch = new char()",
          "char[] ch = new char[]",
        ],
      },
      {
        questionNumber: 2,
        question:
          "When an array is passed to a method, what does the method receive? ?",
        options: [
          "The reference of the array",
          "A copy of the array",
          "Length of the array",
          "Copy of first element",
        ],
      },
      {
        questionNumber: 3,
        question: "Arrays in java are- ?",
        options: [
          "Object references",
          "Objects",
          "Primitive data type",
          "None",
        ],
      },
      {
        questionNumber: 4,
        question: "When is the object created with new keyword ?",
        options: [
          "At Run time",
          "At Compile time",
          "Depends on the code",
          "None",
        ],
      },
      {
        questionNumber: 5,
        question:
          "Identify the keyword among the following that makes a variable belong to a class,rather than being defined for each instance of the class. ?",
        options: ["final", "static", "volatile", "abstract"],
      },
    ],
    answers: ["b", "a", "b", "a", "b"],
  },
];
