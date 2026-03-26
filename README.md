## Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Design Decisions](#design-decisions)
- [Test Coverage](#test-coverage)

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Playwright](https://playwright.dev/) | ^1.43.0 | Browser automation & API testing |
| TypeScript | ^5.4.0 | Type-safe test authoring |
| Node.js | ≥ 18 | Runtime |

---

## Prerequisites

- **Node.js** ≥ 18 ([download](https://nodejs.org/))
- **npm** ≥ 9 (bundled with Node.js)
- A **GitHub Personal Access Token** *(optional, but recommended to avoid API rate limiting)*

---

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/qa-automation-challenge.git
cd qa-automation-challenge

# 2. Install Node dependencies
npm install

# 3. Install Playwright browsers
npx playwright install --with-deps
```

---

## Project Structure

```
qa-automation-challenge/
│
├── pages/                          # Page Object Models (POM)
│   └── timePage.ts             # time.is website – all locators & actions
│
├── tests/
│   ├── web/
│   │   └── time.spec.ts         # Task I – Web UI tests
│   └── api/
│       └── github.spec.ts      # Task II – GitHub API tests
│
├── utils/
│   └── date-time-helpers.ts        # Time format validation & date utilities
|
├── api/
│   ├── githubClient.ts        # Reusable GitHub API wrapper
│
├── test-data/
│   └── cities.json                # Centralised test data
│
├── playwright.config.ts            # Playwright configuration (browsers, timeouts, reporters)
├── tsconfig.json                   # TypeScript compiler options
├── .gitignore
└── README.md
```

---

## 🧪 Test Coverage

### ✅ Task I – Web UI (time.is)
- Search for a city
- Validate city name
- Validate current date
- Validate time format (HH:MM:SS)
- Validate time is progressing

### ✅ Task II – GitHub API
- Retrieve repositories
- Calculate total open issues
- Sort repositories by last updated
- Identify most watched repository
- Validate responses with assertions

## 📊 Reporting
```bash
npx playwright show-report
```