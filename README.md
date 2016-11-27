# Simple Markdown Web
"Simple Markdown Web" framework was written to make writing
simple websites in markdown format easy. While there are numerous
services that lets you write *.md and convert to html websites, I needed one which would
let me deploy a static website to my own host and without the need to run node.
Essentially, someone can even deploy this static website written entirely in markdown format, to Amazon S3.

# Features
* No need to install node on the server
* Runs on Static file hosting service like Amazon S3
* Simple edit body.md and left.md (to add links) and you have a basic website.
* Users can edit CSS and Javascript directly to further change the look, etc.

# Example of website designed using SimpleMarkdownWeb
[http://PradeepRizal.com/](http://pradeeprizal.com/)

# Usage Instructions
1. Download the code (or zip) from GitHub
1. Edit body.md with your custom information
    * See this [excellent documentation](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) for markdown cheatsheet.
1. If you require a left navigation bar (recommended), edit left.md with navigation links.
    * For example, if one of your main header is called "My Profile", the link you will put in left.md will be "#myprofile"
    * Links will be lowercase, and without spaces. (e.g. #myprofile)
1. Replace profile_pic.jpg with your picture (if desired)
1. Feel free to edit CSS or Javascript as required.
1. Change the title to something more meaningful.

# Troubleshooting
### Running locally
You will probably have problems running this locally without using a webserver of some sort because browsers restrict XHR on local file system (cross-domain).
To fix this, you can install node and use npm to install http-server.

> [Installing Node and NPM](https://docs.npmjs.com/getting-started/installing-node)

> npm install http-server -g

> cd path-to-code

> http-server
