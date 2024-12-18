Ok so just today (9/27/24) was I just able to figure out how to push to github from my terminal, since apparently I configured it weird so it wasn't working for a while. But now it is working so I'm definitely notating how to do that so I don't forget.
1) cd to repository folder and type git add .
2) type git commit -m "insert text here"
3) type git push

This is what my terminal looked like:
(base) gagesmith@Gages-MacBook-Air-5 orbit_game % git add .
(base) gagesmith@Gages-MacBook-Air-5 orbit_game % git commit -m "example 3"
[main 6b8244e] example 3
 1 file changed, 1 insertion(+), 1 deletion(-)
(base) gagesmith@Gages-MacBook-Air-5 orbit_game % git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 301 bytes | 301.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/12gagesmith/orbit_game.git
   593673f..6b8244e  main -> main


Copy pasting some notes from my google doc where I take notes:

Basic commands to use in the terminal:
echo - Output the parameters of the command
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual

Midterm Questions
In the following code, what does the link element do? The <link> tag defines the relationship between the current document and an external resource. The <link> tag is most often used to link to external style sheets or to add a favicon to your website.
In the following code,  what does a div tag do?
In the following code, what is the difference between the #title and .grid selector?
In the following code, what is the difference between padding and margin?
Given this HTML and this CSS how will the images be displayed using flex?
What does the following padding CSS do?
What does the following code using arrow syntax function declaration do?
What does the following code using map with an array output?
What does the following code output using getElementByID and addEventListener?
What does the following line of Javascript do using a # selector?
Which of the following are true? (mark all that are true about the DOM)
By default, the HTML span element has a default CSS display property value of: inline
How would you use CSS to change all the div elements to have a background color of red?
How would you display an image with a hyperlink in HTML?
In the CSS box model, what is the ordering of the box layers starting at the inside and working out? Padding, Border, Margin
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected? document.getElementById("””trouble’s id””").style.color = "green";
What will the following code output when executed using a for loop and console.log?
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green? document.getElementById("byu").style.color = "green";
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading? p, ol, ul>, h2, so forth
How do you declare the document type to be html?
What is valid javascript syntax for if, else, for, while, switch statements?
What is the correct syntax for creating a javascript object?
Is it possible to add new properties to javascript objects?
If you want to include JavaScript on an HTML page, which tag do you use?
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
Which of the following correctly describes JSON? From a Google Search: JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax.
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
Which of the following console command creates a remote shell session?
Which of the following is true when the -la parameter is specified for the ls console command?
Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
Is a web certificate is necessary to use HTTPS. Yes
Can a DNS A record can point to an IP address or another A record. No
Port 443, 80, 22 is reserved for which protocol? 443: https, 80: http, 22: ssh
What will the following code using Promises output when executed?
const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2



Notes for the final:

Default ports for...
HTTP: 80
HTTPS: 443
SSH: 22

HTTP status codes mean...
300: Multiple Choices
400: Bad Request
500: Internal Server Error

The HTTP header content-type allows you to indicate the original media type of a resource before any content encoding is applied.

Secure cookie: Only sent to the server with an encrypted request over the HTTPS protocol
HTTP-only cookie: Blocked from JavaScript and only is included in requests to the domain.
Same-site cookie: Lets you declare whether your cookie is restricted to a first-party or same-site context.

Websocket protocol is intended to provide clients and servers the ability to communicate in real time.

Acronyms...
JSX: JavaScript XML
JS: JavaScript
AWS: Amazon Web Services
NPM: Node Package Manager
NVM: Node Version Manager

useState allows you to add a state to a variable, and update it.

React Hooks are functions that let you "hook into" React state and lifecycle features from within function components. They were introduced in React 16.8 as a way to add state and other React features to functional components without having to convert them to class components.

State hook lets a component "remember" information like user input.
Context hook lets a component receive information from distant parents without passing it as props.
Ref hook lets a component hold some information that isn't used for rendering, like a DOM node or a timeout ID.
Effect hook lets a component connect to and synchronize with external systems.
Performance hooks are a way of skipping unecessary calculations and re-rendering to improve performance.

The package. json holds important information about the project. It contains human-readable metadata about the project (like the project name and description) as well as functional metadata like the package version number and a list of dependencies required by the application.

The fetch function in JavaScript is used to make network requests, primarily to fetch resources from a server, such as data from an API.

Node.js executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.

PM2 runs as a daemon on the server, making sure your app is available 24/7/365. You can check the status, logs, and metrics of your applications, and get an online dashboard.

Vite helps developers build and develop front-end applications more quickly and efficiently. It serves code locally, bundles code for production, provides a fast dev server, etc.