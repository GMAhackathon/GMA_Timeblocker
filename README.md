# GMA_Timeblocker
An app for students and parents of Green Magnet Academy to schedule time for use of a washer and dryer, and sign up for a provided meal.

## Package Installations
### Install Node.js
Install Node.js 12.14.0 LTS from (https://nodejs.org/en)

### Update (1/2/2020) 2:22 AM EST
all packages that are currently used should be installed by just using the following command:
`npm install`
If this does not work for you use the "Install all needed packages in 2 bundles below".

### Install all needed packages in 2 bundles
`npm install -D prettier eslint eslint-config-prettier parcel-bundler babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react`

`npm install react react-dom react-router-dom react-redux babel-cli express @emotion/core @emotion/babel-preset-css-prop styled-components`

### Or install them one at a time
`npm install -D prettier`

`npm install -D eslint eslint-config-prettier`

`npm install -D parcel-bundler`

`npm install react react-dom`

`npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

`npm install -D eslint-plugin-react-hooks`

`npm install --save react-router-dom`

`npm install -D babel-eslint @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @babel/preset-react`

`npm install react-redux`

`npm install babel-cli express`

`npm install @emotion/core @emotion/babel-preset-css-prop`

`npm install --save styled-components`

### Install VS Code Extensions
*	Prettier- Code formatter
*	 ESLint
*	 vscode-styled-components.

### Save VS Code Preferences for Prettier
 *Go to File-->Preferences-->Settings
    * Search for format on save and select the radio button
    * Search for Prettier:Require Config and select the radio button
    
### Running the Development Server
This project uses Parcel, it starts out of the index.html (we can change this) that links to the index.js where the root and App is.  To run the dev server run the following:
`npm run dev'
It operates on http://localhost:1234/
## ====Git Flow====
`git checkout -b [your_personal_branch_here] `

`git add . `

`git commit -m "here goes the message"`

`git push origin [your_personal_branch_here] `

`git checkout master`

`git fetch`

`git pull origin master`

**======Check for conflicts======**

`git pull origin [your_personal_branch_here] `

**======Check for conflicts======**

`git push origin master`

`git checkout [your_personal_branch_here] `

`git pull origin master`

