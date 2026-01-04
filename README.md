# Kongju High School Website Renewal Project

This is a Next.js 14 project for the renewal of the Kongju High School website.

## 🚀 Getting Started

If you have downloaded this project from GitHub or transferred it to a new computer, **standard folder structures like `node_modules` and `.next` are intentionally missing.** You must install them first.

### 1. Prerequisites
Make sure you have **Node.js** installed on your system.
(Download: https://nodejs.org/)

### 2. Install Dependencies
Open your terminal (Command Prompt or PowerShell) in this project folder and run:
```bash
npm install
```
*This command downloads all the libraries listed in `package.json` and creates the `node_modules` folder.*

### 3. Run Development Server
To start the website locally:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

## 📦 Building for Deployment

### Vercel Deployment (Recommended)
1. Push this code to a GitHub repository.
2. Login to Vercel and import the repository.
3. Vercel will automatically detect Next.js and deploy it. No extra configuration is needed.

### Firebase Hosting (Static Export)
If you need to deploy to a static host (like Firebase Hosting Standard), run:
```bash
npm run build
```
The build artifacts will be created in the `.next` folder.

---

## 🛠️ Project Structure
- **/src/app**: Contains all pages and routing (App Router).
- **/src/components**: Reusable UI components.
  - `/sections`: Large page sections (Hero, etc.)
  - `/widgets`: Dashboard widgets (NoticeBoard, etc.)
  - `/layout`: Header and Footer.
- **/public**: Static assets (images, fonts).
- **next.config.ts**: Configuration for Next.js (Image optimization settings included).

## ⚠️ Common Issues
- **Images not loading?**
  We have disabled standard image optimization (`unoptimized: true`) in `next.config.ts` to ensure compatibility with external image sources like Unsplash without complex server setup.
