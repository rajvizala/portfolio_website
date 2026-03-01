# Deployment Guide - Rajvi Zala Portfolio

This guide walks you through deploying your portfolio to the web step by step. No prior experience with deployment or Next.js is assumed.

---

## Part 1: Understanding the Basics

### What is deployment?

Deployment means putting your website on the internet so anyone can visit it. Right now your site runs only on your computer (localhost). After deployment, it will have a public URL like `https://your-portfolio.vercel.app`.

### What is Next.js?

Next.js is the framework your portfolio is built with. It turns your code into a website that loads quickly and works well on mobile and desktop.

### What is Vercel?

Vercel is a hosting platform made by the creators of Next.js. It is free for personal projects and designed to work with Next.js with minimal setup.

---

## Part 2: Prerequisites

Before you start, make sure you have:

1. **Node.js installed** - Check by opening a terminal and typing:
   ```
   node --version
   ```
   If you see a version number (e.g. v20.10.0), you are good. If not, download it from [nodejs.org](https://nodejs.org).

2. **A GitHub account** - Sign up at [github.com](https://github.com) if you do not have one.

3. **Your portfolio code** - The project folder (`portfolio-website`) on your computer.

---

## Part 3: Build Your Site Locally (Test First)

Before deploying, ensure your site runs correctly on your machine:

1. Open a terminal (Command Prompt, PowerShell, or Terminal).
2. Navigate to your project folder:
   ```
   cd "C:\Users\Rajvi Zala\Desktop\portfolio-website"
   ```
3. Install dependencies (only needed once, or after pulling updates):
   ```
   npm install
   ```
4. Build the project:
   ```
   npm run build
   ```
5. If the build succeeds (no red errors), run the dev server to preview:
   ```
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser.
7. Stop the server when done: press `Ctrl + C` in the terminal.

---

## Part 4: Push Your Code to GitHub

Vercel deploys from GitHub. You need to upload your code there first.

### Step 4.1: Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in.
2. Click the **+** icon (top right) and select **New repository**.
3. Fill in:
   - **Repository name**: `portfolio-website` (or any name you like)
   - **Description**: "Personal portfolio" (optional)
   - **Visibility**: Public
   - Do NOT check "Add a README" or "Add .gitignore" (your project already has them)
4. Click **Create repository**.

### Step 4.2: Initialize Git and push (if not already done)

1. Open a terminal in your project folder:
   ```
   cd "C:\Users\Rajvi Zala\Desktop\portfolio-website"
   ```
2. Initialize Git (only if you have not done this before):
   ```
   git init
   ```
3. Add all files:
   ```
   git add .
   ```
4. Create the first commit:
   ```
   git commit -m "Initial commit: portfolio website"
   ```
5. Rename the default branch to main (if needed):
   ```
   git branch -M main
   ```
6. Add your GitHub repository as the remote (replace `YOUR_USERNAME` with your GitHub username and `portfolio-website` with your repo name):
   ```
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
   ```
7. Push your code:
   ```
   git push -u origin main
   ```
8. When asked for credentials, use your GitHub username and a **Personal Access Token** (not your password). To create one:
   - GitHub → Settings → Developer settings → Personal access tokens → Generate new token
   - Give it a name, select the `repo` scope, and copy the token.

---

## Part 5: Deploy on Vercel

### Step 5.1: Sign up and import

1. Go to [vercel.com](https://vercel.com).
2. Click **Sign Up** and choose **Continue with GitHub**.
3. Allow Vercel to access your GitHub account when prompted.
4. Once logged in, click **Add New** → **Project**.
5. You will see a list of your GitHub repositories. Find `portfolio-website` and click **Import**.

### Step 5.2: Configure the project

1. **Framework Preset**: Vercel should detect Next.js automatically. Leave it as is.
2. **Root Directory**: Leave as `.` (current folder).
3. **Build Command**: Leave default (`npm run build`).
4. **Output Directory**: Leave default (Next.js handles this).
5. **Environment Variables**: Skip for now. (Only needed if you add a GitHub token later for the Proof of Work section.)

Click **Deploy**.

### Step 5.3: Wait for the build

- Vercel will build your site (usually 1–2 minutes).
- When done, you will see a success message and a URL like `https://portfolio-website-xxxx.vercel.app`.
- Click the URL to open your live site.

---

## Part 6: Optional - Add a Custom Domain

If you own a domain (e.g. `rajvizala.com`):

1. In your Vercel project, go to **Settings** → **Domains**.
2. Enter your domain and click **Add**.
3. Follow Vercel’s instructions to update your domain’s DNS (usually by adding a CNAME or A record at your registrar).

---

## Part 7: Optional - Environment Variables (Proof of Work)

The Proof of Work section fetches your GitHub pull requests. Without a token, it works but may hit rate limits. To add a token:

1. Create a GitHub Personal Access Token:
   - GitHub → Settings → Developer settings → Personal access tokens
   - Generate new token (classic)
   - Select the `public_repo` scope
2. In Vercel: **Project** → **Settings** → **Environment Variables**
3. Add:
   - **Name**: `GITHUB_TOKEN`
   - **Value**: your token
4. Redeploy: **Deployments** → three dots on latest → **Redeploy**.

---

## Part 8: Updating Your Site After Changes

1. Edit your code locally.
2. In the project folder, run:
   ```
   git add .
   git commit -m "Describe your changes"
   git push
   ```
3. Vercel will automatically detect the push and deploy a new version. Check the **Deployments** tab in your Vercel project.

---

## Quick Reference

| Task | Command |
|------|---------|
| Install dependencies | `npm install` |
| Run locally | `npm run dev` |
| Build for production | `npm run build` |
| First-time Git setup | `git init` → `git add .` → `git commit -m "message"` |
| Push updates | `git add .` → `git commit -m "message"` → `git push` |

---

## Troubleshooting

**Build fails on Vercel**

- Check the build log in the Vercel dashboard.
- Run `npm run build` locally and fix any errors shown.
- Ensure all required files are committed (no important files in `.gitignore`).

**Site shows old content**

- Vercel deploys on every push. Make sure you ran `git push`.
- Wait 1–2 minutes and refresh the page.
- Clear your browser cache.

**Git push asks for password**

- GitHub no longer accepts account passwords. Use a Personal Access Token instead (see Part 4.2, step 8).

---

## Summary

1. Test locally: `npm install` → `npm run build` → `npm run dev`
2. Push to GitHub: create repo, then `git init`, `git add .`, `git commit`, `git push`
3. Deploy on Vercel: import from GitHub, click Deploy
4. Visit your live URL and share it
