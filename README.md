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

### Install Dependencies

```bash
npm install
```

### Create Environment File

Example:

```env
VITE_API_BASE_URL=http://localhost:8080
```

Environment values:

| Key               | Description          |
| ----------------- | -------------------- |
| VITE_API_BASE_URL | Backend API base URL |

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

### Feature Structure

Every business feature should follow this structure:

```text
features/
└── user/
    ├── components/
    ├── dto.ts
    ├── service.ts
    └── page.tsx
```

Responsibilities:

| File       | Responsibility                 |
| ---------- | ------------------------------ |
| components | Feature-specific UI components |
| dto.ts     | Request and response models    |
| service.ts | API communication              |
| page.tsx   | Feature page                   |

Guidelines:

* Feature-specific code should stay inside the feature directory.
* Shared components belong in `components/`.
* Shared types belong in `types/`.
* Shared utilities belong in `utils/`.

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

Feature-specific state should remain inside React components.

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

Do not call fetch directly from pages or components.

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

### Theme

Material UI theme is configured in:

```text
theme/theme.ts
```

All application-wide theme customization should be centralized in the theme directory.

### Typed Redux Hooks

Use typed Redux hooks.

```ts
const dispatch = useAppDispatch();

const value = useAppSelector(
  (state) => state.auth,
);
```

Do not use:

```ts
useDispatch<any>()
useSelector<any>()
```

### Project Structure

```text
src/
├─ app/
│  └─ providers.tsx
├─ components/
├─ features/
│  └─ health/
├─ hooks/
├─ i18n/
│  ├─ index.ts
│  └─ locales/
├─ pages/
│  └─ HomePage.tsx
├─ services/
│  └─ http.ts
├─ store/
│  └─ index.ts
├─ theme/
│  └─ theme.ts
├─ types/
│  └─ api.ts
├─ utils/
├─ App.tsx
├─ index.css
└─ main.tsx
```
