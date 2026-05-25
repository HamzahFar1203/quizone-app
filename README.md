<h1>Quizone App</h1>
This is a self-quizzing app made to be used for quick study sessions, not extended study sessions. As with my last project, the goal of this project is to create the app entirely using HTML, CSS, and JavaScript alone.
<br>
<br>
The planned features for this project include:
<br>
<s><strong>Commit #1.</strong> Home page HTML and CSS</s>
<br>
<s><strong>Commit #2.</strong> Quiz page HTML and CSS</s>
<br>
<s><strong>Commit #3.</strong> Results page HTML and CSS</s>
<br>
<s><strong>Commit #4.</strong> Core quiz functionality</s>
<ol>
    <s><li>Part one</li></s>
    <s><li>Part two</li></s>
    <s><li>Part three</li></s>
</ol>
<strong><i>Development Completed</i></strong>
<br>
<i>Try it:</i> https://hamzahfar1203.github.io/quizone-app/
<br>
<br>
<strong>Figma</strong>
<br>
Figma was used to design each page before beginning development. Figma visual diagrams will be shown alongside the commit results.
<br>
<br>
<hr>
<h2>Commit #1</h2>
With this commit, I wrote out the entire HTML file and the CSS necessary to create a home page that replicated the design I drew up using Figma. The inspiration for the design was the popular digital learning web app, Quizlet. I wanted to go for something simplistic and easy on the eyes. So I chose a dark background and lighter text colors. I also opted for radio buttons so the user can select the correct answer. Due to this choice, customization was a lot more limited; Radio buttons aren't as customizable as I wished. Nonetheless, this was a successful first commit.
<br>
<br>
<img width="1063" height="581" alt="quizone-home-figma-screenshot" src="https://github.com/user-attachments/assets/9fc2ffed-409a-418e-869c-6555000735fe" />
<img width="1017" height="563" alt="quizone-home-page-screenshot" src="https://github.com/user-attachments/assets/17aad58b-0f5b-40d4-baa5-9944912e3e08" />
<br>
<br>
The "Start Quiz" button was added in commit #2. Unfortunately, I forgot to include it in the Figma design. I didn't pay it much attention during the design phase, so I ended up forgetting it. Thankfully, I realized my mistake before starting to work on the contents of commit #2.
<hr>
<h2>Commit #2</h2>
This commit adds the quiz.html page. This is the page that the user is redirected to after clicking "start quiz" on the home page. The questions and answers collected by the form on the home page will be carried over to quiz.html in a JSON stored in the session storage. The user is then administered the quiz. Once all the quiz questions have been answered, the user will be redirected to the results.html page with the quiz results. 
<br>
<br>
<img width="1079" height="587" alt="image" src="https://github.com/user-attachments/assets/a2dad058-8afe-4791-94fc-5336a9d2172f" />
<img width="1019" height="567" alt="image" src="https://github.com/user-attachments/assets/b60a0555-7df4-42ce-b570-79d317f5e310" />
<hr>
<h2>Commit #3</h2>
In commit #3, I've finally added the third and final page for this web app. The results.html page is the page on which the app will show the results of the quiz the user takes on the quiz.html page. When the user finishes their quiz, the score will be saved in session storage. Then, when this page loads, it will take the score from session storage and display it as a sentence in the paragraph tag.
<br>
<br>
<img width="1072" height="583" alt="quizone-resultspage-figma" src="https://github.com/user-attachments/assets/50d86a6b-8b68-4bd0-918d-03ef83fc8aa7" />
<img width="1012" height="569" alt="quizone-resultspage-html" src="https://github.com/user-attachments/assets/20bfe5c8-7e87-488d-82f8-a1f61f7d8d90" />
<br>
<br>
Design choices are subject to change in a later commit, but for now, the buttons will be filled, even though the Figma draft shows them hollow.
<hr>
<h2>Commit #4 - Part One</h2>
Due to the extensive nature of the functionality of this project, I've decided to split it into parts. With part one, I've added the JavaScript necessary to collect user input. I've also implemented defensive programming techniques to make sure the user inputs valid information and doesn't leave any fields empty/unchecked. I've also given the home page a slight update, now showing user advice below the logo and showing the number of questions collected next to the "Start Quiz" button.
<br>
<br>
<img width="1019" height="566" alt="image" src="https://github.com/user-attachments/assets/0080b61e-348b-45fe-bd94-f45430e3e27e" />
<hr>
<h2>Commit #4 - Part Two</h2>
I've added full functionality for the quiz page. On load, the page begins the quiz by rendering the first question and its options. The quiz picks a question at random from the array of questions and displays the question along with its options. When the user selects an option, the app checks the status of that option in the question object. If the status of the option is set to "true", then the user earns a point, and the app moves to the next question. If the option's status is set to "false", then the user doesn't earn a point, and the app moves to the next question. This repeats until the last question. Once the user answers the final question, the app saves the score in session storage and redirects the user to the results page.
<br>
<br>
<hr>
<h2>Commit #4 - Part Three</h2>
With this commit, I've added the final touches and completed the core functionalities for Quizone. I adjusted the design of the results.html page and set up event listeners for the "Start over" and "Retry" buttons. The "Retry" button redirects the user back to the quiz page, where the quiz is then re-administered. The "Start over" button clears session storage using the .clear() method, and then redirects the user to the index.html page so that they may start with a fresh set of quiz questions.
<br>
<br>
<img width="1019" height="570" alt="image" src="https://github.com/user-attachments/assets/3e29735d-c3bc-4ab1-9e2f-b062e49cbf2f" />
<br>
<br>
This is the new look for the results.html page. The buttons were changed to match the index.html page for design consistency. Just like the buttons on the index.html page, when you hover over a button, the background color transitions from deep blue to white, and the button text transitions to the deep blue color. Finally, I chose to move the position of the "Retry" button and increase its size so that it's easier for the user to click, and avoid clicking "start over" by mistake. I made this decision because I believe that if someone does use this app to study, they would probably want to study the questions and answers over and over.
<br>
<hr>
<h1>Concluding Thoughts</h1>
The purpose of this app is to provide its users with an isolated space to study terms and concepts for an upcoming quiz or test, or for general learning purposes. The objective of this project was to learn and develop my skills. To strengthen my understanding of the development workflow, time management, discipline, and programming concepts. With this project, I've incorporated a new tool into my development process, Figma. I learned about Figma not too long before beginning development on Quizone. I wanted to use it to speed up the HTML & CSS part of this project. Choosing to do so has definitely proved to be beneficial for me, and I plan to make Figma a permanent part of my tool set. This was also the first time that I used sessionStorage and JSON. In the past, I did dabble in localStorage, but I hadn't used it effectively, nor did I make it the core mechanic in an app.
<br>
<br>
To summarize what the development process for Quizone looked like: I started by drawing a few sketches of each page in my sketchbook, as well as writing out what my intentions were with developing it. I then wrote down what I planned to be the structure of the question object that would hold each question and its options. This exact structure is what I used in the index.js file. It worked flawlessly. I chose to have a chat with Gemini Live to bounce off a few ideas and figure out how I would store and transfer the users' data across pages. This is where Gemini gave me the idea to use sessionStorage. I then did a little research into the limitations of sessionStorage and how to implement it, and took notes in my sketchbook as needed. Then, I finally began shifting my ideas from my sketchbook into Figma. I drafted a design for each page (index.html, quiz.html, results.html). Once I was satisfied with the preliminary designs, I moved on to coding the HTML & CSS for each. I set the development time for this project to one week, so I scheduled the work accordingly. On day one, I worked on and finished the home/index page's HTML & CSS. On day two, I worked on and finished the quiz page's HTML & CSS. On day three, I worked on and finished the results page's HTML & CSS. On day four, I worked on and finished the JavaScript functionality for the home page, and began working on the quiz page's JS file. I got busy with chores and housework on day five, so I took the day off. On day six, I finished working on the quiz page's JavaScript. Lastly, today, on day seven, I finished the JavaScript for the results page.
<br>
<br>
I chose to dedicate an entire day to work on each piece/feature of the app to manage my time properly so that I don't burn myself out or get into a sort of "writer's block". I found that doing so helped me greatly. Instead of jumping to the next feature right after I finish one, I'd stop working on the project once I was done developing the feature I planned for that day. Compared to the past, where I'd work on a project for hours and hours on end, and end up burning myself out, becoming stressed, and ultimately giving up on the project.
<br>
<br>
This project was beneficial for me in developing my programming, time management, sketching, drafting, and prototyping skills.


















