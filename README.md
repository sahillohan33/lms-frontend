# LMS Frontend

### Setup Instruction

1  Clone the project

```
    git clone https://github.com/sahillohan33/lms-frontend.git
```
2 Move into the directory
 ```
    cd lms-frontend
```
3 install dependencies
...
    npm i
...
4 run the server

...
    npm run dev
...
5 Setup instructions for tailwind
 '''Tail wind official instruction doc'''

1 Install tailwindcss
...
    npm install -D tailwindcss postcss autoprefixer
...    
2  Create tailwind config file
...
    npx tailwindcss init
...
3  Add file extensions to tailwind config file in the contents property

    ...
        "./src/**/*.{html,js,jsx,ts,tsx}", "./index.html",
    ...

4 Add the tailwind directives at the top of the ```index.css``` file
    ...
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    ...

5 Add the following details in the plugin property of tainwind config
    ...
        [require("daisyui"), require("@tailwindcss/line-clamp")]
    ...

#Adding plugins and dependencies
 ...
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
...
