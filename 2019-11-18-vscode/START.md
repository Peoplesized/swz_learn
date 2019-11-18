## 2019-11-18-VSCODE Instructions

Three reasons to get better at the keyboard in a code editor:

1.	The less you’re using your brain for the basics (selecting files, finding the right spot, changing text, etc), the more you’ll have left to think about what you’re actually doing (writing clean and simple code that makes a code-base better).
2.	You’ve got 10 fingers and only one mouse pointer, so you can go much faster if you’re typing and not clicking.
3.	You’ll look like a professional programmer who wants to go fast (we’ll get to time and productivity in another session)

Let’s work with VS Code for now - it’s much easier than vim or emacs. We can have a flame war about editors another time.

1.	So, open up a repo, close all the side bars, and use the mouse as little as possible.
2.	Start by taking a look at ⌘K+⌘S (open the keybindings)
3.	Either check the keybindings or set some new ones for:
1.	Go to File..
2.	Go to Symbol in Workspace…
3.	Go Back - try it after you’ve edited something, moved to another file or another line
4.	Search: Find in Files - works with highlighted text
5.	View: Show explorer - instead of using this to pick files, use it to remind yourself of the outline of the project, you should be able to do most things with it closed.
6.	View: Toggle sidebar visibility - to close the sidebar (whether it’s got explorer, debugger, extensions, etc open)
7.	Move line down and Move line up - must be on a line!
8.	Format document - will only notice if not-formatted
9.	View: Move editor into next group
10.	Autofix - only works with yellow-highlighted lint warning where there’s an easy fix, e.g. missing semi-colon
11.	’Add Selection To Next Find Match_ - like cmd+shift+L, but is more careful!
4.	(Take a look at Github-flavoured markdown format for making a table, if you want to make a quick cheat-sheet for the above in the README)
5.	The little keyboard icon in the search box will let you do a reverse search: i.e. it will listen to the keys you press and tell you what shortcut they map to.
6.	After you’ve done all the above, open the command palette (cmd+shift+p), type in part of one of the commands above, and see it get autocompleted, along with its shortcut. Simpler!

Bonus: It’s not perfect, but take a look at the AceJumper extension. You’ll likely need to add a new shortcut to extension.aceJump - I use alt+;