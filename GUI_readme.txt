To run our project:

1)
npx create-react-app *folderName*

2)
cd into folder

Installing Dependencies:

npm install react-router-dom
npm install swiper

3)
Delete src folder and replace with uploaded src files

4)
Create a file called ".env" on the root level of the folder.
As in literally JUST ".env" not "something.env"
The same folder as package.json
Write out:
REACT_APP_API_KEY= efb5b3c76c397ec945b8c4fbf8b7f16b

and save.

4.1)
If you cannot create a file called ".env" due to system limitations
try creating the file in a code editor like VsCode

4.2)
worst comes to worst go into the files:
/pages/Favourites.js
/components/SearchBar.js

and set the 
"const API_KEY ="
line manually to the api key.
should look like:
    const API_KEY = "efb5b3c76c397ec945b8c4fbf8b7f16b"

5)
npm start
