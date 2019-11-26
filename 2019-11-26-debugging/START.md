## 2019-11-26 Debuggging Tutorial
We’re going to debug running code in Chrome from VS Code.

Useful links: https://code.visualstudio.com/Docs/editor/debugging and https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome

Steps:

    1.	Get the simplest ‘app’ written: index.html plus a JS file (see sample below).
    2.	Serve it, so it’s accessible in Chrome at http://localhost:<port>. Think VS Code has something built in, or could use serve (from NPM).
    3.	Load the page in Chrome, look at the devtools console in Chrome and see that the output looks wrong.
    4.	Set a breakpoint in VS Code (could be just inside the add function).
    5.	Reload the page in Chrome to make the code stop in VS Code. Have a look around, inspect the variables and values.
    6.	Fix the code in VS Code, remove the breakpoint, rerun the page.

Other things to try:

    1.	Make the function more complicated!
    2.	Get the debugging working inside a container (see here)

Sample function:

    function add(a, b) {
        const result = a + b;
        const wrong = result + 1;
        return wrong;
    }
    const first = 1;
    const second = 2;
    console.log('result:', first, '+', second, '=', add(1, 2));