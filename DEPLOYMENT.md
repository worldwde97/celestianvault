# Deployment Guide - CelestianVault

## Project Information

- **Local Directory**: `D:\celestianwallet`
- **GitHub Repository**: https://github.com/truetgbots/celestianvault
- **Vercel Project**: https://vercel.com/celestteam/celestianvault
- **Production URL**: (your Vercel domain)

## Git Configuration

The project uses the following git configuration:

```bash
Git User: truetgbots
Git Email: truetgbots@users.noreply.github.com
```

## Git Remotes

- **truetgbots** (production): https://github.com/truetgbots/celestianvault.git
- **origin** (backup): https://github.com/worldwde97/celestianvault.git

---

## Standard Deployment Workflow

### 1. Make Your Changes

Edit files as needed in the project directory.

### 2. Check Status

```bash
git status
```

This shows which files have been modified.

### 3. Add Changes

**Add all changes:**
```bash
git add .
```

**Or add specific files:**
```bash
git add path/to/file.js
```

### 4. Commit Changes

```bash
git commit -m "Your commit message describing changes"
```

**Good commit message examples:**
- `git commit -m "Add new feature: user dashboard"`
- `git commit -m "Fix: registration form validation"`
- `git commit -m "Update: home page hero section"`
- `git commit -m "Style: improve mobile responsiveness"`

### 5. Push to GitHub

**Push to production repository (truetgbots):**
```bash
git push truetgbots main
```

**Optional - also push to backup repository:**
```bash
git push origin main
```

### 6. Verify Deployment

1. Go to https://vercel.com/celestteam/celestianvault/deployments
2. Wait for deployment to complete (~1-2 minutes)
3. Check your live site

---

## Quick Deploy Commands (Copy-Paste)

### Standard deployment:
```bash
git add .
git commit -m "Update: describe your changes"
git push truetgbots main
```

### Deploy to both repositories:
```bash
git add .
git commit -m "Update: describe your changes"
git push truetgbots main && git push origin main
```

---

## Common Scenarios

### Scenario 1: Updated Multiple Files

```bash
git add .
git commit -m "Update: improved UI and fixed bugs"
git push truetgbots main
```

### Scenario 2: Added New Feature

```bash
git add .
git commit -m "Add: new payment integration feature"
git push truetgbots main
```

### Scenario 3: Fixed a Bug

```bash
git add .
git commit -m "Fix: resolved login redirect issue"
git push truetgbots main
```

### Scenario 4: Changed Brand/Design

```bash
git add .
git commit -m "Style: updated color scheme and branding"
git push truetgbots main
```

### Scenario 5: Trigger Deploy Without Changes

```bash
git commit --allow-empty -m "Deploy: trigger rebuild"
git push truetgbots main
```

---

## Changing Brand Name

The brand name is centralized in one file for easy updates:

**File**: `config/brand.js`

```javascript
export const BRAND_NAME = 'CelestianVault';

export const SITE_CONFIG = {
  name: BRAND_NAME,
  tagline: 'Secure Multi Crypto Wallet',
  description: 'Safely store and swap your cryptocurrency',
};
```

**To change the brand name:**

1. Edit `config/brand.js`
2. Change `BRAND_NAME` value
3. Save the file
4. Deploy:
   ```bash
   git add config/brand.js
   git commit -m "Update: changed brand name to [NewName]"
   git push truetgbots main
   ```

---

## Troubleshooting

### Issue: Changes not appearing on live site

**Solution 1: Clear cache**
- Press `Ctrl + Shift + R` (hard reload)
- Or open in incognito mode

**Solution 2: Force redeploy on Vercel**
1. Go to https://vercel.com/celestteam/celestianvault/deployments
2. Click on latest deployment
3. Click "..." → "Redeploy"
4. Uncheck "Use existing Build Cache"
5. Click "Redeploy"

### Issue: Git push rejected

**Solution:**
```bash
git pull truetgbots main
git push truetgbots main
```

### Issue: Vercel not auto-deploying

**Check:**
1. Vercel → Settings → Git → Production Branch = `main`
2. Commit author email matches GitHub account
3. Repository is connected correctly

**Quick fix:**
```bash
git commit --allow-empty -m "Trigger deploy"
git push truetgbots main
```

---

## Useful Git Commands

### View commit history:
```bash
git log --oneline -10
```

### View changes before committing:
```bash
git diff
```

### Undo last commit (keep changes):
```bash
git reset --soft HEAD~1
```

### Check which remote repositories are configured:
```bash
git remote -v
```

### View current branch:
```bash
git branch
```

---

## Security Notes

- Never commit `.env` files with sensitive data
- Git tokens should be kept private
- Use `.gitignore` to exclude sensitive files

---

## Additional Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Git Documentation**: https://git-scm.com/doc
- **Next.js Documentation**: https://nextjs.org/docs

---

**Last Updated**: December 29, 2024
