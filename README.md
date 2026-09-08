# Kulmiye Edu — Frontend

A university & scholarship discovery platform for Somali students.

**Kulmiye** (Somali for "coming together") connects students to universities, programs, degrees, and scholarships in one place.

## Background

Kulmiye Edu was my **first project**, built while I was working as an intern — the place where I learned full-stack delivery end to end, from first commit to production deployment.

## Features

- 🔐 Authentication — sign up / sign in (JWT, protected routes)
- 🏛️ University directory — browse universities and their programs
- 🎓 Scholarships — discover and search program scholarships
- 📊 Dashboard — personalized student dashboard
- 📱 Responsive — Tailwind CSS + Preline UI

## Tech stack

- **Vue 3** (Composition API) + **Vite**
- **Pinia** for state, **Vue Router** for routing
- **Tailwind CSS 3** + **Preline UI** components
- Deployed on **Railway** (Nixpacks + Caddy)

## Backend

See [kulmiye-edu-api](https://github.com/Dev-Moa/kulmiye-edu-api) — Django 4.2 + Django REST Framework.

## Local setup

```bash
npm install
npm run dev
```

Build: `npm run build` · Preview: `npm run preview`

## Status

Actively maintained — next up: program & scholarship search, profile pictures.
