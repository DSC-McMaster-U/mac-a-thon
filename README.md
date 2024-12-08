# GDSC McMaster U Mac-a-thon Website

Welcome to the GDSC McMaster U Mac-a-thon Website project repository! 👋

## Table of Contents

- [General Info](#general-info)
- [Technologies Used](#technologies-used)
- [Contribution](#contribution)
- [Installation](#installation)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributors](#contributors)

## General Info

This project aims to create a modern website for the annual Mac-a-thon Hackathon presented by McMaster's chapter of Google Developer Student Clubs (GDSC).

### Technologies Used

Below is an overview of the key technologies utilized in this project. Familiarity with these technologies will be beneficial for making contributions:

- **Next.JS**: A framework that provides a seamless development experience.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development, following Material Design principles.
- **Sanity CMS**: A customizable content management system that allows for easy content updates.
- **Jest**: Testing library.
- **GitHub Actions**: CI/CD for automating workflows and deployments.

For more detailed information on each technology, be sure to check out their official documentation.

## Contribution

Everyone in the GDSC McMaster U Chapter is encouraged to contribute to this project! Please take a moment to review our contribution guidelines.

### Contribution Practices

To contribute to the project, follow these steps:

1. **Create a Branch**: Branching can be done directly within Jira by creating a branch from your ticket. This is the easiest way to branch and ensure correct naming conventions. Ensure you branch off from the `main` branch based on your Jira ticket.

2. **Naming the Branch**: Contribution should mainly be made through feature branches off of main. Name your branch using the prefix `feature/` followed by the auto-generated ticket name.

   ```
   feature/YOUR_TICKET_NAME
   ```

3. **Commit Changes**: Make your changes and commit them to your branch. Be sure to write clear and descriptive commit messages.

4. **Push Changes**: Once you are ready, push your changes to the remote repository.

5. **Test Changes**: Before you are ready to deliver your changes they must be tested. Write a suite of unit tests using Jest to ensure the correctness of your code.

6. **Create a Pull Request**: After pushing changes, create a pull request to merge your feature branch into `main`. Be sure to link your Jira ticket in the pull request description.

7. **Review and Merge**: Your pull request will be reviewed by a team member. Once approved, your changes will be merged into the `main` branch.

8. **Delete Branch**: After your changes have been merged, delete your feature branch to help keep our repository clean.

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**: Clone the repository to your local machine using the following command:
   ```bash
   git clone
   ```
2. **Install Dependencies**: Navigate to the project directory and install the project dependencies using npm:

   ```bash
   npm install
   ```

3. **Start the Development Server**: Run the following command to start the development server:

   ```bash
   npm run dev
   ```

4. **Open in Browser**: Visit `http://localhost:3000` in your browser to view the project.

## Deployment

Deployment tbd...

3. **Open in Browser**: Visit the provided URL to view the live deployment of the project.

## Project Structure

The project structure is organized as follows:

```bash
website
├── app
│   ├── __tests__
│   │   ├── ...
│   ├── components
│   │   ├── ...
│   ├── studio
│   │   ├── ...
│   ├── global.css
│   ├── icon.svg
│   └── layout.tsx
│   └── page.tsx
├── sanity
│   ├── lib
│   │   ├── ...
│   ├── schemaTypes
│   │   ├── ...
│   ├── env.ts
│   └── structure.ts
├── types
│   └── sanity.ts
├── .env.local
├── .eslint.json
├── .gitignore
├── jest.config.ts
├── jest.setup.ts
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── sanity.cli.ts
├── sanity.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Contributors

- [Aidan Froggatt](https://www.aidanfroggatt.com)
