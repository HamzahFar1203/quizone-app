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
<strong>Commit #4.</strong> Core quiz functionality
    <ol>
      <s><li>Part one</li></s>
      <li>Part two</li>
      <li>Part three</li>
    </ol>
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
















