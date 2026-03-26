
---

## ⚙️ Tech Stack

- Playwright
- TypeScript
- Node.js

---

## ✨ Key Design Decisions

### 1. Page Object Model (POM)
- Encapsulates UI logic
- Improves readability and maintainability

### 2. API Client Layer
- Separates API logic from tests
- Reusable across test cases

### 3. Custom Fixtures
- Centralized setup logic
- Supports authentication reuse

### 4. Session Reuse (Storage State)
- Avoid repeated login
- Faster test execution
- Reduces flakiness

### 5. Stable Assertions
- Using Playwright auto-wait (`expect(locator)`)
- Avoid hard waits

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

---

## 🚀 Setup Instructions

```bash
npm install

npx playwright install
```

## ▶️ Run Tests

Run all tests
```bash
npx playwright test
```

Run specific test
```bash
npx playwright test tests/web/time.spec.ts
```

Run in headed mode
```bash
npx playwright test --headed
```

## 📊 Reporting
```bash
npx playwright show-report
```