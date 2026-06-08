# Frontend

Frontend application built with React, Vite, Redux, Material UI, and i18n.

## Prerequisites

Required software:

* Node.js 22+
* npm

Verify installation:

```bash
node --version
npm --version
```

## Quick Start

Install dependencies:

```bash
npm install
```

Run application:

```bash
npm run dev
```

Application will start at:

```text
http://localhost:5173
```

## Getting Started

### Create Environment File

Example:

```env
VITE_API_BASE_URL=http://localhost:8080
```

Environment values:

| Key               | Description          |
| ----------------- | -------------------- |
| VITE_API_BASE_URL | Backend API base URL |

### Install Dependencies

```bash
npm install
```

### Run Application

```bash
npm run dev
```

### Build Application

```bash
npm run build
```

## Verify Application

Open:

```text
http://localhost:5173
```

Expected result:

```text
K Frontend
Backend status: ok
```

The application should successfully communicate with the backend health endpoint.

---

## Development Reference

### Architecture Flow

```text
Page
    ↓
Feature Service
    ↓
HTTP Client
    ↓
Backend API
```

Example:

```text
HomePage
    ↓
Health Service
    ↓
http.ts
    ↓
GET /healthz
```

### Folder Structure

```text
src/
├─ app/
├─ components/
├─ features/
├─ hooks/
├─ i18n/
├─ pages/
├─ services/
├─ store/
├─ theme/
├─ types/
└─ utils/
```

Responsibilities:

| Folder     | Responsibility            |
| ---------- | ------------------------- |
| app        | Application setup         |
| components | Shared UI components      |
| features   | Business modules          |
| hooks      | Shared custom hooks       |
| i18n       | Translation configuration |
| pages      | Route-level pages         |
| services   | API communication         |
| store      | Redux configuration       |
| theme      | Material UI theme         |
| types      | Shared TypeScript types   |
| utils      | Utility functions         |

---

### Feature Structure

Every business feature should follow this structure:

```text
features/
└── user/
    ├── components/
    ├── dto.ts
    ├── service.ts
    ├── page.tsx
    └── index.ts
```

Responsibilities:

| File       | Responsibility                 |
| ---------- | ------------------------------ |
| components | Feature-specific UI components |
| dto.ts     | Request and response models    |
| service.ts | API communication              |
| page.tsx   | Feature page                   |
| index.ts   | Public exports                 |

Guidelines:

* Feature-specific code should stay inside the feature directory.
* Feature exports should be centralized through `index.ts`.
* Shared components belong in `components/`.
* Shared types belong in `types/`.
* Shared utilities belong in `utils/`.

---

### DTO

DTO is used for request and response models.

Example:

```ts
export type CreateUserRequest = {
  email: string;
};

export type UserResponse = {
  id: number;
  email: string;
};
```

Guidelines:

* Request DTO should represent API requests.
* Response DTO should represent API responses.
* DTO should not contain UI-specific logic.
* DTO should not contain business logic.

---

### State Management

Redux is used only for global application state.

Recommended:

* Authentication
* Authorization
* Theme
* Language

Avoid storing:

* Table data
* Search results
* List pages
* Temporary form state

Feature-specific state should remain inside React components unless there is a clear business requirement.

---

### API Layer

API communication should go through the shared HTTP client.

Flow:

```text
Feature Service
    ↓
http.ts
    ↓
Backend API
```

Example:

```ts
export function getHealth() {
  return http('/healthz');
}
```

Guidelines:

* Do not call `fetch()` directly from pages.
* Do not call `fetch()` directly from components.
* All API communication should go through feature services.

---

### API Contracts

Success response:

```json
{
  "data": {
    "status": "ok"
  }
}
```

Success response with pagination:

```json
{
  "data": [],
  "meta": {
    "pagination": {
      "page": 1,
      "perPage": 20,
      "total": 100,
      "totalPages": 5
    }
  }
}
```

Business error:

```json
{
  "code": "USER_NOT_FOUND",
  "message": "user not found"
}
```

Validation error:

```json
{
  "code": "VALIDATION_ERROR",
  "message": "validation error",
  "errors": [
    {
      "field": "email",
      "message": "email is required"
    }
  ]
}
```

Frontend contracts:

```ts
ApiSuccess<T>
ApiSuccessWithPagination<T>
ApiErrorResponse
ApiValidationErrorResponse
```

---

### Error Handling

API errors are converted into `ApiError`.

Flow:

```text
Backend Error Response
        ↓
http.ts
        ↓
ApiError
        ↓
Feature / Page
```

Example:

```ts
try {
  await getHealth();
} catch (error) {
  if (error instanceof ApiError) {
    logger.error(error.code, error);
  }
}
```

Guidelines:

* Components should not parse raw HTTP responses.
* Components should handle ApiError only.
* API errors should be centralized in the HTTP layer.

---

### Logging

Use the shared logger wrapper.

Example:

```ts
logger.info('load users');
logger.warn('unexpected state');
logger.error('api error', error);
```

Do not use:

```ts
console.log(...);
console.error(...);
```

The logger wrapper allows future integration with:

* Sentry
* Datadog
* Application Insights

---

### Error Boundary

The application is protected by a global React Error Boundary.

Flow:

```text
React Runtime Error
        ↓
Error Boundary
        ↓
logger.error(...)
        ↓
Fallback UI
```

The Error Boundary prevents the application from crashing due to unexpected rendering errors.

Location:

```text
components/error-boundary/
```

---

### Internationalization

Translations are managed through i18next.

Directory structure:

```text
i18n/
├── index.ts
└── locales/
    ├── en.json
    └── th.json
```

Usage:

```tsx
const { t } = useTranslation();

return <div>{t('app.title')}</div>;
```

---

### Theme

Material UI theme is configured in:

```text
theme/theme.ts
```

All application-wide theme customization should be centralized in the theme directory.

---

### Typed Redux Hooks

Use typed Redux hooks.

```ts
const dispatch = useAppDispatch();

const auth = useAppSelector(
  (state) => state.auth,
);
```

Do not use:

```ts
useDispatch<any>();
useSelector<any>();
```

---

### Project Structure

```text
src/
├─ app/
│  └─ providers.tsx
│
├─ components/
│  └─ error-boundary/
│
├─ features/
│  └─ health/
│
├─ hooks/
│  ├─ useAppDispatch.ts
│  └─ useAppSelector.ts
│
├─ i18n/
│  ├─ index.ts
│  └─ locales/
│
├─ pages/
│  └─ HomePage.tsx
│
├─ services/
│  └─ http.ts
│
├─ store/
│  └─ index.ts
│
├─ theme/
│  └─ theme.ts
│
├─ errors/
│  └─ api-error.ts
│
├─ types/
│  └─ api.ts
│
├─ utils/
│  └─ logger.ts
│
├─ App.tsx
├─ main.tsx
└─ index.css
```

---

## Foundation

Implemented:

* React
* Vite
* Redux
* Material UI
* i18n
* Typed Redux Hooks
* HTTP Client
* API Contract
* Error Handling
* Error Boundary
* Logger Wrapper
* Health Feature

Future:

* Notification Strategy
* Form Validation Strategy
* Authentication
* Authorization
