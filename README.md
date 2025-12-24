# Conductor Frontend

Frontend application for the Conductor project, a modern web application built with React + TypeScript + Vite.

## 📋 Project Overview

Conductor Frontend is a frontend application for an educational management system, supporting multi-role user authentication and permission management (Admin, Professor, Student).

## 🛠️ Tech Stack

- **Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router 7.11.0
- **HTTP Client**: Axios 1.13.2
- **Code Quality**: ESLint 9.39.1 + TypeScript ESLint

## ✨ Features

- 🔐 User authentication and login
- 👤 Multi-role permission management (Admin, Professor, Student)
- 📊 Dashboard interface
- 🔒 Token-based authentication
- 🎯 TypeScript type safety
- ⚡ Fast development experience with Vite

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start at `http://localhost:5173` (Vite default port).

### Build for Production

```bash
npm run build
```

The build output will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
conductor_frontend/
├── public/              # Static assets
│   └── vite.svg
├── src/
│   ├── api/            # API interfaces
│   │   ├── auth.ts     # Authentication APIs
│   │   └── client.ts   # Axios client configuration
│   ├── pages/          # Page components
│   │   ├── Login.tsx   # Login page
│   │   └── Dashboard.tsx # Dashboard page
│   ├── App.tsx         # Root component
│   ├── main.tsx        # Application entry point
│   └── router.tsx      # Route configuration
├── index.html          # HTML template
├── package.json        # Project configuration
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── eslint.config.js    # ESLint configuration
```

## ⚙️ Configuration

### API Base URL

The API base URL is configured in `src/api/client.ts`, with the default value:

```typescript
baseURL: "http://localhost:9916"
```

To modify it, edit the file or use environment variables.

### Environment Variables

The project supports environment variable configuration using `.env` files:

- `.env` - Default environment variables
- `.env.local` - Local environment variables (not tracked by Git)
- `.env.production` - Production environment variables
- `.env.development` - Development environment variables

### Authentication

- Token is stored in `localStorage` with the key `token`
- All API requests automatically include `Authorization: Bearer <token>` in the request headers
- After successful login, the token is automatically saved and the user is redirected to the Dashboard

## 🔧 Development Guide

### Adding New Pages

1. Create a new page component in the `src/pages/` directory
2. Add the route configuration in `src/router.tsx`

Example:

```typescript
// src/pages/NewPage.tsx
export default function NewPage() {
  return <div>New Page</div>;
}

// src/router.tsx
import NewPage from './pages/NewPage';

export const router = createBrowserRouter([
  // ... other routes
  { path: '/new-page', element: <NewPage /> },
]);
```

### Adding API Endpoints

Create or edit API files in the `src/api/` directory, using the configured `client` instance:

```typescript
import client from './client';

export const getData = () => {
  return client.get('/api/endpoint');
};
```

## 📦 Build and Deployment

### Build

```bash
npm run build
```

After building, the `dist/` directory contains all static files that can be deployed to any static file server.

### Deployment Recommendations

- **Nginx**: Configure static file serving with SPA routing support
- **Vercel/Netlify**: Connect Git repository for automatic deployment
- **Docker**: Deploy static files using an Nginx image

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is private.

## 📞 Contact

For questions or suggestions, please open an Issue or contact the project maintainers.

---

**Happy Coding! 🎉**
