# Sollu Frontend - Netlify Deployment Guide

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Method 1: Deploy via Netlify UI (Recommended for Beginners)](#method-1-deploy-via-netlify-ui)
3. [Method 2: Deploy via Netlify CLI](#method-2-deploy-via-netlify-cli)
4. [Method 3: Deploy via GitHub Integration (Best for Continuous Deployment)](#method-3-deploy-via-github-integration)
5. [Post-Deployment Configuration](#post-deployment-configuration)
6. [Custom Domain Setup](#custom-domain-setup)
7. [Environment Variables](#environment-variables)
8. [Troubleshooting](#troubleshooting)

---

## Pre-Deployment Checklist

### 1. Security Verification
Before deploying, ensure you've completed these security steps:

- [x] **No sensitive data in repository** - ✅ Verified clean
- [x] **Environment variables protected** - `.env` files in `.gitignore`
- [x] **Demo contact information labeled** - Footer comment added
- [x] **Netlify configuration ready** - `netlify.toml` created
- [ ] **Replace demo contact information** - Update `components/Footer.tsx` with real contact details

### 2. Update Contact Information (IMPORTANT!)

Before deploying to production, update the contact information in `components/Footer.tsx`:

```typescript
// Line 33-37 in components/Footer.tsx
<ul className="space-y-2 text-gray-400">
    <li>Email: your-real-email@sollu.com</li>
    <li>Telefone: (XX) XXXXX-XXXX</li>
    <li>Your Real Address - City, State</li>
</ul>
```

### 3. Test Build Locally

```bash
# Install dependencies
npm install

# Run production build
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:4173` to verify the production build works correctly.

---

## Method 1: Deploy via Netlify UI

**Best for:** First-time deployment, quick setup

### Step 1: Create Netlify Account

1. Go to [https://www.netlify.com](https://www.netlify.com)
2. Click **Sign up** in the top right
3. Choose one of:
   - Sign up with **GitHub** (recommended)
   - Sign up with **GitLab**
   - Sign up with **Bitbucket**
   - Sign up with **Email**

### Step 2: Prepare Your Build

```bash
# Navigate to your project directory
cd C:\Users\kumpe\Github\SolluFront

# Ensure dependencies are installed
npm install

# Test the build locally
npm run build
```

This creates a `dist/` folder with your production-ready files.

### Step 3: Manual Deploy (Drag & Drop)

1. Log in to Netlify
2. Click **Add new site** → **Deploy manually**
3. **Drag and drop** the `dist/` folder onto the upload area
4. Wait for deployment to complete (usually 10-30 seconds)
5. Netlify will provide a random URL like `https://random-name-123456.netlify.app`

**Pros:**
- Fastest way to get online
- No Git required

**Cons:**
- Manual redeployment needed for updates
- No automatic deployments

---

## Method 2: Deploy via Netlify CLI

**Best for:** Developers who prefer command-line tools

### Step 1: Install Netlify CLI

```bash
# Install globally
npm install -g netlify-cli

# Verify installation
netlify --version
```

### Step 2: Login to Netlify

```bash
netlify login
```

This opens a browser window for authentication.

### Step 3: Initialize Netlify Site

```bash
# Navigate to project directory
cd C:\Users\kumpe\Github\SolluFront

# Initialize Netlify
netlify init
```

Follow the prompts:
- **Create & configure a new site**
- Choose your team
- Enter site name (or leave blank for random)
- Build command: `npm run build`
- Publish directory: `dist`

### Step 4: Deploy to Production

```bash
# Deploy to production
netlify deploy --prod
```

Or use the shortcut:

```bash
# Build and deploy in one command
npm run build && netlify deploy --prod --dir=dist
```

### Step 5: Open Your Site

```bash
netlify open:site
```

---

## Method 3: Deploy via GitHub Integration

**Best for:** Continuous deployment, team collaboration

### Step 1: Push to GitHub

If not already done:

```bash
# Initialize git (if needed)
git init

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/SolluFront.git

# Add all files
git add .

# Commit
git commit -m "Prepare for Netlify deployment"

# Push to GitHub
git push -u origin main
```

### Step 2: Connect Netlify to GitHub

1. Log in to [Netlify](https://app.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. Click **GitHub** (authorize if prompted)
4. Search for `SolluFront` repository
5. Click on your repository

### Step 3: Configure Build Settings

Netlify will auto-detect settings from `netlify.toml`, but verify:

- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Base directory:** (leave empty)

Click **Deploy site**

### Step 4: Automatic Deployments

From now on:
- Every push to `main` branch automatically deploys
- Pull requests create deploy previews
- View deploy status in Netlify dashboard

**Deploy Preview URLs:**
- Production: `https://your-site-name.netlify.app`
- Branch deploys: `https://branch-name--your-site-name.netlify.app`
- PR previews: `https://deploy-preview-123--your-site-name.netlify.app`

---

## Post-Deployment Configuration

### 1. Change Site Name

Default: `random-name-123456.netlify.app`

**Via UI:**
1. Go to **Site settings** → **General** → **Site details**
2. Click **Change site name**
3. Enter new name (e.g., `sollu-financial`)
4. New URL: `https://sollu-financial.netlify.app`

**Via CLI:**
```bash
netlify sites:update --name sollu-financial
```

### 2. Enable HTTPS

HTTPS is **automatically enabled** by Netlify. No action needed.

### 3. Review Security Headers

Your `netlify.toml` already includes:
- ✅ X-Frame-Options (clickjacking protection)
- ✅ X-Content-Type-Options (MIME sniffing protection)
- ✅ Content-Security-Policy (XSS protection)
- ✅ Permissions-Policy (browser feature restrictions)

Verify headers at: [https://securityheaders.com](https://securityheaders.com)

### 4. Configure Redirects

Already configured in `netlify.toml`:
- All routes redirect to `index.html` for SPA routing
- No additional configuration needed

---

## Custom Domain Setup

### Option 1: Use Netlify Subdomain (Free)

Your site is automatically available at:
```
https://your-site-name.netlify.app
```

### Option 2: Add Custom Domain

**Prerequisites:**
- Own a domain (e.g., `sollu.com`)
- Access to domain DNS settings

#### Step-by-Step:

1. **In Netlify Dashboard:**
   - Go to **Site settings** → **Domain management**
   - Click **Add custom domain**
   - Enter your domain (e.g., `sollu.com` or `www.sollu.com`)
   - Click **Verify**

2. **Configure DNS:**

   Netlify will show you DNS records to add. Choose one option:

   **Option A: Netlify DNS (Recommended)**
   - Transfer your domain's nameservers to Netlify
   - Netlify manages all DNS records
   - Automatic SSL certificate provisioning

   **Option B: External DNS**
   Add these records to your DNS provider:

   ```
   Type  Name             Value
   A     @                75.2.60.5
   CNAME www              your-site-name.netlify.app
   ```

   Or if using subdomain:
   ```
   Type  Name             Value
   CNAME pay              your-site-name.netlify.app
   CNAME conta            your-site-name.netlify.app
   ```

3. **Wait for DNS Propagation:**
   - Usually takes 1-48 hours
   - Check status: `nslookup sollu.com`

4. **Enable HTTPS:**
   - Netlify automatically provisions SSL certificate (Let's Encrypt)
   - Once DNS propagates, HTTPS is automatically enabled

5. **Force HTTPS:**
   - Go to **Site settings** → **Domain management**
   - Under **HTTPS**, enable **Force HTTPS**

### Domain Strategy (from CLAUDE.md)

Based on your product lineup:

```
Main Site:        sollu.com
SolluPay:         sollu.com/sollupay  OR  pay.sollu.com
Sollu Conta:      sollu.com/solluconta OR  conta.sollu.com
BlindaSollu:      blindasollu.com (separate brand)
Sollu Micro:      sollu.com/sollumicro OR  micro.sollu.com
Sollu Invest:     sollu.com/solluinvest OR invest.sollu.com
```

---

## Environment Variables

### Currently: No Environment Variables Needed

This is a frontend-only application with no API calls. However, for future use:

### Adding Environment Variables in Netlify:

1. Go to **Site settings** → **Build & deploy** → **Environment variables**
2. Click **Add a variable**
3. Enter key-value pairs:

   ```
   VITE_API_URL=https://api.sollu.com
   VITE_GA_TRACKING_ID=GA-XXXXXXXXX
   ```

4. Click **Save**

**Important:** All Vite environment variables must start with `VITE_`

### For Different Environments:

- **Production:** Set in Netlify UI under Environment Variables
- **Preview/Deploy Preview:** Can set different values per context
- **Local Development:** Use `.env.local` (already in `.gitignore`)

Reference: `.env.example` in project root

---

## Troubleshooting

### Build Fails: "Command not found"

**Problem:** Netlify can't find `npm` or build command

**Solution:**
1. Check `netlify.toml` has correct build command
2. Ensure `package.json` has `build` script
3. Verify Node version compatibility

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### 404 Error on Routes

**Problem:** Refreshing page on routes like `/sollupay` shows 404

**Solution:** Already fixed in `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

If still having issues:
1. Ensure `netlify.toml` is in project root
2. Clear Netlify cache: **Deploys** → **Trigger deploy** → **Clear cache and deploy**

### Build Succeeds but Site is Blank

**Problem:** White screen or blank page

**Solution:**

1. **Check browser console** for errors (F12)
2. **Verify base path** in `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/', // Should be '/' for root domain
   })
   ```
3. **Check Tailwind CSS loading** - verify CDN in `index.html`

### Slow Initial Load

**Problem:** First page load takes too long

**Solutions:**

1. **Replace Tailwind CDN with built CSS:**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Optimize images:**
   - Convert to WebP format
   - Use lazy loading
   - Compress images

3. **Enable Netlify Performance Features:**
   - Asset optimization (automatic)
   - Image optimization (Pro plan)
   - Prerendering (optional)

### Custom Domain Not Working

**Problem:** Domain shows DNS error

**Solution:**

1. **Check DNS propagation:**
   ```bash
   nslookup your-domain.com
   ```

2. **Verify DNS records:**
   - Must point to Netlify nameservers or IP
   - CNAME must point to Netlify subdomain

3. **Wait longer:**
   - DNS can take up to 48 hours
   - Some ISPs cache DNS longer

4. **Check Netlify status:**
   - [https://www.netlifystatus.com](https://www.netlifystatus.com)

### SSL Certificate Not Provisioning

**Problem:** HTTPS shows "Not Secure"

**Solution:**

1. Ensure DNS is properly configured and propagated
2. Go to **Site settings** → **Domain management** → **HTTPS**
3. Click **Verify DNS configuration**
4. If DNS is correct, click **Renew certificate**
5. Wait 5-10 minutes for provisioning

---

## Monitoring & Analytics

### Netlify Analytics (Optional, Paid)

1. Go to **Site settings** → **Analytics**
2. Enable **Netlify Analytics**
3. View traffic without JavaScript tracking

### Google Analytics (Free)

When ready to add analytics:

1. Add to `.env.local`:
   ```
   VITE_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

2. Add to `index.html` or create tracking component

3. Set in Netlify environment variables for production

---

## Performance Optimization

### After Deployment:

1. **Run Lighthouse Audit:**
   - Open site in Chrome
   - F12 → Lighthouse tab
   - Run audit
   - Address recommendations

2. **Check Load Time:**
   - [https://pagespeed.web.dev](https://pagespeed.web.dev)
   - Enter your Netlify URL
   - Review performance score

3. **Monitor Core Web Vitals:**
   - Netlify provides analytics
   - Google Search Console (after adding domain)

### Optimization Tips:

- Replace Tailwind CDN with build-time CSS
- Optimize images (use WebP, lazy loading)
- Code splitting (if app grows larger)
- Enable prerendering for SEO

---

## Cost Estimate

### Netlify Pricing:

**Free Tier (Starter):**
- ✅ 300 build minutes/month
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Continuous deployment
- ✅ Deploy previews
- ✅ Custom domain (1)

**This project fits comfortably in free tier for:**
- Small to medium traffic (< 100k visitors/month)
- Personal projects
- MVPs and prototypes

**Paid Plans ($19-49/month):**
- Needed for: High traffic, team collaboration, advanced features
- Not required initially

---

## Quick Reference Commands

```bash
# Local development
npm install          # Install dependencies
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run preview      # Preview production build

# Netlify CLI
netlify login        # Login to Netlify
netlify init         # Initialize new site
netlify deploy       # Deploy to draft URL
netlify deploy --prod # Deploy to production
netlify open         # Open Netlify dashboard
netlify open:site    # Open live site

# Git workflow
git add .            # Stage changes
git commit -m "msg"  # Commit changes
git push             # Push to GitHub (triggers auto-deploy)
```

---

## Security Checklist

Before going live:

- [ ] Replace demo contact information in Footer
- [ ] Review all text content for accuracy
- [ ] Test all internal links work
- [ ] Test form submissions (when added)
- [ ] Verify no console errors in production
- [ ] Check mobile responsiveness
- [ ] Test dark/light theme toggle
- [ ] Run security headers check: [securityheaders.com](https://securityheaders.com)
- [ ] Run SSL test: [ssllabs.com](https://www.ssllabs.com/ssltest/)
- [ ] Add privacy policy page (when collecting data)
- [ ] Add terms of service page

---

## Next Steps After Deployment

1. **Set up continuous deployment** (Method 3)
2. **Configure custom domain** (if owned)
3. **Add Google Analytics** (for traffic monitoring)
4. **Create product pages** (see CLAUDE.md strategy)
5. **Install React Router** for multi-page navigation
6. **Set up form handling** (Netlify Forms or external service)
7. **Implement blog functionality** (currently static)
8. **Add SEO meta tags** (per page)
9. **Create sitemap.xml** for search engines
10. **Submit to Google Search Console**

---

## Support & Resources

- **Netlify Documentation:** https://docs.netlify.com
- **Netlify Community:** https://answers.netlify.com
- **Vite Documentation:** https://vitejs.dev
- **React Documentation:** https://react.dev
- **This Project Strategy:** See `CLAUDE.md` for product page deployment plan

---

## Deployment Summary

**Your repository is now production-ready with:**

✅ **Security:** No sensitive data, environment variables protected
✅ **Configuration:** Netlify config with security headers
✅ **Build Script:** Verified `npm run build` works
✅ **SPA Routing:** Redirects configured for single-page app
✅ **Performance:** Optimized cache headers for assets
✅ **HTTPS:** Automatic SSL certificate provisioning
✅ **Documentation:** This comprehensive deployment guide

**Choose your deployment method above and get live in under 10 minutes!**

---

**Last Updated:** October 2025
**Version:** 1.0
**Maintainer:** See project README
