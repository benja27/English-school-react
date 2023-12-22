
<div align="center">
  <!-- <img src="murple_logo.png" alt="logo" width="140"  height="auto" />
  <br/> -->
  <h3><b>README</b></h3>
</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
<!-- - [🙏 Acknowledgements](#acknowledgements) -->
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 English-school <a name="about-project"></a>

> Learn more about our app below:

**English-school** is a online Single Page Application(SPA) for teaching English interactively, by through the generation of random questions and answers. Teachers can filter which kind of questions they want to generate.

this is the original project : https://github.com/benja27/English-school-vanilla

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> Learn more about used technologies below:

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">Tailwind-CSS</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

> Take a sneak peak of the key features below:

- **Filter by categories by selecting a badge**
- **Get a random questions**
- **Click on Show answer to reveal it**


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

> Would you like to see it in action?

- [Live Demo Link](https://benja27.github.io/English-school-react/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

> How to make use of this

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need pre-installed:
- A code editor
- Node
- A terminal

### Setup

open your desired folder in your terminal:

```sh
cd path/to/mmy-folder
```
Clone this repository to your desired folder:

```sh
  git clone git@github.com:benja27/English-school-vanilla.git
```
### Install

Install this project with:

```sh
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  npm run dev
```
### Run tests

To run tests, run the following command:

Not implemented yet.

<!--
Example command:

```sh
  bin/rails test test/models/article_test.rb
```
--->

### Deployment

There are several options for deployment, here we would add some of them:
- Local deployment. 
- Github Pages.
#### Local Deployment

You may run npm run build command to build the app. Then you can just open it on you local 
machine:

```sh
npm run build

```
#### Github Pages

1. Create a `deployment.yml` file in `./github/workflows` with the next content:
```yml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ['deploy/github-pages']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          # Upload dist repository
          path: './docs'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

2. Open your repo in github.com, click on `Settings`, click on `Pages`, and in the section `Build and deployment` under `Source` select `Github Actions`
3. Click on `Enviroments`, click on `github-pages` and then clik on `Add deployment branch or tag rule`, a pop up would be displayed
4. then as a Name pattern enter the name of the branch from which the deployment would be done, in this case is `deploy/github-pages`
5. Now every time you commit to the branch `deploy/github-pages` it will be deployed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

> Let's connect:

👤 **Mariano Mendez**

- GitHub: [@benja27](https://github.com/benja27)
<!-- - Twitter: [@twitterhandle](https://twitter.com/twitterhandle) -->
- LinkedIn: [Mariano Mendez](https://www.linkedin.com/in/benjamendez/)
- Email: [rksnek@gmail.com](rksnek@gmail.com)

👤 **Diego Vidal**

- GitHub: [@Diegogagan2587](https://github.com/Diegogagan2587)
- X: [@dieg02587](https://twitter.com/dieg02587)
- LinkedIn: [Diego Vidal Lopez](https://www.linkedin.com/in/diego-vidal-lopez/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> Some features we are planning to implement

- [ ] **Button to switch Language**
- [ ] **Speaker button**
- [ ] **Authentication**
- [ ] **Splash Screen**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/benja27/English-school-react/issues).

If you wish to contribute to this project, follow these steps:

1. Fork this repository.
2. Create a branch with a descriptive name for your contribution.
3. Make the necessary changes or improvements.
4. Send a pull request to the main branch of the repository.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Do you like this project?

Then please give us a start or share this repo with your colleagues!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

<!-- ## 🙏 Acknowledgments <a name="acknowledgements"></a>

> Give credit to everyone who inspired your codebase.

I would like to thank...

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->

<!-- FAQ (optional) -->

## ❓ FAQ (OPTIONAL) <a name="faq"></a>

> Add at least 2 questions new developers would ask when they decide to use your project.

- **I have some a question that is not on te FAQ, how can I get an answer?**
  - Please send and email to rksnek@gmail.com or submit create an issue. We would answer as soon as we have time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
