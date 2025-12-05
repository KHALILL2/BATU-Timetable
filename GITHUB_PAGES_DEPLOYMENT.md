# 🚀 GitHub Pages Deployment Guide

## ✅ Pre-Deployment Checklist

Your website is **100% ready** for GitHub Pages! No modifications needed.

### Verified Compatibility:
- ✅ Static HTML/CSS/JavaScript only
- ✅ No server-side code (PHP, Node.js, Python)
- ✅ No database dependencies
- ✅ index.html in root directory
- ✅ All assets use relative paths
- ✅ Bootstrap & Font Awesome included locally
- ✅ File size under GitHub limits

---

## 📦 Deployment Steps

### Method 1: Command Line (Recommended)

```powershell
# 1. Navigate to project folder
cd "c:\.vscode\BATU timeable"

# 2. Initialize Git (if not already done)
git init

# 3. Add all files
git add .

# 4. Create initial commit
git commit -m "Initial commit: BATU IT Timetable Website"

# 5. Create repository on GitHub (via browser), then:
git remote add origin https://github.com/YOUR-USERNAME/batu-it-timetable.git

# 6. Push to GitHub
git branch -M main
git push -u origin main
```

### Method 2: GitHub Desktop (Easier)

1. Open **GitHub Desktop**
2. Click **File** → **Add Local Repository**
3. Browse to `c:\.vscode\BATU timeable`
4. Click **Publish Repository**
5. Choose repository name (e.g., `batu-it-timetable`)
6. Uncheck "Keep this code private" (for free GitHub Pages)
7. Click **Publish**

---

## 🌐 Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 2-5 minutes for deployment

Your site will be live at:
```
https://YOUR-USERNAME.github.io/batu-it-timetable/
```

---

## 🔧 Post-Deployment Updates

### Update README.md
Replace this line in README.md:
```markdown
**Live Site:** [Will add GitHub Pages link here]
```
With:
```markdown
**Live Site:** https://YOUR-USERNAME.github.io/batu-it-timetable/
```

### Future Updates
```powershell
# Make changes to files, then:
git add .
git commit -m "Describe your changes"
git push
```

Changes will appear on your live site in 2-5 minutes.

---

## 📱 Custom Domain (Optional)

If you want a custom domain (e.g., batu-timetable.com):

1. Buy domain from any registrar (Namecheap, GoDaddy, etc.)
2. In repository Settings → Pages → Custom domain
3. Enter your domain name
4. Configure DNS records at your registrar:
   ```
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```

---

## 🐛 Troubleshooting

### Site Not Loading?
- Wait 5-10 minutes after enabling Pages
- Check Settings → Pages for deployment status
- Verify `index.html` is in root directory

### 404 Error on Refresh?
- GitHub Pages works fine with your setup (all links are relative)
- Internal navigation should work perfectly

### Images/CSS Not Loading?
- Already fixed! Your site uses relative paths (e.g., `css/main.css`, not `/css/main.css`)
- All assets load correctly on GitHub Pages

### Still Having Issues?
- Check repository is **Public** (required for free GitHub Pages)
- Verify branch name is `main` (not `master`)
- Clear browser cache (Ctrl+Shift+Delete)

---

## 📊 Expected Performance

### Load Times:
- **Homepage:** ~500ms (fast)
- **Year Pages:** ~300ms (very fast)
- **Assets:** Cached after first visit

### Storage:
- **Total Size:** ~5-10 MB (well under GitHub's 1GB limit)
- **File Count:** ~30 files
- **Bandwidth:** Unlimited on GitHub Pages (for reasonable use)

---

## 🎯 Best Practices

### Keep Your Site Fast:
- ✅ Already optimized: Local Bootstrap/Font Awesome files
- ✅ Minimal JavaScript (no heavy frameworks)
- ✅ Compressed images (if needed, optimize PNGs)

### Version Control:
```powershell
# Before making changes:
git pull  # Get latest version

# After changes:
git add .
git commit -m "Descriptive message"
git push
```

### Backup:
- GitHub serves as your backup
- Clone repository to any computer:
  ```powershell
  git clone https://github.com/YOUR-USERNAME/batu-it-timetable.git
  ```

---

## 🌟 Share Your Site

Once deployed, share with classmates:
- Direct link: `https://YOUR-USERNAME.github.io/batu-it-timetable/`
- QR code generator: Use any online tool with your URL
- WhatsApp/Social media: Post the link
- Email signature: Add as a resource

---

## 📞 Support

If you need help:
1. Check [GitHub Pages Documentation](https://docs.github.com/en/pages)
2. Review this guide's troubleshooting section
3. Check your repository's Actions tab for deployment logs

---

**Ready to deploy? Follow the steps above and your site will be live in minutes! 🚀**
